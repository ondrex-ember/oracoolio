// ==========================================
// 1. NAVIGACE ORACOOLIO (Rozcestník)
// ==========================================

function showApp(appId) {
    const appContainer = document.querySelector('.app-container');

    // Skryjeme všechno
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('tarot-section').classList.add('hidden');
    document.getElementById('iching-section').classList.add('hidden');
    document.getElementById('solitaire-section').classList.add('hidden');
    document.getElementById('karolky-section').classList.add('hidden');

    if (appId === 'karolky') {
        // Karolky II potřebuje celou obrazovku — schovej app-container úplně
        appContainer.style.display = 'none';
        document.getElementById('karolky-section').classList.remove('hidden');
        if (typeof kpNewGame === 'function') kpNewGame();
    } else {
        // Všechny ostatní sekce žijí uvnitř app-containeru
        appContainer.style.display = '';
        if (appId === 'tarot') {
            document.getElementById('tarot-section').classList.remove('hidden');
        } else if (appId === 'iching') {
            document.getElementById('iching-section').classList.remove('hidden');
        } else if (appId === 'solitaire') {
            document.getElementById('solitaire-section').classList.remove('hidden');
            if (typeof initSolitaire === 'function') initSolitaire();
        }
    }
}

function backToDashboard() {
    const appContainer = document.querySelector('.app-container');
    // Vždy obnov app-container (mohl být schovaný kvůli Karolky II)
    appContainer.style.display = '';

    document.getElementById('tarot-section').classList.add('hidden');
    document.getElementById('iching-section').classList.add('hidden');
    document.getElementById('solitaire-section').classList.add('hidden');
    document.getElementById('karolky-section').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
}

// ==========================================
// 2. KLASICKÝ TAROT A AI VĚŠTEC
// ==========================================

const API_URL = 'https://script.google.com/macros/s/AKfycbzg2YNckMcLzo5Z2bVbonXMHTJXInJfR1M4BsXhWE0CrbUTQ9cht2YOSSfg-Wkhl_nT/exec';

let tarotDeck = [];

const drawBtn = document.getElementById('draw-btn');
const loadingDiv = document.getElementById('loading');
const tarotBoard = document.getElementById('tarot-board');

