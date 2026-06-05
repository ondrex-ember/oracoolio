// ==========================================
// ORACOOLIO — Numero v1.0
// ==========================================

// =========================================================
// LUNÁRNÍ ENGINE (Z tvého kalendáře)
// =========================================================
const CAL_MOON_SYNODIC = 29.53058770576;
const CAL_MOON_EPOCH   = new Date('2000-01-06T18:14:00Z').getTime();
const CAL_MOON_PHASES  = [
  { max: 0.0625, name: 'Novoluní', name_en: 'New Moon', icon: '🌑' },
  { max: 0.1875, name: 'Dorůstající srpek', name_en: 'Waxing Crescent', icon: '🌒' },
  { max: 0.3125, name: 'První čtvrť', name_en: 'First Quarter', icon: '🌓' },
  { max: 0.4375, name: 'Dorůstající měsíc', name_en: 'Waxing Gibbous', icon: '🌔' },
  { max: 0.5625, name: 'Úplněk', name_en: 'Full Moon', icon: '🌕' },
  { max: 0.6875, name: 'Couvající měsíc', name_en: 'Waning Gibbous', icon: '🌖' },
  { max: 0.8125, name: 'Poslední čtvrť', name_en: 'Last Quarter', icon: '🌗' },
  { max: 0.9375, name: 'Ubývající srpek', name_en: 'Waning Crescent', icon: '🌘' },
  { max: 1.0001, name: 'Novoluní', name_en: 'New Moon', icon: '🌑' }
];

function getMoonPhase() {
  const diff  = (new Date().getTime() - CAL_MOON_EPOCH) / 86400000;
  const phase = ((diff % CAL_MOON_SYNODIC) + CAL_MOON_SYNODIC) % CAL_MOON_SYNODIC / CAL_MOON_SYNODIC;
  return CAL_MOON_PHASES.find(x => phase <= x.max);
}

