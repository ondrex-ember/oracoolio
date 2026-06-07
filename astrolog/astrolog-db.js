// ═══════════════════════════════════════════════════════════════
// ORACOOLIO — Astrolog | Kompletní Keferova databáze
// Zdroj: Dr. Jan Kefer – Astrologická Diagnostika (1940), díl I–II
// Podmínky: planeta_v_domu | planeta_v_znameni | ascendent_v_znameni
// ═══════════════════════════════════════════════════════════════

const ZNAMENI_NAZVY = {
  1:"Beran",2:"Býk",3:"Blíženci",4:"Rak",5:"Lev",6:"Panna",
  7:"Váhy",8:"Štír",9:"Střelec",10:"Kozoroh",11:"Vodnář",12:"Ryby"
};

const KEFER_DB = [

// ══════════════════════════════════════════════════════
//  OSOBNOST & CHARAKTER
// ══════════════════════════════════════════════════════

  {id:"os_001", tema:"Ctižádost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[5,8,11]}],
   text_cs:"Slunce v I. domě ve Lvu, Štíru nebo Vodnáři je silným příznakem ctižádosti. Pevná znamení a zdůrazněný X. dům jsou základní podmínkou. Saturn příznivý k Plutonu v Býku, Štíru nebo Kozorohu ctižádost upevňuje a dává jí trvalý charakter.",
   text_en:"The Sun in the 1st house in Leo, Scorpio or Aquarius is a strong indicator of ambition. Fixed signs and an emphasised 10th house are the basic conditions. Saturn in favourable aspect to Pluto in Taurus, Scorpio or Capricorn reinforces ambition and gives it a lasting character.",
   zdroj:"Kefer – CTIŽÁDOST"},

  {id:"os_002", tema:"Ctižádost – Mars", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[3,7,8,6,10]}],
   text_cs:"Mars v I. domě zvláště v Blížencích, Vahách, Štíru, Panně nebo Kozorohu přináší výraznou ctižádost. Pevná znamení jsou konzervativní a chtějí podržet spíše než dobývat. Jupiter ve Štíru (zvláště první třetina) tuto vlastnost zesiluje.",
   text_en:"Mars in the 1st house, especially in Gemini, Libra, Scorpio, Virgo or Capricorn, brings marked ambition. Fixed signs are conservative and prefer to hold rather than conquer. Jupiter in Scorpio (especially the first decan) intensifies this quality.",
   zdroj:"Kefer – CTIŽÁDOST"},

  {id:"os_003", tema:"Diplomatičnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[10]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[8]}],
   text_cs:"Slunce v Kozorohu, Merkur příznivý k Saturnu, Venuše ve Štíru, Jupiter ve Vahách a třetí třetině Lva, silný Saturn ve Skopci, Kozorohu nebo Vodnáři zvláště v I. domě jsou příznaky diplomatičnosti. Ascendent v Býku nebo třetí třetině Raka. Zisk z diplomatičnosti přináší Merkur ve II. domě příznivě ozářený Saturnem.",
   text_en:"The Sun in Capricorn, Mercury in favourable aspect to Saturn, Venus in Scorpio, Jupiter in Libra and the third decan of Leo, strong Saturn in Scorpio, Capricorn or Aquarius especially in the 1st house are indicators of diplomacy. Ascendant in Taurus or the third decan of Cancer. Profit from diplomacy is brought by Mercury in the 2nd house favourably aspected by Saturn.",
   zdroj:"Kefer – DIPLOMATIČNOST"},

  {id:"os_004", tema:"Duchaplnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[1]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[3,11]}],
   text_cs:"Luna v Blížencích nebo Vodnáři zvláště v I. domě propůjčuje duchaplnost. Merkur ve Vahách nebo Vodnáři v I. nebo VI. domě v dobrém aspektu k Martu nebo Uranu tento dar zesiluje. Duchaplnost v debatě propůjčuje dobře ozářený Saturn ve Vahách nebo Střelci v I. domě.",
   text_en:"The Moon in Gemini or Aquarius, especially in the 1st house, bestows wit. Mercury in Libra or Aquarius in the 1st or 6th house in good aspect to Mars or Uranus amplifies this gift. Wit in debate is bestowed by a well-aspected Saturn in Libra or Sagittarius in the 1st house.",
   zdroj:"Kefer – DUCHAPLNOST"},

  {id:"os_005", tema:"Hrdost a sebevědomí", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[5]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Hrdost závisí od ozáření Lva a Slunce. Ascendent ve Lvu a Mars ve Lvu v I. domě jsou typickými příznaky. Luna ve třetí třetině Blíženců a Slunce v Panně v aspektu k Ascendentu tuto vlastnost doplňují.",
   text_en:"Pride depends on the illumination of Leo and the Sun. Ascendant in Leo and Mars in Leo in the 1st house are typical indicators. The Moon in the third decan of Gemini and the Sun in Virgo in aspect to the Ascendant complement this quality.",
   zdroj:"Kefer – HRDOST"},

  {id:"os_006", tema:"Energie a vitalita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1,11]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8,10]}],
   text_cs:"Energie jest projevem silného Marta a Urana. Slunce v dobrém aspektu k Martu nebo Plutonu zvláště ve Lvu nebo V. domě. Mars příznivý k Merkurovi nebo Plutonu zvláště v I. nebo XI. domě ve Štíru nebo Kozorohu. Nedostatečně použitá energie se projevuje za tranzitů Saturna nebo Urana k Martu.",
   text_en:"Energy is a manifestation of a strong Mars and Uranus. The Sun in good aspect to Mars or Pluto, especially in Leo or the 5th house. Mars favourable to Mercury or Pluto, especially in the 1st or 11th house in Scorpio or Capricorn. Insufficiently used energy manifests during transits of Saturn or Uranus to Mars.",
   zdroj:"Kefer – ENERGIE"},

  {id:"os_007", tema:"Intuice a předtuchy", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[3,9]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[9,10]}],
   text_cs:"Intuice je projevem Urana a Neptuna ve vztahu k IX. domu. Merkur v IX. nebo X. domě zvláště ve Vodnáři a Střelci propůjčuje výtečnou intuici. Obecným signifikátorem intuice je Střelec a IX. dům.",
   text_en:"Intuition is a manifestation of Uranus and Neptune in relation to the 9th house. Mercury in the 9th or 10th house, especially in Aquarius and Sagittarius, bestows excellent intuition. The general significator of intuition is Sagittarius and the 9th house.",
   zdroj:"Kefer – INTUICE"},

  {id:"os_008", tema:"Idealismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,7,9]},{typ:"planeta_v_domu",planeta:"Uran",dum:[3,9]}],
   text_cs:"Idealismus je projevem ohnivých znamení zvláště Střelce, Vah a Vodnáře. Slunce ve Štíru, Vahách nebo IX. domě příznivé k Martu, Neptunu nebo Plutonu. Mars příznivý k Neptunu propůjčuje boj za ideály. Poškozený Merkur ve vztahu k Rybám působí slepý idealismus.",
   text_en:"Idealism is a manifestation of fire signs, especially Sagittarius, Libra and Aquarius. The Sun in Scorpio, Libra or the 9th house favourable to Mars, Neptune or Pluto. Mars favourable to Neptune bestows the fight for ideals. A damaged Mercury in relation to Pisces produces blind idealism.",
   zdroj:"Kefer – IDEALISMUS"},

  {id:"os_009", tema:"Domýšlivost a nafoukanost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[11]}],
   text_cs:"Domýšlivost je obecně působena zdůrazněným, ale slabým Sluncem. Slunce ve Vodnáři a v I. domě je typickým datem. Jupiter ve Skopci, Raku, Lvu nebo Střelci zvláště v I. domě, Saturn v I. domě zvláště ve Štíru nebo Lvu tyto sklony posilují.",
   text_en:"Presumption is generally produced by an emphasised but weak Sun. The Sun in Aquarius and in the 1st house is a typical indicator. Jupiter in Scorpio, Cancer, Leo or Sagittarius especially in the 1st house, Saturn in the 1st house especially in Scorpio or Leo reinforce these tendencies.",
   zdroj:"Kefer – DOMÝŠLIVOST"},

  {id:"os_010", tema:"Fanatismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,9]}],
   text_cs:"Fanatismus je projevem slabého Marta a Urana ve Vahách nebo IX. domě ve špatné vazbě k Venuši. Typickým datem je Luna v konjunkci s Uranem ve ohnivých nebo vodních znameních. Silný Štír působí fanatismus nízkým aspektem. Slunce ve Štíru nebo IX. domě poškozené Martem.",
   text_en:"Fanaticism is generally produced by an afflicted Jupiter in relation to Neptune or Pluto, especially in fixed signs. The Ascendant in Scorpio or Taurus, or the Sun in Scorpio emphasised and afflicted. Mars in Scorpio or Aries in adverse aspect to Neptune or Pluto intensifies fanaticism.",
   zdroj:"Kefer – FANATISMUS"},

  {id:"os_011", tema:"Dobrodružnost a touha po neznámu", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8,9]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Obecným signifikátorem dobrodružných sklonů je silný Mars. Ascendent ve Štíru nebo Střelci (zvláště třetí třetina). Slunce ve druhé třetině Raka, Luna ve třetí třetině Štíra v aspektu k Martu nebo Jupiteru, Neptun ve Střelci zesiluje touhu po neznámu a vzdálených obzorech.",
   text_en:"The love of adventure is generally produced by a strong Mars and Jupiter in mobile signs. The Sun in Aries, Sagittarius or Gemini, especially in the 3rd, 9th or 12th house. Mars or Jupiter in Aries or Sagittarius. The Ascendant in Sagittarius or Aries and the Moon in a mobile sign.",
   zdroj:"Kefer – DOBRODRUŽNOST"},

  {id:"os_012", tema:"Genialita a mimořádný talent", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"ascendent_v_znameni",znameni:[7]}],
   text_cs:"Moderní astrologové vidí podstatu geniality ve šťastném poměru vlivů Uranických, Neptunických a Plutonických. Ascendent výtečně ozářený ve Vahách (zvláště druhá třetina). Merkur v konjunkci s Jupiterem nebo Neptunem. Mocně ozářený Uran v I. domě jsou nejspolehlivějšími znameními.",
   text_en:"Genius requires an extremely strong and well-aspected Uranus. Mercury in Aquarius in good aspect to Uranus or Pluto. The Sun in Aquarius or Scorpio in favourable aspect to Uranus or Neptune. The Ascendant in Aquarius. The most gifted horoscopes combine Uranus with Mercury and Pluto.",
   zdroj:"Kefer – GENIALITA"},

  {id:"os_013", tema:"Duchovnost a esoterismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[9]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9]}],
   text_cs:"Vysoké duchovní založení je zapříčiněno příznivou směsí aspektů akcentujících Venuši, Jupitera, Neptuna, Váhy, Střelce a Ryby. Jupiter v IX. domě nebo ve Vodnáři jsou příznivá data pro duchovní rozvoj. Dobu zvýšené duchovnosti naznačuje dobře ozářený Jupiter nebo Saturn v IX. domě solárního horoskopu.",
   text_en:"Spirituality depends on Neptune and the 12th house, and on Jupiter in relation to Neptune. Neptune in the 1st, 9th or 12th house emphasised. The Moon in Pisces or the 12th house. Jupiter in Pisces or Sagittarius in good aspect to Neptune. The Sun in Pisces or the 12th house in aspect to Neptune.",
   zdroj:"Kefer – DUCHOVNOST"},

  {id:"os_014", tema:"Filozofické sklony", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9]}],
   text_cs:"Na filozofickou mysl lze soudit: Slunce ve Vodnáři nebo IX. domě. Jupiter příznivý k Saturnu zvláště ve Štíru, Býku nebo Střelci. Saturn ve Střelci nebo Býku druhé třetiny. Zvláštní filozofické názory působí Uran v IX. domě. Prohloubení světonázoru nastává za příznivých tranzitů Neptuna k Saturnu.",
   text_en:"Philosophical tendencies are produced by a strong Jupiter and the 9th house. Jupiter in Sagittarius, Pisces or the 9th house in good aspect to Uranus or Mercury. Mercury in Sagittarius or Aquarius, especially in the 9th or 12th house. The Ascendant in Sagittarius or Pisces.",
   zdroj:"Kefer – FILOSOFIE"},

  {id:"os_015", tema:"Zájem o astrologii", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1,3,9]},{typ:"ascendent_v_znameni",znameni:[3,5,6,7,8,9]}],
   text_cs:"Zálib v astrologii je působena Merkurem ve vztahu k Uranu, jsou-li splněny některé z dalších podmínek. Ascendent v Blížencích, Lvu, Panně, Vahách, Štíru nebo Střelci, zdůraznění 27° Lva nebo Vodnáře. Luna v Blížencích nebo Vodnáři a v I. domě jsou dalšími příznivými příznaky.",
   text_en:"Interest in astrology is influenced by Mercury in relation to Uranus. Ascendant in Gemini, Virgo, Libra or Aquarius. Mercury in the 9th, 10th or 11th house, especially in Aquarius and Libra, is a strong indicator. Uranus in the 1st house in aspect to Mercury or the Sun. The Moon in Gemini or Aquarius, particularly in the 1st house, and the Sun in Aquarius or Virgo are additional favourable indicators.",
   zdroj:"Kefer – ASTROLOGIE"},

  {id:"os_016", tema:"Demokratičnost a humanita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[11]},{typ:"planeta_v_znameni",planeta:"Neptun",znameni:[9,11]}],
   text_cs:"Demokratičnost je působena zdůrazněním Luny, Neptuna, Střelce a Vodnáře. Střelec bývá praktický, Vodnář teoretický. Jupiter v XI. domě aktivuje demokratické zákonodárství. V mundánním horoskopu působí Jupiter v XI. domě aktivitu v demokratickém zákonodárství.",
   text_en:"Democracy is produced by the emphasis of the Moon, Neptune, Uranus and Aquarius. Uranus in the 11th house activates democratic legislation. In a mundane horoscope, Jupiter in the 11th house activates democratic legislation.",
   zdroj:"Kefer – DEMOKRATIČNOST"},

  {id:"os_017", tema:"Badatelství a vědecký zájem", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Badatelství je projevem těchto příznaků: Ascendent ve Štíru druhé třetiny, Mars ve třetí třetině Skopce nebo Vodnáře, Jupiter v Panně ve třetí třetině, Uran v Panně v první třetině, Saturn ve Střelci třetí třetiny. Uran v X. domě téměř vždy působí zálibu ve starých věcech nebo kulturách.",
   text_en:"Scholarly research is produced by a strong Uranus and Mercury in relation to the 9th and 10th houses. Mercury or Uranus in the 9th or 10th house, particularly in Aquarius or Sagittarius. The Ascendant in Gemini or Aquarius. Saturn in aspect to Mercury or Uranus bestows the patience and systematic nature of a researcher.",
   zdroj:"Kefer – BADATELSTVÍ"},

  {id:"os_018", tema:"Vzdorovitost a anarchismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Uran",znameni:[9,5,11]},{typ:"ascendent_v_znameni",znameni:[9,11]}],
   text_cs:"Anarchisty tvoří Uran, Neptun nebo Mars ve vztahu ke Střelci, Lvu nebo Vodnáři. Poškozený Jupiter, Merkur ve Střelci, poškozený Ascendent ve Střelci nebo Vodnáři jsou příznaky vzdorovitého nebo anarchistického smýšlení. Rozhodné stupně jsou 23° Lva a Vodnáře.",
   text_en:"Rebelliousness is produced by an afflicted Uranus, especially in the 1st or 10th house. Mars in Aquarius or in adverse aspect to Uranus. The Ascendant in Aquarius with a damaged Uranus. Saturn in adverse aspect to Uranus and Mars also contributes to anarchist tendencies.",
   zdroj:"Kefer – ANARCHIE"},

  {id:"os_019", tema:"Humor a veselost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[1,5]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[11]}],
   text_cs:"Humor je výsledkem příznivé vazby mezi Venuší, Jupiterem, Neptunem, Uranem a Lunou, dále mezi Býkem, Střelcem, Rakem a Rybami. Merkur vždy je silný, buď v I. domě nebo příznivý k Martu. Je-li v těchto vazbách převaha Neptuna, lze soudit na zálibu ve veselých kouscích.",
   text_en:"Humour is a manifestation of a well-aspected Jupiter and Mercury. Mercury in Gemini or Sagittarius in good aspect to Jupiter. Jupiter in Gemini, Sagittarius or the 1st house. The Moon in Gemini or Sagittarius. The Ascendant in Gemini or Sagittarius reinforces this trait.",
   zdroj:"Kefer – HUMOR"},

  {id:"os_020", tema:"Hospodárnost a šetrnost", kategorie:["osobnost","finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[2,4]}],
   text_cs:"Hospodárnost závisí od příznivě ozářeného Saturna ve II. nebo IV. domě. Luna v dobrém aspektu k Saturnu, Slunce v první třetině Raka. Venuše příznivá k Saturnu propůjčuje smysl pro hospodárnost při fyzické práci. Příznivě ozářené stupně: 7° Skopce, 27° Býka, 29° Lva.",
   text_en:"Frugality and economy are produced by a strong Saturn and Mercury in relation to the 2nd house. Saturn in Taurus, Virgo or Capricorn, especially in the 1st or 2nd house. Mercury in the 2nd house in good aspect to Saturn. Jupiter damaged in the 2nd house can produce stinginess.",
   zdroj:"Kefer – HOSPODÁRNOST"},

  {id:"os_021", tema:"Agresivita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8]}],
   text_cs:"Obecným příznakem agresivity je poškozený Mars, Jupiter ve Štíru nebo Merkur ve špatném aspektu k Martu. Důležitý vliv je zdůrazněný Skopec a Uran. Zdůraznění vodních znamení při poškozeném Martu nebo Uranu působí útočnost ve slovním projevu, zvláště je-li i Merkur poškozen.",
   text_en:"Aggression is produced by a strong and afflicted Mars. Mars in Aries or Scorpio, especially in the 1st or 8th house. Mars in adverse aspect to Uranus or Pluto. The Ascendant in Aries or Scorpio with a damaged Mars. Saturn in adverse aspect to Mars reinforces persistent aggression.",
   zdroj:"Kefer – AGRESIVITA"},

  {id:"os_022", tema:"Autoritativnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[5]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[11]}],
   text_cs:"Autoritativní vystoupení propůjčuje silné Slunce, Jupiter nebo Saturn. Typické příznaky: Jupiter ve Lvu, Jupiter v příznivém úhlu k Saturnu, Saturn v XI. domě příznivě ozářený Uranem v Kozorohu a v X. domě. Autorita panovníka závisí od X. domu jeho nebo mundánního horoskopu.",
   text_en:"Authoritarianism is produced by a strong and somewhat afflicted Saturn in the 1st or 10th house. The Sun in Capricorn or Leo in aspect to Saturn. Saturn in Capricorn or Leo. The Ascendant in Capricorn or Leo with a strong Saturn. Jupiter in aspect to Saturn may moderate or intensify this quality.",
   zdroj:"Kefer – AUTORITA"},

  {id:"os_023", tema:"Aviatika a zájem o létání", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planet_v_znameni",planeta:"Uran",znameni:[9]},{typ:"ascendent_v_znameni",znameni:[11,3,7]}],
   text_cs:"Záliba v aviatice a povolání letce je signováno Uranem. Typické příznaky: Uran v první třetině Střelce nebo v první třetině IX. domu. Ascendent ve třetí třetině Blíženců nebo ve druhé třetině Vah. Ascendent ve Vodnáři vždy působí zájem o letectví.",
   text_en:"Aviation interest is produced by Mercury and Uranus in air signs, especially Gemini. Uranus in Gemini or in the 3rd house. Mercury in Gemini in aspect to Uranus. The Ascendant in Gemini with a strong Uranus. The Sun in Gemini or Aquarius in aspect to Uranus.",
   zdroj:"Kefer – AVIATIKA"},

  {id:"os_024", tema:"Bázlivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[1,9]},{typ:"planeta_v_znameni",planeta:"Uran",znameni:[12]}],
   text_cs:"Bázlivost je vadou saturnskou ve vztahu k Luně. Obecně působí bázlivost Uran nebo Saturn v Rybách, Saturn nebo Luna v I. domě nebo Saturn v IX. domě. Záchvaty bázně zakouší každý, kdo prožívá nepříznivý úhel direkčního Slunce k Uranu. Charakteristické stupně jsou 4° Vodnáře a 12° Ryb.",
   text_en:"Timidity is produced by a damaged Saturn or Neptune in the 1st house. The Moon in Cancer or Pisces in adverse aspect to Saturn or Neptune. The Ascendant in Cancer or Pisces with a damaged Saturn or Neptune. Venus in adverse aspect to Saturn also contributes to excessive caution.",
   zdroj:"Kefer – BÁZLIVOST"},

  {id:"os_025", tema:"Bezcitnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[2]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[10]}],
   text_cs:"Bezcitnost je vadou Kozoroha. Typická data: Luna v Kozorohu, Saturn nepříznivě k Uranu, Mars v Býku v I. domě, Mars v prvním dekanu Štíra, Uran poškozený v Rybách v I. domě, Ascendent poškozený v Býku. Charakteristické stupně: 14° Štíra, 15° Panny.",
   text_en:"Callousness is produced by a cold and afflicted Saturn in the 1st house or in aspect to the Moon. Saturn in Capricorn or Aquarius in adverse aspect to the Moon or Venus. Mars in Capricorn in adverse aspect to Saturn or Pluto. The Ascendant in Capricorn with a damaged Saturn.",
   zdroj:"Kefer – BEZCITNOST"},

  {id:"os_026", tema:"Blahovolnost a laskavost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2,12]}],
   text_cs:"Ctnost Jupitera a Ryb. Typická postavení: Slunce ve třetí třetině Raka v dobrém aspektu k Venuši, Slunce ve II. domě, Luna v I. domě v dobrém aspektu k Martu nebo Jupiteru, Jupiter v Býku, Vahách nebo Rybách zvláště v I. domě nebo v příznivém aspektu k Saturnu. Vzdušný trigon bývá silně obsazen.",
   text_en:"Benevolence and kindness are produced by a well-aspected Jupiter and Venus. Jupiter in Pisces, Sagittarius or Cancer. Venus in Libra, Pisces or Taurus in good aspect to Jupiter. The Moon in Cancer or Pisces in good aspect to Jupiter or Venus. The Ascendant in Sagittarius, Pisces or Cancer.",
   zdroj:"Kefer – BLAHOVOLNOST"},

  {id:"os_027", tema:"Blouznivost a snivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[11]}],
   text_cs:"Blouznivost je působena poškozeným Merkurem ve Vodnáři nebo Martem v VI. domě ve Skopci. Chorobná snivost nastává je-li poškozený Ascendent v Rybách nebo silně poškozený Neptun. Fantazii živí zdravou měrou Luna v IX. domě a příznivé aspekty Luny k Neptunu.",
   text_en:"Dreamy nature and reverie are produced by a strong Neptune and Moon in Pisces or Cancer. Neptune in the 1st or 12th house in aspect to the Moon. The Moon in Pisces or Cancer. The Ascendant in Pisces. Mercury in Pisces or Cancer in aspect to Neptune. Venus in Pisces in aspect to Neptune.",
   zdroj:"Kefer – BLOUZNIVOST"},

  {id:"os_028", tema:"Arogance", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8]}],
   text_cs:"Typickým příznakem arogance je Jupiter ve Štíru a v I. domě. Poškozený Jupiter v I. domě zvláště ve Lvu nebo Skopci působí nafoukanost a přezíravost k ostatním. Na arogan ci lze rovněž soudit ze špatné aspektace Slunce a Luny v I. domě.",
   text_en:"Arrogance is produced by a damaged Sun or Jupiter, especially in Leo, Aries or Sagittarius. The Sun in Leo or Aries in adverse aspect to Jupiter or Saturn. Jupiter in Leo or Aries, especially in the 1st house. The Ascendant in Leo with a damaged Sun or Jupiter.",
   zdroj:"Kefer – AROGANCE"},

  {id:"os_029", tema:"Asketismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[5]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[8]}],
   text_cs:"Asketismus je obecně vlastností Saturna, zvláště ozařuje-li nepříznivě hrot V. domu nebo má-li nepříznivou vazbu ke Štíru, nebo je-li v V. domě. Typickým příznakem je zdůraznění 4° nebo 9° Ryb. Saturn v V. domě ve Štíru nebo Kozorohu je nejtypičtějším datem.",
   text_en:"Asceticism is produced by a strong and well-aspected Saturn in the 1st or 12th house. Saturn in Virgo, Capricorn or Aquarius in the 1st house. The Moon in Virgo or Capricorn in good aspect to Saturn. The Ascendant in Virgo or Capricorn. Neptune in the 1st or 12th house combined with Saturn.",
   zdroj:"Kefer – ASKETISMUS"},

  {id:"os_030", tema:"Cynismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[11]},{typ:"planeta_v_znameni",planeta:"Uran",znameni:[8,11]}],
   text_cs:"Cynismus způsobuje Uran ve Štíru nebo Vodnáři a Merkur poškozený v XI. domě. Lidé s Ascendentem v Panně, Štíru nebo Kozorohu vždy mají jistý sklon k cynismu, zvláště je-li poškozen. Cynická mluva vzniká za nepříznivých aspektů Marta k Merkurovi.",
   text_en:"Cynicism is produced by a damaged Saturn and Mercury. Saturn in adverse aspect to Mercury or the Sun. Mercury in Capricorn or Aquarius in adverse aspect to Saturn. The Ascendant in Capricorn or Aquarius with a damaged Saturn. Saturn in the 1st house particularly in Scorpio or Capricorn.",
   zdroj:"Kefer – CYNISMUS"},

  {id:"os_031", tema:"Chladnokrevnost a klid", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[5,7]}],
   text_cs:"Typická konstelace: Saturn konjunkce Slunce. Slunce v Kozorohu, Luna v Rybách, Saturn v V. nebo VII. domě zvláště je-li v Kozorohu nebo Vodnáři. Tyto příznaky naznačují schopnost zachovat klid i v krizových situacích.",
   text_en:"Secretiveness is produced by a strong and afflicted Pluto or Scorpio. Pluto in the 1st or 12th house. The Ascendant in Scorpio or the Sun in Scorpio in aspect to Pluto. Saturn in Scorpio reinforces the tendency to secrecy. The Moon in Scorpio in aspect to Pluto.",
   zdroj:"Kefer – CHLADNOKREVNOST"},

  {id:"os_032", tema:"Chlubivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2]}],
   text_cs:"Chlubivost je vadou poškozeného Marta a Štíra. Data: Slunce nebo Luna ve špatném aspektu k Martu, Jupiter poškozený Neptunem často v Býku v I. domě, Saturn ve Lvu a v I. domě, Uran v Býku a v I. domě, Ascendent ve Lvu (zvláště druhá třetina) a poškozený (zvláště Jupiterem).",
   text_en:"Duplicity is produced by a damaged Mercury and Neptune. Mercury in Pisces or Gemini in adverse aspect to Neptune. Neptune in the 3rd house in adverse aspect to Mercury. The Ascendant in Gemini or Pisces with a damaged Mercury or Neptune.",
   zdroj:"Kefer – CHLUBIVOST"},

  {id:"os_033", tema:"Cholerik – výbušný temperament", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[6,9]}],
   text_cs:"Horoskop choleriků vykazuje převahu Skopce, Lva a Střelce. Merkur je často ve Lvu a v I. domě, Mars v Panně a Střelci a v I. domě, Jupiter v Panně a v I. domě. Silný Skopec a Lev propůjčují vznětlivý temperament.",
   text_en:"Dogmatism is produced by the Sun or Mercury in Taurus, Mars in the 9th house, Jupiter damaged by Uranus, Saturn in the third decan of Leo, Ascendant in Scorpio especially the third decan if Jupiter is in fixed signs. Dogmatism is most often linked to religious or ideological conviction.",
   zdroj:"Kefer – CHOLERIK"},

  {id:"os_034", tema:"Impulsivita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,4]}],
   text_cs:"Impulsivita je působena vztahem Marta a Urana k základním znamením za převahy vody a ohně. Data: Slunce ve Skopci nebo Štíru v I. domě, Luna ve Skopci, Lvu, Štíru nebo Střelci v I. domě nepříznivě k Martu, Mars v Raku poškozený v I. domě, Mars v dobrém aspektu k Uranu nebo Plutonu.",
   text_en:"Egoism is produced by a damaged Sun and Mars, especially in fixed signs. The Sun in Leo or Aries in adverse aspect to Saturn or Pluto. Mars in Leo or Aries in adverse aspect to Saturn. Jupiter in Leo, especially in the 1st house. The Ascendant in Leo or Aries with a damaged Sun.",
   zdroj:"Kefer – IMPULSIVITA"},

  {id:"os_035", tema:"Indolence a lenost", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[12]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[2]}],
   text_cs:"Indolence vzniká z těchto dat: slabý Mars, slabé postavení základních znamení, mnoho planet v pevných znameních. Venuše a Býk ve slabém postavení (lenost) a Saturn zpravidla poškozen. Jiným příznakem je poškozený Ascendent v Rybách.",
   text_en:"Envy is produced by a damaged Moon and Saturn. The Moon in Scorpio or Capricorn in adverse aspect to Saturn or Pluto. Saturn in the 1st house in adverse aspect to the Moon or Venus. Venus in adverse aspect to Saturn or Pluto. The Ascendant in Scorpio or Capricorn.",
   zdroj:"Kefer – INDOLENCE"},

  {id:"os_036", tema:"Inorodost a výjimečnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,4]}],
   text_cs:"Inorodost působí zdůrazněná ohnivá znamení a silně obsazené domy I., VII., VIII., IX., X., XI., XII. K inorodosti také disponují Blíženci (zvláště 15°), Váhy (zvláště 19°), Štír, Střelec. Slunce příznivě k Martu nebo Plutonu, Slunce v X. domě nebo ve Skopci.",
   text_en:"Eccentricity is produced by a strong and afflicted Uranus, especially in the 1st house. Uranus in Aquarius or Aries in the 1st house in adverse aspect to the Sun or Moon. The Ascendant in Aquarius with a damaged Uranus. The Moon in Aquarius in adverse aspect to Uranus.",
   zdroj:"Kefer – INORODOST"},

  {id:"os_037", tema:"Dráždivost a přecitlivělost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[9]}],
   text_cs:"Dráždivost naznačuje zdůrazněný Střelec nebo Skopec. Vodní znamení poukazují na dráždivost citovou. Merkur nebo Mars bývá poškozen Uranem. Data: Slunce poškozené Lunou nebo Martem ve Skopci nebo Střelci, Luna v Rybách třetí třetiny, Merkur zvláště ve Střelci v I. domě poškozený.",
   text_en:"Flexibility and versatility are produced by a strong Mercury in mutable signs. Mercury in Gemini or Virgo in good aspect to Uranus or Jupiter. The Ascendant in Gemini or Virgo. The Moon in Gemini or Virgo in good aspect to Mercury. Jupiter in Gemini reinforces adaptability.",
   zdroj:"Kefer – DRÁŽDIVOST"},

  {id:"os_038", tema:"Dobromyslnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2,12,7]}],
   text_cs:"Signifikátoři dobromyslnosti: silný Jupiter, příznivé obsazení Střelce, Ryb nebo Blíženců. Typická postavení: Slunce v Raku, Střelci nebo Rybách zvláště v I. domě, Jupiter v Býku, Vahách nebo Rybách zvláště v I. domě nebo v příznivém aspektu k Saturnu, Saturn v Rybách v I. domě příznivě ozářený.",
   text_en:"Generosity is produced by a well-aspected Jupiter and Sun. Jupiter in Sagittarius, Leo or Cancer in good aspect to the Sun or Venus. The Sun in Sagittarius or Leo in good aspect to Jupiter. The Moon in Sagittarius or Cancer in good aspect to Jupiter.",
   zdroj:"Kefer – DOBROMYSLNOST"},

  {id:"os_039", tema:"Dogmatičnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[9]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[2]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[2]}],
   text_cs:"Data dogmatičnosti: Slunce nebo Merkur v Býku, Mars v IX. domě, Jupiter poškozený Uranem, Saturn ve třetí třetině Lva, Ascendent ve Štíru zvláště třetí třetiny je-li Jupiter v pevných znameních. Dogmatismus je nejčastěji vázán na náboženské nebo ideologické přesvědčení.",
   text_en:"Honour and integrity are produced by a well-aspected Sun and Jupiter in cardinal or fixed signs. The Sun in Aries, Leo or Capricorn in good aspect to Jupiter or Saturn. Jupiter in Libra or Capricorn in good aspect to Saturn. The Ascendant in Leo, Aries or Capricorn.",
   zdroj:"Kefer – DOGMATIČNOST"},

  {id:"os_040", tema:"Despotismus", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[5]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Příznaky despotismu: Vazba Slunce, Marta, Saturna a Urana. Pevná znamení jsou zdůrazněna, Merkur a Luna jsou poškozeny Saturnem. Ascendent bývá ve Lvu (zvláště druhá třetina). Saturn v I. domě poškozující Lunu nebo Venuši.",
   text_en:"Hypocrisy is produced by a damaged Neptune and Mercury. Mercury in Pisces or Gemini in adverse aspect to Neptune or Pluto. Neptune in the 3rd house in adverse aspect to Mercury or the Sun. The Ascendant in Gemini or Pisces with a damaged Mercury and Neptune.",
   zdroj:"Kefer – DESPOTISMUS"},

  {id:"os_041", tema:"Drzost a nestydatost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[1]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[4,8]}],
   text_cs:"Drzost je chybou poškozené Venuše a Vah. Vzniká poškozením těchto planet: Luna v Raku nebo Štíru v I. domě, Venuše v Raku v I. domě, Mars ve Skopci a v I. domě, Jupiter v IX. domě, Ascendent ve Štíru. Luna v příznivém aspektu k Martu bez vlivu Venuše tento sklon zesiluje.",
   text_en:"Jealousy is produced by a damaged Moon and Pluto, especially in Scorpio or Cancer. The Moon in Scorpio in adverse aspect to Pluto or Mars. Pluto in the 1st or 7th house in adverse aspect to the Moon or Venus. Mars in Scorpio in adverse aspect to Pluto.",
   zdroj:"Kefer – DRZOST"},

  {id:"os_042", tema:"Fantazie a tvůrčí obraznost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[9]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[9]}],
   text_cs:"Fantazie je vlastností silně ozářených ohnivých nebo vodních znamení, Vah, Vodnáře, Ryb, Neptuna a Merkura. Obecný signifikátor Neptun. Data výtečné fantazie: Luna v IX. domě příznivě k Neptunu, Luna ve druhé třetině Ryb nebo Štíra zvláště dobře ozářená Plutonem. Umělecká fantazie: skvelé ozáření Luny, Merkura a Venuše zvláště ve vztahu k V. domu.",
   text_en:"Cruelty is produced by a damaged Mars and Saturn, especially in Scorpio or Capricorn. Mars in Scorpio or Capricorn in adverse aspect to Saturn or Pluto. Saturn in Scorpio in adverse aspect to Mars. Pluto in the 1st or 8th house in adverse aspect to Mars. The Ascendant in Scorpio or Capricorn.",
   zdroj:"Kefer – FANTASIE"},

  {id:"os_043", tema:"Fatalismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[10]}],
   text_cs:"Fatalismus je odvislý obvykle od Jupitera poškozeného ve vztahu k X. domu a od nepříznivých tranzitů Saturna k Jupiteru. Lidé s fatalistickým smýšlením mají zpravidla zdůrazněný Štír, Saturn nebo Jupiter v X. domě poškozené vnějšími planetami.",
   text_en:"Cunning is produced by a damaged Mercury and Mars, especially in Gemini or Scorpio. Mercury in Gemini or Scorpio in adverse aspect to Mars or Pluto. Mars in Gemini in adverse aspect to Mercury. The Ascendant in Gemini or Scorpio with a damaged Mercury.",
   zdroj:"Kefer – FATALISMUS"},

  {id:"os_044", tema:"Flegmatičnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[4,8,12]}],
   text_cs:"Flegmatičnost je vlastností zdůrazněných pevných znamení zvláště poškozených Saturnem. Neptun v Raku, Štíru nebo Rybách a v I. domě. Slabá základní znamení a mnoho planet v pevných znameních přináší těžkopádný, pomalý temperament.",
   text_en:"Loyalty and faithfulness are produced by a well-aspected Saturn and the Moon in fixed signs. Saturn in Taurus, Leo or Scorpio in good aspect to the Moon or Sun. The Moon in Taurus or Capricorn in good aspect to Saturn. Jupiter in Taurus in good aspect to Saturn.",
   zdroj:"Kefer – FLEGMATIČNOST"},

  {id:"os_045", tema:"Frivolita a lehkomyslnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[9]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[4]}],
   text_cs:"Frivolita: Mars v Raku poškozující Venuši, Venuše v IX. domě ve vztahu k Martu. Lehkomyslnost v jednáních naznačuje poškozená Luna ve II. domě. Nepředvídaná jednání jsou zapříčiněna také nepříznivým ozářením Ascendentu a Media coeli.",
   text_en:"Lovingness is produced by a well-aspected Venus and Moon. Venus in Libra, Taurus or Pisces in good aspect to the Moon or Jupiter. The Moon in Taurus or Pisces in good aspect to Venus. Jupiter in Libra or Pisces in good aspect to Venus. The Ascendant in Libra or Taurus.",
   zdroj:"Kefer – FRIVOLITA"},

  {id:"os_046", tema:"Hbitost a pohyblivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[3,11]}],
   text_cs:"Hbitost: Mars v I. domě příznivě ke Slunci je základním příznakem. Merkur v Blížencích nebo Vodnáři v I. domě propůjčuje pohyblivost a pohotovost. Příliš rychlou chůzi způsobuje špatný aspekt Marta k Merkurovi a zdůrazněná základní znamení.",
   text_en:"Agility: Mars in the 1st house favourable to the Sun is the basic indicator. Mercury in Gemini or Aquarius in good aspect to Mars reinforces it. Uranus in good aspect to Mercury and Mars in the 1st house. The Ascendant in Gemini or Aries. The Moon in Gemini in good aspect to Mercury and Mars.",
   zdroj:"Kefer – HBITOST"},

  {id:"os_047", tema:"Hloubavost a vnitřní zájem", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"planeta_v_domu",planeta:"Uran",dum:[9]}],
   text_cs:"Saturn nebo Uran jest v IX. domě, nebo výtečně aspektuje vládce IX. domu. Obdobně působí Saturn v Blížencích a v I. domě a dobře ozářený Neptun ve XII. domě. Hloubavost a zájem o metafyziku je typickým projevem Saturn-Uran vazby v IX. domě.",
   text_en:"Saturn or Uranus is in the 9th house, or excellently aspects the ruler of the 9th house. Similarly Saturn in Gemini or the 3rd house in good aspect to the ruler of the 9th house. Jupiter in Sagittarius in the 9th house in good aspect to Saturn. The Ascendant in Sagittarius or Capricorn.",
   zdroj:"Kefer – HLOUBAVOST"},

  {id:"os_048", tema:"Horlivost a entuziasmus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"planeta_v_znameni",planeta:"Uran",znameni:[10]}],
   text_cs:"Data horlivosti: Uran v I. domě zvláště v Kozorohu. Charakteristické stupně: 12° Kozoroha, 16° Panny a Vah, 13° Raka. Člověk se stává horlivým za příznivých tranzitů Marta k Mediu coeli a za příznivých aspektů direkčního Slunce k Martu.",
   text_en:"Indicators of zeal: Uranus in the 1st house especially in Capricorn. Characteristic degrees: 12° Capricorn, 16° Virgo, 2° Scorpio. Mars in Capricorn or Aries in the 1st house in good aspect to Uranus. The Ascendant in Capricorn or Aries with a strong Mars and Uranus.",
   zdroj:"Kefer – HORLIVOST"},

  {id:"os_049", tema:"Hrubost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[8]}],
   text_cs:"Hrubost je vadou převahy vodních a zemských znamení, slabá Venuše, ale silný Mars. Data: Luna ve Štíru, Venuše v I. domě poškozená Lunou, Mars ve špatném aspektu na Plutona, Ascendent v Kozorohu (první třetina) nebo poškozený Saturnem. Oheň bývá vulgární, nikdy však sprostý.",
   text_en:"Coarseness is a defect of the predominance of water and earth signs, a weak Venus but a strong Mars. Indicators: the Moon in Scorpio or Taurus damaged by Mars or Saturn. Mars in Taurus or Scorpio in adverse aspect to Saturn. The Ascendant in Taurus or Scorpio with a damaged Venus.",
   zdroj:"Kefer – HRUBOST"},

  {id:"os_050", tema:"Citlivost a senzitivita", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[1,3,4]},{typ:"planeta_v_domu",planeta:"Luna",dum:[1,12]}],
   text_cs:"Citlivost je působena zdůrazněním Skopce (zvláště Neptun v druhé třetině), Blíženců (zvláště je-li v nich Ascendent), Raka (zvláště Ascendent, Merkur, Saturn). Vždy musí být silná Luna, často ve vztahu k I. nebo XII. domu. Pluto bývá ve IV. a Neptun v IX. domě. Chorobná citlivost nastává je-li poškozený Ascendent v Rybách.",
   text_en:"Sensitivity is produced by an emphasis on Scorpio (especially Neptune in the second decan), Gemini (especially if Venus is there), Cancer and Pisces. Neptune in the 1st house in good aspect to the Moon or Venus. The Moon in Pisces or Cancer in good aspect to Neptune. Venus in Pisces.",
   zdroj:"Kefer – CITLIVOST"},

  {id:"os_051", tema:"Autoritativnost – administrativní schopnosti", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]}],
   text_cs:"Administrativní schopnosti propůjčuje obecně Jupiter v první třetině I. domu, za nočního zrození a přibývající Luny. Je si přát silného vlivu Slunce a Saturna příznivě ozářených Uranem. Pro povolání administrátora je nejvýhodnější Jupiter v konjunkci s ubývající Lunou.",
   text_en:"Administrative abilities are generally bestowed by Jupiter in the first decan of the 1st house at nocturnal birth and particularly when the Ascendant is in Libra or Aquarius. Saturn in Capricorn or Libra in the 10th house. The Sun in Capricorn or Leo in good aspect to Saturn. Jupiter in Libra.",
   zdroj:"Kefer – ADMINISTRATIVNOST"},

  {id:"os_052", tema:"Jasnovidectví a mediální schopnosti", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planet_v_znameni",planeta:"Merkur",znameni:[4]}],
   text_cs:"Signifikátor jasnovidectví: Uran, Neptun. Neptun je v horoskopech jasnovidců v konjunkci se Sluncem nebo Merkurem. Astrální vidění má vztah k vodním znamením zvláště k Raku. Data: Merkur v Raku a v I. domě v konjunkci nebo sextilu k Neptunu, Venuše v dobrém aspektu k Luně, Luna v konjunkci s Neptunem.",
   text_en:"Significator of clairvoyance: Uranus, Neptune. Neptune is in the horoscopes of clairvoyants in conjunction with the Sun or Moon especially in Pisces or Cancer in the 9th or 12th house. Uranus in the 9th house in good aspect to Neptune. The Moon in Pisces in good aspect to Neptune and Uranus.",
   zdroj:"Kefer – JASNOVIDECTVÍ"},

  {id:"os_053", tema:"Inspirace a tvůrčí vhled", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[9,10]}],
   text_cs:"Signifikátor inspirace: Merkur a Neptun. Za příznivých tranzitů Neptuna k Merkurovi a Mediu coeli prožívá člověk hluboké inspirace. Data: Slunce ve třetí třetině Vodnáře, Uran příznivě k Neptunu, Uran ve Střelci třetí třetiny nebo v X. domě, totéž postavení Neptuna.",
   text_en:"Significator of inspiration: Mercury and Neptune. During favourable transits of Neptune to Mercury and the Midheaven, inspired ideas arrive. Mercury in Pisces or Aquarius in good aspect to Neptune and Uranus. Neptune in the 9th or 10th house in good aspect to Mercury. The Ascendant in Pisces or Aquarius.",
   zdroj:"Kefer – INSPIRACE"},

