
// ==========================================
// 1. NAVIGACE ORACOOLIO (Rozcestník)
// ==========================================

function showApp(appId) {
    // 1. Skryjeme všechno
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('tarot-section').classList.add('hidden');
    document.getElementById('iching-section').classList.add('hidden');
    document.getElementById('solitaire-section').classList.add('hidden');

    // 2. Zobrazíme to, co uživatel vybral
    if (appId === 'tarot') {
        document.getElementById('tarot-section').classList.remove('hidden');
    } else if (appId === 'iching') {
        document.getElementById('iching-section').classList.remove('hidden');
    } else if (appId === 'solitaire') {
        document.getElementById('solitaire-section').classList.remove('hidden');
        
        // ROVNOU SPUSÍME ROZDÁVÁNÍ KARET!
        if (typeof initSolitaire === 'function') {
            initSolitaire();
        }
    }
}

function backToDashboard() {
    // Návrat do hlavního menu
    document.getElementById('tarot-section').classList.add('hidden');
    document.getElementById('iching-section').classList.add('hidden');
    document.getElementById('solitaire-section').classList.add('hidden'); // Přidáno pro Pasiáns
    document.getElementById('dashboard').classList.remove('hidden');
}

// ==========================================
// 2. KLASICKÝ TAROT A AI VĚŠTEC
// ==========================================

// Vaše URL adresa pro Google Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbzg2YNckMcLzo5Z2bVbonXMHTJXInJfR1M4BsXhWE0CrbUTQ9cht2YOSSfg-Wkhl_nT/exec';

let tarotDeck = [];

// Propojení na HTML elementy Tarotu
const drawBtn = document.getElementById('draw-btn');
const loadingDiv = document.getElementById('loading');
const tarotBoard = document.getElementById('tarot-board');

// Stažení karet při načtení stránky
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

