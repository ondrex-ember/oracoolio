// ==========================================
// ORACOOLIO — I-Ťing / I Ching v2.0
// ==========================================

// ── Lokalizace ────────────────────────────
let ICHING_LANG = 'cs';

const ICHING_STRINGS = {
  cs: {
    instruction:    hod => hod < 6
                      ? `Soustřeď se na svou otázku a hoď mincemi (Hod ${hod + 1} z 6)`
                      : 'Hexagram je dokončen. Věštec čte v Knize proměn…',
    tossBtn:        'Hodit mincemi',
    reading:        'Rozsudek:',
    image:          'Obraz:',
    hexLabel:       (n, name) => `Hexagram ${n}: ${name}`,
    hexUnknown:     n => `Padl vám hexagram číslo ${n}. Výkladový text se připravuje.`,
    newReading:     'Nový výklad',
    limitMsg:       'Dnešní konzultace již proběhla. Vraťte se zítra.',
    limitBadge:     'Dnes zbývá: 1 konzultace',
    limitBadgeDone: 'Konzultace využita',
  },
  en: {
    instruction:    hod => hod < 6
                      ? `Focus on your question and toss the coins (Toss ${hod + 1} of 6)`
                      : 'The hexagram is complete. The oracle reads the Book of Changes…',
    tossBtn:        'Toss coins',
    reading:        'Judgment:',
    image:          'Image:',
    hexLabel:       (n, name) => `Hexagram ${n}: ${name}`,
    hexUnknown:     n => `Your hexagram number is ${n}. Reading text coming soon.`,
    newReading:     'New reading',
    limitMsg:       'Today\'s consultation is done. Come back tomorrow.',
    limitBadge:     'Today: 1 consultation left',
    limitBadgeDone: 'Consultation used',
  }
};

function T(key, ...args) {
  const fn = ICHING_STRINGS[ICHING_LANG][key];
  return typeof fn === 'function' ? fn(...args) : fn;
}

function setLang(lang) {
  ICHING_LANG = lang;
  // Fix page title and html lang
  document.documentElement.lang = lang;
  document.title = lang === 'en' ? 'I Ching — Book of Changes | Oracoolio' : 'I-Ťing — Kniha proměn | Oracoolio';
  document.getElementById('btn-lang-cs').classList.toggle('active', lang === 'cs');
  document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
  document.querySelectorAll('[data-cs]').forEach(el => {
    const val = lang === 'en' ? el.dataset.en : el.dataset.cs;
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else el.textContent = val;
  });
  // Update dynamic instruction text
  const instr = document.getElementById('iching-instruction');
  if (instr) instr.textContent = T('instruction', hodCislo);
  // Update toss button
  const btn = document.getElementById('toss-btn');
  if (btn && !btn.classList.contains('hidden')) btn.textContent = T('tossBtn');
}

// ── Daily limit ───────────────────────────
const DAILY_KEY = 'iching_last_date';

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function checkDailyLimit() {
  const last = localStorage.getItem(DAILY_KEY);
  return last === getTodayStr();
}

function markDailyUsed() {
  localStorage.setItem(DAILY_KEY, getTodayStr());
}

// ── State ─────────────────────────────────
let hodCislo = 0;
let hexagramVysledek = [];

// ── King Wen map ──────────────────────────
const KING_WEN_MAP = {
  "111111":1,"000000":2,"100010":3,"010001":4,"111010":5,"010111":6,
  "010000":7,"000010":8,"111011":9,"110111":10,"111000":11,"000111":12,
  "101111":13,"111101":14,"001000":15,"000100":16,"100110":17,"011001":18,
  "110000":19,"000011":20,"100101":21,"101001":22,"000001":23,"100000":24,
  "100111":25,"111001":26,"100001":27,"011110":28,"010010":29,"101101":30,
  "001110":31,"011100":32,"001111":33,"111100":34,"000101":35,"101000":36,
  "101011":37,"110101":38,"001010":39,"010100":40,"110001":41,"100011":42,
  "111110":43,"011111":44,"000110":45,"011000":46,"010110":47,"011010":48,
  "101110":49,"011101":50,"100100":51,"001001":52,"001011":53,"110100":54,
  "101100":55,"001101":56,"011011":57,"110110":58,"010011":59,"110010":60,
  "110011":61,"001100":62,"101010":63,"010101":64
};

function ziskejCisloHexagramu(binaryStr) {
  return KING_WEN_MAP[binaryStr] || 'Neznámý';
}

