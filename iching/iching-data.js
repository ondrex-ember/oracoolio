const ichingTexts = {
    1: {
        nazev: "Čchien / Tvořivost (Nebe)", nazev_en: "Qian / The Creative (Heaven)",
        rozsudek: "Nejvyšší úspěch. Podporuje vytrvalost. Tvořivá síla je na vrcholu, jednejte s jasným záměrem a silou draka.",
        rozsudek_en: "Supreme success. Perseverance furthers. Creative power is at its peak — act with clear intent and the strength of the dragon.",
        obraz: "Pohyb nebes je mocný. Ušlechtilý člověk se proto činí silným a neúnavným.",
        obraz_en: "The movement of heaven is full of power. Thus the superior man makes himself strong and untiring."
    },
    2: {
        nazev: "Kchun / Přijetí (Země)", nazev_en: "Kun / The Receptive (Earth)",
        rozsudek: "Velký úspěch, je-li podporován vytrvalostí. Je čas naslouchat, přijímat a nechat věci k sobě volně plynout.",
        rozsudek_en: "Great success through perseverance. It is time to listen, receive, and allow things to flow to you freely.",
        obraz: "Země je rozlehlá a nese vše. Ušlechtilý člověk svou velkorysostí a ctností nese vnější svět.",
        obraz_en: "The earth is vast and bears all things. The superior man, through his generosity and virtue, carries the outer world."
    },
    3: {
        nazev: "Čun / Počáteční obtíže", nazev_en: "Zhun / Difficulty at the Beginning",
        rozsudek: "Nejvyšší úspěch v pohybu přes překážky. Nejednejte zbrkle, buďte jako rostlinka deroucí se zmrzlou půdou.",
        rozsudek_en: "Supreme success in moving through obstacles. Do not act rashly — be like a seedling pushing through frozen ground.",
        obraz: "Mraky a hrom: Obraz počátečních obtíží. Ušlechtilý člověk vnáší řád do zmatku.",
        obraz_en: "Clouds and thunder: the image of Difficulty at the Beginning. The superior man brings order out of confusion."
    },
    4: {
        nazev: "Meng / Nerozvážnost mládí", nazev_en: "Meng / Youthful Folly",
        rozsudek: "Nerozvážnost má úspěch. Ne já hledám mladého blázna, mladý blázen hledá mě. Při první otázce odpovím, při druhé a třetí je to obtěžování.",
        rozsudek_en: "Youthful folly has success. It is not I who seek the young fool, but the young fool who seeks me. At a first oracle I inform him, but if he asks two or three times it is importunity.",
        obraz: "Pramen tryskající zpod hory. Ušlechtilý člověk pěstuje svůj charakter důkladností ve všem, co dělá.",
        obraz_en: "A spring wells up at the foot of the mountain. The superior man fosters his character by thoroughness in all that he does."
    },
    5: {
        nazev: "Sü / Čekání", nazev_en: "Xu / Waiting (Nourishment)",
        rozsudek: "Pokud jsi upřímný, máš světlo a úspěch. Čas čekání není časem nečinnosti, ale hromaděním sil na správný okamžik.",
        rozsudek_en: "If you are sincere, you have light and success. The time of waiting is not a time of inaction, but of gathering strength for the right moment.",
        obraz: "Mraky stoupají k nebi. Ušlechtilý člověk jí, pije a je radostné mysli.",
        obraz_en: "Clouds rise up to heaven. The superior man eats and drinks, is joyous and of good cheer."
    },
    6: {
        nazev: "Sung / Svár", nazev_en: "Song / Conflict",
        rozsudek: "Jsi upřímný, a přece jsi potlačen. Opatrné zastavení v polovině cesty přináší štěstí. Jít až do konce přináší neštěstí.",
        rozsudek_en: "You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune.",
        obraz: "Nebe a voda se pohybují opačným směrem. Ušlechtilý člověk pečlivě zvažuje začátek každého sporu.",
        obraz_en: "Heaven and water go their opposite ways. The superior man carefully considers the beginning of any undertaking."
    },
    7: {
        nazev: "Š' / Vojsko", nazev_en: "Shi / The Army",
        rozsudek: "Vojsko potřebuje vytrvalost a silného muže. Štěstí bez viny. Kázeň a jasné vedení jsou nyní nezbytné.",
        rozsudek_en: "The army needs perseverance and a strong man. Good fortune without blame. Discipline and clear leadership are now essential.",
        obraz: "Voda uprostřed země. Ušlechtilý člověk vzdělává lid a shromažďuje masy.",
        obraz_en: "In the middle of the earth is water. The superior man increases his masses by generosity toward the people."
    },
    8: {
        nazev: "Pi / Soudržnost", nazev_en: "Bi / Holding Together (Union)",
        rozsudek: "Soudržnost přináší štěstí. Zkoumej orákulum, abys zjistil, zda máš vznešenost, vytrvalost a sílu. Opozdilci potká neštěstí.",
        rozsudek_en: "Holding together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance. Those who come too late meet with misfortune.",
        obraz: "On the earth is water. The superior man fosters his relationships and maintains friendly ties with neighboring regions.",
        obraz_en: "On the earth is water. The superior man fosters his relationships and maintains friendly ties with neighboring regions."
    },
    9: {
        nazev: "Siao Čchü / Zkrocení malé síly", nazev_en: "Xiao Chu / The Taming Power of the Small",
        rozsudek: "Úspěch. Husté mraky, ale žádný déšť ze západu. Malými krůčky a jemným působením lze dosáhnout velkých věcí.",
        rozsudek_en: "Success. Dense clouds but no rain from our western region. Small steps and gentle influence can achieve great things.",
        obraz: "Vítr žene mraky po nebi. Ušlechtilý člověk zušlechťuje vnější vzhled a drobné ctnosti.",
        obraz_en: "The wind drives across heaven. The superior man refines the outward aspect of his nature and cultivates small virtues."
    },
    10: {
        nazev: "Lü / Vykročení", nazev_en: "Lü / Treading (Conduct)",
        rozsudek: "Šlapeš tygrovi na ocas, ale on tě nekousne. Úspěch. Opatrnost, slušnost a správný přístup zaženou každé nebezpečí.",
        rozsudek_en: "Treading upon the tail of the tiger — it does not bite. Success. Caution, courtesy, and the right approach ward off every danger.",
        obraz: "Heaven above, the lake below. The superior man discriminates between high and low and thereby fortifies the thinking of the people.",
        obraz_en: "Heaven above, the lake below. The superior man discriminates between high and low and thereby fortifies the thinking of the people."
    },
    11: {
        nazev: "Tchaj / Mír a harmonie", nazev_en: "Tai / Peace",
        rozsudek: "Malé odchází, velké přichází. Štěstí, úspěch. Síly nebe a země jsou v dokonalém spojení, vše rozkvétá.",
        rozsudek_en: "The small departs, the great approaches. Good fortune and success. The forces of heaven and earth are in perfect union — all things flourish.",
        obraz: "Heaven and earth unite. The ruler divides and completes the course of heaven and earth and assists the people.",
        obraz_en: "Heaven and earth unite. The ruler divides and completes the course of heaven and earth and assists the people."
    },
    12: {
        nazev: "Pchi / Stagnace", nazev_en: "Pi / Standstill (Stagnation)",
        rozsudek: "Zlí lidé nenesou prospěch ušlechtilému. Velké odchází, malé přichází. Čas stáhnout se do sebe a chránit svou hodnotu.",
        rozsudek_en: "Evil people do not further the perseverance of the superior man. The great departs, the small approaches. Time to withdraw inward and protect your worth.",
        obraz: "Heaven and earth do not unite. The superior man falls back upon his inner worth in order to escape the difficulties.",
        obraz_en: "Heaven and earth do not unite. The superior man falls back upon his inner worth in order to escape the difficulties."
    },
    13: {
        nazev: "Tchung Žen / Společenství lidí", nazev_en: "Tong Ren / Fellowship with Men",
        rozsudek: "Společenství lidí na otevřeném prostranství. Úspěch. Je příznivé překročit velkou vodu. Spolupráce a sdílené ideály vedou k cíli.",
        rozsudek_en: "Fellowship with men in the open. Success. It furthers to cross the great water. Cooperation and shared ideals lead to the goal.",
        obraz: "Fire rises to heaven. The superior man organises the clans and makes distinctions between things.",
        obraz_en: "Fire rises to heaven. The superior man organises the clans and makes distinctions between things."
    },
    14: {
        nazev: "Ta Jou / Velké državy", nazev_en: "Da You / Possession in Great Measure",
        rozsudek: "Nejvyšší úspěch. Bohatství a moc jsou ti dány, ale musí být spravovány s moudrostí a bez pýchy.",
        rozsudek_en: "Supreme success. Wealth and power are granted to you, but they must be managed with wisdom and without pride.",
        obraz: "Fire in heaven above. The superior man curbs evil and furthers good, and thereby obeys the benevolent will of heaven.",
        obraz_en: "Fire in heaven above. The superior man curbs evil and furthers good, and thereby obeys the benevolent will of heaven."
    },
    15: {
        nazev: "Čchien / Skromnost", nazev_en: "Qian / Modesty",
        rozsudek: "Skromnost přináší úspěch. Ušlechtilý člověk dokáže věci dotáhnout do konce. Kdo se snižuje, bude povýšen.",
        rozsudek_en: "Modesty creates success. The superior man carries things through. He who humbles himself shall be exalted.",
        obraz: "Within the earth, a mountain. The superior man reduces that which is too much and augments that which is too little.",
        obraz_en: "Within the earth, a mountain. The superior man reduces that which is too much and augments that which is too little."
    },
    16: {
        nazev: "Jü / Nadšení", nazev_en: "Yu / Enthusiasm",
        rozsudek: "Je příznivé ustanovit pomocníky a uvést vojska do pohybu. Radost a hudba spojují lid a dodávají mu odvahu.",
        rozsudek_en: "It furthers one to install helpers and to set armies marching. Joy and music unite the people and lend them courage.",
        obraz: "Thunder comes resounding out of the earth. The ancient kings made music in order to honor merit and offered it to God.",
        obraz_en: "Thunder comes resounding out of the earth. The ancient kings made music in order to honor merit and offered it to God."
    },
    17: {
        nazev: "Suej / Následování", nazev_en: "Sui / Following",
        rozsudek: "Nejvyšší úspěch. Podporuje vytrvalost. Bez viny. Kdo umí plynout s proudem a přizpůsobit se, stane se přirozeným vůdcem.",
        rozsudek_en: "Supreme success. Perseverance furthers. No blame. He who flows with the current and adapts becomes a natural leader.",
        obraz: "Thunder in the middle of the lake. The superior man at nightfall goes indoors for rest and recuperation.",
        obraz_en: "Thunder in the middle of the lake. The superior man at nightfall goes indoors for rest and recuperation."
    },
    18: {
        nazev: "Ku / Náprava zkaženého", nazev_en: "Gu / Work on What Has Been Spoiled",
        rozsudek: "Nejvyšší úspěch. Je příznivé překročit velkou vodu. Čas napravit staré chyby. Tři dny před začátkem, tři dny po začátku.",
        rozsudek_en: "Supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days.",
        obraz: "The wind blows low on the mountain. The superior man stirs up the people and strengthens their spirit.",
        obraz_en: "The wind blows low on the mountain. The superior man stirs up the people and strengthens their spirit."
    },
    19: {
        nazev: "Lin / Sbližování", nazev_en: "Lin / Approach",
        rozsudek: "Nejvyšší úspěch. Jaro přichází a vše roste. Ale až přijde osmý měsíc, dostaví se neštěstí. Využij příznivé doby, dokud trvá.",
        rozsudek_en: "Supreme success. Spring comes and all things grow. But when the eighth month comes, there will be misfortune. Use the favorable time while it lasts.",
        obraz: "The earth above the lake. The superior man is inexhaustible in his will to teach, and without limits in his tolerance and protection of the people.",
        obraz_en: "The earth above the lake. The superior man is inexhaustible in his will to teach, and without limits in his tolerance and protection of the people."
    },
    20: {
        nazev: "Kuan / Pozorování", nazev_en: "Guan / Contemplation (View)",
        rozsudek: "Oběť byla přinesena, ale hostina ještě nezačala. Všichni vzhlížejí s úctou. Je čas rozjímat a vidět širší souvislosti.",
        rozsudek_en: "The ablution has been made, but not yet the offering. Full of trust they look up to him. It is time to contemplate and see the wider connections.",
        obraz: "The wind blows over the earth. The ancient kings visited the regions of the world, contemplated the people, and gave them instruction.",
        obraz_en: "The wind blows over the earth. The ancient kings visited the regions of the world, contemplated the people, and gave them instruction."
    },
    21: {
        nazev: "Š' Cho / Překousnutí", nazev_en: "Shi He / Biting Through",
        rozsudek: "Úspěch. Je příznivé vykonávat spravedlnost. Problém musí být rázně překousnut, aby se obnovil řád a čistota.",
        rozsudek_en: "Success. It furthers one to let justice be administered. The obstacle must be decisively bitten through to restore order and clarity.",
        obraz: "Thunder and lightning. The kings of former times made firm the laws through clearly defined penalties.",
        obraz_en: "Thunder and lightning. The kings of former times made firm the laws through clearly defined penalties."
    },
    22: {
        nazev: "Pi / Půvab", nazev_en: "Bi / Grace",
        rozsudek: "Úspěch. V malých věcech je příznivé něco podniknout. Krása je důležitá, ale nesmí zakrývat prázdnotu vnitra.",
        rozsudek_en: "Success. It furthers one to undertake something in small matters. Beauty matters, but it must not conceal inner emptiness.",
        obraz: "Fire at the foot of the mountain. The superior man proceeds in clearing up current affairs, but dare not decide controversial issues.",
        obraz_en: "Fire at the foot of the mountain. The superior man proceeds in clearing up current affairs, but dare not decide controversial issues."
    },
    23: {
        nazev: "Po / Odpadávání", nazev_en: "Bo / Splitting Apart",
        rozsudek: "Není příznivé nikam postupovat. Temnota pohlcuje světlo. Zachovej klid a vyčkej, až se starý řád sám zhroutí.",
        rozsudek_en: "It does not further one to go anywhere. Darkness is consuming the light. Remain calm and wait for the old order to collapse by itself.",
        obraz: "The mountain rests on the earth. Those above can ensure their position only by giving generously to those below.",
        obraz_en: "The mountain rests on the earth. Those above can ensure their position only by giving generously to those below."
    },
    24: {
        nazev: "Fu / Návrat", nazev_en: "Fu / Return (The Turning Point)",
        rozsudek: "Úspěch. Vycházení a vcházení bez újmy. Přátelé přicházejí. Bod obratu. Po temnotě se světlo začíná vracet.",
        rozsudek_en: "Success. Going out and coming in without error. Friends come without blame. The turning point. After darkness the light begins to return.",
        obraz: "Thunder within the earth. The kings of antiquity closed the passes at the time of solstice. Merchants and strangers did not travel.",
        obraz_en: "Thunder within the earth. The kings of antiquity closed the passes at the time of solstice. Merchants and strangers did not travel."
    },
    25: {
        nazev: "Wu Wang / Nevinnost", nazev_en: "Wu Wang / Innocence (The Unexpected)",
        rozsudek: "Nejvyšší úspěch. Kdo není spravedlivý a bezelstný, toho stihne neštěstí a není mu k užitku nic podnikat.",
        rozsudek_en: "Supreme success. If a man is not as he should be, he has misfortune, and it does not further him to undertake anything.",
        obraz: "Under heaven, thunder rolls. The kings of old, rich in virtue, administered the world in accord with the seasons.",
        obraz_en: "Under heaven, thunder rolls. The kings of old, rich in virtue, administered the world in accord with the seasons."
    },
    26: {
        nazev: "Ta Čchü / Zkrocení velké síly", nazev_en: "Da Chu / The Taming Power of the Great",
        rozsudek: "Příznivé pro vytrvalost. Nejíst doma přináší štěstí. Je příznivé překročit velkou vodu. Hromadění energie pro velký čin.",
        rozsudek_en: "Perseverance furthers. Not eating at home brings good fortune. It furthers to cross the great water. Accumulate energy for a great deed.",
        obraz: "Heaven within the mountain. The superior man acquaints himself with many sayings of antiquity and many deeds of the past in order to strengthen his character.",
        obraz_en: "Heaven within the mountain. The superior man acquaints himself with many sayings of antiquity and many deeds of the past in order to strengthen his character."
    },
    27: {
        nazev: "I / Výživa", nazev_en: "Yi / The Corners of the Mouth (Nourishment)",
        rozsudek: "Vytrvalost přináší štěstí. Pozoruj, čím člověk sytí sebe sama a čím sytí druhé. Dbej na to, co vkládáš do úst i do mysli.",
        rozsudek_en: "Perseverance brings good fortune. Pay heed to the providing of nourishment and to what a man seeks to fill his own mouth with.",
        obraz: "At the foot of the mountain, thunder. The superior man is careful of his words and temperate in eating and drinking.",
        obraz_en: "At the foot of the mountain, thunder. The superior man is careful of his words and temperate in eating and drinking."
    },
    28: {
        nazev: "Ta Kuo / Převaha velkého", nazev_en: "Da Guo / Preponderance of the Great",
        rozsudek: "Střešní trám se prohýbá pod tíhou. Je příznivé někam jít. Úspěch. Tlak je příliš velký, je nutné učinit zásadní a rychlé rozhodnutí.",
        rozsudek_en: "The ridgepole sags to the breaking point. It furthers one to have somewhere to go. Success. The pressure is too great — a decisive and swift decision must be made.",
        obraz: "The lake rises above the trees. The superior man, when he stands alone, is unconcerned. If he has to renounce the world, he is undaunted.",
        obraz_en: "The lake rises above the trees. The superior man, when he stands alone, is unconcerned. If he has to renounce the world, he is undaunted."
    },
    29: {
        nazev: "Kchan / Hlubina (Voda)", nazev_en: "Kan / The Abysmal (Water)",
        rozsudek: "Hluboká propast. Upřímnost srdce přinese úspěch. Zůstaň věrný sám sobě, i když padáš do tmy, a najdeš cestu ven.",
        rozsudek_en: "The Abysmal repeated. Have confidence in your heart. Action brings success. Remain true to yourself even as you fall into darkness and you will find the way out.",
        obraz: "Water flows on uninterruptedly and reaches its goal. The superior man walks in lasting virtue and carries on the business of teaching.",
        obraz_en: "Water flows on uninterruptedly and reaches its goal. The superior man walks in lasting virtue and carries on the business of teaching."
    },
    30: {
        nazev: "Li / Přilnutí (Oheň)", nazev_en: "Li / The Clinging (Fire)",
        rozsudek: "Vytrvalost přináší úspěch. Péče o krávu přináší štěstí. Přilni k tomu, co je světlé a jasné, a budeš osvěcovat druhé.",
        rozsudek_en: "Perseverance furthers. It brings success. Care of the cow brings good fortune. Cling to that which is bright and clear, and you will illuminate others.",
        obraz: "That which is bright rises twice. The great man, by perpetuating this brightness, illumines the four quarters of the world.",
        obraz_en: "That which is bright rises twice. The great man, by perpetuating this brightness, illumines the four quarters of the world."
    },
    31: {
        nazev: "Sien / Vzájemné působení", nazev_en: "Xian / Influence (Wooing)",
        rozsudek: "Úspěch. Příznivé pro vytrvalost. Vzít si dívku přináší štěstí. Otevři se druhým bez předsudků a bude ti odpovězeno.",
        rozsudek_en: "Success. Perseverance furthers. To take a maiden to wife brings good fortune. Open yourself to others without prejudice and you will be answered.",
        obraz: "A lake on the mountain. The superior man encourages people to approach him by his readiness to receive them.",
        obraz_en: "A lake on the mountain. The superior man encourages people to approach him by his readiness to receive them."
    },
    32: {
        nazev: "Cheng / Trvání", nazev_en: "Heng / Duration",
        rozsudek: "Úspěch. Bez viny. Příznivé pro vytrvalost. Je příznivé někam jít. Co je hluboce pravdivé, vydrží navždy.",
        rozsudek_en: "Success. No blame. Perseverance furthers. It furthers one to have somewhere to go. What is deeply true endures forever.",
        obraz: "Thunder and wind. The superior man stands firm and does not change his direction.",
        obraz_en: "Thunder and wind. The superior man stands firm and does not change his direction."
    },
    33: {
        nazev: "Tun / Ústup", nazev_en: "Dun / Retreat",
        rozsudek: "Úspěch. V malém je příznivá vytrvalost. Moudrý ústup není porážka — je to zachování sil pro správný čas.",
        rozsudek_en: "Success. In what is small, perseverance furthers. A wise retreat is not defeat — it is the preservation of strength for the right moment.",
        obraz: "Mountain under heaven. The superior man keeps the inferior man at a distance, not angrily but with reserve.",
        obraz_en: "Mountain under heaven. The superior man keeps the inferior man at a distance, not angrily but with reserve."
    },
    34: {
        nazev: "Ta Čuang / Velká síla", nazev_en: "Da Zhuang / The Power of the Great",
        rozsudek: "Příznivé pro vytrvalost. Velká síla ti byla svěřena — používej ji s moudrostí a bez arogance.",
        rozsudek_en: "Perseverance furthers. Great power has been entrusted to you — use it with wisdom and without arrogance.",
        obraz: "Thunder in heaven above. The superior man does not tread paths that do not accord with established order.",
        obraz_en: "Thunder in heaven above. The superior man does not tread paths that do not accord with established order."
    },
    35: {
        nazev: "Ťin / Pokrok", nazev_en: "Jin / Progress",
        rozsudek: "Silný princ je uznáván, dostává koně v hojném počtu. V jediný den je třikrát přijat. Pokrok je snadný a přirozený.",
        rozsudek_en: "The powerful prince is honored with horses in large numbers. In a single day he is granted audience three times. Progress is easy and natural.",
        obraz: "The sun rises over the earth. The superior man himself brightens his bright virtue.",
        obraz_en: "The sun rises over the earth. The superior man himself brightens his bright virtue."
    },
    36: {
        nazev: "Ming I / Zranění světla", nazev_en: "Ming Yi / Darkening of the Light",
        rozsudek: "Je příznivá vytrvalost v obtížích. Skryj své světlo před těmi, kdo ti nerozumí, a uchráníš tak svou podstatu.",
        rozsudek_en: "It furthers one to be persevering in adversity. Hide your light from those who do not understand you, and thus protect your essence.",
        obraz: "The light has sunk into the earth. The superior man lives with the great mass: he veils his light, yet still shines.",
        obraz_en: "The light has sunk into the earth. The superior man lives with the great mass: he veils his light, yet still shines."
    },
    37: {
        nazev: "Ťia Žen / Rodina", nazev_en: "Jia Ren / The Family (The Clan)",
        rozsudek: "Je příznivá vytrvalost ženy. Když je v rodině řád, otec je otcem, syn synem, bratr bratrem, svět bude v harmonii.",
        rozsudek_en: "The perseverance of the woman furthers. When the family is in order, father is father, son is son, brother is brother — the world will be in harmony.",
        obraz: "Wind comes forth from fire. The superior man has substance in his words and duration in his way of life.",
        obraz_en: "Wind comes forth from fire. The superior man has substance in his words and duration in his way of life."
    },
    38: {
        nazev: "Kchuej / Protiklady", nazev_en: "Kui / Opposition",
        rozsudek: "V malých věcech štěstí. Oheň stoupá vzhůru, voda klesá dolů. Protiklady se střetávají, ale i v nedorozumění lze najít skrytý smysl.",
        rozsudek_en: "In small matters, good fortune. Fire burns upward, water flows downward. Opposites clash, but even in misunderstanding a hidden meaning can be found.",
        obraz: "Above, fire; below, the lake. The superior man retains his individuality amid the fellowship of men.",
        obraz_en: "Above, fire; below, the lake. The superior man retains his individuality amid the fellowship of men."
    },
    39: {
        nazev: "Ťien / Překážka", nazev_en: "Jian / Obstruction",
        rozsudek: "Jihozápad je příznivý, severovýchod nikoliv. Je čas vidět velkého muže. Překážky tě nutí zastavit a podívat se do svého nitra.",
        rozsudek_en: "The southwest furthers. The northeast does not further. It furthers one to see the great man. Obstacles force you to stop and look within yourself.",
        obraz: "Water on the mountain. The superior man turns his attention to himself and molds his character.",
        obraz_en: "Water on the mountain. The superior man turns his attention to himself and molds his character."
    },
    40: {
        nazev: "Ťie / Uvolnění", nazev_en: "Jie / Deliverance",
        rozsudek: "Jihozápad je příznivý. Pokud už není kam jít, návrat přináší štěstí. Napětí polevuje, bouře přešla, odpusť a posuň se dál.",
        rozsudek_en: "The southwest furthers. If there is no longer anything to be done, return brings good fortune. The tension eases, the storm has passed — forgive and move forward.",
        obraz: "Thunder and rain set in. The superior man pardons mistakes and forgives misdeeds.",
        obraz_en: "Thunder and rain set in. The superior man pardons mistakes and forgives misdeeds."
    },
    41: {
        nazev: "Sun / Úbytek", nazev_en: "Sun / Decrease",
        rozsudek: "Upřímnost přináší nejvyšší štěstí. Obětuj něco malého pro vyšší cíl. Méně věcí a myšlenek uvolní prostor pro opravdovou hloubku.",
        rozsudek_en: "Decrease combined with sincerity brings supreme good fortune. Sacrifice something small for a higher goal. Fewer things and thoughts open space for true depth.",
        obraz: "At the foot of the mountain, the lake. The superior man controls his anger and restrains his instincts.",
        obraz_en: "At the foot of the mountain, the lake. The superior man controls his anger and restrains his instincts."
    },
    42: {
        nazev: "I / Přírůstek", nazev_en: "Yi / Increase",
        rozsudek: "Příznivé někam směřovat. Je příznivé překročit velkou vodu. Doba hojnosti a růstu, štědrost přináší další požehnání.",
        rozsudek_en: "It furthers one to undertake something. It furthers one to cross the great water. A time of abundance and growth — generosity brings further blessings.",
        obraz: "Wind and thunder. The superior man, when he sees good, imitates it. When he has faults, he rids himself of them.",
        obraz_en: "Wind and thunder. The superior man, when he sees good, imitates it. When he has faults, he rids himself of them."
    },
    43: {
        nazev: "Kuaj / Průlom", nazev_en: "Guai / Break-through (Resoluteness)",
        rozsudek: "Je třeba rázně a otevřeně odhalit pravdu na dvoře krále. Varuj své město. Neuchyluj se ke zbraním. Cesta vpřed vede přes jasné rozhodnutí.",
        rozsudek_en: "The matter must be resolutely brought to the attention of the king's court. It must be announced truthfully. Notify your own city. It does not further to resort to arms. The way forward lies through a clear decision.",
        obraz: "The lake has risen up to heaven. The superior man dispenses riches downward and refrains from resting on his virtue.",
        obraz_en: "The lake has risen up to heaven. The superior man dispenses riches downward and refrains from resting on his virtue."
    },
    44: {
        nazev: "Kou / Setkání", nazev_en: "Gou / Coming to Meet",
        rozsudek: "Dívka je mocná. Není příznivé vzít si takovou dívku. Nečekané setkání temné energie, buď ostražitý před pokušeními a náhlými vlivy.",
        rozsudek_en: "The maiden is powerful. One should not marry such a maiden. An unexpected encounter with dark energy — be alert to temptations and sudden influences.",
        obraz: "Under heaven, wind. The prince acts in accordance with the commands of heaven, and proclaims them abroad.",
        obraz_en: "Under heaven, wind. The prince acts in accordance with the commands of heaven, and proclaims them abroad."
    },
    45: {
        nazev: "Cuej / Shromáždění", nazev_en: "Cui / Gathering Together (Massing)",
        rozsudek: "Úspěch. Král se blíží ke svému chrámu. Je příznivé vidět velkého muže. Společný cíl tvoří obrovskou sílu a požehnání.",
        rozsudek_en: "Success. The king approaches his temple. It furthers one to see the great man. A common goal creates enormous strength and blessing.",
        obraz: "Over the earth, the lake. The superior man renews his weapons in order to meet the unforeseen.",
        obraz_en: "Over the earth, the lake. The superior man renews his weapons in order to meet the unforeseen."
    },
    46: {
        nazev: "Šeng / Stoupání", nazev_en: "Sheng / Pushing Upward",
        rozsudek: "Nejvyšší úspěch. Je příznivé vidět velkého muže. Cesta na jih přináší štěstí. Jako strom rostoucí ze země, i ty plynule stoupáš k úspěchu.",
        rozsudek_en: "Supreme success. It furthers one to see the great man. Pushing southward furthers. Like a tree growing from the earth, you rise steadily toward success.",
        obraz: "Within the earth, wood grows. The superior man of devoted character heaps up small things in order to achieve something high and great.",
        obraz_en: "Within the earth, wood grows. The superior man of devoted character heaps up small things in order to achieve something high and great."
    },
    47: {
        nazev: "Kchun / Vyčerpání", nazev_en: "Kun / Oppression (Exhaustion)",
        rozsudek: "Úspěch pro pevného muže. Bez viny. Když mluvíš, nikdo nevěří. Zkouška charakteru v těžkých časech, tvou jedinou silou je tvůj postoj.",
        rozsudek_en: "Success for the strong man. No blame. When he has something to say, it is not believed. A test of character in hard times — your only strength is your attitude.",
        obraz: "There is no water in the lake. The superior man stakes his life on following his will.",
        obraz_en: "There is no water in the lake. The superior man stakes his life on following his will."
    },
    48: {
        nazev: "Ťing / Studna", nazev_en: "Jing / The Well",
        rozsudek: "Město může být přesunuto, ale studna ne. Pokud se provaz přetrhne dřív, než džbán dosáhne vody, je to neštěstí. Hluboký zdroj moudrosti tě nikdy neopustí.",
        rozsudek_en: "The town may be changed, but the well cannot be changed. If the rope does not go all the way, or the jug breaks, misfortune. The deep source of wisdom will never abandon you.",
        obraz: "Water over wood. The superior man encourages the people at their work and exhorts them to help one another.",
        obraz_en: "Water over wood. The superior man encourages the people at their work and exhorts them to help one another."
    },
    49: {
        nazev: "Ko / Revoluce", nazev_en: "Ge / Revolution (Molting)",
        rozsudek: "Lidé uvěří až v ten den, kdy se to stane. Nejvyšší úspěch, vytrvalost přináší odměnu. Staré musí shořet, aby mohlo vzniknout nové.",
        rozsudek_en: "On your own day you are believed. Supreme success. Perseverance furthers. The old must burn away so that the new can arise.",
        obraz: "Fire in the lake. The superior man sets the calendar in order and makes the seasons clear.",
        obraz_en: "Fire in the lake. The superior man sets the calendar in order and makes the seasons clear."
    },
    50: {
        nazev: "Ting / Kotel", nazev_en: "Ding / The Cauldron",
        rozsudek: "Nejvyšší úspěch. Proměna syrového na něco cenného. Tvé myšlenky a charakter se nyní taví a zjemňují k vyššímu duchovnímu účelu.",
        rozsudek_en: "Supreme success. The transformation of the raw into something precious. Your thoughts and character are now being refined toward a higher spiritual purpose.",
        obraz: "Fire over wood. The superior man consolidates his fate by making his position correct.",
        obraz_en: "Fire over wood. The superior man consolidates his fate by making his position correct."
    },
    51: {
        nazev: "Čen / Bouře (Hrom)", nazev_en: "Zhen / The Arousing (Shock, Thunder)",
        rozsudek: "Úspěch. Hrom přináší hrůzu, pak smích. Šok tě probouzí ze spánku, aby tě očistil od strachu a připravil na nový začátek.",
        rozsudek_en: "Success. Shock comes — oh, oh! Then laughter — ha, ha! The shock startles a hundred miles away. The jolt awakens you from sleep, cleansing you of fear and preparing you for a new beginning.",
        obraz: "Thunder repeated. The superior man is always filled with reverence at the manifestation of God; he sets his life in order and examines himself.",
        obraz_en: "Thunder repeated. The superior man is always filled with reverence at the manifestation of God; he sets his life in order and examines himself."
    },
    52: {
        nazev: "Ken / Hora", nazev_en: "Gen / Keeping Still (Mountain)",
        rozsudek: "Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame. Still your mind and find the absolute stillness of the center.",
        rozsudek_en: "Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame. Still your mind and find the absolute stillness of the center.",
        obraz: "Mountains standing close together. The superior man does not permit his thoughts to go beyond his situation.",
        obraz_en: "Mountains standing close together. The superior man does not permit his thoughts to go beyond his situation."
    },
    53: {
        nazev: "Ťien / Pozvolný pokrok", nazev_en: "Jian / Development (Gradual Progress)",
        rozsudek: "Provdání dívky přináší štěstí. Postupuj trpělivě a organicky jako pták, který postupně přeletuje z pobřeží až na vrcholky hor.",
        rozsudek_en: "The maiden is given in marriage. Good fortune. It furthers to be persevering. Advance patiently and organically like a bird that gradually moves from the shore to the mountain heights.",
        obraz: "On the mountain, a tree. The superior man abides in dignity and virtue, in order to improve the mores.",
        obraz_en: "On the mountain, a tree. The superior man abides in dignity and virtue, in order to improve the mores."
    },
    54: {
        nazev: "Kuej Mej / Provdaná dívka", nazev_en: "Gui Mei / The Marrying Maiden",
        rozsudek: "Podnikání nepřináší nic dobrého. Není výhodné nikam postupovat. Ocitl ses v situaci, kterou neovládáš. Musíš přijmout podřízenou roli.",
        rozsudek_en: "Undertakings bring misfortune. Nothing that would further. You find yourself in a situation you cannot control. You must accept a subordinate role.",
        obraz: "Thunder over the lake. The superior man understands the transitory in the light of the eternity of the end.",
        obraz_en: "Thunder over the lake. The superior man understands the transitory in the light of the eternity of the end."
    },
    55: {
        nazev: "Feng / Hojnost", nazev_en: "Feng / Abundance (Fullness)",
        rozsudek: "Úspěch. Král dosáhl hojnosti. Nebuď smutný, buď jako slunce v poledne. Raduj se z vrcholu, ale nezapomeň, že po poledni se stíny prodlužují.",
        rozsudek_en: "Success. The king attains abundance. Be not sad, be like the sun at midday. Rejoice at the peak, but remember that after noon the shadows lengthen.",
        obraz: "Both thunder and lightning come. The superior man decides lawsuits and carries out punishments.",
        obraz_en: "Both thunder and lightning come. The superior man decides lawsuits and carries out punishments."
    },
    56: {
        nazev: "Lü / Putování", nazev_en: "Lü / The Wanderer",
        rozsudek: "Úspěch v malém. Vytrvalost přináší štěstí poutníkovi. Jsi hostem, chovej se zdvořile, netlač na pilu a získáš si respekt cizích.",
        rozsudek_en: "Success through smallness. Perseverance brings good fortune to the wanderer. You are a guest — be courteous, do not push, and you will earn the respect of strangers.",
        obraz: "Fire on the mountain. The superior man is clear-minded and cautious in imposing penalties and protracts no lawsuits.",
        obraz_en: "Fire on the mountain. The superior man is clear-minded and cautious in imposing penalties and protracts no lawsuits."
    },
    57: {
        nazev: "Sun / Pronikání (Vítr)", nazev_en: "Xun / The Gentle (Wind, Wood)",
        rozsudek: "Úspěch v malých věcech. Je příznivé vidět velkého muže. Jako vítr, který neustále fouká stejným směrem, i ty vytrvalou jemností pronikneš vším.",
        rozsudek_en: "Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man. Like the wind that blows persistently in one direction, gentle perseverance penetrates all things.",
        obraz: "Winds following one upon the other. The superior man spreads his commands abroad and carries out his undertakings.",
        obraz_en: "Winds following one upon the other. The superior man spreads his commands abroad and carries out his undertakings."
    },
    58: {
        nazev: "Tuej / Radost (Jezero)", nazev_en: "Dui / The Joyous (Lake)",
        rozsudek: "Úspěch. Příznivé pro vytrvalost. Skutečná radost nevychází z povrchnosti, ale z vnitřní harmonie a sdílení dobré vůle s ostatními.",
        rozsudek_en: "Success. Perseverance is favorable. True joy does not come from superficiality, but from inner harmony and the sharing of goodwill with others.",
        obraz: "Lakes resting one on the other. The superior man joins with his friends for discussion and practice.",
        obraz_en: "Lakes resting one on the other. The superior man joins with his friends for discussion and practice."
    },
    59: {
        nazev: "Chuan / Rozptýlení", nazev_en: "Huan / Dispersion (Dissolution)",
        rozsudek: "Úspěch. Král se blíží k chrámu. Je příznivé překročit velkou vodu. Zatvrdlé překážky roztávají, ego se rozplývá a staré rány se hojí.",
        rozsudek_en: "Success. The king approaches his temple. It furthers to cross the great water. Hardened obstacles melt away, the ego dissolves and old wounds heal.",
        obraz: "The wind drives over the water. The kings of old sacrificed to the Lord and built temples.",
        obraz_en: "The wind drives over the water. The kings of old sacrificed to the Lord and built temples."
    },
    60: {
        nazev: "Ťie / Omezení", nazev_en: "Jie / Limitation",
        rozsudek: "Úspěch. Hořké omezení nelze snášet trvale. Vytvoř si hranice a pravidla, abys uchoval svou energii dřív, než ji zbytečně vyplýtváš.",
        rozsudek_en: "Success. Galling limitation must not be persevered in. Create limits and rules for yourself to preserve your energy before you squander it needlessly.",
        obraz: "Water over lake. The superior man creates number and measure and examines the nature of virtue and correct conduct.",
        obraz_en: "Water over lake. The superior man creates number and measure and examines the nature of virtue and correct conduct."
    },
    61: {
        nazev: "Čung Fu / Vnitřní pravda", nazev_en: "Zhong Fu / Inner Truth",
        rozsudek: "Prasátka a ryby. Štěstí. Je příznivé překročit velkou vodu. Kdo má čisté a prázdné srdce, dokáže svou pravdou pohnout i zvířaty a živly.",
        rozsudek_en: "Pigs and fishes. Good fortune. It furthers one to cross the great water. He whose heart is empty and clear can move even animals and the elements with his truth.",
        obraz: "Wind over lake. The superior man discusses criminal cases in order to delay executions.",
        obraz_en: "Wind over lake. The superior man discusses criminal cases in order to delay executions."
    },
    62: {
        nazev: "Siao Kuo / Převaha malého", nazev_en: "Xiao Guo / Preponderance of the Small",
        rozsudek: "Úspěch. Létající pták zanechává varovný křik. Neměl bys stoupat, ale klesat. Drž se při zemi a dělej malé věci s maximální péčí.",
        rozsudek_en: "Success. The flying bird leaves the message: it is not meet to strive upward, it is meet to tarry below. Great good fortune. Stay close to the ground and do small things with utmost care.",
        obraz: "Thunder on the mountain. The superior man in all his conduct gives preponderance to reverence.",
        obraz_en: "Thunder on the mountain. The superior man in all his conduct gives preponderance to reverence."
    },
    63: {
        nazev: "Ťi Ťi / Po dokončení", nazev_en: "Ji Ji / After Completion",
        rozsudek: "Úspěch v malých věcech. Na začátku štěstí, na konci zmatek. Dosažení cíle není konec, je to nejkřehčí okamžik, vyžadující dokonalou bdělost.",
        rozsudek_en: "Success in small matters. Perseverance furthers. At the beginning, good fortune. At the end, disorder. Reaching the goal is not the end — it is the most fragile moment, requiring perfect vigilance.",
        obraz: "Water over fire. The superior man takes thought of misfortune and arms himself against it in advance.",
        obraz_en: "Water over fire. The superior man takes thought of misfortune and arms himself against it in advance."
    },
    64: {
        nazev: "Wej Ťi / Před dokončením", nazev_en: "Wei Ji / Before Completion",
        rozsudek: "Úspěch. Ale pokud liška při překračování řeky namočí svůj ocas, nic nebude výhodné. Než uděláš poslední krok do nového cyklu, zvaž rizika.",
        rozsudek_en: "Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further. Before you take the last step into a new cycle, weigh the risks.",
        obraz: "Fire over water. The superior man is careful in the differentiation of things, so that each finds its place.",
        obraz_en: "Fire over water. The superior man is careful in the differentiation of things, so that each finds its place."
    }
};
