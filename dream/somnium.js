/**
 * somnium.js — Dream Engine / Oracoolio
 * ES module. Načítá ./data/dreams.json přes fetch, řídí 4-krokový flow.
 */

import { createEngine } from './engine/interpreter.js';

// ── Konstanty ─────────────────────────────────────────────────────────────────

const CATEGORY_ICONS = {
  priroda:'🌿', zvirata:'🐾', lide:'👤',  mista:'🗺️',
  objekty:'📦', telo:'✨',    zivly:'🌊',  substance:'💧',
  abstrakce:'🔮', predmety:'🏺', osoby:'🧑', udalosti:'⚡',
};

const DOMAIN_COLORS = {
  self:'#d4a853',    shadow:'#7b68ee',    anima:'#e88b8b',
  animus:'#5b9bd5',  persona:'#82b882',   collective:'#c47eb5',
  trickster:'#f0a030', mortality:'#909090', life_force:'#4cbb6c',
  transformation:'#e0704a',
};

const STEPS = ['symbol','emotion','verb','context','result'];

// ── Stav ──────────────────────────────────────────────────────────────────────

const S = { step:'symbol', symbol:null, emotion:null, verb:null, context:null, result:null, engine:null, db:null };

// ── Init ──────────────────────────────────────────────────────────────────────

async function init() {
  showLoading();
  try {
    const db   = await fetch('./data/dreams.json').then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); });
    S.engine   = createEngine(db);
    S.db       = db;
    hideLoading();
    renderStep('symbol');
  } catch (e) {
    showError(`Nepodařilo se načíst databázi. (${e.message})`);
  }
}

// ── Router ────────────────────────────────────────────────────────────────────

function renderStep(step) {
  S.step = step;
  updateDots();
  updateBack();
  STEPS.forEach(s => { const el = document.getElementById(`step-${s}`); if (el) el.classList.toggle('hidden', s !== step); });
  if (step === 'symbol')  renderSymbol();
  if (step === 'emotion') renderEmotion();
  if (step === 'verb')    renderVerb();
  if (step === 'context') renderContext();
  if (step === 'result')  renderResult();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
  const i = STEPS.indexOf(S.step);
  if (i > 0) renderStep(STEPS[i - 1]);
}

function restart() {
  S.symbol = S.emotion = S.verb = S.context = S.result = null;
  renderStep('symbol');
}

// ── Dots & back ───────────────────────────────────────────────────────────────

function updateDots() {
  const dataSteps = STEPS.filter(s => s !== 'result');
  const cur = dataSteps.indexOf(S.step);
  document.querySelectorAll('.step-dot').forEach((d, i) => {
    d.classList.toggle('active', i === cur);
    d.classList.toggle('done',   i < cur);
  });
}

function updateBack() {
  const btn = document.getElementById('btn-back');
  if (btn) btn.classList.toggle('hidden', STEPS.indexOf(S.step) <= 0);
}

// ── Krok 1: Symbol ────────────────────────────────────────────────────────────

function renderSymbol() {
  const all = Object.values(S.db.symbols).sort((a,b) => a.frequency_rank - b.frequency_rank);
  const inp = document.getElementById('symbol-search');
  if (!inp) return;
  inp.value = '';
  inp.oninput = () => {
    const q = inp.value.trim().toLowerCase();
    const filtered = q ? all.filter(s => s.label.toLowerCase().includes(q) || s.id.includes(q) || s.base_meaning.toLowerCase().includes(q)) : all;
    renderSymbolGrid(filtered.slice(0, 24));
  };
  inp.focus();
  renderSymbolGrid(all.slice(0, 24));
}

function renderSymbolGrid(syms) {
  const grid = document.getElementById('symbol-grid');
  if (!grid) return;
  if (!syms.length) { grid.innerHTML = '<p class="no-results">Žádný symbol nenalezen</p>'; return; }
  grid.innerHTML = syms.map(s => `
    <div class="symbol-card${S.symbol?.id===s.id?' selected':''}" data-id="${s.id}" role="button" tabindex="0">
      <span class="symbol-card-icon">${CATEGORY_ICONS[s.category]??'✦'}</span>
      <div class="symbol-card-label">${s.label}</div>
      <div class="symbol-card-meaning">${s.base_meaning}</div>
      <span class="symbol-card-domain" style="background:${DOMAIN_COLORS[s.archetypal_domain]??'#555'}"></span>
    </div>`).join('');
  grid.querySelectorAll('.symbol-card').forEach(c => {
    const fn = () => { S.symbol = S.db.symbols[c.dataset.id]; setTimeout(() => renderStep('emotion'), 160); };
    c.addEventListener('click', fn);
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') fn(); });
  });
}