// ══════════════════════════════════════════════════════
//  ZDRAVÍ
// ══════════════════════════════════════════════════════

  {id:"zdr_001", tema:"Alkoholismus a závislosti", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[12]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Klasický příznak alkoholismu je Mars v Rybách poškozený Neptunem. Vodní znamení převládají u pijáků hloupých, ohnivá u veselých. V. dům téměř vždy je poškozen Neptunem nebo planetou z vodních znamení. Luna poškozená ve Štíru nebo Kozorohu a v I. domě je dalším varováním. Saturn ve druhé třetině Ryb nebo v Býku a I. domě rovněž svědčí o sklonu k pití.",
   text_en:"The classic indicator of alcoholism is Mars in Pisces damaged by Neptune. Water signs predominate among drinkers. Neptune in Pisces or Cancer in adverse aspect to Mars. Jupiter in Pisces damaged by Neptune. The Ascendant in Pisces or Cancer with a damaged Neptune and Mars.",
   zdroj:"Kefer – ALKOHOLISMUS"},

  {id:"zdr_002", tema:"Astma a potíže s dýcháním", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[5]},{typ:"planeta_v_domu",planeta:"Slunce",dum:[6]}],
   text_cs:"Astma je zpravidla působena poškozením Saturna ve vztahu ke III. domu a poškozením Urana ve vztahu k Býku a VI. domu. Saturn ve Lvu v konjunkci se Sluncem. Slunce v Raku nebo Kozorohu poškozené Saturnem. Poškození 4° Panny nebo Ryb, 18° Střelce nebo Ryb.",
   text_en:"Asthma is generally produced by damage to Saturn in relation to the 3rd house and damage to Uranus in relation to the Ascendant. Mercury in Gemini or Pisces in adverse aspect to Saturn or Neptune. The Moon in Gemini in adverse aspect to Saturn or Neptune. The Ascendant in Gemini.",
   zdroj:"Kefer – ASTHMA"},

  {id:"zdr_003", tema:"Hysterie a nervové poruchy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[6]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[4]}],
   text_cs:"Hysterie je choroba Luny, Urana a Neptuna. Luna poškozená v první třetině Raka, poškozený Ascendent v Rybách, Uran ve Vodnáři a v VI. domě jsou typická data. Hysterická žena má často poškozeného Urana v V. domě.",
   text_en:"Hysteria is a disease of the Moon, Uranus and Neptune. The Moon damaged in the first decan of Cancer, a damaged Ascendant in Cancer or Pisces, especially if Neptune is in the 1st house. Uranus in adverse aspect to the Moon or Neptune intensifies these tendencies.",
   zdroj:"Kefer – HYSTERIE"},

  {id:"zdr_004", tema:"Cukrovka", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[6]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[6]}],
   text_cs:"Cukrovka je choroba poškozených Vah. Dispozici k ní tvoří hrot VI. domu ve Vahách, Mars v Panně a v VI. domě, Jupiter v Panně nebo Vahách zvláště je-li v VI. nebo VIII. domě, nebo poškozuje-li Hyleg.",
   text_en:"Diabetes is a disease of a damaged Libra. A predisposition is formed by the cusp of the 6th house in Libra, Mars in Virgo and in the 6th house, Venus in adverse aspect to Saturn or Uranus, Neptune in the 6th house. Jupiter in Cancer or Libra damaged by Saturn or Neptune.",
   zdroj:"Kefer – CUKROVKA"},

  {id:"zdr_005", tema:"Srdeční potíže a angina pectoris", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Luna",znameni:[5,11]},{typ:"planeta_v_domu",planeta:"Uran",dum:[1]}],
   text_cs:"Obecné charakteristiky anginy pectoris: Luna ve Lvu nebo Vodnáři poškozená Uranem nebo Saturnem, zvláště v opozici nebo konjunkci ve Vodnáři. Uran ve Lvu působí náchylnost přidruží-li se jiné příznaky. Angina pectoris jest chorobou pevných znamení zvláště Býka.",
   text_en:"General characteristics of angina pectoris: the Moon in Leo or Aquarius damaged by Uranus or Saturn, especially in opposition or conjunction with Aquarius. Uranus in Leo produces a predisposition if other indicators are present. Angina pectoris is a disease of fixed signs especially Taurus.",
   zdroj:"Kefer – ANGINA PECTORIS"},

  {id:"zdr_006", tema:"Dna a revmatismus kloubů", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[6]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[4,2,9]}],
   text_cs:"Dna je nemoc Saturnská. Jupiter v Raku, Býku nebo Střelci zvláště v VI. domě, Saturn v VI. domě a v Býku, Štíru, Střelci nebo Kozorohu jsou typická data. Luna v VI. domě zvláště v Blížencích nebo Rybách, Venuše v VI. domě zvláště ve Střelci jsou dalšími příznaky.",
   text_en:"Gout is a Saturnine disease. Jupiter in Cancer, Taurus or Sagittarius especially in the 6th house, Saturn in the 6th house and in adverse aspect to Jupiter or Mars. The Ascendant in Cancer or Capricorn. The Moon in Cancer or Capricorn damaged by Saturn. Mars in Capricorn damaged by Saturn.",
   zdroj:"Kefer – DNA (nemoc)"},

  {id:"zdr_007", tema:"Hypochondrie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Pluto",dum:[8]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[12]}],
   text_cs:"Hypochondrie je choroba Merkura a Plutona. Data: poškozený Merkur v Panně, Jupiter ve Štíru a v VI. domě, Saturn ve XII. domě nepříznivě k Merkurovi, Pluto v VIII. domě v jakémkoliv ozáření. Hypochondrie propukává za nepříznivých tranzitů Saturna k Merkurovi.",
   text_en:"Hypochondria is a disease of Mercury and Pluto. Indicators: a damaged Mercury in Virgo, Jupiter in Scorpio and in the 6th house, Saturn in adverse aspect to Mercury in the 6th house. The Ascendant in Virgo or Scorpio. Neptune in the 6th house in adverse aspect to Mercury.",
   zdroj:"Kefer – HYPOCHONDRIE"},

  {id:"zdr_008", tema:"Dlouhověkost", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[4,8,12]}],
   text_cs:"Jupiter výtečně ozářený v IV., VIII. nebo XII. domě, nebo příznivě ozařující jejich vládce je příznakem dlouhého života. Podobně působí Uran a Neptun v tomtéž postavení. Rak, Lev a Kozoroh jsou silně obsazeny v horoskopech dlouhověkých lidí.",
   text_en:"Jupiter excellently aspected in the 4th, 8th or 12th house, or favourably aspecting their rulers, is an indicator of longevity. Saturn in good aspect to the Sun and Moon, especially in Taurus, Libra or Capricorn. The Ascendant in Taurus, Capricorn or Virgo with a strong Saturn.",
   zdroj:"Kefer – DLOUHOVĚKOST"},

  {id:"zdr_009", tema:"Deprese a melancholie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[1,6]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[12,6]}],
   text_cs:"Období deprese jsou působena je-li v radikálním horoskopu Saturn v Rybách nebo Panně zvláště v I. domě. Podobně působí Saturn v Býku a v VI. domě nebo Neptun v I. domě. V solárním horoskopu poškozená Luna v I., IV. nebo VIII. domě zvláště Saturnem.",
   text_en:"Periods of depression are produced when Saturn is in Pisces or Virgo especially in the 1st house in the radical chart. Saturn in adverse aspect to the Moon or Mercury in the 1st house. Neptune in the 1st or 12th house in adverse aspect to the Moon. The Moon in Pisces in adverse aspect to Saturn.",
   zdroj:"Kefer – DEPRESE"},

  {id:"zdr_010", tema:"Chudokrevnost a anémie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[7,11]}],
   text_cs:"Data chudokrevnosti: Slunce, Luna nebo Saturn v Raku nebo Vodnáři a v VI. domě. Slunce ve Vahách nebo Vodnáři poškozené, Saturn poškozující Lunu. VI. dům ve Vodnáři, poškození Venuše se vztahem k Vodnáři jsou typická data.",
   text_en:"Indicators of anaemia: the Sun, Moon or Saturn in Cancer or Aquarius and in the 6th house. The Sun in Libra in adverse aspect to Saturn. Mars in Cancer or Pisces in adverse aspect to Neptune. The Moon in Cancer or Pisces damaged by Saturn or Neptune.",
   zdroj:"Kefer – ANEMIE / CHUDOKREVNOST"},

  {id:"zdr_011", tema:"Astigmatismus a oční vady", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[8]}],
   text_cs:"Příznak astigmatismu: Merkur ve Štíru a v VI. domě. Obecně jsou oční vady působeny poškozeným Sluncem, Lunou nebo Merkurem ve vztahu k VI. domu a Býku. Hluchota: Merkur ve špatném aspektu k Saturnu zvláště ve vztahu k XII. domu.",
   text_en:"Indicator of astigmatism: Mercury in Scorpio and in the 6th house. Eye defects in general are produced by a damaged Sun or Moon in Leo or Cancer in the 6th house. Saturn in Leo or Cancer in adverse aspect to the Sun or Moon. Uranus in the 6th house in adverse aspect to Mercury.",
   zdroj:"Kefer – ASTIGMATISMUS"},

  {id:"zdr_012", tema:"Bederní vředy a potíže se zády", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[9]}],
   text_cs:"Signatura beder: Váhy. Bederní vředy působí Merkur ve Střelci a v VI. domě. Zranění na bocích působí Saturn ve Střelci a v VI. domě, vředy na nich Merkur nebo Venuše ve Střelci a v VI. domě.",
   text_en:"Signature of the loins: Libra. Lumbar ulcers are produced by Mercury in Sagittarius and in the 6th house. Injuries to the sides are produced by Saturn in Sagittarius or Mars in the 9th house. The Ascendant in Libra with a damaged Venus in relation to the 6th house.",
   zdroj:"Kefer – BEDRA / BOKY"},

  {id:"zdr_013", tema:"Bronchitis a záněty průdušek", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8]},{typ:"planeta_v_domu",planeta:"Luna",dum:[6]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[2,5,8,11]}],
   text_cs:"Bronchitis nastává je-li III. dům poškozen vazbou Venuše k Saturnu. Štír je často Ascendentem a 29° Raka nebo Kozoroha je nepříznivě zdůrazněn. Luna bývá v VI. domě a v Býku, Lvu, Štíru nebo Vodnáři.",
   text_en:"Bronchitis arises if the 3rd house is damaged by the conjunction of Venus to Saturn. Scorpio is often the Ascendant and 29° Cancer or Capricorn is unfavourably emphasised. The Moon is often in the 6th house and in Taurus, Leo, Scorpio or Aquarius.",
   zdroj:"Kefer – BRONCHITIS"},

  {id:"zdr_014", tema:"Dávení a žaludeční potíže", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[10]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[6]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[4]}],
   text_cs:"Chorobné dávení je působeno Merkurem v Kozorohu a v VI. domě, Venuší v Raku a v VI. domě za nepříznivého ozáření. Obecně jsou žaludeční potíže signifikovány Rakem a IV. domem.",
   text_en:"Pathological vomiting is produced by Mercury in Capricorn and in the 6th house, Venus in Cancer and in the 6th house under unfavourable conditions. The Moon in Capricorn in the 6th house. Saturn in Cancer in adverse aspect to the Moon. Mars in Cancer in adverse aspect to Saturn.",
   zdroj:"Kefer – DÁVENÍ"},

  {id:"zdr_015", tema:"Dušnost a potíže s dechem", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[2,3]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[12]}],
   text_cs:"Dušnost je způsobena těmito daty: Slunce v Rybách, Luna v Býku nebo Blížencích, Merkur v Blížencích, Saturn v Býku nebo Blížencích, vždy v VI. domě. Choroby dechu vznikají špatně ozářeným Saturnem zvláště ve vztahu k Merkurovi a III. domu.",
   text_en:"Breathlessness is caused by: the Sun in Pisces, the Moon in Taurus or Gemini, Mercury in Gemini, the Ascendant in Gemini or Pisces. Neptune in the 12th or 6th house in adverse aspect to Mercury or the Moon. Saturn in Gemini in adverse aspect to Mercury or the Moon.",
   zdroj:"Kefer – DUŠNOST"},

  {id:"zdr_016", tema:"Halucinace a psychotické stavy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[8]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[1,9,12]}],
   text_cs:"Halucinace je choroba Merkura a Neptuna. Venuše bývá poškozena v VIII. domě. Neptun v I., IX. nebo XII. domě poškozený Martem nebo Saturnem. Blázinec: na pobyt v něm lze soudit ze špatně ozářeného XII. domu — Slunce poškozené nebo Neptun v něm.",
   text_en:"Hallucinations are a disease of Mercury and Neptune. Venus is often damaged in the 8th house. Neptune in the 1st, 9th or 12th house in adverse aspect to Mercury. Mercury in Pisces in adverse aspect to Neptune. The Ascendant in Pisces with damaged Mercury and Neptune.",
   zdroj:"Kefer – HALUCINACE"},

  {id:"zdr_017", tema:"Hemeroidy a onemocnění dolní části těla", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6,8]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[8]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[6,8]}],
   text_cs:"Hemeroidy jsou nemocí Štíra v němž se nacházejí poškozené planety mající vztah k VI. domu (Jupiter, Saturn), někdy též k VIII. domu. Planety ve Štíru, VI. nebo VIII. domě mají nepříznivý vztah k Vodnáři nebo Panně. Mars jako signifikátor ukazuje na operativní zákroky.",
   text_en:"Haemorrhoids are a disease of Scorpio, in which damaged planets related to the 6th house are found (Jupiter, Saturn, Uranus). Mars in Scorpio in adverse aspect to Saturn or Pluto. The Moon in Scorpio in adverse aspect to Mars or Saturn. The Ascendant in Scorpio.",
   zdroj:"Kefer – HEMEROIDY"},

  {id:"zdr_018", tema:"Hluchota a potíže se sluchem", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[12]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[6,12]}],
   text_cs:"Data hluchoty: Merkur ve špatném aspektu k Saturnu zvláště ve vztahu k XII. domu, Merkur v konjunkci se Sluncem ve XII. domě, Saturn tvoří opozici do VI. nebo XII. domu. Neptun je vždy nutno bedlivě zkoumat. Ozáření Neptuna vždy naznačuje skrytou náchylnost.",
   text_en:"Indicators of deafness: Mercury in bad aspect to Saturn especially in relation to the 12th house, Mercury in conjunction with the nodes, or Saturn in the 3rd house. Uranus in the 3rd house in adverse aspect to Saturn and Mercury. The Ascendant in Taurus or Gemini with a damaged Saturn.",
   zdroj:"Kefer – HLUCHOTA"},

  {id:"zdr_019", tema:"Hlízy a nádory", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[6]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[12]},{typ:"planeta_v_domu",planeta:"Mars",dum:[6]}],
   text_cs:"Data hlíz: Venuše, Mars nebo Merkur v VI. domě a v Rybách. Hlísty: Mars nebo Venuše v Panně a v VI. domě. Hnisání: Saturn v Býku a v VI. domě. Signifikátor hnisavých chorob je Saturn obecně.",
   text_en:"Indicators of tumours: Venus, Mars or Mercury in the 6th house and in Pisces. Parasites: Mars or Venus in Virgo and in the 6th house. Saturn in Virgo or Pisces in the 6th house damaged by Mars or Venus. The Moon in Virgo in adverse aspect to Mars and Saturn.",
   zdroj:"Kefer – HLÍZY / HLÍSTY"},

  {id:"zdr_020", tema:"Chrlení krve", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[6]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[3]}],
   text_cs:"Chrlení krve je působeno Martem je-li signifikátorem smrti. Mars je často v Blížencích a v VI. domě. Obecně jsou krvácení způsobena poškozeným Martem ve vztahu k VI. domu a ke znamením zodpovídajícím postižené části těla.",
   text_en:"Haemoptysis is produced by Mars when it is the significator of death. Mars is often in Gemini and in the 6th house. Mars in Gemini in adverse aspect to Saturn or Pluto. The Moon in Gemini in adverse aspect to Mars. Mercury in Gemini in adverse aspect to Mars and Saturn.",
   zdroj:"Kefer – CHRLENÍ KRVE"},

  {id:"zdr_021", tema:"Drogy a toxikomanie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[12]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[8]}],
   text_cs:"Užívání drog vykazuje v horoskopu podobné příznaky jako alkoholismus. Neptun bývá poškozen, Mars v Rybách, 25° Býka, Lva, Štíra a Vodnáře zle ozářen. Sklon k nim propukává za nepříznivých tranzitů Neptuna k Slunci. Mundánně poukazuje na vzrůst užívání drog Neptun v VIII. domě.",
   text_en:"Drug use shows similar indicators in the horoscope to alcoholism. Neptune is often damaged, Mars in Pisces in adverse aspect to Neptune. Jupiter in Pisces damaged by Neptune. The Ascendant in Pisces or Scorpio with a damaged Neptune. Pluto in the 8th or 12th house.",
   zdroj:"Kefer – DROGY"},

  {id:"zdr_022", tema:"Fobie a úzkostné stavy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[6,8]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[3]}],
   text_cs:"Fobie jsou zapříčiněny poškozením Neptuna ve vztahu k signifikátorům zdraví (Hylegu, k VI. nebo VIII. domu). Merkur bývá poškozen, Blíženci a vodní znamení zdůrazněna. Potlačené komplexy: Akcentace Štíra, vliv Saturna za protikladu kladných a záporných znamení.",
   text_en:"Phobias are caused by damage to Neptune in relation to the significators of health (Hyleg, the 6th or 8th house). Neptune in the 6th or 12th house in adverse aspect to Mercury or the Moon. The Moon in Pisces in adverse aspect to Neptune. The Ascendant in Pisces or Cancer.",
   zdroj:"Kefer – FOBIE"},

  {id:"zdr_023", tema:"Chronické choroby", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6,12]},{typ:"planeta_v_domu",planeta:"Slunce",dum:[6]}],
   text_cs:"Na chronické choroby soudíme z těchto dat: Slunce poškozené v VI. domě, Slunce v konjunkci s 14° Štíra nebo 23° Vah, Luna a Venuše v VI. domě (zvláště v Blížencích) poškozeny, Saturn poškozený v VI. nebo XII. domě zvláště ve Štíru.",
   text_en:"Chronic diseases are indicated by: the Sun damaged in the 6th house, the Sun in conjunction with 14° Scorpio (Serpentis), Jupiter and the Moon damaged in the 6th house. Saturn in the 6th house in adverse aspect to the Sun. The Ascendant in Virgo with a damaged Mercury.",
   zdroj:"Kefer – CHOROBY (chronické)"},

  {id:"zdr_024", tema:"Invalidita a tělesné postižení", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1,7]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1,7]}],
   text_cs:"Klasickým datem invalidity je Mars nebo Saturn velmi poškozený v I. nebo VII. domě. Pravidelně Mars je ve špatném aspektu k Saturnu. Vážné choroby oznamuje Saturn v I. nebo VI. domě zvláště jsou-li ve Skopci nebo ve Štíru.",
   text_en:"The classic indicator of disability is Mars or Saturn very damaged in the 1st or 7th house. Mars is regularly in Aries or Scorpio in the 1st or 7th house in adverse aspect to Saturn or Pluto. Saturn in the 1st house in adverse aspect to Mars. The Ascendant in Aries or Scorpio.",
   zdroj:"Kefer – INVALIDITA"},

