// ORACOOLIO — I-Ching texty. Pole nazev/rozsudek/obraz (+_en) beze změny;
// klasika(_en) = klasický text (Legge, volné dílo), vyklad(_en) = 5 odstavců (souhrn, 3× detail, doporučení),
// cary[1..6] (+7 = všechny čáry u hexagramů 1 a 2) = totéž pro pohyblivé čáry.
const ichingTexts = {
    "1": {
        "nazev": "Čchien / Tvořivost (Nebe)",
        "nazev_en": "Qian / The Creative (Heaven)",
        "rozsudek": "Nejvyšší úspěch. Podporuje vytrvalost. Tvořivá síla je na vrcholu, jednejte s jasným záměrem a silou draka.",
        "rozsudek_en": "Supreme success. Perseverance furthers. Creative power is at its peak — act with clear intent and the strength of the dragon.",
        "obraz": "Pohyb nebes je mocný. Ušlechtilý člověk se proto činí silným a neúnavným.",
        "obraz_en": "The movement of heaven is full of power. Thus the superior man makes himself strong and untiring.",
        "klasika": "Čchien (představuje) to, co je veliké a původní, pronikavé, prospěšné, správné a pevné.",
        "klasika_en": "Khien (represents) what is great and originating, penetrating, advantageous, correct and firm.",
        "vyklad": [
            "Šest pevných čar představuje čistou tvořivou sílu nebe. Hexagram ohlašuje čas, kdy máš k dispozici energii, vizi i vytrvalost, aby se záměr proměnil ve skutečnost. Úspěch je zde možný, ale vyrůstá z toho, že jdeš za tím, co je správné, a ne jen za tím, co je rychlé.",
            "Nebe se pohybuje bez ustání a právě v tomto rytmu leží síla hexagramu. Nejde o jednorázový výbuch, ale o stálý tlak, který krok za krokem dává tvar tomu, co dosud existovalo jen jako myšlenka. Takový proces má stupně – šest čar odpovídá cestě od skrytého zárodku až po vrchol – a každý z nich připravuje ten další. Kdo se pokusí přeskočit stupeň, ztrácí oporu.",
            "V práci se otevírá prostor pro vedení, zakládání a rozhodování. Okolí v tobě vidí jistotu a ochotně se k ní přidává, pokud je jasný směr. Ve vztazích platí totéž: tvá přímost a stálost přitahují, jakmile je doprovází ohleduplnost. Tvořivá síla bez naslouchání se snadno mění v tlak.",
            "Slabinou tohoto hexagramu je přebytek. Kdo zůstává příliš dlouho nahoře, ztrácí kontakt s tím, co je pod ním, a pýcha přivede pád dřív než jakákoli vnější překážka. Pozor na netrpělivost, tvrdohlavost a přesvědčení, že vše lze vynutit silou. Skutečná velikost se pozná podle schopnosti vládnout vlastní moci.",
            "Jednej, ale ve správný čas a ve shodě se svými hodnotami. Stanov jasný cíl, rozděl ho na kroky a udrž rytmus, i když nadšení kolísá. Večer se zeptej, zda tvé konání slouží i druhým – to je zkouška, zda tvořivá síla zůstává čistá."
        ],
        "vyklad_en": [
            "Six unbroken lines stand for the pure creative force of heaven. The hexagram marks a time when energy, vision and persistence are available to turn an intention into reality. Success is possible, but it grows from pursuing what is right rather than merely what is fast.",
            "Heaven moves without pause, and that unceasing rhythm is the source of this hexagram's strength. It is not a single burst but a steady pressure that gives form, step by step, to what has so far existed only as an idea. Such a process has stages – the six lines map the path from hidden seed to summit – and each stage prepares the next. Skip one, and you lose your footing.",
            "At work, space opens for leading, founding and deciding. People sense your certainty and gladly gather around it, provided the direction is clear. In relationships the same holds: your directness and constancy attract when paired with consideration. Creative force without listening easily turns into pressure.",
            "The weakness of this hexagram is excess. Whoever stays at the top too long loses contact with what lies beneath, and pride brings a fall sooner than any outside obstacle. Watch for impatience, stubbornness and the belief that everything can be forced. Real greatness shows in how well you govern your own power.",
            "Act, but at the right moment and in line with your values. Set a clear goal, break it into steps and keep the rhythm when enthusiasm dips. In the evening, ask whether your action also serves others – that is the test of whether creative force stays clean."
        ],
        "cary": {
            "1": {
                "klasika": "V první (nejnižší) čáře, nepřerušené, (vidíme jeho předmět jako) draka skrytého (v hlubině). Není čas pro aktivní jednání.",
                "klasika_en": "In the first (or lowest) line, undivided, (we see its subject as) the dragon lying hid (in the deep). It is not the time for active doing.",
                "vyklad": [
                    "Drak je ještě ukryt v hlubině. Síla existuje, ale její čas ještě nenastal. Čára radí neprosazovat se a nespouštět akci předčasně.",
                    "Počátek je potenciál bez tvaru, jako semeno pod zemí, které už roste, ale nikdo to nevidí. Skrytost tu není slabost. Je to fáze sbírání sil a utváření povahy, v níž se rozhoduje, jaký strom z toho jednou vyroste.",
                    "Okolí tvou hodnotu zatím nevidí a uznání nepřichází. Snaha se prosadit by jen vyčerpala. Tichá příprava, učení a budování základů jsou užitečná práce, i když není vidět.",
                    "Hrozí netrpělivost a předčasné odhalení záměrů. Stejně nebezpečný je opačný extrém: zůstat skrytý navždy. Zkouška zní, zda dokážeš zůstat věrný sobě i bez publika.",
                    "Teď nespouštěj, připravuj. Zdokonaluj dovednosti, ověř plán a o velkých záměrech mlč. Až se objeví první jasný signál, vystup."
                ],
                "vyklad_en": [
                    "The dragon is still hidden in the depths. The strength exists, but its time has not yet come. The line advises against pushing forward or launching action too early.",
                    "A beginning is potential without form, like a seed underground that is already growing though no one sees it. Hiddenness here is not weakness. It is a phase of gathering strength and shaping character, in which it is decided what kind of tree this will become.",
                    "Those around you do not yet see your worth and recognition is not coming. Trying to force your way into view would only drain you. Quiet preparation, learning and building foundations are useful work even when unseen.",
                    "Impatience and revealing your plans too soon are the dangers. Equally dangerous is the opposite extreme: staying hidden forever. The test is whether you can stay true to yourself without an audience.",
                    "Do not launch yet; prepare. Sharpen your skills, test the plan and keep big intentions to yourself. When the first clear signal appears, step forward."
                ]
            },
            "2": {
                "klasika": "Ve druhé čáře, nepřerušené, (vidíme jeho předmět jako) draka objevujícího se na poli. Bude prospěšné setkat se s velkým mužem.",
                "klasika_en": "In the second line, undivided, (we see its subject as) the dragon appearing in the field. It will be advantageous to meet with the great man.",
                "vyklad": [
                    "Drak se objevuje na poli. Skrytá síla poprvé vystupuje na povrch a přináší užitek tomu, kdo se setká s člověkem vyzrálým a velkým.",
                    "Tvořivá schopnost se tu začíná projevovat v konkrétním prostředí. Člověk ještě nemá vedoucí postavení a stojí mezi sobě rovnými, ale odlišuje ho vážnost záměru, spolehlivost a vliv, který působí bez námahy. Autorita tu nevzniká nárokem, nýbrž příkladem.",
                    "Tvé schopnosti se začínají být vidět. Hledej učitele, mentora nebo partnera, který tě posune dál; stejně tak se můžeš stát tím, ke komu se druzí obracejí. Spolupráce se tu daří víc než sólový výkon.",
                    "Úskalím je předčasné sebevědomí: ukázat víc, než unese základ, nebo se spokojit s prvním uznáním. Pole je teprve začátek, ne vrchol, a kdo na něm ustrne, nevyroste.",
                    "Ukaž se tam, kde můžeš být užitečný, a vyhledej společnost těch, od nichž se můžeš učit. Pracuj viditelně, ale beze spěchu a bez předvádění."
                ],
                "vyklad_en": [
                    "The dragon appears in the field. Hidden strength surfaces for the first time and benefits whoever meets a mature, great person.",
                    "Creative ability begins to show itself in a concrete setting. The person holds no commanding position yet and stands among equals, but is set apart by seriousness of purpose, reliability and an influence that works without effort. Authority here arises from example, not from claim.",
                    "Your abilities are becoming visible. Seek a teacher, mentor or partner who can move you on; just as well, you may become the one others turn to. Cooperation works better than solo performance here.",
                    "The pitfall is premature self-confidence: showing more than the foundation can bear, or settling for the first recognition. The field is a beginning, not a summit, and whoever stalls there does not grow.",
                    "Show yourself where you can be useful and seek the company of those you can learn from. Work visibly, but without haste and without showing off."
                ]
            },
            "3": {
                "klasika": "Ve třetí čáře, nepřerušené, (vidíme jeho předmět jako) vznešeného muže činného a bdělého po celý den a večer stále opatrného a znepokojeného. (Postavení je) nebezpečné, ale nedojde k chybě.",
                "klasika_en": "In the third line, undivided, (we see its subject as) the superior man active and vigilant all the day, and in the evening still careful and apprehensive. (The position is) dangerous, but there will be no mistake.",
                "vyklad": [
                    "Celý den jsi činný a večer je mysl stále ve střehu. Je to nebezpečné místo, ale k chybě nedojde, pokud zůstaneš bdělý.",
                    "Třetí místo je prahem mezi nízkým a vysokým postavením. Sféra vlivu se otevírá, roste pozornost okolí a s ní i tlak úkolů. Vnitřní síla je dostatečná, ale vnější nároky rostou rychleji, takže večer místo odpočinku přicházejí plány a obavy.",
                    "V práci se hromadí odpovědnost a očekávání. Kolem tebe se shromažďuje mnoho lidí a snadno tě strhnou do svého proudu. Ve vztazích hrozí, že na ně nezbývá čas ani soustředění.",
                    "Hlavním rizikem je ztráta integrity pod tíhou ambice a popularity. K tomu přistupuje vyčerpání a unáhlená rozhodnutí v únavě. Skutečná velikost se pokušením nezmenšuje, ale vyžaduje ostražitost.",
                    "Zůstaň v kontaktu s tím, co čas skutečně žádá, a nepřijímej víc, než zvládneš. Večer si udělej pravidelnou revizi dne, řekni ne tam, kde ztrácíš směr, a dopřej si skutečný odpočinek."
                ],
                "vyklad_en": [
                    "You are active all day long and by evening your mind is still on guard. It is a dangerous place, but no error will occur as long as you stay alert.",
                    "The third place is the threshold between low and high standing. A sphere of influence opens, attention grows and with it the pressure of tasks. Inner strength is sufficient, but outer demands grow faster, so in the evening plans and worries press in instead of rest.",
                    "At work, responsibility and expectations pile up. Many people gather around you and can easily sweep you into their current. In relationships the risk is that no time or focus is left for them.",
                    "The main risk is losing integrity under the weight of ambition and popularity. Exhaustion and hasty decisions made when tired add to it. True greatness is not diminished by temptation, but it demands vigilance.",
                    "Stay in touch with what the time really asks, and do not accept more than you can handle. Review your day each evening, say no where you are losing direction, and allow yourself real rest."
                ]
            },
            "4": {
                "klasika": "Ve čtvrté čáře, nepřerušené, (vidíme jeho předmět jako draka hledícího) jako by chtěl vyskočit, ale stále v hlubině. Nedojde k chybě.",
                "klasika_en": "In the fourth line, undivided, (we see its subject as the dragon looking) as if he were leaping up, but still in the deep. There will be no mistake.",
                "vyklad": [
                    "Drak se chystá vyskočit, ale zůstává ještě v hlubině. Je to bod volby: vzlétnout, nebo se stáhnout. Obě cesty jsou bez chyby, pokud zůstaneš věrný sobě.",
                    "Je to přechodné místo, kde vstupuje svobodná volba. Člověk může vystoupit do výšin a hrát ve světě významnou roli, nebo ustoupit a dál se vnitřně rozvíjet. Neexistuje tu obecný zákon; správná cesta se pozná podle toho, že odpovídá povaze.",
                    "V praxi jde o rozhodnutí o směru kariéry či života: přijmout vyšší roli, nebo zůstat ve své hloubce? Obě varianty poctivě promysli, a to podle sebe, ne podle očekávání okolí.",
                    "Rizikem je lavírování: dlouho váhat a nevybrat vůbec, nebo volit pod cizím tlakem. Rozhodnutí, které není tvé, bude vždy nést tíhu.",
                    "Zvaž, co je pro tebe skutečně přirozené, a pak jednej důsledně. Ať volíš vzlet, nebo ústup, drž se jedné linie a nezpochybňuj ji při první pochybnosti."
                ],
                "vyklad_en": [
                    "The dragon is about to leap but is still in the deep. This is a point of choice: rise, or withdraw. Both paths are free of error if you stay true to yourself.",
                    "It is a place of transition where free choice enters. A person can soar to the heights and play an important role in the world, or withdraw and keep developing inwardly. There is no general law here; the right way is recognised by the fact that it fits your nature.",
                    "In practice this is a decision about the direction of a career or life: accept a higher role, or stay in your depth? Think both options through honestly, by your own measure and not by the expectations of others.",
                    "The risk is hovering: hesitating so long that you never choose, or choosing under someone else's pressure. A decision that is not yours will always carry weight.",
                    "Weigh what is truly natural for you, then act consistently. Whether you choose flight or retreat, hold one line and do not abandon it at the first doubt."
                ]
            },
            "5": {
                "klasika": "V páté čáře, nepřerušené, (vidíme jeho předmět jako) draka na křídlech na nebi. Bude prospěšné setkat se s velkým mužem.",
                "klasika_en": "In the fifth line, undivided, (we see its subject as) the dragon on the wing in the sky. It will be advantageous to meet with the great man.",
                "vyklad": [
                    "Drak letí po nebi. Je to vrchol tvořivé síly: vliv je viditelný a přirozeně přitahuje. Setkání s takovým člověkem je přínosem.",
                    "Velký člověk dosáhl místa, kde jeho dílo působí v celém okolí. Co je si příbuzné, se k sobě přitahuje: vliv nevzniká tlakem, ale souznění. Kdo je ve shodě s tím, co je správné, přivádí podporu sám od sebe.",
                    "V práci je to čas realizace, vedení a odpovědného rozhodování s plnou podporou okolí. Ve vztazích se projevuje velkorysost a schopnost inspirovat. Využij svůj vliv ve prospěch širšího celku.",
                    "Pozor, aby moc nezačala sloužit jen tobě. Stojíš blízko vrcholu, od něhož už vede cesta jen dolů, a právě tam se rodí přehnané sebevědomí.",
                    "Jednej nyní odvážně a veřejně. Využij příznivý čas k dokončení toho, na čem záleží, a ujisti se, že výsledek slouží víc lidem než jen tobě."
                ],
                "vyklad_en": [
                    "The dragon flies in the sky. This is the peak of creative power: influence is visible and attracts naturally. Meeting such a person is a benefit.",
                    "The great person has reached the place where his work acts across the whole surroundings. What is akin is drawn together: influence arises not from pressure but from resonance. Whoever is in accord with what is right draws support without seeking it.",
                    "At work this is a time of realisation, leadership and responsible decisions with the full support of those around you. In relationships generosity and the ability to inspire come through. Use your influence for the benefit of the wider whole.",
                    "Take care that power does not begin to serve only you. You stand near a summit from which the only way leads down, and that is exactly where inflated self-confidence is born.",
                    "Act boldly and openly now. Use the favourable time to complete what matters, and make sure the result serves more people than just you."
                ]
            },
            "6": {
                "klasika": "V šesté (nejvyšší) čáře, nepřerušené, (vidíme jeho předmět jako) draka překračujícího náležité meze. Bude příležitost k lítosti.",
                "klasika_en": "In the sixth (or topmost) line, undivided, (we see its subject as) the dragon exceeding the proper limits. There will be occasion for repentance.",
                "vyklad": [
                    "Drak vystoupal příliš vysoko. Kdo překročí své meze, bude toho litovat.",
                    "Člověk, který stoupá tak vysoko, že ztratí kontakt s ostatními, se izoluje, a to vede k neúspěchu. Čára varuje před titánskými ambicemi, které přesahují vlastní sílu. Luk nelze napínat věčně.",
                    "V práci jde o přepětí, přehnané nároky a ztrátu týmu; ve vztazích o odcizení, protože druzí už na tvůj svět nedosáhnou. Sebejistota se mění v nepružnost.",
                    "Rizikem je pád z výšky: čím vyšší pozice, tím tvrdší dopad. Hlavními nepřáteli jsou pýcha a neochota ustoupit.",
                    "Povol tětivu. Uvolni tlak, přenes část odpovědnosti na druhé a vrať se k pokoře. Ústup včas je moudrost, ne porážka."
                ],
                "vyklad_en": [
                    "The dragon has climbed too high. Whoever oversteps his limits will regret it.",
                    "A person who climbs so high that he loses touch with others becomes isolated, and that leads to failure. The line warns against titanic ambitions that exceed one's strength. A bow cannot stay drawn forever.",
                    "At work this means overextension, excessive demands and losing your team; in relationships, estrangement, because others can no longer reach your world. Self-assurance turns into rigidity.",
                    "The risk is a fall from height: the higher the position, the harder the landing. The main enemies are pride and unwillingness to step back.",
                    "Loosen the string. Release pressure, hand part of the responsibility to others and return to humility. Withdrawing in time is wisdom, not defeat."
                ]
            },
            "7": {
                "klasika": "(Čáry tohoto hexagramu jsou všechny silné a nepřerušené, jak vyplývá z) použití čísla devět. Kdyby se zástup draků (takto se objevujících) zbavil svých hlav, bylo by štěstí.",
                "klasika_en": "(The lines of this hexagram are all strong and undivided, as appears from) the use of the number nine. If the host of dragons (thus appearing) were to divest themselves of their heads, there would be good fortune.",
                "vyklad": [
                    "Hejno draků beze hlav. Když se pohybují všechny čáry, tvrdost se proměňuje v poddajnost, a to přináší štěstí.",
                    "Hexagram se ve všech šesti čarách mění v Přijímající (Zemi). Síla draků zůstává, ale hlavy jsou skryté: rozhodnost se spojuje s mírností. Je to vedení bez potřeby vynikat.",
                    "V praxi jde o sílu, která nevyžaduje, aby byla vidět: vést tak, aby lidé měli pocit, že jdou sami. Ve spolupráci to znamená dávat prostor a sdílet zásluhy.",
                    "Hrozí, že se vlastní síla uplatní jako tlak nebo se z ní stane okázalost. Stejně nebezpečné je popírat vlastní sílu pod záminkou skromnosti.",
                    "Drž pevné rozhodnutí, ale uplatňuj je jemně. Nech druhé vyniknout a nesnaž se mít poslední slovo."
                ],
                "vyklad_en": [
                    "A host of dragons without heads. When every line moves, hardness turns into yielding, and that brings good fortune.",
                    "In all six lines the hexagram changes into the Receptive (Earth). The dragons' strength remains, but their heads are hidden: decisiveness joins with gentleness. This is leadership without the need to stand out.",
                    "In practice this is strength that does not need to be seen: leading so that people feel they are going on their own. In cooperation it means giving room and sharing credit.",
                    "The danger is that your strength is applied as pressure or turns into display. Equally risky is denying your strength under the pretext of modesty.",
                    "Hold a firm decision, but apply it gently. Let others shine and do not try to have the last word."
                ]
            }
        }
    },
    "2": {
        "nazev": "Kchun / Přijetí (Země)",
        "nazev_en": "Kun / The Receptive (Earth)",
        "rozsudek": "Velký úspěch, je-li podporován vytrvalostí. Je čas naslouchat, přijímat a nechat věci k sobě volně plynout.",
        "rozsudek_en": "Great success through perseverance. It is time to listen, receive, and allow things to flow to you freely.",
        "obraz": "Země je rozlehlá a nese vše. Ušlechtilý člověk svou velkorysostí a ctností nese vnější svět.",
        "obraz_en": "The earth is vast and bears all things. The superior man, through his generosity and virtue, carries the outer world.",
        "klasika": "Kchun (představuje) to, co je veliké a původní, pronikavé, prospěšné, správné a mající pevnost klisny. Když se vznešený muž (zde míněný) musí k nějakému pohybu odhodlat, půjde-li první, zabloudí; půjde-li za vedením, nalezne svého (správného) pána. Prospěšnost se ukáže v tom, že získá přátele na jihozápadě a ztratí přátele na severovýchodě. Spočine-li ve správnosti a pevnosti, bude štěstí.",
        "klasika_en": "Khwan (represents) what is great and originating, penetrating, advantageous, correct and having the firmness of a mare. When the superior man (here intended) has to make any movement, if he take the initiative, he will go astray; if he follow, he will find his (proper) lord. The advantageousness will be seen in his getting friends in the south-west, and losing friends in the north-east. If he rest in correctness and firmness, there will be good fortune.",
        "vyklad": [
            "Šest přerušených čar představuje čistou přijímající sílu země. Hexagram ohlašuje čas, kdy se daří tomu, kdo následuje, naslouchá a nese, nikoli tomu, kdo vede a prosazuje. Úspěch přichází skrze oddanost, vytrvalost a souznění s tím, co už je nastoleno.",
            "Země nese všechno bez výjimky, dobré i zlé. Je dokonalým doplňkem nebe, ne jeho protikladem: tvořivé záměry se skrze ni teprve stávají skutečností. Obraz klisny spojuje sílu a rychlost koně s mírností krávy a vyjadřuje vytrvalost, která nevyžaduje vedoucí roli. Široká povaha je tu schopnost podpírat a snášet lidi i věci.",
            "V práci jsi v roli pomocníka a realizátora: úkolem není vést, ale nechat se vést a dotáhnout. Přátele a spolupracovníky potřebuješ tam, kde je třeba pracovat; čas plánování a vyhodnocení naopak vyžaduje samotu a nestrannost. Ve vztazích se uplatní trpělivost, péče a schopnost naslouchat.",
            "Pokud se přijímající postaví jako rovný vedle tvořivého a začne soupeřit, vzniká boj, v němž trpí obě strany. Pokud se oddanost zvrhne v bezvolnost, ztrácíš směr. Ujisti se, že následuješ něco, co stojí za následování.",
            "Nejednej z vlastní vůle, ale ze situace. Uč se, co je právě požadováno, a pak to pečlivě dokonči. Pro práci si vyhledej spolehlivé společníky, pro rozhodování samotu. Klidná vytrvalost přináší štěstí."
        ],
        "vyklad_en": [
            "Six broken lines stand for the pure receptive force of earth. The hexagram marks a time when what prospers is following, listening and carrying, not leading and pushing. Success comes through devotion, perseverance and harmony with what has already been set in motion.",
            "Earth carries everything without exception, good and bad alike. It is the perfect complement of heaven, not its opposite: creative intentions become real only through it. The image of the mare joins a horse's strength and speed with a cow's gentleness and expresses perseverance that does not need a leading role. Breadth of character here means the ability to support and bear with people and things.",
            "At work you are in the role of helper and implementer: the task is not to lead but to be led and to bring things to completion. You need friends and colleagues where work must be done; the time of planning and review, by contrast, calls for solitude and objectivity. In relationships patience, care and the ability to listen count.",
            "If the receptive sets itself up as an equal beside the creative and begins to compete, a struggle arises in which both sides suffer. If devotion decays into passivity, you lose direction. Make sure you follow something worth following.",
            "Do not act from your own will but from the situation. Learn what is being asked, then carry it out carefully. For the work, seek reliable companions; for the decisions, solitude. Quiet perseverance brings good fortune."
        ],
        "cary": {
            "1": {
                "klasika": "V první čáře, přerušené, (vidíme jeho předmět) šlapat po jinovatce. Pevný led přijde (brzy).",
                "klasika_en": "In the first line, divided, (we see its subject) treading on hoarfrost. The strong ice will come (by and by).",
                "vyklad": [
                    "Šlapeš po jinovatce: pevný led přijde. Sotva znatelný příznak oznamuje, kam se věc ubírá.",
                    "První náznak chladu je počátek procesu, který se řídí neúprosným zákonem. Rozklad, jehož první signály člověk přehlédne, postupně sílí až do konečné podoby. V životě však lze včas zasáhnout, pokud si prvních znamení všimneš.",
                    "V práci jde o drobné nesrovnalosti, které se kupí, v osobním životě o nezdravé vzorce, zdánlivě bezvýznamné. Všímej si trendů, ne jen jednotlivostí.",
                    "Rizikem je ignorovat první signály s tím, že to přejde. Opačné nebezpečí je panika z nepodstatného šumu.",
                    "Zastav změnu, dokud je malá. Oprav drobnou chybu, řekni nepříjemnou věc hned a uprav směr, dokud to nic nestojí."
                ],
                "vyklad_en": [
                    "You tread on hoarfrost: solid ice is not far off. A barely noticeable sign announces where things are heading.",
                    "The first hint of cold is the beginning of a process that follows an immutable law. Decay whose first signals are overlooked gradually grows until it reaches its final form. In life, however, you can intervene in time if you notice the first signs.",
                    "At work this means small inconsistencies that accumulate; in personal life, unhealthy patterns that seem insignificant. Watch trends, not only single events.",
                    "The risk is ignoring the first signals on the grounds that it will pass. The opposite danger is panic over insignificant noise.",
                    "Stop the change while it is small. Fix the minor error, say the uncomfortable thing now and correct course while it costs nothing."
                ]
            },
            "2": {
                "klasika": "Druhá čára, přerušená, (ukazuje vlastnost) být přímý, čtvercový a velký. (Její působení) bude bez opakovaného úsilí ve všem prospěšné.",
                "klasika_en": "The second line, divided, (shows the attribute of) being straight, square, and great. (Its operation), without repeated efforts, will be in every respect advantageous.",
                "vyklad": [
                    "Přímé, čtvercové, velké. Bez záměru a bez námahy se vše daří, protože jednáš v souladu s přirozeným řádem.",
                    "Čtverec je symbolem země a vyrůstá z přímky tvořivého. Přijímající se přizpůsobuje tvořivému: nic neubírá, nic nepřidává. Proto nepotřebuje vlastní účel ani úsilí a přesto dospívá ke správnému výsledku. Vrcholem moudrosti je jednat tak samozřejmě, jak jedná příroda.",
                    "V práci se spoléháš na dobrý systém, poctivost a pravidelnost spíš než na improvizaci. Ve vztazích působí přirozená přímost a spolehlivost víc než slova.",
                    "Rizikem je přehnaná snaha vše vymyslet a řídit. Účelovost a kalkulace by narušily samozřejmý chod věcí.",
                    "Důvěřuj správnému základu a jednej jednoduše. Nepřidávej zbytečné kroky, drž se podstaty a nech věcem čas."
                ],
                "vyklad_en": [
                    "Straight, square, great. Without purpose and without effort everything succeeds, because you act in accord with the natural order.",
                    "The square is the symbol of earth and grows out of the straight line of the creative. The receptive adapts to the creative: it takes nothing away and adds nothing. It therefore needs no purpose or effort of its own and yet arrives at the right result. The height of wisdom is to act as self-evidently as nature does.",
                    "At work you rely on a sound system, honesty and regularity rather than improvisation. In relationships natural directness and reliability speak louder than words.",
                    "The risk is excessive effort to plan and control everything. Calculation and scheming would disturb the natural course of things.",
                    "Trust the right foundation and act simply. Add no unnecessary steps, hold to the essence and give things time."
                ]
            },
            "3": {
                "klasika": "Třetí čára, přerušená, (ukazuje jeho předmět) jak drží svou dokonalost na uzdě, ale pevně ji zachovává. Bude-li třeba, aby vstoupil do královy služby, nebude si nárokovat úspěch, ale přivede věci k dobrému konci.",
                "klasika_en": "The third line, divided, (shows its subject) keeping his excellence under restraint, but firmly maintaining it. If he should have occasion to engage in the king's service, though he will not claim the success (for himself), he will bring affairs to a good issue.",
                "vyklad": [
                    "Skryté linie a vytrvalost. Ocitneš-li se ve službě, nehledej slávu, ale dovedení do konce.",
                    "Skromnost umožňuje zrát v klidu. Moudrý rád přenechává slávu druhým a nepřipisuje si hotové věci; dokončuje dílo tak, aby nesl ovoce do budoucna.",
                    "V týmu jsi ten, kdo táhne věc k dobrému konci, aniž by o sobě mluvil. Zásluhy sdílíš a dlouhodobý efekt je pro tebe důležitější než viditelnost.",
                    "Rizikem je přehnané ztlumení sebe sama, kdy nikdo neví o tvém přínosu. Skromnost není totéž co neviditelnost.",
                    "Pracuj kvalitně a nech výsledky mluvit. Dokonči, co jsi začal, a neusiluj o pozornost víc, než dílo potřebuje."
                ],
                "vyklad_en": [
                    "Hidden lines, and the ability to persevere. If you find yourself in service, seek not renown but completion.",
                    "Modesty lets you mature undisturbed. The wise person gladly leaves fame to others and does not credit himself with finished things; he completes the work so that it bears fruit for the future.",
                    "In a team you are the one who carries the matter to a good end without talking about yourself. You share credit, and long-term effect matters more to you than visibility.",
                    "The risk is muting yourself so far that no one knows your contribution. Modesty is not the same as invisibility.",
                    "Work with quality and let results speak. Finish what you have started and do not seek attention beyond what the work needs."
                ]
            },
            "4": {
                "klasika": "Čtvrtá čára, přerušená, (ukazuje symbol) svázaného vaku. Nebude důvod ke kritice ani k chvále.",
                "klasika_en": "The fourth line, divided, (shows the symbol of) a sack tied up. There will be no ground for blame or for praise.",
                "vyklad": [
                    "Zavázaný vak: žádná chyba, žádná chvála. Čas vyžaduje mlčení a uzavřenost.",
                    "Temný prvek se při pohybu otevírá a v klidu zavírá; nyní je třeba zavřít. Jakákoli výraznost přivolává buď nepřátele, nebo falešné uznání. Proto je vhodné zachovat odstup.",
                    "V práci se vyplatí diskrétnost: neprosazovat se v citlivých sporech a nekomentovat. Ve vztazích nepoužívat otevřenost jako zbraň.",
                    "Uzavřenost se může zvrhnout v odmítání komunikace. Mlčení má smysl jen dočasně.",
                    "Drž se zpátky, chraň své úmysly a vyhni se zbytečným střetům. Až se čas změní, vak opět otevři."
                ],
                "vyklad_en": [
                    "A tied-up sack: no blame, no praise. The time calls for silence and reserve.",
                    "The dark element opens when it moves and closes when at rest; now it is time to close. Any prominence invites either enemies or misplaced recognition. It is therefore wise to keep your distance.",
                    "At work discretion pays: do not push yourself forward in sensitive disputes and do not comment. In relationships, do not use openness as a weapon.",
                    "Reserve can decay into refusing to communicate. Silence makes sense only temporarily.",
                    "Hold back, protect your intentions and avoid needless clashes. When the time changes, open the sack again."
                ]
            },
            "5": {
                "klasika": "Pátá čára, přerušená, (ukazuje) žlutý spodní oděv. Bude veliké štěstí.",
                "klasika_en": "The fifth line, divided, (shows) the yellow lower garment. There will be great good fortune.",
                "vyklad": [
                    "Žlutý spodní oděv přináší nejvyšší štěstí. Opravdovost a jemnost, které se neprojevují navenek, ale působí zevnitř.",
                    "Žlutá je barva země a středu, symbol spolehlivého a pravého. Spodní oděv je nenápadně zdobený, což vyjadřuje aristokratickou zdrženlivost. Kdo zastává významné, ale ne samostatné místo, uspěje díky mimořádné diskrétnosti.",
                    "V práci uspěješ nejlépe v roli, kde máš důvěru, ale nemusíš být vidět. Ve vztazích přitahuje klidná autenticita, ne vystupování.",
                    "Touha ukázat vlastní kvalitu přímo může vše pokazit. Opačné nebezpečí je skromnost, která se neopírá o skutečnou hodnotu.",
                    "Nech svou kvalitu působit nepřímo. Buď spolehlivý, jemný a nenápadný a nech výsledky, aby promluvily za tebe."
                ],
                "vyklad_en": [
                    "A yellow lower garment brings supreme good fortune. Genuineness and refinement that do not show outwardly but work from within.",
                    "Yellow is the colour of earth and of the centre, the symbol of what is reliable and genuine. The lower garment is inconspicuously decorated, expressing aristocratic reserve. Whoever holds a prominent but not independent position succeeds through exceptional discretion.",
                    "At work you succeed best in a role where you are trusted but need not be seen. In relationships quiet authenticity attracts, not performance.",
                    "The wish to display your own quality directly can spoil everything. The opposite danger is modesty that rests on no real worth.",
                    "Let your quality work indirectly. Be reliable, gentle and unobtrusive, and let results speak for you."
                ]
            },
            "6": {
                "klasika": "Šestá čára, přerušená, (ukazuje) draky bojující na pustině. Jejich krev je purpurová a žlutá.",
                "klasika_en": "The sixth line, divided, (shows) dragons fighting in the wild. Their blood is purple and yellow.",
                "vyklad": [
                    "Draci bojují na pustině a jejich krev je purpurová a žlutá. Překročení role vyvolává boj, v němž trpí obě strany.",
                    "Na vrcholu má temný prvek ustoupit světlému. Pokusí-li se držet pozici, na kterou nemá nárok, a místo služby vládnout, vyvolá hněv silných. Střet poškodí obě primární síly.",
                    "V práci může jít o mocenský spor s nadřízeným nebo o předčasné převzetí vedení. Ve vztazích o boj o roli, v němž nikdo nevyhraje.",
                    "Rizikem je eskalace sporu až do bodu, kdy jsou škody oboustranné. Pýcha oslabených je nejnebezpečnější.",
                    "Neusiluj o pozici, která ti nenáleží. Včas ustup, vrať se do role, v níž můžeš být užitečný, a hledej spolupráci místo soupeření."
                ],
                "vyklad_en": [
                    "Dragons fight in the wild and their blood is purple and yellow. Overstepping your role provokes a struggle in which both sides suffer.",
                    "At the top the dark element should yield to the light. If it tries to hold a position to which it has no claim and to rule instead of serve, it draws down the anger of the strong. The clash injures both primal powers.",
                    "At work this may be a power struggle with a superior or taking over leadership too early. In relationships, a fight over roles in which no one wins.",
                    "The risk is escalating the conflict to the point where damage is mutual. The pride of the weakened is the most dangerous.",
                    "Do not strive for a position that is not yours. Step back in time, return to the role where you can be useful and seek cooperation instead of rivalry."
                ]
            },
            "7": {
                "klasika": "(Čáry tohoto hexagramu jsou všechny slabé a přerušené, jak vyplývá z) použití čísla šest. Budou-li (ti, kdo jsou tak znázorněni) trvale správní a pevní, vznikne prospěch.",
                "klasika_en": "(The lines of this hexagram are all weak and divided, as appears from) the use of the number six. If those (who are thus represented) be perpetually correct and firm, advantage will arise.",
                "vyklad": [
                    "Trvalá vytrvalost přináší užitek. Přijímající se obrací v Tvořivé a drží se toho, co je správné.",
                    "Když se pohybují všechny čáry, Země se mění v Nebe. Pokrok to ještě není, ale není to ani ústup. Schopnost vytrvat se rodí z věrnosti tomu, co je správné.",
                    "V praxi jde o dlouhodobou stálost: zachovat směr, i když se neobjevuje nic nového. V práci znamená stabilitu, ve vztazích věrnost.",
                    "Rizikem je zaměnit stabilitu za strnulost, nebo ji ztratit netrpělivým hledáním nového.",
                    "Drž kurs. Nedělej revoluci, rozvíjej, co funguje, a nech čas pracovat pro sebe."
                ],
                "vyklad_en": [
                    "Lasting perseverance brings benefit. The Receptive turns into the Creative and holds fast to what is right.",
                    "When all lines move, Earth changes into Heaven. This is not yet progress, but neither is it retreat. The ability to endure is born from faithfulness to what is right.",
                    "In practice this is long-term constancy: keeping your direction even when nothing new appears. At work it means stability, in relationships loyalty.",
                    "The risk is mistaking stability for rigidity, or losing it through impatient searching for something new.",
                    "Hold your course. Do not make a revolution; develop what works and let time work for you."
                ]
            }
        }
    },
    "3": {
        "nazev": "Čun / Počáteční obtíže",
        "nazev_en": "Zhun / Difficulty at the Beginning",
        "rozsudek": "Nejvyšší úspěch v pohybu přes překážky. Nejednejte zbrkle, buďte jako rostlinka deroucí se zmrzlou půdou.",
        "rozsudek_en": "Supreme success in moving through obstacles. Do not act rashly — be like a seedling pushing through frozen ground.",
        "obraz": "Mraky a hrom: Obraz počátečních obtíží. Ušlechtilý člověk vnáší řád do zmatku.",
        "obraz_en": "Clouds and thunder: the image of Difficulty at the Beginning. The superior man brings order out of confusion.",
        "klasika": "Čun (naznačuje, že v případě, který předpokládá) bude velký pokrok a úspěch a prospěch přijde ze správnosti a pevnosti. (Ale) žádný pohyb vpřed se nemá podnikat (lehkomyslně). Bude prospěšné ustanovit údělná knížata.",
        "klasika_en": "Kun (indicates that in the case which it presupposes) there will be great progress and success, and the advantage will come from being correct and firm. (But) any movement in advance should not be (lightly) undertaken. There will be advantage in appointing feudal princes.",
        "vyklad": [
            "Hrom pod vodou: nový začátek, v němž je všechno v pohybu, ale nic ještě nemá tvar. Hexagram slibuje velký úspěch, avšak za cenu zmatku a překážek, které k zrodu patří. Daří se tomu, kdo vydrží, nehoní se a nenechá se ve zmatku osamotit.",
            "Obtíže tu nevznikají ze slabosti, ale z přebytku: všechno, co usiluje o podobu, se tlačí najednou. Dolní trigram hromu míří vzhůru, horní trigram vody tlačí dolů, a z tohoto napětí vzniká bouře, po níž se uleví. Je to jako první klíčení: výhonek naráží na zem, a právě tím sílí. Chaos je zde ještě bez forem, ale řád je v něm už ukryt.",
            "V práci jde o rozjezd projektu, firmy nebo nové role. Neslibuj si rychlé výsledky a neprosazuj nic silou; místo toho si vybuduj spolehlivé spolupracovníky a oporu. Ve vztazích platí totéž: nově vznikající pouto potřebuje čas a nesnese tlak ani příliš brzké závazky.",
            "Rizikem je sólová zbrklost, kdy se člověk snaží zvládnout všechno sám a rozptýlí síly. Druhým rizikem je rezignace: zaseknout se v prvních překážkách a vzdát to dřív, než se věc stihne uspořádat. Třetím je přijmout pomoc z nesprávné strany a ztratit tím svobodu rozhodování.",
            "Nic nepodnikej bezhlavě, ale ani nečekej pasivně. Roztřiď úkoly jako zamotané nitě: oddělit, co je podstatné, a spojit, co patří k sobě. Najdi pomocníky, drž se jednoho cíle a dovol si malé kroky. Bouře odezní a ty budeš stát na pevnějším základě."
        ],
        "vyklad_en": [
            "Thunder beneath water: a new beginning in which everything is in motion but nothing yet has form. The hexagram promises great success, but at the price of the confusion and obstacles that belong to birth. It favours whoever endures, does not rush and does not let himself be left alone in the chaos.",
            "Difficulty here does not stem from weakness but from excess: everything striving for shape presses forward at once. The lower trigram of thunder rises, the upper trigram of water presses down, and from that tension comes a storm that brings relief. It is like first sprouting: the shoot strikes the earth and grows stronger for it. The chaos is still formless, but order is already hidden within it.",
            "At work this is the launch of a project, a company or a new role. Do not expect fast results and do not force anything; instead build reliable collaborators and support. In relationships the same holds: a new bond needs time and tolerates neither pressure nor premature commitments.",
            "The risk is solo haste, trying to handle everything yourself and scattering your strength. A second risk is resignation: getting stuck at the first obstacles and giving up before the matter has had time to settle. A third is accepting help from the wrong quarter and losing freedom of decision.",
            "Do not act headlong, but do not wait passively either. Sort the tasks like tangled threads: separate what is essential and join what belongs together. Find helpers, hold one goal and allow small steps. The storm will pass and you will stand on firmer ground."
        ],
        "cary": {
            "1": {
                "klasika": "První čára, nepřerušená, ukazuje obtíž (jeho předmětu) při postupu vpřed. Bude pro něj prospěšné zůstat správný a pevný; prospěšné (také) být ustanoven údělným vládcem.",
                "klasika_en": "The first line, undivided, shows the difficulty (its subject has) in advancing. It will be advantageous for him to abide correct and firm; advantageous (also) to be made a feudal ruler.",
                "vyklad": [
                    "Váhání a překážka hned na začátku. Síla tu je, ale cesta vpřed ještě není volná. Vytrvej a hledej pomocníky.",
                    "První čára je silná a stojí v dolním trigramu pohybu, takže tě to táhne vpřed. Nad ní je však trigram nebezpečí a jeho spodní čára je slabá, takže odezva shora chybí. Vzniká tak napětí mezi chutí jednat a nedostatečnou oporou. Správnou odpovědí není tlak, ale zastavení a rozmyšlení.",
                    "V práci narážíš hned při startu na překážky, které nelze obejít silou. Místo toho potřebuješ dobré lidi, kteří se k tobě přidají; přitahuje je skromnost, ne vyvyšování. Ve vztazích se vyplatí pokora a ochota naslouchat.",
                    "Rizikem je arogance a přesvědčení, že si poradíš sám. Druhým rizikem je zbrklý krok, který by vyčerpal sílu dřív, než nastane pravá chvíle.",
                    "Zastav se, rozmysli cíl a ten pak nepouštěj z očí. Vyhledej spolehlivé spolupracovníky a nabídni jim podíl na díle. Drž se správné cesty, i když postupuješ pomalu."
                ],
                "vyklad_en": [
                    "Hesitation and hindrance right at the start. The strength is there, but the road ahead is not yet clear. Persevere and look for helpers.",
                    "The first line is strong and stands in the lower trigram of movement, so you are pulled forward. Above it, however, lies the trigram of danger whose lowest line is weak, so no answer comes from above. This creates tension between the wish to act and a lack of support. The right response is not pressure but pausing and thinking.",
                    "At work you meet obstacles at the very start that cannot be passed by force. Instead you need good people who join you; humility attracts them, not self-importance. In relationships humility and willingness to listen pay off.",
                    "The risk is arrogance and the belief that you can manage alone. The other risk is a hasty step that would exhaust your strength before the right moment.",
                    "Stop, think through the goal and then keep it in view. Seek reliable collaborators and offer them a share in the work. Keep to the right path even if you advance slowly."
                ]
            },
            "2": {
                "klasika": "Druhá čára, přerušená, ukazuje (jeho předmět) sklíčený a nucený vrátit se; (dokonce) i koně jejího vozu (také) jako by couvali. (Ale) není napadána lupičem, nýbrž tím, kdo ji chce za ženu. Mladá dáma si udržuje pevnou správnost a odmítá spojení. Po deseti letech se spojí a bude mít děti.",
                "klasika_en": "The second line, divided, shows (its subject) distressed and obliged to return; (even) the horses of her chariot (also) seem to be retreating. (But) not by a spoiler (is she assailed), but by one who seeks her to be his wife. The young lady maintains her firm correctness, and declines a union. After ten years she will be united, and have children.",
                "vyklad": [
                    "Překážky se kupí a spřežení se rozpadá. Zdánlivé nebezpečí se ukáže být nabídkou pomoci, jenže z nesprávné strany. Vytrvej a počkej na svůj čas.",
                    "Náhle se objeví někdo s koňmi a vozem a první dojem je hrozba, ale on nechce škodit, nýbrž spojit se. Čára ukazuje, že ne každá pomoc je ta pravá. Čas, který je k dozrání potřeba, je dlouhý, jako deset let u starého výkladu, a teprve potom se věci vrátí do normálu a přijde spojení, které ti náleží.",
                    "V práci se může objevit lákavá nabídka partnerství, financování nebo zkratky, která ti sice uleví, ale svazuje. Ve vztazích jde o to neuzavírat závazky ze strachu nebo z vyčerpání. Svoboda rozhodnutí má větší cenu než rychlá úleva.",
                    "Rizikem je přijmout nevhodnou pomoc a platit za ni dlouhodobě. Opačným rizikem je odmítnout i pomoc, která je opravdu na místě, jen proto, že přišla v zmatku.",
                    "Zachovej si odstup a nepodpisuj nic pod tlakem. Počkej, až se situace uklidní a ukáže, kdo je skutečný spojenec. Věrnost vlastnímu směru se vyplatí."
                ],
                "vyklad_en": [
                    "Difficulties pile up and the team falls apart. What looks like a threat turns out to be an offer of help, but from the wrong quarter. Persevere and wait for your time.",
                    "Suddenly someone appears with horses and a carriage, and the first impression is of a threat, but he does not mean harm; he wants to join. The line shows that not every help is the right help. The time needed for ripening is long, like the ten years of the old reading, and only then do things return to normal and the union that belongs to you arrives.",
                    "At work an attractive offer of partnership, funding or a shortcut may appear that relieves you but binds you. In relationships the point is not to make commitments out of fear or exhaustion. Freedom of decision is worth more than quick relief.",
                    "The risk is accepting unsuitable help and paying for it over the long term. The opposite risk is rejecting even help that is truly right, simply because it arrived amid confusion.",
                    "Keep your distance and sign nothing under pressure. Wait until the situation settles and shows who the real ally is. Loyalty to your own direction pays off."
                ]
            },
            "3": {
                "klasika": "Třetí čára, přerušená, ukazuje někoho, kdo pronásleduje jelena bez (vedení) hajného a jen se ocitne uprostřed lesa. Vznešený muž, znalý skrytých rizik, považuje za lepší od honu upustit. Kdyby šel dál, litoval by.",
                "klasika_en": "The third line, divided, shows one following the deer without (the guidance of) the forester, and only finding himself in the midst of the forest. The superior man, acquainted with the secret risks, thinks it better to give up the chase. If he went forward, he would regret it.",
                "vyklad": [
                    "Lovíš jelena bez hajného a končíš ztracen v lese. Zkušený člověk pozná znamení doby a raději od honu upustí.",
                    "Bez průvodce se v cizím terénu neobejdeš. Pokus se vyprostit z obtíží bez vedení a bez znalosti situace vede jen hlouběji do zmatku. Osud se nedá ošálit: předčasné úsilí bez potřebné opory končí neúspěchem a ostudou. Proto je moudré vzdát se přání dřív, než by selhání vynutilo ústup.",
                    "V práci jde o vstup do neznámého oboru nebo projektu bez zkušeného mentora a bez dat. Ve vztazích o to nedotlačit něco, co zatím není zralé. Zastavit se je tu výkon, ne prohra.",
                    "Rizikem je ješitnost, která nedovolí přiznat, že ti chybí vedení. Druhým rizikem je zbytečné pokračování jen proto, že jsi už tolik investoval.",
                    "Zastav hon, najdi hajného: mentora, expertní radu, spolehlivá data. Pokud to nejde, přenes úsilí jinam a vrať se, až budeš mít oporu."
                ],
                "vyklad_en": [
                    "You hunt the deer without the forester and end up lost in the forest. An experienced person reads the signs of the time and prefers to give up the chase.",
                    "In unfamiliar terrain you cannot do without a guide. Trying to get out of difficulties without guidance and without knowing the situation leads only deeper into confusion. Fate cannot be fooled: premature effort without the necessary support ends in failure and disgrace. It is therefore wise to renounce a wish before failure forces a retreat.",
                    "At work this is entering an unknown field or project without an experienced mentor and without data. In relationships it means not forcing something that is not yet ripe. Stopping here is a performance, not a loss.",
                    "The risk is vanity that will not admit you lack guidance. The other risk is pointless persistence just because you have already invested so much.",
                    "Stop the hunt and find the forester: a mentor, expert advice, reliable data. If that is impossible, shift the effort elsewhere and return when you have support."
                ]
            },
            "4": {
                "klasika": "Čtvrtá čára, přerušená, ukazuje (jeho předmět jako dámu), jejíž koně vozu vypadají, že couvají. Hledá však (pomoc) toho, kdo ji hledá za ženu. Postup vpřed bude šťastný; všechno dopadne příznivě.",
                "klasika_en": "The fourth line, divided, shows (its subject as a lady), the horses of whose chariot appear in retreat. She seeks, however, (the help of) him who seeks her to be his wife. Advance will be fortunate; all will turn out advantageously.",
                "vyklad": [
                    "Spřežení se zastavilo, ale otevírá se možnost spojení. Chopit se jí je správné. Vyjít vstříc pomoci přináší štěstí.",
                    "Jsi v situaci, kdy je třeba jednat, ale chybí ti síla. Zároveň se nabízí příležitost navázat spojení. Oproti předchozí čáře je tu pomoc ze správné strany. Udělat první krok, i s jistou sebezapřením, je znak vnitřní jasnosti. Přijmout pomoc v obtížné chvíli není ostuda.",
                    "V práci jde o oslovení partnera, klienta nebo spolupracovníka, který se hodí k tvému záměru. Ve vztazích jde o schopnost říct si o oporu a vyjít druhému vstříc. Pomoc, kterou přijmeš, ti rozšíří dosah.",
                    "Rizikem je falešná hrdost nebo falešná zdrženlivost, které brání prvnímu kroku. Druhým rizikem je zaměnit správnou příležitost za pouhou úlevu.",
                    "Udělej první krok. Navaž kontakt, požádej o spolupráci a nabídni protislužbu. Když je helper správný, všechno se začne skládat."
                ],
                "vyklad_en": [
                    "The team has stalled, but a possibility of union opens. Seizing it is right. Going to meet help brings good fortune.",
                    "You are in a situation where action is needed but strength is lacking. At the same time an opportunity to make a connection offers itself. Unlike the earlier line, this help comes from the right quarter. Taking the first step, even at some cost to pride, is a sign of inner clarity. Accepting help in a difficult moment is no disgrace.",
                    "At work this means approaching a partner, client or colleague who fits your aim. In relationships it is the ability to ask for support and to meet the other halfway. The help you accept extends your reach.",
                    "The risk is false pride or false reserve that prevents the first step. The second risk is mistaking the right opportunity for mere relief.",
                    "Take the first step. Make contact, ask for cooperation and offer something in return. When the helper is right, everything starts to fall into place."
                ]
            },
            "5": {
                "klasika": "Pátá čára, nepřerušená, ukazuje obtíže v cestě tomu, aby (její předmět) rozdával bohaté milosti, které by se od něj daly očekávat. S pevností a správností bude štěstí v malých věcech; (i) s nimi bude ve velkých věcech zlo.",
                "klasika_en": "The fifth line, undivided, shows the difficulties in the way of (its subject's) dispensing the rich favours that might be expected from him. With firmness and correctness there will be good fortune in small things; (even) with them in great things there will be evil.",
                "vyklad": [
                    "Dobré úmysly se nedaří uskutečnit, protože ostatní je překrucují. Menší pevnost přináší štěstí, velké vynucování neštěstí.",
                    "Jsi na místě, odkud bys měl rozdávat a vést, ale důvěra okolí ještě není dost silná. Cokoliv uděláš, druzí zkreslí nebo zneužijí. Velké dílo proto ještě nelze dokončit, protože úspěch je možný jen tam, kde panuje obecná důvěra. Daří se věrná, nenápadná práce po malých krocích.",
                    "V práci je to čas budování reputace drobnými, splněnými sliby. Velké reformy a výrazné gesto by se teď obrátily proti tobě. Ve vztazích se důvěra obnovuje jednoduchou spolehlivostí, ne velkými slovy.",
                    "Rizikem je dotlačit velký záměr silou. Také hrozí rozmrzelost z nepochopení a stažení se z role.",
                    "Postupuj krok za krokem. Zaměř se na to, co lze dokončit a ukázat. Důvěra roste z konkrétních výsledků a pak se velké věci otevřou samy."
                ],
                "vyklad_en": [
                    "Good intentions cannot take shape because others distort them. A little firmness brings good fortune; forcing great things brings misfortune.",
                    "You stand where you should give and lead, but the trust of those around you is not yet strong enough. Whatever you do, others will distort or misuse. The great work therefore cannot yet be completed, since success is possible only where general trust exists. Faithful, unobtrusive work in small steps succeeds.",
                    "At work this is a time to build reputation through small promises kept. Big reforms and bold gestures would now turn against you. In relationships trust is restored by simple reliability, not by big words.",
                    "The risk is forcing a large undertaking through. Also threatening are bitterness at being misunderstood and withdrawing from your role.",
                    "Proceed step by step. Focus on what can be finished and shown. Trust grows from concrete results, and then the big things open by themselves."
                ]
            },
            "6": {
                "klasika": "Nejvyšší čára, přerušená, ukazuje (jeho předmět), jehož koně vozu jsou nuceni couvat, a on pláče krvavými slzami v proudech.",
                "klasika_en": "The topmost line, divided, shows (its subject) with the horses of his chariot obliged to retreat, and weeping tears of blood in streams.",
                "vyklad": [
                    "Spřežení se rozpadá a slzy tečou. Počáteční obtíže jsou pro někoho příliš velké. Nesmíš se v tom nechat uvíznout.",
                    "Některým lidem se těžký počátek stane pastí: zaseknou se, nenajdou cestu ven, složí ruce a boj vzdají. Taková rezignace je ze všeho nejsmutnější. Čára varuje před pocitem, že už nic nepomůže, který paradoxně uzavírá východisko, jež by se jinak ukázalo.",
                    "V práci jde o vyhoření a pocit, že projekt nikam nevede; ve vztazích o vyčerpání a stažení. Je důležité rozlišit, zda už nejsi na konci sil, nebo jen na konci představy o tom, jak věc půjde.",
                    "Rizikem je setrvání v beznaději a odmítání pomoci. Zhoršit to může také izolace, kdy nikdo nezná tvůj stav.",
                    "Neuvízni. Řekni nahlas, že už nezvládáš, a požádej o pomoc nebo o změnu přístupu. Změň strategii místo toho, abys jen tlačil dál. Bolest je signál, ne rozsudek."
                ],
                "vyklad_en": [
                    "The team falls apart and tears flow. The initial difficulties are too great for some. You must not let yourself get stuck in them.",
                    "For some people a difficult beginning becomes a trap: they get stuck, find no way out, fold their hands and give up the struggle. Such resignation is the saddest of all things. The line warns against the feeling that nothing helps any more, which paradoxically closes the way out that would otherwise appear.",
                    "At work this is burnout and the sense that the project goes nowhere; in relationships, exhaustion and withdrawal. It matters to tell whether you have reached the end of your strength or only the end of your idea of how things should go.",
                    "The risk is staying in hopelessness and refusing help. Isolation, where nobody knows your condition, can make it worse.",
                    "Do not get stuck. Say aloud that you cannot cope any longer and ask for help or for a change of approach. Change strategy instead of just pushing on. Pain is a signal, not a verdict."
                ]
            }
        }
    },
    "4": {
        "nazev": "Meng / Nerozvážnost mládí",
        "nazev_en": "Meng / Youthful Folly",
        "rozsudek": "Nerozvážnost má úspěch. Ne já hledám mladého blázna, mladý blázen hledá mě. Při první otázce odpovím, při druhé a třetí je to obtěžování.",
        "rozsudek_en": "Youthful folly has success. It is not I who seek the young fool, but the young fool who seeks me. At a first oracle I inform him, but if he asks two or three times it is importunity.",
        "obraz": "Pramen tryskající zpod hory. Ušlechtilý člověk pěstuje svůj charakter důkladností ve všem, co dělá.",
        "obraz_en": "A spring wells up at the foot of the mountain. The superior man fosters his character by thoroughness in all that he does.",
        "klasika": "Meng (naznačuje, že v případě, který předpokládá) bude pokrok a úspěch. Já nehledám mladého a nezkušeného, ale on přichází a hledá mě. Když ukáže (upřímnost, která značí) první obrat k věštění, poučím ho. Použije-li to podruhé a potřetí, je to obtížné; a obtížné neučím. Bude prospěšné být pevný a správný.",
        "klasika_en": "Mang (indicates that in the case which it presupposes) there will be progress and success. I do not (go and) seek the youthful and inexperienced, but he comes and seeks me. When he shows (the sincerity that marks) the first recourse to divination, I instruct him. If he apply a second and third time, that is troublesome; and I do not instruct the troublesome. There will be advantage in being firm and correct.",
        "vyklad": [
            "Pramen u paty hory: nezkušenost, která nemusí být na překážku, pokud se spojí s ochotou se učit. Hexagram slibuje úspěch tomu, kdo si uvědomí, co neumí, a obrátí se ke správnému učiteli. Platí pro žáka i pro učitele.",
            "Voda pod horou neví, kam poteče, ale svým stálým tokem vyplní prohlubně v cestě a dostane se dál. Stejně roste i charakter: důkladností, která nic nepřeskakuje a postupně zaplňuje mezery. Nezkušenost zde není vada, pokud je spojená se skromností a zájmem. Učitel čeká, až bude vyhledán, protože jen tak může poučení přijít v pravý čas a ve správné formě.",
            "V práci jde o učení nové role, oboru nebo nástroje. Vyhledej zkušeného průvodce a ptej se přesně; jeho odpověď ber jako klíč k rozhodnutí, ne jako začátek dalšího zpochybňování. Ve vztazích jde o schopnost přiznat, že něčemu nerozumíš, a o trpělivost, když sám učíš.",
            "Rizikem je zbytečné opakované ptaní z nedůvěry, které učitele unavuje a znehodnocuje odpověď. Druhým rizikem je zamotání do iluzí a představ, které s realitou nesouvisejí. A třetím je přehnaná vlastní jistota, která pomoc odmítá.",
            "Vyber si jednoho dobrého učitele a nech se vést. Ptej se jasně, odpověď zpracuj a pak jednej. Postupuj důkladně a po jednom kroku, nic nepřeskakuj. Kdo učí, ať je trpělivý, ale nenutí se k poučování tam, kde o ně nikdo nestojí."
        ],
        "vyklad_en": [
            "A spring at the foot of the mountain: inexperience that need not be an obstacle if joined with willingness to learn. The hexagram promises success to the one who realises what he does not know and turns to the right teacher. It applies to pupil and teacher alike.",
            "Water beneath a mountain does not know where it will flow, but with steady movement it fills the hollows in its path and gets further. Character grows the same way: through thoroughness that skips nothing and gradually fills the gaps. Inexperience here is no fault if it comes with modesty and interest. The teacher waits to be sought, because only then can instruction arrive at the right time and in the right form.",
            "At work this is learning a new role, field or tool. Find an experienced guide and ask precisely; treat the answer as a key to the decision, not as the start of more doubting. In relationships it means admitting you do not understand something, and being patient when you are the one teaching.",
            "One risk is repeated distrustful questioning that tires the teacher and devalues the answer. Another is getting tangled in illusions and ideas unrelated to reality. A third is excessive certainty that refuses help.",
            "Choose one good teacher and let yourself be guided. Ask clearly, process the answer and then act. Proceed thoroughly, one step at a time, skipping nothing. Teachers should be patient but should not press instruction where nobody asks for it."
        ],
        "cary": {
            "1": {
                "klasika": "První čára, přerušená, (se týká) rozptýlení nevědomosti. Bude prospěšné použít k tomu trest a sejmout okovy (z mysli). Ale pokračování tímto způsobem (trestu) dá příležitost k lítosti.",
                "klasika_en": "The first line, divided, (has respect to) the dispelling of ignorance. It will be advantageous to use punishment (for that purpose), and to remove the shackles (from the mind). But going on in that way (of punishment) will give occasion for regret.",
                "vyklad": [
                    "Začátek výchovy je řád. Je třeba ukázat vážnost věci, ale nesmí se z toho stát dril.",
                    "Mládí si zprvu bere všechno lehce a hravě. Určitá míra kázně a vlastního sebeovládání je užitečná, protože kdo si se životem jen hraje, nedospěje k ničemu. Okovy nevědomosti je třeba sejmout, ne jen utáhnout. Pokud se disciplína změní v nekonečný dril, ponižuje a lame schopnosti.",
                    "V práci jde o zaškolení: jasná pravidla, standardy a odpovědnost jsou na začátku nutné. Ve vztazích a v rodině platí totéž: hranice dávají jistotu. Důležité je sledovat, kdy je čas pravidla uvolnit.",
                    "Rizikem je trvalá přísnost, která zabíjí zvědavost a chuť. Opačným rizikem je žádná disciplína a rozmazlené ponechání bez struktury.",
                    "Stanov jasná pravidla a vysvětli důvod. Hlídej, aby sloužila rozvoji, ne kontrole. Až se základ ustálí, uvolni."
                ],
                "vyklad_en": [
                    "The beginning of education is order. The seriousness of the matter must be shown, but it must not turn into drill.",
                    "Youth at first takes everything lightly and playfully. A certain measure of discipline and self-control is useful, because whoever merely plays with life amounts to nothing. The shackles of ignorance must be removed, not just tightened. If discipline turns into endless drill, it humiliates and cripples abilities.",
                    "At work this is onboarding: clear rules, standards and accountability are necessary at the start. In relationships and family the same applies: boundaries give security. It is important to watch when it is time to loosen the rules.",
                    "The risk is permanent strictness that kills curiosity and appetite. The opposite risk is no discipline at all, spoiled and without structure.",
                    "Set clear rules and explain the reason. Make sure they serve development, not control. Once the foundation holds, loosen up."
                ]
            },
            "2": {
                "klasika": "Druhá čára, nepřerušená, (ukazuje jeho předmět) jak prokazuje shovívavost nevědomým, v čemž bude štěstí; a připouští (dokonce) dobrotu žen, což bude také šťastné. (Lze ho popsat také jako) syna schopného (nést břemeno) své rodiny.",
                "klasika_en": "The second line, undivided, (shows its subject) exercising forbearance with the ignorant, in which there will be good fortune; and admitting (even) the goodness of women, which will also be fortunate. (He may be described also as) a son able to (sustain the burden of) his family.",
                "vyklad": [
                    "Snášet nevědomé v dobrotě přináší štěstí. Ten, kdo má vnitřní sílu a nese odpovědnost, zvládne i pošetilosti druhých.",
                    "Čára zobrazuje člověka bez vnější moci, ale s dostatečnou silou mysli. Jeho nadřazenost není povýšenost, ale schopnost snášet nedostatky druhých s laskavostí. Stejný postoj platí k těm, kdo mají slabší postavení: chápat je a uznat. Takové spojení vnitřní síly a vnější zdrženlivosti je předpokladem k vedení většího celku.",
                    "V práci jsi oporou týmu, který se učí. Trpělivost k chybám není slabost, ale investice. Ve vztazích a v rodině jsi ten, kdo drží domácnost pohromadě bez hlučného velení.",
                    "Rizikem je vyčerpání z neustálé shovívavosti a ztráta vlastních hranic. Také hrozí pocit, že jen ty neseš břemeno.",
                    "Zůstaň vlídný, ale přerozděl odpovědnost. Uznej přínos druhých a nech je růst. Vnitřní jistota ti dovolí vést bez nátlaku."
                ],
                "vyklad_en": [
                    "Bearing with fools in kindness brings good fortune. Whoever has inner strength and carries responsibility can handle the follies of others.",
                    "The line shows a person with no outward power but with enough strength of mind. His superiority is not arrogance but the ability to bear others' shortcomings with kindness. The same attitude applies to those in a weaker position: to understand and acknowledge them. This combination of inner strength with outer reserve is the precondition for leading a larger whole.",
                    "At work you are the support of a team that is learning. Patience with mistakes is not weakness but investment. In relationships and family you are the one who holds the household together without loud command.",
                    "The risk is exhaustion from constant forbearance and loss of your own boundaries. A sense that only you carry the burden can also arise.",
                    "Stay kind, but redistribute responsibility. Acknowledge others' contribution and let them grow. Inner certainty allows you to lead without pressure."
                ]
            },
            "3": {
                "klasika": "Třetí čára, přerušená, (jako by říkala), že by se člověk neměl oženit se ženou, jejímž emblémem by mohla být, neboť ta, když spatří bohatého muže, neudrží se před ním a v žádném ohledu z ní nevzejde prospěch.",
                "klasika_en": "The third line, divided, (seems to say) that one should not marry a woman whose emblem it might be, for that, when she sees a man of wealth, she will not keep her person from him, and in no wise will advantage come from her.",
                "vyklad": [
                    "Kdo se sám nabízí a ztrácí vlastní tvář, nic nezíská. Nekritické napodobování silné osobnosti není cesta.",
                    "Slabý a nezkušený člověk, který se snaží vystoupat, snadno ztratí svou individualitu, když servilně kopíruje silnější osobnost vyššího postavení. Podobá se to tomu, jako by se někdo vrhal na prvního, kdo působí mocně. Taková podřízenost škodí oběma stranám a nemá se podporovat. Je nedůstojné nabízet se a z přijetí takové nabídky dobré nevzejde.",
                    "V práci jde o pokušení slepě následovat vlivného nadřízeného, trend nebo guru a obětovat vlastní názor. Ve vztazích jde o závislost a hledání uznání za každou cenu.",
                    "Rizikem je ztráta důstojnosti a vlastní hodnoty, které by se po čase obrátily proti tobě. Také hrozí využívání ze strany silnější strany.",
                    "Zachovej vlastní hlas. Uč se od silných, ale nekopíruj je, a nenabízej se tam, kde se o tebe nikdo nezajímá. Počkej, až o tebe bude zájem z úcty, ne z výhody."
                ],
                "vyklad_en": [
                    "Whoever offers himself and loses his own face gains nothing. Uncritical imitation of a strong personality is not the way.",
                    "A weak, inexperienced person striving to rise easily loses his individuality by slavishly copying a stronger personality of higher standing. It resembles throwing oneself at the first person who seems powerful. Such servility harms both sides and should not be encouraged. It is undignified to offer oneself, and no good comes of accepting such an offer.",
                    "At work this is the temptation to follow an influential superior, trend or guru blindly and sacrifice your own view. In relationships it is dependency and seeking recognition at any price.",
                    "The risk is losing dignity and self-worth, which would later turn against you. There is also exploitation by the stronger side.",
                    "Keep your own voice. Learn from the strong but do not copy them, and do not offer yourself where nobody is interested in you. Wait until interest comes from respect, not from advantage."
                ]
            },
            "4": {
                "klasika": "Čtvrtá čára, přerušená, (ukazuje jeho předmět jako by byl) spoután řetězy nevědomosti. Bude příležitost k lítosti.",
                "klasika_en": "The fourth line, divided, (shows its subject as if) bound in chains of ignorance. There will be occasion for regret.",
                "vyklad": [
                    "Zamotání do prázdných představ vede k ponížení. Čím tvrdošíjněji se držíš nereálných fantazií, tím jistější je pád.",
                    "Pro nezkušenost je nejbeznadějnější zapředení do prázdných iluzí. Učitel, který se s takovým zamotáním setká, často nemá jinou možnost než nechat žáka chvíli samotného a nešetřit ho před důsledky. Bývá to jediný způsob záchrany, i když je nepříjemný.",
                    "V práci jde o lpění na plánu, který realita už vyvrátila, nebo na představě, že projekt vyjde sám. Ve vztazích o idealizaci, která nechce vidět fakta.",
                    "Rizikem je sebeklam a izolace od lidí, kteří by ti dali zpětnou vazbu. Druhým rizikem je okolí, které tě kvůli tvrdohlavosti přestane opravovat.",
                    "Konfrontuj své představy s daty a s lidmi, kterým věříš. Vyzkoušej to nejmenším možným krokem a přijmi výsledek. Ponížení z drobné chyby je levnější než velký pád."
                ],
                "vyklad_en": [
                    "Entanglement in empty imaginings leads to humiliation. The more obstinately you cling to unreal fantasies, the surer the fall.",
                    "For inexperience, the most hopeless thing is to be caught up in empty illusions. A teacher who meets such entanglement often has no other choice than to leave the pupil alone for a while and not spare him the consequences. It is frequently the only means of rescue, though unpleasant.",
                    "At work this is clinging to a plan that reality has already refuted, or to the idea that the project will succeed on its own. In relationships it is idealisation that refuses to see facts.",
                    "The risk is self-deception and isolation from people who would give you feedback. Another risk is that those around you stop correcting you because of your stubbornness.",
                    "Confront your notions with data and with people you trust. Test them with the smallest possible step and accept the result. The humiliation of a small mistake is cheaper than a big fall."
                ]
            },
            "5": {
                "klasika": "Pátá čára, přerušená, ukazuje jeho předmět jako prostého mladíka bez zkušeností. Bude štěstí.",
                "klasika_en": "The fifth line, divided, shows its subject as a simple lad without experience. There will be good fortune.",
                "vyklad": [
                    "Dětská prostota přináší štěstí. Kdo se učí bez povýšenosti a podřídí se učiteli, bude mu pomoženo.",
                    "Nezkušený člověk, který hledá poučení otevřeně a bez nároků, je na správné cestě. Chybí mu domýšlivost, a proto je jeho mysl přístupná. Tato otevřenost je nejlepší předpoklad k dobrému učení.",
                    "V práci znamená, že se nestydíš za základní otázky a nechráníš si image. Ve vztazích a v osobním rozvoji jde o schopnost začít znovu bez předstírání.",
                    "Rizikem je zaměnit prostotu za naivitu a bez ověření uvěřit komukoli. Opačně: stud za nevědomost, který zabrání zeptat se.",
                    "Ptej se otevřeně a upřímně. Vybírej učitele pečlivě, ale jednou, když jsi vybral, mu důvěřuj. Otevřenost je tvá síla."
                ],
                "vyklad_en": [
                    "Childlike simplicity brings good fortune. Whoever learns without arrogance and submits to a teacher will be helped.",
                    "An inexperienced person who seeks instruction openly and without demands is on the right path. He lacks conceit, and so his mind is receptive. This openness is the best precondition for good learning.",
                    "At work it means you are not ashamed of basic questions and do not protect an image. In relationships and personal growth it is the ability to start again without pretending.",
                    "The risk is mistaking simplicity for naivety and believing anyone without checking. Conversely, shame at not knowing can stop you from asking.",
                    "Ask openly and sincerely. Choose your teacher carefully, but once chosen, trust him. Openness is your strength."
                ]
            },
            "6": {
                "klasika": "V nejvyšší čáře, nepřerušené, vidíme někoho, kdo bije nevědomého (mladíka). Ale z toho, že mu ublíží, nevznikne žádný prospěch. Prospěch by vznikl z odvrácení škody od něj.",
                "klasika_en": "In the topmost line, undivided, we see one smiting the ignorant (youth). But no advantage will come from doing him an injury. Advantage would come from warding off injury from him.",
                "vyklad": [
                    "Trest je někdy nutný, ale nesmí být cílem. Smysl má jen to, co chrání před přehmaty.",
                    "Občas je třeba potrestat nenapravitelného pošetilce a nechat toho, kdo neposlechne, aby pocítil následky. Trest se však nemá ukládat ve vzteku, ale jako předmětné ohrazení nepřiměřených excesů. Nikdy není cílem sám o sobě, slouží jen k obnovení pořádku. Stejně platí pro výchovu i pro zásahy státu proti přestupkům: má jít o prevenci, ne o odplatu.",
                    "V práci jde o hranice a důsledky: jasně stanovit, co je nepřijatelné, a chránit tým před riziky. Ve vztazích se uplatní pevnost bez ponižování.",
                    "Rizikem je trest z hněvu a pomsty, který poškodí vztah i učení. Druhým rizikem je nedostatek jakýchkoli důsledků, který rozmazlí.",
                    "Zasáhni preventivně a klidně. Nastav pravidla tak, aby chránila, a ne aby trestala. Uvaž, zda tvůj zásah slouží obnovení pořádku, nebo uspokojení emocí."
                ],
                "vyklad_en": [
                    "Punishment is sometimes necessary, but it must not be the goal. Only what protects against excesses makes sense.",
                    "Occasionally an incorrigible fool must be punished and he who will not heed made to feel. But the penalty should not be imposed in anger; it must be a matter-of-fact guarding against unjustified excess. It is never an end in itself and serves only to restore order. The same holds for education and for the measures a government takes against transgressions: the aim is prevention, not retribution.",
                    "At work this is about boundaries and consequences: stating clearly what is unacceptable and protecting the team from risks. In relationships firmness without humiliation applies.",
                    "The risk is punishment born of anger and revenge, which damages both relationship and learning. The other risk is no consequences at all, which spoils.",
                    "Intervene preventively and calmly. Set rules so they protect rather than punish. Ask whether your intervention serves the restoration of order or the satisfaction of emotion."
                ]
            }
        }
    },
    "5": {
        "nazev": "Sü / Čekání",
        "nazev_en": "Xu / Waiting (Nourishment)",
        "rozsudek": "Pokud jsi upřímný, máš světlo a úspěch. Čas čekání není časem nečinnosti, ale hromaděním sil na správný okamžik.",
        "rozsudek_en": "If you are sincere, you have light and success. The time of waiting is not a time of inaction, but of gathering strength for the right moment.",
        "obraz": "Mraky stoupají k nebi. Ušlechtilý člověk jí, pije a je radostné mysli.",
        "obraz_en": "Clouds rise up to heaven. The superior man eats and drinks, is joyous and of good cheer.",
        "klasika": "Sü naznačuje, že s upřímností, která je v něm vyhlášena, bude skvělý úspěch. S pevností bude štěstí; a bude prospěšné překročit velký proud.",
        "klasika_en": "Hsu intimates that, with the sincerity which is declared in it, there will be brilliant success. With firmness there will be good fortune; and it will be advantageous to cross the great stream.",
        "vyklad": [
            "Mraky na nebi slibují déšť, ale ten přijde ve svůj čas. Hexagram učí čekat s vnitřní jistotou, ne s prázdnou nadějí. Kdo je k sobě upřímný a nepřestane jít za cílem, získá světlo a úspěch, i když zatím stojí před nebezpečím.",
            "Čekání zde není pasivita. Uvnitř je síla (dolní trigram nebe), před tebou je nebezpečí (horní trigram vody), a moudrost spočívá v tom, že síla nespěchá bezhlavě do překážky. Slabost by se rozrušila a netrpělivě vyrazila. Síla naopak zůstává klidná, protože ví, že čas pracuje pro ni. Světlo, které z takové jistoty vzniká, ukazuje cestu, jakmile se věci vyjasní.",
            "V práci jde o fázi příprav, schvalování, vyjednávání nebo čekání na výsledek, který nelze urychlit. Využij ji k posílení základů, ne k nervozitě. Ve vztazích platí podobně: zdrž se tlaku a nech druhou stranu dozrát. Upřímnost k sobě samému je tu největším kapitálem.",
            "Rizikem je netrpělivost, předčasný krok do proudu, který by znamenal ztrátu sil. Stejně škodlivé je sebeklam a přehlížení reálného stavu věcí. Třetím rizikem je rezignace, kdy se čekání změní v pouhé otálení.",
            "Pečuj o tělo i mysl, jez, odpočívej a drž dobrou náladu. Neprožívej úzkost z toho, co zatím nelze ovlivnit. Přitom zůstaň v pohotovosti: až se okolnosti otevřou, rozhodni se rázně a překroč velkou vodu."
        ],
        "vyklad_en": [
            "Clouds in the sky promise rain, but it comes in its own time. The hexagram teaches waiting with inner certainty, not empty hope. Whoever is honest with himself and does not stop pursuing the goal gains light and success, even while standing before danger.",
            "Waiting here is not passivity. Strength is within (the lower trigram of heaven), danger lies ahead (the upper trigram of water), and wisdom lies in strength not rushing headlong at the obstacle. Weakness would grow agitated and dash forward impatiently. Strength stays calm because it knows time works for it. The light that arises from such certainty shows the way once things clear.",
            "At work this is a phase of preparation, approval, negotiation or waiting for a result that cannot be hurried. Use it to strengthen foundations, not for nervousness. In relationships the same applies: refrain from pressure and let the other side ripen. Honesty with yourself is your greatest capital here.",
            "The risk is impatience, a premature step into the stream that would waste strength. Equally harmful is self-deception and ignoring the real state of things. A third risk is resignation, where waiting turns into mere dithering.",
            "Look after body and mind: eat, rest and keep good cheer. Do not live in anxiety about what cannot yet be influenced. Yet stay ready: when circumstances open, decide firmly and cross the great water."
        ],
        "cary": {
            "1": {
                "klasika": "První čára, nepřerušená, ukazuje jeho předmět čekat na vzdálené hranici. Bude dobré, bude-li stále zachovávat (tento projevený záměr), a pak nebude chyba.",
                "klasika_en": "The first line, undivided, shows its subject waiting in the distant border. It will be well for him constantly to maintain (the purpose thus shown), in which case there will be no error.",
                "vyklad": [
                    "Čekáš na otevřené pláni, nebezpečí je ještě daleko. Vedení pravidelného života chrání před předčasným plýtváním silami.",
                    "Podmínky jsou zatím jednoduché, ale už je cítit, že se něco blíží. V takovém čase je nejlepší nezměnit rytmus, držet řád a neutrácet energii zbytečně. Kdo si zachová pravidelnost, nedopustí se chyb, které by ho později oslabily.",
                    "V práci udržuj běžný provoz a nezačínej bouřlivé změny. Ve vztazích a v osobním životě si hlídej spánek, jídlo a rytmus dne. Stabilní rutina je teď tvou obranou.",
                    "Rizikem je nervózní aktivita bez cíle nebo náhlé převracení návyků. Opačně hrozí ospalost a ztráta pozornosti, takže tě blížící se změna překvapí.",
                    "Drž zavedený řád a zachovej si záměr. Dělej to, co je třeba, a šetři síly. Příprava je tichá, ale rozhoduje."
                ],
                "vyklad_en": [
                    "You wait on the open plain, danger still far off. Keeping a regular life protects against wasting strength too early.",
                    "Conditions are still simple, but you already feel that something is approaching. At such a time it is best not to change rhythm, to keep order and not spend energy needlessly. Whoever keeps regularity avoids mistakes that would weaken him later.",
                    "At work keep the normal operation going and do not start stormy changes. In relationships and personal life guard your sleep, food and daily rhythm. A stable routine is now your defence.",
                    "The risk is nervous activity without aim or suddenly overturning habits. Conversely, drowsiness and loss of attention threaten, so the approaching change surprises you.",
                    "Keep the established order and hold your purpose. Do what is needed and conserve strength. Preparation is quiet but decisive."
                ]
            },
            "2": {
                "klasika": "Druhá čára, nepřerušená, ukazuje jeho předmět čekat na písku (horského potoka). (Utrpí) malou (újmu) toho, že se o něm bude mluvit (zle), ale nakonec bude štěstí.",
                "klasika_en": "The second line, undivided, shows its subject waiting on the sand (of the mountain stream). He will (suffer) the small (injury of) being spoken (against), but in the end there will be good fortune.",
                "vyklad": [
                    "Nebezpečí se přibližuje a ozývá se pomluva. Kdo zachová klid, nakonec uspěje. Neodpovídej uraženě.",
                    "Písek leží u břehu a voda znamená nebezpečí. Objevují se neshody a v nervózní době se lidé snadno obviňují navzájem. Pomluvu nejlépe uhasíš tím, že jí nedáš potravu uraženou odpovědí. Klid je tu největší silou.",
                    "V práci může přijít kritika nebo drby o tvém postupu. Odpověz fakty a výsledky, ne emocemi. Ve vztazích nepřiživuj spory a nehledej viníky.",
                    "Rizikem je eskalace, kdy se bránící slovo mění v hádku. Hrozí také ztráta sebekontroly pod tlakem okolí.",
                    "Zachovej klid a nereaguj na provokaci. Drž se věcné roviny a nech čas pracovat pro tebe. Malá újma slovy je cenou za dobrý konec."
                ],
                "vyklad_en": [
                    "Danger approaches and gossip is heard. Whoever stays calm succeeds in the end. Do not answer in offence.",
                    "Sand lies near the bank, and water means danger. Disagreements appear, and in nervous times people easily blame one another. Gossip is best put out by not feeding it with an offended reply. Calm is the greatest strength here.",
                    "At work criticism or gossip about your approach may come. Answer with facts and results, not emotion. In relationships do not feed quarrels and do not look for culprits.",
                    "The risk is escalation, where a defending word turns into an argument. Loss of self-control under pressure from those around you also threatens.",
                    "Keep calm and do not react to provocation. Stay at the factual level and let time work for you. A small injury in words is the price of a good ending."
                ]
            },
            "3": {
                "klasika": "Třetí čára, nepřerušená, ukazuje jeho předmět v bahně (blízko potoka). Tím vyvolává příchod újmy.",
                "klasika_en": "The third line, undivided, shows its subject in the mud (close by the stream). He thereby invites the approach of injury.",
                "vyklad": [
                    "Čekáš v bahně, tedy příliš blízko nebezpečí. Předčasný krok přitahuje nepřítele.",
                    "Bahno není místo k čekání, protože ho už omývá voda. Místo aby sis nasbíral síly a přešel potok jedním rozmachem, vyrazil jsi předčasně a uvízl na břehu. Taková nepříznivá poloha láká vnější nepřátele, kteří ji využijí. Zachránit tě může jen opatrnost a vědomí vážnosti situace.",
                    "V práci jde o projekt spuštěný dřív, než byl hotový, nebo o rozhodnutí, které odhalilo slabinu. Ve vztazích o slovo či krok, který druhého vyprovokoval. Teď je třeba držet linii a neriskovat další.",
                    "Rizikem je pokračovat jen proto, že už jsi začal. Dalším rizikem je podcenit, že protivník využije každou nejistotu.",
                    "Zastav se, stabilizuj polohu a zbytečně se nevystavuj. Posil obranu, ověř základ a až potom jdi dál. Bahno nech za sebou, ne před sebou."
                ],
                "vyklad_en": [
                    "You wait in the mud, that is, too close to danger. A premature step draws the enemy.",
                    "Mud is no place for waiting, since the water already washes it. Instead of gathering strength to cross the stream in one go, you set out too early and stuck at the bank. Such an unfavourable position lures outside enemies who exploit it. Only caution and awareness of the situation's seriousness can save you.",
                    "At work this is a project launched before it was ready, or a decision that exposed a weakness. In relationships it is a word or step that provoked the other. Now you need to hold the line and not risk more.",
                    "The risk is continuing only because you have already started. Another is underestimating that an opponent will exploit every uncertainty.",
                    "Stop, stabilise your position and do not expose yourself unnecessarily. Strengthen defence, check the foundation and only then go on. Leave the mud behind you, not ahead."
                ]
            },
            "4": {
                "klasika": "Čtvrtá čára, přerušená, ukazuje jeho předmět čekat v (místě) krve. Ale z jeskyně se dostane.",
                "klasika_en": "The fourth line, divided, shows its subject waiting in (the place of) blood. But he will get out of the cavern.",
                "vyklad": [
                    "Situace je krajně vážná, nelze vpřed ani zpět. Klid a trpělivost jsou jedinou cestou ven.",
                    "Je to otázka života a smrti a zdá se, že se blíží ztráta. Jsi odříznut jako v jámě. Zbývá jedno: obstát, nezhoršovat nic unáhleným činem a nechat osud, aby šel svým během. Právě toto vyrovnané držení těla i mysli je cesta z jámy.",
                    "V práci jde o krizový okamžik, kdy žádný krok nepomáhá. Zastav panické akce a udrž základní provoz. Ve vztazích jde o to neříkat nevratná slova a nečinit nevratné kroky.",
                    "Rizikem je zoufalý čin, který by zhoršil situaci. Dalším je izolace od lidí, kteří by ti mohli pomoci.",
                    "Stůj pevně. Dýchej, zjednoduš si den a nečiň zbytečná rozhodnutí. Požádej o pomoc a nech věci odezvět. Až se tlak uvolní, ukáže se východ."
                ],
                "vyklad_en": [
                    "The situation is extremely serious, with no way forward or back. Calm and patience are the only way out.",
                    "It is a matter of life and death, and loss seems near. You are cut off as if in a pit. One thing remains: stand fast, make nothing worse by rash action and let fate take its course. This composed bearing of body and mind is itself the way out of the pit.",
                    "At work this is a crisis moment where no step helps. Stop panic actions and keep basic operation going. In relationships it is about not saying irreversible words and not taking irreversible steps.",
                    "The risk is a desperate act that would worsen things. Another is isolation from people who could help.",
                    "Stand firm. Breathe, simplify your day and make no unnecessary decisions. Ask for help and let things subside. When the pressure eases, the exit will show."
                ]
            },
            "5": {
                "klasika": "Pátá čára, nepřerušená, ukazuje jeho předmět čekat uprostřed hostiny. Díky jeho pevnosti a správnosti bude štěstí.",
                "klasika_en": "The fifth line, undivided, shows its subject waiting amidst the appliances of a feast. Through his firmness and correctness there will be good fortune.",
                "vyklad": [
                    "I uprostřed nebezpečí přicházejí chvíle klidu. Čekání u stolu s jídlem a pitím přináší štěstí, pokud nezapomeneš na cíl.",
                    "Nacházíš se v nejvyšší poloze a síly máš dost. Využij přestávky k posílení před dalším zápasem. Umět si užít okamžik, aniž bys odbočil od cíle, je projev zralosti. Platí to i ve veřejném životě: nelze dosáhnout všeho najednou a moudrý vedoucí dopřeje lidem dost odpočinku, aby se zachovalo nadšení pro práci, dokud není úkol dokončen.",
                    "V práci jde o dobu mezi fázemi: oslav dílčí výsledek, nasyť tým a pak pokračuj. Ve vztazích je to čas společných rituálů a radosti. Pohoda přispívá k vytrvalosti.",
                    "Rizikem je zaměnit odpočinek za cíl a nechat se uspat. Hrozí také přehnaná oslava, po které tě čeká další tlak.",
                    "Dopřej si zaslouženou chvíli radosti a zotav se. Nenech se uspat a drž směr. Pevná, klidná vytrvalost vede k úspěchu."
                ],
                "vyklad_en": [
                    "Even amid danger moments of peace come. Waiting at a table of food and drink brings good fortune, provided you do not forget the goal.",
                    "You stand in the highest position and have enough strength. Use the pause to fortify yourself for the next struggle. The ability to enjoy the moment without leaving the goal is a sign of maturity. This holds in public life too: not everything can be achieved at once, and a wise leader allows people enough recreation to keep enthusiasm for the work until the task is done.",
                    "At work this is the time between phases: celebrate a partial result, nourish the team and then continue. In relationships it is a time of shared rituals and joy. Contentment supports perseverance.",
                    "The risk is mistaking rest for the goal and being lulled. Excessive celebration, after which more pressure awaits, also threatens.",
                    "Allow yourself a deserved moment of joy and recover. Do not be lulled and hold direction. Firm, calm perseverance leads to success."
                ]
            },
            "6": {
                "klasika": "Nejvyšší čára, přerušená, ukazuje jeho předmět, který vstoupil do jeskyně. (Ale) přicházejí tři hosté, aniž by byli pobízeni, (mu na pomoc). Přijme-li je s úctou, nakonec bude štěstí.",
                "klasika_en": "The topmost line, divided, shows its subject entered into the cavern. (But) there are three guests coming, without being urged, (to his help). If he receive them respectfully, there will be good fortune in the end.",
                "vyklad": [
                    "Čekání skončilo a pád do jámy je tu. Právě v krajní chvíli ale přichází neočekávaná pomoc, kterou je třeba přijmout s úctou.",
                    "Zdá se, že všechno bylo marné. Právě v tomto bodě se však věci neočekávaně obrátí a bez tvého přičinění zasáhne někdo zvenčí. Zpočátku není jasné, zda jde o záchranu, nebo zkázu. Člověk musí zůstat bdělý a nezavírat se do uražené zdrženlivosti.",
                    "V práci jde o nečekanou nabídku, kontakt nebo zákazníka, který přichází bez pozvání. Ve vztazích o druhého, který se objeví, když to nejméně čekáš. Nabídka může vypadat zvláštně, ale nese řešení.",
                    "Rizikem je odmítnutí z pýchy nebo z podezíravosti. Druhým rizikem je přijmout pomoc bez rozmyslu, aniž ověříš, co obnáší.",
                    "Přijmi nově příchozí s respektem a vyslechni je. Ověř, co nabízejí, a pak využij příležitost. Šťastné zvraty často přicházejí v podivné podobě."
                ],
                "vyklad_en": [
                    "The waiting is over and the fall into the pit has come. Yet in this extreme moment unexpected help arrives and should be received with respect.",
                    "It seems that everything was in vain. At exactly this point things turn unexpectedly and someone from outside intervenes without your doing anything. At first it is unclear whether it is rescue or ruin. You must stay alert and not shut yourself away in offended reserve.",
                    "At work this is an unexpected offer, contact or customer who arrives uninvited. In relationships it is another person who appears when you least expect it. The offer may look strange, but it carries the solution.",
                    "The risk is refusing out of pride or suspicion. Another is accepting help without thought, without verifying what it entails.",
                    "Receive the new arrivals with respect and hear them out. Check what they offer and then use the opportunity. Happy turns of fortune often come in a strange form."
                ]
            }
        }
    },
    "6": {
        "nazev": "Sung / Svár",
        "nazev_en": "Song / Conflict",
        "rozsudek": "Jsi upřímný, a přece jsi potlačen. Opatrné zastavení v polovině cesty přináší štěstí. Jít až do konce přináší neštěstí.",
        "rozsudek_en": "You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune.",
        "obraz": "Nebe a voda se pohybují opačným směrem. Ušlechtilý člověk pečlivě zvažuje začátek každého sporu.",
        "obraz_en": "Heaven and water go their opposite ways. The superior man carefully considers the beginning of any undertaking.",
        "klasika": "Sung naznačuje, jak se člověk, ačkoli je ve svém sporu upřímný, přesto setká s odporem a překážkami; ale chová-li opatrnou obezřetnost, bude štěstí, kdežto bude-li musit spor vést až do (hořkého) konce, bude zlo. Bude prospěšné vidět velkého muže; nebude prospěšné překročit velký proud.",
        "klasika_en": "Sung intimates how, though there is sincerity in one's contention, he will yet meet with opposition and obstruction; but if he cherish an apprehensive caution, there will be good fortune, while, if he must prosecute the contention to the (bitter) end, there will be evil. It will be advantageous to see the great man; it will not be advantageous to cross the great stream.",
        "vyklad": [
            "Nebe jde vzhůru a voda dolů: dvě síly se rozcházejí a rodí spor. Máš pocit, že jednáš v právu, a přesto narážíš na odpor. Štěstí přináší opatrný ústup v polovině a hledání nestranného rozhodčího, nikoli boj do hořkého konce.",
            "Spor vzniká tam, kde se člověk cítí v právu a naráží na odpor. Kdyby si pravdou jistý nebyl, vedl by to spíš k lstivosti než k otevřenému střetu. Východiskem je jasná hlava a vnitřní síla, díky níž dokážeš vyjít druhému vstříc. Dovést spor do hořkého konce škodí i vítězi, protože znamená trvalé nepřátelství.",
            "V práci jde o smlouvu, odpovědnost, rozpočet nebo způsob postupu. Pomůže nestranný člověk s autoritou, který rozsoudí spor spravedlivě. Ve vztazích hrozí zatvrzení, kdy je důležitější mít pravdu než mít vztah. Do nebezpečných společných podniků teď nevstupuj, protože vnitřní rozpor oslabuje sílu zvládat vnější nebezpečí.",
            "Rizikem je trvat na svém, i když už věc nic nepřináší. Stejně škodlivá je skrytá zášť, která se vrací v jiné podobě. Třetím rizikem je podnikat velké věci uprostřed nevyřešených sporů.",
            "Zastav se včas a vyjasni pravidla dřív, než vznikne nový problém. Obrať se na nestranného rádce nebo mediátora. Hledej dohodu na půli cesty a vyhýbej se velkým rizikům, dokud není konflikt uzavřen."
        ],
        "vyklad_en": [
            "Heaven goes up and water goes down: two forces part and give birth to conflict. You feel you are in the right and still meet resistance. Good fortune comes from a cautious halt midway and from seeking an impartial arbiter, not from fighting to the bitter end.",
            "Conflict arises where a person feels in the right and meets opposition. If he were not sure of being right, it would lead rather to cunning than to open clash. The way out is a clear head and inner strength that let you meet the other halfway. Carrying a dispute to the bitter end harms even the winner, because it perpetuates enmity.",
            "At work this is about a contract, responsibility, budget or method. An impartial person with authority who judges fairly will help. In relationships the danger is hardening, where being right matters more than having the relationship. Do not enter dangerous joint ventures now, since inner discord weakens the strength to handle outer danger.",
            "The risk is insisting even when the matter brings nothing any more. Equally harmful is hidden resentment that returns in another form. A third risk is undertaking big things amid unresolved disputes.",
            "Stop in time and clarify the rules before a new problem arises. Turn to an impartial adviser or mediator. Seek agreement halfway and avoid big risks until the conflict is closed."
        ],
        "cary": {
            "1": {
                "klasika": "První čára, přerušená, ukazuje jeho předmět, který nepřetahuje věc, o niž (se spor vede). Utrpí malou (újmu) toho, že se o něm bude mluvit (zle), ale konec bude šťastný.",
                "klasika_en": "The first line, divided, shows its subject not perpetuating the matter about which (the contention is). He will suffer the small (injury) of being spoken against, but the end will be fortunate.",
                "vyklad": [
                    "Na počátku sporu je nejlepší téma nechat plavat. Mírná hádka přijde, ale konec bude dobrý.",
                    "Spor je ve zrodu a ještě se dá zastavit. Zvlášť když je protivník silnější, není radno riskovat rozhodnutí. Může dojít k drobné slovní potyčce, ale rychlé upuštění zabrání rozšíření škody.",
                    "V práci nech drobný nesouhlas být a vyhni se eskalaci na vyšší úroveň. Ve vztazích to znamená neotvírat staré účty a nepřetahovat každý detail.",
                    "Rizikem je dotlačit i malou věc do principu. Druhým rizikem je nahromadit nevyslovenou nespokojenost, která se později vybije jinde.",
                    "Zastav spor, dokud je malý. Řekni, co je třeba, a pak to nech být. Mírná újma v pověsti je levnější než dlouhý konflikt."
                ],
                "vyklad_en": [
                    "At the start of a dispute it is best to let the subject drop. A slight quarrel will come, but the end will be good.",
                    "The conflict is in its infancy and can still be stopped. Especially when the opponent is stronger, it is unwise to risk a decision. A small verbal skirmish may occur, but quick abandonment prevents damage from spreading.",
                    "At work let a minor disagreement be and avoid escalating it to a higher level. In relationships it means not reopening old accounts and not dragging every detail.",
                    "The risk is pushing even a small matter into a principle. Another is accumulating unspoken dissatisfaction that later discharges elsewhere.",
                    "Stop the dispute while it is small. Say what is needed and then let it be. A slight injury to reputation is cheaper than a long conflict."
                ]
            },
            "2": {
                "klasika": "Druhá čára, nepřerušená, ukazuje jeho předmět, který není sporu vyrovnán. Ustoupí-li a skryje se (tam, kde) má jeho město (jen) tři sta rodin, neupadne do žádné chyby.",
                "klasika_en": "The second line, undivided, shows its subject unequal to the contention. If he retire and keep concealed (where) the inhabitants of his city are (only) three hundred families, he will fall into no mistake.",
                "vyklad": [
                    "Protivník je silnější. Ústup z nerovného sporu není ostuda a chrání celé okolí před škodami.",
                    "Ve střetu s nadřazeným protivníkem je včasné stažení správným postupem. Kdo se z falešné cti nechá vtáhnout do nerovného boje, přivolá katastrofu. Moudrý a smířlivý postoj zároveň prospívá celé komunitě, která nebude do sporu vtažena.",
                    "V práci se vyplatí vzdát bitvu, kterou nelze vyhrát, a chránit tým i zdroje. Ve vztazích je správné odstoupit od konfrontace, kde druhá strana má všechny páky. Ústup je taktika, ne porážka.",
                    "Rizikem je ješitnost, která brání přiznat nerovnost sil. Opačným rizikem je trvalé stažení z každého sporu.",
                    "Ustup a ochraň, co je třeba. Přesuň energii tam, kde máš reálnou šanci. Neboj se menšího místa, odkud můžeš pracovat klidně."
                ],
                "vyklad_en": [
                    "The opponent is stronger. Retreating from an unequal dispute is no disgrace and protects the whole surroundings from harm.",
                    "Faced with a superior opponent, timely withdrawal is the right procedure. Whoever is lured into an unequal fight by false honour draws disaster upon himself. A wise, conciliatory attitude also benefits the whole community, which is then not dragged into the dispute.",
                    "At work it pays to give up a battle that cannot be won and protect the team and resources. In relationships it is right to withdraw from a confrontation where the other side holds all the levers. Retreat is tactics, not defeat.",
                    "The risk is vanity that prevents admitting the imbalance of forces. The opposite risk is permanent withdrawal from every dispute.",
                    "Retreat and protect what needs protecting. Shift your energy where you have a real chance. Do not fear a smaller place from which you can work in peace."
                ]
            },
            "3": {
                "klasika": "Třetí čára, přerušená, ukazuje jeho předmět, který zůstává na starém místě určeném k jeho obživě a je pevně správný. Ač je postavení nebezpečné, nakonec bude štěstí. Zapojí-li se náhodou do králových záležitostí, nebude si nárokovat zásluhu na dosažení.",
                "klasika_en": "The third line, divided, shows its subject keeping in the old place assigned for his support, and firmly correct. Perilous as the position is, there will be good fortune in the end. Should he perchance engage in the king's business, he will not (claim the merit of) achievement.",
                "vyklad": [
                    "Živ se tím, co jsi poctivě získal. Pravý majetek se neztratí, i když je zpochybněn. Ve službě nehledej slávu.",
                    "Čára varuje před rozpínavou povahou. Trvale zůstane jen to, co bylo získáno zásluhou. Může se stát, že je tvé postavení napadeno, ale pokud je skutečně tvé, nemůže být odňato. Co člověk vlastní silou své přirozenosti, neztratí. Ve službě pro nadřízeného se lze vyhnout konfliktu tím, že se nehoní za prestiží.",
                    "V práci je výhodné stavět na prověřených základech, expertíze a dobré pověsti. Neusiluj o to, aby tvé jméno bylo u každého úspěchu. Ve vztazích si drž své místo a nenárokuj si uznání navíc.",
                    "Rizikem je chamtivost po uznání, která vyvolá závist. Také hrozí zbytečná obrana každého detailu, který nikomu nevadí.",
                    "Zůstaň u toho, co je opravdu tvé, a nech zásluhy plynout. Nech druhé, ať se pochlubí. Tvá skutečná hodnota nepotřebuje reklamu."
                ],
                "vyklad_en": [
                    "Live on what you have honestly earned. True property is not lost even when challenged. In service, do not seek renown.",
                    "The line warns against an expansive disposition. Only what has been honestly acquired through merit remains permanent. Your position may be contested, but if it is truly yours it cannot be taken. What a person possesses through the strength of his own nature cannot be lost. In service to a superior one avoids conflict by not hunting prestige.",
                    "At work it pays to build on proven foundations, expertise and good reputation. Do not insist that your name appear at every success. In relationships hold your place and do not claim extra recognition.",
                    "The risk is greed for recognition that provokes envy. Pointless defence of every detail that bothers no one also threatens.",
                    "Stay with what is truly yours and let credit flow. Let others take the bow. Your real worth needs no advertising."
                ]
            },
            "4": {
                "klasika": "Čtvrtá čára, nepřerušená, ukazuje jeho předmět, který není sporu vyrovnán. Vrací se k (studiu nebeských) řádů, mění (své přání sporu vést) a spočívá v pevnosti a správnosti. Bude štěstí.",
                "klasika_en": "The fourth line, undivided, shows its subject unequal to the contention. He returns to (the study of Heaven's) ordinances, changes (his wish to contend), and rests in being firm and correct. There will be good fortune.",
                "vyklad": [
                    "Spor vzdáváš, protože nemáš právo na své straně. Změníš postoj a nacházíš trvalý klid ve souladu s řádem.",
                    "Máš slabšího protivníka a mohl bys uspět, ale vnitřně víš, že spor nelze před svědomím ospravedlnit. Proto se obracíš zpět, přijímáš svůj osud a měníš přístup. Klid nalezený ve shodě s tím, co je správné, je pevnější než jakékoli vítězství.",
                    "V práci jde o chvíli, kdy odstoupíš od útoku nebo požadavku, který sám shledáš nepřiměřeným. Ve vztazích o přiznání, že jsi zašel příliš daleko, a o změnu tónu.",
                    "Rizikem je, že přepnutí v sobě nezvládneš a vrátíš se do boje. Jiným rizikem je sebeobviňování, které přesáhne potřebu opravy.",
                    "Přiznej, kde ses mýlil, a změň směr. Obnov kontakt se svými principy a nech spor být. Mír v pravém řádu je pevnější než kterákoli výhra."
                ],
                "vyklad_en": [
                    "You give up the dispute because right is not on your side. You change attitude and find lasting calm in harmony with order.",
                    "You face a weaker opponent and might succeed, but inwardly you know the dispute cannot be justified to your conscience. So you turn back, accept your fate and change approach. Calm found in accord with what is right is firmer than any victory.",
                    "At work this is the moment you withdraw from an attack or demand you yourself judged disproportionate. In relationships it is admitting you went too far and changing tone.",
                    "The risk is that you cannot sustain the shift and return to the fight. Another is self-blame beyond what repair requires.",
                    "Admit where you were wrong and change direction. Reconnect with your principles and let the dispute be. Peace in true order is firmer than any win."
                ]
            },
            "5": {
                "klasika": "Pátá čára, nepřerušená, ukazuje jeho předmět, který vede spor; a s velkým štěstím.",
                "klasika_en": "The fifth line, undivided, shows its subject contending;—and with great good fortune.",
                "vyklad": [
                    "Máš rozhodčího, který je spravedlivý a silný. Předložit mu spor je cesta k dobrému výsledku.",
                    "Čára představuje nestranného arbitra s dostatečnou autoritou, aby podpořil správnou stranu. Spor se mu dá svěřit s důvěrou. Je-li člověk v právu, dosahuje velkého štěstí. Důležité je, aby rozhodčí nebyl stranou a aby se jeho rozhodnutí respektovalo.",
                    "V práci jde o arbitráž, dohled nebo nezávislý audit. Ve vztazích o mediátora, který dokáže vést rozhovor spravedlivě. Obrať se na toho, kdo má váhu a není součástí sporu.",
                    "Rizikem je vybrat rozhodčího, který je stranický, nebo neuznat verdikt. Dalším rizikem je očekávat, že rozhodnutí bude jen ve tvůj prospěch.",
                    "Předlož věc nestrannému a spolehlivému člověku, přines fakta a přijmi výsledek. Správná věc se tak dostane na světlo."
                ],
                "vyklad_en": [
                    "You have an arbiter who is just and strong. Putting the dispute to him is the way to a good outcome.",
                    "The line represents an impartial arbiter with enough authority to back the right side. The dispute can be entrusted to him with confidence. If you are in the right, great good fortune is reached. It matters that the arbiter is not a party and that his decision is respected.",
                    "At work this is arbitration, oversight or an independent audit. In relationships it is a mediator who can steer the conversation fairly. Turn to someone with weight who is not part of the dispute.",
                    "The risk is choosing an arbiter who is partisan, or not recognising the verdict. Another is expecting the decision to be only in your favour.",
                    "Put the matter to an impartial, reliable person, bring the facts and accept the outcome. The right thing then comes to light."
                ]
            },
            "6": {
                "klasika": "Nejvyšší čára, nepřerušená, ukazuje, jak může jeho předmět obdržet (od panovníka) koženou pásku, a třikrát mu bude během jednoho jitra odebrána.",
                "klasika_en": "The topmost line, undivided, shows how its subject may have the leathern belt conferred on him (by the sovereign), and thrice it shall be taken from him in a morning.",
                "vyklad": [
                    "Vítězství ve sporu bylo dosaženo, ale radost netrvá. Znovu a znovu přicházejí další útoky.",
                    "Člověk, který dovedl konflikt do hořkého konce a zvítězil, dostává odznak úspěchu. Jeho štěstí je však krátké, protože jeho protivníci se neuklidňují. Výsledek je konflikt bez konce, kde se získané ztrácí a znovu získává.",
                    "V práci jde o vyhraný spor, který vyvolal řetěz odvetných kroků. Ve vztazích o pyrrhovo vítězství, kdy druhá strana nezapomíná. Důvěra a spolupráce se v takovém prostředí nebudují.",
                    "Rizikem je pýcha z vítězství a nechuť smířit se. Dalším rizikem je trvalé vyčerpání z neustálé obrany.",
                    "Přestaň počítat body. Vyjednej dohodu, která chrání obě strany, a uzavři spor trvale. Mír vyplatí víc než další vítězství."
                ],
                "vyklad_en": [
                    "The dispute has been won, but the joy does not last. Again and again new attacks come.",
                    "A person who carried a conflict to the bitter end and triumphed receives a badge of success. His happiness is short, because his opponents do not calm down. The result is conflict without end, where what is gained is lost and gained again.",
                    "At work this is a won dispute that triggered a chain of retaliation. In relationships it is a Pyrrhic victory where the other side does not forget. Trust and cooperation are not built in such an environment.",
                    "The risk is pride in victory and unwillingness to reconcile. Another is permanent exhaustion from constant defence.",
                    "Stop keeping score. Negotiate an agreement that protects both sides and close the dispute for good. Peace pays more than another victory."
                ]
            }
        }
    },
    "7": {
        "nazev": "Š' / Vojsko",
        "nazev_en": "Shi / The Army",
        "rozsudek": "Vojsko potřebuje vytrvalost a silného muže. Štěstí bez viny. Kázeň a jasné vedení jsou nyní nezbytné.",
        "rozsudek_en": "The army needs perseverance and a strong man. Good fortune without blame. Discipline and clear leadership are now essential.",
        "obraz": "Voda uprostřed země. Ušlechtilý člověk vzdělává lid a shromažďuje masy.",
        "obraz_en": "In the middle of the earth is water. The superior man increases his masses by generosity toward the people.",
        "klasika": "Š' naznačuje, jak v případě, který předpokládá, bude s pevností a správností a s (vůdcem) věku a zkušenosti štěstí a žádná chyba.",
        "klasika_en": "Sze indicates how, in the case which it supposes, with firmness and correctness, and (a leader of) age and experience, there will be good fortune and no error.",
        "vyklad": [
            "Voda ukrytá v zemi: síla, která je v mase lidí neviditelná, ale připravená k použití. Hexagram popisuje organizované velké úsilí, které potřebuje pořádek, silného a zkušeného vůdce a plnou důvěru. Při správném vedení vede ke zdaru bez chyby.",
            "Masa lidí je bez organizace jen množství. Kázeň je nutná, ale nesmí být vynucená silou. Potřebuje vůdce, který získá srdce a probudí nadšení. Ten se však může rozvinout jen tehdy, když mu nadřízený dá plnou odpovědnost. Ve vnitřní rovině je nebezpečí a navenek poslušnost, což ukazuje, že velké úsilí je vždy riskantní a má se podnikat jen jako poslední možnost.",
            "V práci jde o velký projekt, kampaň nebo kolektivní úsilí s mnoha lidmi. Pomáhají jasná pravidla, pověřený vedoucí a štědrost k lidem, kteří dílo nesou. Ve vztazích a komunitě se síla skládá z toho, že lidé ví, že se o ně někdo stará.",
            "Rizikem je uzurpace vedení, kdy se do velení pletou nezkušení lidé. Další riziko je zneužití moci a opotřebování lidí. Nebezpečné je také konflikt zbytečně vyvolat.",
            "Stanov jasný cíl a pověř jednoho zkušeného vedoucího, kterému dáš důvěru a pravomoc. Postarej se o ty, kdo dílo nesou, a nepouštěj se do střetu, pokud existuje jiná cesta."
        ],
        "vyklad_en": [
            "Water hidden in the earth: a strength that is invisible in the mass of people but ready for use. The hexagram describes a large organised effort that needs order, a strong and experienced leader and full trust. With right leadership it leads to success without error.",
            "A mass of people without organisation is only a crowd. Discipline is necessary but must not be enforced by force. It needs a leader who wins hearts and awakens enthusiasm. He can develop only if his superior gives him full responsibility. Danger inside and obedience outside show that large effort is always risky and should be undertaken only as a last resort.",
            "At work this is a big project, campaign or collective effort with many people. Clear rules, an appointed lead and generosity toward those who carry the work help. In relationships and community strength comes from people knowing that someone cares for them.",
            "The risk is usurped leadership, with inexperienced people meddling in command. Another is abuse of power and wearing people out. Provoking conflict needlessly is also dangerous.",
            "Set a clear goal and entrust one experienced lead with trust and authority. Look after those who carry the work and do not start a clash if another route exists."
        ],
        "cary": {
            "1": {
                "klasika": "První čára, přerušená, ukazuje zástup, který vyráží podle pravidel (pro takový pohyb). Nebudou-li dobrá, bude zlo.",
                "klasika_en": "The first line, divided, shows the host going forth according to the rules (for such a movement). If these be not good, there will be evil.",
                "vyklad": [
                    "Na začátku je nezbytný řád. Jen spravedlivý cíl a dobře zorganizovaná souhra zaručí úspěch.",
                    "Na počátku velkého podniku musí existovat platný a spravedlivý důvod a poslušnost a koordinace musí být dobře zorganizovány. Pokud ne, výsledek je téměř jistě neúspěch. Pravidla nejsou formalita, ale základ všeho dalšího.",
                    "V práci jde o jasné zadání, role a pravidla spolupráce před startem. Ve vztazích a komunitě o společně přijatá pravidla, než se začne něco velkého.",
                    "Rizikem je spěch bez přípravy a nejasný cíl. Druhým rizikem je tvrdost pravidel bez smyslu.",
                    "Než vyrazíš, prověř důvod a pravidla. Ujisti se, že všichni vědí, kdo za co odpovídá. Dobrý začátek ušetří mnoho chyb."
                ],
                "vyklad_en": [
                    "At the start order is indispensable. Only a just aim and a well-organised effort guarantee success.",
                    "At the beginning of a large undertaking a valid and just cause must exist, and obedience and coordination must be well organised. Otherwise the result is almost certainly failure. Rules are not formality but the base of everything that follows.",
                    "At work this means a clear brief, roles and rules of cooperation before the start. In relationships and community it means rules accepted together before anything big begins.",
                    "The risk is haste without preparation and an unclear aim. Another is rules that are rigid without purpose.",
                    "Before setting out, check the reason and the rules. Make sure everyone knows who is responsible for what. A good start saves many mistakes."
                ]
            },
            "2": {
                "klasika": "Druhá čára, nepřerušená, ukazuje (vůdce) uprostřed zástupu. Bude štěstí a žádná chyba. Král mu třikrát přenesl příkazy (své přízně).",
                "klasika_en": "The second line, undivided, shows (the leader) in the midst of the host. There will be good fortune and no error. The king has thrice conveyed to him the orders (of his favour).",
                "vyklad": [
                    "Vůdce stojí uprostřed svých lidí a sdílí s nimi dobré i zlé. Získává tak sílu k velkým nárokům i uznání shora.",
                    "Vedoucí, který je ve styku s masou, sdílí její radosti a nesnáze a nevelí z odstupu, je hoden těžkých požadavků. Potřebuje ale také uznání svého nadřízeného. Odměny, které dostává, jsou oprávněné, protože nejde o osobní prospěch: je poctěn celý tým, jehož je středem.",
                    "V práci jde o vedoucího, který pracuje s týmem, ne nad ním. Ve vztazích a rodině jde o to být přítomný při těžkých chvílích. Autorita roste z účasti.",
                    "Rizikem je odtržení od lidí a jejich reality. Dalším rizikem je zaměnit osobní vyznamenání za cíl.",
                    "Zůstaň mezi svými lidmi a sdílej jejich zátěž. Požádej o pověření a dostaň jasné pravomoci. Zásluhy předávej celému týmu."
                ],
                "vyklad_en": [
                    "The leader stands in the midst of his people and shares good and bad with them. So he gains strength for heavy demands and recognition from above.",
                    "A leader who stays in touch with the mass, shares its joys and troubles and does not command from afar is equal to heavy demands. He also needs the recognition of his superior. The honours he receives are justified, because no personal preferment is at stake: the whole team whose centre he is, is honoured.",
                    "At work this is a manager who works with the team, not above it. In relationships and family it means being present in hard moments. Authority grows from participation.",
                    "The risk is detachment from people and their reality. Another is mistaking personal distinction for the goal.",
                    "Stay among your people and share their load. Ask for a mandate and get clear authority. Pass credit on to the whole team."
                ]
            },
            "3": {
                "klasika": "Třetí čára, přerušená, ukazuje, jak může mít zástup možná mnoho neschopných vůdců. Bude zlo.",
                "klasika_en": "The third line, divided, shows how the host may, possibly, have many inefficient leaders. There will be evil.",
                "vyklad": [
                    "Do vedení se vmísili ti, kdo k tomu nejsou určeni. Rozbitá velitelská struktura vede k porážce.",
                    "Vedení je nejasné a pravomoc převzali jiní, než ti, kdo byli pověřeni. Je to jako když se do rozhodování vloží příliš mnoho hlasů, a výsledek je chaos. Pokud se do vedení pustí množství, nastane neštěstí.",
                    "V práci jde o neřešené kompetence, nadbytek manažerů nebo mocenské zásahy do práce týmu. Ve vztazích a rodině jde o nejasné role.",
                    "Rizikem je neúčinné vedení, které zdržuje rozhodování. Dalším rizikem je přesun odpovědnosti na toho, kdo to neumí.",
                    "Vyjasni, kdo velí a kdo rozhoduje. Odděl poradce od rozhodovatelů. Jedno jasné vedení je lepší než sbor dohadovačů."
                ],
                "vyklad_en": [
                    "Those not meant to lead have pushed into leadership. A broken chain of command leads to defeat.",
                    "Leadership is unclear and authority has been taken by others than those appointed. It is as if too many voices entered the decision, and the result is chaos. If the multitude takes over command, misfortune results.",
                    "At work this is unresolved competences, a surplus of managers or power interference in the team's work. In relationships and family it is unclear roles.",
                    "The risk is ineffective leadership that delays decisions. Another is shifting responsibility to someone who cannot carry it.",
                    "Clarify who commands and who decides. Separate advisers from decision-makers. One clear lead is better than a council of haggling voices."
                ]
            },
            "4": {
                "klasika": "Čtvrtá čára, přerušená, ukazuje zástup na ústupu. Není chyba.",
                "klasika_en": "The fourth line, divided, shows the host in retreat. There is no error.",
                "vyklad": [
                    "Proti silnější moci je včasný, uspořádaný ústup jediným správným postupem. Chrání před porážkou a rozpadem.",
                    "Tváří v tvář nepříteli, s nímž je beznadějné bojovat, uchrání ústup sílu před rozpadem. Trvat na boji bez ohledu na okolnosti není projevem odvahy, ale slepoty. Čára je na sudém místě a ústup je tu přirozený.",
                    "V práci jde o stažení z neúspěšného trhu, produktu nebo kampaně dřív, než spotřebuje všechny zdroje. Ve vztazích o mlčenlivé opuštění sporu, který nelze vyhrát.",
                    "Rizikem je ústup bez plánu, který se změní v útěk. Opačným rizikem je trvat na ztracené pozici ze zvyku.",
                    "Naplánuj ústup v pořádku a zachraň, co lze. Pak přeskupení a nový směr. Ústup v pravý čas je moudrost."
                ],
                "vyklad_en": [
                    "Against a stronger power, a timely, orderly retreat is the only right procedure. It protects from defeat and disintegration.",
                    "Faced with an enemy against whom battle is hopeless, retreat saves the force from disintegration. Insisting on a fight regardless of circumstances is not courage but blindness. The line sits in an even place, so retreat is natural here.",
                    "At work this is pulling out of a failing market, product or campaign before it consumes all resources. In relationships it is quietly leaving a dispute that cannot be won.",
                    "The risk is retreat without a plan that turns into flight. The opposite risk is clinging to a lost position out of habit.",
                    "Plan the withdrawal in order and save what can be saved. Then regroup and take a new direction. Retreat at the right time is wisdom."
                ]
            },
            "5": {
                "klasika": "Pátá čára, přerušená, ukazuje ptáky na polích, které bude prospěšné chytit (a zničit). V tom případě nebude chyba. Povede-li zástup nejstarší syn a mladší muži (zahálejí na úřadech jim přidělených), pak ať je sebepevnější a správnější, bude zlo.",
                "klasika_en": "The fifth line, divided, shows birds in the fields, which it will be advantageous to seize (and destroy). In that case there will be no error. If the oldest son leads the host, and younger men (idly occupy offices assigned to them), however firm and correct he may be, there will be evil.",
                "vyklad": [
                    "Škůdce na poli je třeba zastavit, ale musí to dělat zkušený člověk. Rozhodnost bez řízení vede k chaosu.",
                    "Zvěř opustila les a pustoší pole: je to obraz vpádu zvenčí. Rázná obrana je plně oprávněná, ale nesmí se zvrhnout v divokou rvačku, kde si každý hájí sám sebe. Obrana musí být řízena zkušeným vedoucím a mladší nesmějí zasahovat do velení. Boj má řád, nikoli lynčování.",
                    "V práci jde o nutný zásah proti vážnému problému, třeba bezpečnostnímu incidentu nebo podvodu. Nech ho řešit pověřeného odborníka, ne dav. Ve vztazích: hájit svoje hranice, ale ne ve vášni.",
                    "Rizikem je nekontrolovaná reakce, kdy se do věci vloží příliš lidí. Dalším rizikem je dát vedení nezkušeným jen proto, že jsou ochotní.",
                    "Zasáhni důsledně, ale pod jedním řízením. Pověř zkušeného člověka a nastav jasné meze zásahu. Cílem je obrana a obnova pořádku."
                ],
                "vyklad_en": [
                    "Pests in the field must be stopped, but an experienced person must do it. Decisiveness without direction leads to chaos.",
                    "Game has left the forest and ravages the fields: an image of invasion from outside. Vigorous defence is fully justified, but it must not degenerate into a wild melee in which everyone fends for himself. The defence must be directed by an experienced leader, and younger people must not meddle in command. A fight has order; it is not a lynching.",
                    "At work this is a necessary intervention against a serious problem, such as a security incident or fraud. Let the appointed expert deal with it, not the crowd. In relationships: defend your boundaries, but not in passion.",
                    "The risk is an uncontrolled reaction in which too many people join in. Another is giving leadership to the inexperienced just because they are willing.",
                    "Intervene consistently, but under one direction. Appoint an experienced person and set clear limits to the intervention. The aim is defence and restoring order."
                ]
            },
            "6": {
                "klasika": "Nejvyšší čára, přerušená, ukazuje velkého vládce, který vydává své příkazy, (ustanovuje některé) za vládce států a jiné, aby se ujali vedení rodů; ale malí lidé nemají být (na takových místech) zaměstnáni.",
                "klasika_en": "The topmost line, divided, shows the great ruler delivering his charges, (appointing some) to be rulers of states, and others to undertake the headship of clans; but small men should not be employed (in such positions).",
                "vyklad": [
                    "Dílo je dokončeno, vítězství získáno a odměny se rozdělují. Rozhodující je, aby moc nedostali nezpůsobilí lidé.",
                    "Po úspěšném dokončení velkého úsilí se rozdělují úkoly a odpovědnost mezi ty, kdo se osvědčili. Je však důležité, aby se k moci nedostali ti, kdo na ni nemají povahu. Kdo pomohl, ať je odměněn peněžně, ale ne pravomocí nebo privilegii, aby nedošlo ke zneužití moci.",
                    "V práci jde o povýšení, rozdělení rolí a podílů po úspěšném projektu. Odměňuj za přínos, ale funkce svěřuj podle schopností a charakteru. Ve vztazích a rodině jde o to, kdo dostane odpovědnost, ne jen uznání.",
                    "Rizikem je nahodilá odměna, která vytvoří slabé místo ve struktuře. Další riziko je přehlédnutí zásluhy a vznik rozmrzelosti.",
                    "Odměň každého podle přínosu, ale vedoucí místa obsaď podle schopností a poctivosti. Nově získanou moc umísti tam, kde je v dobrých rukou."
                ],
                "vyklad_en": [
                    "The work is done, victory won, and rewards are distributed. What matters is that power does not go to the unfit.",
                    "After a successful large effort, tasks and responsibility are divided among those who proved themselves. It matters, however, that people unsuited for power do not rise to it. Those who helped should be rewarded with money, but not with authority or privileges, so power is not abused.",
                    "At work this is promotion, assigning roles and shares after a successful project. Reward contribution, but give positions according to ability and character. In relationships and family it is about who gets responsibility, not just recognition.",
                    "The risk is a random reward that creates a weak spot in the structure. Another is overlooking merit and breeding resentment.",
                    "Reward everyone by contribution, but fill leading posts by ability and integrity. Place newly gained power where it is in good hands."
                ]
            }
        }
    },
    "8": {
        "nazev": "Pi / Soudržnost",
        "nazev_en": "Bi / Holding Together (Union)",
        "rozsudek": "Soudržnost přináší štěstí. Zkoumej orákulum, abys zjistil, zda máš vznešenost, vytrvalost a sílu. Opozdilci potká neštěstí.",
        "rozsudek_en": "Holding together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance. Those who come too late meet with misfortune.",
        "obraz": "On the earth is water. The superior man fosters his relationships and maintains friendly ties with neighboring regions.",
        "obraz_en": "On the earth is water. The superior man fosters his relationships and maintains friendly ties with neighboring regions.",
        "klasika": "Pi naznačuje, že (za podmínek, které předpokládá) je štěstí. Ale ať (hlavní strana v něm zamýšlená) znovu přezkoumá sama sebe, (jako by) věštbou, zda je její ctnost veliká, nepřetržitá a pevná. Je-li tomu tak, nebude chyba. Ti, kdo nemají klid, k němu pak přijdou; a s těmi, kdo přijdou (příliš) pozdě, bude zle.",
        "klasika_en": "Pi indicates that (under the conditions which it supposes) there is good fortune. But let (the principal party intended in it) re-examine himself, (as if) by divination, whether his virtue be great, unintermitting, and firm. If it be so, there will be no error. Those who have not rest will then come to him; and with those who are (too) late in coming it will be ill.",
        "vyklad": [
            "Voda na zemi se spojuje tam, kde může, jako řeky v moři. Hexagram ukazuje sílu soudržnosti: lidé se spojují kolem středu, který je důvěryhodný, a navzájem se doplňují. Štěstí přichází, ale jen tomu, kdo je pro takové spojení opravdu způsobilý.",
            "Aby se lidé sjednotili, potřebují střed. Stát se středem je vážná věc a nese velkou odpovědnost. Vyžaduje velikost ducha, stálost a sílu. Proto se každý, kdo chce kolem sebe sdružit druhé, má nejprve zeptat sám sebe, zda to unese. Kdo se do toho pustí bez povolání, způsobí větší zmatek než žádné sjednocení.",
            "V práci jde o budování týmu, partnerství nebo komunity. Pokud existuje opravdový střed, váhající se přidají sami. Čas je ale důležitý: kdo přijde příliš pozdě, může najít zavřené dveře. Ve vztazích se vazby upevňují sdílenými zkušenostmi. Kdo se necítí na to být středem, má se stát členem jiného zdravého společenství.",
            "Rizikem je vést druhé bez skutečné způsobilosti. Dalším rizikem je váhání, kdy promeškáš správnou chvíli pro spojení. Třetím je přidávat se k nesprávnému středu jen ze strachu ze samoty.",
            "Prověř sám sebe: máš vizi, stálost a sílu být středem? Pokud ano, jednej otevřeně a nikoho nenaháněj. Pokud ne, najdi společenství, kam patříš, a přidej se včas, s plnou oddaností."
        ],
        "vyklad_en": [
            "Water on the earth joins wherever it can, as rivers flow into the sea. The hexagram shows the power of togetherness: people unite around a trustworthy centre and complement one another. Good fortune comes, but only to the one truly fit for such a union.",
            "For people to unite they need a centre. Becoming a centre is a serious matter and carries great responsibility. It demands greatness of spirit, constancy and strength. Anyone who wants to gather others around him should first ask whether he is equal to it. Whoever begins without a calling creates more confusion than no union at all.",
            "At work this is building a team, partnership or community. If a real centre exists, the hesitant join of their own accord. Timing matters, though: whoever comes too late may find the door shut. In relationships, bonds are strengthened by shared experience. Whoever does not feel strong enough to be the centre should become a member of another healthy fellowship.",
            "The risk is leading others without real fitness. Another is hesitating and missing the right moment for union. A third is joining the wrong centre out of fear of loneliness.",
            "Examine yourself: do you have vision, constancy and strength to be a centre? If so, act openly and chase no one. If not, find the fellowship where you belong and join in time, with full devotion."
        ],
        "cary": {
            "1": {
                "klasika": "První čára, přerušená, ukazuje jeho předmět, který se snaží svou upřímností získat náklonnost svého předmětu. Nebude chyba. Ať je (hruď) plná upřímnosti jako hliněná nádoba svým obsahem, a nakonec to přinese i jiné výhody.",
                "klasika_en": "The first line, divided, shows its subject seeking by his sincerity to win the attachment of his object. There will be no error. Let (the breast) be full of sincerity as an earthenware vessel is of its contents, and it will in the end bring other advantages.",
                "vyklad": [
                    "Základem každého spojení je upřímnost. Plný hliněný džbán je lepší než zlatá prázdná forma.",
                    "Pravý vztah nevzniká z chytrých slov, ale ze síly, která je uvnitř mluvčího. Obraz plné hliněné nádoby ukazuje, že obsah je vše a prázdná forma nic. Taková vnitřní síla má schopnost přitahovat štěstí i zvenčí.",
                    "V práci buduj vztahy s klienty a partnery upřímností a spolehlivostí, ne dojmem. Ve vztazích se osvědčí jednoduchá pravdivost. Zvenčí přijde podpora, kterou jsi nehledal.",
                    "Rizikem je okázalost, tedy krásná forma bez obsahu. Dalším rizikem je upřímnost, kterou druhý zneužije.",
                    "Buď jednoduchý a pravdivý. Dej do vztahu skutečný obsah a čas. Důvěra se zhodnotí v pravý čas."
                ],
                "vyklad_en": [
                    "Sincerity is the basis of every union. A full earthen jug beats a gold empty form.",
                    "A real relationship arises not from clever words but from the strength within the speaker. The image of a full earthen bowl shows that the content is everything and the empty form nothing. Such inner strength can attract good fortune even from outside.",
                    "At work build relations with clients and partners through honesty and reliability, not impression. In relationships simple truthfulness proves itself. Support will arrive from outside that you did not seek.",
                    "The risk is display, a beautiful form without content. Another is sincerity that the other abuses.",
                    "Be simple and truthful. Put real content and time into the relationship. Trust will pay off in its own time."
                ]
            },
            "2": {
                "klasika": "Ve druhé čáře, přerušené, vidíme pohyb směrem ke spojení a náklonnosti vycházející z nitra (mysli). S pevnou správností bude štěstí.",
                "klasika_en": "In the second line, divided, we see the movement towards union and attachment proceeding from the inward (mind). With firm correctness there will be good fortune.",
                "vyklad": [
                    "Spojení vychází zevnitř. Odpovídáš na výzvy, které jsou ti skutečně určeny, a neztrácíš sám sebe.",
                    "Kdo odpovídá vytrvale a správným způsobem na impulzy shora, které ho vybízejí k činu, má vztahy vnitřně pevné a neztrácí se v nich. Kdo se naopak sdružuje jako dotěrný uchazeč o přízeň, zahazuje se. Nejde cestou vznešeného člověka, který neztrácí důstojnost.",
                    "V práci se připojuj k tomu, co s tebou skutečně souzní, ne k tomu, co je zrovna výhodné. Ve vztazích si udržuj vlastní hodnotu. Pozornost vyjadřuj vnitřně a bez zbytečného nabízení.",
                    "Rizikem je přílišná snaha zalíbit se. Druhým je uzavřenost, která se bojí jakéhokoli spojení.",
                    "Zachovej si důstojnost. Přidej se tam, kde tě to vnitřně táhne, a jdi po své linii. Pevnost v sobě přináší štěstí."
                ],
                "vyklad_en": [
                    "Union comes from within. You answer calls that are truly meant for you and do not lose yourself.",
                    "Whoever answers perseveringly and in the right way the summons from above that call him to action has inwardly firm relations and does not lose himself in them. Whoever instead seeks association like an obsequious office hunter throws himself away. He does not follow the path of the superior person, who never loses dignity.",
                    "At work join what truly resonates with you, not what is merely convenient. In relationships keep your own worth. Show attention inwardly and without needless offering of yourself.",
                    "The risk is excessive effort to please. The other is reserve that fears any union.",
                    "Keep your dignity. Join where you are inwardly drawn and follow your own line. Firmness within brings good fortune."
                ]
            },
            "3": {
                "klasika": "Ve třetí čáře, přerušené, vidíme jeho předmět, který hledá spojení s nevhodnými lidmi.",
                "klasika_en": "In the third line, divided, we see its subject seeking union with improper persons.",
                "vyklad": [
                    "Obklopen lidmi, kteří k tobě nepatří, snadno sklouzneš do falešné důvěrnosti. Nevhodné spojení má zlé následky.",
                    "Často se ocitáme mezi lidmi, kteří nejsou z naší sféry. Hrozí, že nás zvyk vtáhne do vztahu, který neodpovídá našemu skutečnému já. Správný postoj je společenskost bez důvěrnosti. Jen tak zůstaneš svobodný, abys později vstoupil do vztahu s lidmi svého druhu.",
                    "V práci jde o kolegy nebo partnery, s nimiž sdílíš prostor, ale ne hodnoty. Zachovej profesionální zdvořilost bez zbytečného sblížení. Ve vztazích se vyhýbej závazkům jen ze zvyku.",
                    "Rizikem je ztráta sebe sama v nevhodné skupině. Dalším rizikem je izolace, pokud zavřeš dveře všem.",
                    "Buď přátelský, ale zachovej odstup. Neotvírej se těm, kdo tvé hodnoty nesdílejí. Šetři blízkost pro ty, kdo ti opravdu patří."
                ],
                "vyklad_en": [
                    "Surrounded by people who do not belong to you, it is easy to slide into false intimacy. An unsuitable union has bad consequences.",
                    "We often find ourselves among people who are not from our own sphere. The danger is that habit pulls us into a relationship that does not match our real self. The right attitude is sociability without intimacy. Only so do you stay free to enter relationships with people of your own kind later.",
                    "At work these are colleagues or partners with whom you share space but not values. Keep professional courtesy without needless closeness. In relationships avoid commitments out of mere habit.",
                    "The risk is losing yourself in an unsuitable group. Another is isolation if you close the door to everyone.",
                    "Be friendly but keep distance. Do not open up to those who do not share your values. Save closeness for those who truly belong to you."
                ]
            },
            "4": {
                "klasika": "Ve čtvrté čáře, přerušené, vidíme jeho předmět, který hledá spojení s tím, kdo je nad ním. S pevnou správností bude štěstí.",
                "klasika_en": "In the fourth line, divided, we see its subject seeking for union with the one beyond himself. With firm correctness there will be good fortune.",
                "vyklad": [
                    "Vztah k vhodnému středu je už upevněn. Nyní je správné projevit náklonnost otevřeně a zůstat stálý.",
                    "Vztahy s osobou, která je střed sdružení, jsou dobře založeny. Pak můžeme a máme vyjádřit svou příslušnost i navenek. Důležité je zůstat stálý a nenechat se svést stranou. Otevřenost k tomu, kdo si ji zaslouží, posiluje celek.",
                    "V práci se jasně přihlas k vedení, týmu nebo projektu, kterému věříš. Ve vztazích vyjádři, že ti na druhém záleží. Veřejný závazek přináší klid.",
                    "Rizikem je přehnaná oddanost bez kritického úsudku. Dalším je kolísavost, kdy se odevzdanost po první zkoušce rozplyne.",
                    "Pojmenuj svou věrnost a drž ji. Pracuj pro společné dílo a vytrvej. Pevnost ve správném spojení přináší štěstí."
                ],
                "vyklad_en": [
                    "The relationship to a suitable centre is established. Now it is right to show attachment openly and remain constant.",
                    "Relations with the person who is the centre of union are well founded. Then we may, and should, express our belonging outwardly too. It matters to stay constant and not be led astray. Openness toward one who deserves it strengthens the whole.",
                    "At work declare clearly for the leadership, team or project you trust. In relationships express that the other matters to you. Public commitment brings calm.",
                    "The risk is excessive devotion without critical judgement. Another is wavering, where devotion dissolves after the first test.",
                    "Name your loyalty and keep it. Work for the common effort and persevere. Firmness in the right union brings good fortune."
                ]
            },
            "5": {
                "klasika": "Pátá čára, nepřerušená, poskytuje nejslavnější příklad hledání spojení a náklonnosti. (Zdá se, že v ní vidíme) krále, který pronásleduje zvěř (jen) ve třech směrech a nechává uniknout všechna zvířata před sebou, zatímco obyvatelé jeho měst se navzájem nevaruje (aby tomu zabránili). Bude štěstí.",
                "klasika_en": "The fifth line, undivided, affords the most illustrious instance of seeking union and attachment. (We seem to see in it) the king urging his pursuit of the game (only) in three directions, and allowing the escape of all the animals before him, while the people of his towns do not warn one another (to prevent it). There will be good fortune.",
                "vyklad": [
                    "Přirozený střed nikoho nenaháněl a nikomu nelichotí. Ti, kdo mají přijít, přijdou ze své vůle.",
                    "Král při honu vyhání zvěř ze tří stran a čtvrtou nechává volnou. Dostane jen zvěř, která vstoupila sama. Obraz ukazuje vůdce, ke kterému se lidé sami obracejí. Koho přijme, přijme; kdo neodejde, odejde. Z toho vzniká dobrovolná závislost, v níž se lidé nemusí bát a mohou mluvit otevřeně. Stejné pravidlo svobody platí obecně: o přízeň se nemá škemrat.",
                    "V práci buduj tým a zákazníky kvalitou a důvěrou, ne tlakem. Nenaháněj ty, kdo nechtějí. Ve vztazích pěstuj vlastní čistotu a sílu, a ti, kdo jsou ti určeni, přijdou sami.",
                    "Rizikem je nátlak, manipulace a naháněči, kteří vytvářejí falešnou loajalitu. Opačně hrozí lhostejnost, která nechá odejít i ty, na kterých záleží.",
                    "Buď takový střed, jaký sám chceš následovat. Nikoho nenuť, nikomu nelichoť a nech lidem svobodu. Důvěra tak vzniká přirozeně."
                ],
                "vyklad_en": [
                    "A natural centre chases no one and flatters no one. Those who are meant to come do so of their own will.",
                    "The king, hunting, drives game from three sides and leaves the fourth open. He takes only what enters of its own accord. The image shows a leader to whom people turn themselves. Those who come he accepts; those who do not are free to go. Out of this arises voluntary dependence in which people need not be on guard and can speak openly. The same principle of freedom holds generally: favour is not to be begged for.",
                    "At work build team and customers by quality and trust, not pressure. Do not chase those who do not want to come. In relationships cultivate your own purity and strength, and those meant for you will come on their own.",
                    "The risk is coercion, manipulation and drivers who create false loyalty. Conversely, indifference threatens, letting go even those who matter.",
                    "Be the kind of centre you would want to follow. Compel no one, flatter no one and leave people their freedom. Trust then arises naturally."
                ]
            },
            "6": {
                "klasika": "V nejvyšší čáře, přerušené, vidíme někoho, kdo hledá spojení a náklonnost, aniž by učinil první krok (k tomuto cíli). Bude zlo.",
                "klasika_en": "In the topmost line, divided, we see one seeking union and attachment without having taken the first step (to such an end). There will be evil.",
                "vyklad": [
                    "Hledat spojení bez začátku je marné. Kdo promeškal správný okamžik, bude toho litovat, až bude pozdě.",
                    "Hlava je začátek. Není-li začátek správný, není naděje na správný konec. Kdo propásl vhodný čas ke spojení a stále váhá s plnou oddaností, bude svou chybu litovat, až bude příliš pozdě. Dveře se zavřely a nadšení jiných už nelze dohnat.",
                    "V práci jde o promeškanou příležitost vstoupit do partnerství, projektu nebo trhu. Ve vztazích o váhání, které dlouho nechává druhého bez odpovědi. Teď je třeba přiznat, co se stalo, a začít novou cestou.",
                    "Rizikem je dál otálet s nadějí, že se věci vrátí. Druhým rizikem je zatrpklost nad zmeškaným.",
                    "Neodkládej první krok a nečekej na dokonalé podmínky. Pokud je pozdě, začni znovu někde jinde a naučíš se z toho. Rozhodni se včas."
                ],
                "vyklad_en": [
                    "Seeking union without a beginning is futile. Whoever missed the right moment will regret it when it is too late.",
                    "The head is the beginning. If the beginning is not right, there is no hope of a right ending. Whoever missed the right time for union and keeps hesitating to give full devotion will regret the error when it is too late. The door has closed and others' enthusiasm cannot be caught up with.",
                    "At work this is a missed chance to join a partnership, project or market. In relationships it is hesitation that leaves the other without a reply for too long. Now you must admit what happened and start by a new route.",
                    "The risk is dithering on in the hope that things will return. Another is bitterness over what was missed.",
                    "Do not postpone the first step and do not wait for perfect conditions. If it is late, begin again elsewhere and learn from it. Decide in time."
                ]
            }
        }
    },
    "9": {
        "nazev": "Siao Čchü / Zkrocení malé síly",
        "nazev_en": "Xiao Chu / The Taming Power of the Small",
        "rozsudek": "Úspěch. Husté mraky, ale žádný déšť ze západu. Malými krůčky a jemným působením lze dosáhnout velkých věcí.",
        "rozsudek_en": "Success. Dense clouds but no rain from our western region. Small steps and gentle influence can achieve great things.",
        "obraz": "Vítr žene mraky po nebi. Ušlechtilý člověk zušlechťuje vnější vzhled a drobné ctnosti.",
        "obraz_en": "The wind drives across heaven. The superior man refines the outward aspect of his nature and cultivates small virtues."
    },
    "10": {
        "nazev": "Lü / Vykročení",
        "nazev_en": "Lü / Treading (Conduct)",
        "rozsudek": "Šlapeš tygrovi na ocas, ale on tě nekousne. Úspěch. Opatrnost, slušnost a správný přístup zaženou každé nebezpečí.",
        "rozsudek_en": "Treading upon the tail of the tiger — it does not bite. Success. Caution, courtesy, and the right approach ward off every danger.",
        "obraz": "Heaven above, the lake below. The superior man discriminates between high and low and thereby fortifies the thinking of the people.",
        "obraz_en": "Heaven above, the lake below. The superior man discriminates between high and low and thereby fortifies the thinking of the people."
    },
    "11": {
        "nazev": "Tchaj / Mír a harmonie",
        "nazev_en": "Tai / Peace",
        "rozsudek": "Malé odchází, velké přichází. Štěstí, úspěch. Síly nebe a země jsou v dokonalém spojení, vše rozkvétá.",
        "rozsudek_en": "The small departs, the great approaches. Good fortune and success. The forces of heaven and earth are in perfect union — all things flourish.",
        "obraz": "Heaven and earth unite. The ruler divides and completes the course of heaven and earth and assists the people.",
        "obraz_en": "Heaven and earth unite. The ruler divides and completes the course of heaven and earth and assists the people."
    },
    "12": {
        "nazev": "Pchi / Stagnace",
        "nazev_en": "Pi / Standstill (Stagnation)",
        "rozsudek": "Zlí lidé nenesou prospěch ušlechtilému. Velké odchází, malé přichází. Čas stáhnout se do sebe a chránit svou hodnotu.",
        "rozsudek_en": "Evil people do not further the perseverance of the superior man. The great departs, the small approaches. Time to withdraw inward and protect your worth.",
        "obraz": "Heaven and earth do not unite. The superior man falls back upon his inner worth in order to escape the difficulties.",
        "obraz_en": "Heaven and earth do not unite. The superior man falls back upon his inner worth in order to escape the difficulties."
    },
    "13": {
        "nazev": "Tchung Žen / Společenství lidí",
        "nazev_en": "Tong Ren / Fellowship with Men",
        "rozsudek": "Společenství lidí na otevřeném prostranství. Úspěch. Je příznivé překročit velkou vodu. Spolupráce a sdílené ideály vedou k cíli.",
        "rozsudek_en": "Fellowship with men in the open. Success. It furthers to cross the great water. Cooperation and shared ideals lead to the goal.",
        "obraz": "Fire rises to heaven. The superior man organises the clans and makes distinctions between things.",
        "obraz_en": "Fire rises to heaven. The superior man organises the clans and makes distinctions between things."
    },
    "14": {
        "nazev": "Ta Jou / Velké državy",
        "nazev_en": "Da You / Possession in Great Measure",
        "rozsudek": "Nejvyšší úspěch. Bohatství a moc jsou ti dány, ale musí být spravovány s moudrostí a bez pýchy.",
        "rozsudek_en": "Supreme success. Wealth and power are granted to you, but they must be managed with wisdom and without pride.",
        "obraz": "Fire in heaven above. The superior man curbs evil and furthers good, and thereby obeys the benevolent will of heaven.",
        "obraz_en": "Fire in heaven above. The superior man curbs evil and furthers good, and thereby obeys the benevolent will of heaven."
    },
    "15": {
        "nazev": "Čchien / Skromnost",
        "nazev_en": "Qian / Modesty",
        "rozsudek": "Skromnost přináší úspěch. Ušlechtilý člověk dokáže věci dotáhnout do konce. Kdo se snižuje, bude povýšen.",
        "rozsudek_en": "Modesty creates success. The superior man carries things through. He who humbles himself shall be exalted.",
        "obraz": "Within the earth, a mountain. The superior man reduces that which is too much and augments that which is too little.",
        "obraz_en": "Within the earth, a mountain. The superior man reduces that which is too much and augments that which is too little."
    },
    "16": {
        "nazev": "Jü / Nadšení",
        "nazev_en": "Yu / Enthusiasm",
        "rozsudek": "Je příznivé ustanovit pomocníky a uvést vojska do pohybu. Radost a hudba spojují lid a dodávají mu odvahu.",
        "rozsudek_en": "It furthers one to install helpers and to set armies marching. Joy and music unite the people and lend them courage.",
        "obraz": "Thunder comes resounding out of the earth. The ancient kings made music in order to honor merit and offered it to God.",
        "obraz_en": "Thunder comes resounding out of the earth. The ancient kings made music in order to honor merit and offered it to God."
    },
    "17": {
        "nazev": "Suej / Následování",
        "nazev_en": "Sui / Following",
        "rozsudek": "Nejvyšší úspěch. Podporuje vytrvalost. Bez viny. Kdo umí plynout s proudem a přizpůsobit se, stane se přirozeným vůdcem.",
        "rozsudek_en": "Supreme success. Perseverance furthers. No blame. He who flows with the current and adapts becomes a natural leader.",
        "obraz": "Thunder in the middle of the lake. The superior man at nightfall goes indoors for rest and recuperation.",
        "obraz_en": "Thunder in the middle of the lake. The superior man at nightfall goes indoors for rest and recuperation."
    },
    "18": {
        "nazev": "Ku / Náprava zkaženého",
        "nazev_en": "Gu / Work on What Has Been Spoiled",
        "rozsudek": "Nejvyšší úspěch. Je příznivé překročit velkou vodu. Čas napravit staré chyby. Tři dny před začátkem, tři dny po začátku.",
        "rozsudek_en": "Supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days.",
        "obraz": "The wind blows low on the mountain. The superior man stirs up the people and strengthens their spirit.",
        "obraz_en": "The wind blows low on the mountain. The superior man stirs up the people and strengthens their spirit."
    },
    "19": {
        "nazev": "Lin / Sbližování",
        "nazev_en": "Lin / Approach",
        "rozsudek": "Nejvyšší úspěch. Jaro přichází a vše roste. Ale až přijde osmý měsíc, dostaví se neštěstí. Využij příznivé doby, dokud trvá.",
        "rozsudek_en": "Supreme success. Spring comes and all things grow. But when the eighth month comes, there will be misfortune. Use the favorable time while it lasts.",
        "obraz": "The earth above the lake. The superior man is inexhaustible in his will to teach, and without limits in his tolerance and protection of the people.",
        "obraz_en": "The earth above the lake. The superior man is inexhaustible in his will to teach, and without limits in his tolerance and protection of the people."
    },
    "20": {
        "nazev": "Kuan / Pozorování",
        "nazev_en": "Guan / Contemplation (View)",
        "rozsudek": "Oběť byla přinesena, ale hostina ještě nezačala. Všichni vzhlížejí s úctou. Je čas rozjímat a vidět širší souvislosti.",
        "rozsudek_en": "The ablution has been made, but not yet the offering. Full of trust they look up to him. It is time to contemplate and see the wider connections.",
        "obraz": "The wind blows over the earth. The ancient kings visited the regions of the world, contemplated the people, and gave them instruction.",
        "obraz_en": "The wind blows over the earth. The ancient kings visited the regions of the world, contemplated the people, and gave them instruction."
    },
    "21": {
        "nazev": "Š' Cho / Překousnutí",
        "nazev_en": "Shi He / Biting Through",
        "rozsudek": "Úspěch. Je příznivé vykonávat spravedlnost. Problém musí být rázně překousnut, aby se obnovil řád a čistota.",
        "rozsudek_en": "Success. It furthers one to let justice be administered. The obstacle must be decisively bitten through to restore order and clarity.",
        "obraz": "Thunder and lightning. The kings of former times made firm the laws through clearly defined penalties.",
        "obraz_en": "Thunder and lightning. The kings of former times made firm the laws through clearly defined penalties."
    },
    "22": {
        "nazev": "Pi / Půvab",
        "nazev_en": "Bi / Grace",
        "rozsudek": "Úspěch. V malých věcech je příznivé něco podniknout. Krása je důležitá, ale nesmí zakrývat prázdnotu vnitra.",
        "rozsudek_en": "Success. It furthers one to undertake something in small matters. Beauty matters, but it must not conceal inner emptiness.",
        "obraz": "Fire at the foot of the mountain. The superior man proceeds in clearing up current affairs, but dare not decide controversial issues.",
        "obraz_en": "Fire at the foot of the mountain. The superior man proceeds in clearing up current affairs, but dare not decide controversial issues."
    },
    "23": {
        "nazev": "Po / Odpadávání",
        "nazev_en": "Bo / Splitting Apart",
        "rozsudek": "Není příznivé nikam postupovat. Temnota pohlcuje světlo. Zachovej klid a vyčkej, až se starý řád sám zhroutí.",
        "rozsudek_en": "It does not further one to go anywhere. Darkness is consuming the light. Remain calm and wait for the old order to collapse by itself.",
        "obraz": "The mountain rests on the earth. Those above can ensure their position only by giving generously to those below.",
        "obraz_en": "The mountain rests on the earth. Those above can ensure their position only by giving generously to those below."
    },
    "24": {
        "nazev": "Fu / Návrat",
        "nazev_en": "Fu / Return (The Turning Point)",
        "rozsudek": "Úspěch. Vycházení a vcházení bez újmy. Přátelé přicházejí. Bod obratu. Po temnotě se světlo začíná vracet.",
        "rozsudek_en": "Success. Going out and coming in without error. Friends come without blame. The turning point. After darkness the light begins to return.",
        "obraz": "Thunder within the earth. The kings of antiquity closed the passes at the time of solstice. Merchants and strangers did not travel.",
        "obraz_en": "Thunder within the earth. The kings of antiquity closed the passes at the time of solstice. Merchants and strangers did not travel."
    },
    "25": {
        "nazev": "Wu Wang / Nevinnost",
        "nazev_en": "Wu Wang / Innocence (The Unexpected)",
        "rozsudek": "Nejvyšší úspěch. Kdo není spravedlivý a bezelstný, toho stihne neštěstí a není mu k užitku nic podnikat.",
        "rozsudek_en": "Supreme success. If a man is not as he should be, he has misfortune, and it does not further him to undertake anything.",
        "obraz": "Under heaven, thunder rolls. The kings of old, rich in virtue, administered the world in accord with the seasons.",
        "obraz_en": "Under heaven, thunder rolls. The kings of old, rich in virtue, administered the world in accord with the seasons."
    },
    "26": {
        "nazev": "Ta Čchü / Zkrocení velké síly",
        "nazev_en": "Da Chu / The Taming Power of the Great",
        "rozsudek": "Příznivé pro vytrvalost. Nejíst doma přináší štěstí. Je příznivé překročit velkou vodu. Hromadění energie pro velký čin.",
        "rozsudek_en": "Perseverance furthers. Not eating at home brings good fortune. It furthers to cross the great water. Accumulate energy for a great deed.",
        "obraz": "Heaven within the mountain. The superior man acquaints himself with many sayings of antiquity and many deeds of the past in order to strengthen his character.",
        "obraz_en": "Heaven within the mountain. The superior man acquaints himself with many sayings of antiquity and many deeds of the past in order to strengthen his character."
    },
    "27": {
        "nazev": "I / Výživa",
        "nazev_en": "Yi / The Corners of the Mouth (Nourishment)",
        "rozsudek": "Vytrvalost přináší štěstí. Pozoruj, čím člověk sytí sebe sama a čím sytí druhé. Dbej na to, co vkládáš do úst i do mysli.",
        "rozsudek_en": "Perseverance brings good fortune. Pay heed to the providing of nourishment and to what a man seeks to fill his own mouth with.",
        "obraz": "At the foot of the mountain, thunder. The superior man is careful of his words and temperate in eating and drinking.",
        "obraz_en": "At the foot of the mountain, thunder. The superior man is careful of his words and temperate in eating and drinking."
    },
    "28": {
        "nazev": "Ta Kuo / Převaha velkého",
        "nazev_en": "Da Guo / Preponderance of the Great",
        "rozsudek": "Střešní trám se prohýbá pod tíhou. Je příznivé někam jít. Úspěch. Tlak je příliš velký, je nutné učinit zásadní a rychlé rozhodnutí.",
        "rozsudek_en": "The ridgepole sags to the breaking point. It furthers one to have somewhere to go. Success. The pressure is too great — a decisive and swift decision must be made.",
        "obraz": "The lake rises above the trees. The superior man, when he stands alone, is unconcerned. If he has to renounce the world, he is undaunted.",
        "obraz_en": "The lake rises above the trees. The superior man, when he stands alone, is unconcerned. If he has to renounce the world, he is undaunted."
    },
    "29": {
        "nazev": "Kchan / Hlubina (Voda)",
        "nazev_en": "Kan / The Abysmal (Water)",
        "rozsudek": "Hluboká propast. Upřímnost srdce přinese úspěch. Zůstaň věrný sám sobě, i když padáš do tmy, a najdeš cestu ven.",
        "rozsudek_en": "The Abysmal repeated. Have confidence in your heart. Action brings success. Remain true to yourself even as you fall into darkness and you will find the way out.",
        "obraz": "Water flows on uninterruptedly and reaches its goal. The superior man walks in lasting virtue and carries on the business of teaching.",
        "obraz_en": "Water flows on uninterruptedly and reaches its goal. The superior man walks in lasting virtue and carries on the business of teaching."
    },
    "30": {
        "nazev": "Li / Přilnutí (Oheň)",
        "nazev_en": "Li / The Clinging (Fire)",
        "rozsudek": "Vytrvalost přináší úspěch. Péče o krávu přináší štěstí. Přilni k tomu, co je světlé a jasné, a budeš osvěcovat druhé.",
        "rozsudek_en": "Perseverance furthers. It brings success. Care of the cow brings good fortune. Cling to that which is bright and clear, and you will illuminate others.",
        "obraz": "That which is bright rises twice. The great man, by perpetuating this brightness, illumines the four quarters of the world.",
        "obraz_en": "That which is bright rises twice. The great man, by perpetuating this brightness, illumines the four quarters of the world."
    },
    "31": {
        "nazev": "Sien / Vzájemné působení",
        "nazev_en": "Xian / Influence (Wooing)",
        "rozsudek": "Úspěch. Příznivé pro vytrvalost. Vzít si dívku přináší štěstí. Otevři se druhým bez předsudků a bude ti odpovězeno.",
        "rozsudek_en": "Success. Perseverance furthers. To take a maiden to wife brings good fortune. Open yourself to others without prejudice and you will be answered.",
        "obraz": "A lake on the mountain. The superior man encourages people to approach him by his readiness to receive them.",
        "obraz_en": "A lake on the mountain. The superior man encourages people to approach him by his readiness to receive them."
    },
    "32": {
        "nazev": "Cheng / Trvání",
        "nazev_en": "Heng / Duration",
        "rozsudek": "Úspěch. Bez viny. Příznivé pro vytrvalost. Je příznivé někam jít. Co je hluboce pravdivé, vydrží navždy.",
        "rozsudek_en": "Success. No blame. Perseverance furthers. It furthers one to have somewhere to go. What is deeply true endures forever.",
        "obraz": "Thunder and wind. The superior man stands firm and does not change his direction.",
        "obraz_en": "Thunder and wind. The superior man stands firm and does not change his direction."
    },
    "33": {
        "nazev": "Tun / Ústup",
        "nazev_en": "Dun / Retreat",
        "rozsudek": "Úspěch. V malém je příznivá vytrvalost. Moudrý ústup není porážka — je to zachování sil pro správný čas.",
        "rozsudek_en": "Success. In what is small, perseverance furthers. A wise retreat is not defeat — it is the preservation of strength for the right moment.",
        "obraz": "Mountain under heaven. The superior man keeps the inferior man at a distance, not angrily but with reserve.",
        "obraz_en": "Mountain under heaven. The superior man keeps the inferior man at a distance, not angrily but with reserve."
    },
    "34": {
        "nazev": "Ta Čuang / Velká síla",
        "nazev_en": "Da Zhuang / The Power of the Great",
        "rozsudek": "Příznivé pro vytrvalost. Velká síla ti byla svěřena — používej ji s moudrostí a bez arogance.",
        "rozsudek_en": "Perseverance furthers. Great power has been entrusted to you — use it with wisdom and without arrogance.",
        "obraz": "Thunder in heaven above. The superior man does not tread paths that do not accord with established order.",
        "obraz_en": "Thunder in heaven above. The superior man does not tread paths that do not accord with established order."
    },
    "35": {
        "nazev": "Ťin / Pokrok",
        "nazev_en": "Jin / Progress",
        "rozsudek": "Silný princ je uznáván, dostává koně v hojném počtu. V jediný den je třikrát přijat. Pokrok je snadný a přirozený.",
        "rozsudek_en": "The powerful prince is honored with horses in large numbers. In a single day he is granted audience three times. Progress is easy and natural.",
        "obraz": "The sun rises over the earth. The superior man himself brightens his bright virtue.",
        "obraz_en": "The sun rises over the earth. The superior man himself brightens his bright virtue."
    },
    "36": {
        "nazev": "Ming I / Zranění světla",
        "nazev_en": "Ming Yi / Darkening of the Light",
        "rozsudek": "Je příznivá vytrvalost v obtížích. Skryj své světlo před těmi, kdo ti nerozumí, a uchráníš tak svou podstatu.",
        "rozsudek_en": "It furthers one to be persevering in adversity. Hide your light from those who do not understand you, and thus protect your essence.",
        "obraz": "The light has sunk into the earth. The superior man lives with the great mass: he veils his light, yet still shines.",
        "obraz_en": "The light has sunk into the earth. The superior man lives with the great mass: he veils his light, yet still shines."
    },
    "37": {
        "nazev": "Ťia Žen / Rodina",
        "nazev_en": "Jia Ren / The Family (The Clan)",
        "rozsudek": "Je příznivá vytrvalost ženy. Když je v rodině řád, otec je otcem, syn synem, bratr bratrem, svět bude v harmonii.",
        "rozsudek_en": "The perseverance of the woman furthers. When the family is in order, father is father, son is son, brother is brother — the world will be in harmony.",
        "obraz": "Wind comes forth from fire. The superior man has substance in his words and duration in his way of life.",
        "obraz_en": "Wind comes forth from fire. The superior man has substance in his words and duration in his way of life."
    },
    "38": {
        "nazev": "Kchuej / Protiklady",
        "nazev_en": "Kui / Opposition",
        "rozsudek": "V malých věcech štěstí. Oheň stoupá vzhůru, voda klesá dolů. Protiklady se střetávají, ale i v nedorozumění lze najít skrytý smysl.",
        "rozsudek_en": "In small matters, good fortune. Fire burns upward, water flows downward. Opposites clash, but even in misunderstanding a hidden meaning can be found.",
        "obraz": "Above, fire; below, the lake. The superior man retains his individuality amid the fellowship of men.",
        "obraz_en": "Above, fire; below, the lake. The superior man retains his individuality amid the fellowship of men."
    },
    "39": {
        "nazev": "Ťien / Překážka",
        "nazev_en": "Jian / Obstruction",
        "rozsudek": "Jihozápad je příznivý, severovýchod nikoliv. Je čas vidět velkého muže. Překážky tě nutí zastavit a podívat se do svého nitra.",
        "rozsudek_en": "The southwest furthers. The northeast does not further. It furthers one to see the great man. Obstacles force you to stop and look within yourself.",
        "obraz": "Water on the mountain. The superior man turns his attention to himself and molds his character.",
        "obraz_en": "Water on the mountain. The superior man turns his attention to himself and molds his character."
    },
    "40": {
        "nazev": "Ťie / Uvolnění",
        "nazev_en": "Jie / Deliverance",
        "rozsudek": "Jihozápad je příznivý. Pokud už není kam jít, návrat přináší štěstí. Napětí polevuje, bouře přešla, odpusť a posuň se dál.",
        "rozsudek_en": "The southwest furthers. If there is no longer anything to be done, return brings good fortune. The tension eases, the storm has passed — forgive and move forward.",
        "obraz": "Thunder and rain set in. The superior man pardons mistakes and forgives misdeeds.",
        "obraz_en": "Thunder and rain set in. The superior man pardons mistakes and forgives misdeeds."
    },
    "41": {
        "nazev": "Sun / Úbytek",
        "nazev_en": "Sun / Decrease",
        "rozsudek": "Upřímnost přináší nejvyšší štěstí. Obětuj něco malého pro vyšší cíl. Méně věcí a myšlenek uvolní prostor pro opravdovou hloubku.",
        "rozsudek_en": "Decrease combined with sincerity brings supreme good fortune. Sacrifice something small for a higher goal. Fewer things and thoughts open space for true depth.",
        "obraz": "At the foot of the mountain, the lake. The superior man controls his anger and restrains his instincts.",
        "obraz_en": "At the foot of the mountain, the lake. The superior man controls his anger and restrains his instincts."
    },
    "42": {
        "nazev": "I / Přírůstek",
        "nazev_en": "Yi / Increase",
        "rozsudek": "Příznivé někam směřovat. Je příznivé překročit velkou vodu. Doba hojnosti a růstu, štědrost přináší další požehnání.",
        "rozsudek_en": "It furthers one to undertake something. It furthers one to cross the great water. A time of abundance and growth — generosity brings further blessings.",
        "obraz": "Wind and thunder. The superior man, when he sees good, imitates it. When he has faults, he rids himself of them.",
        "obraz_en": "Wind and thunder. The superior man, when he sees good, imitates it. When he has faults, he rids himself of them."
    },
    "43": {
        "nazev": "Kuaj / Průlom",
        "nazev_en": "Guai / Break-through (Resoluteness)",
        "rozsudek": "Je třeba rázně a otevřeně odhalit pravdu na dvoře krále. Varuj své město. Neuchyluj se ke zbraním. Cesta vpřed vede přes jasné rozhodnutí.",
        "rozsudek_en": "The matter must be resolutely brought to the attention of the king's court. It must be announced truthfully. Notify your own city. It does not further to resort to arms. The way forward lies through a clear decision.",
        "obraz": "The lake has risen up to heaven. The superior man dispenses riches downward and refrains from resting on his virtue.",
        "obraz_en": "The lake has risen up to heaven. The superior man dispenses riches downward and refrains from resting on his virtue."
    },
    "44": {
        "nazev": "Kou / Setkání",
        "nazev_en": "Gou / Coming to Meet",
        "rozsudek": "Dívka je mocná. Není příznivé vzít si takovou dívku. Nečekané setkání temné energie, buď ostražitý před pokušeními a náhlými vlivy.",
        "rozsudek_en": "The maiden is powerful. One should not marry such a maiden. An unexpected encounter with dark energy — be alert to temptations and sudden influences.",
        "obraz": "Under heaven, wind. The prince acts in accordance with the commands of heaven, and proclaims them abroad.",
        "obraz_en": "Under heaven, wind. The prince acts in accordance with the commands of heaven, and proclaims them abroad."
    },
    "45": {
        "nazev": "Cuej / Shromáždění",
        "nazev_en": "Cui / Gathering Together (Massing)",
        "rozsudek": "Úspěch. Král se blíží ke svému chrámu. Je příznivé vidět velkého muže. Společný cíl tvoří obrovskou sílu a požehnání.",
        "rozsudek_en": "Success. The king approaches his temple. It furthers one to see the great man. A common goal creates enormous strength and blessing.",
        "obraz": "Over the earth, the lake. The superior man renews his weapons in order to meet the unforeseen.",
        "obraz_en": "Over the earth, the lake. The superior man renews his weapons in order to meet the unforeseen."
    },
    "46": {
        "nazev": "Šeng / Stoupání",
        "nazev_en": "Sheng / Pushing Upward",
        "rozsudek": "Nejvyšší úspěch. Je příznivé vidět velkého muže. Cesta na jih přináší štěstí. Jako strom rostoucí ze země, i ty plynule stoupáš k úspěchu.",
        "rozsudek_en": "Supreme success. It furthers one to see the great man. Pushing southward furthers. Like a tree growing from the earth, you rise steadily toward success.",
        "obraz": "Within the earth, wood grows. The superior man of devoted character heaps up small things in order to achieve something high and great.",
        "obraz_en": "Within the earth, wood grows. The superior man of devoted character heaps up small things in order to achieve something high and great."
    },
    "47": {
        "nazev": "Kchun / Vyčerpání",
        "nazev_en": "Kun / Oppression (Exhaustion)",
        "rozsudek": "Úspěch pro pevného muže. Bez viny. Když mluvíš, nikdo nevěří. Zkouška charakteru v těžkých časech, tvou jedinou silou je tvůj postoj.",
        "rozsudek_en": "Success for the strong man. No blame. When he has something to say, it is not believed. A test of character in hard times — your only strength is your attitude.",
        "obraz": "There is no water in the lake. The superior man stakes his life on following his will.",
        "obraz_en": "There is no water in the lake. The superior man stakes his life on following his will."
    },
    "48": {
        "nazev": "Ťing / Studna",
        "nazev_en": "Jing / The Well",
        "rozsudek": "Město může být přesunuto, ale studna ne. Pokud se provaz přetrhne dřív, než džbán dosáhne vody, je to neštěstí. Hluboký zdroj moudrosti tě nikdy neopustí.",
        "rozsudek_en": "The town may be changed, but the well cannot be changed. If the rope does not go all the way, or the jug breaks, misfortune. The deep source of wisdom will never abandon you.",
        "obraz": "Water over wood. The superior man encourages the people at their work and exhorts them to help one another.",
        "obraz_en": "Water over wood. The superior man encourages the people at their work and exhorts them to help one another."
    },
    "49": {
        "nazev": "Ko / Revoluce",
        "nazev_en": "Ge / Revolution (Molting)",
        "rozsudek": "Lidé uvěří až v ten den, kdy se to stane. Nejvyšší úspěch, vytrvalost přináší odměnu. Staré musí shořet, aby mohlo vzniknout nové.",
        "rozsudek_en": "On your own day you are believed. Supreme success. Perseverance furthers. The old must burn away so that the new can arise.",
        "obraz": "Fire in the lake. The superior man sets the calendar in order and makes the seasons clear.",
        "obraz_en": "Fire in the lake. The superior man sets the calendar in order and makes the seasons clear."
    },
    "50": {
        "nazev": "Ting / Kotel",
        "nazev_en": "Ding / The Cauldron",
        "rozsudek": "Nejvyšší úspěch. Proměna syrového na něco cenného. Tvé myšlenky a charakter se nyní taví a zjemňují k vyššímu duchovnímu účelu.",
        "rozsudek_en": "Supreme success. The transformation of the raw into something precious. Your thoughts and character are now being refined toward a higher spiritual purpose.",
        "obraz": "Fire over wood. The superior man consolidates his fate by making his position correct.",
        "obraz_en": "Fire over wood. The superior man consolidates his fate by making his position correct."
    },
    "51": {
        "nazev": "Čen / Bouře (Hrom)",
        "nazev_en": "Zhen / The Arousing (Shock, Thunder)",
        "rozsudek": "Úspěch. Hrom přináší hrůzu, pak smích. Šok tě probouzí ze spánku, aby tě očistil od strachu a připravil na nový začátek.",
        "rozsudek_en": "Success. Shock comes — oh, oh! Then laughter — ha, ha! The shock startles a hundred miles away. The jolt awakens you from sleep, cleansing you of fear and preparing you for a new beginning.",
        "obraz": "Thunder repeated. The superior man is always filled with reverence at the manifestation of God; he sets his life in order and examines himself.",
        "obraz_en": "Thunder repeated. The superior man is always filled with reverence at the manifestation of God; he sets his life in order and examines himself."
    },
    "52": {
        "nazev": "Ken / Hora",
        "nazev_en": "Gen / Keeping Still (Mountain)",
        "rozsudek": "Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame. Still your mind and find the absolute stillness of the center.",
        "rozsudek_en": "Keeping his back still so that he no longer feels his body. He goes into his courtyard and does not see his people. No blame. Still your mind and find the absolute stillness of the center.",
        "obraz": "Mountains standing close together. The superior man does not permit his thoughts to go beyond his situation.",
        "obraz_en": "Mountains standing close together. The superior man does not permit his thoughts to go beyond his situation."
    },
    "53": {
        "nazev": "Ťien / Pozvolný pokrok",
        "nazev_en": "Jian / Development (Gradual Progress)",
        "rozsudek": "Provdání dívky přináší štěstí. Postupuj trpělivě a organicky jako pták, který postupně přeletuje z pobřeží až na vrcholky hor.",
        "rozsudek_en": "The maiden is given in marriage. Good fortune. It furthers to be persevering. Advance patiently and organically like a bird that gradually moves from the shore to the mountain heights.",
        "obraz": "On the mountain, a tree. The superior man abides in dignity and virtue, in order to improve the mores.",
        "obraz_en": "On the mountain, a tree. The superior man abides in dignity and virtue, in order to improve the mores."
    },
    "54": {
        "nazev": "Kuej Mej / Provdaná dívka",
        "nazev_en": "Gui Mei / The Marrying Maiden",
        "rozsudek": "Podnikání nepřináší nic dobrého. Není výhodné nikam postupovat. Ocitl ses v situaci, kterou neovládáš. Musíš přijmout podřízenou roli.",
        "rozsudek_en": "Undertakings bring misfortune. Nothing that would further. You find yourself in a situation you cannot control. You must accept a subordinate role.",
        "obraz": "Thunder over the lake. The superior man understands the transitory in the light of the eternity of the end.",
        "obraz_en": "Thunder over the lake. The superior man understands the transitory in the light of the eternity of the end."
    },
    "55": {
        "nazev": "Feng / Hojnost",
        "nazev_en": "Feng / Abundance (Fullness)",
        "rozsudek": "Úspěch. Král dosáhl hojnosti. Nebuď smutný, buď jako slunce v poledne. Raduj se z vrcholu, ale nezapomeň, že po poledni se stíny prodlužují.",
        "rozsudek_en": "Success. The king attains abundance. Be not sad, be like the sun at midday. Rejoice at the peak, but remember that after noon the shadows lengthen.",
        "obraz": "Both thunder and lightning come. The superior man decides lawsuits and carries out punishments.",
        "obraz_en": "Both thunder and lightning come. The superior man decides lawsuits and carries out punishments."
    },
    "56": {
        "nazev": "Lü / Putování",
        "nazev_en": "Lü / The Wanderer",
        "rozsudek": "Úspěch v malém. Vytrvalost přináší štěstí poutníkovi. Jsi hostem, chovej se zdvořile, netlač na pilu a získáš si respekt cizích.",
        "rozsudek_en": "Success through smallness. Perseverance brings good fortune to the wanderer. You are a guest — be courteous, do not push, and you will earn the respect of strangers.",
        "obraz": "Fire on the mountain. The superior man is clear-minded and cautious in imposing penalties and protracts no lawsuits.",
        "obraz_en": "Fire on the mountain. The superior man is clear-minded and cautious in imposing penalties and protracts no lawsuits."
    },
    "57": {
        "nazev": "Sun / Pronikání (Vítr)",
        "nazev_en": "Xun / The Gentle (Wind, Wood)",
        "rozsudek": "Úspěch v malých věcech. Je příznivé vidět velkého muže. Jako vítr, který neustále fouká stejným směrem, i ty vytrvalou jemností pronikneš vším.",
        "rozsudek_en": "Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man. Like the wind that blows persistently in one direction, gentle perseverance penetrates all things.",
        "obraz": "Winds following one upon the other. The superior man spreads his commands abroad and carries out his undertakings.",
        "obraz_en": "Winds following one upon the other. The superior man spreads his commands abroad and carries out his undertakings."
    },
    "58": {
        "nazev": "Tuej / Radost (Jezero)",
        "nazev_en": "Dui / The Joyous (Lake)",
        "rozsudek": "Úspěch. Příznivé pro vytrvalost. Skutečná radost nevychází z povrchnosti, ale z vnitřní harmonie a sdílení dobré vůle s ostatními.",
        "rozsudek_en": "Success. Perseverance is favorable. True joy does not come from superficiality, but from inner harmony and the sharing of goodwill with others.",
        "obraz": "Lakes resting one on the other. The superior man joins with his friends for discussion and practice.",
        "obraz_en": "Lakes resting one on the other. The superior man joins with his friends for discussion and practice."
    },
    "59": {
        "nazev": "Chuan / Rozptýlení",
        "nazev_en": "Huan / Dispersion (Dissolution)",
        "rozsudek": "Úspěch. Král se blíží k chrámu. Je příznivé překročit velkou vodu. Zatvrdlé překážky roztávají, ego se rozplývá a staré rány se hojí.",
        "rozsudek_en": "Success. The king approaches his temple. It furthers to cross the great water. Hardened obstacles melt away, the ego dissolves and old wounds heal.",
        "obraz": "The wind drives over the water. The kings of old sacrificed to the Lord and built temples.",
        "obraz_en": "The wind drives over the water. The kings of old sacrificed to the Lord and built temples."
    },
    "60": {
        "nazev": "Ťie / Omezení",
        "nazev_en": "Jie / Limitation",
        "rozsudek": "Úspěch. Hořké omezení nelze snášet trvale. Vytvoř si hranice a pravidla, abys uchoval svou energii dřív, než ji zbytečně vyplýtváš.",
        "rozsudek_en": "Success. Galling limitation must not be persevered in. Create limits and rules for yourself to preserve your energy before you squander it needlessly.",
        "obraz": "Water over lake. The superior man creates number and measure and examines the nature of virtue and correct conduct.",
        "obraz_en": "Water over lake. The superior man creates number and measure and examines the nature of virtue and correct conduct."
    },
    "61": {
        "nazev": "Čung Fu / Vnitřní pravda",
        "nazev_en": "Zhong Fu / Inner Truth",
        "rozsudek": "Prasátka a ryby. Štěstí. Je příznivé překročit velkou vodu. Kdo má čisté a prázdné srdce, dokáže svou pravdou pohnout i zvířaty a živly.",
        "rozsudek_en": "Pigs and fishes. Good fortune. It furthers one to cross the great water. He whose heart is empty and clear can move even animals and the elements with his truth.",
        "obraz": "Wind over lake. The superior man discusses criminal cases in order to delay executions.",
        "obraz_en": "Wind over lake. The superior man discusses criminal cases in order to delay executions."
    },
    "62": {
        "nazev": "Siao Kuo / Převaha malého",
        "nazev_en": "Xiao Guo / Preponderance of the Small",
        "rozsudek": "Úspěch. Létající pták zanechává varovný křik. Neměl bys stoupat, ale klesat. Drž se při zemi a dělej malé věci s maximální péčí.",
        "rozsudek_en": "Success. The flying bird leaves the message: it is not meet to strive upward, it is meet to tarry below. Great good fortune. Stay close to the ground and do small things with utmost care.",
        "obraz": "Thunder on the mountain. The superior man in all his conduct gives preponderance to reverence.",
        "obraz_en": "Thunder on the mountain. The superior man in all his conduct gives preponderance to reverence."
    },
    "63": {
        "nazev": "Ťi Ťi / Po dokončení",
        "nazev_en": "Ji Ji / After Completion",
        "rozsudek": "Úspěch v malých věcech. Na začátku štěstí, na konci zmatek. Dosažení cíle není konec, je to nejkřehčí okamžik, vyžadující dokonalou bdělost.",
        "rozsudek_en": "Success in small matters. Perseverance furthers. At the beginning, good fortune. At the end, disorder. Reaching the goal is not the end — it is the most fragile moment, requiring perfect vigilance.",
        "obraz": "Water over fire. The superior man takes thought of misfortune and arms himself against it in advance.",
        "obraz_en": "Water over fire. The superior man takes thought of misfortune and arms himself against it in advance."
    },
    "64": {
        "nazev": "Wej Ťi / Před dokončením",
        "nazev_en": "Wei Ji / Before Completion",
        "rozsudek": "Úspěch. Ale pokud liška při překračování řeky namočí svůj ocas, nic nebude výhodné. Než uděláš poslední krok do nového cyklu, zvaž rizika.",
        "rozsudek_en": "Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further. Before you take the last step into a new cycle, weigh the risks.",
        "obraz": "Fire over water. The superior man is careful in the differentiation of things, so that each finds its place.",
        "obraz_en": "Fire over water. The superior man is careful in the differentiation of things, so that each finds its place."
    }
};
