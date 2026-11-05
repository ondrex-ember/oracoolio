/**
 * compositor.js
 * Dream Engine — Skládá textové fragmenty do koherentního výkladu
 *
 * Závisí na: struktuře dreams.json (viz dokumentace)
 * Nikdy neimportuje nic z Reactu ani externích knihoven.
 *
 * Přidáváš-li nový action_direction do verbs, přidej mapování
 * do DIRECTION_TO_CONCLUSION — jinak engine použije 'passive' fallback.
 */

/**
 * Mapování verb.action_direction → klíč conclusion_ v kontextu.
 * Musí pokrývat všechny platné hodnoty action_direction v DB.
 */
const DIRECTION_TO_CONCLUSION = {
  passive_overwhelmed: 'conclusion_passive',
  active_coping:       'conclusion_active',
  avoidance:           'conclusion_avoidance',
  awareness_passive:   'conclusion_awareness',
  // Fallback pro případné budoucí typy:
  default:             'conclusion_passive',
};

/**
 * Složí personalizovaný výklad ze čtyř vstupních entit.
 *
 * Výstup je vrstvený: `sections` (typed) pro UI a `text` (odstavce oddělené
 * prázdným řádkem) pro zpětnou kompatibilitu a testy.
 *
 * Typy sekcí: lead | symbol | emotion | verb | context | advice
 *
 * Slot "advice" je zatím neaktivní — zobrazí se, jakmile DB obsahuje
 *   context.advice_passive|active|avoidance|awareness  a/nebo  symbol.practice
 *
 * @param {Object} symbol   - objekt symbolu z dreamData
 * @param {Object} emotion  - objekt emoce z dreamData
 * @param {Object} verb     - objekt verbu z dreamData
 * @param {Object} context  - objekt kontextu z dreamData
 * @returns {{ text: string, sections: Array<{type:string,text:string}>, reflectionQuestion: string }}
 */
export function composeInterpretation(symbol, emotion, verb, context) {
  const conclusionKey = DIRECTION_TO_CONCLUSION[verb.action_direction]
                     ?? DIRECTION_TO_CONCLUSION.default;
  const conclusion    = context[conclusionKey] ?? context.conclusion_passive ?? '';

  const sections = [
    { type: 'lead',    text: buildLead(symbol) },
    { type: 'symbol',  text: buildSymbolBody(symbol) },
    { type: 'emotion', text: buildEmotion(emotion) },
    { type: 'verb',    text: buildVerb(symbol, verb) },
    { type: 'context', text: conclusion },
    { type: 'advice',  text: buildAdvice(symbol, verb, context) },
  ].filter(s => s.text);

  return {
    text:               sections.map(s => s.text).join('\n\n'),
    sections,
    reflectionQuestion: context.reflection_question ?? '',
  };
}

// ── Section builders ───────────────────────────────────────────────────────────

/** Úvodní věta: stručný význam symbolu. */
function buildLead(symbol) {
  const base = ensurePeriod(symbol.base_meaning);
  return base ? cap(base) : '';
}

/**
 * Hlavní výklad symbolu. Používá extended_meaning; pokud chybí, spadne zpět
 * na formulaci z base_meaning, aby výklad nezůstal prázdný.
 */
function buildSymbolBody(symbol) {
  const ext = (symbol.extended_meaning ?? '').trim();
  if (ext) return ext;
  const meaning = lc(stripPeriod(symbol.base_meaning ?? ''));
  return meaning ? `${symbol.label} ve snech symbolizuje ${meaning}.` : '';
}

/** Emoce: "[prefix] — [body]." */
function buildEmotion(emotion) {
  const prefix = cap(emotion.modifier_prefix ?? '');
  const body   = emotion.modifier_body ?? '';
  if (!prefix && !body) return '';
  if (!body)   return ensurePeriod(prefix);
  if (!prefix) return ensurePeriod(cap(body));
  return `${prefix} — ${stripPeriod(body)}.`;
}

/**
 * Děj jako zpráva. Úvodní formule se střídají (3 varianty), ale výběr je
 * deterministický (hash id symbolu + slovesa) — stejná kombinace dá vždy
 * stejný text, což drží testy i sdílení výkladů stabilní.
 */
const VERB_LEADS = [
  (l, m) => `Tvoje jednání ve snu — ${l} — naznačuje, že ${m}.`,
  (l, m) => `Důležité je i to, co se ve snu dělo: ${l}. Znamená to, že ${m}.`,
  (l, m) => `${cap(l)}. Sen tím říká, že ${m}.`,
];

function buildVerb(symbol, verb) {
  // label_second = tvar ve 2. osobě ("padal/a jsi"); fallback na label
  const label   = lc(verb.label_second ?? verb.label ?? '');
  const meaning = stripPeriod(verb.action_meaning ?? '');
  if (!meaning) return '';
  const pick = stableIndex(`${symbol.id}|${verb.id}`, VERB_LEADS.length);
  return VERB_LEADS[pick](label, meaning);
}

/**
 * Slot pro radu. Priorita: advice_<direction> z kontextu, pak symbol.practice.
 * Obě pole jsou volitelná — bez nich se sekce vynechá.
 */
const DIRECTION_TO_ADVICE = {
  passive_overwhelmed: 'advice_passive',
  active_coping:       'advice_active',
  avoidance:           'advice_avoidance',
  awareness_passive:   'advice_awareness',
};

function buildAdvice(symbol, verb, context) {
  const key       = DIRECTION_TO_ADVICE[verb.action_direction] ?? 'advice_passive';
  const ctxAdvice = (context[key] ?? '').trim();
  const practice  = (symbol.practice ?? '').trim();
  return [ctxAdvice, practice].filter(Boolean).join(' ');
}

// ── String utilities ───────────────────────────────────────────────────────────

/** Capitalize first character. */
function cap(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Lowercase first character. */
function lc(str) {
  if (!str) return '';
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/** Remove trailing period if present. */
function stripPeriod(str) {
  if (!str) return '';
  return str.endsWith('.') ? str.slice(0, -1) : str;
}

/** Přidá tečku, pokud věta nekončí interpunkcí. */
function ensurePeriod(str) {
  if (!str) return '';
  const s = str.trim();
  return /[.!?…]$/.test(s) ? s : `${s}.`;
}

/** Deterministický index 0..n-1 z řetězce (djb2). */
function stableIndex(str, n) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return Math.abs(h) % n;
}