// ══════════════════════════════════════════════════════
//  FINANCE & MAJETEK
// ══════════════════════════════════════════════════════

  {id:"fin_001", tema:"Bohatství", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1,2,10]}],
   text_cs:"Nejlepší vyhlídka na bohatství jest postavení Slunce, Luny, Jupitera v rohových domech a v dobrých aspektech. Trvalé bohatství nastává je-li dobře ozářený Bod štěstí, jehož dispozitor je nepoškozený. Jupiter v I. domě příznivý ke Slunci zvláště ve Lvu a Raku.",
   text_en:"The best prospects for wealth are the Sun, Moon, Jupiter in angular houses and in good aspects. Jupiter in Taurus or Cancer especially in the 10th house brings indicators of lasting wealth. The Moon in Taurus in good aspect to Jupiter. Venus in Taurus or Cancer in good aspect to Jupiter.",
   zdroj:"Kefer – BOHATSTVÍ"},

  {id:"fin_002", tema:"Bohatství – Jupiter ve Býku a Raku", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2,4]}],
   text_cs:"Jupiter ve Býku nebo Raku zvláště v X. domě přináší příznaky trvalého bohatství. Jupiter ve Býku poukazuje na bohatství zděděné. Luna musí být v dobrém postavení ke Slunci, ve spojení s dobrými planetami a v rohovém domě. Ascendent ve Lvu dává silné předpoklady k bohatství.",
   text_en:"Jupiter in Taurus or Cancer especially in the 10th house brings indicators of lasting wealth. Jupiter in Taurus contributes to wealth through land and agriculture. Saturn in Taurus or Cancer in good aspect to Jupiter and the Moon reinforces this position. The Ascendant in Taurus.",
   zdroj:"Kefer – BOHATSTVÍ"},

  {id:"fin_003", tema:"Blahobyt a hojnost", kategorie:["finance"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[2,5]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2]}],
   text_cs:"Blahobyt závisí od silné Venuše a Jupitera, zdůrazněného Lva, Vah a Ryb. Luna přijímá dobrý aspekt od Jupitera, často jest v X. domě. Jupiter bývá ve II. domě nebo v Býku. Ascendent v Býku dává blahobyt v mládí, Slunce v Rybách blahobyt občasný.",
   text_en:"Prosperity depends on a strong Venus and Jupiter, an emphasised Leo, Libra and Pisces. The Moon receives a good aspect from a planet in the 2nd house. Jupiter in Leo or Libra in good aspect to Venus and the Sun. The Sun in Leo in good aspect to Jupiter. The Ascendant in Leo or Libra.",
   zdroj:"Kefer – BLAHOBYT"},

  {id:"fin_004", tema:"Bída a chudoba", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[2]}],
   text_cs:"Bída je následkem slabého a poškozeného Saturna. Typická data: Luna poškozená Saturnem, Mars ve II. domě poškozený Saturnem, Saturn ve II. domě poškozený Merkurem a Uranem. Bídu ve stáří ohlašuje poškozený Mars ve IV. domě.",
   text_en:"Poverty follows from a weak and damaged Saturn. Typical indicators: the Moon damaged by Saturn, Mars in the 2nd house damaged, Jupiter in adverse aspect to Neptune in the 2nd house. The Sun in adverse aspect to Saturn in the 2nd house. The Moon in adverse aspect to Saturn.",
   zdroj:"Kefer – BÍDA / CHUDOBA"},

  {id:"fin_005", tema:"Finanční nestabilita a dluhy", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[2]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[2]}],
   text_cs:"Uran ve II. domě působí paniky a nestabilitu. Saturn ve II. domě poškozený Merkurem a Uranem naznačuje finanční potíže. Dluhy vznikají za nepříznivé direkce Bodu štěstí k Luně. Pluto ve II. domě mundánního horoskopu nakazuje na silné vlivy burzovních spekulací.",
   text_en:"Uranus in the 2nd house produces panics and instability. Saturn in the 2nd house damaged by Mercury and Uranus indicates losses and uncertainty in business. Neptune in the 2nd house in adverse aspect to Jupiter or Mercury produces confusion in financial matters.",
   zdroj:"Kefer – CHUDOBA / DLUHY"},

  {id:"fin_006", tema:"Dědictví", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2,8]},{typ:"ascendent_v_znameni",znameni:[2,4,5,6,8]}],
   text_cs:"Osoby s Ascendentem v Býku, Raku, Lvu, Panně nebo Štíru mohou dědictví očekávat jsou-li příznaky pro vzrůst majetku. Jupiter ve II. domě příznivý k Saturnu zvláště je-li Saturn vládce II. nebo VIII. domu dědictví přislibuje. Ztrátu dědictví zapříčiňuje poškozený Mars v VIII. domě.",
   text_en:"Persons with the Ascendant in Taurus, Cancer, Leo, Virgo or Scorpio can expect an inheritance if other indicators are favourable. Jupiter in the 8th house in good aspect to Venus or the Moon. Pluto in the 8th house in good aspect to Jupiter or Venus. The Moon in Scorpio in good aspect to Jupiter.",
   zdroj:"Kefer – DĚDICTVÍ"},

  {id:"fin_007", tema:"Dědictví po otci", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[4,8]}],
   text_cs:"Dědictví po otci je dáno je-li Slunce ve IV. domě. Je-li však poškozeno kyne jen marné čekání. Pluto ve II. domě příznivě ozářený při Ascendentu v Býku jest předzvěstí dědictví za zvláštních okolností. Dědictví přichází za direkcí Luny k Saturnu nebo za příznivých tranzitů Jupitera k Venuši v VIII. domě.",
   text_en:"An inheritance from the father is indicated if the Sun is in the 4th house. If it is damaged, however, only fruitless waiting beckons. Pluto in the 8th or 4th house in good aspect to Jupiter. Saturn in Taurus or Cancer in good aspect to the Moon and Jupiter. The Moon in Cancer in the 4th house.",
   zdroj:"Kefer – DĚDICTVÍ"},

  {id:"fin_008", tema:"Spekulace a burza", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[5]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[5]}],
   text_cs:"Na zisk v burzovních obchodech lze soudit je-li Jupiter nebo Merkur v V. domě v dobré vazbě. Povolání burzovníka podléhá Plutonu. Mimo řádný úspěch naznačuje Slunce v konjunkci s Lunou v V. domě bez jakéhokoliv poškození.",
   text_en:"Profit in stock exchange dealings can be inferred if Jupiter or Mercury is in the 5th house in good aspect. The profession of financier requires a strong Jupiter and Mercury. The Ascendant in Taurus or Scorpio. Jupiter in Scorpio in good aspect to Mercury or Venus.",
   zdroj:"Kefer – BURSA"},

  {id:"fin_009", tema:"Hospodárnost a šetrnost", kategorie:["finance","osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[2,4]}],
   text_cs:"Hospodárnost závisí od příznivě ozářeného Saturna ve II. nebo IV. domě. Luna v dobrém aspektu k Saturnu a Slunce v první třetině Raka. Příznivé stupně: 7° Skopce, 27° Býka, 29° Lva. Saturn v Býku nebo Raku — člověk šetří s přirozenou lehkostí.",
   text_en:"Economy depends on a favourably aspected Saturn in the 2nd or 4th house. The Moon in good aspect to Saturn and in the 2nd house produces frugal but stable management. Mercury in the 2nd house in good aspect to Saturn. Venus in Taurus in good aspect to Saturn.",
   zdroj:"Kefer – HOSPODÁRNOST"},

  {id:"fin_010", tema:"Bankovnictví a finanční sektor", kategorie:["finance","povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[12,8]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2,10]}],
   text_cs:"Úspěch v bankovnictví naznačuje Ascendent v Rybách nebo Štíru, Medium coeli ve druhé třetině Býka. Neptun výtečně ozářený ve třetí třetině Štíra je dalším příznivým příznakem. Jupiter v konjunkci s Merkurem ve II. domě při denním zrození.",
   text_en:"Success in banking is indicated by the Ascendant in Pisces or Scorpio, Midheaven in the second decan of Taurus. Neptune in the 2nd or 8th house in good aspect to Jupiter. Saturn in Taurus or Scorpio in the 10th house. Jupiter in Taurus or Scorpio in good aspect to Saturn.",
   zdroj:"Kefer – BANKOVNICTVÍ / BANKÉŘ"},

  {id:"fin_011", tema:"Finančník z povolání", kategorie:["finance","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2,10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8,2,7]}],
   text_cs:"Signifikátoři povolání finančníka: Mars — Jupiter. Horoskopy finančníků: Jupiter v konjunkci s Merkurem ve II. domě při denním zrození, Merkur v konjunkci s Martem ve II. domě při nočním zrození. Jupiter ve Štíru (druhá třetina), Býku (první třetina) nebo Vahách (druhá třetina) v II. nebo X. domě příznivý k Luně, Slunci nebo Venuši.",
   text_en:"Significators of the financier's profession: Mars — Jupiter. Horoscopes of financiers: Jupiter in conjunction with Mercury or Venus in the 2nd or 8th house. The Ascendant in Taurus or Scorpio. Saturn in Taurus in good aspect to Jupiter and Mercury. The Sun in Taurus or Scorpio in good aspect to Jupiter.",
   zdroj:"Kefer – FINANČNÍK"},

  {id:"fin_012", tema:"Akcie a investice", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[5]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[11]}],
   text_cs:"V individuálním horoskopu prozrazuje úspěch v obchodech s akciemi příznivě ozářený XI. dům ve druhé třetině a V. dům jak přímo tak i dispozitory. Výjimečný úspěch naznačuje Slunce v konjunkci s Lunou v V. domě bez jakéhokoliv poškození. Ztráty nasvědčuje Slunce poškozené Uranem nebo poškozený Jupiter v XI. domě.",
   text_en:"Success in share dealing is revealed in the individual horoscope by a favourably aspected 11th house in the second decan. Jupiter in the 11th house in good aspect to Venus or Mercury. The Moon in Aquarius or Gemini in good aspect to Jupiter. Mercury in Aquarius in good aspect to Jupiter and Venus.",
   zdroj:"Kefer – AKCIE"},

  {id:"fin_013", tema:"Doly a těžba", kategorie:["finance","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]}],
   text_cs:"Záležitosti důlní jsou symbolizovány IV. domem individuálního nebo mundánního horoskopu. Zisk z dolů naznačuje Saturn ve II. domě, Bod štěstí v Kozorohu nebo IV. domě. Hornictví: Úspěch v něm lze očekávat když Luna je v Kozorohu a Saturn výhodně aspektuje Medium coeli.",
   text_en:"Mining matters are symbolised by the 4th house of the individual or mundane horoscope. Profit from mines is indicated by a well-aspected Jupiter in the 4th house. Saturn in Taurus or Capricorn in the 4th house in good aspect to Jupiter. The Moon in Taurus or Cancer in the 4th house.",
   zdroj:"Kefer – DOLY / HORNICTVÍ"},

// ══════════════════════════════════════════════════════
//  LÁSKA & VZTAHY
// ══════════════════════════════════════════════════════

  {id:"lask_001", tema:"Milostné aféry a tajné vztahy", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[5,7,11]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[7]}],
   text_cs:"Na milostné aféry lze soudit jsou-li v radikálním horoskopu tyto příznaky: Poškozený Pluto v V. domě, poškozený Uran v V., VII. nebo XI. domě, Venuše v V. domě v konjunkci s Martem, Neptun v VII. domě poškozený. Je-li Venuše ve XII. domě a poškozená lze se obávat tajných milostných afér. Poškozený Ascendent ve Skopci naznačuje aférní sklony.",
   text_en:"Love affairs can be inferred if the following indicators are in the radical chart: damaged Pluto in the 5th house, Venus in adverse aspect to Mars, the Ascendant in Scorpio or Libra with a damaged Venus or Mars. Mars in Scorpio in the 5th house in adverse aspect to Pluto.",
   zdroj:"Kefer – AFÉRY"},

  {id:"lask_002", tema:"Silná erotika a vášeň", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[5,7]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[8,12]}],
   text_cs:"Hrot V. domu ve Štíru — nadšené lásky a záliby. Ve Lvu — čistá milostná vášeň. Venuše ve druhé třetině Štíra, v Rybách nebo V. či VII. domě naznačuje silný a hluboký citový život. Saturn, Uran, Neptun a Pluto v V. domě zdůrazňují mohutné smyslné vášně.",
   text_en:"The cusp of the 5th house in Scorpio — ardent loves and passions. In Leo — pure amorous passion. Venus in the second decan of Scorpio or the first decan of Aries in adverse aspect to Mars produces intense but turbulent relationships. The Moon in Scorpio or Leo in adverse aspect to Mars.",
   zdroj:"Kefer – EROTIKA"},

  {id:"lask_003", tema:"Celibát a vyhýbání se vztahům", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[7]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[5,7]}],
   text_cs:"Sklon k celibátu naznačuje: Saturn ve zlém aspektu k Luně a Venuši. Neptun v V. nebo VII. domě. Poškozený Saturn v VII. domě. Slunce ve Střelci také často nepřeje manželství. Odpor k manželství působí je-li vládce VII. domě, Venuše, Luna nebo vládce Ascendentu v neplodných znameních nebo padajících domech.",
   text_en:"A tendency to celibacy is indicated by: Saturn in bad aspect to the Moon and Venus. Neptune in the 5th or 7th house. A damaged Venus in the 12th house. The Ascendant in Virgo or Capricorn with Saturn in the 1st house. Saturn in the 7th house in adverse aspect to Venus.",
   zdroj:"Kefer – CELIBÁT"},

  {id:"lask_004", tema:"Šťastné manželství a harmonické vztahy", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[7]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[7]}],
   text_cs:"Příznivé postavení Jupitera nebo Venuše v VII. domě naznačuje šťastné manželství. Venuše příznivá k Luně, Slunce příznivé k Jupiteru jsou dalšími dobrými příznaky. Luna v příznivém aspektu k Jupiteru, Slunce příznivé k Venuši — trvalé šťastné spojení.",
   text_en:"A favourable position of Jupiter or Venus in the 7th house indicates a happy marriage. Venus favourable to the Moon or Jupiter in the 7th house. The Moon in Libra or Taurus in good aspect to Venus and Jupiter. Jupiter in the 7th house in good aspect to Venus. The Ascendant in Libra.",
   zdroj:"Kefer – MANŽELSTVÍ"},

  {id:"lask_005", tema:"Nevěra a cizoložství", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[7]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[7]}],
   text_cs:"V mužském horoskopu ukazuje na cizoložství Luna, v ženském Slunce poškozené Uranem. Poškozená Venuše Uranem poukazuje na poklesky již v mládí. Neptun v VII. domě vždy působí podivné vztahy. Typickým příznakem jsou poškozená Světla a Merkur v VII. domě.",
   text_en:"In a male horoscope, infidelity is indicated by the Moon, in a female horoscope by the Sun damaged by Uranus. A damaged Venus in the 5th or 7th house in adverse aspect to Mars or Uranus. Mars in the 5th house in adverse aspect to Uranus or Pluto. The Ascendant in Scorpio with a damaged Pluto.",
   zdroj:"Kefer – CIZOLOŽSTVÍ"},

  {id:"lask_006", tema:"Jemná erotika a romantika", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[7]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[2]}],
   text_cs:"Jemnou erotiku propůjčuje Slunce ve Vahách. Povrchní erotiku Býk nebo Venuše v Býku nebo II. domě. Hrot V. domu ve Vahách přináší klidnou lásku manželskou. V Blížencích četné milostné poměry s nervovým a intelektuálním pozadím.",
   text_en:"Refined eroticism is bestowed by the Sun in Libra. Superficial eroticism by Taurus or Venus in Taurus or the 2nd house. Healthy, natural eroticism by Mars or Venus in Aries or Scorpio in good mutual aspect. The Moon in Libra or Taurus in good aspect to Venus produces a sensual nature.",
   zdroj:"Kefer – EROTIKA (jemná)"},

  {id:"lask_007", tema:"Adopce dětí", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[7,10]}],
   text_cs:"Klasický příznak pro adopci do bohaté rodiny jest: Saturn v VII. nebo X. domě v aplikaci k Luně. Jupiter západně ve dvojitých znameních. Tyto příznaky naznačují, že dítě vyrůstá mimo vlastní rodinu nebo pod péčí jiných.",
   text_en:"The classic indicator for adoption into a wealthy family is: Saturn in the 7th or 10th house in application to the Moon. Jupiter in good aspect to the Moon and Saturn in the 4th or 10th house. Pluto in the 4th house in good aspect to Jupiter. The Moon in the 10th house in good aspect to Jupiter.",
   zdroj:"Kefer – ADOPCE"},

  {id:"lask_008", tema:"Spory o alimenty a výživné", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[7]},{typ:"planeta_v_domu",planeta:"Uran",dum:[7]}],
   text_cs:"Spory o výživné hrozí je-li v radikálním horoskopu Mars v VII. domě ve špatném aspektu k Uranu nebo Saturnu. Týž význam má Uran v VII. domě poškozený Martem. Nepříznivé aspekty mezi Jupiterem a Marsem v VII. domě rovněž nasvědčují finančním sporům ve vztazích.",
   text_en:"Disputes over maintenance are threatened if Mars is in the 7th house in bad aspect to Uranus or Saturn in the radical chart. Saturn in the 7th house in adverse aspect to Mars or Uranus. Uranus in the 7th house in adverse aspect to Mars or Saturn. Venus in adverse aspect to Mars and Saturn.",
   zdroj:"Kefer – ALIMENTY"},

  {id:"lask_009", tema:"Afrodisiaka a zvýšení pohlavního pudu", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[5]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[5]}],
   text_cs:"Užívání přípravků zvyšujících pohlavní pud souvisí téměř vždy s poškozeným Martem a Venuší. Klasické příznaky jsou: Mars ve Lvu v opozici nebo kvadratu na Venuši, Ascendent poškozený Venuší. Silná Venuše v příznivém aspektu k Martu bez poškození propůjčuje přirozené smyslové nadání.",
   text_en:"The use of aphrodisiacs is almost always associated with a damaged Mars and Venus. The classic indicator: Venus in Scorpio or Aries in adverse aspect to Mars and Pluto. Mars in Scorpio in adverse aspect to Pluto and Venus. The Ascendant in Scorpio with damaged Mars and Venus.",
   zdroj:"Kefer – AFRODISIAKA"},