// =========================================================
// 1. DATABÁZE TEXTŮ
// =========================================================
const numerologyTexts = {
    general: { "text_missing": "Text se připravuje.", "text_missing_en": "Text coming soon." },
    birthDay: {
        "1": { title: "Nezávislost", content: "Lidé narození 1. dne v měsíci jsou silní, nezávislí a originální. Chtějí si věci dělat po svém.", title_en: "Independence", content_en: "People born on the 1st are strong, independent and original. They like to do things their own way." },
        "2": { title: "Družnost", content: "Milují společnost a partnerství. Jsou diplomatičtí a empatičtí.", title_en: "Sociability", content_en: "They love company and partnership. They are diplomatic and empathetic." },
        "3": { title: "Společenskost", content: "Talent pro vyjadřování, kreativita a neustálý optimismus.", title_en: "Expressiveness", content_en: "Talent for expression, creativity and constant optimism." },
        "4": { title: "Pracovitost", content: "Praktičtí, houževnatí, staví na pevných základech.", title_en: "Diligence", content_en: "Practical, tenacious, building on solid foundations." },
        "5": { title: "Vnímavost", content: "Potřebují změnu, pohyb a svobodu. Mají rádi dobrodružství.", title_en: "Sensitivity", content_en: "They need change, movement and freedom. They love adventure." },
        "6": { title: "Harmonie", content: "Orientovaní na rodinu, vztahy a krásu kolem sebe.", title_en: "Harmony", content_en: "Oriented toward family, relationships and the beauty around them." },
        "7": { title: "Zkušenost", content: "Potřebují si vše ověřit v praxi. Hluboce myslící a tajemní.", title_en: "Experience", content_en: "They need to verify everything in practice. Deep thinkers and mysterious." },
        "8": { title: "Rovnováha", content: "Silný smysl pro moc, peníze, ale i spravedlnost.", title_en: "Balance", content_en: "A strong sense of power, money, but also justice." },
        "9": { title: "Analýza", content: "Hlubocí myslitelé hledající pravdu, často orientovaní na pomoc lidstvu.", title_en: "Analysis", content_en: "Deep thinkers seeking truth, often oriented toward helping humanity." },
        "10": { title: "Síla", content: "Spojení nezávislosti (1) a obrovského potenciálu. Vůdčí typy.", title_en: "Strength", content_en: "A combination of independence (1) and enormous potential. Leadership types." },
        "11": { title: "Citlivost", content: "Mistrovské číslo. Extrémní intuice a hluboké vnitřní prožívání.", title_en: "Sensitivity", content_en: "Master number. Extreme intuition and deep inner experience." },
        "12": { title: "Všestrannost", content: "Kombinuje vůdcovství a spolupráci do kreativního celku.", title_en: "Versatility", content_en: "Combines leadership and cooperation into a creative whole." },
        "13": { title: "Zranitelnost", content: "Karmické číslo. Často těžší start, vyžaduje se trpělivost a tvrdá práce.", title_en: "Vulnerability", content_en: "Karmic number. Often a harder start, requiring patience and hard work." },
        "14": { title: "Cílevědomost", content: "Karmické číslo svobody. Výzva balancovat mezi zodpovědností a změnami.", title_en: "Purposefulness", content_en: "Karmic number of freedom. The challenge is balancing responsibility with change." },
        "15": { title: "Odvaha", content: "Magnetická osobnost. Spojuje touhu po svobodě s láskou k rodině.", title_en: "Courage", content_en: "Magnetic personality. Combines the desire for freedom with love of family." },
        "16": { title: "Přímočarost", content: "Karmické číslo. Vede k bourání starých struktur a budování nových, pravdivějších.", title_en: "Directness", content_en: "Karmic number. Leads to dismantling old structures and building truer new ones." },
        "17": { title: "Zdatnost", content: "Skvělí v byznysu a organizaci, kombinují nezávislost s moudrostí.", title_en: "Competence", content_en: "Excellent in business and organisation, combining independence with wisdom." },
        "18": { title: "Zodpovědnost", content: "Široký rozhled, často pomáhají ostatním. Mají v sobě bojovníka (Mars).", title_en: "Responsibility", content_en: "Broad outlook, often helping others. They carry a warrior within (Mars)." },
        "19": { title: "Karmická průbojnost", content: "Karmické číslo. Téma dávání a braní, učení se zdravé nezávislosti.", title_en: "Karmic Drive", content_en: "Karmic number. Theme of giving and taking, learning healthy independence." },
        "20": { title: "Intuice", content: "Zesílená citlivost dvojky. Velmi snadno nasávají nálady okolí.", title_en: "Intuition", content_en: "Amplified sensitivity of the two. Very easily absorbs the moods of their surroundings." },
        "21": { title: "Pochopení", content: "Skvělí řečníci a společníci, mají dar slova a komunikace.", title_en: "Understanding", content_en: "Excellent speakers and companions with the gift of words and communication." },
        "22": { title: "Vytrvalost", content: "Mistrovské číslo. Velký potenciál pro budování věcí s celosvětovým dopadem.", title_en: "Perseverance", content_en: "Master number. Great potential for building things with worldwide impact." },
        "23": { title: "Samostatnost", content: "Rychle myslící, svobodomyslní lidé s potřebou vzrušení.", title_en: "Independence", content_en: "Fast-thinking, free-spirited people with a need for excitement." },
        "24": { title: "Přívětivost", content: "Rodinný typ se silným smyslem pro péči a bezpečí blízkých.", title_en: "Kindness", content_en: "Family type with a strong sense of care and security for loved ones." },
        "25": { title: "Nenáročnost", content: "Hledají hluboké pravdy. Mají vynikající intuici a rádi cestují.", title_en: "Simplicity", content_en: "Seekers of deep truths. They have excellent intuition and love to travel." },
        "26": { title: "Průbojnost", content: "Velká fyzická i psychická síla. Tah na branku v kariéře.", title_en: "Drive", content_en: "Great physical and mental strength. Ambitious in career." },
        "27": { title: "Svědomitost", content: "Filantropové, kteří chtějí učit nebo pomáhat. Skrývají velkou moudrost.", title_en: "Conscientiousness", content_en: "Philanthropists who want to teach or help. They conceal great wisdom." },
        "28": { title: "Rozporuplnost", content: "Jemní, ale umí nečekaně vybuchnout. Jsou průkopníky s velkými ideály.", title_en: "Contradictions", content_en: "Gentle, but can explode unexpectedly. Pioneers with great ideals." },
        "29": { title: "Citlivost a vize", title_en: "Sensitivity and Vision", content: "Den 29 nese napětí mistrovské jedenáctky (2+9=11). Obrovská intuice, vnitřní síla a vizionářství jdou ruku v ruce s extrémní citlivostí a sklony k úzkosti. Tito lidé mají přirozený dar pro inspiraci ostatních, ale musí se naučit uzemnit svou přecitlivělost." },
        "30": { title: "Radost a komunikace", title_en: "Joy and Communication", content: "Dynamická trojka posílená nulou získává na hloubce a intenzitě. Výjimeční řečníci, umělci a společníci s vrozeným charismatem. Svět vnímají jako hřiště plné příležitostí a svou radostí dokážou strhnout celé své okolí." },
        "31": { title: "Tvůrčí praktičnost", title_en: "Creative Practicality", content: "Spojení tří (kreativita) a jedné (vůle) dává vznik výjimečně praktickým tvůrcům. Jsou schopni dotáhnout i ty nejodvážnější nápady do reálného světa. Na rozdíl od ostatních trojkařů mají silný smysl pro disciplínu a systém." }
    },
    lifePath: {
        "1": { title: "Nezávislost a vůdcovství", content: "Jsi průkopník. Máš silnou vůli, jsi ambiciózní a rád se spoléháš sám na sebe.", title_en: "Independence and Leadership", content_en: "You are a pioneer. You have strong will, are ambitious and prefer to rely on yourself." },
        "2": { title: "Spolupráce a citlivost", content: "Jsi rozený diplomat. Hledáš harmonii, umíš naslouchat a jsi velmi empatický.", title_en: "Cooperation and Sensitivity", content_en: "You are a born diplomat. You seek harmony, know how to listen and are very empathetic." },
        "3": { title: "Komunikace a kreativita", content: "Jsi společenský a optimistický člověk s talentem pro vyjadřování.", title_en: "Communication and Creativity", content_en: "You are a sociable and optimistic person with a talent for expression." },
        "4": { title: "Stabilita a pracovitost", content: "Jsi praktický a spolehlivý budovatel. Tvojí slabinou může být přílišná konzervativnost.", title_en: "Stability and Diligence", content_en: "You are a practical and reliable builder. Your weakness may be excessive conservatism." },
        "5": { title: "Svoboda a změna", content: "Miluješ dobrodružství a nesnášíš rutinu. Jsi dynamický a adaptabilní.", title_en: "Freedom and Change", content_en: "You love adventure and cannot stand routine. You are dynamic and adaptable." },
        "6": { title: "Rodina a harmonie", content: "Jsi obětavý a ochranitelský. Rodina je pro tebe vším, jsi pečující duše.", title_en: "Family and Harmony", content_en: "You are selfless and protective. Family is everything to you — you are a nurturing soul." },
        "7": { title: "Duchovno a analýza", content: "Dáváš přednost duševní práci. Hledáš hlubší smysl života. Potřebuješ svůj prostor.", title_en: "Spirituality and Analysis", content_en: "You prefer intellectual work. You seek a deeper meaning in life. You need your own space." },
        "8": { title: "Úspěch a rovnováha", content: "Máš silný tah na branku ve světě financí a kariéry. Jsi výborný organizátor.", title_en: "Success and Balance", content_en: "You have strong drive in the world of finance and career. You are an excellent organiser." },
        "9": { title: "Altruismus a humanismus", content: "Máš hluboké sociální cítění. Jsi idealista, který chce pomáhat světu.", title_en: "Altruism and Humanism", content_en: "You have deep social feeling. You are an idealist who wants to help the world." },
        "11": { title: "Mistrovská intuice (11)", title_en: "Master Intuition (11)", content: "Máš obrovský duchovní potenciál a intuici. Můžeš být inspirací, ale čelíš vnitřnímu napětí.", content_en: "You have enormous spiritual potential and intuition. You can be an inspiration, but face inner tension." },
        "22": { title: "Mistrovský budovatel (22)", title_en: "Master Builder (22)", content: "Dokážeš proměnit i ty nejodvážnější sny v realitu. Máš obrovskou sílu.", content_en: "You can turn even the boldest dreams into reality. You have enormous strength." },
        "33": { title: "Mistrovský učitel (33)", title_en: "Master Teacher (33)", content: "Nejvyšší duchovní vibrace. Naprostá obětavost a služba lidstvu.", content_en: "The highest spiritual vibration. Absolute selflessness and service to humanity." }
    },
    personalYear: {
        "1": { title: "Nové začátky", content: "Ideální rok pro start nových projektů. Zasaď semínka své budoucnosti.", title_en: "New Beginnings", content_en: "The ideal year to start new projects. Plant the seeds of your future." },
        "2": { title: "Spolupráce a trpělivost", content: "Rok vhodný pro budování vztahů a naslouchání. Věci mohou jít pomaleji.", title_en: "Cooperation and Patience", content_en: "A year suited to building relationships and listening. Things may move more slowly." },
        "3": { title: "Kreativita a radost", content: "Společenský rok plný zábavy, sebevyjádření a nových kontaktů.", title_en: "Creativity and Joy", content_en: "A social year full of fun, self-expression and new contacts." },
        "4": { title: "Práce a budování", content: "Rok tvrdé dřiny, vytváření systémů a upevňování základů.", title_en: "Work and Building", content_en: "A year of hard work, creating systems and strengthening foundations." },
        "5": { title: "Změny a svoboda", content: "Nečekané události, cestování, bourání starých struktur. Očekávej nečekané.", title_en: "Change and Freedom", content_en: "Unexpected events, travel, dismantling old structures. Expect the unexpected." },
        "6": { title: "Rodina a domov", title_en: "Family and Home", content: "Pozornost se stáčí na domov, rodinu, svatby nebo péči o blízké.", title_en: "Family and Home", content_en: "Attention turns to home, family, weddings or caring for loved ones." },
        "7": { title: "Duchovno a samota", content: "Klidný rok pro sebereflexi, studium a vnitřní očistu. Není vhodný pro tlak na byznys.", title_en: "Spirituality and Solitude", content_en: "A quiet year for self-reflection, study and inner cleansing. Not suitable for pushing business." },
        "8": { title: "Peníze a kariéra", content: "Karmická sklizeň. Rok úspěchu, povýšení a finančního růstu.", title_en: "Money and Career", content_en: "Karmic harvest. A year of success, promotion and financial growth." },
        "9": { title: "Zakončení a úklid", content: "Uzavírání kapitol, odpouštění a příprava na nový devítiletý cyklus.", title_en: "Endings and Release", content_en: "Closing chapters, forgiveness and preparation for a new nine-year cycle." },
        "11": { title: "Duchovní probuzení", title_en: "Spiritual Awakening", content: "Výjimečný rok mimořádně silné intuice a vnitřního růstu. Přicházejí synchronicity, neočekávaná setkání a momenty hlubokého poznání. Není to rok pro povrchní aktivity — tvůj vnitřní hlas mluví nahlas a ty mu musíš naslouchat. Stinnou stránkou je nervové napětí a přecitlivělost. Pečuj o své duševní zdraví a neboj se zpomalit.", content_en: "An exceptional year of extraordinarily strong intuition and inner growth. Synchronicities, unexpected meetings and moments of deep insight arrive. This is not a year for superficial activities — your inner voice speaks loudly and you must listen. The shadow side is nervous tension and hypersensitivity. Care for your mental health and do not be afraid to slow down." },
        "22": { title: "Rok velkého budování", title_en: "Year of Great Building", content: "Toto je jeden z nejvýznamnějších roků v celém tvém devítiletém cyklu. Energie mistrovské dvaadvacítky ti dává výjimečnou příležitost realizovat velké sny a vybudovat něco skutečně trvalého. Nápady, které měly doposud jen podobu vizí, nyní mohou dostat konkrétní podobu. Vyžaduje to ale disciplínu, jasný plán a ochotu pracovat tvrdě. Nepromarni tuto vzácnou vlnu.", content_en: "This is one of the most significant years in your entire nine-year cycle. The energy of the master twenty-two gives you an exceptional opportunity to realise great dreams and build something truly lasting. Ideas that have so far existed only as visions can now take concrete form. But it requires discipline, a clear plan and the willingness to work hard. Do not waste this rare wave." }
    },
    personalDay: {
        "1": { title: "Akce a start", title_en: "Action and Start", content: "Dnes je den pro nové začátky. Převezmi iniciativu a udělej důležitá rozhodnutí. Nečekej na ostatní.", content_en: "Today is the day for new beginnings. Take the initiative and make important decisions. Do not wait for others." },
        "2": { title: "Spolupráce a klid", title_en: "Cooperation and Calm", content: "Energie dneška přeje diplomacii. Nespěchej, naslouchej druhým a buď opatrný na své emoce.", content_en: "Today's energy favours diplomacy. Do not rush, listen to others and be careful with your emotions." },
        "3": { title: "Radost a komunikace", title_en: "Joy and Communication", content: "Den ideální pro zábavu, setkávání s přáteli a kreativní tvorbu. Běž ven a usmívej se.", content_en: "The day is ideal for fun, meeting friends and creative work. Go out and smile." },
        "4": { title: "Povinnosti a řád", title_en: "Duties and Order", content: "Dnes se nic neudělá samo. Je to den tvrdé práce, úklidu a dotahování restů. Drž se rutiny.", content_en: "Nothing will do itself today. It is a day of hard work, tidying and finishing what is overdue. Stick to routine." },
        "5": { title: "Pohyb a změna", title_en: "Movement and Change", content: "Očekávej neočekávané! Dnes naruší tvé plány překvapení. Buď flexibilní a zkus něco úplně nového.", content_en: "Expect the unexpected! Today surprises will disrupt your plans. Be flexible and try something completely new." },
        "6": { title: "Rodina a péče", title_en: "Family and Care", content: "Těžištěm dneška je domov a tvoji blízcí. Urovnej spory, uvař dobrou večeři a odpočívej.", content_en: "The focus of today is home and your loved ones. Resolve disputes, cook a good dinner and rest." },
        "7": { title: "Přemýšlení a samota", title_en: "Thinking and Solitude", content: "Zpomal. Dnes není dobrý den na těžká byznys rozhodnutí. Zůstaň chvíli sám a poslouchej svou intuici.", content_en: "Slow down. Today is not a good day for heavy business decisions. Be alone for a while and listen to your intuition." },
        "8": { title: "Peníze a moc", title_en: "Money and Power", content: "Den pro velké obchody. Dnes máš tah na branku, řeš úřední věci, finance a nenech se odradit.", content_en: "A day for big deals. Today you have drive — handle official matters, finances and do not let yourself be deterred." },
        "9": { title: "Dokončování a karma", title_en: "Completion and Karma", content: "Zavři za sebou staré dveře. Vyhoď nepotřebné věci, odpusť staré křivdy. Nic nového dnes nezačínej!", content_en: "Close old doors behind you. Throw out unneeded things, forgive old grievances. Start nothing new today!" }
    },
    nameSoul: {
        "1": { title: "Touha po vedení", title_en: "Desire for Leadership", content: "Vnitřně toužíš být respektován jako samostatná vůdčí osobnost.", content_en: "Inwardly you long to be respected as an independent, leading personality." },
        "2": { title: "Touha po spojení", title_en: "Desire for Connection", content: "Hluboko uvnitř toužíš po dokonalé a harmonické lásce a partnerství.", content_en: "Deep inside you long for perfect and harmonious love and partnership." },
        "3": { title: "Touha po radosti", title_en: "Desire for Joy", content: "Chceš se bavit, tvořit a šířit optimismus do svého okolí.", content_en: "You want to have fun, create and spread optimism into your surroundings." },
        "4": { title: "Touha po jistotě", title_en: "Desire for Security", content: "Tvým nejhlubším přáním je mít pevný bod, řád a materiální bezpečí.", content_en: "Your deepest wish is to have a firm anchor, order and material safety." },
        "5": { title: "Touha po volnosti", title_en: "Desire for Freedom", content: "Uvnitř tvé duše je divoký nomád, který nechce být ničím svazován.", content_en: "Inside your soul is a wild nomad who does not want to be bound by anything." },
        "6": { title: "Touha po rodině", title_en: "Desire for Family", content: "Tvým snem je vytvořit láskyplný a krásný domov pro tvé blízké.", content_en: "Your dream is to create a loving and beautiful home for your loved ones." },
        "7": { title: "Touha po pravdě", title_en: "Desire for Truth", content: "Chceš poznat tajemství vesmíru a nalézt klid daleko od hlučného davu.", content_en: "You want to know the secrets of the universe and find peace far from the noisy crowd." },
        "8": { title: "Touha po moci", title_en: "Desire for Power", content: "Hluboko uvnitř chceš budovat impérium a mít kontrolu nad svým osudem.", content_en: "Deep inside you want to build an empire and have control over your destiny." },
        "9": { title: "Touha po službě", title_en: "Desire for Service", content: "Tvá duše touží po spravedlnosti a nápravě křivd ve světě.", content_en: "Your soul longs for justice and the righting of wrongs in the world." },
        "11": { title: "Touha po osvícení (11)", title_en: "Desire for Enlightenment (11)", content: "Tvá duše je stará a velmi citlivá. Hluboko uvnitř toužíš přinášet lidem světlo, inspiraci a duchovní poznání. Nejde ti o moc, ale o pravdu.", content_en: "Your soul is old and very sensitive. Deep inside you long to bring people light, inspiration and spiritual knowledge. It is not power you seek, but truth." },
        "22": { title: "Touha po tvoření (22)", title_en: "Desire for Creation (22)", content: "V nitru jsi vizionář a mistr budovatel. Tvá duše nechce jen snít, ale touží zanechat po sobě ve světě hmatatelný, obrovský odkaz pro další generace.", content_en: "At heart you are a visionary and master builder. Your soul does not merely want to dream — it longs to leave a tangible, enormous legacy for future generations." }
    },
    namePersonality: {
        "1": { title: "Vnímán jako: Vůdce", title_en: "Perceived as: Leader", content: "Navenek působíš velmi sebejistě, nezávisle a občas možná až příliš dominantně.", content_en: "You come across as very self-confident, independent and perhaps at times overly dominant." },
        "2": { title: "Vnímán jako: Přítel", title_en: "Perceived as: Friend", content: "Lidé tě na první pohled vnímají jako klidného, přátelského a nekonfliktního člověka.", content_en: "People see you at first glance as calm, friendly and non-confrontational." },
        "3": { title: "Vnímán jako: Bavič", title_en: "Perceived as: Entertainer", content: "Působíš šarmantně a vtipně, všude kam přijdeš, přinášíš s sebou dobrou náladu.", content_en: "You come across as charming and witty, bringing good cheer wherever you go." },
        "4": { title: "Vnímán jako: Dříč", title_en: "Perceived as: Hard Worker", content: "Okolí tě vidí jako praktického, solidního a pracovitého člověka, na kterého je spolehnutí.", content_en: "Those around you see you as a practical, solid and diligent person they can rely on." },
        "5": { title: "Vnímán jako: Rebel", title_en: "Perceived as: Rebel", content: "Vyzařuje z tebe dynamika, sex-appeal a nevyzpytatelnost.", content_en: "You radiate dynamism, sex appeal and unpredictability." },
        "6": { title: "Vnímán jako: Pečovatel", title_en: "Perceived as: Carer", content: "Vypadáš jako zodpovědný člověk s dobrým vkusem, u kterého každý najde radu a útěchu.", content_en: "You appear to be a responsible person with good taste whom everyone can turn to for advice and comfort." },
        "7": { title: "Vnímán jako: Myslitel", title_en: "Perceived as: Thinker", content: "Působíš trochu odtažitě, tajemně a velmi inteligentně. Lidé k tobě cítí respekt.", content_en: "You come across as slightly aloof, mysterious and very intelligent. People feel respect toward you." },
        "8": { title: "Vnímán jako: Šéf", title_en: "Perceived as: Boss", content: "Vyzařuješ autoritu, sebevědomí a materiální úspěch. Působíš silně.", content_en: "You radiate authority, self-confidence and material success. You make a strong impression." },
        "9": { title: "Vnímán jako: Filantrop", title_en: "Perceived as: Philanthropist", content: "Lidé v tobě vidí chápavého, štědrého a velkorysého člověka se širokým rozhledem.", content_en: "People see in you an understanding, generous and magnanimous person with a broad perspective." },
        "11": { title: "Vnímán jako: Vizionář (11)", title_en: "Perceived as: Visionary (11)", content: "Lidé z tebe cítí obrovské charisma a jakési nadpozemské vyzařování. Působíš jako inspirativní, vysoce inteligentní, ale občas trochu neuchopitelný a přecitlivělý člověk.", content_en: "People sense enormous charisma and an almost otherworldly radiance about you. You come across as inspirational, highly intelligent, but at times somewhat elusive and hypersensitive." },
        "22": { title: "Vnímán jako: Kapacita (22)", title_en: "Perceived as: Authority (22)", content: "Na první pohled působíš jako absolutní expert a nezpochybnitelná autorita. Okolí z tebe cítí sílu a věří, že dokážeš vyřešit i ty nejtěžší úkoly.", content_en: "At first glance you come across as an absolute expert and unquestionable authority. Those around you sense your strength and believe you can solve even the most difficult tasks." }
    },
    nameDestiny: {
        "1": { title: "Průbojnost a vize", title_en: "Drive and Vision", content: "Tvé jméno tě předurčuje k tomu být lídrem a stát si za svým.", content_en: "Your name predestines you to be a leader and stand your ground." },
        "2": { title: "Diplomacie a takt", title_en: "Diplomacy and Tact", content: "Vibrace jména tě vede k hledání kompromisů a propojování lidí.", content_en: "The vibration of your name leads you to seek compromise and connect people." },
        "3": { title: "Kreativita a šarm", title_en: "Creativity and Charm", content: "Tvé jméno přitahuje pozornost a nese vibraci radosti.", content_en: "Your name attracts attention and carries the vibration of joy." },
        "4": { title: "Řád a vytrvalost", title_en: "Order and Perseverance", content: "Jméno rezonuje s pevnou půdou pod nohama a stabilitou.", content_en: "Your name resonates with solid ground and stability." },
        "5": { title: "Pohyb a nezávislost", title_en: "Movement and Independence", content: "Vibrace přináší do života cestování a touhu zkoušet nové věci.", content_en: "The vibration brings travel and a desire to try new things into your life." },
        "6": { title: "Láska a péče", title_en: "Love and Care", title_en: "Love and Care", content: "Tvé jméno nese obrovský ochranitelský potenciál a bezpečí.", content_en: "Your name carries enormous protective potential and safety." },
        "7": { title: "Mystická hloubka", title_en: "Mystical Depth", content: "Jméno tě obklopuje aurou tajemství a vede k analytickému myšlení.", content_en: "Your name surrounds you with an aura of mystery and leads you toward analytical thinking." },
        "8": { title: "Síla a hojnost", title_en: "Strength and Abundance", content: "Tvé jméno je jako magnet na úspěch. Vyzařuje autoritu.", content_en: "Your name is like a magnet for success. It radiates authority." },
        "9": { title: "Velkorysost a ideály", title_en: "Generosity and Ideals", content: "Vibrace tvého jména přesahuje tvé vlastní ego. Jsi rádcem.", content_en: "The vibration of your name transcends your own ego. You are a counsellor." },
        "11": { title: "Inspirace (11)", title_en: "Inspiration (11)", content: "Předurčuje tě k tomu být duchovním majákem pro ostatní.", content_en: "It predestines you to be a spiritual lighthouse for others." },
        "22": { title: "Velké dílo (22)", title_en: "Great Work (22)", content: "Máš jméno člověka, který po sobě zanechá hmatatelný odkaz.", content_en: "You have the name of a person who will leave a tangible legacy." }
    },
    maturity: {
        "1": { title: "Vlastní cesta", title_en: "Your Own Path", content: "Ve zralém věku objevíš svou skutečnou nezávislost a postavíš se plně na vlastní nohy.", content_en: "In maturity you will discover your true independence and stand fully on your own feet." },
        "2": { title: "Harmonie", title_en: "Harmony", content: "Tvá moudrost tě povede k vytváření hlubokých spojení a harmonie s ostatními.", content_en: "Your wisdom will lead you to create deep connections and harmony with others." },
        "3": { title: "Radost", title_en: "Joy", content: "Cílem tvého zrání je najít lehkost bytí a sdílet radost skrze tvořivost.", content_en: "The goal of your maturity is to find the lightness of being and share joy through creativity." },
        "4": { title: "Budovatel", title_en: "Builder", content: "Tvým cílem je vybudovat trvalé hodnoty, ať už v rodině, nebo v práci.", content_en: "Your goal is to build lasting values, whether in family or work." },
        "5": { title: "Svoboda", title_en: "Freedom", content: "Ve zralém věku se osvobodíš od pout a tvůj život bude plný cestování a změn.", content_en: "In maturity you will free yourself from bonds and your life will be full of travel and change." },
        "6": { title: "Láska a péče", content: "Tvým životním naplněním bude péče o druhé a vytvoření bezpečného domova.", content_en: "Your life's fulfilment will be caring for others and creating a safe home." },
        "7": { title: "Moudrost", title_en: "Wisdom", content: "Dospěješ k hlubokému duchovnímu pochopení a staneš se pro mnohé moudrým rádcem.", content_en: "You will arrive at deep spiritual understanding and become a wise counsellor for many." },
        "8": { title: "Hojnost", title_en: "Abundance", content: "Ve zralém věku tě čeká sklizeň plodů tvé práce, moc a materiální stabilita.", content_en: "In maturity a harvest of the fruits of your work, power and material stability await you." },
        "9": { title: "Odpouštění", title_en: "Forgiveness", content: "Dosáhneš nadhledu a tvým cílem bude pomáhat světu s hlubokou tolerancí.", content_en: "You will achieve perspective and your goal will be to help the world with deep tolerance." },
        "11": { title: "Inspirátor (11)", title_en: "Inspirator (11)", content: "Staneš se duchovním světlem pro své okolí s mimořádně probuzenou intuicí.", content_en: "You will become a spiritual light for those around you with extraordinarily awakened intuition." },
        "22": { title: "Mistrovské dílo (22)", title_en: "Masterpiece (22)", content: "Ve druhé půli života vytvoříš něco velkolepého, co tě daleko přežije.", content_en: "In the second half of life you will create something magnificent that will long outlive you." }
    },
    karmicLessons: {
        "1": { title: "Lekce 1: Průbojnost a ego", title_en: "Lesson 1: Drive and Ego", content: "V tomto životě se učíš sebevědomí. Musíš se naučit říkat zdravé NE, nestát neustále v koutě a postavit se pevně za svými vlastními názory.", content_en: "In this life you are learning self-confidence. You must learn to say a healthy NO, to stop standing in the corner, and to stand firmly behind your own opinions." },
        "2": { title: "Lekce 2: Takt a diplomacie", title_en: "Lesson 2: Tact and Diplomacy", content: "Tvá duše se učí diplomacii a trpělivosti. Tvým úkolem je naučit se naslouchat druhým bez okamžitého posuzování a vytvářet kolem sebe kompromis místo hádek.", content_en: "Your soul is learning diplomacy and patience. Your task is to learn to listen to others without immediate judgement and to create compromise around you instead of arguments." },
        "3": { title: "Lekce 3: Sebevyjádření a radost", title_en: "Lesson 3: Self-expression and Joy", content: "Tvou velkou lekcí je překonat plachost a vnitřní cenzuru. Učíš se nebrat život tak smrtelně vážně, uvolnit svou kreativitu a dovolit si být občas spontánní a hravý.", content_en: "Your great lesson is to overcome shyness and inner censorship. You are learning not to take life so deadly seriously, to release your creativity and to allow yourself to be occasionally spontaneous and playful." },
        "4": { title: "Lekce 4: Řád a systém", title_en: "Lesson 4: Order and System", content: "Musíš se naučit osobní disciplíně a dotahování rozdělaných projektů do konce. Bez nalezení vnitřního řádu tě čeká v praktickém životě a financích chaos.", content_en: "You must learn personal discipline and seeing unfinished projects through to completion. Without finding inner order, chaos awaits you in practical life and finances." },
        "5": { title: "Lekce 5: Změna a adaptabilita", title_en: "Lesson 5: Change and Adaptability", content: "Tvou lekcí je flexibilita. Učíš se nebát se zdravě zariskovat a opouštět staré nefunkční jistoty. Svět je plný změn a ty se jim nesmíš bránit zuby nehty.", content_en: "Your lesson is flexibility. You are learning not to be afraid to take healthy risks and to leave behind old, non-functioning certainties. The world is full of changes and you must not fight them tooth and nail." },
        "6": { title: "Lekce 6: Zodpovědnost a vztahy", title_en: "Lesson 6: Responsibility and Relationships", content: "Tvojí životní zkouškou jsou rodinné a partnerské vztahy. Učíš se nevyhýbat citovým závazkům vůči svým nejbližším a přijmout odpovědnost za lidi, kteří tě milují.", content_en: "Your life test is family and partnership relationships. You are learning not to avoid emotional commitments to those closest to you and to accept responsibility for the people who love you." },
        "7": { title: "Lekce 7: Víra a hloubka", title_en: "Lesson 7: Faith and Depth", content: "Tvá duše se učí naslouchat svému vnitřnímu hlasu. Tvým úkolem je přestat se spoléhat jen na čistou logiku a najít hlubší, duchovní hodnoty přesahující materiální svět.", content_en: "Your soul is learning to listen to its inner voice. Your task is to stop relying only on pure logic and to find deeper, spiritual values that transcend the material world." },
        "8": { title: "Lekce 8: Peníze a moc", title_en: "Lesson 8: Money and Power", content: "Musíš najít zdravý vztah k materiálním hodnotám. Naučit se peníze nejen vydělat, ale také se jimi nenechat zotročit. Učíš se balancovat mezi tvrdým byznysem a laskavostí.", content_en: "You must find a healthy relationship with material values. Learn not only to earn money, but also not to be enslaved by it. You are learning to balance between hard business and kindness." },
        "9": { title: "Lekce 9: Soucit a odpuštění", title_en: "Lesson 9: Compassion and Forgiveness", content: "Tvá nejtěžší lekce spočívá v naučení se bezpodmínečné lásce. Musíš se zbavit předsudků, naučit se odpouštět staré křivdy a otevřít srdce toleranci vůči celému světu.", content_en: "Your hardest lesson lies in learning unconditional love. You must rid yourself of prejudices, learn to forgive old grievances and open your heart to tolerance toward the whole world." }
    },
    synastry: {
        "1": { title: "Dynamický vztah plný akce", title_en: "Dynamic Partnership Full of Action", content: "Váš vztah je nabitý obrovskou dynamikou a neustálou energií. Jste jako dva silní vůdci, kteří společně dokážou prorazit jakoukoliv životní překážku a dosáhnout velkých cílů. Máte společný tah na branku. Největší výzvou pro toto spojení je ale neustálý skrytý boj o moc a dominanci. Oba máte silné ego. Musíte se naučit dělat kompromisy, nebrat odlišný názor partnera jako osobní útok a umět občas ustoupit.", content_en: "Your relationship is charged with enormous dynamism and constant energy. You are like two strong leaders who together can break through any obstacle in life and achieve great goals. You share a drive for success. The greatest challenge for this union, however, is the constant hidden struggle for power and dominance. Both of you have strong egos. You must learn to compromise, not take your partner's differing opinion as a personal attack, and be able to occasionally yield." },
        "2": { title: "Spřízněné duše a hluboká empatie", title_en: "Kindred Souls and Deep Empathy", content: "Tohle je klasické spojení dvou spřízněných duší. Váš vztah je založený na neuvěřitelné empatii, citlivosti a vzájemném porozumění – velmi často víte přesně, co si ten druhý myslí nebo cítí, aniž by musel padnout jediné slovo. Tvoříte pro sebe bezpečný a klidný přístav. Na co si ale musíte dát velký pozor, je přílišná citová závislost jednoho na druhém a sklony k přecitlivělosti, kdy i neškodnou poznámku můžete nafouknout do velkého problému.", content_en: "This is the classic union of two kindred souls. Your relationship is built on incredible empathy, sensitivity and mutual understanding — very often you know exactly what the other is thinking or feeling without a single word being spoken. You create a safe and calm harbour for each other. What you must be very careful about, however, is excessive emotional dependence on each other and tendencies toward hypersensitivity, where even an innocent remark can be blown into a major problem." },
        "3": { title: "Radostný a inspirativní svazek", title_en: "Joyful and Inspiring Partnership", content: "Nudit se spolu rozhodně nebudete! Váš svazek je plný smíchu, nekonečných rozhovorů, společenských událostí a touhy cestovat. Jeden druhého neustále myšlenkově inspirujete a probouzíte v sobě obrovskou kreativitu. Jste skvělí parťáci. Nevýhodou tohoto vztahu je ale občasná absence pevné půdy pod nohama. Můžete mít problém s udržením disciplíny (ať už jde o finance nebo plnění povinností) a v těžkých krizích vám může chybět praktická uzemněnost.", content_en: "You will definitely not be bored together! Your union is full of laughter, endless conversations, social events and a desire to travel. You constantly inspire each other intellectually and awaken enormous creativity in each other. You are great partners. The disadvantage of this relationship, however, is an occasional absence of solid ground beneath your feet. You may have trouble maintaining discipline (whether with finances or fulfilling obligations) and in serious crises you may lack practical groundedness." },
        "4": { title: "Pevný hrad a absolutní stabilita", title_en: "Solid Fortress and Absolute Stability", content: "Společně tvoříte naprosto nedobytný hrad. Váš vztah je od počátku postaven na absolutní důvěře, loajalitě, stabilitě a společném budování velmi pevných životních základů. Jste pro sebe tou největší možnou oporou v dobách, kdy se nedaří. Výzvou tohoto pevného spojení je ovšem riziko, že váš život časem sklouzne do ubíjející šedé rutiny a seznamu každodenních povinností. Nesmíte zapomínat do vztahu cíleně vnášet spontánnost a romantiku.", content_en: "Together you form an absolutely impregnable fortress. Your relationship has from the beginning been built on absolute trust, loyalty, stability and the joint building of very solid life foundations. You are each other's greatest possible support in times of difficulty. The challenge of this solid union, however, is the risk that over time your life may slide into deadening grey routine and a list of daily obligations. You must not forget to deliberately bring spontaneity and romance into the relationship." },
        "5": { title: "Dobrodružství a nespoutaná vášeň", title_en: "Adventure and Unbridled Passion", content: "Připravte se na jízdu na horské dráze. Váš vztah je plný vášně, dobrodružství, neustálých změn a nečekaných zvratů. Stereotyp a rutina jsou pro vás sprostá slova, k životu potřebujete neustále nové a silné podněty. Toto nespoutané spojení je nesmírně vzrušující, ale vyžaduje od obou stran obrovskou dávku tolerance. Musíte si vzájemně ponechat dostatek osobní svobody, jinak hrozí dramatické výbuchy žárlivosti a pocit udušení.", content_en: "Prepare for a roller coaster ride. Your relationship is full of passion, adventure, constant change and unexpected turns. Monotony and routine are dirty words for you — you need constant new and powerful stimuli to feel alive. This unbridled union is enormously exciting, but requires a great deal of tolerance from both sides. You must allow each other sufficient personal freedom, otherwise dramatic explosions of jealousy and a feeling of suffocation threaten." },
        "6": { title: "Teplo domova a vzájemná péče", title_en: "Warmth of Home and Mutual Care", content: "Toto spojení představuje archetyp ideální rodiny. Spojuje vás hluboká, pečující láska a silná touha vytvořit maximálně harmonický a krásný domov. Jeden pro druhého byste dýchali a jste ochotni se pro rodinu a partnera plně obětovat. Tvoříte idylu. Skrytým nebezpečím tohoto úzce propojeného vztahu je ale 'ponorková nemoc' a tendence se navzájem dusit přehnanou péčí a kontrolou. Učte se občas nechat partnerovi prostor volně se nadechnout.", content_en: "This union represents the archetype of the ideal family. You are united by deep, nurturing love and a strong desire to create the most harmonious and beautiful home possible. You would breathe for each other and are willing to fully sacrifice yourselves for the family and partner. You create an idyll. The hidden danger of this closely intertwined relationship, however, is 'cabin fever' and a tendency to suffocate each other with excessive care and control. Learn to occasionally give your partner space to breathe freely." },
        "7": { title: "Duchovní pouto a intelektuální souznění", title_en: "Spiritual Bond and Intellectual Harmony", content: "Váš vztah má hluboký filozofický a duchovní přesah. Spíše než o povrchní zábavu a večírky vám jde o společné hledání smyslu života a pravdy. Často spolu dokážete vést dlouhé a obohacující intelektuální debaty. Jste zkrátka dvě silné a nezávislé duše, které se rozhodly jít kus cesty spolu. Největší výzvou pro vás bude občasná citová odtažitost a uzavřenost do vlastního světa. Nezapomínejte dávat své city najevo i fyzicky a teple.", content_en: "Your relationship has deep philosophical and spiritual dimensions. Rather than superficial entertainment and parties, you are about jointly seeking the meaning of life and truth. You are often capable of long and enriching intellectual debates together. You are simply two strong and independent souls who have decided to walk part of the journey together. The greatest challenge for you will be occasional emotional aloofness and withdrawal into your own world. Do not forget to express your feelings also physically and warmly." },
        "8": { title: "Mocenský pár s tahem na branku", title_en: "Power Couple with Drive", content: "Tvoříte takzvaný 'Mocenský pár' (Power couple). Dohromady máte naprosto ohromující potenciál pro budování společného byznysu, dosahování vysokých kariérních cílů a získávání materiální hojnosti. Vaše spojená, cílevědomá energie přitahuje úspěch jako magnet. Zásadním rizikem ale je, že můžete po čase začít brát váš vztah spíše jako dobře fungující firmu a zapomenete na obyčejnou lásku a něhu. Práce by nikdy neměla stát nad vašimi společnými city." },
        "9": { title: "Ideální spojení plné altruismu", title_en: "Ideal Union Full of Altruism", content: "Spojení dvou velkých idealistů. Váš vztah je založen na obrovské, dospělé toleranci, skutečném hlubokém přátelství a ochotě si nezištně pomáhat. Velmi často se společně podílíte na pomoci druhým lidem, rodině, nebo věnujete svou spojenou energii nějakým vyšším cílům. Výzvou je pro vás udržet si zdravé hranice, abyste při záchraně celého světa kolem vás nezapomněli zachraňovat, opečovávat a hýčkat také sami sebe a svůj vlastní vztah." },
        "11": { title: "Duchovní zrcadlo", title_en: "Spiritual Mirror", content: "Toto je jedno z nejvzácnějších a nejintenzivnějších spojení vůbec — nesete mezi sebou vibraci mistrovské jedenáctky. Jeden druhého fungujete jako dokonalé zrcadlo: vidíte v partnerovi jak to nejlepší ze sebe, tak i to, na čem musíte ještě pracovat. Vztah je nabitý intuitivní rezonancí — velmi často víte, co si partner myslí nebo cítí dřív, než to vůbec řekne. Toto pouto má obrovský duchovní a transformační potenciál. Stinnou stránkou je ale přecitlivělost a emoční přetížení — obě strany musí vědomě pracovat na tom, aby vztah nebyl pouhou bouří vzájemných projekcí a nerealistických očekávání." },
        "22": { title: "Architekti společného snu", title_en: "Architects of a Shared Dream", content: "Vibrace dvacet dvojky ve vašem vztahu znamená jediné: máte dohromady potenciál vybudovat něco skutečně trvalého a velkého — ať už jde o rodinu, firmu, nebo společné dílo, které přežije vás oba. Toto je spojení dvou mistrů budovatelů. Vaše energie je ohromující a okolí to cítí — jste pár, který inspiruje. Zásadní výzvou je ale enormní tlak, který na sebe vzájemně kladete. Obě strany mají vysoké nároky — na sebe i na partnera. Musíte se vědomě učit zastavit, odpočinout si a vychutnat si cestu samotnou, nejen výsledek." }
    },
    pinnacles: {
        "1": { title: "Nezávislost a akce", title_en: "Independence and Action", content: "Doba učení se samostatnosti, prosazení vlastního ega a odvahy.", content_en: "A time of learning self-sufficiency, asserting your own ego and developing courage." },
        "2": { title: "Spolupráce a vztahy", title_en: "Cooperation and Relationships", content: "Fáze zaměřená na vztahy, diplomacii a budování harmonie.", content_en: "A phase focused on relationships, diplomacy and building harmony." },
        "3": { title: "Kreativita a rozvoj", title_en: "Creativity and Development", content: "Období sociálních kontaktů, studia a tvůrčího vyjádření.", content_en: "A period of social contacts, study and creative expression." },
        "4": { title: "Budování a práce", title_en: "Building and Work", content: "Tvrdá práce a vytváření pevných základů pro budoucnost.", content_en: "Hard work and creating solid foundations for the future." },
        "5": { title: "Změna a svoboda", title_en: "Change and Freedom", content: "Fáze nečekaných zvratů, cestování a osobní svobody.", content_en: "A phase of unexpected turns, travel and personal freedom." },
        "6": { title: "Rodina a domov", content: "Zaměření na domov, rodinu a komunitu. Péče o nejbližší.", content_en: "Focus on home, family and community. Caring for those closest to you." },
        "7": { title: "Zastavení a duchovno", title_en: "Stillness and Spirituality", content: "Fáze hledání vnitřní pravdy, studia a izolace.", content_en: "A phase of seeking inner truth, study and isolation." },
        "8": { title: "Sklizeň a finance", title_en: "Harvest and Finance", content: "Čas postoupit v kariéře a převzít moc. Finanční stabilita.", content_en: "Time to advance in career and take on power. Financial stability." },
        "9": { title: "Završení cyklu", title_en: "Completion of a Cycle", content: "Konec jednoho velkého cyklu. Doba loučení a přípravy na nové věci.", content_en: "The end of one great cycle. A time of farewell and preparation for new things." },
        "11": { title: "Duchovní rozvoj (11)", title_en: "Spiritual Development (11)", content: "Silné období pro osobní růst. Může přinést slávu nebo nervové vypětí.", content_en: "A powerful period for personal growth. May bring fame or nervous strain." },
        "22": { title: "Mistrovství (22)", title_en: "Mastery (22)", content: "Období, kdy můžeš vybudovat projekty s obrovským dopadem.", content_en: "A period in which you can build projects with enormous impact." }
    },
    gridLines: {
        "full_159": { title: "Rovina odhodlání (1-5-9)", title_en: "Line of Determination (1-5-9)", content: "Máš vrozenou podnikavost a aktivitu. Jsi houževnatý.", content_en: "You have an innate entrepreneurial drive and activity. You are tenacious." },
        "full_357": { title: "Rovina pochopení (3-5-7)", title_en: "Line of Understanding (3-5-7)", content: "Vyznačuješ se obrovskou empatií a myšlenkovou bystrostí.", content_en: "You are characterised by enormous empathy and intellectual sharpness." },
        "full_147": { title: "Rovina praktičnosti (1-4-7)", title_en: "Line of Practicality (1-4-7)", content: "Mimořádná zručnost. Stojíš pevně nohama na zemi.", content_en: "Exceptional skill. You stand firmly with both feet on the ground." },
        "full_258": { title: "Rovina emocí (2-5-8)", title_en: "Line of Emotions (2-5-8)", content: "Máš silný a bohatý emoční svět, magnetické charisma a přirozenou autoritu. Intuice a tah na branku jdou u tebe ruku v ruce.", content_en: "You have a strong and rich emotional world, magnetic charisma and natural authority. Intuition and drive go hand in hand with you." },
        "full_369": { title: "Rovina myšlení (3-6-9)", title_en: "Line of Thinking (3-6-9)", content: "Brilantní intelekt, analytická mysl a vynikající paměť.", content_en: "Brilliant intellect, analytical mind and outstanding memory." },
        "full_123": { title: "Rovina komunikace (1-2-3)", title_en: "Line of Communication (1-2-3)", content: "Jsi výjimečný komunikátor. Spojuješ v sobě sebevědomí, empatii a kreativitu — umíš oslovit kohokoliv a přirozeně přitahuješ lidi svým výrazem a šarmem.", content_en: "You are an exceptional communicator. You combine self-confidence, empathy and creativity — you can reach anyone and naturally attract people with your expression and charm." },
        "full_456": { title: "Rovina vůle (4-5-6)", title_en: "Line of Will (4-5-6)", content: "Disponuješ mimořádnou vůlí a vytrvalostí. Jednou vytyčený cíl nevzdáváš — dokážeš dotáhnout cokoliv do konce, i kdyby mělo celé okolí být proti tobě.", content_en: "You possess extraordinary will and perseverance. Once you set a goal you do not give up — you can see anything through to completion even if the whole world is against you." },
        "full_789": { title: "Rovina akce (7-8-9)", title_en: "Line of Action (7-8-9)", content: "Člověk činu s hlubokým smyslem pro spravedlnost. Spojuješ duchovní hloubku, logiku a praktickou sílu — tvé výsledky jsou vidět a zanechávají trvalý otisk.", content_en: "A person of action with a deep sense of justice. You combine spiritual depth, logic and practical strength — your results are visible and leave a lasting mark." },
        "empty_456": { title: "Rovina zklamání (4-5-6 prázdná)", title_en: "Line of Disappointment (4-5-6 empty)", content: "Tato prázdná linie ukazuje na nedorozumění a nutnost učit se trpělivosti.", content_en: "This empty line points to misunderstandings and the need to learn patience." },
        "empty_258": { title: "Rovina vášně (2-5-8 prázdná)", title_en: "Line of Passion (2-5-8 empty)", content: "Ukazuje na potíže s nalezením vnitřního emocionálního středu.", content_en: "Points to difficulties in finding an inner emotional centre." }
    },
    gridNumbers: {
        "1": { title: "Ego a komunikace", title_en: "Ego and Communication", missing: "Absence jedničky ukazuje na výzvu v oblasti sebevědomí.", missing_en: "The absence of one points to a challenge in the area of self-confidence.", "1x": "Máš problém vyjádřit své pocity slovy.", "1x_en": "You have difficulty expressing your feelings in words.", "2x": "Ideální rovnováha v komunikaci a zdravé sebevědomí.", "2x_en": "Ideal balance in communication and healthy self-confidence.", "3x_plus": "Mentální přetlak, potřeba slovního ventilu.", "3x_plus_en": "Mental overload, the need for a verbal outlet." },
        "2": { title: "Intuice a empatie", title_en: "Intuition and Empathy", missing: "Chybí ti radar na nálady druhých. Uč se taktu.", missing_en: "You lack a radar for the moods of others. Learn tact.", "1x": "Slušná a vyvážená intuice, dobrý odhad na lidi.", "1x_en": "Decent and balanced intuition, good judgement of people.", "2x": "Vysoce nadprůměrná intuice, hraničící s přecitlivělostí.", "2x_en": "Highly above-average intuition, bordering on hypersensitivity.", "3x_plus": "Extrémní citlivost, sklon k nasávání problémů celého světa.", "3x_plus_en": "Extreme sensitivity, a tendency to absorb the problems of the whole world." },
        "3": { title: "Postřeh a představivost", title_en: "Perception and Imagination", missing: "Spoléháš na logiku a rutinu, chybí spontánnost.", missing_en: "You rely on logic and routine, lacking spontaneity.", "1x": "Vynikající duševní čilost a bleskový úsudek.", "1x_en": "Excellent mental agility and lightning-fast judgement.", "2x": "Silný intelekt, bujná představivost.", "2x_en": "Strong intellect, abundant imagination.", "3x_plus": "Hyperaktivní mysl a roztěkanost do mnoha projektů.", "3x_plus_en": "Hyperactive mind and scattered attention across many projects." },
        "4": { title: "Praktičnost a řád", title_en: "Practicality and Order", missing: "Chybí ukotvení v materiálním světě. Létáš v oblacích.", missing_en: "You lack grounding in the material world. Your head is in the clouds.", "1x": "Jsi systematický a organizovaný.", "1x_en": "You are systematic and organised.", "2x": "Sklony k workoholismu. Uč se relaxovat.", "2x_en": "Tendencies toward workaholism. Learn to relax.", "3x_plus": "Extrémní fixace na detaily a neústupnost.", "3x_plus_en": "Extreme fixation on details and inflexibility." },
        "5": { title: "Vášeň a svoboda", title_en: "Passion and Freedom", missing: "Chybí odvaha ke změnám. Zůstáváš v nevyhovující jistotě.", missing_en: "You lack courage for change. You remain in an unsatisfactory certainty.", "1x": "Máš skvělé nápady a nebojíš se je uskutečnit.", "1x_en": "You have great ideas and are not afraid to act on them.", "2x": "Obrovská energie a touha po osobní svobodě.", "2x_en": "Enormous energy and a desire for personal freedom.", "3x_plus": "Sopka energie. Pravidla pro tebe neexistují.", "3x_plus_en": "A volcano of energy. Rules do not exist for you." },
        "6": { title: "Harmonie a estetika", title_en: "Harmony and Aesthetics", missing: "Chybí porozumění pro harmonii, hádáš se místo kompromisů.", missing_en: "You lack understanding for harmony, arguing instead of compromising.", "1x": "Velký smysl pro rodinu, domov a estetiku.", "1x_en": "A great sense of family, home and aesthetics.", "2x": "Silný smysl pro dokonalost a ochranitelství.", "2x_en": "A strong sense of perfection and protectiveness.", "3x_plus": "Utopická touha po dokonalé rodině, sklon k sebeobětování.", "3x_plus_en": "A utopian desire for a perfect family, a tendency toward self-sacrifice." },
        "7": { title: "Duchovno a karma", title_en: "Spirituality and Karma", missing: "Spoléháš na hmatatelné a logické věci.", missing_en: "You rely on tangible and logical things.", "1x": "Vše chceš zažít na vlastní kůži. Rád lidem pomáháš.", "1x_en": "You want to experience everything firsthand. You enjoy helping people.", "2x": "Složité karmické zkoušky. Hluboké emoce.", "2x_en": "Complex karmic tests. Deep emotions.", "3x_plus": "Jsi stará duše. Procházíš náročným životem.", "3x_plus_en": "You are an old soul. You are going through a demanding life." },
        "8": { title: "Logika a moc", title_en: "Logic and Power", missing: "Chybí chladná logika. Vrháš se do situací bez plánu.", missing_en: "You lack cool logic. You throw yourself into situations without a plan.", "1x": "Vynikající smysl pro detail a materiálno.", "1x_en": "Excellent sense of detail and the material world.", "2x": "Obrovská touha po úspěchu a kontrole.", "2x_en": "Enormous desire for success and control.", "3x_plus": "Extrém v touze po dominanci. Životní lekcí je pokora.", "3x_plus_en": "An extreme desire for dominance. The life lesson is humility." },
        "9": { title: "Analýza a pravda", title_en: "Analysis and Truth", missing: "Chybí schopnost vidět věci v širších souvislostech.", missing_en: "You lack the ability to see things in a broader context.", "1x": "Potřebuješ všemu přijít na kloub.", "1x_en": "You need to get to the bottom of everything.", "2x": "Problém věci prožívat, vše musíš rozpitvat.", "2x_en": "Difficulty experiencing things, you must analyse everything.", "3x_plus": "Vysoké utopické ideály. Časté zklamání z nedokonalosti světa.", "3x_plus_en": "High utopian ideals. Frequent disappointment with the imperfection of the world." }
    }
};