// ── Hexagram line builder ─────────────────
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

// ── Main toss logic ───────────────────────
function tossCoins() {
  if (hodCislo >= 6) return;

  const btn   = document.getElementById('toss-btn');
  const instr = document.getElementById('iching-instruction');
  const coins = ['coin1','coin2','coin3'].map(id => document.getElementById(id));

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
      img.src = isYang ? '../assets/coin_yang.png' : '../assets/coin_yin.png';
      hodnotaHodu += isYang ? 3 : 2;
    });

    hexagramVysledek.push(hodnotaHodu);
    hodCislo++;
    pridejCaruHexagramu(hodnotaHodu);

    if (hodCislo < 6) {
      instr.textContent = T('instruction', hodCislo);
      btn.disabled = false;
    } else {
      instr.textContent = T('instruction', 6);
      btn.classList.add('hidden');
      coins.forEach(c => c.classList.add('hidden'));

      const binaryString  = hexagramVysledek.map(h => (h === 7 || h === 9) ? '1' : '0').join('');
      const cisloHexagramu = ziskejCisloHexagramu(binaryString);
      const dataHexagramu  = typeof ichingTexts !== 'undefined' ? ichingTexts[cisloHexagramu] : null;

      const resultContainer = document.getElementById('iching-reading-container');
      const resultTextEl    = document.getElementById('iching-text-content');
      resultContainer.classList.remove('hidden');

      if (dataHexagramu) {
        const nazev    = ICHING_LANG === 'en' ? (dataHexagramu.nazev_en    || dataHexagramu.nazev)    : dataHexagramu.nazev;
        const rozsudek = ICHING_LANG === 'en' ? (dataHexagramu.rozsudek_en || dataHexagramu.rozsudek) : dataHexagramu.rozsudek;
        const obraz    = ICHING_LANG === 'en' ? (dataHexagramu.obraz_en    || dataHexagramu.obraz)    : dataHexagramu.obraz;
        resultTextEl.innerHTML = `
          <div class="hex-result-header">
            <span class="hex-number">${cisloHexagramu}</span>
            <h4>${nazev}</h4>
          </div>
          <div class="hex-result-body">
            <p><span class="hex-label">${T('reading')}</span> ${rozsudek}</p>
            <p class="hex-image"><span class="hex-label">${T('image')}</span> <em>${obraz}</em></p>
          </div>
        `;
      } else {
        resultTextEl.innerHTML = `<p>${T('hexUnknown', cisloHexagramu)}</p>`;
      }

      // Mark daily limit used
      markDailyUsed();
      updateBadge();

      // Show new reading button
      const newBtn = document.getElementById('new-reading-btn');
      if (newBtn) {
        newBtn.classList.remove('hidden');
        newBtn.textContent = T('newReading');
      }
    }
  }, 800);
}

// ── Reset ─────────────────────────────────
function resetReading() {
  hodCislo = 0;
  hexagramVysledek = [];
  document.getElementById('hexagram-builder').innerHTML = '';
  document.getElementById('iching-reading-container').classList.add('hidden');
  document.getElementById('iching-text-content').innerHTML = '';
  document.getElementById('iching-instruction').textContent = T('instruction', 0);
  const btn = document.getElementById('toss-btn');
  btn.classList.remove('hidden');
  btn.disabled = false;
  btn.textContent = T('tossBtn');
  ['coin1','coin2','coin3'].forEach(id => {
    const c = document.getElementById(id);
    c.classList.remove('hidden');
    c.querySelector('img').src = '../assets/coin_yang.png';
  });
  document.getElementById('new-reading-btn').classList.add('hidden');
}

// ── Badge update ──────────────────────────
function updateBadge() {
  const badge = document.getElementById('iching-status-page');
  if (!badge) return;
  const used = checkDailyLimit();
  badge.textContent = used ? T('limitBadgeDone') : T('limitBadge');
  badge.classList.toggle('badge-used', used);
}

// ── Init ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  if (checkDailyLimit()) {
    const btn = document.getElementById('toss-btn');
    if (btn) {
      btn.disabled = true;
      btn.title = T('limitMsg');
    }
    const instr = document.getElementById('iching-instruction');
    if (instr) instr.textContent = T('limitMsg');
  } else {
    const instr = document.getElementById('iching-instruction');
    if (instr) instr.textContent = T('instruction', 0);
  }
});