// ── Krok 2: Emoce ─────────────────────────────────────────────────────────────

function renderEmotion() {
  updateTrail();
  const grid = document.getElementById('emotion-grid');
  if (!grid) return;
  grid.innerHTML = Object.values(S.db.emotions).map(e => `
    <div class="emotion-card${S.emotion?.id===e.id?' selected':''}" data-id="${e.id}" role="button" tabindex="0">
      <span class="emotion-card-emoji">${e.emoji}</span>
      <div class="emotion-card-label">${e.label}</div>
      <span class="emotion-card-valence" style="background:${e.valence==='positive'?'#4cbb6c':'#c05050'}"></span>
    </div>`).join('');
  grid.querySelectorAll('.emotion-card').forEach(c => {
    const fn = () => { S.emotion = S.db.emotions[c.dataset.id]; setTimeout(() => renderStep('verb'), 160); };
    c.addEventListener('click', fn);
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') fn(); });
  });
}

// ── Krok 3: Verb ──────────────────────────────────────────────────────────────

function renderVerb() {
  updateTrail();
  const con = document.getElementById('verb-container');
  if (!con) return;
  const verbs   = S.engine.getVerbsForSymbol(S.symbol.id);
  const specIds = new Set(S.symbol.relevant_verbs ?? []);
  const spec    = verbs.filter(v => specIds.has(v.id));
  const univ    = verbs.filter(v => !specIds.has(v.id)).slice(0, 12);

  con.innerHTML = `
    <p class="section-label">Specifické pro ${S.symbol.label}</p>
    <div class="verb-cloud">${spec.map(v=>vtag(v,false)).join('')}</div>
    ${univ.length?`<p class="section-label" style="margin-top:18px">Obecné</p><div class="verb-cloud">${univ.map(v=>vtag(v,true)).join('')}</div>`:''}
  `;
  con.querySelectorAll('.verb-tag').forEach(t => {
    const fn = () => { S.verb = S.db.verbs[t.dataset.id]; setTimeout(() => renderStep('context'), 160); };
    t.addEventListener('click', fn);
    t.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') fn(); });
  });
}

function vtag(v, univ) {
  return `<span class="verb-tag${univ?' universal':''}${S.verb?.id===v.id?' selected':''}" data-id="${v.id}" role="button" tabindex="0">${v.label}</span>`;
}

// ── Krok 4: Kontext ───────────────────────────────────────────────────────────

function renderContext() {
  updateTrail();
  const grid = document.getElementById('context-grid');
  if (!grid) return;
  grid.innerHTML = Object.values(S.db.contexts).map(c => `
    <div class="context-card${S.context?.id===c.id?' selected':''}" data-id="${c.id}" role="button" tabindex="0">
      <span class="context-card-icon">${c.icon}</span>
      <span class="context-card-label">${c.label}</span>
    </div>`).join('');
  grid.querySelectorAll('.context-card').forEach(c => {
    const fn = () => {
      S.context = S.db.contexts[c.dataset.id];
      S.result  = S.engine.generateInterpretation({ symbolId:S.symbol.id, emotionId:S.emotion.id, verbId:S.verb.id, contextId:S.context.id });
      setTimeout(() => renderStep('result'), 160);
    };
    c.addEventListener('click', fn);
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') fn(); });
  });
}

// ── Krok 5: Výsledek ──────────────────────────────────────────────────────────

function renderResult() {
  const r    = S.result;
  const card = document.getElementById('interp-card');
  if (!card) return;
  const pHtml    = r.text.split('\n\n').filter(Boolean).map(p => `<p>${p}</p>`).join('');
  const engLabel = r.metadata.engine_type === 'override' ? '✦ Přesná kombinace' : '◈ Rule-based výklad';
  const confPct  = Math.round(r.confidence * 100);

  card.innerHTML = `
    <div class="interp-header">
      <div class="interp-combo">${S.symbol.label} &thinsp;·&thinsp; ${S.emotion.label}</div>
      <div class="interp-meta">${S.verb.label.charAt(0).toLowerCase()+S.verb.label.slice(1)} &nbsp;/&nbsp; ${S.context.label}</div>
    </div>
    <div class="interp-body">
      <div class="interp-text">${pHtml}</div>
      <div class="interp-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
      <div class="interp-question">
        <span class="interp-question-label">Otázka k zamyšlení</span>
        ${r.reflectionQuestion}
      </div>
    </div>
    <div class="interp-confidence">
      <span>${engLabel}</span>
      <div class="confidence-bar"><div class="confidence-fill" style="width:${confPct}%"></div></div>
      <span>${confPct}%</span>
    </div>
  `;
}