// ══════════════════════════════════════════════════════
//  POVOLÁNÍ & KARIÉRA
// ══════════════════════════════════════════════════════

  {id:"pov_001", tema:"Advokát a právník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[7]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[7,6]}],
   text_cs:"Příznaky úspěšného advokáta jsou: obecně zdůraznění třetí třetiny VI. domu, Vah nebo VII. domu; Jupiter ve Vahách, Jupiter v Panně 21°–30°. Merkur ve XII. domě při denním zrození. Merkur v konjunkci se Saturnem se vztahem k X. domu. Styk s advokáty prozrazuje v osobním horoskopu IX. dům.",
   text_en:"The indicators of a successful lawyer are: generally an emphasis on the third decan of the 6th house, Libra or the 7th house; Jupiter in Libra or the 9th house in good aspect to Saturn; Mercury in Libra in good aspect to Saturn or Jupiter. The Ascendant in Libra. Saturn in Libra in the 9th house.",
   zdroj:"Kefer – ADVOKÁT"},

  {id:"pov_002", tema:"Básník a spisovatel", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[9]}],
   text_cs:"V horoskopech básníků nacházíme silného Merkura ve vztahu k Neptunu. Jupiter bývá ve Střelci, Slunce v X. domě v konjunkci s Merkurem, Medium coeli v první třetině Ryb. Venuše nebo Merkur bývají při denním zrození v I. domě nebo je mezi nimi jakýkoliv aspekt. Příznivý pro úspěch působí dobrý aspekt Merkura k Uranu.",
   text_en:"In the horoscopes of poets we find a strong Mercury in relation to Neptune. Jupiter is often in Sagittarius, the Sun in Pisces or Scorpio. Neptune in the 5th house in good aspect to Mercury. Mercury in Pisces in good aspect to Neptune. Venus in Pisces in good aspect to Neptune and Mercury.",
   zdroj:"Kefer – BÁSNÍK"},

  {id:"pov_003", tema:"Chirurg", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Proslulí chirurgové mají: Lunu, Merkura, Marta, Urana nebo Ascendent v první třetině Štíra. Mars je pravidelně výtečně aspektován Uranem. Bod štěstí ve Štíru. Medium coeli ve třetí třetině Střelce. Signifikátor povolání: Mars.",
   text_en:"Famous surgeons have: the Moon, Mercury, Mars, Uranus or the Ascendant in the first decan of Scorpio. Mars is generally in conjunction with Saturn or Pluto. The Ascendant in Scorpio or Aries. Saturn in Scorpio in good aspect to Mars. The Sun in Scorpio in good aspect to Mars and Saturn.",
   zdroj:"Kefer – CHIRURGIE"},

  {id:"pov_004", tema:"Diplomat a státník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[2,10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[9]}],
   text_cs:"Signifikátor diplomata je Pluto. Merkur v Býku nebo Kozorohu příznivý k Saturnu nebo Plutonu, Jupiter ve Střelci. Ohnivá znamení jsou nevhodná — přílišná otevřenost. Přínivá data: Ascendent v Býku nebo třetí třetině Raka s Merkurem ve II. domě příznivě ozářeným Saturnem.",
   text_en:"The significator of a diplomat is Pluto. Mercury in Taurus or Capricorn favourable to Saturn or Pluto, Jupiter in Libra in good aspect to Saturn and Mercury. Venus in Libra or Taurus in good aspect to Saturn and Mercury. The Ascendant in Libra or Taurus. Saturn in Taurus or Capricorn.",
   zdroj:"Kefer – DIPLOMAT"},

  {id:"pov_005", tema:"Herec a umělecký performer", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[5]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[1]}],
   text_cs:"Signifikátoři herectví jsou Luna, Merkur, Venuše. Merkur v V. domě v konjunkci s Venuší nebo tatáž konstelace v X. domě při denním zrození. Venuše v I. domě v aspektu s Martem. Ascendent v Panně. Silné obsazení Vodnáře a vodních znamení. Mundánně závisí otázky divadla na V. domu.",
   text_en:"The significators of acting are the Moon, Mercury, Venus. Mercury in the 5th house in conjunction with Venus, or the same conjunction in Gemini or Libra. The Moon in Leo or Pisces in good aspect to Neptune. Venus in Leo in good aspect to Neptune. The Ascendant in Leo or Pisces.",
   zdroj:"Kefer – HEREC"},

  {id:"pov_006", tema:"Hudebník a skladatel", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[7]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[2]}],
   text_cs:"Povolání hudebníka signifikuje Neptun. Data: Venuše v konjunkci s Merkurem, Merkur v konjunkci s Uranem v I., III. nebo IX. domě. Ascendent bývá v Rybách, Medium coeli v první třetině Býka, Lva nebo Vodnáře nebo třetí třetině Blíženců. Hudební nadání působí: Luna v Býku nebo v VII. domě, Venuše nebo Jupiter v konjunkci s Uranem.",
   text_en:"The musician's profession is indicated by Neptune. Indicators: Venus in conjunction with Mercury, Mercury in conjunction with Uranus (or both), Neptune in the 1st or 5th house in good aspect to Venus. Venus in Pisces or Libra in good aspect to Neptune. The Moon in Pisces in good aspect to Venus.",
   zdroj:"Kefer – HUDEBNÍK"},

  {id:"pov_007", tema:"Astrolog z povolání", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[9]},{typ:"planeta_v_domu",planeta:"Uran",dum:[1,9]}],
   text_cs:"Nejčastější příznaky v horoskopu astrologa z povolání: Slunce konjunkce Merkur v IX. domě. Luna v Blížencích nebo Vodnáři a v I. domě. Merkur v konjunkci s Uranem v I., III. a IX. nebo X. domě zvláště je-li Slunce, Merkur nebo Uran ve východních znameních, Saturn v IX. domě při denním zrození.",
   text_en:"The most frequent indicators in the horoscope of a professional astrologer: the Sun conjunct Mercury in the 9th house. The Moon in Gemini or Aquarius in the 9th house. Uranus in the 9th or 10th house in aspect to Mercury. Mercury in Aquarius in good aspect to Uranus. Saturn in good aspect to Mercury.",
   zdroj:"Kefer – ASTROLOG"},

  {id:"pov_008", tema:"Detektiv a vyšetřovatel", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[8]}],
   text_cs:"Povolání detektiva: Merkur je signifikátorem povolání a je ve Štíru. Analytická schopnost závisí od silné Panny a Saturna. Pronikavou schopnost analýzy propůjčuje Saturn v Panně jako signifikátor mentálních kvalit.",
   text_en:"The detective's profession: Mercury is the significator of the profession and is in Scorpio. Analytical ability depends on a strong Virgo and Saturn. A penetrating ability for analysis is bestowed by Saturn in Virgo as a significator of mental qualities. Pluto in Scorpio in good aspect to Mercury.",
   zdroj:"Kefer – DETEKTIV"},

  {id:"pov_009", tema:"Fyzik a přírodovědec", kategorie:["povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[6]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Fyzikové mívají Ascendent v Panně, Medium coeli v první nebo druhé třetině Střelce. Signifikátor povolání: Uran, Mars, Štír. Merkur příznivý k Uranu udílí zájem o přesné vědy. Jupiter bývá ve druhé třetině Štíra.",
   text_en:"Physicists tend to have the Ascendant in Virgo, Midheaven in the first or second decan of Sagittarius. The significator of the profession is Uranus. Uranus in the 9th or 10th house in good aspect to Mercury and Saturn. Mercury in Aquarius or Virgo in good aspect to Uranus.",
   zdroj:"Kefer – FYZIK"},

  {id:"pov_010", tema:"Vojenský důstojník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8,5,9,11]}],
   text_cs:"Horoskopy důstojníků: Jupiter v X. domě v konjunkci s Martem zvláště ve Štíru, Lvu, Střelci nebo Vodnáři. Mars ve III. domě a Jupiter v VII. nebo XI. za nočního zrození. Slunce bývá často ve Střelci. Medium coeli ve druhé třetině Blíženců.",
   text_en:"Horoscopes of officers: Jupiter in the 10th house in conjunction with Mars especially in Scorpio, Leo, Sagittarius or Aquarius. The Ascendant in Aries or Capricorn. Mars in Capricorn or Aries in the 10th house in good aspect to Jupiter. Saturn in Capricorn in good aspect to Mars.",
   zdroj:"Kefer – DŮSTOJNÍK"},

  {id:"pov_011", tema:"Inženýr a technický pracovník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[2,4]}],
   text_cs:"Výtečnéí a úspěšní inženýři mají tato data: Merkur příznivě k Martu, Mars v Býku a v I. domě v dobrém aspektu k Merkurovi, Mars v Raku na 14° a 15°, Mars ve Střelci, Saturn ve druhé třetině Skopce. Ascendent v Raku na 14° nebo 15° příznivě k Luně a Martu.",
   text_en:"Excellent and successful engineers have these indicators: Mercury favourably to Mars, Mars in Taurus and in the 1st house in good aspect to Uranus or Saturn. Saturn in Capricorn or Aquarius in good aspect to Uranus and Mars. The Ascendant in Taurus or Capricorn with strong Mercury.",
   zdroj:"Kefer – INŽENÝR"},

  {id:"pov_012", tema:"Chemik a lékárník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]}],
   text_cs:"Chemikové mají ve svých horoskopech: Slunce ve Štíru dobře k Merkurovi, Merkur ve Štíru zvláště v I. domě, Merkur v dobrém aspektu k Martu nebo Uranu, Marta ve Štíru (zvláště první třetina) nebo v I. domě, Saturna výtečného ve druhé třetině Štíra. Ascendent bývá v Panně, Štíru nebo Rybách.",
   text_en:"Chemists have in their horoscopes: the Sun in Scorpio in good aspect to Mercury, Mercury in Scorpio especially in the 1st house in good aspect to Saturn. Saturn in Scorpio or Virgo in good aspect to Mercury and the Sun. The Ascendant in Scorpio or Virgo. Mars in Scorpio in good aspect to Saturn.",
   zdroj:"Kefer – CHEMIE / CHEMIK"},

  {id:"pov_013", tema:"Filosof z povolání", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9,4]}],
   text_cs:"Povolání filozofa signifikuje Merkur. Data: Medium coeli ve druhé třetině Raka nebo Ryb, ve třetí třetině Střelce; Merkur v konjunkci s Venuší ve IV. domě, silný Jupiter a IX. dům (zvláště první třetina). Saturn v IX. domě za denního zrození.",
   text_en:"The philosopher's profession is indicated by Mercury. Indicators: Midheaven in the second decan of Cancer or Pisces, in the third decan of Scorpio, Virgo or Aquarius. Jupiter in Sagittarius or Pisces in the 9th house. Mercury in Sagittarius or Aquarius in the 9th house. The Ascendant in Sagittarius.",
   zdroj:"Kefer – FILOSOF"},

  {id:"pov_014", tema:"Filolog a jazykovědec", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[9]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[9]}],
   text_cs:"Talent k jazykům a povolání jazykovědce prozrazují: Venuše v IX. domě v konjunkci s Merkurem, Merkur v Panně, Luna ve Štíru dobře ozářená. Polygloti mívají Venuši příznivě k Merkurovi a IX. dům silně obsazen.",
   text_en:"Talent for languages and the profession of linguist are revealed by: Venus in the 9th house in conjunction with Mercury, Mercury in Gemini in good aspect to Jupiter. Jupiter in Gemini in the 9th house. The Ascendant in Gemini or Sagittarius. Saturn in good aspect to Mercury and Jupiter.",
   zdroj:"Kefer – FILOLOG"},

  {id:"pov_015", tema:"Agitátor a řečník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[4,7]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[7]}],
   text_cs:"Schopný agitátor mívá obvykle Urana ve IV. nebo VII. domě, Marta v poslední třetině Vah. Mars téměř vždy je poškozen. Na agitaci mezi lidem naznačuje Mars v III. nebo XII. domě, Neptun v I., III. nebo IV. domě v mundánním horoskopu.",
   text_en:"A capable agitator usually has Uranus in the 4th or 7th house, Mars in the last decan of Libra. Mars is almost always in the 1st, 7th or 10th house in good aspect to Uranus. The Ascendant in Aries or Libra with a strong Mars. Saturn in adverse aspect to Mars and Uranus intensifies this.",
   zdroj:"Kefer – AGITÁTOR"},

  {id:"pov_016", tema:"Archivář a správce dokumentů", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[1]}],
   text_cs:"Úspěch v povolání archiváře působí Merkur v I. domě v konjunkci s Venuší. Zálibu v historii a uchovávání dokumentů propůjčuje Saturn příznivě k Uranovi zvláště ve vazbě k II. domě.",
   text_en:"Success in the archivist profession is produced by Mercury in the 1st house in conjunction with Venus. A love of history and preservation of documents is indicated by Saturn in Virgo or Capricorn in the 10th house. Mercury in Virgo in good aspect to Saturn. The Ascendant in Virgo or Capricorn.",
   zdroj:"Kefer – ARCHIVÁŘ"},

  {id:"pov_017", tema:"Atlet a sportovec z povolání", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[10]},{typ:"planeta_v_domu",planeta:"Mars",dum:[10]}],
   text_cs:"Úspěšný atlet-profesionál rodí se za těchto podmínek: Denní zrození, Merkur ve vztahu (konjunkci) s Martem v X. domě a v úseku, kde vládne Merkur. Silný Mars v aspektu ke Slunci nebo Jupiteru a zdůrazněný I. dům.",
   text_en:"A successful professional athlete is born under the following conditions: diurnal birth, Mercury in relation (conjunction) with Uranus especially in Aries or Leo. Mars in the 1st house in good aspect to Jupiter. The Ascendant in Aries or Scorpio. Jupiter in Aries or Sagittarius in good aspect to Mars.",
   zdroj:"Kefer – ATHLET"},

  {id:"pov_018", tema:"Archeolog a badatel starověku", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Sklon k archeologii působí vazba Saturna k Uranu. Typické příznaky: Merkur příznivě k Uranu, Saturn ve třetí třetině Štíra, Saturn ve II. domě příznivě k Uranu, Uran v X. domě v opozici k Merkurovi. Uran v X. domě téměř vždy působí zálibu ve starých věcech nebo kulturách.",
   text_en:"A tendency towards archaeology is produced by the bond of Saturn to Uranus. Typical indicators: Mercury favourably to Uranus, Saturn in good aspect to Uranus in the 4th or 9th house. The Ascendant in Capricorn or Aquarius. The Moon in Taurus or Capricorn in good aspect to Saturn and Uranus.",
   zdroj:"Kefer – ARCHEOLOG / BADATELSTVÍ"},

  {id:"pov_019", tema:"Dělník a manuální pracovník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]}],
   text_cs:"Povolání dělnické podléhá Saturnu a Kozorohu. V horoskopech dělníků bývá Saturn ve II. domě, ve druhé třetině Raka a IV. domu, Medium coeli často v první třetině Kozoroha. Vedoucí dělník mívá Medium coeli ve druhé třetině Skopce.",
   text_en:"The working-class profession falls under Saturn and Capricorn. In the horoscopes of workers, Saturn is often in the 2nd house, in the second or third decan of Capricorn. The Ascendant in Capricorn or Virgo. Mercury in Capricorn or Virgo in good aspect to Saturn. Mars in Capricorn.",
   zdroj:"Kefer – DĚLNÍK"},

  {id:"pov_020", tema:"Dopravce a přepravní povolání", kategorie:["povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[3]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]}],
   text_cs:"Povolání Merkurické se vztahem ke Skopci. Ascendent úspěšného dopravce bývá v Blížencích. Obchodní cestující: Merkur v VI. domě a západních znameních přičemž X. dům je bez planet. Horoskopy obchodních cestujících mívají Slunce v Blížencích, Ascendent v Blížencích, Medium coeli ve třetí třetině Panny.",
   text_en:"The Mercurial profession with a relation to Scorpio. The Ascendant of a successful carrier is often in Gemini. Commercial travellers often have the Sun in Gemini or Sagittarius in the 3rd or 9th house. Mercury in Gemini in good aspect to Jupiter. The Moon in Gemini in good aspect to Mercury.",
   zdroj:"Kefer – CESTUJÍCÍ (obchodní) / DOPRAVCE"},

  {id:"pov_021", tema:"Geometr a kartograf", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6,12]}],
   text_cs:"Lidé tohoto povolání mívají Medium coeli v první třetině Panny. Merkur při denním zrození bývá v VI. nebo XII. domě. Zálibu v geometrii a přesných vědách propůjčuje Merkur příznivě k Uranu v zemských znameních.",
   text_en:"People of this profession tend to have Midheaven in the first decan of Virgo. Mercury at diurnal birth is often in the 6th house in Virgo or Gemini. Saturn in Virgo in good aspect to Mercury. The Ascendant in Virgo or Gemini. Jupiter in good aspect to Mercury in the 6th or 10th house.",
   zdroj:"Kefer – GEOMETR"},

  {id:"pov_022", tema:"Hypnotizér a magnetizér", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[10]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[10]}],
   text_cs:"Obratní hypnotizéři mají obvykle v X. domě Urana nebo Merkura, poškozeného Merkurem nebo Uranem (zvláště opozicí). Fascinace: Osoby mající tento dar mají v horoskopu Venuši ve vztahu k Uranu v poměru k VII. domu.",
   text_en:"Skilled hypnotists usually have in the 10th house Uranus or Mercury, damaged by Mercury or Uranus (especially in Scorpio). Neptune in the 10th house in good aspect to Mercury. The Ascendant in Scorpio or Pisces. Pluto in the 10th house in good aspect to Mercury and Uranus.",
   zdroj:"Kefer – HYPNOTIZÉR"},

  {id:"pov_023", tema:"Hrobník a funerální pracovník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Signifikátor povolání: Venuše-Mars-Saturn. Horoskopy hrobníků vykazují tyto konstelace: Merkur v X. domě ve špatném aspektu k Uranu nebo naopak Uran v X. domě a ve špatném aspektu (opozici) k Merkurovi.",
   text_en:"Significator of the profession: Venus–Mars–Saturn. Horoscopes of undertakers show these constellations: Mercury in the 10th house in Scorpio in conjunction with Saturn or Mars. Saturn in Scorpio or Capricorn in the 10th house. Mars in Scorpio in the 10th house. The Ascendant in Scorpio or Capricorn.",
   zdroj:"Kefer – HROBNÍK"},

  {id:"pov_024", tema:"Akademik a vědec", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[2]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[2]}],
   text_cs:"Předpoklady úspěchů akademických jsou: Merkur ve II. domě v konjunkci s Venuší. Denní zrození a Ascendent ve východních znameních. Saturn v IX. domě za denního zrození je rovněž příznivým příznakem pro vědeckou kariéru.",
   text_en:"Prerequisites for academic success are: Mercury in the 2nd house in conjunction with Venus. Diurnal birth and the Ascendant in Gemini or Aquarius. Jupiter in Gemini or Aquarius in the 9th or 10th house. Saturn in good aspect to Jupiter and Mercury. Mercury in Aquarius in good aspect to Uranus.",
   zdroj:"Kefer – AKADEMIK"},

  {id:"pov_025", tema:"Akrobat a cirkusový umělec", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[3]}],
   text_cs:"Příznakem tohoto povolání v klasické astrologii jest Merkur v Blížencích a v I. domě v konjunkci se Saturnem. Atletické povolání signifikuje Mars a Skopec. Silný Mars v aspektu k Merkurovi propůjčuje fyzickou obratnost a koordinaci.",
   text_en:"The indicator of this profession in classical astrology is Mercury in Gemini and in the 1st house in conjunction with the Ascendant. The Ascendant in Gemini. Mercury in Gemini or Virgo in the 10th house. Jupiter in Gemini in good aspect to Mercury. Saturn in good aspect to Mercury and Jupiter.",
   zdroj:"Kefer – AKROBAT"},

  {id:"pov_026", tema:"Film a filmový průmysl", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"ascendent_v_znameni",znameni:[3]}],
   text_cs:"Signifikátor: Uran zvláště ve vztahu k Plutonu. Úspěch ve filmu lze předvídat je-li Ascendent ve třetí třetině Blíženců a Uran v příznivém a silném postavení. V horoskopech slavných dětí bývá skkvěle ozářen Pluto.",
   text_en:"Significator: Uranus especially in relation to Pluto. Success in film can be predicted if the Ascendant is in the third decan of Aquarius or Pisces. Neptune in the 5th house in good aspect to Venus and Mercury. The Moon in Pisces or Aquarius in good aspect to Neptune. Uranus in the 5th house.",
   zdroj:"Kefer – FILM"},

