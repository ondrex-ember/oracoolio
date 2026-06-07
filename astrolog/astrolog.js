// ══════════════════════════════════════════════════════════════
//  ORACOOLIO — Astrolog v1.2  (Sprint B: Astronomy Engine)
//  © Oracoolio / Ondrex, Nový Bor
// ══════════════════════════════════════════════════════════════

// ── DATA ──────────────────────────────────────────────────────
const PLANETS = [
  { id:"Slunce",  name_en:"Sun",     glyph:"☀", retro:false, body:"Sun"     },
  { id:"Luna",    name_en:"Moon",    glyph:"☽", retro:false, body:"Moon"    },
  { id:"Merkur",  name_en:"Mercury", glyph:"☿", retro:true,  body:"Mercury" },
  { id:"Venuše",  name_en:"Venus",   glyph:"♀", retro:true,  body:"Venus"   },
  { id:"Mars",    name_en:"Mars",    glyph:"♂", retro:true,  body:"Mars"    },
  { id:"Jupiter", name_en:"Jupiter", glyph:"♃", retro:true,  body:"Jupiter" },
  { id:"Saturn",  name_en:"Saturn",  glyph:"♄", retro:true,  body:"Saturn"  },
  { id:"Uran",    name_en:"Uranus",  glyph:"♅", retro:true,  body:"Uranus"  },
  { id:"Neptun",  name_en:"Neptune", glyph:"♆", retro:true,  body:"Neptune" },
  { id:"Pluto",   name_en:"Pluto",   glyph:"♇", retro:true,  body:"Pluto"   }
];

const ZNAMENI = [
  {n:1, name:"Beran",    name_en:"Aries",       sym:"♈"},{n:2,  name:"Býk",      name_en:"Taurus",      sym:"♉"},
  {n:3, name:"Blíženci", name_en:"Gemini",       sym:"♊"},{n:4,  name:"Rak",       name_en:"Cancer",      sym:"♋"},
  {n:5, name:"Lev",      name_en:"Leo",          sym:"♌"},{n:6,  name:"Panna",     name_en:"Virgo",       sym:"♍"},
  {n:7, name:"Váhy",     name_en:"Libra",        sym:"♎"},{n:8,  name:"Štír",      name_en:"Scorpio",     sym:"♏"},
  {n:9, name:"Střelec",  name_en:"Sagittarius",  sym:"♐"},{n:10, name:"Kozoroh",   name_en:"Capricorn",   sym:"♑"},
  {n:11,name:"Vodnář",   name_en:"Aquarius",     sym:"♒"},{n:12, name:"Ryby",      name_en:"Pisces",      sym:"♓"}
];

const KAT_NAMES = {
  osobnost:"Osobnost", zdravi:"Zdraví", finance:"Finance",
  laska:"Láska", povolani:"Povolání", cestovani:"Cestování"
};

const TIMEZONES = [
  { group:"— Střední Evropa —", zones:[
    { val:"Europe/Prague",  label:"Praha, Berlín, Vídeň, Budapešť — CET/CEST (UTC+1/+2)" },
    { val:"Europe/Warsaw",  label:"Varšava, Bratislava — CET/CEST (UTC+1/+2)" },
    { val:"Europe/Rome",    label:"Řím, Madrid, Paříž — CET/CEST (UTC+1/+2)" },
  ]},
  { group:"— Záp. Evropa —", zones:[
    { val:"Europe/London",      label:"Londýn, Dublin — GMT/BST (UTC+0/+1)" },
    { val:"Europe/Lisbon",      label:"Lisabon — WET/WEST (UTC+0/+1)" },
    { val:"Atlantic/Reykjavik", label:"Reykjavík — GMT (UTC+0)" },
  ]},
  { group:"— Vých. Evropa & Blízký východ —", zones:[
    { val:"Europe/Bucharest", label:"Bukurešť, Helsinki, Atény — EET/EEST (UTC+2/+3)" },
    { val:"Europe/Kiev",      label:"Kyjev, Riga, Vilnius — EET/EEST (UTC+2/+3)" },
    { val:"Europe/Moscow",    label:"Moskva — MSK (UTC+3)" },
    { val:"Europe/Istanbul",  label:"Istanbul — TRT (UTC+3)" },
    { val:"Asia/Tehran",      label:"Teherán — IRST (UTC+3:30/+4:30)" },
    { val:"Asia/Dubai",       label:"Dubaj, Abu Dhabi — GST (UTC+4)" },
  ]},
  { group:"— Asie —", zones:[
    { val:"Asia/Karachi",   label:"Karáčí, Islámábád — PKT (UTC+5)" },
    { val:"Asia/Kolkata",   label:"Indie — IST (UTC+5:30)" },
    { val:"Asia/Dhaka",     label:"Dháka — BST (UTC+6)" },
    { val:"Asia/Bangkok",   label:"Bangkok, Jakarta — ICT (UTC+7)" },
    { val:"Asia/Shanghai",  label:"Peking, Šanghaj — CST (UTC+8)" },
    { val:"Asia/Singapore", label:"Singapur — SGT (UTC+8)" },
    { val:"Asia/Tokyo",     label:"Tokio — JST (UTC+9)" },
    { val:"Asia/Seoul",     label:"Soul — KST (UTC+9)" },
  ]},
  { group:"— Afrika —", zones:[
    { val:"Africa/Cairo",   label:"Káhira — EET (UTC+2)" },
    { val:"Africa/Lagos",   label:"Lagos — WAT (UTC+1)" },
    { val:"Africa/Nairobi", label:"Nairobi — EAT (UTC+3)" },
  ]},
  { group:"— Sev. Amerika —", zones:[
    { val:"America/New_York",    label:"New York, Miami — EST/EDT (UTC-5/-4)" },
    { val:"America/Chicago",     label:"Chicago, Dallas — CST/CDT (UTC-6/-5)" },
    { val:"America/Denver",      label:"Denver — MST/MDT (UTC-7/-6)" },
    { val:"America/Los_Angeles", label:"Los Angeles — PST/PDT (UTC-8/-7)" },
    { val:"America/Anchorage",   label:"Anchorage — AKST/AKDT (UTC-9/-8)" },
    { val:"Pacific/Honolulu",    label:"Honolulu — HST (UTC-10)" },
  ]},
  { group:"— Jižní & Stř. Amerika —", zones:[
    { val:"America/Mexico_City",             label:"Mexico City — CST/CDT (UTC-6/-5)" },
    { val:"America/Bogota",                  label:"Bogotá, Lima — COT (UTC-5)" },
    { val:"America/Sao_Paulo",               label:"São Paulo — BRT/BRST (UTC-3/-2)" },
    { val:"America/Argentina/Buenos_Aires",  label:"Buenos Aires — ART (UTC-3)" },
  ]},
  { group:"— Oceánie —", zones:[
    { val:"Australia/Perth",    label:"Perth — AWST (UTC+8)" },
    { val:"Australia/Adelaide", label:"Adelaide — ACST/ACDT (UTC+9:30/+10:30)" },
    { val:"Australia/Sydney",   label:"Sydney, Melbourne — AEST/AEDT (UTC+10/+11)" },
    { val:"Pacific/Auckland",   label:"Auckland — NZST/NZDT (UTC+12/+13)" },
  ]},
  { group:"— UTC —", zones:[
    { val:"UTC", label:"UTC — Koordinovaný světový čas (UTC+0)" },
  ]},
];

// ── i18n ──────────────────────────────────────────────────────
// Přidávej klíče sem průběžně s každým novým modulem.
// Přepnutí jazyka = setLang('en') → re-render.
const STRINGS = {
  cs: {
    // Modul A – Sekta
    sekta_denni:       'Denní horoskop',
    sekta_nocni:       'Noční horoskop',
    voduci_svetlo:     'Vůdčí světlo',
    slunce:            'Slunce',
    luna:              'Luna',
    sekta_info_title:  'Co je sekta horoskopu?',
    sekta_info_text:   'Sekta (z lat. „secta solis") určuje, zda bylo Slunce při narození nad nebo pod horizontem. Je-li Slunce nad obzorem (domy 7–12), jde o <strong>denní horoskop</strong> — vůdčím světlem je Slunce. Je-li pod obzorem (domy 1–6), jde o <strong>noční horoskop</strong> — vůdčí světlo je Luna. Sekta ovlivňuje přirozené dobroděje a škůdce a je základem pro výpočet Arabských losů a Firdarií.',
    // Bannery
    banner_vypocitan:  'Horoskop vypočítán',
    banner_vyhrada:    'Vypočítáno s výhradami',
    banner_manual:     'Manuální zadání',
    banner_manual_txt: 'Výpočet není dostupný. Zadejte pozice planet ručně.',
    banner_narozeniny: 'Narozeniny',
    banner_ascendent:  'Ascendent',
    banner_domy:       'Systém domů',
    btn_prepocitat:    '↺ Přepočítat',
    btn_upravit:       'Upravit data',
    // Stepy
    step1_label: 'Narozeniny',
    step2_label: 'Planety',
    step3_label: 'Témata',
    step4_label: 'Výklad',
    // Čas
    cas_neznamy:  '(čas neznámý)',
    // Geocoding
    geo_hledam:        'Hledám…',
    geo_hledat:        'Hledat',
    geo_nenalezeno:    (q) => `Místo „${q}" nebylo nalezeno. Zkuste anglický název nebo přidejte stát.`,
    geo_chyba:         (msg) => `Chyba připojení (${msg}). Zkontrolujte internet.`,
    geo_confirm_cas:   'Čas narození není zadán.\n\nBez přesného času nelze správně vypočítat Ascendent ani domy.\n\nPokračovat s odhadem (poledne)?',
    geo_confirm_misto: 'Místo narození nebylo ověřeno (souřadnice chybí).\n\nAscendent a domy nelze vypočítat. Pokračovat bez místa?',
    warn_cas:          'Čas nebyl zadán — použito poledne (12:00). Ascendent a domy jsou pouze přibližné.',
    warn_misto:        'Souřadnice místa chybí — Ascendent a domy nelze určit.',
    // Výklad (Step IV)
    vyklad_loading:    'Sestavuji výklad',
    vyklad_prazdno:    'Žádné interpretace neodpovídají zadaným pozicím.\nZkuste zadat více planet nebo rozšiřte výběr témat.',
    badge_high:        'Silná shoda',
    badge_medium:      'Shoda',
    badge_low:         'Slabá shoda',
    // Dignities panel
    dignity_pname:     (p) => p.id,
  },
  en: {
    // Module A – Sect
    sekta_denni:       'Diurnal chart',
    sekta_nocni:       'Nocturnal chart',
    voduci_svetlo:     'Light of sect',
    slunce:            'Sun',
    luna:              'Moon',
    sekta_info_title:  'What is chart sect?',
    sekta_info_text:   'Sect (from Latin "secta solis") determines whether the Sun was above or below the horizon at birth. If the Sun is above the horizon (houses 7–12), it is a <strong>diurnal chart</strong> — its light of sect is the Sun. If below (houses 1–6), it is a <strong>nocturnal chart</strong> — the light of sect is the Moon. Sect governs which planets are natural benefics and malefics, and is fundamental for Arabic Lots and Firdar calculations.',
    // Banners
    banner_vypocitan:  'Chart calculated',
    banner_vyhrada:    'Calculated with caveats',
    banner_manual:     'Manual entry',
    banner_manual_txt: 'Automatic calculation unavailable. Enter planet positions manually.',
    banner_narozeniny: 'Birth data',
    banner_ascendent:  'Ascendant',
    banner_domy:       'House system',
    btn_prepocitat:    '↺ Recalculate',
    btn_upravit:       'Edit data',
    // Steps
    step1_label: 'Birth data',
    step2_label: 'Planets',
    step3_label: 'Topics',
    step4_label: 'Reading',
    // Time
    cas_neznamy:  '(time unknown)',
    // Geocoding
    geo_hledam:        'Searching…',
    geo_hledat:        'Search',
    geo_nenalezeno:    (q) => `Location "${q}" not found. Try the English name or add the country.`,
    geo_chyba:         (msg) => `Connection error (${msg}). Check your internet.`,
    geo_confirm_cas:   'Birth time not entered.\n\nWithout an exact time, the Ascendant and houses cannot be calculated correctly.\n\nContinue with an estimate (noon)?',
    geo_confirm_misto: 'Birth place not verified (coordinates missing).\n\nAscendant and houses cannot be calculated. Continue without a place?',
    warn_cas:          'Time not entered — noon (12:00) used. Ascendant and houses are approximate only.',
    warn_misto:        'Place coordinates missing — Ascendant and houses cannot be determined.',
    // Reading (Step IV)
    vyklad_loading:    'Building your reading',
    vyklad_prazdno:    'No interpretations match the entered positions.\nTry entering more planets or broaden your topic selection.',
    badge_high:        'Strong match',
    badge_medium:      'Match',
    badge_low:         'Weak match',
    // Dignities panel
    dignity_pname:     (p) => p.name_en,
  }
};