// ── Trail ─────────────────────────────────────────────────────────────────────

function updateTrail() {
  document.querySelectorAll('.selection-trail').forEach(t => {
    t.innerHTML = [
      S.symbol  && `<span class="trail-badge">${CATEGORY_ICONS[S.symbol.category]??'✦'} ${S.symbol.label}</span>`,
      S.emotion && `<span class="trail-badge">${S.emotion.emoji} ${S.emotion.label}</span>`,
      S.verb    && `<span class="trail-badge">→ ${S.verb.label}</span>`,
      S.context && `<span class="trail-badge">${S.context.icon} ${S.context.label}</span>`,
    ].filter(Boolean).join('');
  });
}

// ── Starfield — ID: sky-canvas (Oracoolio konvence) ───────────────────────────

function initStars() {
  const canvas = document.getElementById('sky-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  const N = 110;

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  function makeStars() {
    stars = Array.from({length:N}, () => ({
      x:  Math.random() * canvas.width,  y:  Math.random() * canvas.height,
      r:  Math.random() * 1.1 + 0.2,     a:  Math.random(),
      da: (Math.random()-0.5)*0.003,
      dx: (Math.random()-0.5)*0.07,      dy: (Math.random()-0.5)*0.035,
    }));
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (const s of stars) {
      s.x+=s.dx; s.y+=s.dy; s.a+=s.da;
      if (s.a<0){s.a=0;s.da*=-1;} if (s.a>1){s.a=1;s.da*=-1;}
      if (s.x<0) s.x=canvas.width; if (s.x>canvas.width)  s.x=0;
      if (s.y<0) s.y=canvas.height; if (s.y>canvas.height) s.y=0;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(201,168,76,${s.a*0.55})`; ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize(); makeStars(); draw();
  window.addEventListener('resize', () => { resize(); makeStars(); });
}

// ── Loading / error ───────────────────────────────────────────────────────────

function showLoading() {
  const m = document.getElementById('app-main');
  if (m) m.innerHTML = `<div class="loading"><div class="loading-title">🌙 Načítám Somnium</div><div class="loading-dots"><div class="loading-dot"></div><div class="loading-dot"></div><div class="loading-dot"></div></div></div>`;
}

function hideLoading() {
  const m = document.getElementById('app-main');
  if (m) { m.innerHTML = stepsHTML(); wireEvents(); }
}

function showError(msg) {
  const m = document.getElementById('app-main');
  if (m) m.innerHTML = `<div class="error-msg">⚠ ${msg}</div>`;
}

function wireEvents() {
  document.getElementById('btn-back')?.addEventListener('click', goBack);
  document.getElementById('btn-restart')?.addEventListener('click', restart);
}

function stepsHTML() {
  return `
    <section class="step" id="step-symbol">
      <h2 class="step-title">Co se ti zdálo?</h2>
      <p class="step-subtitle">Vyber symbol, který byl ve snu nejvýraznější.</p>
      <div class="search-wrap">
        <span class="search-icon">⌕</span>
        <input type="text" id="symbol-search" class="search-input" placeholder="Hledat symbol…" autocomplete="off">
      </div>
      <div class="symbol-grid" id="symbol-grid"></div>
    </section>

    <section class="step hidden" id="step-emotion">
      <h2 class="step-title">Jak ses cítil/a?</h2>
      <p class="step-subtitle">Dominantní emoce, která sen provázela.</p>
      <div class="selection-trail"></div>
      <div class="emotion-grid" id="emotion-grid"></div>
    </section>

    <section class="step hidden" id="step-verb">
      <h2 class="step-title">Co jsi dělal/a?</h2>
      <p class="step-subtitle">Jak jsi se symbolem interagoval/a?</p>
      <div class="selection-trail"></div>
      <div id="verb-container"></div>
    </section>

    <section class="step hidden" id="step-context">
      <h2 class="step-title">Kde to rezonuje?</h2>
      <p class="step-subtitle">Oblast bdělého života, která tě teď nejvíce zaměstnává.</p>
      <div class="selection-trail"></div>
      <div class="context-grid" id="context-grid"></div>
    </section>

    <section class="step hidden" id="step-result">
      <div class="interp-card" id="interp-card"></div>
      <div style="margin-top:14px">
        <button class="btn-restart" id="btn-restart">↺ Nový výklad</button>
      </div>
    </section>
  `;
}

// ── Start ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initStars();
  document.getElementById('btn-back')?.addEventListener('click', goBack);
  init();
});