// Funkce pro samotný výklad karet
function drawCard() {
    if (tarotDeck.length < 3) return;

    const readingTextContainer = document.getElementById('reading-text');
    const aiContainer = document.getElementById('ai-reading-container');
    const aiTextEl = document.getElementById('ai-text-content');
    
    // Skrytí starých textů před novým výkladem
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
            
            // VOLÁNÍ AI VĚŠTCE
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

// Efekt psacího stroje pro AI
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

// Spuštění akcí po načtení stránky
if (drawBtn) {
    drawBtn.addEventListener('click', drawCard);
}
loadCards();

// ==========================================
// 3. I-ŤING LOGIKA A MECHANIKA
// ==========================================

let hodCislo = 0;
let hexagramVysledek = []; // Sem budeme ukládat hodnoty čar (6,7,8,9)

function tossCoins() {
    if (hodCislo >= 6) return; // Už je doházeno

    const btn = document.getElementById('toss-btn');
    const instruction = document.getElementById('iching-instruction');
    const coins = [document.getElementById('coin1'), document.getElementById('coin2'), document.getElementById('coin3')];
    
    // Deaktivujeme tlačítko, dokud mince nedopadnou
    btn.disabled = true;
    
    // Nahodíme animaci na všechny 3 mince
    coins.forEach(coin => {
        coin.classList.remove('tossing');
        void coin.offsetWidth; 
        coin.classList.add('tossing');
    });

    // Počkáme 800ms (dokud animace nedoběhne), pak vyhodnotíme výsledek
    setTimeout(() => {
        let hodnotaHodu = 0;
        
        coins.forEach(coin => {
            // 50% šance na Yang (3) nebo Yin (2)
            const isYang = Math.random() > 0.5;
            const img = coin.querySelector('img');
            
            if (isYang) {
                img.src = 'assets/coin_yang.png'; // Líc
                hodnotaHodu += 3;
            } else {
                img.src = 'assets/coin_yin.png'; // Rub
                hodnotaHodu += 2;
            }
        });

        // Máme výsledek hodu (součet 6, 7, 8, nebo 9)
        hexagramVysledek.push(hodnotaHodu);
        hodCislo++;
        
        // Nakreslíme čáru na obrazovku
        pridejCaruHexagramu(hodnotaHodu);
        
        // Aktualizace textů a vyhodnocení
        if (hodCislo < 6) {
            instruction.innerText = `Soustřeď se na svou otázku a hoď mincemi (Hod ${hodCislo + 1} z 6)`;
            btn.disabled = false;
        } else {
            instruction.innerText = "Hexagram je dokončen. Věštec čte v Knize proměn...";
            btn.classList.add('hidden');
            coins.forEach(c => c.classList.add('hidden')); // Schováme mince
            
            // --- VYHODNOCENÍ KLASICKÉHO I-ŤINGU ---
            const resultContainer = document.getElementById('iching-reading-container');
            const resultTextEl = document.getElementById('iching-text-content');
            
            // Převedeme hody na binární kód (0 = Jin/přerušená, 1 = Jang/plná)
            const binaryString = hexagramVysledek.map(hod => (hod === 7 || hod === 9) ? '1' : '0').join('');
            
            // Najdeme číslo hexagramu (1-64) v našem slovníku
            const cisloHexagramu = ziskejCisloHexagramu(binaryString);
            
            // Zobrazíme výsledek
            resultContainer.classList.remove('hidden');
            // Najdeme data v našem novém slovníku
            const dataHexagramu = ichingTexts[cisloHexagramu];
            
            if (dataHexagramu) {
                resultTextEl.innerHTML = `
                    <h4 style="color: #d4b483; font-size: 1.4rem; margin-bottom: 10px;">Hexagram ${cisloHexagramu}: ${dataHexagramu.nazev}</h4>
                    <p style="margin-bottom: 15px;"><strong>Rozsudek:</strong> ${dataHexagramu.rozsudek}</p>
                    <p style="color: #8f8f8f; font-style: italic;"><strong>Obraz:</strong> ${dataHexagramu.obraz}</p>
                `;
            } else {
                resultTextEl.innerHTML = `<strong>Padl vám hexagram číslo ${cisloHexagramu}</strong>.<br><br><span style="color: #8f8f8f;"><em>(Výkladový text se připravuje...)</em></span>`;
            };
        }
        
    }, 800);
}

function pridejCaruHexagramu(hodnota) {
    const builder = document.getElementById('hexagram-builder');
    const div = document.createElement('div');
    div.className = 'hex-line';
    
    // 7 a 9 jsou plné čáry (Yang)
    // 6 a 8 jsou přerušené čáry (Yin)
    if (hodnota === 7 || hodnota === 9) {
        div.classList.add('yang-line');
        div.innerHTML = `<div class="line-segment"></div>`;
    } else {
        div.classList.add('yin-line');
        div.innerHTML = `<div class="line-segment"></div><div class="line-segment"></div>`;
    }
    
    // CSS to řadí obráceně (column-reverse), takže se čáry staví odspodu nahoru!
    builder.appendChild(div);
}

// --- SLOVNÍK HEXAGRAMŮ (Sekvence krále Wena) ---
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

// --- SOLITAIRE LOGIKA ---

// ==========================================
// 4. VĚŠTECKÝ PASIÁNS (CHYTRÝ HERNÍ ENGINE 2.0)
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

    // Zamíchat
    for (let i = newDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    // Rozdat na stůl
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

// Funkce, která přesně vykreslí stav paměti na stůl
function renderSolitaire() {
    // 1. Vyčistíme všechny sloty a připravíme je na chytání karet
    document.querySelectorAll('.card-slot').forEach(slot => {
        slot.innerHTML = '';
        slot.ondragover = (e) => e.preventDefault();
        slot.ondrop = handleDrop;
    });

    // 2. Vykreslíme dolní kaskády (Tableau)
    for (let i = 0; i < 7; i++) {
        const pileDiv = document.getElementById(`t${i + 1}`);
        // Zjistíme šířku slotu pro výpočet offsetu (karta má poměr 1:1.45)
        const slotWidth = pileDiv.offsetWidth || 80;
        const cardHeight = slotWidth * 1.45;
        // Offset: odhalíme ~22% výšky karty pro každou překrytou kartu
        const cascade = Math.max(18, cardHeight * 0.22);

        solState.tableau[i].forEach((card, index) => {
            const cardEl = createCardElement(card);
            cardEl.style.top = `${index * cascade}px`;
            cardEl.style.zIndex = 10 + index;
            
            // Kartě zapíšeme "GPS souřadnice", kde přesně leží
            if (card.isFaceUp) {
                cardEl.dataset.source = 'tableau';
                cardEl.dataset.pileIndex = i;
                cardEl.dataset.cardIndex = index;
            }
            pileDiv.appendChild(cardEl);
        });
    }

    // 3. Vykreslíme cílové hromádky nahoře (Foundations)
    ['hearts', 'diamonds', 'clubs', 'spades'].forEach(suit => {
        const fDiv = document.getElementById(`f-${suit}`);
        solState.foundations[suit].forEach(card => {
            const cardEl = createCardElement(card);
            cardEl.style.top = '0px'; // Nahoře se karty neposouvají, překrývají se
            fDiv.appendChild(cardEl);
        });
    });

    // 4. Vykreslíme lízací balíček
    const stockDiv = document.getElementById('stock-pile');
    if (solState.stock.length > 0) {
        const backCard = document.createElement('div');
        backCard.className = 'solitaire-card card-hidden';
        stockDiv.appendChild(backCard);
    }

    // 5. Vykreslíme odkládací hromádku
    const wasteDiv = document.getElementById('waste-pile');
    if (solState.waste.length > 0) {
        const topWasteCard = solState.waste[solState.waste.length - 1];
        const cardEl = createCardElement(topWasteCard);
        cardEl.dataset.source = 'waste';
        wasteDiv.appendChild(cardEl);
    }

    // 6. Dynamická výška tableau slotů (aby kaskáda nepřetekla mimo viditelnou oblast)
    setTimeout(() => {
        for (let i = 0; i < 7; i++) {
            const pileDiv = document.getElementById(`t${i + 1}`);
            const cards = solState.tableau[i];
            if (cards.length === 0) {
                pileDiv.style.paddingBottom = '';
                continue;
            }
            const slotWidth = pileDiv.offsetWidth || 80;
            const cardHeight = slotWidth * 1.45;
            const cascade = Math.max(18, cardHeight * 0.22);
            const totalHeight = (cards.length - 1) * cascade + cardHeight;
            pileDiv.style.paddingBottom = totalHeight + 'px';
        }
    }, 0);
}

// Pomocná funkce na výrobu HTML jedné karty
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
        
        // NOVÉ: Přidání funkce dvojkliku
        el.ondblclick = handleDoubleClick;
        
    } else {
        el.className = 'solitaire-card card-hidden';
        el.draggable = false;
    }
    return el;
}

