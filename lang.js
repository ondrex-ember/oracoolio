// ==========================================
// ORACOOLIO — Sdílená jazyková utilita
// ==========================================
// Použití v každém subappu:
//
//   <script src="../lang.js"></script>
//
//   // V setLang(lang):
//   setGlobalLang(lang);
//
//   // V DOMContentLoaded:
//   const lang = getLang();
//   setLang(lang);
// ==========================================

const ORACOOLIO_LANG_KEY = 'oracoolio_lang';

/**
 * Vrátí aktuální jazyk:
 * 1. localStorage
 * 2. Browser language (en → 'en', vše ostatní → 'cs')
 */
function getLang() {
  const stored = localStorage.getItem(ORACOOLIO_LANG_KEY);
  if (stored === 'cs' || stored === 'en') return stored;
  try {
    const browser = (navigator.language || navigator.userLanguage || 'cs').toLowerCase();
    return browser.startsWith('en') ? 'en' : 'cs';
  } catch (e) {
    return 'cs';
  }
}

/**
 * Uloží jazyk do localStorage a synchronizuje html[lang].
 * Volej z každého subappového setLang(lang).
 */
function setGlobalLang(lang) {
  if (lang !== 'cs' && lang !== 'en') return;
  localStorage.setItem(ORACOOLIO_LANG_KEY, lang);
  document.documentElement.lang = lang;
}
