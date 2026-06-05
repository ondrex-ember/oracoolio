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


// ── Auto-init při načtení stránky ──
document.addEventListener('DOMContentLoaded', function() {
    if (typeof kpNewGame === 'function') kpNewGame();
});