// ══════════════════════════════════════════════════════
//  CESTOVÁNÍ & POBYT V CIZINĚ
// ══════════════════════════════════════════════════════

  {id:"ces_001", tema:"Mnoho cest a kočovný život", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[3,9,12]}],
   text_cs:"Na mnoho cest poukazují: Luna v X. domě v pohyblivých znameních zvláště je-li v aspektu s Uranem. Uran ve III., IX. nebo XII. domě v pohyblivých znameních. Vzestupný Uzel v Blížencích a Střelci nebo ve III. a IX. domě. Hroty III. a IX. domu v pohyblivých znameních naznačují povolání spojené s cestami.",
   text_en:"Many journeys are indicated by: the Moon in the 10th house in mutable signs especially if in aspect with Uranus. Uranus in the 3rd house. Jupiter in Gemini or Sagittarius in the 3rd or 9th house. The Ascendant in Gemini or Sagittarius. Mercury in the 9th house in good aspect to Jupiter.",
   zdroj:"Kefer – CESTY"},

  {id:"ces_002", tema:"Daleké cesty a zámoří", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[9,11]}],
   text_cs:"Daleké cesty prozrazují: Jupiter ve Střelci nebo druhé třetině Vodnáře. Zámoské cesty: Slunce v VI. domě ve Střelci, Luna v IX. domě ve vodních znameních. Příznivé cesty naznačuje Jupiter v IX. domě solárního horoskopu. Chceme-li vykonat úspěšnou cestu dbejme aby při počátku Luna transitovala Střelcem nebo Rybami.",
   text_en:"Long-distance journeys are revealed by: Jupiter in Sagittarius or the second decan of Aquarius. Overseas journeys: the Sun in the 6th house in Pisces or Sagittarius, Venus in the 9th house in conjunction with Jupiter or Mercury. Jupiter in the 9th house in good aspect to Mercury.",
   zdroj:"Kefer – CESTY (daleké)"},

  {id:"ces_003", tema:"Cestovatel z povolání", kategorie:["cestovani","povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[9]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8,4]}],
   text_cs:"Horoskopy cestovatelů: Slunce ve Střelci, Luna v Panně, Mars ve třetí třetině Štíra nebo první třetině Raka, Jupiter ve třetí třetině Panny. Touha po cestách: Merkur v I. domě v Panně, Blížencích, Střelci nebo Rybách v dobrém aspektu k Luně.",
   text_en:"Horoscopes of travellers: the Sun in Sagittarius, the Moon in Virgo, Mars in the third decan of Scorpio or first decan of Aries. The Ascendant in Sagittarius or Gemini. Jupiter in Sagittarius in the 9th house. Mercury in the 9th house in good aspect to Jupiter. Uranus in the 9th house.",
   zdroj:"Kefer – CESTOVATEL"},

  {id:"ces_004", tema:"Emigrace a pobyt v cizině", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"ascendent_v_znameni",znameni:[9,8,12]}],
   text_cs:"Emigranti mívají ve svém horoskopu zdůrazněn 9° Ryb. Je-li Saturn v první třetině Střelce nebo poškozený v IX. domě nutno před emigrováním varovat. Je-li ve IV. domě škůdce lze radit k opuštění vlasti. Ascendent ve Střelci (druhá a třetí třetina) nebo Štíru jsou příznaky pobytu v cizině.",
   text_en:"Emigrants tend to have 9° Pisces emphasised in their horoscopes. If Saturn is in the first decan of Sagittarius or the Ascendant ruler in the 9th house, emigration is likely. Uranus in the 4th house in adverse aspect to the Moon. The Moon in adverse aspect to Uranus and Saturn.",
   zdroj:"Kefer – EMIGRACE / CIZINA"},

  {id:"ces_005", tema:"Nebezpečné cesty a varování", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[9]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]}],
   text_cs:"Nebezpečí na cestách hrozí: Saturn v IX. domě vždy varuje před nebezpečnými cestami. Mars v IX. domě ve zlém aspektu ke Světlům. Nikdy nelze radit k cestám transituje-li Saturn, Uran nebo Neptun III. nebo IX. domem. Na cestách se nevydáváme probíhá-li Luna Pannou nebo Štírem.",
   text_en:"Danger on journeys threatens: Saturn in the 9th house always warns of dangerous journeys. Mars in the 9th house in adverse aspect to Saturn or Uranus threatens accidents abroad. The Moon in adverse aspect to Saturn and Mars in the 9th house. Uranus in the 9th house in adverse aspect to the Moon.",
   zdroj:"Kefer – CESTY (nebezpečné)"},

  {id:"ces_006", tema:"Úspěšné cesty a výhodný pobyt v cizině", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[9]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[9]}],
   text_cs:"Úspěšné cesty prozrazují: Slunce v konjunkci s Venuší ve III. domě, Luna příznivě k Merkurovi, Luna v IX. domě příznivě k Venuši, Merkur v IX. domě v příznivém ozáření, Jupiter v Rybách a v I. domě. Pobyt v cizině je výhodný je-li Slunce v IX. domě.",
   text_en:"Successful journeys are revealed by: the Sun in conjunction with Venus in the 3rd house, the Moon favourably to Mercury, the Moon in Gemini or Sagittarius in good aspect to Jupiter. Jupiter in the 3rd or 9th house in good aspect to Mercury. Mercury in good aspect to Jupiter in the 3rd or 9th house.",
   zdroj:"Kefer – CESTY (úspěšné)"},

  {id:"ces_007", tema:"Cizina a vztahy s cizinou", kategorie:["cestovani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8,9]},{typ:"planeta_v_domu",planeta:"Mars",dum:[10]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[10]}],
   text_cs:"Vztahy k cizině: Vládce Ascendentu v druhé třetině IX. domu, Vzestupný Uzel v IX. domě, Mars v Kozorohu, Ascendent ve druhé a třetí třetině Štíra nebo Střelce. Je-li III. a V. dům příznivý lze se usídlit blízko domova. Dobrý IX. a XI. dům příznivě ozářený je vhodný pro přesídlení kamkoli.",
   text_en:"Relations with foreign countries: the ruler of the Ascendant in the second decan of the 9th house, the North Node in the 9th house, Mars in Capricorn or the 10th house favourable to the Moon. Jupiter in the 9th house in good aspect to Mercury. The Ascendant in Sagittarius.",
   zdroj:"Kefer – CIZINA"},

// ══════════════════════════════════════════════════════
//  RODINA & DĚTI
// ══════════════════════════════════════════════════════

  {id:"rod_001", tema:"Děti – příznivé vyhlídky", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[5]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[5,11]}],
   text_cs:"Nejlepším znamením v otázce dětí je Jupiter v V. domě. Je-li dobře aspektován Martem učiní dítě kariéru u vojska nebo v průmyslu. Venuše v XI. domě nebo příznivý aspekt k Jupiteru přináší radost z dětí. Venuše v V. domě nebo V. dům v Býku nebo Vahách přináší krásné děti.",
   text_en:"The best sign regarding children is Jupiter in the 5th house. If it is well aspected by Mars, the child will pursue a career. Jupiter in Cancer, Leo or Sagittarius in the 5th house. The Moon in Cancer in good aspect to Jupiter. Venus in the 5th house in good aspect to Jupiter.",
   zdroj:"Kefer – DĚTI"},

  {id:"rod_002", tema:"Bezdětnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[5]},{typ:"ascendent_v_znameni",znameni:[3,5,7,10]}],
   text_cs:"Bezdětnost: V. dům v neplodných znameních, Slunce ve špatném aspektu k Luně, Uran v V. domě. Ascendent v Blížencích, Lvu, Vahách nebo Kozorohu naznačuje málo dětí. Ascendent ve Vodnáři — sice málo dětí, ale jsou velmi nadané. Při Ascendentu ve Střelci jedno z mála dětí žije mimo rodinu.",
   text_en:"Childlessness: the 5th house in barren signs, the Sun in bad aspect to the Moon, Uranus in the 5th house. The Ascendant in Virgo or Capricorn. Saturn in the 5th house in adverse aspect to the Moon or Venus. Pluto in the 5th house in adverse aspect to the Moon. Mars in adverse aspect to Venus.",
   zdroj:"Kefer – DĚTI (bezdětnost)"},

  {id:"rod_003", tema:"Mnoho dětí", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[1,5,7,10]},{typ:"ascendent_v_znameni",znameni:[4,12]}],
   text_cs:"Mnoho dětí: Luna v I., V., VII. nebo X. domě zvláště v Raku, Štíru, Rybách, Střelci nebo Blížencích. Jupiter v VII. nebo I. domě. Ascendent v Raku nebo Rybách. Ascendent ve Štíru dává taktéž mnoho dětí, ale některé z nich zemřou. Uzel v I. domě nebo ve plodných znameních je příznivý.",
   text_en:"Many children: the Moon in the 1st, 5th, 7th or 10th house especially in Cancer, Scorpio, Pisces, Sagittarius or Gemini. Jupiter in Cancer or Sagittarius in the 5th house. Venus in Cancer or Pisces in good aspect to the Moon and Jupiter. The Ascendant in Cancer or Sagittarius.",
   zdroj:"Kefer – DĚTI (mnoho)"},

  {id:"rod_004", tema:"Předčasná smrt dítěte", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[5]},{typ:"planeta_v_domu",planeta:"Pluto",dum:[5,11]}],
   text_cs:"Jsou-li škůdci v V. nebo XI. domě a v plodných znameních lze usuzovat, že se děti narodí, avšak nebudou žít dlouho. Totéž působí Saturn v konjunkci s Venuší v VII. domě nebo vládce V. domu v domě VIII. Poškozený Jupiter varuje před předčasnou smrtí některého z dětí.",
   text_en:"If malefics are in the 5th or 11th house and in fertile signs, it can be inferred that children will be born but will not prosper or will die young. Saturn or Mars in the 5th house in adverse aspect to the Moon or Venus. Pluto in the 5th house in adverse aspect to the Moon.",
   zdroj:"Kefer – DĚTI (smrt)"},

  {id:"rod_005", tema:"Domov a rodinné zázemí", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[4]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[4]}],
   text_cs:"Signifikátor domova je IV. dům. Láska ke domovu: Hrot IV. domu ve Lvu, Vahách, Venuše ve IV. domě nebo v Raku. Zisk v domově kyne je-li hrot II. domu v Raku nebo hrot V. domu v Panně. Jupiter ve druhé třetině Raka, Slunce ve IV. domě, konjunkce Luny s Venuší přinášejí krásný harmonický domov.",
   text_en:"The significator of home is the 4th house. Love of home: the cusp of the 4th house in Leo, Libra, Venus in the 4th house or the Moon in Cancer. The Moon in Cancer in the 4th house in good aspect to Venus or Jupiter. Jupiter in Cancer in the 4th house. The Ascendant in Cancer.",
   zdroj:"Kefer – DOMOV"},

  {id:"rod_006", tema:"Domácnost a péče o domov", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[4,12]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[4,12]}],
   text_cs:"Smysl pro domácnost dává Slunce nebo Luna v Raku nebo Rybách zvláště ve druhé třetině, Vzestupný Uzel ve IV. domě. Nepříjemnosti v domácnosti vznikají je-li Venuše poškozena Lunou nebo je-li špatně ozářen 19° Střelce. Sestupný Uzel ve IV. domě rovněž není dobrým příznakem.",
   text_en:"A sense of domesticity is given by the Sun or Moon in Cancer or Pisces especially in the second decan, the North Node in the 4th house or in Cancer. Venus in Cancer or Taurus in the 4th house. Jupiter in Cancer in good aspect to the Moon. Saturn in good aspect to the Moon in the 4th house.",
   zdroj:"Kefer – DOMÁCNOST"},

  {id:"rod_007", tema:"Bratr a sourozenci", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[3]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[3]}],
   text_cs:"Mladší bratr je signován Merkurem. Pomoc od bratra slibuje Venuše ve III. domě. Poškození bratrem nastává když direkční Slunce tvoří nepříznivý úhel na Saturna ve vztahu k III. domu nebo když Saturn transituje III. domem.",
   text_en:"The younger brother is signified by Mercury. Help from a brother is promised by Venus in the 3rd house. Damage from a brother is threatened by Mars or Saturn in the 3rd house in adverse aspect. The Moon in Gemini in adverse aspect to Mercury. Saturn in Gemini in adverse aspect to Mercury.",
   zdroj:"Kefer – BRATR"},

