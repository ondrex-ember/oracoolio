/**
 * validator.js
 * Dream Engine — Validace vstupů před zpracováním
 *
 * Rozšiřitelné: přidej nové pravidlo jako funkci, zavolej ji níže.
 * Nikdy neimportuje nic z Reactu ani externích knihoven.
 */

/**
 * Ověří existenci a kompatibilitu vstupů vůči dreamData.
 * @param {Object} inputs        - { symbolId, emotionId, verbId, contextId }
 * @param {Object} dreamData     - celá databáze dreams.json
 * @returns {Object}             - { isValid, missingFields, warnings }
 */
export function validateInputs(inputs, dreamData) {
  const { symbolId, emotionId, verbId, contextId } = inputs;
  const missingFields = [];
  const warnings      = [];

  // ── Existence check ─────────────────────────────────────────────────────────
  if (!symbolId  || !dreamData.symbols[symbolId])   missingFields.push('symbol');
  if (!emotionId || !dreamData.emotions[emotionId]) missingFields.push('emotion');
  if (!verbId    || !dreamData.verbs[verbId])       missingFields.push('verb');
  if (!contextId || !dreamData.contexts[contextId]) missingFields.push('context');

  // ── Verb–symbol kompatibilita (warning, ne error) ───────────────────────────
  if (missingFields.length === 0) {
    const verb = dreamData.verbs[verbId];
    const isUniversal   = verb.applicable_symbols.includes('*');
    const isApplicable  = isUniversal || verb.applicable_symbols.includes(symbolId);

    if (!isApplicable) {
      warnings.push(
        `Verb '${verbId}' není primárně určen pro symbol '${symbolId}' — výklad bude generičtější.`
      );
    }
  }

  return {
    isValid:       missingFields.length === 0,
    missingFields,
    warnings,
  };
}