// Pomocná funkce pro bezpečné tahání textů
let NUMERO_LANG = 'cs';
const getSafeData = (category, key) => {
    const lang = (typeof NUMERO_LANG !== 'undefined') ? NUMERO_LANG : 'cs';
    if(numerologyTexts[category] && numerologyTexts[category][key]) {
        const d = numerologyTexts[category][key];
        if (lang === 'en' && d.title_en) {
            return { title: d.title_en, content: d.content_en || d.content };
        }
        return d;
    }
    return lang === 'en'
        ? { title: "Detail coming soon", content: "Reading for this number will be added to the database shortly." }
        : { title: "Detail se připravuje", content: "Výklad pro toto číslo bude brzy doplněn do databáze." };
};

// =========================================================
// 2. PARSER LOGIKA (Mozek Oracoolia)
// =========================================================
class NumerologyParser {
    constructor(dateStr, nameStr) {
        this.dateParts = dateStr.split('-'); 
        this.year = this.dateParts[0]; this.month = this.dateParts[1]; this.day = this.dateParts[2];
        this.cleanName = nameStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z]/g, '');
    }

    getBirthDay() {
        return parseInt(this.day, 10);
    }

    reduceWithDetails(numberStr) {
        let current = numberStr.toString();
        let isKarmic = false; let karmicNumber = null; let isMaster = false;
        while (current.length > 1) {
            let sum = 0;
            for (let char of current) sum += parseInt(char, 10);
            if ([13, 14, 16, 19].includes(sum)) { isKarmic = true; karmicNumber = sum; }
            if (sum === 11 || sum === 22 || sum === 33) { isMaster = true; current = sum.toString(); break; }
            current = sum.toString();
        }
        return { finalNumber: parseInt(current, 10), isKarmic: isKarmic, karmicValue: karmicNumber, isMaster: isMaster };
    }

    getLifePath(method) {
        if (method === 'linear') {
            return this.reduceWithDetails(this.day + this.month + this.year);
        } else {
            const rDay = this.reduceWithDetails(this.day).finalNumber;
            const rMonth = this.reduceWithDetails(this.month).finalNumber;
            const rYear = this.reduceWithDetails(this.year).finalNumber;
            return this.reduceWithDetails((rDay + rMonth + rYear).toString());
        }
    }

    getPersonalYear() {
        const currentYear = new Date().getFullYear();
        const str = this.day + this.month + currentYear.toString();
        return this.reduceWithDetails(str).finalNumber;
    }

    getDailyVibrations() {
        const py = this.getPersonalYear();
        const now = new Date();
        const curMonth = now.getMonth() + 1;
        const curDay = now.getDate();

        let pm = this.reduceWithDetails(py + curMonth).finalNumber;
        let pd = this.reduceWithDetails(pm + curDay).finalNumber;

        return { personalMonth: pm, personalDay: pd };
    }

    getAdvancedNameNumbers(method) {
        let soulSum = 0; let personalitySum = 0; let destinySum = 0;
        const vowels = method === 'pythagorean' ? ['A', 'E', 'I', 'O', 'U', 'Y'] : ['A', 'E', 'I', 'O', 'U'];
        
        const pytTable = { A:1,J:1,S:1, B:2,K:2,T:2, C:3,L:3,U:3, D:4,M:4,V:4, E:5,N:5,W:5, F:6,O:6,X:6, G:7,P:7,Y:7, H:8,Q:8,Z:8, I:9,R:9 };
        const chalTable = { A:1,I:1,J:1,Q:1,Y:1, B:2,K:2,R:2, C:3,G:3,L:3,S:3, D:4,M:4,T:4, E:5,H:5,N:5,X:5, U:6,V:6,W:6, O:7,Z:7, F:8,P:8 };
        const table = method === 'pythagorean' ? pytTable : chalTable;

        for (let char of this.cleanName) {
            const val = table[char] || 0;
            destinySum += val;
            if (vowels.includes(char)) {
                soulSum += val;
            } else {
                personalitySum += val;
            }
        }

        return {
            soul: this.reduceWithDetails(soulSum),
            personality: this.reduceWithDetails(personalitySum),
            destiny: this.reduceWithDetails(destinySum)
        };
    }

    // NOVÉ: Karmické lekce (chybějící čísla ve jméně)
    getMissingNameNumbers(method) {
        const table = method === 'pythagorean' 
            ? { A:1,J:1,S:1, B:2,K:2,T:2, C:3,L:3,U:3, D:4,M:4,V:4, E:5,N:5,W:5, F:6,O:6,X:6, G:7,P:7,Y:7, H:8,Q:8,Z:8, I:9,R:9 }
            : { A:1,I:1,J:1,Q:1,Y:1, B:2,K:2,R:2, C:3,G:3,L:3,S:3, D:4,M:4,T:4, E:5,H:5,N:5,X:5, U:6,V:6,W:6, O:7,Z:7, F:8,P:8 };
        let present = new Set();
        for (let char of this.cleanName) if(table[char]) present.add(table[char]);
        
        let missing = [];
        let maxNum = method === 'pythagorean' ? 9 : 8; // Chaldejská končí u 8
        for(let i=1; i<=maxNum; i++) if(!present.has(i)) missing.push(i);
        return missing;
    }

    getGridCounts() {
        const dateStr = (this.day + this.month + this.year).replace(/0/g, '');
        const counts = { "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0 };
        for (let char of dateStr) counts[char]++;
        return counts;
    }

    getGridLines() {
        const c = this.getGridCounts();
        const lines = [];
        // Diagonály
        if (c['1']>0 && c['5']>0 && c['9']>0) lines.push("full_159");
        if (c['3']>0 && c['5']>0 && c['7']>0) lines.push("full_357");
        // Sloupce
        if (c['1']>0 && c['4']>0 && c['7']>0) lines.push("full_147");
        if (c['2']>0 && c['5']>0 && c['8']>0) lines.push("full_258");
        if (c['3']>0 && c['6']>0 && c['9']>0) lines.push("full_369");
        // Řady
        if (c['1']>0 && c['2']>0 && c['3']>0) lines.push("full_123");
        if (c['4']>0 && c['5']>0 && c['6']>0) lines.push("full_456");
        if (c['7']>0 && c['8']>0 && c['9']>0) lines.push("full_789");
        // Prázdné roviny
        if (c['4']===0 && c['5']===0 && c['6']===0) lines.push("empty_456");
        if (c['2']===0 && c['5']===0 && c['8']===0) lines.push("empty_258");
        return lines;
    }

    getPinnacles(lifePathNumber) {
        const rDay = this.reduceWithDetails(this.day).finalNumber;
        const rMonth = this.reduceWithDetails(this.month).finalNumber;
        const rYear = this.reduceWithDetails(this.year).finalNumber;

        const pin1 = this.reduceWithDetails(rMonth + rDay); 
        const pin2 = this.reduceWithDetails(rDay + rYear);   
        const pin3 = this.reduceWithDetails(pin1.finalNumber + pin2.finalNumber); 
        const pin4 = this.reduceWithDetails(rMonth + rYear); 

        let ageReducer = lifePathNumber;
        while (ageReducer > 9) {
             let sum = 0; let str = ageReducer.toString();
             for (let char of str) sum += parseInt(char, 10);
             ageReducer = sum;
        }

        const age1 = 36 - ageReducer; 
        const age2 = age1 + 9;            
        const age3 = age2 + 9;            

        return [
            { id: 1, val: pin1, age: `0 – ${age1} let`, age_en: `0 – ${age1} yrs` },
            { id: 2, val: pin2, age: `${age1 + 1} – ${age2} let`, age_en: `${age1 + 1} – ${age2} yrs` },
            { id: 3, val: pin3, age: `${age2 + 1} – ${age3} let`, age_en: `${age2 + 1} – ${age3} yrs` },
            { id: 4, val: pin4, age: `Od ${age3 + 1} let`, age_en: `From ${age3 + 1} yrs` }
        ];
    }
}