// ══════════════════════════════════════════════════════
//  SMRT & PŘECHOD
// ══════════════════════════════════════════════════════

  {id:"smrt_001", tema:"Dlouhý život a přirozená smrt", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[8,4,12]}],
   text_cs:"Jupiter jako signifikátor dlouhého života: stojí-li Jupiter osamocen a nepoškozen v IV., VIII. nebo XII. domě v příznivém aspektu k Hylegu je to znamením dlouhého věku. Hylég je znamenitě aspektován, vládce IV. domu v silném postavení nebo přímo ve IV. domě, Saturn v příznivém postavení.",
   text_en:"Jupiter as significator of long life: if Jupiter stands alone and undamaged in the 4th, 8th or 12th house, or if it is in good aspect to the Sun, Moon and Ascendant. Saturn in good aspect to the Sun and Moon in fixed signs. The Ascendant in Taurus, Scorpio or Leo with a strong Jupiter.",
   zdroj:"Kefer – DLOUHOVĚKOST"},

  {id:"smrt_002", tema:"Nebezpečí smysly a úrazy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[8]},{typ:"planeta_v_domu",planeta:"Mars",dum:[8]}],
   text_cs:"Škody způsobené elektřinou naznačuje poškozený Uran v VIII. domě individuálního horoskopu. Smrt elektřinou lze soudit je-li poškození značné a vládce VIII. domu má nepříznivou vazbu k Uranu. Nebezpečí úrazů: Mars nebo Saturn velmi poškozený v I. nebo VIII. domě.",
   text_en:"Damage caused by electricity is indicated by a damaged Uranus in the 8th house of the individual horoscope. Death by electricity is also indicated by Mars in adverse aspect to Uranus in the 8th house. The Ascendant in Aquarius with Uranus in the 8th house in adverse aspect to Mars.",
   zdroj:"Kefer – ELEKTŘINA / ÚRAZY"},

  {id:"smrt_003", tema:"Smrt jedem a otravou", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[8]},{typ:"planeta_v_domu",planeta:"Pluto",dum:[8]}],
   text_cs:"Sklon k užívání jedů naznačují: poškozený Jupiter v Rybách, Mars ve špatném aspektu k Neptunu, poškozený Neptun ve vztahu ke Štíru nebo I. domu. Smrt jedem způsobuje Neptun jako signifikátor smrti nebo Mars ve Štíru nebo Býku. Na epidemické užívání jedů lze soudit je-li Neptun nebo Pluto v VIII. domě mundánního horoskopu.",
   text_en:"A tendency to use poisons is indicated by: a damaged Jupiter in Pisces, Mars in bad aspect to Neptune, a damaged Neptune in the 8th or 12th house. Pluto in the 8th or 12th house in adverse aspect to Mars or Neptune. The Moon in Pisces in adverse aspect to Neptune and Mars.",
   zdroj:"Kefer – JEDY"},

