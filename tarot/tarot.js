// 2. KLASICKÝ TAROT A AI VĚŠTEC
// ==========================================

const API_URL = 'https://script.google.com/macros/s/AKfycbzg2YNckMcLzo5Z2bVbonXMHTJXInJfR1M4BsXhWE0CrbUTQ9cht2YOSSfg-Wkhl_nT/exec';

// ── Lokalizace ────────────────────────────────────────────────
let TAROT_LANG = 'cs';

const TAROT_STRINGS = {
  cs: {
    positions:    ['Minulost', 'Přítomnost', 'Budoucnost'],
    upright:      'Přímá pozice',
    reversed:     'Obrácená pozice',
    drawBtn:      'Vytáhnout 3 karty',
    loading:      'Karty se míchají...',
    loadError:    'Nepodařilo se načíst karty.',
    aiListening:  '<i>Hlas Oracoolia naslouchá hvězdám...</i>',
    aiError:      'Spojení s astrální sférou selhalo.',
    aiTitle:      '✨ Hlas Oracoolia ✨',
    h1:           'Klasický Tarot',
    subtitle:     'Zeptejte se karet na svou cestu',
    back:         '← Zpět do Oracoolia',
    altBack:      'Rub karty',
  },
  en: {
    positions:    ['Past', 'Present', 'Future'],
    upright:      'Upright',
    reversed:     'Reversed',
    drawBtn:      'Draw 3 cards',
    loading:      'Shuffling the cards...',
    loadError:    'Failed to load the cards.',
    aiListening:  '<i>The Oracle is listening to the stars...</i>',
    aiError:      'Connection to the astral sphere has failed.',
    aiTitle:      '✨ The Oracle Speaks ✨',
    h1:           'Classic Tarot',
    subtitle:     'Ask the cards about your path',
    back:         '← Back to Oracoolio',
    altBack:      'Card back',
  }
};

function T(key) {
  return TAROT_STRINGS[TAROT_LANG][key];
}

function setLang(lang) {
  TAROT_LANG = lang;
  if (typeof setGlobalLang === 'function') setGlobalLang(lang);
  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? 'Tarot — 3-Card Reading | Oracoolio'
    : 'Tarot — Výklad ze 3 karet | Oracoolio';
  // Lang buttons
  const cs = document.getElementById('btn-lang-cs');
  const en = document.getElementById('btn-lang-en');
  if (cs) cs.classList.toggle('active', lang === 'cs');
  if (en) en.classList.toggle('active', lang === 'en');
  // Static data-cs/data-en elements
  document.querySelectorAll('[data-cs]').forEach(el => {
    const val = lang === 'en' ? el.dataset.en : el.dataset.cs;
    if (val !== undefined) el.textContent = val;
  });
  // Position titles
  const posTitles = document.querySelectorAll('.position-title');
  T('positions').forEach((pos, i) => { if (posTitles[i]) posTitles[i].textContent = pos; });
  // Draw button
  const btn = document.getElementById('draw-btn');
  if (btn) btn.textContent = T('drawBtn');
}

let tarotDeck = [];const drawBtn = document.getElementById('draw-btn');
const loadingDiv = document.getElementById('loading');
const tarotBoard = document.getElementById('tarot-board');

async function loadCards() {
    drawBtn.classList.add('hidden');
    loadingDiv.classList.remove('hidden');
    loadingDiv.textContent = T('loading');

    try {
        const response = await fetch(API_URL);
        tarotDeck = await response.json();
        loadingDiv.classList.add('hidden');
        drawBtn.classList.remove('hidden');
        drawBtn.textContent = T('drawBtn');
    } catch (error) {
        console.error("Chyba při stahování karet:", error);
        loadingDiv.textContent = T('loadError');
    }
}

function drawCard() {
    if (tarotDeck.length < 3) return;

    const readingTextContainer = document.getElementById('reading-text');
    const aiContainer = document.getElementById('ai-reading-container');
    const aiTextEl = document.getElementById('ai-text-content');
    
    readingTextContainer.innerHTML = '';
    readingTextContainer.classList.add('hidden');
    aiContainer.classList.add('hidden');
    aiTextEl.innerHTML = '';
    
    for(let i = 1; i <= 3; i++) {
        document.getElementById(`card${i}-inner`).classList.remove('is-flipped');
    }

    setTimeout(() => {
        tarotBoard.classList.remove('hidden');

        let deckCopy = [...tarotDeck];
        let drawnCards = [];
        for(let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * deckCopy.length);
            drawnCards.push(deckCopy.splice(randomIndex, 1)[0]); 
        }

        const positions = T('positions');
        let htmlContent = ""; 
        let kartyProAI = []; 

        drawnCards.forEach((card, index) => {
            const num = index + 1; 
            const isReversed = Math.random() < 0.5;
            const imgEl = document.getElementById(`card${num}-img`);
            imgEl.src = '../assets/' + card.image;
            
            let posText, keywords, meaning;
            if (isReversed) {
                imgEl.classList.add('reversed-card');
                posText = T('reversed');
                keywords = card.keywords_reversed;
                meaning = card.meaning_reversed_general;
            } else {
                imgEl.classList.remove('reversed-card');
                posText = T('upright');
                keywords = card.keywords_upright;
                meaning = card.meaning_upright_general;
            }

            kartyProAI.push(`${card.name_cz} (${posText})`);

            htmlContent += `
                <div class="reading-block">
                    <h4>${positions[index]}: ${card.name_cz}</h4>
                    <div class="meta-info">${posText} | ${keywords}</div>
                    <p>${meaning}</p>
                </div>
            `;

            setTimeout(() => {
                document.getElementById(`card${num}-inner`).classList.add('is-flipped');
            }, num * 500); 
        });

        readingTextContainer.innerHTML = htmlContent;
        
        setTimeout(() => {
            readingTextContainer.classList.remove('hidden');
            
            aiContainer.classList.remove('hidden');
            aiTextEl.innerHTML = T('aiListening');

            const kartyString = encodeURIComponent(kartyProAI.join(", "));
            const fetchUrl = `${API_URL}?action=reading&cards=${kartyString}&lang=${TAROT_LANG}`;

            fetch(fetchUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.reading) {
                        typeWriterEffect(data.reading, 'ai-text-content', 40);
                    }
                })
                .catch(err => {
                    aiTextEl.innerHTML = T('aiError');
                });

        }, 2200);

    }, 400); 
}

function typeWriterEffect(text, elementId, speed = 35) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    el.classList.add("cursor-blink");
    let cleanText = text.replace(/\*\*/g, ''); 
    const chars = Array.from(cleanText); 
    let i = 0;
    function type() {
        if (i < chars.length) {
            if (chars[i] === '\n') {
                el.innerHTML += '<br>';
            } else {
                el.innerHTML += chars[i];
            }
            i++;
            setTimeout(type, speed);
        } else {
            el.classList.remove("cursor-blink"); 
        }
    }
    type();
}

if (drawBtn) {
    drawBtn.addEventListener('click', drawCard);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof getLang === 'function') setLang(getLang());
    loadCards();
});

// ==========================================