// --- NOVÁ FUNKCE: AUTOMATICKÉ VYSTŘELENÍ KARTY NAHORU ---
function handleDoubleClick(e) {
    // Zjistíme, z jaké hromádky karta pochází
    const source = this.dataset.source;
    if (!source) return; 

    const sourcePileIdx = this.dataset.pileIndex;
    const sourceCardIdx = parseInt(this.dataset.cardIndex);
    const suit = this.dataset.suit;
    const value = parseInt(this.dataset.value);

    let cardObj;
    let isTopCard = false;

    // Ujistíme se, že hráč kliká jen na úplně vrchní, volnou kartu!
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

    if (!isTopCard) return; // Pokud pod kartou ještě něco visí, nedělej nic

    // Podíváme se nahoru do cílové hromádky, jestli tam karta pasuje
    const foundationPile = solState.foundations[suit];
    let canMove = false;

    if (foundationPile.length === 0 && value === 1) {
        canMove = true; // Eso na prázdné místo
    } else if (foundationPile.length > 0) {
        const topFoundationCard = foundationPile[foundationPile.length - 1];
        if (parseInt(topFoundationCard.value) === value - 1) {
            canMove = true; // Další karta v pořadí (např. 2 na Eso)
        }
    }

    // Pokud tam pasuje, přehodíme ji v paměti a překreslíme stůl
    if (canMove) {
        if (source === 'tableau') {
            solState.tableau[sourcePileIdx].pop();
            // Automatické otočení spodní karty
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

// --- LOGIKA TAHÁNÍ Z PAMĚTI ---
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

    // Přečteme GPS souřadnice tažené karty
    const source = draggedCardEl.dataset.source;
    const sourcePileIdx = draggedCardEl.dataset.pileIndex;
    const sourceCardIdx = parseInt(draggedCardEl.dataset.cardIndex);

    let draggedCardObj;
    let cardsToMove = []; // Tady se uloží celý "vláček" karet

    if (source === 'tableau') {
        // Vezme z paměti kartu A VŠECHNY karty na ní!
        cardsToMove = solState.tableau[sourcePileIdx].slice(sourceCardIdx);
        draggedCardObj = cardsToMove[0]; // Pro pravidla kontrolujeme jen tu nejspodnější
    } else if (source === 'waste') {
        draggedCardObj = solState.waste[solState.waste.length - 1];
        cardsToMove = [draggedCardObj];
    } else {
        return; // Z foundation (cílů) tahat nebudeme
    }

    const isTableauTarget = targetSlot.classList.contains('tableau-pile');
    const isFoundationTarget = targetSlot.classList.contains('foundation');
    
    let moveAllowed = false;
    let targetPileObj = null;

    // PRAVIDLO 1: Dolní sloupce (červená na černou)
    if (isTableauTarget) {
        const targetIndex = parseInt(targetSlot.id.replace('t', '')) - 1;
        targetPileObj = solState.tableau[targetIndex];

        if (targetPileObj.length === 0) {
            if (draggedCardObj.value == 13) moveAllowed = true; // Jen Král na prázdné
        } else {
            const topTargetCard = targetPileObj[targetPileObj.length - 1];
            if (topTargetCard.isFaceUp && 
                topTargetCard.color !== draggedCardObj.color && 
                parseInt(topTargetCard.value) === parseInt(draggedCardObj.value) + 1) {
                moveAllowed = true;
            }
        }
    }

    // PRAVIDLO 2: Cílové hromádky (Esa a dále)
    if (isFoundationTarget) {
        // Nahoru se smí dát jen jedna karta, ne celý vláček
        if (cardsToMove.length === 1) {
            const suit = targetSlot.id.replace('f-', '');
            targetPileObj = solState.foundations[suit];

            if (targetPileObj.length === 0) {
                // Musí začít Esem správné barvy
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

    // Pokud je tah legální, přepíšeme to v paměti!
    if (moveAllowed) {
        // Smažeme z původního místa
        if (source === 'tableau') {
            solState.tableau[sourcePileIdx].splice(sourceCardIdx);
            
            // AUTOMATICKÉ OTOČENÍ: Pokud pod kartou něco zbylo, otočíme to lícem!
            if (solState.tableau[sourcePileIdx].length > 0) {
                solState.tableau[sourcePileIdx][solState.tableau[sourcePileIdx].length - 1].isFaceUp = true;
            }
        } else if (source === 'waste') {
            solState.waste.pop();
        }

        // Přidáme na nové místo
        targetPileObj.push(...cardsToMove);

        // Vykreslíme nový, aktuální stůl
        renderSolitaire();
    }
}