// ══════════════════════════════════════════════════════
//  SPIRITUALITA & PSYCHIKA
// ══════════════════════════════════════════════════════

  {id:"spi_001", tema:"Jasnovidectví a vizionářství", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1]},{typ:"planeta_v_domu",planeta:"Uran",dum:[9]}],
   text_cs:"Signifikátor jasnovidectví: Uran, Neptun. Neptun v horoskopech jasnovidců v konjunkci se Sluncem nebo Merkurem. Jiná data: Slunce nepříznivě k Uranu, Merkur v Raku a v I. domě v konjunkci nebo sextilu k Neptunu, Luna v konjunkci s Neptunem, Uran v IX. domě poškozený Saturnem.",
   text_en:"Significator of clairvoyance: Uranus, Neptune. Neptune in the horoscopes of clairvoyants in conjunction with the Sun or Moon especially in Pisces or Cancer in the 9th or 12th house. Uranus in the 9th house in good aspect to Neptune. The Moon in Pisces or Cancer in good aspect to Neptune.",
   zdroj:"Kefer – JASNOVIDECTVÍ"},

  {id:"spi_002", tema:"Halucinace a zjevení", kategorie:["zdravi","osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[12,1]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[12]}],
   text_cs:"Halucinace jsou choroba Merkura a Neptuna. Neptun v XII. nebo I. domě poškozený Martem nebo Saturnem. Venuše bývá poškozena v VIII. domě. Mystické vize a duchovní vnímání jsou od patologických halucinací odlišeny kvalitou celkového horoskopu.",
   text_en:"Hallucinations are a disease of Mercury and Neptune. Neptune in the 12th or 1st house damaged by Mars or Saturn is the main indicator. Mercury in Pisces in adverse aspect to Neptune. The Ascendant in Pisces with damaged Mercury and Neptune. Saturn in adverse aspect to Mercury and Neptune.",
   zdroj:"Kefer – HALUCINACE"},

  {id:"spi_003", tema:"Intuice a duchovní vnímání", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1,9]},{typ:"planeta_v_domu",planeta:"Luna",dum:[9,12]}],
   text_cs:"Intuice vysokého řádu: Neptun v I. nebo IX. domě v příznivé vazbě ke Slunci nebo Merkurovi. Luna příznivě k Neptunu, Luna ve druhé třetině Ryb nebo Štíra dobře ozářená Plutonem. Slunce v první třetině Ryb. Výtečná intuice se projevuje za příznivých tranzitů Neptuna k Merkurovi.",
   text_en:"Intuition of a high order: Neptune in the 1st or 9th house in favourable bond to the Sun or Mercury. The Moon favourably to Uranus and Neptune. Mercury in Aquarius or Pisces in good aspect to Uranus and Neptune. The Ascendant in Aquarius or Pisces. Uranus in the 9th house.",
   zdroj:"Kefer – INTUICE (duchovní)"},

