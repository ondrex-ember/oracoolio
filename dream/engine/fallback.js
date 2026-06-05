/**
 * fallback.js
 * Dream Engine — Fallback texty při chybějících datech
 *
 * Přidej nové fallbacky sem — interpreter.js se nemění.
 * Nikdy neimportuje nic z Reactu ani externích knihoven.
 */

const FALLBACK_MESSAGES = {
  symbol:   'Tento symbol zatím nemáme v naší databázi. Zkus ho popsat vlastními slovy.',
  emotion:  'Bez emoce je výklad jako mapa bez kompasu — zkus to znovu.',
  verb:     'Nevíme, jak ses v tomto snu pohyboval/a. Výklad bude obecnější.',
  context:  'Bez kontextu bdělé reality je výklad méně přesný.',
  multiple: 'Chybí nám některé údaje pro personalizovaný výklad. Zkus to prosím znovu.',
  default:  'Pro tuto kombinaci zatím nemáme dostatek dat. Pracujeme na tom.',
};

const FALLBACK_QUESTION = 'Co si o svém snu myslíš ty sám/sama?';

/**
 * Vrátí fallback výklad při chybějících vstupech.
 * @param {string[]} missingFields - pole názvů chybějících polí
 * @returns {Object} - { text, reflectionQuestion, metadata, confidence }
 */
export function getFallbackInterpretation(missingFields = []) {
  const key = missingFields.length > 1
    ? 'multiple'
    : (missingFields[0] ?? 'default');

  return {
    text:               FALLBACK_MESSAGES[key] ?? FALLBACK_MESSAGES.default,
    reflectionQuestion: FALLBACK_QUESTION,
    metadata: {
      engine_type: 'fallback',
      missing:     missingFields,
      timestamp:   Date.now(),
    },
    confidence: 0.0,
  };
}
