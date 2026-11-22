/*! iching-throw.js — Oracoolio I-Ching coin throw. Vanilla JS, no dependencies.
 *
 *  const ict = IChingThrow.create(document.getElementById('stage'), { coinPath: 'coins/' });
 *  const r = await ict.throwCoins();
 *  // r = { faces:['yang','yin','yang'], values:[3,2,3], sum:8, line:{ value, yang, moving, symbol }, variant:'arc' }
 *
 *  Result is drawn first (crypto RNG) and the animation is only a presentation of it.
 *  Pass { faces:[...] } to throwCoins() if the app computes the result itself.
 */
(function (global) {
  'use strict';

  const VARIANTS = ['arc', 'drop', 'spin', 'glow'];
  const LABELS = {
    arc: 'A · Oblouk', drop: 'B · Pád', spin: 'C · Roztočení', glow: 'D · Záře',
    calm: 'Zjednodušený (reduced motion)'
  };
  const FACE_ANGLE = { yang: 0, yin: 180 };
  const LINE_SYMBOL = { 6: '⚋ ×', 7: '⚊', 8: '⚋', 9: '⚊ ○' };
  const TAU = Math.PI * 2;

  /* ---------- helpers ---------- */
  const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, t) => a + (b - a) * t;
  const seg = (t, a, b) => clamp((t - a) / (b - a), 0, 1);       // progress inside [a,b]
  const mod = (x, m) => ((x % m) + m) % m;
  const arcH = (u) => 4 * u * (1 - u);                            // 0 → 1 → 0
  const r2 = (v) => Math.round(v * 100) / 100;
  const E = {
    outCubic: (t) => 1 - Math.pow(1 - t, 3),
    outQuart: (t) => 1 - Math.pow(1 - t, 4),
    outQuad: (t) => 1 - (1 - t) * (1 - t),
    inQuad: (t) => t * t,
    inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
  };

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function randomSeed() {
    const a = new Uint32Array(1);
    (global.crypto || global.msCrypto).getRandomValues(a);
    return a[0];
  }
  function secureFaces(n) {
    const a = new Uint8Array(n);
    (global.crypto || global.msCrypto).getRandomValues(a);
    return Array.from(a, (b) => ((b & 1) ? 'yang' : 'yin'));
  }
  function el(tag, cls) { const e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function img(src, cls) {
    const i = new Image();
    i.className = cls; i.src = src; i.alt = ''; i.draggable = false; i.decoding = 'async';
    i.setAttribute('aria-hidden', 'true');
    return i;
  }

  function resultFrom(faces, variant) {
    const values = faces.map((f) => (f === 'yang' ? 3 : 2));
    const sum = values.reduce((a, b) => a + b, 0);       // 6 / 7 / 8 / 9
    return {
      faces: faces.slice(), values, sum, variant,
      line: { value: sum, yang: sum === 7 || sum === 9, moving: sum === 6 || sum === 9, symbol: LINE_SYMBOL[sum] }
    };
  }

  /* ---------- DOM ---------- */
  function buildCoin(i, urls) {
    const slot = el('div', 'ict-slot');
    const shadow = el('div', 'ict-shadow');
    const fly = el('div', 'ict-fly'), tilt = el('div', 'ict-tilt'), body = el('div', 'ict-body');
    const edges = [-1, -0.5, 0, 0.5, 1].map((k) => {
      const im = img(urls.yang, 'ict-edge'); im.style.setProperty('--k', k); return im;
    });
    body.append(...edges, img(urls.yang, 'ict-face ict-front'), img(urls.yin, 'ict-face ict-back'));
    tilt.append(body); fly.append(tilt);
    const ring = el('div', 'ict-ring');
    const sparks = [];
    for (let j = 0; j < 9; j++) sparks.push(el('i', 'ict-spark'));
    slot.append(shadow, fly, ring, ...sparks);
    return { i, slot, shadow, fly, tilt, body, ring, sparks, cs: 150, face: 'yang', rz: 0, gx: 0, gy: 0 };
  }

  /* One place that writes a coin's visual state.
     st: gx,gy (ground position, coin sizes) · h (height above table, coin sizes) · rz (deg) · body (css transform)
         a (opacity) · k (extra scale) · sh (shadow strength) · ring {s,o,kind} · sparks [{x,y,o,kind}] */
  function apply(c, st) {
    const cs = c.cs, h = st.h || 0, k = st.k == null ? 1 : st.k;
    const x = st.gx * cs, y = st.gy * cs - h * cs * 0.55, s = k * (1 + 0.35 * h);
    c.fly.style.transform = 'translate3d(' + r2(x) + 'px,' + r2(y) + 'px,0) scale(' + r2(s * 1000) / 1000 + ')';
    c.tilt.style.transform = 'rotateZ(' + r2(st.rz) + 'deg)';
    c.body.style.transform = st.body;
    c.slot.style.opacity = st.a == null ? 1 : r2(st.a * 1000) / 1000;
    c.shadow.style.transform = 'translate3d(' + r2((st.gx + 0.035 + 0.12 * h) * cs) + 'px,' +
      r2((st.gy + 0.06 + 0.09 * h) * cs) + 'px,0) scale(' + r2(k * (1 - 0.1 * Math.min(h, 2)) * 1000) / 1000 + ')';
    c.shadow.style.opacity = r2(clamp(0.6 - 0.3 * h, 0.05, 0.6) * (st.sh == null ? 1 : st.sh) * 1000) / 1000;
    const rg = st.ring;
    if (rg && rg.o > 0.003) {
      c.ring.dataset.kind = rg.kind || 'dust';
      c.ring.style.transform = 'translate3d(' + r2(st.gx * cs) + 'px,' + r2(st.gy * cs) + 'px,0) scale(' + r2(rg.s * 100) / 100 + ')';
      c.ring.style.opacity = r2(rg.o * 1000) / 1000;
    } else c.ring.style.opacity = 0;
    for (let j = 0; j < c.sparks.length; j++) {
      const sp = st.sparks && st.sparks[j], e = c.sparks[j];
      if (sp && sp.o > 0.003) {
        e.dataset.kind = sp.kind || 'gold';
        e.style.transform = 'translate3d(' + r2(sp.x * cs) + 'px,' + r2(sp.y * cs) + 'px,0)';
        e.style.opacity = r2(sp.o * 1000) / 1000;
      } else e.style.opacity = 0;
    }
  }
  function restState(c) {
    return { gx: c.gx, gy: c.gy, h: 0, rz: c.rz, body: 'rotateX(' + FACE_ANGLE[c.face] + 'deg)', a: 1 };
  }

  /* ---------- plans: each returns { duration, frame(t) } ----------
     ctx.coins[i] = { c, a0, a1 (start/end face angle), rz0, rz1, gx0, gy0, gx1, gy1, relX } */

  // A · Oblouk — classic toss: up, spin, land, two small bounces.
  function planArc(ctx) {
    const rng = ctx.rng, T = 1650;
    const P = ctx.coins.map((k, i) => {
      const dir = rng() < 0.5 ? 1 : -1, turns = 3 + Math.floor(rng() * 3);
      const d = dir > 0 ? mod(k.a1 - k.a0, 360) : -mod(k.a0 - k.a1, 360);
      return { k, dir, delay: i * 95 + rng() * 45, H: 1.0 + rng() * 0.45, total: d + dir * 360 * turns, wd: rng() < 0.5 ? 1 : -1 };
    });
    const duration = Math.max(...P.map((p) => p.delay)) + T;
    return {
      duration,
      frame(t) {
        P.forEach((p) => {
          const k = p.k, u = clamp((t - p.delay) / T, 0, 1), f = seg(u, 0, 0.6), fe = 0.85 * f + 0.15 * E.outCubic(f);
          let h = 0;
          if (u < 0.6) h = p.H * arcH(u / 0.6);
          else if (u < 0.8) h = p.H * 0.1 * arcH(seg(u, 0.6, 0.8));
          else if (u < 0.92) h = p.H * 0.035 * arcH(seg(u, 0.8, 0.92));
          let wob = 0;
          if (u >= 0.6 && u < 0.92) { const q = seg(u, 0.6, 0.92); wob = p.wd * 16 * Math.pow(1 - q, 2) * Math.sin(q * Math.PI * 3); }
          const ang = k.a0 + p.total * fe + wob;
          apply(k.c, {
            gx: lerp(k.gx0, k.gx1, E.outQuad(f)), gy: lerp(k.gy0, k.gy1, E.outQuad(f)), h,
            rz: lerp(k.rz0, k.rz1, E.outCubic(seg(u, 0, 0.7))),
            body: 'rotateX(' + r2(ang) + 'deg)',
            ring: u > 0.6 && u < 0.8 ? { s: lerp(0.9, 1.25, seg(u, 0.6, 0.8)), o: 0.22 * (1 - seg(u, 0.6, 0.8)), kind: 'dust' } : null
          });
        });
      }
    };
  }

  // B · Pád — coins fall from above, hard impact with shock ring + sparks, decaying wobble.
  function planDrop(ctx) {
    const rng = ctx.rng, T = 1900, FADE = 160;
    const P = ctx.coins.map((k, i) => {
      const dir = rng() < 0.5 ? 1 : -1, turns = 2 + Math.floor(rng() * 2);
      const d = dir > 0 ? mod(k.a1 - k.a0, 360) : -mod(k.a0 - k.a1, 360);
      const sparks = [];
      for (let j = 0; j < 8; j++) sparks.push({ ang: (j / 8) * TAU + rng() * 0.6, rad: 0.55 + rng() * 0.5 });
      return { k, delay: FADE + i * 140 + rng() * 60, H0: 1.5 + rng() * 0.3, total: d + dir * 360 * turns, dir, sparks };
    });
    const duration = Math.max(...P.map((p) => p.delay)) + T;
    return {
      duration,
      frame(t) {
        P.forEach((p) => {
          const k = p.k, lt = t - p.delay;
          if (lt < 0) {                                     // old pose fades out, then waits invisible
            const s = restFrom(k); s.a = clamp(1 - t / FADE, 0, 1); apply(k.c, s); return;
          }
          const u = clamp(lt / T, 0, 1);
          let h = 0;
          if (u < 0.46) h = p.H0 * (1 - E.inQuad(u / 0.46));
          else if (u < 0.64) h = 0.34 * arcH(seg(u, 0.46, 0.64));
          else if (u < 0.78) h = 0.12 * arcH(seg(u, 0.64, 0.78));
          else if (u < 0.88) h = 0.035 * arcH(seg(u, 0.78, 0.88));
          const f = seg(u, 0, 0.5), ang = k.a0 + p.total * (0.9 * f + 0.1 * E.outCubic(f));
          const q = seg(u, 0.46, 0.92);
          const wx = p.dir * 22 * Math.pow(1 - q, 2) * Math.sin(q * Math.PI * 4);
          const wy = 14 * Math.pow(1 - q, 2) * Math.sin(q * Math.PI * 3 + 1);
          const rp = seg(u, 0.46, 0.78), sp = seg(u, 0.46, 0.72);
          const sparks = u > 0.46 && sp < 1 ? p.sparks.map((s) => ({
            x: Math.cos(s.ang) * s.rad * E.outCubic(sp), y: Math.sin(s.ang) * s.rad * 0.7 * E.outCubic(sp) - 0.25 * arcH(sp),
            o: 0.9 * (1 - sp), kind: 'dust'
          })) : null;
          apply(k.c, {
            gx: lerp(k.gx0, k.gx1, E.outQuad(seg(u, 0.3, 0.8))), gy: lerp(k.gy0, k.gy1, E.outQuad(seg(u, 0.3, 0.8))), h,
            rz: lerp(k.rz0, k.rz1, E.outCubic(seg(u, 0, 0.9))),
            body: 'rotateX(' + r2(ang + wx) + 'deg) rotateY(' + r2(wy) + 'deg)',
            a: seg(u, 0, 0.16),
            ring: rp > 0 && rp < 1 ? { s: lerp(0.55, 1.9, E.outCubic(rp)), o: 0.55 * (1 - rp), kind: 'dust' } : null,
            sparks
          });
        });
      }
    };
  }

  // C · Roztočení — coin hovers and spins on its vertical axis, leans and wobbles down, drops flat.
  function planSpin(ctx) {
    const rng = ctx.rng, T = 2300;
    const P = ctx.coins.map((k, i) => {
      const flip = k.a0 !== k.a1;
      let m = 6 + Math.floor(rng() * 5);
      if ((m % 2 === 1) !== flip) m++;                      // parity of half-turns must match the needed face flip
      return { k, m, odd: m % 2 === 1, sign: rng() < 0.5 ? 1 : -1, delay: i * 130 + rng() * 60, lean: (rng() < 0.5 ? 1 : -1) * (20 + rng() * 10) };
    });
    const duration = Math.max(...P.map((p) => p.delay)) + T;
    return {
      duration,
      frame(t) {
        P.forEach((p) => {
          const k = p.k, u = clamp((t - p.delay) / T, 0, 1);
          let h;
          if (u < 0.18) h = 0.5 * E.outCubic(u / 0.18);
          else if (u < 0.72) h = 0.5 + 0.04 * Math.sin(u * 30);
          else if (u < 0.9) h = (0.5 + 0.04 * Math.sin(0.72 * 30)) * (1 - E.inQuad(seg(u, 0.72, 0.9)));
          else h = 0.05 * arcH(seg(u, 0.9, 1));
          const theta = p.sign * 180 * p.m * E.outQuart(seg(u, 0, 0.86));
          const q = seg(u, 0.3, 0.92);
          const w = p.lean * Math.pow(1 - q, 1.4) * Math.sin(TAU * (2 * q + 3 * q * q));
          const rzEnd = k.rz1 - (p.odd ? 180 : 0);
          const done = u >= 1;
          apply(k.c, {
            gx: lerp(k.gx0, k.gx1, E.inOut(seg(u, 0.6, 0.95))), gy: lerp(k.gy0, k.gy1, E.inOut(seg(u, 0.6, 0.95))), h,
            rz: done ? k.rz1 : lerp(k.rz0, rzEnd, E.inOut(seg(u, 0, 0.9))),
            body: done ? 'rotateX(' + k.a1 + 'deg)' : 'rotateX(' + r2(k.a0 + w) + 'deg) rotateY(' + r2(theta) + 'deg)',
            ring: u > 0.9 && u < 1 ? { s: lerp(0.9, 1.3, seg(u, 0.9, 1)), o: 0.18 * (1 - seg(u, 0.9, 1)), kind: 'dust' } : null
          });
        });
      }
    };
  }

  // D · Záře — coins condense out of a glowing orb in the middle and spiral out to their places.
  function planGlow(ctx) {
    const rng = ctx.rng, T = 2500, FADE = 150;
    const P = ctx.coins.map((k, i) => {
      const flip = k.a0 !== k.a1;
      let m = 3 + Math.floor(rng() * 3);
      if ((m % 2 === 1) !== flip) m++;
      const sparks = [];
      for (let j = 0; j < 9; j++) sparks.push({ lag: 0.02 + rng() * 0.2, ox: (rng() - 0.5) * 0.4, oy: (rng() - 0.5) * 0.4 });
      return {
        k, m, odd: m % 2 === 1, sign: rng() < 0.5 ? 1 : -1, delay: FADE + i * 110, sparks,
        sx: (i - 1) * (0.2 + rng() * 0.15), sy: -(0.3 + rng() * 0.2)
      };
    });
    const pos = (p, q) => ({
      gx: lerp(p.k.relX, p.k.gx1, q) + p.sx * Math.sin(Math.PI * q),
      gy: lerp(-0.15, p.k.gy1, q) + p.sy * Math.sin(Math.PI * q),
      h: 0.4 * (1 - q) + 0.5 * Math.sin(Math.PI * q)
    });
    const duration = Math.max(...P.map((p) => p.delay)) + T;
    return {
      duration,
      frame(t) {
        if (ctx.orb) {
          const ot = seg(t, 0, duration * 0.8);
          ctx.orb.style.opacity = r2(0.8 * Math.pow(Math.sin(Math.PI * ot), 0.8) * 1000) / 1000;
          ctx.orb.style.transform = 'scale(' + r2(lerp(0.5, 1.5, E.outCubic(ot)) * 100) / 100 + ')';
        }
        P.forEach((p) => {
          const k = p.k, lt = t - p.delay;
          if (lt < 0) { const s = restFrom(k); s.a = clamp(1 - t / FADE, 0, 1); apply(k.c, s); return; }
          const u = clamp(lt / T, 0, 1), q = E.inOut(seg(u, 0.18, 0.8)), ps = pos(p, q);
          const theta = p.sign * 180 * p.m * E.outCubic(seg(u, 0.18, 0.86));
          const rzEnd = k.rz1 - (p.odd ? 180 : 0), done = u >= 1, rp = seg(u, 0.78, 1);
          const sparks = p.sparks.map((s) => {
            const uu = u - s.lag, qq = E.inOut(seg(uu, 0.18, 0.8)), sp = pos(p, qq), vis = seg(uu, 0.18, 0.9);
            if (vis <= 0 || vis >= 1) return null;
            return { x: sp.gx + s.ox * (1 - qq * 0.4), y: sp.gy - sp.h * 0.55 + s.oy * (1 - qq * 0.4), o: 0.85 * Math.sin(Math.PI * vis), kind: 'gold' };
          });
          apply(k.c, {
            gx: ps.gx, gy: ps.gy, h: ps.h, k: 0.15 + 0.85 * E.outCubic(seg(u, 0.05, 0.5)),
            rz: done ? k.rz1 : lerp(k.rz0, rzEnd, E.inOut(seg(u, 0.1, 0.85))),
            body: done ? 'rotateX(' + k.a1 + 'deg)' : 'rotateX(' + k.a0 + 'deg) rotateY(' + r2(theta) + 'deg)',
            a: seg(u, 0.04, 0.2),
            ring: rp > 0 && rp < 1 ? { s: lerp(0.7, 1.6, E.outCubic(rp)), o: 0.75 * (1 - rp), kind: 'gold' } : null,
            sparks
          });
        });
      }
    };
  }

  // reduced-motion: short flip, no travel
  function planCalm(ctx) {
    const T = 420;
    return {
      duration: T,
      frame(t) {
        ctx.coins.forEach((k) => {
          const f = E.inOut(seg(t, 0, T)), d = k.a0 === k.a1 ? 360 : mod(k.a1 - k.a0, 360);
          apply(k.c, {
            gx: k.gx1, gy: k.gy1, h: 0, rz: k.rz1, body: 'rotateX(' + r2(k.a0 + d * f) + 'deg)'
          });
        });
      }
    };
  }

  function restFrom(k) {                                   // pose the coin had before this throw started
    return { gx: k.gx0, gy: k.gy0, h: 0, rz: k.rz0, body: 'rotateX(' + k.a0 + 'deg)', a: 1 };
  }

  const PLANNERS = { arc: planArc, drop: planDrop, spin: planSpin, glow: planGlow, calm: planCalm };

  /* ---------- public ---------- */
  function create(root, opts) {
    opts = opts || {};
    const coinPath = opts.coinPath || 'coins/';
    const count = 3;
    const urls = opts.coins || Array.from({ length: count }, (_, i) => ({
      yang: coinPath + 'coin' + (i + 1) + '_yang.webp', yin: coinPath + 'coin' + (i + 1) + '_yin.webp'
    }));
    const mq = global.matchMedia ? global.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

    root.classList.add('ict-stage');
    root.setAttribute('role', 'group');
    if (!root.getAttribute('aria-label')) root.setAttribute('aria-label', 'Tři mince pro hod I-Ching');
    root.textContent = '';
    const orb = el('div', 'ict-orb');
    const coins = urls.slice(0, count).map((u, i) => buildCoin(i, u));
    root.append(...coins.map((c) => c.slot), orb);

    const faces0 = secureFaces(count);
    const rng0 = mulberry32(randomSeed());
    coins.forEach((c, i) => { c.face = faces0[i]; c.rz = (rng0() - 0.5) * 120; c.gx = (rng0() - 0.5) * 0.1; c.gy = (rng0() - 0.5) * 0.08; });
    const measure = () => coins.forEach((c) => { c.cs = c.slot.clientWidth || c.cs; });
    const paintRest = () => { measure(); coins.forEach((c) => apply(c, restState(c))); };
    paintRest();
    if (global.ResizeObserver) new ResizeObserver(() => { if (!pending) paintRest(); }).observe(root);

    let pending = null, bag = [], last = null;

    function nextVariant() {
      if (!bag.length) {
        bag = VARIANTS.slice();
        for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(rng0() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; }
        if (bag[bag.length - 1] === last) { const j = Math.floor(rng0() * (bag.length - 1)); [bag[bag.length - 1], bag[j]] = [bag[j], bag[bag.length - 1]]; }
      }
      last = bag.pop();                                    // pop from the end: first thrown = bag[len-1]
      return last;
    }

    function makePlan(variant, faces, seed) {
      measure();
      const rng = mulberry32(seed == null ? randomSeed() : seed);
      const rect = root.getBoundingClientRect();
      const midX = rect.width / 2;
      const ctxCoins = coins.map((c, i) => {
        const slotX = c.slot.offsetLeft + c.slot.offsetWidth / 2;
        return {
          c, a0: FACE_ANGLE[c.face], a1: FACE_ANGLE[faces[i]],
          rz0: c.rz, rz1: (rng() - 0.5) * 360,
          gx0: c.gx, gy0: c.gy, gx1: (rng() - 0.5) * 0.28, gy1: (rng() - 0.5) * 0.12,
          relX: (midX - slotX) / c.cs
        };
      });
      const plan = PLANNERS[variant]({ rng, coins: ctxCoins, orb });
      plan.ctxCoins = ctxCoins;
      return plan;
    }

    function commit(plan, faces) {
      plan.ctxCoins.forEach((k, i) => {
        const c = k.c; c.face = faces[i]; c.rz = k.rz1; c.gx = k.gx1; c.gy = k.gy1;
        apply(c, restState(c));
      });
      orb.style.opacity = 0;
    }

    function throwCoins(o) {
      if (pending) return pending;
      o = o || {};
      const faces = o.faces && o.faces.length === count ? o.faces.slice() : secureFaces(count);
      const variant = mq.matches ? 'calm' : (o.variant && PLANNERS[o.variant] ? o.variant : (opts.variant && PLANNERS[opts.variant] ? opts.variant : nextVariant()));
      const plan = makePlan(variant, faces, o.seed);
      const res = resultFrom(faces, variant);
      if (typeof opts.onStart === 'function') opts.onStart(res);
      pending = new Promise((resolve) => {
        let t0 = null;
        const step = (now) => {
          if (t0 === null) t0 = now;
          const t = now - t0;
          if (t >= plan.duration) { plan.frame(plan.duration); commit(plan, faces); pending = null; resolve(res); return; }
          plan.frame(t); global.requestAnimationFrame(step);
        };
        global.requestAnimationFrame(step);
      });
      return pending;
    }

    return {
      throwCoins,
      get busy() { return !!pending; },
      variants: VARIANTS.slice(),
      label: (v) => LABELS[v] || v,
      // dev/test: render one frame of a variant without committing (call reset() afterwards)
      preview(variant, t, faces, seed) {
        faces = faces || ['yang', 'yin', 'yang'];
        const plan = makePlan(variant, faces, seed == null ? 12345 : seed);
        plan.frame(clamp(t, 0, plan.duration));
        return plan.duration;
      },
      reset: paintRest
    };
  }

  global.IChingThrow = { create, VARIANTS, LABELS, resultFrom };
})(window);