// ══════════════════════════════════════════════════════
//  KOMUNIKACE & INTELEKT
// ══════════════════════════════════════════════════════

  {id:"kom_001", tema:"Inteligence a intelekt", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"ascendent_v_znameni",znameni:[3,6,7,11]}],
   text_cs:"Na inteligenci lze soudit dle ozáření Merkura, Luny a Ascendentu. Jemný intelekt propůjčuje dobře ozářená Venuše ve III. domě. Dobrou inteligenci propůjčuje Slunce v Blížencích a Merkur ve Střelci při dobrém ozáření. Inteligence se prohlubuje za příznivých tranzitů Saturna a Urana k Merkurovi.",
   text_en:"Intelligence can be inferred from the illumination of Mercury, the Moon and the Ascendant. Fine intellect is bestowed by a well-aspected Mercury in Libra or Aquarius in the 1st or 3rd house. The Moon in Gemini or Libra in good aspect to Mercury. The Ascendant in Gemini or Libra.",
   zdroj:"Kefer – INTELIGENCE"},

  {id:"kom_002", tema:"Řečnické a debatní schopnosti", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"ascendent_v_znameni",znameni:[8,11]}],
   text_cs:"Dobrý debatér má obvykle v I. domě Urana ve Štíru, Lvu nebo Vodnáři. Disputace: Sklon k nim působí silný Merkur zvláště ve Štíru a Mars v I. domě. Argumentování: Sklon k němu mají lidé s Ascendentem nebo Merkurem ve Skopci zvláště je-li Ascendent nebo Merkur v konjunkci s Martem.",
   text_en:"A good debater usually has Uranus in the 1st house in Scorpio, Leo or Aquarius. Disputes: the tendency for them is produced by a strong Mars in the 1st house in conjunction with Uranus. Argumentation: the inclination for it is found in people with the Ascendant or Mercury in Scorpio in conjunction with Mars.",
   zdroj:"Kefer – DEBATÉR / DISPUTACE"},

  {id:"kom_003", tema:"Zálib ve čtení a literární zájem", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[3,9]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[3,9]}],
   text_cs:"Náruživou zálibu ve čtení působí: zdůraznění Blíženců, Slunce v první třetině Blíženců, Luna v první třetině Panny, Merkur ve III. nebo IX. domě v dobrém aspektu k Venuši, Venuše ve III. nebo IX. domě. Zvýšený zájem o četbu nastává za direkcí nebo tranzitů Slunce k Merkurovi.",
   text_en:"A passionate love of reading is produced by: an emphasis on Gemini, the Sun in the first decan of Gemini, the Moon in the first decan of Gemini, Mercury in Gemini in conjunction with Uranus or in the 3rd house. Saturn in Gemini in good aspect to Mercury reinforces literary interest.",
   zdroj:"Kefer – ČTENÍ"},

  {id:"kom_004", tema:"Improvizace a pohotovost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1,4,7,10]}],
   text_cs:"Schopnost improvizace propůjčuje Merkur v rohových domech a základních znameních. Pohotovost v reakci: Merkur v příznivém aspektu k Martu bez poškození. Je-li Mars na Ascendentu nebo v pohyblivých znameních a Ascendent je ve Střelci nebo Blížencích hrozí rozptýlení sil.",
   text_en:"The ability to improvise is bestowed by Mercury in angular houses and in cardinal signs. Presence of mind in reaction: Mercury in favourable aspect to Mars, especially in Aries or Capricorn. If Mars is on the Ascendant or in adverse signs, the ability to improvise is threatened.",
   zdroj:"Kefer – IMPROVIZACE"},

// ══════════════════════════════════════════════════════
//  VŮLE & CHARAKTER – DALŠÍ
// ══════════════════════════════════════════════════════

  {id:"char_001", tema:"Vůle a soustředěnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[10,1]}],
   text_cs:"Silná vůle závisí od silně ozářeného Slunce a Saturna, zdůrazněného Kozoroha a základních znamení. Typické příznaky: Slunce v X. domě příznivě k Saturnu, Saturn v I. domě příznivě ozářený, Ascendent ve Lvu nebo Kozorohu. Ohnivá znamení propůjčují silnou vůli krátkodobě, zemská trvale.",
   text_en:"Strength of will depends on a strongly illuminated Sun and Saturn, an emphasised Capricorn and cardinal signs. Typical positions: Saturn in Capricorn or Leo, the Sun in Capricorn or Leo in good aspect to Saturn. The Ascendant in Capricorn or Leo. Jupiter in Capricorn in good aspect to Saturn.",
   zdroj:"Kefer – VŮLE"},

  {id:"char_002", tema:"Čestnost a poctivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_domu",planeta:"Mars",dum:[10]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[10]}],
   text_cs:"Ctnost silného Marta a Jupitera. Typická postavení: Luna příznivě k Jupiteru, Luna ve třetí třetině Skopce, Venuše ve Lvu nebo v X. domě, Mars ve Lvu, Jupiter příznivě k Saturnu nebo v I. domě, Saturn ve Skopci nebo Lvu v I. domě, Neptun v X. domě. Příznivě ozářený Střelec.",
   text_en:"A virtue of strong Mars and Jupiter. Typical positions: the Moon favourably to Jupiter, the Moon in the third decan of Libra or Aries, Mars in good aspect to Jupiter especially in Sagittarius or Libra. Jupiter in Libra or Sagittarius in good aspect to Mars. The Ascendant in Libra or Sagittarius.",
   zdroj:"Kefer – ČESTNOST"},

  {id:"char_003", tema:"Drzost a neohroženost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1,10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Odvaha je vlastností silného Marta v příznivém aspektu ke Slunci nebo Jupiteru. Neohroženost naznačuje Mars v I. domě v Skopci nebo Lvu příznivě ozářený. Zbabělost: Saturn nebo Uran v I. domě poškozený. Hrobaři váhavosti jsou pevná znamení v I. domě bez příznivého Marta.",
   text_en:"Courage is a quality of strong Mars in favourable aspect to the Sun or Jupiter. Fearlessness is indicated by Mars in Aries or Leo in good aspect to the Sun and Jupiter. The Ascendant in Aries or Leo. Jupiter in Aries or Sagittarius in good aspect to Mars. The Sun in Aries in good aspect to Mars.",
   zdroj:"Kefer – ODVAHA / DRZOST"},

  {id:"char_004", tema:"Důvěryhodnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"ascendent_v_znameni",znameni:[5,8]}],
   text_cs:"Znaky důvěryhodnosti jsou: Luna ve Štíru, Slunce v X. domě v dobrém aspektu k Uranu, Ascendent ve Lvu nebo Panně, Jupiter v I. domě ve Skopci nebo Lvu. Důvěryhodnost je narušena za nepříznivých tranzitů Neptuna k XII. domu nebo Plutona k zvrhlým jednáním.",
   text_en:"Signs of trustworthiness are: the Moon in Scorpio, the Sun in the 10th house in good aspect to Uranus, the Ascendant in Leo or Capricorn. Saturn in Capricorn or Leo in good aspect to the Sun. Jupiter in Capricorn in good aspect to Saturn. The Moon in Taurus in good aspect to Saturn.",
   zdroj:"Kefer – DŮVĚRYHODNOST"},

  {id:"char_005", tema:"Hochštaplerství a podvody", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1,12]},{typ:"ascendent_v_znameni",znameni:[5,8]}],
   text_cs:"Hochštaplerství je působeno poškozením Venuše a Jupitera Neptunem ve vztahu k vodním znamením. Ascendent je poškozen a ve Štíru nebo ve Lvu. Obecným signifikátorem je Neptun. Podvody: jejich nebezpečí naznačuje poškozený Neptun ve XII. domě a Saturnem poškozená Panna.",
   text_en:"Imposture is produced by damage of Venus and Jupiter by Neptune in relation to water signs. The Ascendant in Pisces or Scorpio with a damaged Neptune and Venus. Jupiter in Pisces in adverse aspect to Neptune. Neptune in the 5th or 7th house in adverse aspect to Venus and Jupiter.",
   zdroj:"Kefer – HOCHŠTAPLERSTVÍ"},

  {id:"char_006", tema:"Intriky a zákulisní jednání", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[12]},{typ:"planeta_v_domu",planeta:"Pluto",dum:[12]}],
   text_cs:"Nebezpečné intriky jsou naznačeny poškozeným Neptunem ve XII. domě. Tranzity Neptuna XII. domem, špatné tranzity Uzlu k Neptunovi a Plutonovi působí stejně. Přemožení intrik naznačuje tranzit Jupitera XII. domem nebo dobrý aspekt transitujícího Jupitera k poškozenému Neptunovi.",
   text_en:"Dangerous intrigues are indicated by a damaged Neptune in the 12th house. Transits of Neptune through the 12th house, bad aspects of Pluto to the Sun, Moon or Mercury facilitate secretive and harmful activities. Pluto in the 12th house in adverse aspect to Mercury or Neptune.",
   zdroj:"Kefer – INTRIKY"},

// ══════════════════════════════════════════════════════
//  DOPISY & KOMUNIKACE
// ══════════════════════════════════════════════════════

  {id:"kom2_001", tema:"Dopisy a písemná komunikace", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[3]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[3]}],
   text_cs:"Signifikátor: druhá třetina III. domu. Zisk z dopisů kyne je-li tam Bod štěstí. Neštěstí skrze dopisy prozrazuje Saturn poškozující Merkura. Příjemné dopisy nás docházejí za dobrého tranzitu Venuše k Slunci nebo Luny k Slunci a Merkurovi. Špatné za tranzitů Slunce k Merkurovi.",
   text_en:"Significator: the second decan of the 3rd house. Profit from letters beckons if the Part of Fortune is there. Misfortune through letters threatens if Mars or Saturn is there. Mercury in the 3rd house in good aspect to Jupiter or Venus brings favourable correspondence.",
   zdroj:"Kefer – DOPISY"},

  {id:"kom2_002", tema:"Úspěch ve veřejném životě", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,4]}],
   text_cs:"Veřejnou činnost naznačuje Slunce ve Štíru, Luna v VII. domě v příznivém aspektu k Venuši, Merkur v VII. domě. Ztráty z veřejné činnosti způsobuje Saturn v X. domě v nepříznivém aspektu ke Slunci. Člověk bývá veřejně činný za direkcí Slunce k Ascendentu nebo direkcí Luny k Mediu coeli.",
   text_en:"Public activity is indicated by the Sun in Scorpio, the Moon in the 7th house in favourable aspect to Venus, Mercury in the 10th house in good aspect to Uranus. The Ascendant in Leo or Aquarius. Saturn in the 10th house in good aspect to the Sun. Jupiter in the 10th house.",
   zdroj:"Kefer – ČINNOST (veřejná)"},

// ══════════════════════════════════════════════════════
//  TĚLO & FYZICKÉ VLASTNOSTI
// ══════════════════════════════════════════════════════

  {id:"telo_001", tema:"Hlava a fyzický vzhled hlavy", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[5,10]},{typ:"planeta_v_domu",planeta:"Luna",dum:[1]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Signifikátor: Mars. Kulatou hlavu tvoří Ascendent ve Lvu nebo ve vztahu k Jupiteru, malou Mars nebo Jupiter v I. domě zvláště v Kozorohu, velkou Luna v I. domě. Ascendent v Kozorohu působí dlouhou bradu, Slunce v Býku plnou. Hranatá brada je projevem silného Marta.",
   text_en:"Significator: Mars. A round head is formed by the Ascendant in Leo or in relation to Jupiter, a small one by Mars or Saturn in the 1st house. Venus in the 1st house gives a beautiful oval head. The Moon in Cancer in the 1st house gives a round, full face. Saturn in the 1st house gives angular, sharp features.",
   zdroj:"Kefer – HLAVA"},

  {id:"telo_002", tema:"Chůze a pohyb těla", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[10,2,5,8,11]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Chůze člověka závisí na Blížencích a III. domě horoskopu. Špatnou chůzi propůjčuje Ascendent v Kozorohu, příliš rychlou špatný aspekt Marta k Merkurovi a zdůrazněná základní znamení, pomalou pevná znamení. Krátké nohy jsou darem pevných, dlouhé pohyblivých znamení.",
   text_en:"A person's gait depends on Gemini and the 3rd house of the horoscope. A poor gait is bestowed by the Ascendant in Capricorn or Aquarius with a damaged Saturn. Mars or Uranus in the 1st house can produce a jerky, rapid gait. Neptune in the 1st house gives an unsteady, floating gait.",
   zdroj:"Kefer – CHŮZE"},

  {id:"telo_003", tema:"Hubenost a nízká tělesná hmotnost", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"ascendent_v_znameni",znameni:[1,6,8]}],
   text_cs:"Hubenost je vadou Saturna, Skopce, Býka a druhé poloviny Lva. 1° Panny je zdůrazněn. Data platící pro postavení v I. domě: Merkur ve Lvu, Mars v Kozorohu. Celkově působí hubenost: Ascendent ve Skopci, Panně nebo Beranovi s poškozeným Saturnem.",
   text_en:"Thinness is a defect of Saturn, Scorpio, Taurus and the second half of Leo. 1° Virgo is emphasised. Indicators applicable to both sexes: the Moon in Scorpio or Capricorn damaged by Saturn. Saturn in the 1st house especially in Scorpio or Capricorn. The Ascendant in Scorpio or Capricorn.",
   zdroj:"Kefer – HUBENOST"},

  {id:"telo_004", tema:"Bledost a výrazný fyzický typ", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[10,11]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Bledost není-li projevem choroby závisí od Saturna jenž obvykle má aspektární vztah k Ascendentu bývajícímu v Kozorohu nebo Vodnáři. Luna v Raku a v I. domě působí bledost v mládí, Neptun v poměru k Ascendentu působí bledost nápadnou.",
   text_en:"Pallor, if not a manifestation of illness, depends on Saturn which usually has an aspectual relationship to the Ascendant or is in the 1st house. The Moon in Cancer or Pisces in adverse aspect to Saturn. The Ascendant in Capricorn or Aquarius with Saturn in the 1st house. Neptune in the 1st house.",
   zdroj:"Kefer – BLEDOST"},

// ══════════════════════════════════════════════════════
//  KONFLIKTY & NESHODY
// ══════════════════════════════════════════════════════

  {id:"kon_001", tema:"Hádky a konflikty", kategorie:["laska","osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[7]},{typ:"planeta_v_domu",planeta:"Mars",dum:[7]}],
   text_cs:"Hádky propukají za špatných tranzitů Luny k Slunci a Uranu, Merkura k Martu a Saturnu. Uran ve špatném aspektu k Merkurovi. 18° Býka nebo 2° Střelce bývají zdůrazněny. Hádky s ženou propukají za špatných tranzitů Venuše k Luně a Marta k Luně a Martu.",
   text_en:"Quarrels break out during bad transits of the Moon to the Sun and Uranus, Mercury to Mars and Saturn. Uranus in bad aspect to the Moon regularly causes marital quarrels. Mars transiting the 7th house in adverse aspect to Venus or the Moon. Saturn in adverse aspect to Venus and Mars.",
   zdroj:"Kefer – HÁDKY"},

  {id:"kon_002", tema:"Boj za ideály a spravedlnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[11]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[7,9]}],
   text_cs:"Boj za ideály je napovězen příznivým aspektem Marta k Jupiteru, zvláště ke Střelci. Mars příznivý k Neptunu propůjčuje boj za ideály. Boj osudový naznačuje každá kvadratura, 1° nebo 23° Skopce, 22° Střelce, 19° a 25° Štíra, 2° Blíženců, Mars v XI. domě.",
   text_en:"The struggle for ideals is prompted by the favourable aspect of Mars to Jupiter, especially to Sagittarius. Mars favourable to Neptune produces a willingness to sacrifice for ideals. Jupiter in Sagittarius in good aspect to Mars. The Ascendant in Sagittarius or Aries with a strong Mars and Jupiter.",
   zdroj:"Kefer – BOJ (idealistický)"},

];

// ═══════════════════════════════════════════════════
// Pomocné funkce
// ═══════════════════════════════════════════════════
function matchRules(userData, selectedCategories) {
  const results = [];
  for (const entry of KEFER_DB) {
    if (selectedCategories.length > 0) {
      const hasCategory = entry.kategorie.some(k => selectedCategories.includes(k));
      if (!hasCategory) continue;
    }
    let matchCount = 0;
    const totalConds = entry.podmínky.length;
    for (const p of entry.podmínky) {
      if (p.typ === "planeta_v_domu") {
        const pd = userData.planety[p.planeta];
        if (pd && pd.dum && p.dum && p.dum.includes(Number(pd.dum))) matchCount++;
      } else if (p.typ === "planeta_v_znameni" || p.typ === "planet_v_znameni") {
        const pd = userData.planety[p.planeta];
        if (pd && pd.znameni && p.znameni && p.znameni.includes(Number(pd.znameni))) matchCount++;
      } else if (p.typ === "ascendent_v_znameni") {
        if (userData.ascendent && p.znameni && p.znameni.includes(Number(userData.ascendent))) matchCount++;
      }
    }
    if (matchCount > 0) {
      results.push({ ...entry, score: matchCount / totalConds, matchCount });
    }
  }
  return results.sort((a, b) => b.score - a.score || b.matchCount - a.matchCount);
}
