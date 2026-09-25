// ==========================================
// ORACOOLIO — Consent Mode v2 banner (GDPR)
// ==========================================
// Sdílená utilita, analogie k lang.js.
// Použití v každé stránce (za lang.js, kdekoli v <head> nebo <body>):
//
//   <script src="../consent.js"></script>   (v podadresářích)
//   <script src="consent.js"></script>      (v rootu)
//
// Vyžaduje, aby <head> stránky obsahoval Consent Mode v2 default snippet
// (gtag('consent','default',...)) a funkci orcLoadClarity() — viz index.html.
// Klíč: oracoolio_consent ("granted" | "denied") — nezávislý na oracoolio_lang
// ==========================================
(function(){
  var KEY = 'oracoolio_consent';

  function curLang(){
    try{ if(typeof getLang === 'function'){ var g = getLang(); if(g==='cs'||g==='en') return g; } }catch(e){}
    try{ var s = localStorage.getItem('oracoolio_lang'); if(s==='cs'||s==='en') return s; }catch(e){}
    try{ var b = (navigator.language||navigator.userLanguage||'cs').toLowerCase(); return b.indexOf('en')===0 ? 'en' : 'cs'; }catch(e){}
    return 'cs';
  }

  var CSS = `
#orc-consent-bar{position:fixed;left:50%;bottom:calc(10px + env(safe-area-inset-bottom,0px));
  transform:translateX(-50%);width:calc(100% - 20px);max-width:600px;z-index:99998;display:none;
  background:linear-gradient(150deg,#111128,#0d0d20 65%);color:#ddd8cc;
  border:1px solid rgba(201,168,76,0.35);border-radius:10px;
  box-shadow:0 10px 40px rgba(0,0,0,.6),0 0 0 1px rgba(201,168,76,.08);
  font-family:'Crimson Pro',Georgia,serif;padding:16px 18px;text-align:left;}
#orc-consent-bar.orc-on{display:block;animation:orcIn .35s ease;}
@keyframes orcIn{from{opacity:0;transform:translate(-50%,16px);}to{opacity:1;transform:translate(-50%,0);}}
.orc-inner{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
.orc-text{flex:1 1 300px;font-size:13px;line-height:1.6;color:#c8c2b4;}
.orc-title{display:block;font-family:'Cinzel',serif;font-size:10px;text-transform:uppercase;
  letter-spacing:2px;color:#c9a84c;font-weight:700;margin-bottom:5px;}
.orc-text a,.orc-box a{color:#e8c97a;font-weight:600;text-decoration:underline;cursor:pointer;}
.orc-actions{display:flex;gap:8px;flex:0 0 auto;}
.orc-btn{min-width:112px;padding:9px 16px;border-radius:6px;border:1px solid rgba(201,168,76,.4);
  background:rgba(255,255,255,.03);color:#ddd8cc;font-family:'Cinzel',serif;font-size:11px;
  letter-spacing:.6px;text-transform:uppercase;cursor:pointer;transition:background .2s,border-color .2s;}
.orc-btn:hover{background:rgba(201,168,76,.08);border-color:rgba(201,168,76,.6);}
.orc-btn.orc-accept{background:linear-gradient(180deg,#c9a84c,#a8863a);color:#0d0d20;
  border-color:#e8c97a;font-weight:700;}
.orc-btn.orc-accept:hover{filter:brightness(1.08);}
@media (max-width:560px){.orc-actions{flex:1 1 100%;}.orc-btn{flex:1;min-width:0;}}
#orc-consent-modal{position:fixed;inset:0;z-index:99999;background:rgba(2,2,8,.72);display:none;
  align-items:center;justify-content:center;padding:18px;}
#orc-consent-modal.orc-on{display:flex;}
.orc-box{background:linear-gradient(150deg,#111128,#0d0d20 70%);color:#ddd8cc;
  border:1px solid rgba(201,168,76,.35);border-radius:10px;max-width:460px;width:100%;
  max-height:82vh;overflow:auto;padding:22px;text-align:left;
  font-family:'Crimson Pro',Georgia,serif;box-shadow:0 12px 48px rgba(0,0,0,.65);}
.orc-box h3{font-family:'Cinzel',serif;font-size:16px;letter-spacing:.5px;margin:0 0 14px;color:#e8c97a;}
.orc-box p{font-size:13px;line-height:1.65;margin:0 0 10px;color:#c8c2b4;}
.orc-status{font-size:11.5px;color:#8a8278;font-style:italic;
  border-top:1px solid rgba(201,168,76,.15);padding-top:10px;margin-top:6px;}
.orc-status strong{color:#c9a84c;font-style:normal;}
.orc-box .orc-actions{margin-top:16px;justify-content:flex-end;flex-wrap:wrap;}
`;

  var TX = {
    cs: {
      title: `🔮 Měření návštěvnosti`,
      text: `Oracoolio používá Google Analytics a Microsoft Clarity, aby vědělo, jak se věštírna používá. Žádné reklamní cookies, žádná osobní data k prodeji.`,
      more: `Více info`,
      deny: `Odmítám`,
      accept: `Souhlasím`,
      close: `✕ Zavřít`,
      mTitle: `🍪 Soukromí a měření`,
      m1: `Oracoolio měří návštěvnost pomocí Google Analytics 4 (přes Google Tag Manager) a Microsoft Clarity (mapy chování a nahrávky relací). Zajímá nás jen to, jak se věštírna používá — kolik lidí ji navštíví, které nástroje jsou oblíbené a kde uživatelé narazí na potíže.`,
      m2: `Nepoužíváme reklamní cookies ani remarketing a žádná osobní data neprodáváme ani nesdílíme s dalšími stranami. Vše, co do věštby zadáte (datum narození, jméno, otázka), zůstává jen ve vašem prohlížeči a na server se neodesílá.`,
      m3: `Dokud souhlas nedáte, neukládají se žádné analytické cookies a Microsoft Clarity se vůbec nenačítá — Google dostává pouze anonymní signály bez cookies (Google Consent Mode v2).`,
      m4: `Volbu můžete kdykoli změnit odkazem 🍪 Soukromí v patičce stránky. Globální odhlášení: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">doplněk Google Analytics Opt-out</a>.`,
      m5: `Provozovatel: Ember PA · <a href="https://ember-pa.cz/" target="_blank" rel="noopener">ember-pa.cz</a>`,
      st: `Aktuální volba`,
      sG: `souhlas udělen`,
      sD: `odmítnuto`,
      sN: `zatím nerozhodnuto`
    },
    en: {
      title: `🔮 Analytics`,
      text: `Oracoolio uses Google Analytics and Microsoft Clarity to learn how the oracle is used. No advertising cookies, no personal data sold.`,
      more: `More info`,
      deny: `Decline`,
      accept: `Accept`,
      close: `✕ Close`,
      mTitle: `🍪 Privacy & analytics`,
      m1: `Oracoolio measures traffic with Google Analytics 4 (via Google Tag Manager) and Microsoft Clarity (behavior maps and session recordings). We only want to know how the oracle is used — how many people visit, which tools are popular and where people run into trouble.`,
      m2: `We use no advertising cookies or remarketing, and no personal data is sold or shared with third parties. Everything you enter into a reading (date of birth, name, question) stays in your browser only and is never sent to a server.`,
      m3: `Until you consent, no analytics cookies are stored and Microsoft Clarity does not load at all — Google only receives anonymous cookieless signals (Google Consent Mode v2).`,
      m4: `You can change your choice at any time via the 🍪 Privacy link in the page footer. Global opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out add-on</a>.`,
      m5: `Operator: Ember PA · <a href="https://ember-pa.cz/" target="_blank" rel="noopener">ember-pa.cz</a>`,
      st: `Current choice`,
      sG: `accepted`,
      sD: `declined`,
      sN: `not decided yet`
    }
  };

  var bar = null, modal = null, shownLang = null;

  function getSaved(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function decided(){ var s = getSaved(); return s === 'granted' || s === 'denied'; }
  function label(l){
    var t = TX[l === 'en' ? 'en' : 'cs'], s = getSaved();
    return s === 'granted' ? t.sG : (s === 'denied' ? t.sD : t.sN);
  }

  function clearAnalyticsCookies(){
    try{
      var host = location.hostname, parts = host.split('.'),
          root = parts.length > 1 ? '.' + parts.slice(-2).join('.') : host;
      var prefixes = ['_ga', '_gid', '_gat', '_clck', '_clsk', 'CLID', 'ANONCHK', 'MUID', 'SM', 'MR'];
      document.cookie.split(';').forEach(function(c){
        var n = c.split('=')[0].trim();
        for(var i = 0; i < prefixes.length; i++){
          if(n.indexOf(prefixes[i]) === 0){
            var exp = '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
            document.cookie = n + exp;
            document.cookie = n + exp + ';domain=' + host;
            document.cookie = n + exp + ';domain=' + root;
            break;
          }
        }
      });
    }catch(e){}
  }

  function pushConsent(granted){
    window.dataLayer = window.dataLayer || [];
    if(typeof gtag === 'function'){
      gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        functionality_storage: granted ? 'granted' : 'denied'
      });
    }
    window.dataLayer.push({ event: 'consent_update', consent_analytics: granted ? 'granted' : 'denied' });
    if(granted && typeof orcLoadClarity === 'function'){ orcLoadClarity(); }
  }

  function injectCss(){
    if(document.getElementById('orc-consent-style')) return;
    var s = document.createElement('style');
    s.id = 'orc-consent-style'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  function fillBar(){
    var t = TX[curLang()];
    shownLang = curLang();
    bar.innerHTML = `<div class="orc-inner">
  <div class="orc-text"><span class="orc-title">${t.title}</span>${t.text} <a href="#" class="orc-more">${t.more}</a></div>
  <div class="orc-actions">
    <button type="button" class="orc-btn orc-deny">${t.deny}</button>
    <button type="button" class="orc-btn orc-accept">${t.accept}</button>
  </div>
</div>`;
    bar.querySelector('.orc-more').addEventListener('click', function(e){ e.preventDefault(); openModal(); });
    bar.querySelector('.orc-deny').addEventListener('click', function(){ setConsent(false); });
    bar.querySelector('.orc-accept').addEventListener('click', function(){ setConsent(true); });
  }

  function fillModal(){
    var t = TX[curLang()];
    modal.innerHTML = `<div class="orc-box" role="dialog" aria-modal="true">
  <h3>${t.mTitle}</h3>
  <p>${t.m1}</p><p>${t.m2}</p><p>${t.m3}</p><p>${t.m4}</p><p>${t.m5}</p>
  <div class="orc-status">${t.st}: <strong>${label(curLang())}</strong></div>
  <div class="orc-actions">
    <button type="button" class="orc-btn orc-close">${t.close}</button>
    <button type="button" class="orc-btn orc-deny">${t.deny}</button>
    <button type="button" class="orc-btn orc-accept">${t.accept}</button>
  </div>
</div>`;
    modal.querySelector('.orc-close').addEventListener('click', closeModal);
    modal.querySelector('.orc-deny').addEventListener('click', function(){ setConsent(false); });
    modal.querySelector('.orc-accept').addEventListener('click', function(){ setConsent(true); });
  }

  function openBar(){
    injectCss();
    if(!bar){
      bar = document.createElement('div'); bar.id = 'orc-consent-bar'; bar.setAttribute('role', 'region');
      document.body.appendChild(bar);
    }
    fillBar();
    bar.classList.add('orc-on');
  }
  function closeBar(){ if(bar){ bar.classList.remove('orc-on'); } }

  function openModal(){
    injectCss();
    if(!modal){
      modal = document.createElement('div'); modal.id = 'orc-consent-modal';
      modal.addEventListener('click', function(e){ if(e.target === modal){ closeModal(); } });
      document.body.appendChild(modal);
    }
    fillModal();
    modal.classList.add('orc-on');
  }
  function closeModal(){ if(modal){ modal.classList.remove('orc-on'); } }

  function setConsent(granted){
    try{ localStorage.setItem(KEY, granted ? 'granted' : 'denied'); }catch(e){}
    pushConsent(granted);
    if(!granted){ clearAnalyticsCookies(); }
    closeBar(); closeModal();
  }

  // Přepnutí jazyka stránky za otevřeného banneru/modalu → přeložit texty
  document.addEventListener('click', function(){
    setTimeout(function(){
      if(shownLang !== null && shownLang !== curLang()){
        if(bar && bar.classList.contains('orc-on')){ fillBar(); }
        if(modal && modal.classList.contains('orc-on')){ fillModal(); }
        shownLang = curLang();
      }
    }, 0);
  }, true);

  window.oracoolioConsentOpen = openBar;
  window.oracoolioConsentInfo = openModal;
  window.oracoolioConsentDecided = decided;
  window.oracoolioConsentLabel = label;

  function init(){
    if(!decided()){ openBar(); }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