let LANG = 'cs';
const T = key => STRINGS[LANG]?.[key] ?? STRINGS.cs[key] ?? key;

/** Vrátí lokalizovaný název planety podle jejího CS id */
function planetName(id) {
  const p = PLANETS.find(pl => pl.id === id);
  return p ? (LANG === 'en' ? p.name_en : p.id) : id;
}

/** Vrátí lokalizovaný název znamení podle čísla (1–12) */
function signName(n) {
  const z = ZNAMENI.find(z => z.n === n);
  return z ? (LANG === 'en' ? z.name_en : z.name) : '';

function setLang(lang) {
  LANG = lang;
  setGlobalLang(lang);
  document.getElementById('btn-lang-cs').classList.toggle('active', lang === 'cs');
  document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
  // Update all static elements with data-cs / data-en attributes
  document.querySelectorAll('[data-cs]').forEach(el => {
    const key = lang === 'en' ? 'en' : 'cs';
    if (el.dataset[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = el.dataset[key];
      } else {
        el.textContent = el.dataset[key];
      }
    }
  });
  // Re-render dynamic panels if chart data exists
  if (lastChartData) {
    showCalcBanner(lastChartData);
    renderDignityPanel(lastChartData);
    renderLotsPanel(lastChartData);
    renderTemperamentPanel(lastChartData);
    renderPredictionPanel(lastChartData);
  }
}

// ── STATE ─────────────────────────────────────────────────────
let currentStep = 1;
let selectedKats = new Set(["osobnost","zdravi","finance","laska","povolani","cestovani"]);
let lastChartData = null;
let currentHouseSys = 'whole-sign';

let birthData = {
  date: null, time: null, lat: null, lng: null,
  timezone: null, cityName: null, cityFound: false
};

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Načti uložený jazyk
  if (typeof getLang === 'function') setLang(getLang());
  buildTimezoneSelect();
  buildPlanetTable();
  buildAscendentSelect();
  initCanvas();
  // Auto-detect browser timezone
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const sel = document.getElementById('birth-tz');
    if ([...sel.options].some(o => o.value === tz)) sel.value = tz;
  } catch(e) {}
});

