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
 * @param {Object} symbol   - objekt symbolu z dreamData
 * @param {Object} emotion  - objekt emoce z dreamData
 * @param {Object} verb     - objekt verbu z dreamData
 * @param {Object} context  - objekt kontextu z dreamData
 * @returns {{ text: string, reflectionQuestion: string }}
 */
export function composeInterpretation(symbol, emotion, verb, context) {
  const conclusionKey = DIRECTION_TO_CONCLUSION[verb.action_direction]
                     ?? DIRECTION_TO_CONCLUSION.default;
  const conclusion    = context[conclusionKey] ?? context.conclusion_passive ?? '';

  const paragraph1 = buildParagraph1(symbol, emotion);
  const paragraph2 = buildParagraph2(verb);
  const paragraph3 = conclusion;

  const text = [paragraph1, paragraph2, paragraph3]
    .filter(Boolean)
    .join('\n\n');

  return {
    text,
    reflectionQuestion: context.reflection_question ?? '',
  };
}

// ── Paragraph builders ─────────────────────────────────────────────────────────

/**
 * Odstavec 1: Symbol v kontextu emoce.
 * Formát: "[Label] ve snech symbolizuje [base_meaning]. [modifier_prefix] — [modifier_body]."
 */
function buildParagraph1(symbol, emotion) {
  // base_meaning: lowercase prvního písmene, bez tečky na konci
  const meaning = lc(stripPeriod(symbol.base_meaning));

  // modifier_prefix: kapitalní první písmeno
  const prefix = cap(emotion.modifier_prefix);
  const body   = emotion.modifier_body;

  return `${symbol.label} ve snech symbolizuje ${meaning}. ${prefix} — ${body}.`;
}

/**
 * Odstavec 2: Děj jako zpráva.
 * Formát: "Tvoje jednání ve snu ([verb_label]) naznačuje, že [action_meaning]."
 */
function buildParagraph2(verb) {
  const label   = verb.label.charAt(0).toLowerCase() + verb.label.slice(1);
  const meaning = stripPeriod(verb.action_meaning);

  return `Tvoje jednání ve snu (${label}) naznačuje, že ${meaning}.`;
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
