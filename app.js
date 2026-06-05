// ==========================================
// ORACOOLIO — Navigace (rozcestník)
// Subappy jsou nyní MPA — každá ve vlastní složce
// ==========================================

function showApp(appId) {
    if (appId === 'tarot')    { window.location.href = 'tarot/';    return; }
    if (appId === 'iching')   { window.location.href = 'iching/';   return; }
    if (appId === 'numero')   { window.location.href = 'numero/';   return; }
    if (appId === 'astrolog') { window.location.href = 'astrolog/'; return; }
    if (appId === 'karolky')  { window.location.href = 'karolky/';  return; }
    if (appId === 'dream')    { window.location.href = 'dream/';    return; }
    if (appId === 'solitaire'){ window.location.href = 'karolky/';  return; }
}

function backToDashboard() {
    window.location.href = 'index.html';
}