async function loadCards() {
    drawBtn.classList.add('hidden');
    loadingDiv.classList.remove('hidden');

    try {
        const response = await fetch(API_URL);
        tarotDeck = await response.json();
        console.log("Karty úspěšně načteny:", tarotDeck);
        loadingDiv.classList.add('hidden');
        drawBtn.classList.remove('hidden');
    } catch (error) {
        console.error("Chyba při stahování karet:", error);
        loadingDiv.innerText = "Nepodařilo se načíst karty.";
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

        const positions = ["Minulost", "Přítomnost", "Budoucnost"];
        let htmlContent = ""; 
        let kartyProAI = []; 

        drawnCards.forEach((card, index) => {
            const num = index + 1; 
            const isReversed = Math.random() < 0.5;
            const imgEl = document.getElementById(`card${num}-img`);
            imgEl.src = 'assets/' + card.image;
            
            let posText, keywords, meaning;
            if (isReversed) {
                imgEl.classList.add('reversed-card');
                posText = "Obrácená pozice";
                keywords = card.keywords_reversed;
                meaning = card.meaning_reversed_general;
            } else {
                imgEl.classList.remove('reversed-card');
                posText = "Přímá pozice";
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
            aiTextEl.innerHTML = "<i>Hlas Oracoolia naslouchá hvězdám...</i>";

            const kartyString = encodeURIComponent(kartyProAI.join(", "));
            const fetchUrl = `${API_URL}?action=reading&cards=${kartyString}`;

            fetch(fetchUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.reading) {
                        typeWriterEffect(data.reading, 'ai-text-content', 40);
                    }
                })
                .catch(err => {
                    aiTextEl.innerHTML = "Spojení s astrální sférou selhalo.";
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
loadCards();

// ==========================================
// 3. I-ŤING LOGIKA A MECHANIKA
// ==========================================

let hodCislo = 0;
let hexagramVysledek = [];

function tossCoins() {
    if (hodCislo >= 6) return;

    const btn = document.getElementById('toss-btn');
    const instruction = document.getElementById('iching-instruction');
    const coins = [document.getElementById('coin1'), document.getElementById('coin2'), document.getElementById('coin3')];
    
    btn.disabled = true;
    
    coins.forEach(coin => {
        coin.classList.remove('tossing');
        void coin.offsetWidth; 
        coin.classList.add('tossing');
    });

    setTimeout(() => {
        let hodnotaHodu = 0;
        
        coins.forEach(coin => {
            const isYang = Math.random() > 0.5;
            const img = coin.querySelector('img');
            if (isYang) {
                img.src = 'assets/coin_yang.png';
                hodnotaHodu += 3;
            } else {
                img.src = 'assets/coin_yin.png';
                hodnotaHodu += 2;
            }
        });

        hexagramVysledek.push(hodnotaHodu);
        hodCislo++;
        pridejCaruHexagramu(hodnotaHodu);
        
        if (hodCislo < 6) {
            instruction.innerText = `Soustřeď se na svou otázku a hoď mincemi (Hod ${hodCislo + 1} z 6)`;
            btn.disabled = false;
        } else {
            instruction.innerText = "Hexagram je dokončen. Věštec čte v Knize proměn...";
            btn.classList.add('hidden');
            coins.forEach(c => c.classList.add('hidden'));
            
            const resultContainer = document.getElementById('iching-reading-container');
            const resultTextEl = document.getElementById('iching-text-content');
            
            const binaryString = hexagramVysledek.map(hod => (hod === 7 || hod === 9) ? '1' : '0').join('');
            const cisloHexagramu = ziskejCisloHexagramu(binaryString);
            
            resultContainer.classList.remove('hidden');
            const dataHexagramu = ichingTexts[cisloHexagramu];
            
            if (dataHexagramu) {
                resultTextEl.innerHTML = `
                    <h4 style="color: #d4b483; font-size: 1.4rem; margin-bottom: 10px;">Hexagram ${cisloHexagramu}: ${dataHexagramu.nazev}</h4>
                    <p style="margin-bottom: 15px;"><strong>Rozsudek:</strong> ${dataHexagramu.rozsudek}</p>
                    <p style="color: #8f8f8f; font-style: italic;"><strong>Obraz:</strong> ${dataHexagramu.obraz}</p>
                `;
            } else {
                resultTextEl.innerHTML = `<strong>Padl vám hexagram číslo ${cisloHexagramu}</strong>.<br><br><span style="color: #8f8f8f;"><em>(Výkladový text se připravuje...)</em></span>`;
            }
        }
        
    }, 800);
}

function pridejCaruHexagramu(hodnota) {
    const builder = document.getElementById('hexagram-builder');
    const div = document.createElement('div');
    div.className = 'hex-line';
    if (hodnota === 7 || hodnota === 9) {
        div.classList.add('yang-line');
        div.innerHTML = `<div class="line-segment"></div>`;
    } else {
        div.classList.add('yin-line');
        div.innerHTML = `<div class="line-segment"></div><div class="line-segment"></div>`;
    }
    builder.appendChild(div);
}

function ziskejCisloHexagramu(binaryStr) {
    const kingWenMap = {
        "111111": 1,  "000000": 2,  "100010": 3,  "010001": 4,  "111010": 5,  "010111": 6,
        "010000": 7,  "000010": 8,  "111011": 9,  "110111": 10, "111000": 11, "000111": 12,
        "101111": 13, "111101": 14, "001000": 15, "000100": 16, "100110": 17, "011001": 18,
        "110000": 19, "000011": 20, "100101": 21, "101001": 22, "000001": 23, "100000": 24,
        "100111": 25, "111001": 26, "100001": 27, "011110": 28, "010010": 29, "101101": 30,
        "001110": 31, "011100": 32, "001111": 33, "111100": 34, "000101": 35, "101000": 36,
        "101011": 37, "110101": 38, "001010": 39, "010100": 40, "110001": 41, "100011": 42,
        "111110": 43, "011111": 44, "000110": 45, "011000": 46, "010110": 47, "011010": 48,
        "101110": 49, "011101": 50, "100100": 51, "001001": 52, "001011": 53, "110100": 54,
        "101100": 55, "001101": 56, "011011": 57, "110110": 58, "010011": 59, "110010": 60,
        "110011": 61, "001100": 62, "101010": 63, "010101": 64
    };
    return kingWenMap[binaryStr] || "Neznámý";
}

// ==========================================
// 4. PŮVODNÍ VĚŠTECKÝ PASIÁNS (Klondike) — beze změny
// ==========================================

let solState = {
    deck: [], stock: [], waste: [],
    foundations: { hearts: [], diamonds: [], clubs: [], spades: [] },
    tableau: [[], [], [], [], [], [], []]
};

const suitsConfig = [
    { suit: 'hearts', symbol: '♥', color: 'red' },
    { suit: 'diamonds', symbol: '♦', color: 'red' },
    { suit: 'clubs', symbol: '♣', color: 'black' },
    { suit: 'spades', symbol: '♠', color: 'black' }
];
const ranksConfig = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function getCardValue(rank) {
    if (rank === 'A') return 1;
    if (rank === 'J') return 11;
    if (rank === 'Q') return 12;
    if (rank === 'K') return 13;
    return parseInt(rank);
}

function initSolitaire() {
    solState.stock = []; solState.waste = []; solState.tableau = [[], [], [], [], [], [], []];
    solState.foundations = { hearts: [], diamonds: [], clubs: [], spades: [] };
    
    let newDeck = [];
    for (let s of suitsConfig) {
        for (let r of ranksConfig) {
            newDeck.push({ ...s, rank: r, isFaceUp: false, value: getCardValue(r) });
        }
    }
    for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row <= col; row++) {
            let card = newDeck.pop();
            if (row === col) card.isFaceUp = true;
            solState.tableau[col].push(card);
        }
    }
    solState.stock = newDeck;
    renderSolitaire();
    document.getElementById('stock-pile').onclick = handleStockClick;
}

function renderSolitaire() {
    document.querySelectorAll('.card-slot').forEach(slot => {
        slot.innerHTML = '';
        slot.ondragover = (e) => e.preventDefault();
        slot.ondrop = handleDrop;
        if (slot.id !== 'stock-pile') {
            slot.onclick = handleTap; 
        }
    });

    for (let i = 0; i < 7; i++) {
        const pileDiv = document.getElementById(`t${i + 1}`);
        solState.tableau[i].forEach((card, index) => {
            const cardEl = createCardElement(card);
            cardEl.style.top = `${index * 25}px`; 
            if (card.isFaceUp) {
                cardEl.dataset.source = 'tableau';
                cardEl.dataset.pileIndex = i;
                cardEl.dataset.cardIndex = index;
            }
            pileDiv.appendChild(cardEl);
        });
    }

    ['hearts', 'diamonds', 'clubs', 'spades'].forEach(suit => {
        const fDiv = document.getElementById(`f-${suit}`);
        solState.foundations[suit].forEach(card => {
            const cardEl = createCardElement(card);
            cardEl.style.top = '0px'; 
            fDiv.appendChild(cardEl);
        });
    });

    const stockDiv = document.getElementById('stock-pile');
    if (solState.stock.length > 0) {
        const backCard = document.createElement('div');
        backCard.className = 'solitaire-card card-hidden';
        stockDiv.appendChild(backCard);
    }

    const wasteDiv = document.getElementById('waste-pile');
    if (solState.waste.length > 0) {
        const topWasteCard = solState.waste[solState.waste.length - 1];
        const cardEl = createCardElement(topWasteCard);
        cardEl.dataset.source = 'waste'; 
        wasteDiv.appendChild(cardEl);
    }
    
    clearSelection();
}

let selectedCardEl = null;

function handleTap(e) {
    const targetSlot = this.closest('.card-slot');
    const clickedCard = e.target.closest('.solitaire-card');

    if (!selectedCardEl) {
        if (clickedCard && !clickedCard.classList.contains('card-hidden')) {
            selectedCardEl = clickedCard;
            selectedCardEl.classList.add('selected-card');
        }
    } else {
        if (clickedCard === selectedCardEl) {
            clearSelection();
            return;
        }
        draggedCardEl = selectedCardEl;
        handleDrop.call(targetSlot, { preventDefault: () => {} });
        clearSelection();
    }
}

function clearSelection() {
    if (selectedCardEl) {
        selectedCardEl.classList.remove('selected-card');
        selectedCardEl = null;
        draggedCardEl = null;
    }
}

function createCardElement(card) {
    const el = document.createElement('div');
    if (card.isFaceUp) {
        el.className = `solitaire-card card-${card.color}`;
        el.innerHTML = `
            <span class="card-corner card-corner-tl">${card.rank}<br>${card.symbol}</span>
            <span class="card-corner card-corner-br">${card.rank}<br>${card.symbol}</span>
        `;
        el.draggable = true;
        el.dataset.suit = card.suit;
        el.dataset.color = card.color;
        el.dataset.rank = card.rank;
        el.dataset.value = card.value;
        el.ondragstart = handleDragStart;
        el.ondragend = handleDragEnd;
        el.ondblclick = handleDoubleClick;
    } else {
        el.className = 'solitaire-card card-hidden';
        el.draggable = false;
    }
    return el;
}

function handleDoubleClick(e) {
    const source = this.dataset.source;
    if (!source) return; 

    const sourcePileIdx = this.dataset.pileIndex;
    const sourceCardIdx = parseInt(this.dataset.cardIndex);
    const suit = this.dataset.suit;
    const value = parseInt(this.dataset.value);

    let cardObj;
    let isTopCard = false;

    if (source === 'tableau') {
        const pile = solState.tableau[sourcePileIdx];
        if (sourceCardIdx === pile.length - 1) { 
            cardObj = pile[sourceCardIdx];
            isTopCard = true;
        }
    } else if (source === 'waste') {
        cardObj = solState.waste[solState.waste.length - 1];
        isTopCard = true;
    }

    if (!isTopCard) return;

    const foundationPile = solState.foundations[suit];
    let canMove = false;

    if (foundationPile.length === 0 && value === 1) {
        canMove = true;
    } else if (foundationPile.length > 0) {
        const topFoundationCard = foundationPile[foundationPile.length - 1];
        if (parseInt(topFoundationCard.value) === value - 1) {
            canMove = true;
        }
    }

    if (canMove) {
        if (source === 'tableau') {
            solState.tableau[sourcePileIdx].pop();
            if (solState.tableau[sourcePileIdx].length > 0) {
                solState.tableau[sourcePileIdx][solState.tableau[sourcePileIdx].length - 1].isFaceUp = true;
            }
        } else if (source === 'waste') {
            solState.waste.pop();
        }
        solState.foundations[suit].push(cardObj);
        renderSolitaire();
    }
}

function handleStockClick() {
    if (solState.stock.length > 0) {
        let card = solState.stock.pop();
        card.isFaceUp = true;
        solState.waste.push(card);
    } else {
        solState.stock = solState.waste.reverse().map(c => { c.isFaceUp = false; return c; });
        solState.waste = [];
    }
    renderSolitaire();
}

let draggedCardEl = null;

function handleDragStart(e) {
    draggedCardEl = this;
    setTimeout(() => this.style.opacity = '0.5', 0);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    draggedCardEl = null;
}

function handleDrop(e) {
    e.preventDefault();
    if (!draggedCardEl) return;

    const targetSlot = this.closest('.card-slot');
    if (!targetSlot) return;

    const source = draggedCardEl.dataset.source;
    const sourcePileIdx = draggedCardEl.dataset.pileIndex;
    const sourceCardIdx = parseInt(draggedCardEl.dataset.cardIndex);

    let draggedCardObj;
    let cardsToMove = [];

    if (source === 'tableau') {
        cardsToMove = solState.tableau[sourcePileIdx].slice(sourceCardIdx);
        draggedCardObj = cardsToMove[0];
    } else if (source === 'waste') {
        draggedCardObj = solState.waste[solState.waste.length - 1];
        cardsToMove = [draggedCardObj];
    } else {
        return;
    }

    const isTableauTarget = targetSlot.classList.contains('tableau-pile');
    const isFoundationTarget = targetSlot.classList.contains('foundation');
    
    let moveAllowed = false;
    let targetPileObj = null;

    if (isTableauTarget) {
        const targetIndex = parseInt(targetSlot.id.replace('t', '')) - 1;
        targetPileObj = solState.tableau[targetIndex];
        if (targetPileObj.length === 0) {
            if (draggedCardObj.value == 13) moveAllowed = true;
        } else {
            const topTargetCard = targetPileObj[targetPileObj.length - 1];
            if (topTargetCard.isFaceUp && 
                topTargetCard.color !== draggedCardObj.color && 
                parseInt(topTargetCard.value) === parseInt(draggedCardObj.value) + 1) {
                moveAllowed = true;
            }
        }
    }

    if (isFoundationTarget) {
        if (cardsToMove.length === 1) {
            const suit = targetSlot.id.replace('f-', '');
            targetPileObj = solState.foundations[suit];
            if (targetPileObj.length === 0) {
                if (draggedCardObj.value == 1 && draggedCardObj.suit === suit) moveAllowed = true;
            } else {
                const topTargetCard = targetPileObj[targetPileObj.length - 1];
                if (draggedCardObj.suit === suit && 
                    parseInt(topTargetCard.value) === parseInt(draggedCardObj.value) - 1) {
                    moveAllowed = true;
                }
            }
        }
    }

    if (moveAllowed) {
        if (source === 'tableau') {
            solState.tableau[sourcePileIdx].splice(sourceCardIdx);
            if (solState.tableau[sourcePileIdx].length > 0) {
                solState.tableau[sourcePileIdx][solState.tableau[sourcePileIdx].length - 1].isFaceUp = true;
            }
        } else if (source === 'waste') {
            solState.waste.pop();
        }
        targetPileObj.push(...cardsToMove);
        renderSolitaire();
    }
}

// ==========================================
// 5. KAROLKY II — Double Klondike Engine
//    104 karet (2 balíčky), 8 tableau sloupců,
//    8 foundation hromádek (2× každá barva).
//    Kolo 1 → lízej 3, kolo 2 → lízej 2, kolo 3 → lízej 1.
//    Max 3 kola, pak prohra.
//    Pravidla tableau: střídavé barvy, sestupně.
//    Prázdný sloupec: pouze Král.
//    Ovládání: drag & drop + tap-to-select + dvojklik na foundation.
// ==========================================

// ── Konfigurace ──────────────────────────────────────────────
const KP_SUITS = [
    { suit:'hearts',   sym:'♥', color:'red'   },
    { suit:'diamonds', sym:'♦', color:'red'   },
    { suit:'clubs',    sym:'♣', color:'black' },
    { suit:'spades',   sym:'♠', color:'black' },
];
const KP_RANKS = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

const KP_RANK_CZ = {
    'A':'Eso','2':'Dvojka','3':'Trojka','4':'Čtyřka','5':'Pětka',
    '6':'Šestka','7':'Sedmička','8':'Osmička','9':'Devítka','10':'Desítka',
    'J':'Kluk','Q':'Dáma','K':'Král'
};
const KP_SUIT_CZ = {
    'hearts':'Srdce ♥','diamonds':'Kára ♦','clubs':'Kříže ♣','spades':'Piky ♠'
};

function kpVal(r) {
    if (r==='A') return 1; if (r==='J') return 11;
    if (r==='Q') return 12; if (r==='K') return 13;
    return parseInt(r);
}

// ── Herní stav ────────────────────────────────────────────────
let KP = {};           // celý stav hry
let kpTapSel = null;   // aktuálně vybraná karta (tap)
let kpDragEl = null;   // aktuálně tažená karta (drag)

// ── Nová hra ──────────────────────────────────────────────────
function kpNewGame() {
    // Sestav a zamíchej 2 balíčky (104 karet)
    let deck = [];
    for (let n = 0; n < 2; n++)
        for (let s of KP_SUITS)
            for (let r of KP_RANKS)
                deck.push({ suit:s.suit, sym:s.sym, color:s.color, rank:r, val:kpVal(r), face:false });

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    KP = {
        stock: [],
        waste: [],
        foundations: [ [], [], [], [], [], [], [], [] ], // 8 hromádek (2× každá barva)
        tableau: [ [], [], [], [], [], [], [], [] ],      // 8 sloupců
        pass: 1,       // aktuální kolo (1–3)
        drawN: 3,      // kolik karet se lízá v tomto kole
        over: false,
    };

    kpTapSel = null;
    kpDragEl = null;

    // Rozdej tableau: sloupec i dostane i+1 karet (1..8), poslední lícem nahoru
    let ptr = deck.length - 1;
    for (let col = 0; col < 8; col++) {
        for (let row = 0; row <= col; row++) {
            const c = { ...deck[ptr--] };
            c.face = (row === col);
            KP.tableau[col].push(c);
        }
    }
    // Zbytek jde do stohu
    while (ptr >= 0) KP.stock.push({ ...deck[ptr--], face: false });

    kpCloseOverlay();
    kpUpdateHUD();
    kpRender();
}

// ── HUD (kolo, počty) ─────────────────────────────────────────
function kpUpdateHUD() {
    const el = (id) => document.getElementById(id);
    if (el('kp-pass'))      el('kp-pass').textContent      = KP.pass;
    if (el('kp-draw'))      el('kp-draw').textContent      = KP.drawN;
    if (el('kp-stock-cnt')) el('kp-stock-cnt').textContent = KP.stock.length;

    for (let i = 1; i <= 3; i++) {
        const d = el(`kp-d${i}`);
        if (!d) continue;
        d.className = 'kp-dot';
        if (i < KP.pass)      d.classList.add('kp-dot-done');
        else if (i === KP.pass) d.classList.add('kp-dot-active');
    }

    const rec = el('kp-recycle');
    if (rec) {
        if (KP.stock.length === 0 && KP.pass < 3)  { rec.textContent = '↺'; rec.style.display = ''; }
        else if (KP.stock.length === 0)             { rec.textContent = '✕'; rec.style.display = ''; }
        else                                         { rec.style.display = 'none'; }
    }
}

// ── Klik na stoh ──────────────────────────────────────────────
function kpClickStock() {
    if (KP.over) return;
    kpClearSelInternal();

    if (KP.stock.length === 0) {
        if (KP.pass >= 3) { kpShowResult(false); return; }
        KP.pass++;
        KP.drawN = KP.pass === 2 ? 2 : 1;
        KP.stock = [...KP.waste].reverse().map(c => ({ ...c, face: false }));
        KP.waste = [];
        kpUpdateHUD();
        kpRender();
        return;
    }

    const n = Math.min(KP.drawN, KP.stock.length);
    for (let i = 0; i < n; i++) {
        const c = KP.stock.pop();
        c.face = true;
        KP.waste.push(c);
    }
    kpUpdateHUD();
    kpRender();
}

// ── Tap výběr ─────────────────────────────────────────────────
function kpSetSel(src, col, cidx, cards, cardObj) {
    kpTapSel = { src, col, cidx, cards, cardObj };

    const bar  = document.getElementById('kp-infobar');
    const txt  = document.getElementById('kp-info-txt');
    const sub  = document.getElementById('kp-info-sub');
    if (!bar) return;

    txt.textContent = `${KP_RANK_CZ[cardObj.rank] || cardObj.rank} — ${KP_SUIT_CZ[cardObj.suit] || cardObj.suit}`;
    txt.style.color = cardObj.color === 'red' ? '#e07070' : '#e0d5b8';
    sub.textContent = cards.length === 1
        ? `Hodnota ${cardObj.val} · lze na foundation`
        : `${cards.length} karet · pouze na tableau`;

    bar.classList.remove('kp-infobar-hidden');
    kpRender();
}

function kpClearSelInternal() {
    kpTapSel = null;
    const bar = document.getElementById('kp-infobar');
    if (bar) bar.classList.add('kp-infobar-hidden');
}

function kpClearSel() {
    kpClearSelInternal();
    kpRender();
}

// ── Pokus o tap-přesun na cíl ────────────────────────────────
function kpTryPlace(targetType, targetIdx) {
    if (!kpTapSel) return false;
    const { src, col: sc, cidx: si, cards } = kpTapSel;
    const lead = cards[0];
    let moved = false;

    if (targetType === 'foundation') {
        if (cards.length !== 1) return false;
        const fPile = KP.foundations[targetIdx];
        const fEl   = document.getElementById(`kp-f${targetIdx}`);
        const fSuit = fEl.dataset.suit;
        if (fPile.length === 0) {
            if (lead.val === 1 && lead.suit === fSuit) { fPile.push(lead); moved = true; }
        } else {
            const top = fPile[fPile.length - 1];
            if (top.suit === fSuit && lead.suit === fSuit && top.val === lead.val - 1) {
                fPile.push(lead); moved = true;
            }
        }
    } else if (targetType === 'tableau') {
        const tPile = KP.tableau[targetIdx];
        if (tPile.length === 0) {
            if (lead.val === 13) { tPile.push(...cards); moved = true; }
        } else {
            const top = tPile[tPile.length - 1];
            if (top.face && top.color !== lead.color && top.val === lead.val + 1) {
                tPile.push(...cards); moved = true;
            }
        }
    }

    if (moved) {
        kpRemoveSrc(src, sc, si, cards.length);
        kpClearSelInternal();
        kpCheckWin();
        kpUpdateHUD();
        kpRender();
        return true;
    }
    return false;
}

// ── Smazání z původního místa ─────────────────────────────────
function kpRemoveSrc(src, col, cidx, count) {
    if (src === 'tableau') {
        KP.tableau[col].splice(cidx);
        // Auto-flip poslední karty
        if (KP.tableau[col].length > 0)
            KP.tableau[col][KP.tableau[col].length - 1].face = true;
    } else if (src === 'waste') {
        KP.waste.pop();
    }
}

// ── Kontrola výhry ────────────────────────────────────────────
function kpCheckWin() {
    const won = KP.foundations.every(f => f.length === 13);
    if (won) { KP.over = true; kpShowResult(true); }
}

// ── Výsledkový overlay ────────────────────────────────────────
function kpShowResult(win) {
    const ov = document.getElementById('kp-overlay');
    if (!ov) return;
    document.getElementById('kp-ov-icon').textContent  = win ? '✦' : '✕';
    document.getElementById('kp-ov-title').textContent = win ? 'VÝHRA!' : 'Prohra';
    document.getElementById('kp-ov-msg').textContent   = win
        ? 'Hvězdy vám přejí! Osud byl ve vašich rukou a vy jste ho zkrotili.'
        : 'Tři kola prošla jako voda. Karty tentokrát nepřály — ale osud se mění s každým novým pokusem.';
    ov.style.display = 'flex';
}

function kpCloseOverlay() {
    const ov = document.getElementById('kp-overlay');
    if (ov) ov.style.display = 'none';
}

// ── Karta: vytvoření HTML elementu ───────────────────────────
function kpMakeCard(card) {
    const el = document.createElement('div');
    el.className = 'kp-card';

    if (!card.face) {
        el.classList.add('kp-back');
        el.draggable = false;
        return el;
    }

    const clr = card.color === 'red' ? 'kp-red' : 'kp-black';
    el.classList.add(clr);
    el.draggable = true;
    el.innerHTML = `
        <span class="kp-pip-tl ${clr}">${card.rank}<br>${card.sym}</span>
        <span class="kp-pip-br ${clr}">${card.rank}<br>${card.sym}</span>
    `;
    return el;
}

// ── Render ────────────────────────────────────────────────────
function kpRender() {
    kpRenderStock();
    kpRenderWaste();
    kpRenderFoundations();
    kpRenderTableau();
}

function kpRenderStock() {
    const slot = document.getElementById('kp-stock');
    if (!slot) return;
    slot.querySelectorAll('.kp-card').forEach(e => e.remove());
    if (KP.stock.length > 0) {
        const el = kpMakeCard({ face: false });
        el.style.cursor = 'pointer';
        slot.appendChild(el);
    }
}

function kpRenderWaste() {
    const slot = document.getElementById('kp-waste');
    if (!slot) return;
    slot.innerHTML = '';
    if (KP.waste.length === 0) return;

    // Zobraz max. 3 karty, fanouškovitě
    const showN  = Math.min(3, KP.waste.length);
    const start  = KP.waste.length - showN;
    const slotW  = slot.offsetWidth || 70;
    const fan    = Math.min(slotW * 0.18, 12);

    for (let i = 0; i < showN; i++) {
        const card  = KP.waste[start + i];
        const isTop = i === showN - 1;
        const el    = kpMakeCard(card);
        el.style.left   = `${i * fan}px`;
        el.style.zIndex = 10 + i;

        if (!isTop) {
            el.draggable = false;
            el.style.pointerEvents = 'none';
        } else {
            el.dataset.kpSrc = 'waste';
            if (kpTapSel && kpTapSel.src === 'waste') el.classList.add('kp-selected');
            el.ondragstart = kpOnDragStart;
            el.ondragend   = kpOnDragEnd;
            el.ondblclick  = kpOnDblClick;
            el.onclick = function(e) {
                e.stopPropagation();
                if (kpTapSel && kpTapSel.src === 'waste') { kpClearSel(); return; }
                kpSetSel('waste', -1, -1, [card], card);
            };
        }
        slot.appendChild(el);
    }
}

function kpRenderFoundations() {
    for (let fi = 0; fi < 8; fi++) {
        const slot = document.getElementById(`kp-f${fi}`);
        if (!slot) continue;
        slot.querySelectorAll('.kp-card').forEach(e => e.remove());

        const pile = KP.foundations[fi];
        if (pile.length > 0) {
            const el = kpMakeCard(pile[pile.length - 1]);
            el.style.zIndex = 10;
            // Foundation: tap jako cíl
            el.onclick = (e) => { e.stopPropagation(); kpTryPlace('foundation', fi); };
            slot.appendChild(el);
        }

        // Slot sám přijímá tap jako cíl
        slot.onclick = () => kpTryPlace('foundation', fi);
        // Drag & drop cíl
        slot.ondragover = (e) => e.preventDefault();
        slot.ondrop     = (e) => kpOnDropFoundation(e, fi);
    }
}

function kpRenderTableau() {
    for (let col = 0; col < 8; col++) {
        const slot = document.getElementById(`kp-t${col}`);
        if (!slot) continue;
        slot.querySelectorAll('.kp-card').forEach(e => e.remove());

        const pile     = KP.tableau[col];
        const slotW    = slot.offsetWidth || 70;
        const cardH    = slotW * 1.45;
        const cascade  = Math.max(16, cardH * 0.22);

        pile.forEach((card, idx) => {
            const el = kpMakeCard(card);
            el.style.top    = `${idx * cascade}px`;
            el.style.zIndex = 10 + idx;

            if (card.face) {
                el.dataset.kpSrc  = 'tableau';
                el.dataset.kpCol  = col;
                el.dataset.kpIdx  = idx;

                // Zvýraznit pokud je vybraná
                if (kpTapSel && kpTapSel.src === 'tableau' &&
                    kpTapSel.col === col && kpTapSel.cidx === idx) {
                    el.classList.add('kp-selected');
                }

                el.ondragstart = kpOnDragStart;
                el.ondragend   = kpOnDragEnd;
                el.ondblclick  = kpOnDblClick;
                el.onclick = (function(c, cardRef, idxRef) {
                    return function(e) {
                        e.stopPropagation();
                        // Pokud je vybraná jiná karta → pokus o přesun na tuto kolonku
                        if (kpTapSel && !(kpTapSel.src === 'tableau' && kpTapSel.col === c && kpTapSel.cidx === idxRef)) {
                            const placed = kpTryPlace('tableau', c);
                            if (!placed) kpClearSel();
                            return;
                        }
                        // Deselect
                        if (kpTapSel && kpTapSel.src === 'tableau' && kpTapSel.col === c && kpTapSel.cidx === idxRef) {
                            kpClearSel(); return;
                        }
                        // Nový výběr — vezme kartu + celý "vláček" pod ní
                        const cards = KP.tableau[c].slice(idxRef);
                        kpSetSel('tableau', c, idxRef, cards, cardRef);
                    };
                })(col, card, idx);
            }
            slot.appendChild(el);
        });

        // Slot sám = cíl pro tap a drag
        slot.onclick = (function(c) {
            return function(e) {
                if (kpTapSel) kpTryPlace('tableau', c);
            };
        })(col);
        slot.ondragover = (e) => e.preventDefault();
        slot.ondrop = (function(c) {
            return function(e) { kpOnDropTableau(e, c); };
        })(col);

        // Dynamická výška slotu podle počtu karet
        if (pile.length > 0) {
            const slotW2   = slot.offsetWidth || 70;
            const cardH2   = slotW2 * 1.45;
            const cascade2 = Math.max(16, cardH2 * 0.22);
            slot.style.paddingBottom = `${(pile.length - 1) * cascade2 + cardH2}px`;
        } else {
            slot.style.paddingBottom = '';
        }
    }
}

// ── Drag & Drop handlers ──────────────────────────────────────
function kpOnDragStart(e) {
    kpDragEl = this;
    setTimeout(() => { if (kpDragEl) kpDragEl.style.opacity = '0.45'; }, 0);
}

function kpOnDragEnd(e) {
    if (kpDragEl) kpDragEl.style.opacity = '1';
    kpDragEl = null;
}

function kpOnDblClick(e) {
    // Pokus o automatické vhození na foundation
    e.stopPropagation();
    const src  = this.dataset.kpSrc;
    const col  = parseInt(this.dataset.kpCol);
    const cidx = parseInt(this.dataset.kpIdx);

    let card;
    if (src === 'tableau') {
        const pile = KP.tableau[col];
        if (cidx !== pile.length - 1) return; // Jen vrchní karta
        card = pile[cidx];
    } else if (src === 'waste') {
        card = KP.waste[KP.waste.length - 1];
    } else return;

    // Najdi vhodnou foundation
    for (let fi = 0; fi < 8; fi++) {
        const fEl   = document.getElementById(`kp-f${fi}`);
        const fSuit = fEl.dataset.suit;
        if (fSuit !== card.suit) continue;
        const fPile = KP.foundations[fi];
        const ok = (fPile.length === 0 && card.val === 1) ||
                   (fPile.length > 0 && fPile[fPile.length-1].val === card.val - 1);
        if (ok) {
            fPile.push(card);
            kpRemoveSrc(src, col, cidx, 1);
            kpCheckWin();
            kpUpdateHUD();
            kpRender();
            return;
        }
    }
}

function kpOnDropFoundation(e, fi) {
    e.preventDefault();
    if (!kpDragEl) return;

    const src  = kpDragEl.dataset.kpSrc;
    const col  = parseInt(kpDragEl.dataset.kpCol);
    const cidx = parseInt(kpDragEl.dataset.kpIdx);

    let card;
    if (src === 'tableau') {
        if (cidx !== KP.tableau[col].length - 1) return; // Jen vrchní karta
        card = KP.tableau[col][cidx];
    } else if (src === 'waste') {
        card = KP.waste[KP.waste.length - 1];
    } else return;

    const fEl   = document.getElementById(`kp-f${fi}`);
    const fSuit = fEl.dataset.suit;
    const fPile = KP.foundations[fi];

    let ok = false;
    if (fPile.length === 0) {
        ok = (card.val === 1 && card.suit === fSuit);
    } else {
        const top = fPile[fPile.length - 1];
        ok = (top.suit === fSuit && card.suit === fSuit && top.val === card.val - 1);
    }

    if (ok) {
        fPile.push(card);
        kpRemoveSrc(src, col, cidx, 1);
        kpCheckWin();
        kpUpdateHUD();
        kpRender();
    }
}

function kpOnDropTableau(e, targetCol) {
    e.preventDefault();
    if (!kpDragEl) return;

    const src  = kpDragEl.dataset.kpSrc;
    const col  = parseInt(kpDragEl.dataset.kpCol);
    const cidx = parseInt(kpDragEl.dataset.kpIdx);

    let cards;
    if (src === 'tableau') {
        cards = KP.tableau[col].slice(cidx);
    } else if (src === 'waste') {
        cards = [KP.waste[KP.waste.length - 1]];
    } else return;

    const lead   = cards[0];
    const tPile  = KP.tableau[targetCol];
    let ok = false;

    if (tPile.length === 0) {
        ok = (lead.val === 13);
    } else {
        const top = tPile[tPile.length - 1];
        ok = (top.face && top.color !== lead.color && top.val === lead.val + 1);
    }

    if (ok) {
        tPile.push(...cards);
        kpRemoveSrc(src, col, cidx, cards.length);
        kpCheckWin();
        kpUpdateHUD();
        kpRender();
    }
}