// =========================================================
// 3. RENDER LOGIKA A AUTO-UPDATE
// =========================================================
function calculateAndRender() {
    const name = document.getElementById('fullName').value;
    const date = document.getElementById('birthDate').value;
    if(!date) return;

    // Hodnoty Osoby 1
    const lpMethod = document.querySelector('input[name="lifePathMethod"]:checked').value;
    const nameMethod = document.querySelector('input[name="nameMethod"]:checked').value;

    const parser = new NumerologyParser(date, name);
    const birthDay = parser.getBirthDay();
    const lifePath = parser.getLifePath(lpMethod);
    const dailyVibes = parser.getDailyVibrations();
    const advName = parser.getAdvancedNameNumbers(nameMethod);
    const gridCounts = parser.getGridCounts();
    const gridLines = parser.getGridLines();
    const pinnacles = parser.getPinnacles(lifePath.finalNumber); 
    const moon = getMoonPhase(); 

    // NOVÉ: Číslo zralosti a Karmické lekce ze jména
    const maturity = parser.reduceWithDetails(lifePath.finalNumber + advName.destiny.finalNumber).finalNumber;
    const missingNameNums = parser.getMissingNameNumbers(nameMethod);

    const lang = (typeof NUMERO_LANG !== 'undefined') ? NUMERO_LANG : 'cs';
    let html = '';

    // --- MANDALA SVG pro today widget ---
    const mandalaSvg = `<svg class="today-mandala" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="140" cy="140" r="130" stroke="#c9a84c" stroke-width="0.5"/>
        <circle cx="140" cy="140" r="100" stroke="#c9a84c" stroke-width="0.5"/>
        <circle cx="140" cy="140" r="70" stroke="#c9a84c" stroke-width="0.5"/>
        <circle cx="140" cy="140" r="40" stroke="#c9a84c" stroke-width="0.5"/>
        <g transform="translate(140,140)">
            ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
                const r = Math.PI * a / 180;
                return `<line x1="0" y1="0" x2="${Math.cos(r)*130}" y2="${Math.sin(r)*130}" stroke="#c9a84c" stroke-width="0.4"/>`;
            }).join('')}
            ${[0,45,90,135,180,225,270,315].map(a => {
                const r = Math.PI * a / 180;
                const x1 = Math.cos(r)*70; const y1 = Math.sin(r)*70;
                const x2 = Math.cos(r+Math.PI/4)*70; const y2 = Math.sin(r+Math.PI/4)*70;
                return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#c9a84c" stroke-width="0.4"/>`;
            }).join('')}
        </g>
        <polygon points="140,15 165,72 225,72 178,108 196,165 140,130 84,165 102,108 55,72 115,72" fill="none" stroke="#c9a84c" stroke-width="0.5"/>
    </svg>`;

    // --- WIDGET DNEŠNÍ ENERGIE ---
    const pdData = getSafeData("personalDay", dailyVibes.personalDay);
    const today = new Date();
    const dateString = today.toLocaleDateString(lang === 'en' ? 'en-GB' : 'cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });

    html += `
        <div class="today-widget">
            ${mandalaSvg}
            <div class="today-widget-inner">
                <div class="today-left">
                    <div class="today-day-label">${dateString}</div>
                    <div class="today-vibrace-num">${dailyVibes.personalDay}</div>
                    <div class="today-vibrace-title">${pdData.title}</div>
                    <div class="today-vibrace-desc">${pdData.content}</div>
                    <div class="today-month-badge">${lang === 'en' ? 'Personal month · ' : 'Osobní měsíc · '}${dailyVibes.personalMonth}</div>
                </div>
                <div class="today-right">
                    <span class="moon-symbol">${moon.icon}</span>
                    <div class="moon-name">${lang === 'en' && moon.name_en ? moon.name_en : moon.name}</div>
                    <div class="moon-desc">${lang === 'en' ? 'Moon phase complements your numerological energy.' : 'Fáze měsíce doplňuje tvou numerologickou energii.'}</div>
                </div>
            </div>
        </div>
    `;

    // --- KARTA: DEN NAROZENÍ + ŽIVOTNÍ ČÍSLO ---
    const dayData = getSafeData("birthDay", birthDay);
    const lpData = getSafeData("lifePath", lifePath.finalNumber);
    let karmicLabel = lifePath.isKarmic ? `<span class="karmic-badge">${lang === 'en' ? 'Karmic debt ' : 'Karmický dluh '}${lifePath.karmicValue}</span>` : '';

    html += `<div class="card">
        <div class="result-section-title">${lang === 'en' ? 'Foundation of Your Existence' : 'Základ vaší existence'}</div>
        <div class="result-item-flex">
            <div class="big-number">${birthDay}</div>
            <div class="result-item-content">
                <h3>${lang === 'en' ? 'Day of Birth' : 'Den narození'}</h3>
                <p style="margin:4px 0 10px; color:var(--text-muted); font-size:0.85rem; letter-spacing:0.04em;">${dayData.title}</p>
                <p style="color:var(--text); font-style:italic; font-size:0.95rem;">${dayData.content}</p>
            </div>
        </div>
        <div class="result-item-flex" style="margin-bottom:0; padding-bottom:0; border-bottom:none;">
            <div class="big-number">${lifePath.finalNumber}</div>
            <div class="result-item-content">
                <h3>${lang === 'en' ? 'Life Path Number' : 'Životní číslo'} ${karmicLabel}</h3>
                <p style="margin:4px 0 10px; color:var(--text-muted); font-size:0.85rem; letter-spacing:0.04em;">${lpData.title}</p>
                <p style="color:var(--text); font-style:italic; font-size:0.95rem;">${lpData.content}</p>
            </div>
        </div>
    </div>`;

    // --- KARTA: NUMEROLOGIE JMÉNA ---
    const soulData = getSafeData("nameSoul", advName.soul.finalNumber);
    const persData = getSafeData("namePersonality", advName.personality.finalNumber);
    const destData = getSafeData("nameDestiny", advName.destiny.finalNumber);
    const matData = getSafeData("maturity", maturity);

    html += `<div class="card">
        <div class="result-section-title">${lang === 'en' ? 'Vibrations of Your Name' : 'Vibrace vašeho jména'}</div>
        <p style="color:var(--text-muted); font-size:0.88rem; font-style:italic; margin-bottom:18px;">${lang === 'en' ? 'Vowels carry inner desire · consonants shape outer image · full name reveals destiny.' : 'Samohlásky nesou vnitřní touhu · souhlásky tvarují vnější obraz · celé jméno ukazuje osud.'}</p>
        <div class="pinnacles-grid">
            <div class="pinnacle-card">
                <span class="pinnacle-age">${lang === 'en' ? 'Soul Number · Vowels' : 'Číslo duše · Samohlásky'}</span>
                <div class="pinnacle-number">${advName.soul.finalNumber}</div>
                <div class="pinnacle-title">${soulData.title}</div>
                <div class="pinnacle-desc">${soulData.content}</div>
            </div>
            <div class="pinnacle-card">
                <span class="pinnacle-age">${lang === 'en' ? 'Personality Number · Consonants' : 'Číslo osobnosti · Souhlásky'}</span>
                <div class="pinnacle-number">${advName.personality.finalNumber}</div>
                <div class="pinnacle-title">${persData.title}</div>
                <div class="pinnacle-desc">${persData.content}</div>
            </div>
            <div class="pinnacle-card">
                <span class="pinnacle-age">${lang === 'en' ? 'Destiny Number · Full Name' : 'Číslo osudu · Celé jméno'}</span>
                <div class="pinnacle-number">${advName.destiny.finalNumber}</div>
                <div class="pinnacle-title">${destData.title}</div>
                <div class="pinnacle-desc">${destData.content}</div>
            </div>
            <div class="pinnacle-card maturity-card" style="grid-column: 1 / -1;">
                <span class="pinnacle-age">${lang === 'en' ? 'Maturity Number · Life Goal' : 'Číslo zralosti · Životní cíl'}</span>
                <div class="pinnacle-number maturity-num">${maturity}</div>
                <div class="pinnacle-title">${matData.title}</div>
                <div class="pinnacle-desc">${matData.content}</div>
            </div>
        </div>
    </div>`;

    // --- KARTA: KARMICKÉ LEKCE ---
    html += `<div class="card">
        <div class="result-section-title">${lang === 'en' ? 'Karmic Lessons' : 'Karmické lekce'}</div>
        <p style="color:var(--text-muted); font-size:0.88rem; font-style:italic; margin-bottom:16px;">${lang === 'en' ? 'Numbers missing from your name are vibrations you brought into this life to awaken.' : 'Čísla chybějící v tvém jméně jsou vibrace, které jsi si přinesl(a) do tohoto života probudit.'}</p>`;
    if(missingNameNums.length === 0) {
        html += `<p style="color:#6ab06a; font-style:italic;">Tvé jméno je vzácně vyvážené — nechybí v něm žádná vibrace.</p>`;
    } else {
        missingNameNums.forEach(num => {
            const klData = getSafeData("karmicLessons", num);
            html += `<div style="border-left:2px solid var(--karmic); padding:10px 16px; margin-bottom:12px; border-radius:0 6px 6px 0; background:rgba(107,26,26,0.12);">
                <p style="margin:0; color:var(--text); font-size:0.9rem;"><span style="color:#e07070; font-family:'Cinzel',serif; font-size:0.75rem; letter-spacing:0.1em;">${klData.title}</span><br><span style="font-style:italic; color:var(--text-muted);">${klData.content}</span></p>
            </div>`;
        });
    }
    html += `</div>`;

    // --- KARTA: VIBRAČNÍ CYKLY ---
    html += `<div class="card">
        <div class="result-section-title">${lang === 'en' ? 'Vibrational Cycles · Pinnacles' : 'Vibrační cykly · Trojúhelníky'}</div>
        <div class="pinnacles-grid">`;
    pinnacles.forEach(pin => {
        const pinData = getSafeData("pinnacles", pin.val.finalNumber);
        html += `<div class="pinnacle-card">
            <span class="pinnacle-age">${lang === 'en' && pin.age_en ? pin.age_en : pin.age}</span>
            <div class="pinnacle-number">${pin.val.finalNumber}</div>
            <div class="pinnacle-title">${pinData.title}</div>
            <div class="pinnacle-desc">${pinData.content}</div>
        </div>`;
    });
    html += `</div></div>`;

    // --- KARTA: NUMEROLOGICKÁ MŘÍŽKA ---
    // Vizuální 3x3 grid
    const gridOrder = [7,8,9,4,5,6,1,2,3]; // řazení mřížky: 7 vlevo nahoře
    let gridVisualHtml = `<div class="num-grid-visual">`;
    gridOrder.forEach(n => {
        const count = gridCounts[n.toString()];
        const cellClass = count === 0 ? 'missing' : count >= 3 ? 'strong' : 'present';
        const display = count === 0 ? '—' : Array(count).fill(n).join('');
        gridVisualHtml += `<div class="num-grid-cell ${cellClass}">${display}<span class="num-grid-label">${n}</span></div>`;
    });
    gridVisualHtml += `</div>`;

    // Roviny
    let rovinyHtml = '';
    if (gridLines.length > 0) {
        gridLines.forEach(lineKey => {
            const lineData = getSafeData("gridLines", lineKey);
            rovinyHtml += `<div class="gridline-item"><h5>${lineData.title}</h5><p style="margin-top:4px; color:var(--text-muted); font-style:italic; font-size:0.88rem;">${lineData.content}</p></div>`;
        });
    } else {
        rovinyHtml = `<p style="color:var(--text-dim); font-style:italic; font-size:0.88rem;">V datu nebyly detekovány žádné plné ani prázdné roviny.</p>`;
    }

    html += `<div class="card">
        <div class="result-section-title">${lang === 'en' ? 'Numerological Grid' : 'Numerologická mřížka'}</div>
        <p style="color:var(--text-muted); font-size:0.88rem; font-style:italic; margin-bottom:20px;">${lang === 'en' ? 'Each digit of the birth date leaves a mark in the energy grid.' : 'Každá číslice data narození zanechává stopu v energetické mřížce.'}</p>
        <div style="display:flex; flex-wrap:wrap; gap:28px; align-items:flex-start; margin-bottom:24px;">
            ${gridVisualHtml}
            <div style="flex:1; min-width:180px;">${rovinyHtml}</div>
        </div>
        <div class="result-section-title" style="margin-top:8px;">${lang === 'en' ? 'Element Detail' : 'Detail prvků'}</div>`;

    for (let i = 1; i <= 9; i++) {
        const count = gridCounts[i.toString()];
        const textData = numerologyTexts.gridNumbers[i.toString()];
        const lang = (typeof NUMERO_LANG !== 'undefined') ? NUMERO_LANG : 'cs';
        const gridTitle = (lang === 'en' && textData.title_en) ? textData.title_en : textData.title;
        if (count === 0) {
            const missingText = (lang === 'en' && textData.missing_en) ? textData.missing_en : textData.missing;
            const missingLabel = lang === 'en' ? `Missing vibration ${i} · ${gridTitle}` : `Chybějící vibrace ${i} · ${gridTitle}`;
            html += `<div class="grid-number-box">
                <div class="grid-number-icon missing">—<br><small style="font-size:0.6rem;font-family:'Crimson Pro',serif;">${i}</small></div>
                <div>
                    <h4 class="missing-title" style="margin-bottom:4px;">${missingLabel}</h4>
                    <p style="color:var(--text-muted); font-style:italic; font-size:0.88rem; margin:0;">${missingText}</p>
                </div>
            </div>`;
        } else {
            let multiKey = count >= 3 ? "3x_plus" : count + "x";
            let multiKeyEn = multiKey + "_en";
            const multiString = Array(count).fill(i).join('');
            const multiText = (lang === 'en' && textData[multiKeyEn]) ? textData[multiKeyEn] : textData[multiKey];
            const numLabel = lang === 'en' ? `Number ${i} · ${gridTitle}` : `Číslo ${i} · ${gridTitle}`;
            html += `<div class="grid-number-box">
                <div class="grid-number-icon">${multiString}</div>
                <div>
                    <h4 style="margin-bottom:4px;">${numLabel}</h4>
                    <p style="color:var(--text-muted); font-style:italic; font-size:0.88rem; margin:0;">${multiText}</p>
                </div>
            </div>`;
        }
    }
    html += `</div>`;

    // --- PARTNERSKÁ SHODA ---
    const pDate = document.getElementById('partnerDate').value;
    const pName = document.getElementById('partnerName').value;

    if (pDate) {
        const partnerParser = new NumerologyParser(pDate, pName || "Partner");
        const partnerLp = partnerParser.getLifePath(lpMethod).finalNumber;
        const synastryNum = parser.reduceWithDetails(lifePath.finalNumber + partnerLp).finalNumber;
        const synData = getSafeData("synastry", synastryNum);

        const pCounts = partnerParser.getGridCounts();
        const gridOrderSyn = [7,8,9,4,5,6,1,2,3];
        let combinedGridHtml = `<div class="num-grid-visual" style="max-width:240px;">`;
        gridOrderSyn.forEach(n => {
            const sumC = gridCounts[n] + pCounts[n];
            const cellClass = sumC === 0 ? 'missing' : sumC >= 4 ? 'strong' : 'present';
            const display = sumC === 0 ? '—' : Array(sumC).fill(n).join('');
            combinedGridHtml += `<div class="num-grid-cell ${cellClass}" style="font-size:0.9rem;">${display}<span class="num-grid-label">${n}</span></div>`;
        });
        combinedGridHtml += `</div>`;

        html += `<div class="synastry-block">
            <div class="result-section-title" style="margin-bottom:18px;">${lang === 'en' ? 'Partner Synastry' : 'Partnerská synastrie'}</div>
            <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:20px;">
                ${lang === 'en' ? 'Your Life Path' : 'Tvé životní číslo'} <strong style="color:var(--gold);">${lifePath.finalNumber}</strong> · ${pName || 'Partner'} <strong style="color:var(--gold);">${partnerLp}</strong>
            </p>
            <div style="display:flex; align-items:baseline; gap:12px; margin-bottom:14px;">
                <span style="font-family:'Cinzel',serif; font-size:3rem; color:var(--gold); line-height:1;">${synastryNum}</span>
                <div>
                    <div style="font-family:'Cinzel',serif; font-size:0.85rem; color:var(--text); letter-spacing:0.08em;">${lang === 'en' && synData.title_en ? synData.title_en : synData.title}</div>
                    <div style="font-family:'Cinzel',serif; font-size:0.58rem; letter-spacing:0.15em; color:var(--gold-dim); text-transform:uppercase;">${lang === 'en' ? 'Relationship Number' : 'Vztahové číslo'}</div>
                </div>
            </div>
            <p style="color:var(--text); font-style:italic; font-size:0.95rem; line-height:1.7; margin-bottom:24px;">${lang === 'en' && synData.content_en ? synData.content_en : synData.content}</p>
            <h4 style="margin-bottom:12px;">${lang === 'en' ? 'Combined Grid' : 'Společná mřížka'}</h4>
            <p style="color:var(--text-muted); font-size:0.85rem; font-style:italic; margin-bottom:14px;">${lang === 'en' ? "Do you complement each other\u2019s missing vibrations?" : 'Doplňujete svá prázdná místa navzájem?'}</p>
            ${combinedGridHtml}
        </div>`;
    }

    document.getElementById('outputArea').innerHTML = html;
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById('numForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateAndRender();
});

const inputs = document.querySelectorAll('input[type=radio], input[type=date], input[type=text]');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (document.getElementById('results').style.display === 'block') {
            calculateAndRender();
        }
    });
});


// ── SKY CANVAS ──────────────────────────────
(function() {
    const canvas = document.getElementById('sky-canvas');
    const ctx = canvas.getContext('2d');
    const GOLD = 'rgba(201,168,76,';
    const WHITE = 'rgba(220,215,200,';

    // Souhvězdí — relativní souřadnice [0..1] pro každou hvězdu a hrany
    const constellations = [
        {
            name: 'Orion',
            stars: [[0.08,0.12],[0.12,0.09],[0.16,0.12],[0.12,0.17],[0.09,0.22],[0.15,0.22],[0.10,0.27],[0.14,0.27]],
            edges: [[0,1],[1,2],[1,3],[3,4],[3,5],[4,6],[5,7]]
        },
        {
            name: 'Cassiopeia',
            stars: [[0.72,0.06],[0.77,0.04],[0.82,0.07],[0.87,0.04],[0.92,0.07]],
            edges: [[0,1],[1,2],[2,3],[3,4]]
        },
        {
            name: 'Velký vůz',
            stars: [[0.55,0.18],[0.61,0.16],[0.67,0.16],[0.73,0.18],[0.73,0.24],[0.67,0.28],[0.59,0.30]],
            edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,6]]
        },
        {
            name: 'Jižní kříž',
            stars: [[0.85,0.55],[0.85,0.65],[0.80,0.60],[0.90,0.60]],
            edges: [[0,1],[2,3]]
        },
        {
            name: 'Lev',
            stars: [[0.20,0.48],[0.24,0.44],[0.30,0.43],[0.35,0.46],[0.33,0.52],[0.26,0.54],[0.22,0.52]],
            edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]
        },
        {
            name: 'Škorpión',
            stars: [[0.60,0.62],[0.64,0.60],[0.68,0.62],[0.70,0.66],[0.68,0.70],[0.65,0.74],[0.62,0.78],[0.60,0.74]],
            edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
        }
    ];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    }

    function draw() {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        // Mlhovina — jemný nebeský pás
        const nebula = ctx.createLinearGradient(0, 0, W, H * 0.5);
        nebula.addColorStop(0, 'rgba(30,20,60,0)');
        nebula.addColorStop(0.3, 'rgba(40,25,70,0.18)');
        nebula.addColorStop(0.6, 'rgba(20,30,55,0.12)');
        nebula.addColorStop(1, 'rgba(30,20,60,0)');
        ctx.fillStyle = nebula;
        ctx.fillRect(0, 0, W, H * 0.6);

        // Náhodné hvězdy — seed pro konzistenci
        const rng = (seed) => { let x = Math.sin(seed) * 10000; return x - Math.floor(x); };
        for (let i = 0; i < 280; i++) {
            const x = rng(i * 3.1) * W;
            const y = rng(i * 7.3) * H;
            const size = rng(i * 2.7) < 0.15 ? 1.5 : rng(i * 2.7) < 0.4 ? 1.0 : 0.6;
            const isGold = rng(i * 5.9) < 0.25;
            const alpha = 0.25 + rng(i * 4.1) * 0.6;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = isGold ? GOLD + alpha + ')' : WHITE + alpha + ')';
            ctx.fill();
        }

        // Jasné hvězdy s křížovým zábleskem
        const brightStars = [
            [0.05, 0.08, 2.2], [0.38, 0.03, 2.5], [0.71, 0.14, 2.0],
            [0.93, 0.28, 2.3], [0.18, 0.38, 1.8], [0.52, 0.45, 2.1],
            [0.84, 0.72, 2.4], [0.28, 0.80, 1.9], [0.65, 0.88, 2.2],
        ];
        brightStars.forEach(([rx, ry, r]) => {
            const x = rx * W, y = ry * H;
            ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = GOLD + '0.85)'; ctx.fill();
            // záblesk
            ctx.strokeStyle = GOLD + '0.3)'; ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(x - r*4, y); ctx.lineTo(x + r*4, y); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(x, y - r*4); ctx.lineTo(x, y + r*4); ctx.stroke();
        });

        // Souhvězdí
        constellations.forEach(con => {
            const pts = con.stars.map(([rx, ry]) => [rx * W, ry * H]);
            // Spojovací linie
            ctx.strokeStyle = GOLD + '0.18)';
            ctx.lineWidth = 0.7;
            ctx.setLineDash([3, 5]);
            con.edges.forEach(([a, b]) => {
                ctx.beginPath();
                ctx.moveTo(pts[a][0], pts[a][1]);
                ctx.lineTo(pts[b][0], pts[b][1]);
                ctx.stroke();
            });
            ctx.setLineDash([]);
            // Hvězdy souhvězdí
            pts.forEach(([x, y], idx) => {
                const r = idx === 0 ? 2.0 : 1.4;
                ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = GOLD + '0.75)'; ctx.fill();
                // Jemný glow
                const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
                grd.addColorStop(0, GOLD + '0.12)');
                grd.addColorStop(1, GOLD + '0)');
                ctx.beginPath(); ctx.arc(x, y, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = grd; ctx.fill();
            });
        });
    }

    window.addEventListener('resize', resize);
    resize();
})();
