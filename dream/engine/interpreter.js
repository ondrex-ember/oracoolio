/**
 * interpreter.js — Dream Engine / Somnium
 * Factory pattern — přijímá dreamData jako parametr (žádný JSON import).
 */

import { composeInterpretation }    from './compositor.js';
import { validateInputs }           from './validator.js';
import { getFallbackInterpretation } from './fallback.js';

export function createEngine(dreamData) {
  const major = String(dreamData.version ?? '1').split('.')[0];
  if (!['1'].includes(major)) {
    console.warn(`[Somnium] DB verze ${dreamData.version} nemusí být podporována.`);
  }

  function generateInterpretation({ symbolId, emotionId, verbId, contextId }) {
    const inputs     = { symbolId, emotionId, verbId, contextId };
    const validation = validateInputs(inputs, dreamData);
    if (!validation.isValid) return getFallbackInterpretation(validation.missingFields);

    const symbol  = dreamData.symbols[symbolId];
    const emotion = dreamData.emotions[emotionId];
    const verb    = dreamData.verbs[verbId];
    const context = dreamData.contexts[contextId];

    const overrideKey = `${symbolId}+${emotionId}+${verbId}+${contextId}`;
    const override    = dreamData.combination_overrides[overrideKey];

    if (override) {
      return {
        text:               override.custom_text,
        reflectionQuestion: override.reflection_question,
        metadata:           _meta(inputs, 'override'),
        confidence:         1.0,
        warnings:           [],
      };
    }

    const result     = composeInterpretation(symbol, emotion, verb, context);
    const confidence = _confidence(symbol, emotion, verb, context);

    return {
      text:               result.text,
      reflectionQuestion: result.reflectionQuestion,
      metadata:           _meta(inputs, 'rule-based'),
      confidence,
      warnings:           validation.warnings,
    };
  }

  function getVerbsForSymbol(symbolId) {
    const symbol      = dreamData.symbols[symbolId];
    const specificIds = symbol?.relevant_verbs ?? [];
    const universalIds = Object.keys(dreamData.verbs).filter(vid => {
      return dreamData.verbs[vid].applicable_symbols.includes('*')
          && !specificIds.includes(vid);
    });
    const seen = new Set();
    return [...specificIds, ...universalIds]
      .filter(vid => {
        if (seen.has(vid) || !dreamData.verbs[vid]) return false;
        seen.add(vid);
        return true;
      })
      .map(vid => dreamData.verbs[vid]);
  }

  function getDreamData() { return dreamData; }

  function _meta(inputs, engine_type) {
    return { inputs, engine_type, timestamp: Date.now(), version: dreamData.version };
  }

  function _confidence(symbol, emotion, verb, context) {
    let s = 0;
    if (symbol.content_status === 'complete') s += 0.25;
    if (emotion.modifier_body)                s += 0.25;
    if (verb.action_direction)                s += 0.25;
    if (context.reflection_question)          s += 0.25;
    return s;
  }

  return { generateInterpretation, getVerbsForSymbol, getDreamData };
}