// ── TIMEZONE SELECT ───────────────────────────────────────────
function buildTimezoneSelect() {
  const sel = document.getElementById('birth-tz');
  TIMEZONES.forEach(g => {
    const og = document.createElement('optgroup');
    og.label = g.group;
    g.zones.forEach(z => {
      const o = document.createElement('option');
      o.value = z.val; o.textContent = z.label;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
}

// ── NOMINATIM ─────────────────────────────────────────────────
async function searchCity() {
  const q = document.getElementById('birth-city').value.trim();
  if (!q) return;
  const btn  = document.getElementById('city-search-btn');
  const wrap = document.getElementById('city-result-wrap');
  btn.disabled = true; btn.textContent = T('geo_hledam');
  wrap.innerHTML = '<div class="city-searching">✦ Hledám souřadnice…</div>';
  birthData.lat = null; birthData.lng = null;
  birthData.cityFound = false; birthData.cityName = null;
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=3&addressdetails=1`;
    const resp = await fetch(url, { headers:{'Accept-Language':'cs,en','User-Agent':'Oracoolio/1.2 (oracoolio.com)'} });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    if (!data || data.length === 0) {
      wrap.innerHTML = `<div class="city-error">${T('geo_nenalezeno')(esc(q))}</div>`;
      return;
    }
    const place = data.find(d => ['city','town','village','municipality'].includes(d.type)) || data[0];
    birthData.lat = parseFloat(place.lat);
    birthData.lng = parseFloat(place.lon);
    birthData.cityFound = true;
    const short = place.display_name.split(',').slice(0,3).map(s=>s.trim()).join(', ');
    birthData.cityName = short;
    wrap.innerHTML = `<div class="coord-display">
      <span class="coord-name">📍 ${esc(short)}</span>
      <span class="coord-badge">φ ${birthData.lat.toFixed(4)}°</span>
      <span class="coord-badge">λ ${birthData.lng.toFixed(4)}°</span>
    </div>`;
  } catch(e) {
    wrap.innerHTML = `<div class="city-error">${T('geo_chyba')(esc(e.message))}</div>`;
  } finally {
    btn.disabled = false; btn.textContent = T('geo_hledat');
  }
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── NAVIGATION ────────────────────────────────────────────────
function goToStep(n) {
  document.getElementById(`step-${currentStep}`).style.display = 'none';
  document.getElementById(`step-ind-${currentStep}`).className = 'astrolog-step done';
  currentStep = n;
  document.getElementById(`step-${n}`).style.display = 'block';
  document.getElementById(`step-ind-${n}`).className  = 'astrolog-step active';
  window.scrollTo({top:0, behavior:'smooth'});
}

function goToStep2() {
  // Save birth data
  birthData.date     = document.getElementById('birth-date').value || null;
  birthData.time     = document.getElementById('birth-time').value || null;
  birthData.timezone = document.getElementById('birth-tz').value   || 'UTC';

  if (!birthData.date) {
    alert('Zadejte prosím datum narození.'); document.getElementById('birth-date').focus(); return;
  }
  if (!birthData.time) {
    const ok = confirm(T('geo_confirm_cas'));
    if (!ok) return;
  }
  if (!birthData.cityFound && document.getElementById('birth-city').value.trim()) {
    const ok = confirm(T('geo_confirm_misto'));
    if (!ok) return;
  }

  // ── Sprint B: Run chart calculation ──────────────────────
  let chartData = null;
  if (typeof Astronomy !== 'undefined') {
    try { chartData = calcBirthChart(); }
    catch(e) { console.error('Chart calculation failed:', e); }
  }

  goToStep(2);

  if (chartData) {
    lastChartData = chartData;
    currentHouseSys = 'whole-sign';
    document.getElementById('btn-ws').classList.add('active');
    document.getElementById('btn-pl').classList.remove('active');
    fillPlanetTable(chartData);
    showCalcBanner(chartData);
  } else {
    showCalcBanner(null);
  }
}

function recalculate() {
  if (!birthData.date) { goToStep(1); return; }
  try {
    const chartData = calcBirthChart();
    lastChartData = chartData;
    fillPlanetTable(chartData);
    showCalcBanner(chartData);
  } catch(e) {
    console.error('Recalculation failed:', e);
  }
}

// ════════════════════════════════════════════════════
//  SPRINT B — Astronomy Engine calculations
// ════════════════════════════════════════════════════

/**
 * Convert birth local datetime to UTC using IANA timezone.
 * Strategy: use Intl to get the offset at the approximate birth time.
 */
function birthLocalToUtc(dateStr, timeStr, timezone) {
  const t = timeStr || '12:00';
  const guess = new Date(`${dateStr}T${t}:00Z`); // treat local as UTC (initial guess)
  try {
    const fmt = new Intl.DateTimeFormat('sv', {   // 'sv' → ISO-like format "YYYY-MM-DD HH:MM:SS"
      timeZone: timezone,
      year:'numeric', month:'2-digit', day:'2-digit',
      hour:'2-digit', minute:'2-digit', second:'2-digit',
      hour12: false
    });
    const localStr     = fmt.format(guess).replace(' ', 'T');
    const localAsUtc   = new Date(localStr + 'Z');
    const offsetMs     = guess.getTime() - localAsUtc.getTime();
    return new Date(guess.getTime() + offsetMs);
  } catch(e) {
    console.warn('TZ conversion fallback:', e);
    return guess;
  }
}

/**
 * Geocentric ecliptic longitude of a planet (0–360°).
 */
function getPlanetLongitude(body, date) {
  const vec = Astronomy.GeoVector(body, date, true);
  const ecl = Astronomy.Ecliptic(vec);
  return ((ecl.elon % 360) + 360) % 360;
}

/** Ecliptic longitude → zodiac sign (1 = Beran … 12 = Ryby) */
function lonToSign(lon) { return Math.floor(lon / 30) + 1; }

/** Degrees within the sign (0.00 – 29.99) */
function lonToDeg(lon)  { return lon % 30; }

/**
 * Is the planet retrograde at this date?
 * Check if geocentric ecliptic longitude is decreasing over ±12 hours.
 */
function isRetrograde(body, date) {
  const d1 = new Date(date.getTime() - 43200000); // -12h
  const d2 = new Date(date.getTime() + 43200000); // +12h
  const l1 = getPlanetLongitude(body, d1);
  const l2 = getPlanetLongitude(body, d2);
  let diff = l2 - l1;
  if (diff >  180) diff -= 360;
  if (diff < -180) diff += 360;
  return diff < 0;
}

/**
 * Calculate Ascendant ecliptic longitude from UTC datetime, lat, lng.
 * Uses standard RAMC formula with IAU obliquity.
 */
function calcAscendant(utcDate, lat, lng) {
  // Greenwich Apparent Sidereal Time (hours) from Astronomy Engine
  const gst  = Astronomy.SiderealTime(utcDate);
  const lst  = ((gst + lng / 15) % 24 + 24) % 24;   // Local Sidereal Time (h)
  const ramc = lst * 15;                              // RAMC in degrees

  // Obliquity of ecliptic (IAU formula, T = Julian centuries from J2000)
  const jd  = utcDate.getTime() / 86400000 + 2440587.5;
  const T   = (jd - 2451545.0) / 36525.0;
  const eps = (23.439291111 - 0.013004167 * T) * Math.PI / 180;

  const r   = ramc * Math.PI / 180;
  const phi = lat  * Math.PI / 180;

  // Standard ascendant formula
  const asc = Math.atan2(
    Math.cos(r),
    -(Math.sin(r) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))
  ) * 180 / Math.PI;

  return ((asc % 360) + 360) % 360;
}

/**
 * Main calculation: returns full chart object.
 */
function calcBirthChart() {
  const tz     = birthData.timezone || 'UTC';
  const utcDate = birthLocalToUtc(birthData.date, birthData.time, tz);
  const hasLoc  = birthData.cityFound && birthData.lat !== null && birthData.lng !== null;
  const hasTime = !!birthData.time;

  const chart = {
    utcDate,
    planety:    {},
    ascendent:  null,
    hasLocation: hasLoc,
    hasTime,
    warnings:   [],
    houseSys:   'Whole Sign'
  };

  if (!hasTime)
    chart.warnings.push(T('warn_cas'));
  if (!hasLoc)
    chart.warnings.push(T('warn_misto'));

  // ── Planet positions ──
  for (const p of PLANETS) {
    try {
      const body  = Astronomy.Body[p.body];
      const lon   = getPlanetLongitude(body, utcDate);
      const sign  = lonToSign(lon);
      const deg   = lonToDeg(lon);
      const retro = p.retro ? isRetrograde(body, utcDate) : false;
      chart.planety[p.id] = { lon, sign, deg, retro, dum: null };
    } catch(e) {
      console.warn(`Failed: ${p.id}`, e);
    }
  }

  // ── Ascendant + Whole Sign houses ──
  if (hasLoc) {
    try {
      const ascLon  = calcAscendant(utcDate, birthData.lat, birthData.lng);
      const ascSign = lonToSign(ascLon);
      const ascDeg  = lonToDeg(ascLon);
      chart.ascendent = { lon: ascLon, sign: ascSign, deg: ascDeg };

      // Assign houses
      for (const czName of Object.keys(chart.planety)) {
        const ps = chart.planety[czName].sign;
        chart.planety[czName].dum = ((ps - ascSign + 12) % 12) + 1;
      }
    } catch(e) {
      chart.warnings.push('Výpočet Ascendentu selhal: ' + e.message);
    }
  }

  // ── Modul A: Sekta ──
  calcSekta(chart);

  return chart;
}

// ════════════════════════════════════════════════════
//  MODUL A — Sekta horoskopu (Denní / Noční)
// ════════════════════════════════════════════════════

/**
 * Určí sektu horoskopu.
 * Slunce nad horizontem (domy 7–12) = denní; pod horizontem (domy 1–6) = noční.
 * Relativní úhel Slunce od ASC: ≥ 180° → nad horizontem.
 */
function calcSekta(chart) {
  if (!chart.ascendent || !chart.planety['Slunce']) return;
  const sunLon = chart.planety['Slunce'].lon;
  const ascLon = chart.ascendent.lon;
  const relAngle = ((sunLon - ascLon) % 360 + 360) % 360;
  chart.sekta        = relAngle >= 180 ? 'diurnal' : 'nocturnal';
  chart.voduciSvetlo = chart.sekta === 'diurnal' ? 'Slunce' : 'Luna';
}

// ════════════════════════════════════════════════════
//  MODUL B — Esenciální hodnosti & Almuten figuris
// ════════════════════════════════════════════════════

// Rozšíření i18n o Modul B
Object.assign(STRINGS.cs, {
  modul_b_title:      'Esenciální hodnosti',
  modul_b_info_title: 'Co jsou esenciální hodnosti?',
  modul_b_info_text:  'Esenciální hodnosti vyjadřují přirozenou sílu planety v konkrétním znamení na základě pěti tradic helénistické astrologie.<br><br><strong>Domicil (+5):</strong> Planeta je ve svém domovském znamení — nejsilnější postavení.<br><strong>Exaltace (+4):</strong> Planeta je v znamení svého povýšení.<br><strong>Triplicita (+3):</strong> Planeta vládne živlu znamení (oheň/země/vzduch/voda) dle sekty horoskopu.<br><strong>Hranice (+2):</strong> Egyptské hranice — každé znamení je rozděleno na 5 nerovných úseků.<br><strong>Dekan (+1):</strong> Planeta vládne svému 10° úseku v znamení.<br><strong>Pád (−4):</strong> Planeta je v opačném znamení své exaltace — oslabena.<br><strong>Exil (−5):</strong> Planeta je v opačném znamení svého domicilu — nejslabší postavení.',
  dig_domicil:        'Domicil',
  dig_exaltace:       'Exaltace',
  dig_triplicita:     'Triplicita',
  dig_hranice:        'Hranice',
  dig_dekan:          'Dekan',
  dig_pad:            'Pád',
  dig_exil:           'Exil',
  dig_none:           '—',
  almuten_title:      'Almuten figuris',
  almuten_info_title: 'Co je Almuten figuris?',
  almuten_info_text:  'Almuten figuris (Vládce horoskopu) je planeta s největší celkovou silou v horoskopu. Počítá se sečtením hodnostních bodů každé planety přes klíčové body mapy: Ascendent, Slunce a Luna. Planeta s nejvyšším součtem je přirozeným signifikátorem celého života — ukazuje typ energie, který daného člověka nejlépe charakterizuje a jehož témata dominují jeho osudu.',
  hodnost_col:        'Hodnost',
  body_suffix:        'bodů',
});
Object.assign(STRINGS.en, {
  modul_b_title:      'Essential Dignities',
  modul_b_info_title: 'What are essential dignities?',
  modul_b_info_text:  'Essential dignities express a planet\'s natural strength in a particular sign based on five Hellenistic traditions.<br><br><strong>Domicile (+5):</strong> Planet in its home sign — strongest placement.<br><strong>Exaltation (+4):</strong> Planet in its sign of elevation.<br><strong>Triplicity (+3):</strong> Planet rules the element of the sign (fire/earth/air/water) according to chart sect.<br><strong>Terms (+2):</strong> Egyptian terms — each sign divided into 5 unequal segments.<br><strong>Face (+1):</strong> Planet rules its 10° decan within the sign.<br><strong>Fall (−4):</strong> Planet in the sign opposite its exaltation — weakened.<br><strong>Detriment (−5):</strong> Planet in the sign opposite its domicile — weakest placement.',
  dig_domicil:        'Domicile',
  dig_exaltace:       'Exaltation',
  dig_triplicita:     'Triplicity',
  dig_hranice:        'Terms',
  dig_dekan:          'Face',
  dig_pad:            'Fall',
  dig_exil:           'Detriment',
  dig_none:           '—',
  almuten_title:      'Almuten figuris',
  almuten_info_title: 'What is Almuten figuris?',
  almuten_info_text:  'Almuten figuris (Lord of the Geniture) is the planet with the greatest overall strength in the chart. Calculated by summing dignity points for each planet across key chart points: Ascendant, Sun and Moon. The planet with the highest total is the natural significator of the native\'s life — its themes and qualities dominate the person\'s character and destiny.',
  hodnost_col:        'Dignity',
  body_suffix:        'points',
});

// ── Data tabulky ─────────────────────────────────────────────

const DOMICIL = {
  'Slunce':[5], 'Luna':[4],
  'Merkur':[3,6], 'Venuše':[2,7],
  'Mars':[1,8], 'Jupiter':[9,12], 'Saturn':[10,11]
};

const EXALTACE = {
  'Slunce': {sign:1,  deg:19},
  'Luna':   {sign:2,  deg:3},
  'Merkur': {sign:6,  deg:15},
  'Venuše': {sign:12, deg:27},
  'Mars':   {sign:10, deg:28},
  'Jupiter':{sign:4,  deg:15},
  'Saturn': {sign:7,  deg:21},
};

const PAD = { // opak exaltace (znamení padu)
  'Slunce':7,'Luna':8,'Merkur':12,'Venuše':6,'Mars':4,'Jupiter':10,'Saturn':1
};

const EXIL = { // opak domicilu
  'Slunce':[11],'Luna':[10],
  'Merkur':[9,12],'Venuše':[1,8],
  'Mars':[2,7],'Jupiter':[3,6],'Saturn':[4,5]
};

const TRIPLICITA_ELEM = {
  1:'fire',2:'earth',3:'air',4:'water',
  5:'fire',6:'earth',7:'air',8:'water',
  9:'fire',10:'earth',11:'air',12:'water'
};

// Dorothean triplicita lords (day / night / participating)
const TRIPLICITA = {
  fire:  {day:'Slunce',  night:'Jupiter', part:'Saturn'},
  earth: {day:'Venuše',  night:'Luna',    part:'Mars'},
  air:   {day:'Saturn',  night:'Merkur',  part:'Jupiter'},
  water: {day:'Venuše',  night:'Mars',    part:'Luna'},
};

// Egyptské hranice: každé znamení → pole [endDeg, vládce]
const HRANICE = [
  [[5,'Jupiter'],[11,'Venuše'],[19,'Merkur'],[24,'Mars'],[29,'Saturn']],   // Beran
  [[7,'Venuše'],[14,'Merkur'],[21,'Jupiter'],[25,'Saturn'],[29,'Mars']],    // Býk
  [[5,'Merkur'],[11,'Jupiter'],[16,'Venuše'],[23,'Saturn'],[29,'Mars']],    // Blíženci
  [[6,'Mars'],[12,'Jupiter'],[19,'Merkur'],[25,'Venuše'],[29,'Saturn']],    // Rak
  [[5,'Jupiter'],[10,'Venuše'],[17,'Saturn'],[23,'Merkur'],[29,'Mars']],    // Lev
  [[6,'Merkur'],[16,'Venuše'],[20,'Jupiter'],[27,'Saturn'],[29,'Mars']],    // Panna
  [[5,'Saturn'],[13,'Merkur'],[20,'Jupiter'],[27,'Venuše'],[29,'Mars']],    // Váhy
  [[6,'Mars'],[10,'Jupiter'],[18,'Venuše'],[23,'Merkur'],[29,'Saturn']],    // Štír
  [[11,'Jupiter'],[16,'Venuše'],[20,'Merkur'],[25,'Saturn'],[29,'Mars']],   // Střelec
  [[6,'Merkur'],[13,'Jupiter'],[21,'Venuše'],[25,'Saturn'],[29,'Mars']],    // Kozoroh
  [[6,'Merkur'],[12,'Venuše'],[19,'Jupiter'],[24,'Mars'],[29,'Saturn']],    // Vodnář
  [[11,'Venuše'],[15,'Jupiter'],[18,'Merkur'],[27,'Mars'],[29,'Saturn']],   // Ryby
];

// Chaldejské dekany: [0–9°, 10–19°, 20–29°] pro každé znamení
const DEKAN_LORDS = [
  ['Mars','Slunce','Venuše'],   // Beran
  ['Merkur','Luna','Saturn'],   // Býk
  ['Jupiter','Mars','Slunce'],  // Blíženci
  ['Venuše','Merkur','Luna'],   // Rak
  ['Saturn','Jupiter','Mars'],  // Lev
  ['Slunce','Venuše','Merkur'], // Panna
  ['Luna','Saturn','Jupiter'],  // Váhy
  ['Mars','Slunce','Venuše'],   // Štír
  ['Merkur','Luna','Saturn'],   // Střelec
  ['Jupiter','Mars','Slunce'],  // Kozoroh
  ['Venuše','Merkur','Luna'],   // Vodnář
  ['Saturn','Jupiter','Mars'],  // Ryby
];

function getTermLord(sign, deg) {
  for (const [endDeg, lord] of HRANICE[sign - 1]) {
    if (deg <= endDeg) return lord;
  }
  return null;
}

function getDecanLord(sign, deg) {
  return DEKAN_LORDS[sign - 1][Math.floor(deg / 10)];
}

/** Vrátí hodnostní data pro planetu na dané délce. */
function getPlanetDignity(planetName, lon, sekta) {
  if (lon == null) return null;
  const sign = Math.floor(lon / 30) + 1; // 1–12
  const deg  = Math.floor(lon % 30);     // 0–29
  let score  = 0;
  const all  = [];

  if (DOMICIL[planetName]?.includes(sign)) {
    score += 5; all.push({key:'dig_domicil',   pts:+5, cls:'dom'});
  }
  if (EXALTACE[planetName]?.sign === sign) {
    score += 4; all.push({key:'dig_exaltace',  pts:+4, cls:'exalt'});
  }
  const elem = TRIPLICITA_ELEM[sign];
  if (elem && TRIPLICITA[elem]) {
    const t = TRIPLICITA[elem];
    const isDay = sekta === 'diurnal';
    if ((isDay && t.day === planetName) || (!isDay && t.night === planetName)) {
      score += 3; all.push({key:'dig_triplicita', pts:+3, cls:'trip'});
    } else if (t.part === planetName) {
      score += 1; all.push({key:'dig_triplicita', pts:+1, cls:'trip'});
    }
  }
  if (getTermLord(sign, deg) === planetName) {
    score += 2; all.push({key:'dig_hranice', pts:+2, cls:'term'});
  }
  if (getDecanLord(sign, deg) === planetName) {
    score += 1; all.push({key:'dig_dekan',   pts:+1, cls:'face'});
  }
  if (PAD[planetName] === sign) {
    score -= 4; all.push({key:'dig_pad',  pts:-4, cls:'fall'});
  }
  if (EXIL[planetName]?.includes(sign)) {
    score -= 5; all.push({key:'dig_exil', pts:-5, cls:'det'});
  }

  const pos     = all.find(d => d.pts > 0);
  const neg     = [...all].filter(d => d.pts < 0).sort((a,b) => a.pts - b.pts)[0];
  const primary = pos || neg || null;

  let grade;
  if      (score >= 5)  grade = 'A';
  else if (score >= 3)  grade = 'B';
  else if (score >= 0)  grade = 'C';
  else if (score >= -3) grade = 'D';
  else                  grade = 'F';

  return {score, grade, primary, all};
}

/** Spočítá hodnosti pro všechny planety, uloží do chart.dignities. */
function calcAllDignities(chart) {
  if (!chart || !chart.sekta) return;
  chart.dignities = {};
  for (const p of PLANETS) {
    const data = chart.planety[p.id];
    if (data && data.lon != null) {
      chart.dignities[p.id] = getPlanetDignity(p.id, data.lon, chart.sekta);
    }
  }
}

/**
 * Almuten figuris (dle ibn Ezry / Bonattiho):
 * Planeta s nejvyšším součtem hodnostních bodů přes ASC, Slunce, Lunu.
 */
function calcAlmuten(chart) {
  if (!chart) return;
  const keyPoints = [];
  if (chart.ascendent)           keyPoints.push({sign: chart.ascendent.sign, deg: Math.floor(chart.ascendent.deg)});
  if (chart.planety['Slunce']?.sign) keyPoints.push({sign: chart.planety['Slunce'].sign, deg: Math.floor(chart.planety['Slunce'].deg || 0)});
  if (chart.planety['Luna']?.sign)   keyPoints.push({sign: chart.planety['Luna'].sign,   deg: Math.floor(chart.planety['Luna'].deg   || 0)});

  const TRADITIONAL = ['Slunce','Luna','Merkur','Venuše','Mars','Jupiter','Saturn'];
  const totals = Object.fromEntries(TRADITIONAL.map(p => [p, 0]));

  for (const {sign, deg} of keyPoints) {
    for (const pName of TRADITIONAL) {
      if (DOMICIL[pName]?.includes(sign))   totals[pName] += 5;
      if (EXALTACE[pName]?.sign === sign)   totals[pName] += 4;
      const elem = TRIPLICITA_ELEM[sign];
      if (elem && TRIPLICITA[elem]) {
        const t = TRIPLICITA[elem];
        const isDay = chart.sekta === 'diurnal';
        if ((isDay && t.day === pName) || (!isDay && t.night === pName)) totals[pName] += 3;
        if (t.part === pName) totals[pName] += 1;
      }
      if (getTermLord(sign, deg) === pName)  totals[pName] += 2;
      if (getDecanLord(sign, deg) === pName) totals[pName] += 1;
    }
  }

  const sorted = Object.entries(totals).sort((a,b) => b[1] - a[1]);
  chart.almuten = {planet: sorted[0][0], score: sorted[0][1], all: totals};
}

/** Vyrenderuje panel hodností a Almuten figuris. */
function renderDignityPanel(chart) {
  const panel = document.getElementById('dignity-panel');
  if (!panel) return;

  if (!chart || !chart.dignities) {
    panel.style.display = 'none'; return;
  }
  panel.style.display = 'block';

  // Aktualizuj hodnostní badge v každém řádku tabulky
  for (const p of PLANETS) {
    const cell = document.getElementById(`dignity-${p.id}`);
    const dig  = chart.dignities[p.id];
    if (!cell) continue;
    if (!dig || !dig.primary) {
      cell.innerHTML = `<span class="dig-tag dig-none">${T('dig_none')}</span>`;
    } else {
      const label = T(dig.primary.key);
      const pts   = (dig.primary.pts > 0 ? '+' : '') + dig.primary.pts;
      cell.innerHTML = `<span class="dig-tag dig-${dig.primary.cls}" title="${label} (${pts})">${label}</span>`;
    }
  }

  // Dignity score rows
  const PGLYPH = {'Slunce':'☀','Luna':'☽','Merkur':'☿','Venuše':'♀','Mars':'♂','Jupiter':'♃','Saturn':'♄','Uran':'♅','Neptun':'♆','Pluto':'♇'};
  const rows = PLANETS.filter(p => chart.dignities[p.id]).map(p => {
    const dig = chart.dignities[p.id];
    // Normalize score from range -9..+11 → 0..100%
    const pct = Math.round(Math.max(0, Math.min(100, ((dig.score + 9) / 20) * 100)));
    const scoreStr = (dig.score > 0 ? '+' : '') + dig.score;
    return `<div class="dignity-row">
      <span class="dignity-glyph">${p.glyph}</span>
      <span class="dignity-pname">${LANG === 'en' ? p.name_en : p.id}</span>
      <div class="dignity-bar-wrap"><div class="dignity-bar-fill grade-${dig.grade.toLowerCase()}" style="width:${pct}%"></div></div>
      <span class="dignity-score">${scoreStr}</span>
      <span class="dignity-grade grade-${dig.grade.toLowerCase()}">${dig.grade}</span>
    </div>`;
  }).join('');

  // Almuten card
  const alm = chart.almuten;
  const almHTML = alm ? `<div class="almuten-card">
    <div class="almuten-head">
      <span class="almuten-glyph">${PGLYPH[alm.planet] || '★'}</span>
      <div class="almuten-info">
        <div class="almuten-label">
          ${T('almuten_title')}
          <details class="info-details" style="display:inline-block;vertical-align:middle;margin-left:6px;">
            <summary title="${T('almuten_info_title')}">ℹ</summary>
            <div class="info-panel"><strong>${T('almuten_info_title')}</strong><br><br>${T('almuten_info_text')}</div>
          </details>
        </div>
        <div class="almuten-planet">${alm.planet} — ${alm.score} ${T('body_suffix')}</div>
      </div>
    </div>
  </div>` : '';

  panel.innerHTML = `<div class="dignity-panel-wrap">
    <div class="dignity-panel-head">
      <span class="dignity-panel-title">${T('modul_b_title')}</span>
      <details class="info-details">
        <summary title="${T('modul_b_info_title')}">ℹ</summary>
        <div class="info-panel"><strong>${T('modul_b_info_title')}</strong><br><br>${T('modul_b_info_text')}</div>
      </details>
    </div>
    <div class="dignity-grid">${rows}</div>
    ${almHTML}
  </div>`;
}

// ════════════════════════════════════════════════════
//  MODUL C — Arabské losy (Hermetické losy)
// ════════════════════════════════════════════════════

Object.assign(STRINGS.cs, {
  modul_c_title:      'Arabské losy',
  modul_c_info_title: 'Co jsou arabské losy?',
  modul_c_info_text:  'Arabské losy (hermetické losy) jsou citlivé body horoskopu bez fyzického tělesa. Vypočítávají se z poloh Ascendentu, Slunce, Luny a dalších planet. Každý los osvětluje jiný aspekt osudu. Výpočet se liší pro denní a noční horoskop — to je klíčová role <strong>sekty</strong>.',
  lot_fortuna_name:   'Bod štěstí',
  lot_fortuna_info:   'Pars Fortunae — nejdůležitější los. Označuje místo, kde Luna byla v čase novu. Tělesné štěstí, zdraví, majetek a přízeň osudu. <strong>Denní:</strong> ASC + Luna − Slunce. <strong>Noční:</strong> ASC + Slunce − Luna.',
  lot_daimon_name:    'Bod ducha',
  lot_daimon_info:    'Pars Daemonis — duševní protipól Bodu štěstí. Duše, rozum, víra, životní záměr a duchovní rozvoj. <strong>Denní:</strong> ASC + Slunce − Luna. <strong>Noční:</strong> ASC + Luna − Slunce.',
  lot_eros_name:      'Erós',
  lot_eros_info:      'Los touhy a přitažlivosti. Ukazuje co nebo koho člověk vášnivě touží vlastnit nebo prožít. Závisí na Bodu ducha a Venuši.',
  lot_ananke_name:    'Ananké',
  lot_ananke_info:    'Los Nutnosti. Označuje nevyhnutelnost, povinnosti a omezení — co člověka váže nebo limituje v životní cestě. Závisí na Bodu štěstí a Merkurovi.',
  lot_odvaha_name:    'Odvaha',
  lot_odvaha_info:    'Los Statečnosti. Schopnost překonávat překážky, bojovnost, fyzická odvaha a schopnost vítězit v konfliktech. Závisí na Bodu štěstí a Marsu.',
  lot_vitezstvi_name: 'Vítězství',
  lot_vitezstvi_info: 'Pars Victoriae — přízeň osudu, boží podpora, úspěch a duchovní vedení. Závisí na Bodu ducha a Jupiteru.',
  lot_nemesis_name:   'Nemesis',
  lot_nemesis_info:   'Spravedlnost osudu, karmické dluhy, skrytí nepřátelé a nevyhnutelné překážky. Závisí na Bodu štěstí a Saturnu.',
  lot_house:          'dům',
});

Object.assign(STRINGS.en, {
  modul_c_title:      'Arabic Lots',
  modul_c_info_title: 'What are Arabic Lots?',
  modul_c_info_text:  'Arabic Lots (Hermetic Lots) are sensitive chart points without physical bodies. They are calculated from the positions of Ascendant, Sun, Moon and other planets. Each lot illuminates a different facet of destiny. The calculation differs for diurnal and nocturnal charts — this is the key role of <strong>sect</strong>.',
  lot_fortuna_name:   'Part of Fortune',
  lot_fortuna_info:   'Pars Fortunae — the most important lot. Marks where the Moon was at the New Moon. Bodily fortune, health, prosperity and favour of fate. <strong>Diurnal:</strong> ASC + Moon − Sun. <strong>Nocturnal:</strong> ASC + Sun − Moon.',
  lot_daimon_name:    'Part of Spirit',
  lot_daimon_info:    'Pars Daemonis — the soul counterpart of Fortune. Soul, mind, faith, life purpose and spiritual development. <strong>Diurnal:</strong> ASC + Sun − Moon. <strong>Nocturnal:</strong> ASC + Moon − Sun.',
  lot_eros_name:      'Eros',
  lot_eros_info:      'Lot of desire and attraction. Shows what or whom one passionately desires to possess or experience. Depends on Spirit and Venus.',
  lot_ananke_name:    'Necessity',
  lot_ananke_info:    'Lot of Necessity. Marks inevitability, duties and constraints — what binds or limits one on life\'s path. Depends on Fortune and Mercury.',
  lot_odvaha_name:    'Courage',
  lot_odvaha_info:    'Lot of Boldness. Capacity to overcome obstacles, martial spirit, physical courage. Depends on Fortune and Mars.',
  lot_vitezstvi_name: 'Victory',
  lot_vitezstvi_info: 'Pars Victoriae — favour of fate, divine support, success and spiritual guidance. Depends on Spirit and Jupiter.',
  lot_nemesis_name:   'Nemesis',
  lot_nemesis_info:   'Karmic debts, hidden enemies and inevitable obstacles — the justice of fate. Depends on Fortune and Saturn.',
  lot_house:          'house',
});

// Definice 7 hermetických losů
// Formula: ASC + p1 − p2 (denní/noční)
// p1/p2 může být ID planety nebo ID jiného losu (fortuna, daimon)
const LOTS_DEF = [
  { id:'fortuna',   sym:'⊕',
    day:{p1:'Luna',p2:'Slunce'},    night:{p1:'Slunce',p2:'Luna'},
    cs:'lot_fortuna_name', en:'lot_fortuna_name', info:'lot_fortuna_info' },
  { id:'daimon',    sym:'⊗',
    day:{p1:'Slunce',p2:'Luna'},    night:{p1:'Luna',p2:'Slunce'},
    cs:'lot_daimon_name',  en:'lot_daimon_name',  info:'lot_daimon_info' },
  { id:'eros',      sym:'♡',
    day:{p1:'Venuše',p2:'daimon'},  night:{p1:'daimon',p2:'Venuše'},
    cs:'lot_eros_name',    en:'lot_eros_name',    info:'lot_eros_info' },
  { id:'ananke',    sym:'Ω',
    day:{p1:'fortuna',p2:'Merkur'}, night:{p1:'Merkur',p2:'fortuna'},
    cs:'lot_ananke_name',  en:'lot_ananke_name',  info:'lot_ananke_info' },
  { id:'odvaha',    sym:'⚔',
    day:{p1:'fortuna',p2:'Mars'},   night:{p1:'Mars',p2:'fortuna'},
    cs:'lot_odvaha_name',  en:'lot_odvaha_name',  info:'lot_odvaha_info' },
  { id:'vitezstvi', sym:'★',
    day:{p1:'Jupiter',p2:'daimon'}, night:{p1:'daimon',p2:'Jupiter'},
    cs:'lot_vitezstvi_name',en:'lot_vitezstvi_name',info:'lot_vitezstvi_info' },
  { id:'nemesis',   sym:'⌛',
    day:{p1:'fortuna',p2:'Saturn'}, night:{p1:'Saturn',p2:'fortuna'},
    cs:'lot_nemesis_name', en:'lot_nemesis_name', info:'lot_nemesis_info' },
];

/** Spočítá všech 7 arabských losů, uloží do chart.arabicLots. */
function calcArabicLots(chart) {
  if (!chart || !chart.ascendent || !chart.sekta) return;

  const asc    = chart.ascendent.lon;
  const isDay  = chart.sekta === 'diurnal';
  const lots   = {};
  const n360   = x => ((x % 360) + 360) % 360;

  function getLon(ref) {
    // Odkaz buď na planetu nebo na již spočítaný los
    if (lots[ref])                    return lots[ref].lon;
    if (chart.planety[ref]?.lon != null) return chart.planety[ref].lon;
    return null;
  }

  for (const def of LOTS_DEF) {
    const rule = isDay ? def.day : def.night;
    const l1   = getLon(rule.p1);
    const l2   = getLon(rule.p2);
    if (l1 == null || l2 == null) continue;

    const lon  = n360(asc + l1 - l2);
    const sign = Math.floor(lon / 30) + 1;
    const deg  = lon % 30;
    const ascSign = chart.ascendent.sign;
    const dum  = ((sign - ascSign + 12) % 12) + 1;
    lots[def.id] = {lon, sign, deg, dum};
  }

  chart.arabicLots = lots;
}

/** Vyrenderuje panel arabských losů (Modul C). */
function renderLotsPanel(chart) {
  const panel = document.getElementById('lots-panel');
  if (!panel) return;

  if (!chart || !chart.arabicLots || Object.keys(chart.arabicLots).length === 0) {
    panel.style.display = 'none'; return;
  }
  panel.style.display = 'block';

  const rows = LOTS_DEF.map(def => {
    const lot = chart.arabicLots[def.id];
    if (!lot) return '';

    const signName = LANG === 'en'
      ? (ZNAMENI.find(z => z.n === lot.sign)?.name_en || '')
      : (ZNAMENI_NAZVY[lot.sign] || '');
    const signSym  = ZNAMENI.find(z => z.n === lot.sign)?.sym || '';
    const degStr   = lot.deg.toFixed(1) + '°';
    const dum      = lot.dum;
    const name     = T(def.cs);
    const infoText = T(def.info);

    return `<div class="lot-row">
      <span class="lot-sym">${def.sym}</span>
      <div class="lot-body">
        <span class="lot-name">${name}</span>
        <span class="lot-pos">${signSym} ${signName} ${degStr} · ${dum}. ${T('lot_house')}</span>
      </div>
      <details class="info-details lot-info">
        <summary title="${name}">ℹ</summary>
        <div class="info-panel">${infoText}</div>
      </details>
    </div>`;
  }).join('');

  panel.innerHTML = `<div class="lots-panel-wrap">
    <div class="lots-panel-head">
      <span class="lots-panel-title">${T('modul_c_title')}</span>
      <details class="info-details">
        <summary title="${T('modul_c_info_title')}">ℹ</summary>
        <div class="info-panel"><strong>${T('modul_c_info_title')}</strong><br><br>${T('modul_c_info_text')}</div>
      </details>
    </div>
    <div class="lots-grid">${rows}</div>
  </div>`;
}

// ════════════════════════════════════════════════════
//  MODUL D — Temperament a lékařská astrologie
// ════════════════════════════════════════════════════

Object.assign(STRINGS.cs, {
  modul_d_title:      'Temperament',
  modul_d_info_title: 'Jak se určuje temperament?',
  modul_d_info_text:  'Temperament (dle Galéna a Ptolemaia) závisí na čtyřech základních kvalitách: <strong>teplo, chlad, sucho, vlhko</strong>. Skóre se vypočítá z Ascendentu (×3), Luny (×2), Slunce (×1) a sekty horoskopu. Každé znamení přispívá svými kvalitami dle živlu.',
  temp_sanguine_name: 'Sangvinik',
  temp_choleric_name: 'Cholerik',
  temp_phlegm_name:   'Flegmatik',
  temp_melan_name:    'Melancholik',
  temp_sanguine_elem: 'Vzduch · Krev',
  temp_choleric_elem: 'Oheň · Žluč',
  temp_phlegm_elem:   'Voda · Hlen',
  temp_melan_elem:    'Země · Černá žluč',
  temp_sanguine_desc: 'Sangvinici jsou společenští, optimističtí a snadno se nadchnou. Silná životní energie, ale sklon k přebytku — záněty a krevní potíže. Doporučení: umírněnost v jídle a pravidelný pohyb.',
  temp_choleric_desc: 'Cholerikové jsou odhodlaní, energičtí a někdy výbušní. Náchylní k horkým chorobám, zánětu žluče a jaterním potížím. Doporučení: vyhýbat se přehřátí a emočním excesům.',
  temp_phlegm_desc:   'Flegmatici jsou klidní, trpěliví a spolehliví. Náchylní k dýchacím potížím, hlennatým stavům a letargii. Doporučení: pohyb, teplo a stimulující prostředí.',
  temp_melan_desc:    'Melancholici jsou analytičtí a pečliví. Náchylní k chronickým potížím — klouby, kosti, kůže a psychická tíha. Doporučení: teplo, společnost a světlé prostředí.',
  qual_warm:  'Teplo', qual_cold:  'Chlad',
  qual_dry:   'Sucho', qual_moist: 'Vlhko',
});

Object.assign(STRINGS.en, {
  modul_d_title:      'Temperament',
  modul_d_info_title: 'How is temperament determined?',
  modul_d_info_text:  'Temperament (per Galen and Ptolemy) depends on four primary qualities: <strong>warm, cold, dry, moist</strong>. The score is calculated from Ascendant (×3), Moon (×2), Sun (×1) and chart sect. Each sign contributes its qualities based on its element.',
  temp_sanguine_name: 'Sanguine',
  temp_choleric_name: 'Choleric',
  temp_phlegm_name:   'Phlegmatic',
  temp_melan_name:    'Melancholic',
  temp_sanguine_elem: 'Air · Blood',
  temp_choleric_elem: 'Fire · Yellow bile',
  temp_phlegm_elem:   'Water · Phlegm',
  temp_melan_elem:    'Earth · Black bile',
  temp_sanguine_desc: 'Sanguine individuals are sociable, optimistic and easily excited. Strong vitality but prone to excess — inflammations and circulatory issues. Recommendation: moderation in diet and regular exercise.',
  temp_choleric_desc: 'Choleric individuals are determined, energetic and sometimes volatile. Prone to fevers, bilious conditions and liver issues. Recommendation: avoid overheating and emotional extremes.',
  temp_phlegm_desc:   'Phlegmatic individuals are calm, patient and reliable. Prone to respiratory conditions, phlegmatic states and lethargy. Recommendation: movement, warmth and stimulating environment.',
  temp_melan_desc:    'Melancholic individuals are analytical and meticulous. Prone to chronic conditions — joints, bones, skin and psychological heaviness. Recommendation: warmth, company and bright environment.',
  qual_warm:  'Warm',  qual_cold:  'Cold',
  qual_dry:   'Dry',   qual_moist: 'Moist',
});

// Živly znamení a jejich kvality
const SIGN_ELEMENT = {
  1:'fire',2:'earth',3:'air',4:'water',
  5:'fire',6:'earth',7:'air',8:'water',
  9:'fire',10:'earth',11:'air',12:'water'
};
// Každý živel přispívá ke 2 ze 4 kvalit
const ELEMENT_QUALS = {
  fire:  {warm:2, cold:0, dry:2, moist:0},
  earth: {warm:0, cold:2, dry:2, moist:0},
  air:   {warm:2, cold:0, dry:0, moist:2},
  water: {warm:0, cold:2, dry:0, moist:2},
};
// Mapování dominantní kvality → temperament
const QUAL_TO_TEMP = {
  'warm_moist':'sanguine', 'warm_dry':'choleric',
  'cold_moist':'phlegmatic', 'cold_dry':'melancholic'
};
const TEMP_META = {
  sanguine:   {icon:'🌬', nameKey:'temp_sanguine_name', elemKey:'temp_sanguine_elem', descKey:'temp_sanguine_desc', cls:'sang'},
  choleric:   {icon:'🔥', nameKey:'temp_choleric_name', elemKey:'temp_choleric_elem', descKey:'temp_choleric_desc', cls:'chol'},
  phlegmatic: {icon:'🌊', nameKey:'temp_phlegm_name',   elemKey:'temp_phlegm_elem',   descKey:'temp_phlegm_desc',   cls:'phleg'},
  melancholic:{icon:'🪨', nameKey:'temp_melan_name',    elemKey:'temp_melan_elem',    descKey:'temp_melan_desc',    cls:'melan'},
};

/** Spočítá temperament z ASC, Luny, Slunce a sekty. */
function calcTemperament(chart) {
  if (!chart || !chart.ascendent) return;

  const scores = {warm:0, cold:0, dry:0, moist:0};

  const factors = [
    {sign: chart.ascendent.sign,           weight: 3},
    {sign: chart.planety['Luna']?.sign,    weight: 2},
    {sign: chart.planety['Slunce']?.sign,  weight: 1},
  ];

  for (const {sign, weight} of factors) {
    if (!sign) continue;
    const elem  = SIGN_ELEMENT[sign];
    const quals = ELEMENT_QUALS[elem];
    for (const q of Object.keys(quals)) scores[q] += quals[q] * weight;
  }

  // Sekta modifier: denní mírně teplý, noční mírně studený
  if (chart.sekta === 'diurnal')   scores.warm += 1;
  else if (chart.sekta === 'nocturnal') scores.cold += 1;

  const isWarm  = scores.warm  >= scores.cold;
  const isMoist = scores.moist >= scores.dry;
  const type    = QUAL_TO_TEMP[`${isWarm?'warm':'cold'}_${isMoist?'moist':'dry'}`];

  chart.temperament = {type, scores};
}

/** Vyrenderuje temperamentní panel (Modul D). */
function renderTemperamentPanel(chart) {
  const panel = document.getElementById('temperament-panel');
  if (!panel) return;

  if (!chart || !chart.temperament) {
    panel.style.display = 'none'; return;
  }
  panel.style.display = 'block';

  const {type, scores} = chart.temperament;
  const meta = TEMP_META[type];
  if (!meta) return;

  // Normalizuj skóry pro bary (max možné = 12)
  const maxScore = Math.max(...Object.values(scores), 1);
  const bar = (val) => {
    const pct = Math.round((val / maxScore) * 100);
    return `<div class="temp-bar-wrap"><div class="temp-bar-fill temp-bar-${type}" style="width:${pct}%"></div></div>`;
  };

  const quals = [
    {key:'qual_warm',  val:scores.warm},
    {key:'qual_cold',  val:scores.cold},
    {key:'qual_dry',   val:scores.dry},
    {key:'qual_moist', val:scores.moist},
  ];

  const qualRows = quals.map(q =>
    `<div class="temp-qual-row">
      <span class="temp-qual-label">${T(q.key)}</span>
      ${bar(q.val)}
      <span class="temp-qual-val">${q.val}</span>
    </div>`
  ).join('');

  panel.innerHTML = `<div class="temp-panel-wrap temp-${meta.cls}">
    <div class="temp-header">
      <div class="temp-icon-wrap">
        <span class="temp-icon">${meta.icon}</span>
      </div>
      <div class="temp-title-wrap">
        <div class="temp-title-row">
          <span class="temp-name">${T(meta.nameKey)}</span>
          <span class="temp-elem">${T(meta.elemKey)}</span>
          <details class="info-details" style="margin-left:auto;">
            <summary title="${T('modul_d_info_title')}">ℹ</summary>
            <div class="info-panel"><strong>${T('modul_d_info_title')}</strong><br><br>${T('modul_d_info_text')}</div>
          </details>
        </div>
        <div class="temp-desc">${T(meta.descKey)}</div>
      </div>
    </div>
    <div class="temp-quals">${qualRows}</div>
  </div>`;
}

// ════════════════════════════════════════════════════
//  MODUL E — Profekce a Firdaria
// ════════════════════════════════════════════════════

Object.assign(STRINGS.cs, {
  modul_e_title:        'Predikce',
  profekce_title:       'Profekce',
  profekce_info_title:  'Co je profekce?',
  profekce_info_text:   'Profekce je jedna z nejstarších prediktivních technik helénistické astrologie. Každý rok života aktivuje jedno znamení zvěrokruhu (1 rok = 30°, jeden dům). Začíná se Ascendentem v roce 0 a postupuje po směru zvěrokruhu. Aktivní dům naznačuje <strong>klíčové téma daného roku</strong>. Vládce aktivního znamení se stává <strong>Vládcem roku</strong> — planeta, jejíž témata dominují.',
  firdaria_title:       'Firdaria',
  firdaria_info_title:  'Co jsou Firdaria?',
  firdaria_info_text:   'Firdaria (z arabštiny) jsou dlouhá planetární vládnoucí období. Každá planeta vládne určitý počet let a je dělena na 7 sub-period. Pořadí planet se liší pro denní a noční horoskop (dle sekty). Ukazují, <strong>jaká planetární energie dominuje danému životnímu období</strong> a jeho sub-tématům.',
  profekce_vek:         'Věk',
  profekce_aktivni_dum: 'Aktivní dům',
  profekce_aktivni_zn:  'Aktivní znamení',
  profekce_vladce:      'Vládce roku',
  profekce_tema:        'Téma roku',
  firdaria_hlavni:      'Hlavní perioda',
  firdaria_sub:         'Sub-perioda',
  firdaria_do:          'do',
  firdaria_let:         'let',
  rok_tema: {
    1:  'Osobnost, zdraví, zevnějšek a nový začátek',
    2:  'Majetek, finance, hodnoty a materiální zabezpečení',
    3:  'Komunikace, sourozenci, krátké cesty a vzdělání',
    4:  'Domov, rodina, kořeny a vnitřní svět',
    5:  'Láska, děti, tvořivost, záliby a radost',
    6:  'Práce, zdraví, každodenní rutina a služba',
    7:  'Partnerství, manželství, smlouvy a otevření nepřátelé',
    8:  'Transformace, dědictví, smrt a obnova',
    9:  'Cestování, filozofie, vzdělání a duchovní hledání',
    10: 'Kariéra, veřejný život, autorita a pověst',
    11: 'Přátelé, skupiny, naděje a společenské cíle',
    12: 'Osamění, skryté věci, duchovno a karma',
  },
});

Object.assign(STRINGS.en, {
  modul_e_title:        'Predictions',
  profekce_title:       'Profection',
  profekce_info_title:  'What is profection?',
  profekce_info_text:   'Profection is one of the oldest predictive techniques in Hellenistic astrology. Each year of life activates one zodiac sign (1 year = 30°, one house). It begins with the Ascendant at year 0 and moves forward through the zodiac. The active house indicates the <strong>key theme of that year</strong>. The ruler of the active sign becomes the <strong>Lord of the Year</strong> — the planet whose themes dominate.',
  firdaria_title:       'Firdaria',
  firdaria_info_title:  'What are Firdaria?',
  firdaria_info_text:   'Firdaria (from Arabic) are long planetary ruling periods. Each planet rules a set number of years, divided into 7 sub-periods. The order of planets differs for diurnal and nocturnal charts (sect). They show <strong>which planetary energy dominates a given life period</strong> and its sub-themes.',
  profekce_vek:         'Age',
  profekce_aktivni_dum: 'Active house',
  profekce_aktivni_zn:  'Active sign',
  profekce_vladce:      'Lord of the year',
  profekce_tema:        'Theme of the year',
  firdaria_hlavni:      'Major period',
  firdaria_sub:         'Sub-period',
  firdaria_do:          'until',
  firdaria_let:         'years',
  rok_tema: {
    1:  'Identity, health, appearance and new beginnings',
    2:  'Wealth, finances, values and material security',
    3:  'Communication, siblings, short journeys and learning',
    4:  'Home, family, roots and inner world',
    5:  'Love, children, creativity, hobbies and joy',
    6:  'Work, health, daily routine and service',
    7:  'Partnership, marriage, contracts and open enemies',
    8:  'Transformation, inheritance, death and renewal',
    9:  'Travel, philosophy, higher education and spiritual seeking',
    10: 'Career, public life, authority and reputation',
    11: 'Friends, groups, hopes and social goals',
    12: 'Solitude, hidden matters, spirituality and karma',
  },
});

// Domicilní vládci znamení (tradiční, bez Uranu/Neptuna/Pluta)
const DOMICIL_LORD = {
  1:'Mars', 2:'Venuše', 3:'Merkur', 4:'Luna',
  5:'Slunce', 6:'Merkur', 7:'Venuše', 8:'Mars',
  9:'Jupiter', 10:'Saturn', 11:'Saturn', 12:'Jupiter'
};

// Firdaria periody [planeta, počet let]
// Denní: Slunce→Venuše→Merkur→Luna→Saturn→Jupiter→Mars
// Noční: Luna→Saturn→Jupiter→Mars→Slunce→Venuše→Merkur
const FIRDARIA_DAY   = [
  ['Slunce',10],['Venuše',8],['Merkur',13],
  ['Luna',9],['Saturn',11],['Jupiter',12],['Mars',7]
];
const FIRDARIA_NIGHT = [
  ['Luna',9],['Saturn',11],['Jupiter',12],['Mars',7],
  ['Slunce',10],['Venuše',8],['Merkur',13]
];
const PLANET_GLYPHS_STR = {
  'Slunce':'☀','Luna':'☽','Merkur':'☿','Venuše':'♀',
  'Mars':'♂','Jupiter':'♃','Saturn':'♄',
  'Uran':'♅','Neptun':'♆','Pluto':'♇'
};

/** Výpočet profekce z data narození a dnešního data. */
function calcProfection(chart) {
  if (!chart || !birthData.date || !chart.ascendent) return;

  const today     = new Date();
  const birth     = new Date(birthData.date);
  let age         = today.getFullYear() - birth.getFullYear();
  // Pokud narozeniny letos ještě nebyly, odečteme rok
  const hadBDay   = (today.getMonth() > birth.getMonth()) ||
                    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hadBDay) age--;
  if (age < 0) age = 0;

  const ascSign   = chart.ascendent.sign; // 1–12
  const house     = (age % 12) + 1;       // 1–12
  const sign      = ((ascSign - 1 + age) % 12) + 1; // 1–12
  const lord      = DOMICIL_LORD[sign];
  const nextBDay  = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBDay <= today) nextBDay.setFullYear(nextBDay.getFullYear() + 1);

  chart.profekce = {age, house, sign, lord, nextBDay};
}

/** Výpočet aktivní Firdaria periody a sub-periody. */
function calcFirdaria(chart) {
  if (!chart || !birthData.date || !chart.sekta) return;

  const birth   = new Date(birthData.date);
  const today   = new Date();
  const ageMs   = today - birth;
  const ageYrs  = ageMs / (365.25 * 24 * 3600 * 1000);
  if (ageYrs < 0) return;

  const periods = chart.sekta === 'diurnal' ? FIRDARIA_DAY : FIRDARIA_NIGHT;

  // Najdi hlavní periodu
  let elapsed = 0;
  let major   = null;
  for (const [planet, years] of periods) {
    if (ageYrs < elapsed + years) {
      const startYr    = elapsed;
      const endYr      = elapsed + years;
      const subLen     = years / 7;
      const inMajor    = ageYrs - startYr;
      const subIdx     = Math.floor(inMajor / subLen);
      const subPlanet  = periods[(periods.findIndex(p => p[0] === planet) + subIdx) % periods.length][0];
      const subStart   = startYr + subIdx * subLen;
      const subEnd     = subStart + subLen;

      const birthMs    = birth.getTime();
      const msPerYr    = 365.25 * 24 * 3600 * 1000;
      const majorFrom  = new Date(birthMs + startYr * msPerYr);
      const majorTo    = new Date(birthMs + endYr   * msPerYr);
      const subFrom    = new Date(birthMs + subStart * msPerYr);
      const subTo      = new Date(birthMs + subEnd   * msPerYr);

      major = {
        planet, years,
        from: majorFrom, to: majorTo,
        sub: {planet: subPlanet, from: subFrom, to: subTo}
      };
      break;
    }
    elapsed += years;
  }

  chart.firdaria = major;
}

const FMT_DATE = d => d ? d.toLocaleDateString('cs-CZ', {year:'numeric', month:'numeric'}) : '?';

/** Vyrenderuje prediktivní panel (Modul E). */
function renderPredictionPanel(chart) {
  const panel = document.getElementById('prediction-panel');
  if (!panel) return;

  if (!chart || (!chart.profekce && !chart.firdaria)) {
    panel.style.display = 'none'; return;
  }
  panel.style.display = 'block';

  // ── Profekce ──
  let profHTML = '';
  if (chart.profekce) {
    const p      = chart.profekce;
    const zn     = ZNAMENI.find(z => z.n === p.sign);
    const znStr  = zn ? `${zn.sym} ${LANG === 'en' ? zn.name_en : zn.name}` : '';
    const lord   = p.lord;
    const glph   = PLANET_GLYPHS_STR[lord] || '';
    const tema   = (STRINGS[LANG]?.rok_tema || STRINGS.cs.rok_tema)[p.house] || '';
    const houseLabel = LANG === 'en' ? `${p.house}. house` : `${p.house}. dům`;
    const ageLabel   = LANG === 'en' ? `${p.age}` : `${p.age}. rok`;

    profHTML = `<div class="pred-card">
      <div class="pred-card-head">
        <span class="pred-card-title">${T('profekce_title')}</span>
        <details class="info-details">
          <summary title="${T('profekce_info_title')}">ℹ</summary>
          <div class="info-panel"><strong>${T('profekce_info_title')}</strong><br><br>${T('profekce_info_text')}</div>
        </details>
      </div>
      <div class="pred-rows">
        <div class="pred-row"><span class="pred-label">${T('profekce_vek')}</span><span class="pred-val">${ageLabel}</span></div>
        <div class="pred-row"><span class="pred-label">${T('profekce_aktivni_dum')}</span><span class="pred-val pred-hl">${houseLabel}</span></div>
        <div class="pred-row"><span class="pred-label">${T('profekce_aktivni_zn')}</span><span class="pred-val">${znStr}</span></div>
        <div class="pred-row"><span class="pred-label">${T('profekce_vladce')}</span><span class="pred-val pred-hl">${glph} ${planetName(lord)}</span></div>
      </div>
      <div class="pred-tema">${tema}</div>
    </div>`;
  }

  // ── Firdaria ──
  let firHTML = '';
  if (chart.firdaria) {
    const f    = chart.firdaria;
    const mg   = PLANET_GLYPHS_STR[f.planet]   || '';
    const sg   = PLANET_GLYPHS_STR[f.sub.planet] || '';

    firHTML = `<div class="pred-card">
      <div class="pred-card-head">
        <span class="pred-card-title">${T('firdaria_title')}</span>
        <details class="info-details">
          <summary title="${T('firdaria_info_title')}">ℹ</summary>
          <div class="info-panel"><strong>${T('firdaria_info_title')}</strong><br><br>${T('firdaria_info_text')}</div>
        </details>
      </div>
      <div class="pred-rows">
        <div class="pred-row">
          <span class="pred-label">${T('firdaria_hlavni')}</span>
          <span class="pred-val pred-hl">${mg} ${planetName(f.planet)}</span>
        </div>
        <div class="pred-row">
          <span class="pred-label"></span>
          <span class="pred-val pred-dim">${FMT_DATE(f.from)} – ${FMT_DATE(f.to)}</span>
        </div>
        <div class="pred-row">
          <span class="pred-label">${T('firdaria_sub')}</span>
          <span class="pred-val pred-hl">${sg} ${planetName(f.sub.planet)}</span>
        </div>
        <div class="pred-row">
          <span class="pred-label"></span>
          <span class="pred-val pred-dim">${FMT_DATE(f.sub.from)} – ${FMT_DATE(f.sub.to)}</span>
        </div>
      </div>
    </div>`;
  }

  panel.innerHTML = `<div class="pred-panel-wrap">
    <div class="pred-panel-title">${T('modul_e_title')}</div>
    <div class="pred-grid">${profHTML}${firHTML}</div>
  </div>`;
}

/** MC ecliptic longitude from RAMC + obliquity */
function calcMC(ramc_deg, eps_deg) {
  const r = x => x * Math.PI / 180;
  const d = x => x * 180 / Math.PI;
  const n = x => ((x % 360) + 360) % 360;
  return n(d(Math.atan2(Math.sin(r(ramc_deg)), Math.cos(r(ramc_deg)) * Math.cos(r(eps_deg)))));
}

/**
 * Iterative Placidus intermediate house cusp.
 * n=1 → houses 11 or 2 (1/3 of arc)
 * n=2 → houses 12 or 3 (2/3 of arc)
 * nocturnal=false → diurnal (houses 11,12); nocturnal=true → (houses 2,3)
 */
function calcPlacidusIntermediate(ramc_deg, lat_deg, eps_deg, n, nocturnal) {
  const r   = x => x * Math.PI / 180;
  const d   = x => x * 180 / Math.PI;
  const n360 = x => ((x % 360) + 360) % 360;

  const latR = r(lat_deg);
  const epsR = r(eps_deg);
  const raic = n360(ramc_deg + 180); // RA of IC

  // Initial guess: approximate RA → ecliptic longitude
  const guessRA  = n360((nocturnal ? raic : ramc_deg) + n * 30);
  const guessRAr = r(guessRA);
  let lon = n360(d(Math.atan2(Math.sin(guessRAr) / Math.cos(epsR), Math.cos(guessRAr))));

  for (let iter = 0; iter < 80; iter++) {
    const lonR = r(n360(lon));

    // Declination
    const decR = Math.asin(Math.sin(epsR) * Math.sin(lonR));

    // Polar latitude guard
    const tlt = Math.tan(latR) * Math.tan(decR);
    if (Math.abs(tlt) >= 1) return null;

    // SDA / NDA in degrees
    const sdaDeg = d(Math.acos(-tlt));
    const ndaDeg = 180 - sdaDeg;

    // Right Ascension of this ecliptic point
    let ra = d(Math.atan2(Math.cos(epsR) * Math.sin(lonR), Math.cos(lonR)));
    ra = n360(ra);

    // Meridian distance from reference point (RAMC or RAIC)
    const ref = nocturnal ? raic : ramc_deg;
    let md = n360(ra - ref);
    if (md > 180) md -= 360; // normalise to -180..+180

    // Target meridian distance
    const target = (n / 3) * (nocturnal ? ndaDeg : sdaDeg);
    const err = md - target;
    if (Math.abs(err) < 0.0001) break;

    lon = n360(lon - err * 0.6); // damped correction
  }

  return n360(lon);
}

/** Calculate all 12 Placidus cusps; returns null if polar fallback needed */
function calcAllPlacidus(ramc_deg, lat_deg, eps_deg, asc_lon) {
  const n360 = x => ((x % 360) + 360) % 360;

  const mc  = calcMC(ramc_deg, eps_deg);
  const ic  = n360(mc + 180);
  const dsc = n360(asc_lon + 180);

  const h11 = calcPlacidusIntermediate(ramc_deg, lat_deg, eps_deg, 1, false);
  const h12 = calcPlacidusIntermediate(ramc_deg, lat_deg, eps_deg, 2, false);
  const h2  = calcPlacidusIntermediate(ramc_deg, lat_deg, eps_deg, 1, true);
  const h3  = calcPlacidusIntermediate(ramc_deg, lat_deg, eps_deg, 2, true);

  if (h11 === null || h12 === null || h2 === null || h3 === null) return null;

  return {
    1:  asc_lon,       2:  h2,             3:  h3,
    4:  ic,            5:  n360(h11 + 180),6:  n360(h12 + 180),
    7:  dsc,           8:  n360(h2  + 180),9:  n360(h3  + 180),
    10: mc,            11: h11,            12: h12
  };
}

/** Assign planet to a Placidus house by ecliptic longitude */
function planetInPlacidusHouse(lon, cusps) {
  const n360 = x => ((x % 360) + 360) % 360;
  for (let h = 1; h <= 12; h++) {
    const next  = (h % 12) + 1;
    const arc   = n360(cusps[next] - cusps[h]);
    const dist  = n360(lon - cusps[h]);
    if (dist < arc) return h;
  }
  return 1;
}

/** Switch between Whole Sign and Placidus; update DOM and banner */
function switchHouseSys(sys) {
  if (!lastChartData || !lastChartData.ascendent) {
    alert('Nejprve vypočítejte horoskop (krok I).'); return;
  }
  if (sys === 'placidus' && !lastChartData.hasLocation) {
    alert('Placidus vyžaduje souřadnice místa narození.\nZadejte místo v kroku I a přepočítejte.'); return;
  }

  currentHouseSys = sys;
  document.getElementById('btn-ws').classList.toggle('active', sys === 'whole-sign');
  document.getElementById('btn-pl').classList.toggle('active', sys === 'placidus');

  if (sys === 'whole-sign') {
    applyWholeSignHouses(lastChartData);
    lastChartData.houseSys = 'Whole Sign';
  } else {
    const ok = applyPlacidusHouses(lastChartData);
    if (!ok) {
      alert('Placidus nelze vypočítat pro tuto zeměpisnou šířku (> ~66°).\nPřepnuto zpět na Whole Sign.');
      switchHouseSys('whole-sign'); return;
    }
    lastChartData.houseSys = 'Placidus';
  }
  showCalcBanner(lastChartData);
  drawHoroscopeWheel(lastChartData); // Sprint D: redraw with new house lines
}

/** Re-apply Whole Sign houses to DOM */
function applyWholeSignHouses(chart) {
  if (!chart.ascendent) return;
  const ascSign = chart.ascendent.sign;
  for (const czName of Object.keys(chart.planety)) {
    const ps    = chart.planety[czName].sign;
    const house = ((ps - ascSign + 12) % 12) + 1;
    chart.planety[czName].dum = house;
    const dmSel = document.getElementById(`dum-${czName}`);
    if (dmSel) dmSel.value = house;
  }
}

/** Calculate Placidus houses and update DOM */
function applyPlacidusHouses(chart) {
  // Recompute RAMC + obliquity from stored UTC date and birthData
  const gst  = Astronomy.SiderealTime(chart.utcDate);
  const lst  = ((gst + birthData.lng / 15) % 24 + 24) % 24;
  const ramc = lst * 15;
  const jd   = chart.utcDate.getTime() / 86400000 + 2440587.5;
  const T    = (jd - 2451545.0) / 36525.0;
  const eps  = 23.439291111 - 0.013004167 * T;

  const cusps = calcAllPlacidus(ramc, birthData.lat, eps, chart.ascendent.lon);
  if (!cusps) return false;

  chart.placidus_cusps = cusps;
  for (const czName of Object.keys(chart.planety)) {
    const lon   = chart.planety[czName].lon;
    const house = planetInPlacidusHouse(lon, cusps);
    chart.planety[czName].dum = house;
    const dmSel = document.getElementById(`dum-${czName}`);
    if (dmSel) dmSel.value = house;
  }
  return true;
}
function fillPlanetTable(chart) {
  const tbody = document.getElementById('planet-tbody');

  PLANETS.forEach(p => {
    const data = chart.planety[p.id];
    if (!data) return;

    const row = tbody.querySelector(`#row-${p.id}`);
    if (!row) return;

    const znSel = document.getElementById(`znameni-${p.id}`);
    const dmSel = document.getElementById(`dum-${p.id}`);
    const rtChk = document.getElementById(`retro-${p.id}`);

    if (znSel && data.sign) znSel.value = data.sign;
    if (dmSel && data.dum)  dmSel.value = data.dum;
    if (rtChk) rtChk.checked = data.retro || false;

    // Mark row as autofilled + show degree
    row.classList.add('autofilled');
    const degSpan = row.querySelector('.planet-deg');
    if (degSpan) degSpan.textContent = `${data.deg.toFixed(1)}°`;
  });

  // Ascendant
  if (chart.ascendent) {
    const ascSel = document.getElementById('ascendent-select');
    if (ascSel) ascSel.value = chart.ascendent.sign;
  }

  // Sprint D: draw the wheel
  drawHoroscopeWheel(chart);

  // Modul B: dignities + almuten
  calcAllDignities(chart);
  calcAlmuten(chart);
  renderDignityPanel(chart);

  // Modul C: arabské losy
  calcArabicLots(chart);
  renderLotsPanel(chart);

  // Modul D: temperament
  calcTemperament(chart);
  renderTemperamentPanel(chart);

  // Modul E: profekce + firdaria
  calcProfection(chart);
  calcFirdaria(chart);
  renderPredictionPanel(chart);
}

// ── Calc status banner ────────────────────────────────────────
function showCalcBanner(chart) {
  const wrap = document.getElementById('calc-banner-wrap');

  if (!chart) {
    wrap.innerHTML = `<div class="calc-banner info">
      <div class="calc-banner-icon">ℹ</div>
      <div class="calc-banner-body">
        <div class="calc-banner-title">${T('banner_manual')}</div>
        <div class="calc-banner-detail">${T('banner_manual_txt')}</div>
      </div>
    </div>`;
    return;
  }

  const isOk    = chart.warnings.length === 0;
  const d       = birthData;
  const dateStr = d.date || '';
  const timeStr = d.time ? ` ${d.time}` : ` ${T('cas_neznamy')}`;
  const cityStr = d.cityName ? `, ${d.cityName}` : '';

  const warnList = chart.warnings.length > 0
    ? `<ul class="calc-banner-detail">${chart.warnings.map(w => `<li>${esc(w)}</li>`).join('')}</ul>`
    : '';

  const ascStr = chart.ascendent
    ? `${T('banner_ascendent')}: ${ZNAMENI[chart.ascendent.sign - 1].sym} ${ZNAMENI[chart.ascendent.sign - 1].name} (${chart.ascendent.deg.toFixed(1)}°)`
    : '';

  // Sekta row (Modul A)
  const sektaRow = chart.sekta ? (() => {
    const isDiurnal  = chart.sekta === 'diurnal';
    const sektaLabel = T(isDiurnal ? 'sekta_denni' : 'sekta_nocni');
    const sektaIcon  = isDiurnal ? '🌞' : '🌙';
    const svetloKey  = chart.voduciSvetlo === 'Slunce' ? 'slunce' : 'luna';
    return `<div class="sekta-row">
      <span class="sekta-badge ${chart.sekta}">${sektaIcon} ${sektaLabel}</span>
      <span class="sekta-light">${T('voduci_svetlo')}: ${T(svetloKey)}</span>
      <details class="info-details">
        <summary title="${T('sekta_info_title')}">ℹ</summary>
        <div class="info-panel">
          <strong>${T('sekta_info_title')}</strong><br><br>
          ${T('sekta_info_text')}
        </div>
      </details>
    </div>`;
  })() : '';

  wrap.innerHTML = `<div class="calc-banner ${isOk ? 'ok' : 'partial'}">
    <div class="calc-banner-icon">${isOk ? '✅' : '⚠'}</div>
    <div class="calc-banner-body">
      <div class="calc-banner-title">${T(isOk ? 'banner_vypocitan' : 'banner_vyhrada')}</div>
      <div class="calc-banner-detail">
        ${T('banner_narozeniny')}: ${esc(dateStr + timeStr + cityStr)}<br>
        ${ascStr ? esc(ascStr) + ' &nbsp;·&nbsp; ' : ''}${T('banner_domy')}: ${esc(chart.houseSys || 'Whole Sign')}
      </div>
      ${sektaRow}
      ${warnList}
    </div>
    <div class="calc-banner-actions">
      <button class="btn-recalc" onclick="recalculate()">${T('btn_prepocitat')}</button>
    </div>
  </div>`;
}

// ── Planet table DOM builder ──────────────────────────────────
function buildPlanetTable() {
  const tbody = document.getElementById('planet-tbody');
  PLANETS.forEach(p => {
    const tr = document.createElement('tr');
    tr.id = `row-${p.id}`;

    let znOpts = '<option value="">—</option>';
    ZNAMENI.forEach(z => { znOpts += `<option value="${z.n}">${z.sym} ${LANG === 'en' ? z.name_en : z.name}</option>`; });
    let dmOpts = '<option value="">—</option>';
    for (let i = 1; i <= 12; i++) dmOpts += `<option value="${i}">${i}.</option>`;

    const retroCell = p.retro
      ? `<input type="checkbox" class="astrolog-checkbox" id="retro-${p.id}" title="Retrográdní">`
      : `<span style="color:var(--text-faint);font-size:0.8rem;">—</span>`;

    tr.innerHTML = `
      <td>
        <div class="planet-name-cell">
          <span class="planet-glyph">${p.glyph}</span>
          <span class="planet-label">${LANG === 'en' ? p.name_en : p.id}</span>
          <span class="planet-deg" id="deg-${p.id}"></span>
        </div>
      </td>
      <td><select class="select-sm" id="znameni-${p.id}" style="min-width:150px;">${znOpts}</select></td>
      <td><select class="select-sm" id="dum-${p.id}"    style="min-width:75px;">${dmOpts}</select></td>
      <td style="text-align:center;">${retroCell}</td>
      <td style="text-align:center;" id="dignity-${p.id}"><span class="dig-tag dig-none">—</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function buildAscendentSelect() {
  const sel = document.getElementById('ascendent-select');
  ZNAMENI.forEach(z => {
    const o = document.createElement('option');
    o.value = z.n; o.textContent = `${z.sym} ${LANG === 'en' ? z.name_en : z.name}`;
    sel.appendChild(o);
  });
}

function resetPlanets() {
  PLANETS.forEach(p => {
    const zs = document.getElementById(`znameni-${p.id}`);
    const ds = document.getElementById(`dum-${p.id}`);
    const ds2 = document.getElementById(`deg-${p.id}`);
    if (zs) zs.value = '';
    if (ds) ds.value = '';
    if (ds2) ds2.textContent = '';
    if (p.retro) { const c = document.getElementById(`retro-${p.id}`); if (c) c.checked = false; }
    const row = document.getElementById(`row-${p.id}`);
    if (row) row.classList.remove('autofilled');
  });
  document.getElementById('ascendent-select').value = '';
  document.getElementById('wheel-container').style.display = 'none';
  document.getElementById('dignity-panel').style.display = 'none';
  document.getElementById('lots-panel').style.display = 'none';
  document.getElementById('temperament-panel').style.display = 'none';
  document.getElementById('prediction-panel').style.display = 'none';
}

// ── Category toggle ───────────────────────────────────────────
function toggleKat(el) {
  const kat = el.dataset.kat;
  if (selectedKats.has(kat)) {
    if (selectedKats.size <= 1) return;
    selectedKats.delete(kat); el.classList.remove('selected');
  } else {
    selectedKats.add(kat); el.classList.add('selected');
  }
}

// ── Collect + render ──────────────────────────────────────────
function collectPlanetData() {
  const data = { planety:{}, ascendent:null };
  PLANETS.forEach(p => {
    const zn = document.getElementById(`znameni-${p.id}`)?.value;
    const dm = document.getElementById(`dum-${p.id}`)?.value;
    const rt = p.retro ? (document.getElementById(`retro-${p.id}`)?.checked || false) : false;
    if (zn || dm) data.planety[p.id] = { znameni:zn?Number(zn):null, dum:dm?Number(dm):null, retro:rt };
  });
  const asc = document.getElementById('ascendent-select')?.value;
  if (asc) data.ascendent = Number(asc);
  return data;
}

function sestavitVyklad() {
  const userData = collectPlanetData();
  if (!Object.keys(userData.planety).length && !userData.ascendent) {
    alert('Zadejte prosím alespoň jednu planetu nebo Ascendent.'); return;
  }
  goToStep(4);
  const container = document.getElementById('results-container');
  container.innerHTML = `<div class="astrolog-loading">${T('vyklad_loading')}</div>`;
  setTimeout(() => renderResults(matchRules(userData, [...selectedKats]), container), 600);
}

function renderResults(results, container) {
  document.getElementById('result-count').textContent = results.length;
  container.innerHTML = '';
  if (!results.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">⟡</div>
      <p>${T('vyklad_prazdno').replace('\n','<br>')}</p></div>`;
    return;
  }
  results.forEach((r, i) => {
    const level = r.score >= 0.75 ? 'high' : r.score >= 0.45 ? 'medium' : 'low';
    const badge = level === 'high' ? T('badge_high') : level === 'medium' ? T('badge_medium') : T('badge_low');
    const tags  = r.kategorie.map(k => `<span class="kat-tag">${KAT_NAMES[k]||k}</span>`).join('');
    const card  = document.createElement('div');
    card.className = `result-card ${level}`;
    card.style.animationDelay = `${i * 0.05}s`;
    const resultText = LANG === 'en' ? (r.text_en || r.text_cs) : r.text_cs;
    card.innerHTML = `
      <div class="result-head">
        <div class="result-tema">${r.tema}</div>
        <div class="result-meta"><span class="result-badge badge-${level}">${badge}</span></div>
      </div>
      <div class="result-kategorie">${tags}</div>
      <div class="result-text">${resultText}</div>
      <div class="result-source">Zdroj: ${r.zdroj}</div>
    `;
    container.appendChild(card);
  });
  });
}

// ════════════════════════════════════════════════════
//  SPRINT D — SVG Horoscope Wheel
// ════════════════════════════════════════════════════

const PLANET_GLYPHS_MAP = {
  'Slunce':'☀','Luna':'☽','Merkur':'☿','Venuše':'♀',
  'Mars':'♂','Jupiter':'♃','Saturn':'♄',
  'Uran':'♅','Neptun':'♆','Pluto':'♇'
};
const ZODIAC_GLYPHS_ARR = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
const ZODIAC_NAMES_ARR_CS = ['Beran','Býk','Blíženci','Rak','Lev','Panna','Váhy','Štír','Střelec','Kozoroh','Vodnář','Ryby'];
const ZODIAC_NAMES_ARR_EN = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const ZODIAC_NAMES_ARR    = () => LANG === 'en' ? ZODIAC_NAMES_ARR_EN : ZODIAC_NAMES_ARR_CS;
const ELEM_FILL = ['#200a04','#061408','#060c1a','#04081a'];
const ELEM_IDX  = [0,1,2,3,0,1,2,3,0,1,2,3]; // fire,earth,air,water per sign

function drawHoroscopeWheel(chart) {
  const container = document.getElementById('wheel-container');
  const svgEl     = document.getElementById('horoscope-wheel');
  if (!chart || !chart.ascendent) { container.style.display = 'none'; return; }

  svgEl.innerHTML = '';
  container.style.display = 'block';

  const cx = 250, cy = 250;
  const R = { zOut:220, zIn:185, pRing:148, hNum:102, hIn:75, ctr:38 };
  const ascLon = chart.ascendent.lon;
  const NS = 'http://www.w3.org/2000/svg';

  function svg(tag, attrs, text) {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
    if (text !== undefined) e.textContent = text;
    return e;
  }

  // Ecliptic longitude → SVG {x,y}
  function L2P(lon, r) {
    const a = (180 - (((lon - ascLon) % 360) + 360) % 360) * Math.PI / 180;
    return { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) };
  }
  const f = n => Number(n).toFixed(2);

  // Ring arc path from lon1 to lon2 at radii r1 (inner) and r2 (outer)
  function arc(lon1, lon2, r1, r2) {
    const p1o = L2P(lon1, r2), p2o = L2P(lon2, r2);
    const p1i = L2P(lon1, r1), p2i = L2P(lon2, r1);
    return `M${f(p1o.x)} ${f(p1o.y)} A${r2} ${r2} 0 0 0 ${f(p2o.x)} ${f(p2o.y)} L${f(p2i.x)} ${f(p2i.y)} A${r1} ${r1} 0 0 1 ${f(p1i.x)} ${f(p1i.y)}Z`;
  }

  // ── Defs ──
  const defs = svg('defs', {});
  const glow = svg('filter', {id:'wglow', x:'-50%', y:'-50%', width:'200%', height:'200%'});
  const gb   = svg('feGaussianBlur', {in:'SourceGraphic', stdDeviation:'2.5', result:'b'});
  const gm   = svg('feMerge', {});
  gm.append(svg('feMergeNode', {in:'b'}), svg('feMergeNode', {in:'SourceGraphic'}));
  glow.append(gb, gm); defs.append(glow); svgEl.append(defs);

  // ── Background ──
  svgEl.append(svg('circle', {cx, cy, r:R.zOut + 6, fill:'#06060f'}));

  // ── Zodiac ring ──
  for (let s = 0; s < 12; s++) {
    const lon1 = s * 30, lon2 = lon1 + 30, mid = lon1 + 15;
    svgEl.append(svg('path', {
      d: arc(lon1, lon2, R.zIn, R.zOut),
      fill: ELEM_FILL[ELEM_IDX[s]], stroke:'rgba(201,168,76,0.25)', 'stroke-width':'0.5'
    }));
    const gp = L2P(mid, (R.zIn + R.zOut) / 2);
    svgEl.append(svg('text', {
      x:gp.x, y:gp.y+5, 'text-anchor':'middle',
      'font-size':'13', fill:'rgba(201,168,76,0.75)', 'font-family':'serif'
    }, ZODIAC_GLYPHS_ARR[s]));
  }
  svgEl.append(svg('circle', {cx, cy, r:R.zOut, fill:'none', stroke:'rgba(201,168,76,0.4)', 'stroke-width':'1'}));
  svgEl.append(svg('circle', {cx, cy, r:R.zIn,  fill:'none', stroke:'rgba(201,168,76,0.2)', 'stroke-width':'0.8'}));

  // Degree ticks
  for (let deg = 0; deg < 360; deg += 10) {
    const p1 = L2P(deg, R.zOut - 2), p2 = L2P(deg, R.zOut - (deg % 30 === 0 ? 9 : 4));
    svgEl.append(svg('line', {
      x1:f(p1.x), y1:f(p1.y), x2:f(p2.x), y2:f(p2.y),
      stroke:'rgba(201,168,76,0.25)', 'stroke-width': deg % 30 === 0 ? '1' : '0.5'
    }));
  }

  // ── House cusps ──
  let cusps = {};
  if (currentHouseSys === 'placidus' && chart.placidus_cusps) {
    cusps = chart.placidus_cusps;
  } else {
    const s0 = chart.ascendent.sign - 1;
    for (let h = 1; h <= 12; h++) cusps[h] = ((s0 + h - 1) % 12) * 30;
  }

  for (let h = 1; h <= 12; h++) {
    const p1 = L2P(cusps[h], R.hIn), p2 = L2P(cusps[h], R.zIn);
    const isCard = [1,4,7,10].includes(h);
    svgEl.append(svg('line', {
      x1:f(p1.x), y1:f(p1.y), x2:f(p2.x), y2:f(p2.y),
      stroke: isCard ? 'rgba(201,168,76,0.7)' : 'rgba(201,168,76,0.2)',
      'stroke-width': isCard ? '1.5' : '0.7'
    }));
  }
  svgEl.append(svg('circle', {cx, cy, r:R.hIn, fill:'none', stroke:'rgba(201,168,76,0.18)', 'stroke-width':'0.8'}));

  // House numbers
  for (let h = 1; h <= 12; h++) {
    const next = (h % 12) + 1;
    const diff = ((cusps[next] - cusps[h]) % 360 + 360) % 360;
    const mid  = cusps[h] + diff / 2;
    const hp   = L2P(mid, R.hNum);
    svgEl.append(svg('text', {
      x:hp.x, y:hp.y+4, 'text-anchor':'middle',
      'font-size':'10', fill:'rgba(201,168,76,0.4)',
      'font-family':'Cinzel,serif', 'font-weight':'600'
    }, String(h)));
  }

  // Cardinal labels
  const cards = [
    { lon: chart.ascendent.lon,        label:'ASC' },
    { lon: chart.ascendent.lon + 180,  label:'DSC' },
  ];
  if (chart.placidus_cusps) {
    cards.push({ lon: chart.placidus_cusps[10], label:'MC' });
    cards.push({ lon: chart.placidus_cusps[4],  label:'IC' });
  }
  for (const c of cards) {
    const lp = L2P(c.lon, R.zIn + 14);
    svgEl.append(svg('text', {
      x:lp.x, y:lp.y+4, 'text-anchor':'middle',
      'font-size':'8', fill:'rgba(201,168,76,0.65)',
      'font-family':'Cinzel,serif', 'font-weight':'700', 'letter-spacing':'0.5'
    }, c.label));
  }

  // ── Planets ──
  // Sort by longitude, group planets within 8° for collision avoidance
  const pList = Object.entries(chart.planety)
    .filter(([,d]) => d && d.lon !== undefined)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => a.lon - b.lon);

  const groups = [];
  for (const p of pList) {
    const last = groups[groups.length - 1];
    if (last && ((p.lon - last[0].lon + 360) % 360) < 9) last.push(p);
    else groups.push([p]);
  }

  for (const group of groups) {
    group.forEach((p, i) => {
      const r  = R.pRing - i * 20;
      const pp = L2P(p.lon, r);

      // Background circle
      const bg = svg('circle', {
        cx:f(pp.x), cy:f(pp.y), r:'12',
        fill:'rgba(10,10,28,0.92)', stroke:'rgba(201,168,76,0.35)', 'stroke-width':'0.8',
        id:`p-bg-${p.name}`, cursor:'pointer'
      });
      svgEl.append(bg);

      // Glyph
      const gt = svg('text', {
        x:f(pp.x), y:f(pp.y+5), 'text-anchor':'middle',
        'font-size':'13', 'font-family':'serif',
        fill: p.retro ? '#c07878' : 'rgba(201,168,76,0.92)',
        filter:'url(#wglow)', cursor:'pointer', id:`p-glyph-${p.name}`
      }, PLANET_GLYPHS_MAP[p.name] || '★');

      gt.addEventListener('click', () => highlightPlanetRow(p.name));
      bg.addEventListener('click', () => highlightPlanetRow(p.name));
      gt.addEventListener('mouseenter', e => showPlanetTooltip(p, pp, e));
      bg.addEventListener('mouseenter', e => showPlanetTooltip(p, pp, e));
      gt.addEventListener('mouseleave', hideTooltip);
      bg.addEventListener('mouseleave', hideTooltip);
      svgEl.append(gt);

      // Retrograde marker
      if (p.retro) {
        const rp = L2P(p.lon, r + 13);
        svgEl.append(svg('text', {
          x:f(rp.x), y:f(rp.y+3), 'text-anchor':'middle',
          'font-size':'7', fill:'#c07878', 'font-family':'serif'
        }, '℞'));
      }
    });
  }

  // ── Arabské losy ve wheelu (Modul C) ──
  if (chart.arabicLots) {
    const lotMarkers = [
      {id:'fortuna', sym:'⊕', color:'rgba(232,200,122,0.9)'},
      {id:'daimon',  sym:'⊗', color:'rgba(144,200,224,0.8)'},
    ];
    for (const lm of lotMarkers) {
      const lot = chart.arabicLots[lm.id];
      if (!lot) continue;
      const lp = L2P(lot.lon, R.zIn - 14);
      svgEl.append(svg('text', {
        x:f(lp.x), y:f(lp.y+5), 'text-anchor':'middle',
        'font-size':'11', fill:lm.color, 'font-family':'serif',
        'font-weight':'bold', cursor:'default',
        title:`${lm.sym} ${LANG === 'en' ? (ZNAMENI.find(z=>z.n===lot.sign)?.name_en||'') : ZNAMENI_NAZVY[lot.sign]} ${lot.deg.toFixed(1)}°`
      }, lm.sym));
    }
  }

  // ── Center decoration ──
  svgEl.append(svg('circle', {cx, cy, r:R.ctr,     fill:'#06060f', stroke:'rgba(201,168,76,0.3)', 'stroke-width':'1'}));
  svgEl.append(svg('circle', {cx, cy, r:R.ctr - 9, fill:'none',    stroke:'rgba(201,168,76,0.12)', 'stroke-width':'0.5'}));
  svgEl.append(svg('text', {
    x:cx, y:cy+7, 'text-anchor':'middle',
    'font-size':'20', fill:'rgba(201,168,76,0.45)', 'font-family':'serif'
  }, '✦'));

  // Ensure tooltip div exists
  if (!document.getElementById('wheel-tip')) {
    const tt = document.createElement('div');
    tt.id = 'wheel-tip';
    tt.style.cssText = [
      'position:fixed','display:none','z-index:9999','pointer-events:none',
      'background:#0d0d20','border:1px solid rgba(201,168,76,0.4)',
      'border-radius:6px','padding:7px 13px',
      "font-family:'Crimson Pro',serif",'font-size:0.92rem','color:#ddd8cc',
      'white-space:nowrap','box-shadow:0 4px 20px rgba(0,0,0,0.5)'
    ].join(';');
    document.body.appendChild(tt);
  }
}

