/* ORACOOLIO NUMERO — Geometry Atelier v6.0
 * Decorative, deterministic SVG geometry generated ONLY from values that the
 * existing numero.js renderer already displayed. No calculation is changed.
 * v6 refines impossible structures, corrects the lunar terminator and adds
 * architectural reliefs to narrative panels, while preserving every computed text/value from numero.js.
 */
(() => {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';
  const ROOT = document.getElementById('outputArea');
  if (!ROOT) return;

  const numberOnScreen = (node) => {
    if (!node) return null;
    const match = (node.textContent || '').trim().match(/^\d+/);
    if (!match) return null;
    const value = Number(match[0]);
    return Number.isSafeInteger(value) && value >= 0 && value <= 999 ? value : null;
  };
  const round = (x) => Math.round(x * 100) / 100;
  const escId = (s) => s.replace(/[^a-zA-Z0-9_-]/g, '-');
  const svg = (id, viewBox, content, className = '') =>
    `<svg xmlns="${NS}" class="${className}" viewBox="${viewBox}" aria-hidden="true" focusable="false" role="presentation" preserveAspectRatio="xMidYMid meet">${content}</svg>`;
  const path = (d, stroke = '#8d7150', width = 1, other = '') =>
    `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="square" stroke-linejoin="miter" ${other}/>`;
  const norm1to9 = (value) => {
    if (!Number.isFinite(value)) return 1;
    const n = Math.abs(value) % 9;
    return n === 0 ? 9 : n;
  };

  const cycleMeaning = {
    cs: {
      1: 'Osa · nový směr', 2: 'Most · spolupráce', 3: 'Triáda · tvořivost',
      4: 'Základ · stabilita', 5: 'Zlom · změna', 6: 'Oblouk · harmonie',
      7: 'Věž · hledání', 8: 'Dvojitý proud · síla', 9: 'Kruh · završení'
    },
    en: {
      1: 'Axis · new direction', 2: 'Bridge · cooperation', 3: 'Triad · creativity',
      4: 'Foundation · stability', 5: 'Turning point · change', 6: 'Arc · harmony',
      7: 'Tower · reflection', 8: 'Double current · power', 9: 'Circle · completion'
    }
  };

  const activeLang = () => document.documentElement.lang === 'en' ? 'en' : 'cs';


  function radialGuide(cx, cy, rx, ry, rays = 12) {
    let out = '';
    for (let i = 0; i < rays; i++) {
      const a = (Math.PI * 2 * i) / rays;
      out += path(`M${round(cx)} ${round(cy)}L${round(cx + Math.cos(a) * rx)} ${round(cy + Math.sin(a) * ry)}`, '#b89b71', 0.45, 'opacity=".16"');
    }
    out += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#b89b71" stroke-width=".55" opacity=".18"/>`;
    out += `<ellipse cx="${cx}" cy="${cy}" rx="${round(rx * .72)}" ry="${round(ry * .72)}" fill="none" stroke="#b89b71" stroke-width=".45" opacity=".12"/>`;
    return out;
  }

  function tinyFigure(x, y, scale = 1, dark = true) {
    const fill = dark ? '#362718' : '#ead9bd';
    const stroke = dark ? '#362718' : '#60462c';
    return `<g transform="translate(${x} ${y}) scale(${scale})"><circle cx="0" cy="-7" r="3.2" fill="${fill}"/><path d="M0 -3 L0 11 M-5 3 L0 0 L5 3 M-4 17 L0 10 L4 17" stroke="${stroke}" stroke-width="1.5" fill="none" stroke-linecap="round"/></g>`;
  }

  function bridgeMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-bridge-${index}-${value}`);
    const water = Array.from({ length: 9 }, (_, i) => `<path d="M25 ${95 + i * 5}Q130 ${91 + i * 5} 235 ${95 + i * 5}" stroke="#b89b71" stroke-width=".55" opacity="${0.06 + i * 0.02}" fill="none"/>`).join('');
    const treadsL = Array.from({ length: 5 + n }, (_, i) => {
      const t = i / (4 + n);
      return path(`M${round(52 + t * 72)} ${round(79 - t * 30)}l6 6`, '#755636', .85, 'opacity=".8"');
    }).join('');
    const treadsR = Array.from({ length: 5 + n }, (_, i) => {
      const t = i / (4 + n);
      return path(`M${round(137 + t * 72)} ${round(49 + t * 30)}l-6 6`, '#755636', .85, 'opacity=".8"');
    }).join('');
    return svg(id, '0 0 260 135', `
      ${radialGuide(130, 64, 100, 52, 10)}
      ${water}
      <path d="M38 90C62 24 109 24 130 67C151 109 198 109 222 43" stroke="#503920" stroke-width="14" fill="none" opacity=".78"/>
      <path d="M38 90C62 24 109 24 130 67C151 109 198 109 222 43" stroke="#eddcb8" stroke-width="10.6" fill="none"/>
      <path d="M38 43C62 109 109 109 130 67C151 24 198 24 222 90" stroke="#5d4427" stroke-width="14" fill="none" opacity=".82"/>
      <path d="M38 43C62 109 109 109 130 67C151 24 198 24 222 90" stroke="#e5d3ae" stroke-width="10.6" fill="none"/>
      <path d="M36 93H224" stroke="#8a6c47" stroke-width="1" opacity=".35"/>
      ${treadsL}${treadsR}
      ${tinyFigure(66, 54, .78)}
      ${tinyFigure(194, 54, .78)}
    `, 'num-geometry-svg num-geometry-bridge-svg');
  }

  function triadMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-triad-${index}-${value}`);
    let rays='';
    for (let i=0;i<3;i++) {
      const a = -Math.PI/2 + i * 2*Math.PI/3;
      const x = 130 + Math.cos(a) * 42;
      const y = 62 + Math.sin(a) * 26;
      rays += `<path d="M130 62Q${round((130+x)/2)} ${round((62+y)/2-10)} ${round(x)} ${round(y)}" stroke="#785737" stroke-width="10" fill="none" opacity=".82"/>`;
      rays += `<path d="M130 62Q${round((130+x)/2)} ${round((62+y)/2-10)} ${round(x)} ${round(y)}" stroke="#eddcb9" stroke-width="7.2" fill="none"/>`;
    }
    let steps='';
    for (let i=0;i<n+2;i++) {
      const w=10+i*3; const y=103-i*5;
      steps += `<path d="M${130-w} ${y}H${130+w}" stroke="#8b6b46" stroke-width=".85" opacity=".48"/>`;
    }
    return svg(id, '0 0 260 135', `${radialGuide(130, 62, 96, 49, 12)}${rays}${steps}<polygon points="130,26 179,101 81,101" fill="none" stroke="#755532" stroke-width="1.1" opacity=".5"/>${tinyFigure(130,46,.72)}`, 'num-geometry-svg num-geometry-triad-svg');
  }

  function foundationMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-foundation-${index}-${value}`);
    const pts = [[70,36],[147,36],[193,71],[116,71]];
    const rise = [[70,36],[70,89],[116,124],[116,71]];
    const side = [[147,36],[193,71],[193,124],[147,89]];
    const poly = (arr, fill, stroke = '#5f472f', op = 1) => `<polygon points="${arr.map(p=>p.join(',')).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="1.2" opacity="${op}"/>`;
    let steps='';
    for(let i=0;i<4+n;i++) {
      const t=i/(3+n);
      steps += path(`M${round(55+t*34)} ${round(117-t*27)}l15 0`, '#735435', .9, 'opacity=".72"');
      steps += path(`M${round(171+t*28)} ${round(117-t*21)}l-15 0`, '#735435', .9, 'opacity=".72"');
    }
    return svg(id, '0 0 260 135', `
      ${radialGuide(130, 64, 98, 50, 8)}
      ${poly(pts, '#ead8b4')}${poly(rise, '#c4a47d')}${poly(side, '#d9c39d')}
      <polygon points="92,54 136,54 163,75 120,75" fill="#241b13" opacity=".20" stroke="#7a5936" stroke-width=".8"/>
      <path d="M55 117L89 90L89 117" stroke="#6a4e32" stroke-width="10" fill="none" opacity=".82"/>
      <path d="M55 117L89 90L89 117" stroke="#ead6af" stroke-width="7.5" fill="none"/>
      <path d="M205 117L171 91L171 117" stroke="#6a4e32" stroke-width="10" fill="none" opacity=".82"/>
      <path d="M205 117L171 91L171 117" stroke="#ead6af" stroke-width="7.5" fill="none"/>
      ${steps}
    `, 'num-geometry-svg num-geometry-foundation-svg');
  }

  function changeMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-change-${index}-${value}`);
    let bands='';
    for(let i=0;i<6+n;i++) {
      const y=22+i*10;
      bands += `<path d="M33 ${y}C75 ${y-18} 112 ${y+18} 154 ${y}S228 ${y-18} 227 ${y}" stroke="#c0a17b" stroke-width="${i%2?1.4:.8}" opacity="${i%2?.38:.22}" fill="none"/>`;
    }
    return svg(id,'0 0 260 135',`${radialGuide(130,67,99,47,9)}${bands}<path d="M75 100C110 35 150 35 186 100" stroke="#5e4329" stroke-width="12" fill="none" opacity=".8"/><path d="M75 100C110 35 150 35 186 100" stroke="#ead9b8" stroke-width="8.6" fill="none"/><path d="M78 34L182 34" stroke="#7f5d39" stroke-width="1.1" opacity=".48"/><path d="M130 21l15 13-15 13-15-13z" fill="none" stroke="#785a38" stroke-width="1.1" opacity=".55"/>`, 'num-geometry-svg num-geometry-change-svg');
  }

  function harmonyMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-harmony-${index}-${value}`);
    let petals='';
    for(let i=0;i<6;i++) {
      const a = i * Math.PI/3;
      const x = 130 + Math.cos(a) * 26;
      const y = 66 + Math.sin(a) * 18;
      petals += `<ellipse cx="${round(x)}" cy="${round(y)}" rx="30" ry="13" transform="rotate(${round(a*180/Math.PI)} 130 66)" fill="none" stroke="#8f7047" stroke-width="1" opacity=".5"/>`;
    }
    const arcs = Array.from({length: 3 + (n % 3)}, (_,i)=> `<path d="M${50+i*16} 93Q130 ${35-i*4} ${210-i*16} 93" stroke="#705335" stroke-width="${1.1 + i*.15}" opacity=".32" fill="none"/>`).join('');
    return svg(id, '0 0 260 135', `${radialGuide(130,66,100,48,12)}${petals}${arcs}<circle cx="130" cy="66" r="17" fill="none" stroke="#5f4427" stroke-width="8" opacity=".76"/><circle cx="130" cy="66" r="17" fill="none" stroke="#ead9b8" stroke-width="5.5"/>`, 'num-geometry-svg num-geometry-harmony-svg');
  }

  function axisMotif(value, index) {
    const id = escId(`ngeometry-axis-${index}-${value}`);
    const n = norm1to9(value);
    let steps = '';
    for (let i=0;i<8+n;i++) {
      const t=i/(8+n);
      const x=41+t*68;
      steps+=path(`M${round(x)} ${round(118-t*67)}l15 0l0 -4`, '#6d5233', .85, 'opacity=".7"');
    }
    return svg(id,'0 0 260 135',`
      ${radialGuide(130,69,100,54,13)}
      <path d="M35 125H228" stroke="#9a7c56" stroke-width=".8" opacity=".35"/>
      <path d="M117 116V29L130 10L143 29V116Z" fill="#d5b995" stroke="#654a30" stroke-width="1.7"/>
      <path d="M130 10V114" stroke="#664b2d" stroke-width="1.5" opacity=".9"/>
      <path d="M143 30L156 44V116L143 116Z" fill="#ab875e" stroke="#654a30" stroke-width="1"/>
      <path d="M112 114H165" stroke="#f3e6ca" stroke-width="2" opacity=".7"/>
      ${steps}
      <circle cx="130" cy="10" r="4" fill="#f1d79c" stroke="#5b442d" stroke-width=".8"/>
      ${tinyFigure(191,97,.72)}
    `,'num-geometry-svg num-geometry-axis-svg');
  }

  function towerMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-tower-${index}-${value}`);
    let stairs='';
    for(let i=0;i<5+n;i++) {
      stairs += path(`M${45+i*8} ${113-i*6}l12 0`, '#735537', .86, 'opacity=".68"');
    }
    return svg(id,'0 0 260 135',`${radialGuide(130,65,98,48,7)}<path d="M117 112V37L134 21L151 37V112" fill="#dec9a4" stroke="#5c4329" stroke-width="1.2"/><path d="M104 112H164" stroke="#6e5234" stroke-width="11" opacity=".82"/><path d="M104 112H164" stroke="#ead9b8" stroke-width="7.5"/><path d="M117 37Q134 24 151 37" fill="none" stroke="#f2e5c9" stroke-width="1.1" opacity=".7"/>${stairs}${tinyFigure(134,58,.8)}`, 'num-geometry-svg num-geometry-tower-svg');
  }

  function powerMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-power-${index}-${value}`);
    const loops = `<path d="M72 66C72 31 104 28 121 50C140 75 160 74 160 45C160 16 190 15 192 48C194 83 159 99 139 83C118 66 98 65 98 92C98 119 66 119 65 85C64 51 98 35 117 48C136 60 156 62 156 39" stroke="#5e4329" stroke-width="12" fill="none" opacity=".82"/><path d="M72 66C72 31 104 28 121 50C140 75 160 74 160 45C160 16 190 15 192 48C194 83 159 99 139 83C118 66 98 65 98 92C98 119 66 119 65 85C64 51 98 35 117 48C136 60 156 62 156 39" stroke="#ead9b8" stroke-width="8.5" fill="none"/>`;
    let bars='';
    for(let i=0;i<3+(n%4);i++) {
      const x=92+i*24;
      bars += `<path d="M${x} 104V86" stroke="#7b5a38" stroke-width="4" opacity=".42"/>`;
    }
    return svg(id,'0 0 260 135',`${radialGuide(130,65,98,48,8)}${loops}${bars}`, 'num-geometry-svg num-geometry-power-svg');
  }

  function completionMotif(value, index) {
    const n = norm1to9(value);
    const id = escId(`ngeometry-completion-${index}-${value}`);
    let orbits='';
    for(let i=0;i<4+(n%4);i++) {
      const r=20+i*12;
      orbits += `<circle cx="130" cy="66" r="${r}" fill="none" stroke="#9a7d55" stroke-width="${i===0?1.2:.7}" opacity="${.52-i*.08}" stroke-dasharray="${6+i} ${4+i}"/>`;
    }
    const gate = `<path d="M80 105Q130 15 180 105" stroke="#65482a" stroke-width="11" fill="none" opacity=".76"/><path d="M80 105Q130 15 180 105" stroke="#eadab8" stroke-width="7.8" fill="none"/>`;
    return svg(id,'0 0 260 135',`${radialGuide(130,66,100,48,9)}${orbits}${gate}<circle cx="130" cy="66" r="8" fill="#e8d8b8" stroke="#674929" stroke-width="1"/>`, 'num-geometry-svg num-geometry-completion-svg');
  }

  function cycleMotif(value, index) {
    const n = norm1to9(value);
    switch (n) {
      case 1: return axisMotif(value, index);
      case 2: return bridgeMotif(value, index);
      case 3: return triadMotif(value, index);
      case 4: return foundationMotif(value, index);
      case 5: return changeMotif(value, index);
      case 6: return harmonyMotif(value, index);
      case 7: return towerMotif(value, index);
      case 8: return powerMotif(value, index);
      case 9: return completionMotif(value, index);
      default: return bridgeMotif(value, index);
    }
  }

  function nameMotif(value, index) {
    const id = escId(`ngeometry-name-${index}-${value}`);
    const sides = Math.min(12, Math.max(3, value > 9 ? (value % 9) + 4 : value + 2));
    const rings = 3 + (value % 3);
    let art = '';
    for (let r = 0; r < rings; r++) {
      const radius = 14 + r * 8.5;
      const coords = Array.from({ length: sides }, (_, j) => {
        const a = (2 * Math.PI * j) / sides - Math.PI / 2 + (r % 2) * Math.PI / sides;
        return `${round(62 + Math.cos(a) * radius)},${round(62 + Math.sin(a) * radius)}`;
      }).join(' ');
      art += `<polygon points="${coords}" fill="none" stroke="${r % 2 ? '#e5c89b' : '#bda37a'}" stroke-width="${r === 0 ? '1.2' : '.75'}" opacity="${.3 + r * .09}"/>`;
    }
    const chords = Math.min(18, sides + value % 7);
    for (let j = 0; j < chords; j++) {
      const a = 2 * Math.PI * j / chords;
      const b = a + Math.PI * (1.0 + 2 / sides);
      art += path(`M${round(62 + Math.cos(a) * 49)} ${round(62 + Math.sin(a) * 49)}L${round(62 + Math.cos(b) * 35)} ${round(62 + Math.sin(b) * 35)}`, '#b69b72', .6, 'opacity=".4"');
    }
    return svg(id, '0 0 124 124', `<circle cx="62" cy="62" r="53" fill="none" stroke="#aa8d61" opacity=".4" stroke-width=".7"/>${art}<circle cx="62" cy="62" r="4" fill="none" stroke="#e6d2aa" opacity=".8"/>`, 'num-geometry-svg num-geometry-name-svg');
  }

  function cellMotif(digit, count, index) {
    const id = escId(`ngeometry-cell-${index}-${digit}-${count}`);
    const n = Math.max(0, Math.min(8, count));
    let shapes = '';
    if (!n) {
      for (let i = 0; i < 5; i++) shapes += path(`M${i * 19 - 10} 92L${i * 19 + 50} 0`, '#866f4f', .65, 'opacity=".3"');
      shapes += '<circle cx="50" cy="50" r="28" fill="none" stroke="#9c8866" stroke-dasharray="3 6" opacity=".35"/>';
    } else {
      for (let i = 0; i < n; i++) {
        const r = 11 + i * 7.3;
        let pts = '';
        const sides = 3 + (digit % 6);
        for (let j = 0; j < sides; j++) {
          const a = j * Math.PI * 2 / sides - Math.PI / 2 + i * .11;
          pts += `${round(50 + Math.cos(a) * r)},${round(50 + Math.sin(a) * r)} `;
        }
        shapes += `<polygon points="${pts.trim()}" stroke="#6a4b2c" stroke-width="${i === n - 1 ? 1.6 : .9}" stroke-opacity=".68" fill="none" opacity=".64"/>`;
      }
      shapes += `<path d="M11 89L89 11M11 11L89 89" stroke="#a48b65" stroke-width=".55" opacity=".48"/>`;
    }
    return svg(id, '0 0 100 100', shapes, 'num-geometry-svg num-geometry-cell-svg');
  }

  // Lunar atlas: accurately illuminated disks, not pictograms or emoji glyphs.
  // The existing lunar engine remains the source of truth: its already rendered
  // phase icon is read as a discrete one-of-eight state, never recalculated.
  const phaseIndex = {'🌑':0,'🌒':1,'🌓':2,'🌔':3,'🌕':4,'🌖':5,'🌗':6,'🌘':7};

  function moonDisk(index, cx, cy, radius, key) {
    const id=escId(`num-moon-${key}`);
    const isWaxing=index>0 && index<4;
    const isWaning=index>4 && index<8;
    const illumFrac=[0,.1464466094,.5,.8535533906,1,.8535533906,.5,.1464466094][index];
    const orientation=isWaning ? -1 : 1;
    // terminator factor +1 at new moon, 0 at quarter, -1 at full moon.
    const k=Math.cos(Math.PI * (isWaning ? 8-index : index)/4);
    const coords=[];
    const N=60;
    for(let i=0;i<=N;i++) {
      const y=-radius+(i/N)*2*radius;
      const x=Math.sqrt(Math.max(0,radius*radius-y*y));
      coords.push([cx+orientation*x,cy+y]);
    }
    for(let i=N;i>=0;i--) {
      const y=-radius+(i/N)*2*radius;
      const x=Math.sqrt(Math.max(0,radius*radius-y*y));
      coords.push([cx+orientation*k*x,cy+y]);
    }
    const poly=coords.map(v=>`${round(v[0])},${round(v[1])}`).join(' ');
    const lit=index===0 ? '' : index===4
      ? `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="#eee0c1"/>`
      : `<polygon points="${poly}" fill="#eee0c1"/>`;
    let engraving='';
    const spots=[[ -.37,-.35,.18 ],[ .23,-.38,.11 ],[ .44,.20,.15 ],[ -.32,.24,.12 ],[ .08,.53,.08 ],[ .05,-.08,.23 ]];
    for (let i=0;i<spots.length;i++) {
      const [ox,oy,r]=spots[i];
      const px=cx+ox*radius,py=cy+oy*radius,cr=r*radius;
      engraving+=`<circle cx="${round(px)}" cy="${round(py)}" r="${round(cr)}" fill="#71614e" opacity=".20"/>`;
      engraving+=`<circle cx="${round(px-cr*.11)}" cy="${round(py-cr*.08)}" r="${round(cr*.83)}" fill="none" stroke="#7d6c59" stroke-width=".65" opacity=".58"/>`;
    }
    for (let i=0;i<17;i++) {
      const y=cy-radius+i*radius*2/16;
      const inside=Math.sqrt(Math.max(0,radius*radius-(y-cy)*(y-cy)));
      engraving+=path(`M${round(cx-inside)} ${round(y)}l${round(inside*2)} 0`,'#7e6d53',.35,'opacity=".14"');
    }
    return `
      <defs><clipPath id="${id}-sphere"><circle cx="${cx}" cy="${cy}" r="${radius}"/></clipPath>
      <clipPath id="${id}-lit">${index===4?`<circle cx="${cx}" cy="${cy}" r="${radius}"/>`:index===0?'':`<polygon points="${poly}"/>`}</clipPath></defs>
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="#201c18" stroke="#c2a374" stroke-width="${radius>14?1.5:.8}"/>
      ${lit}
      <g clip-path="url(#${id}-lit)">${engraving}</g>
      <circle cx="${cx}" cy="${cy}" r="${radius-1}" fill="none" stroke="#c9af87" stroke-opacity=".50" stroke-width=".65"/>
    `;
  }

  function moonPanel(icon) {
    const current=Object.prototype.hasOwnProperty.call(phaseIndex,icon) ? phaseIndex[icon] : 0;
    const id='ngeometry-lunarium';
    let orbit='';
    const phaseXs=[27,54,81,108,135,162,189,216];
    for(let i=0;i<8;i++) {
      orbit+=`<g opacity="${i===current?1:.70}">${moonDisk(i,phaseXs[i],23,8.0,`${id}-small-${i}`)}`;
      if(i===current)orbit+=`<circle cx="${phaseXs[i]}" cy="23" r="11.5" fill="none" stroke="#e1bd82" stroke-width=".9"/>`;
      orbit+='</g>';
    }
    let guide=radialGuide(122,87,74,45,12);
    guide+=`<ellipse cx="122" cy="87" rx="104" ry="48" fill="none" stroke="#96754f" stroke-width=".5" stroke-dasharray="2 7" opacity=".45"/>`;
    for(let j=0;j<17;j++) {
      const t=j/16, x=12+220*t;
      guide+=`<path d="M${round(x)} 54L${round(233-x)} 125" fill="none" stroke="#ab8e65" stroke-width=".28" opacity=".13"/>`;
    }
    return svg(id,'0 0 244 153',`
      <defs><pattern id="${id}-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-37)"><path d="M0 0V5" stroke="#9d815d" stroke-width=".5" opacity=".25"/></pattern></defs>
      <rect x=".75" y=".75" width="242.5" height="151.5" fill="none" stroke="#d5b17c" stroke-opacity=".35"/>
      <path d="M11 44H233M15 143H228" stroke="#a88657" stroke-width=".8" opacity=".48"/>
      ${guide}${orbit}
      <g transform="translate(-2 11)">${moonDisk(current,124,83,36,`${id}-main`)}</g>
      <path d="M65 135L82 117L94 135M150 135L164 116L182 135" stroke="#a88b63" stroke-width="1" opacity=".5" fill="none"/>
      <g opacity=".75">${tinyFigure(26,125,.48)}${tinyFigure(218,125,.48)}</g>
      <path d="M122 39v-5M118 36h8M122 135v5" stroke="#b59568" stroke-width=".8" opacity=".45"/>
    `,'num-geometry-svg num-geometry-moon-svg');
  }

  function insertArt(container, className, markup, placement = 'prepend') {
    if (!container || container.querySelector(`:scope > .${className}`)) return;
    const holder = document.createElement('span');
    holder.className = `num-geometry-art ${className}`;
    holder.setAttribute('aria-hidden', 'true');
    holder.innerHTML = markup;
    if (placement === 'append') container.append(holder);
    else container.prepend(holder);
  }

  function applyToday(widget) {
    if (!widget || widget.dataset.numeroAtelierToday === '1') return;
    const right=widget.querySelector('.today-right');
    const symbol=widget.querySelector('.moon-symbol');
    const name=widget.querySelector('.moon-name');
    if(right && symbol && name) {
      const icon=(symbol.textContent || '').trim();
      right.dataset.phaseIndex=String(Object.prototype.hasOwnProperty.call(phaseIndex,icon) ? phaseIndex[icon] : 0);
      symbol.classList.add('num-moon-hidden-symbol');
      symbol.setAttribute('aria-hidden','true');
      insertArt(right,'num-lunar-art',moonPanel(icon),'prepend');
      // Keep the original symbol text in the DOM for exact data integrity;
      // CSS visually hides the legacy emoji after SVG successfully inserts.
    }
    widget.dataset.numeroAtelierToday='1';
  }

  function applyNames(card) {
    if (!card || card.dataset.numeroAtelier === '1') return;
    const nodes = [...card.querySelectorAll('.pinnacles-grid > .pinnacle-card')];
    if (!nodes.length) return;
    card.classList.add('num-names-atlas');
    nodes.forEach((node, i) => {
      const value = numberOnScreen(node.querySelector('.pinnacle-number'));
      if (value === null) return;
      node.dataset.geometryValue = String(value);
      insertArt(node, 'num-name-art', nameMotif(value, i));
    });
    card.dataset.numeroAtelier = '1';
  }

  function applyCycles(card) {
    if (!card || card.dataset.numeroAtelier === '1') return;
    const nodes = [...card.querySelectorAll('.pinnacles-grid > .pinnacle-card')];
    if (!nodes.length) return;
    card.classList.add('num-cycles-atlas');
    nodes.forEach((node, i) => {
      const value = numberOnScreen(node.querySelector('.pinnacle-number'));
      if (value === null) return;
      const norm = norm1to9(value);
      node.dataset.geometryValue = String(value);
      node.dataset.geometryMeaning = cycleMeaning[activeLang()][norm] || '';
      node.title = cycleMeaning[activeLang()][norm] || '';
      insertArt(node, 'num-cycle-art', cycleMotif(value, i));
    });
    card.dataset.numeroAtelier = '1';
  }

  const lines = [
    [7, 8, 9], [4, 5, 6], [1, 2, 3],
    [7, 4, 1], [8, 5, 2], [9, 6, 3],
    [7, 5, 3], [9, 5, 1]
  ];

  function applyGrid(grid) {
    if (!grid || grid.dataset.numeroAtelier === '1') return;
    const cells = [...grid.querySelectorAll(':scope > .num-grid-cell')];
    if (cells.length !== 9) return;
    const records = new Map();
    cells.forEach((cell, i) => {
      const label = cell.querySelector('.num-grid-label');
      const number = numberOnScreen(label);
      if (number === null) return;
      const visible = (cell.firstChild && cell.firstChild.nodeType === Node.TEXT_NODE)
        ? cell.firstChild.textContent.trim() : '';
      const count = cell.classList.contains('missing') ? 0 : [...visible].filter(c => c === String(number)).length;
      const finalCount = Math.max(0, Math.min(8, count));
      cell.dataset.geometryCount = String(finalCount);
      records.set(number, finalCount);
      insertArt(cell, 'num-cell-art', cellMotif(number, finalCount, i), 'append');
    });
    const positions = new Map([[7, [50, 50]], [8, [150, 50]], [9, [250, 50]],
      [4, [50, 150]], [5, [150, 150]], [6, [250, 150]],
      [1, [50, 250]], [2, [150, 250]], [3, [250, 250]]]);
    let markup = '';
    for (const line of lines) {
      if (line.every(n => (records.get(n) || 0) > 0)) {
        const a = positions.get(line[0]), b = positions.get(line[2]);
        markup += `<path d="M${a.join(' ')}L${b.join(' ')}" stroke="#704927" stroke-width="3" opacity=".38" stroke-linecap="square"/>`;
        for (const n of line) {
          const p = positions.get(n);
          markup += `<circle cx="${p[0]}" cy="${p[1]}" r="8" fill="none" stroke="#80603e" stroke-width="1" opacity=".65"/>`;
        }
      }
    }
    if (markup) insertArt(grid, 'num-grid-traces', svg('ngeometry-grid', '0 0 300 300', markup, 'num-geometry-svg num-geometry-traces-svg'), 'append');
    grid.classList.add('num-grid-atlas');
    grid.dataset.numeroAtelier = '1';
  }

  function foundationSeal(day, life) {
    const a=norm1to9(day), b=norm1to9(life);
    const rings=[a,b,(a+b)%9||9];
    let art=radialGuide(130,68,91,57,12);
    rings.forEach((v,i)=>{
      const radius=21+i*17;
      const sides=Math.max(3,Math.min(12,2+v));
      const pts=Array.from({length:sides},(_,j)=>{
        const ang=Math.PI*2*j/sides-Math.PI/2+i*.12;
        return `${round(130+Math.cos(ang)*radius)},${round(68+Math.sin(ang)*radius*.73)}`;
      }).join(' ');
      art+=`<polygon points="${pts}" fill="none" stroke="#795839" stroke-width="${i===1?1.5:.8}" opacity="${.43-i*.08}"/>`;
    });
    art+=`<path d="M54 110L130 25L206 110L130 73Z" fill="none" stroke="#775734" stroke-width="2" opacity=".40"/>`;
    return svg('ngeometry-foundation-seal','0 0 260 135',art,'num-geometry-svg num-geometry-foundation-seal-svg');
  }

  function applyFoundation(card) {
    if(!card || card.dataset.numeroAtelierFoundation==='1')return;
    const values=[...card.querySelectorAll('.result-item-flex > .big-number')].map(numberOnScreen).filter(x=>x!==null);
    if(values.length!==2)return;
    card.classList.add('num-foundation-atlas');
    insertArt(card,'num-foundation-seal',foundationSeal(values[0],values[1]));
    card.dataset.numeroAtelierFoundation='1';
  }

  function applyKarma(card) {
    if(!card || card.dataset.numeroAtelierKarma==='1')return;
    card.classList.add('num-karma-atlas');
    const blocks=[...card.querySelectorAll(':scope > div[style*="border-left"]')];
    blocks.forEach((block,index)=>{
      const first=block.querySelector('p > span');
      const match=(first?.textContent||'').match(/\b([1-9])\b/);
      if(!match)return;
      const value=Number(match[1]);
      block.classList.add('num-karma-lesson');
      insertArt(block,'num-karma-seal',nameMotif(value,index),'append');
    });
    card.dataset.numeroAtelierKarma='1';
  }

  function applySynastry(card) {
    if (!card || card.dataset.numeroAtelier === '1') return;
    const number = numberOnScreen(card.querySelector('span[style*="font-size:3rem"]'));
    if (number !== null) {
      card.classList.add('num-synastry-atlas');
      const art = `<path d="M9 53C34 8 72 96 111 53S184 9 211 53" fill="none" stroke="#977a50" stroke-width="9" stroke-opacity=".18"/><path d="M9 53C35 101 72 11 111 53S181 103 211 53" fill="none" stroke="#4e644e" stroke-width="9" stroke-opacity=".17"/>${nameMotif(number, 7)}`;
      insertArt(card, 'num-synastry-art', svg('ngeometry-syn', '0 0 220 110', art, 'num-geometry-svg num-geometry-syn-svg'));
    }
    card.querySelectorAll('.num-grid-visual').forEach(applyGrid);
    card.dataset.numeroAtelier = '1';
  }

  function decorate() {
    applyToday(ROOT.querySelector(':scope > .today-widget'));
    const cards = [...ROOT.querySelectorAll(':scope > .card')];
    const name = cards.find(card => card.querySelector('.pinnacle-card.maturity-card'));
    const cycles = cards.find(card => card.querySelector('.pinnacles-grid') && !card.querySelector('.maturity-card'));
    const grid = cards.find(card => card.querySelector('.num-grid-visual'));
    const foundation=cards.find(card=>card.querySelectorAll('.result-item-flex > .big-number').length===2);
    const karma=cards.find(card=>card.querySelector(':scope > div[style*="border-left"]'));
    applyFoundation(foundation);
    applyKarma(karma);
    applyNames(name);
    applyCycles(cycles);
    if (grid) grid.querySelectorAll('.num-grid-visual').forEach(applyGrid);
    ROOT.querySelectorAll(':scope > .synastry-block').forEach(applySynastry);
  }

  const observer = new MutationObserver((mutations) => {
    if (mutations.some(m => m.type === 'childList')) decorate();
  });
  observer.observe(ROOT, { childList: true });
  decorate();
})();