function highlightPlanetRow(name) {
  document.querySelectorAll('.planet-table tr.highlighted').forEach(r => r.classList.remove('highlighted'));
  document.querySelectorAll('[id^="p-bg-"]').forEach(e => e.setAttribute('stroke', 'rgba(201,168,76,0.35)'));
  const row = document.getElementById(`row-${name}`);
  if (row) { row.classList.add('highlighted'); row.scrollIntoView({behavior:'smooth', block:'nearest'}); }
  const bg = document.getElementById(`p-bg-${name}`);
  if (bg) bg.setAttribute('stroke', 'rgba(201,168,76,0.9)');
}

function showPlanetTooltip(p, svgPt, event) {
  const tt = document.getElementById('wheel-tip');
  if (!tt) return;
  const sym   = ZODIAC_GLYPHS_ARR[p.sign - 1] || '';
  const sname = ZODIAC_NAMES_ARR()[p.sign - 1]  || '';
  const retro = p.retro ? ' <span style="color:#c07878">℞</span>' : '';
  const dum   = p.dum   ? ` · <em>${p.dum}. dům</em>` : '';
  tt.innerHTML = `<strong>${p.name}</strong> ${sym} ${sname} ${p.deg.toFixed(1)}°${retro}${dum}`;
  tt.style.display = 'block';
  tt.style.left = (event.clientX + 14) + 'px';
  tt.style.top  = (event.clientY - 10) + 'px';
}

function hideTooltip() {
  const tt = document.getElementById('wheel-tip');
  if (tt) tt.style.display = 'none';
}

function initCanvas() {
  const canvas = document.getElementById('astrolog-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [], w, h;
  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = Array.from({length:180}, () => ({
      x:Math.random()*w, y:Math.random()*h,
      r:Math.random()*1.2+0.2, a:Math.random(),
      speed:Math.random()*0.004+0.001, phase:Math.random()*Math.PI*2
    }));
  }
  function draw(t) {
    ctx.clearRect(0,0,w,h);
    stars.forEach(s => {
      const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(201,168,76,${alpha})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  resize(); requestAnimationFrame(draw);
}
