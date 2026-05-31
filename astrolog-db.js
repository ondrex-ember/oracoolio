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
   zdroj:"Kefer – CTIŽÁDOST"},

  {id:"os_002", tema:"Ctižádost – Mars", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[3,7,8,6,10]}],
   text_cs:"Mars v I. domě zvláště v Blížencích, Vahách, Štíru, Panně nebo Kozorohu přináší výraznou ctižádost. Pevná znamení jsou konzervativní a chtějí podržet spíše než dobývat. Jupiter ve Štíru (zvláště první třetina) tuto vlastnost zesiluje.",
   zdroj:"Kefer – CTIŽÁDOST"},

  {id:"os_003", tema:"Diplomatičnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[10]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[8]}],
   text_cs:"Slunce v Kozorohu, Merkur příznivý k Saturnu, Venuše ve Štíru, Jupiter ve Vahách a třetí třetině Lva, silný Saturn ve Skopci, Kozorohu nebo Vodnáři zvláště v I. domě jsou příznaky diplomatičnosti. Ascendent v Býku nebo třetí třetině Raka. Zisk z diplomatičnosti přináší Merkur ve II. domě příznivě ozářený Saturnem.",
   zdroj:"Kefer – DIPLOMATIČNOST"},

  {id:"os_004", tema:"Duchaplnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[1]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[3,11]}],
   text_cs:"Luna v Blížencích nebo Vodnáři zvláště v I. domě propůjčuje duchaplnost. Merkur ve Vahách nebo Vodnáři v I. nebo VI. domě v dobrém aspektu k Martu nebo Uranu tento dar zesiluje. Duchaplnost v debatě propůjčuje dobře ozářený Saturn ve Vahách nebo Střelci v I. domě.",
   zdroj:"Kefer – DUCHAPLNOST"},

  {id:"os_005", tema:"Hrdost a sebevědomí", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[5]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Hrdost závisí od ozáření Lva a Slunce. Ascendent ve Lvu a Mars ve Lvu v I. domě jsou typickými příznaky. Luna ve třetí třetině Blíženců a Slunce v Panně v aspektu k Ascendentu tuto vlastnost doplňují.",
   zdroj:"Kefer – HRDOST"},

  {id:"os_006", tema:"Energie a vitalita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1,11]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8,10]}],
   text_cs:"Energie jest projevem silného Marta a Urana. Slunce v dobrém aspektu k Martu nebo Plutonu zvláště ve Lvu nebo V. domě. Mars příznivý k Merkurovi nebo Plutonu zvláště v I. nebo XI. domě ve Štíru nebo Kozorohu. Nedostatečně použitá energie se projevuje za tranzitů Saturna nebo Urana k Martu.",
   zdroj:"Kefer – ENERGIE"},

  {id:"os_007", tema:"Intuice a předtuchy", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[3,9]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[9,10]}],
   text_cs:"Intuice je projevem Urana a Neptuna ve vztahu k IX. domu. Merkur v IX. nebo X. domě zvláště ve Vodnáři a Střelci propůjčuje výtečnou intuici. Obecným signifikátorem intuice je Střelec a IX. dům.",
   zdroj:"Kefer – INTUICE"},

  {id:"os_008", tema:"Idealismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,7,9]},{typ:"planeta_v_domu",planeta:"Uran",dum:[3,9]}],
   text_cs:"Idealismus je projevem ohnivých znamení zvláště Střelce, Vah a Vodnáře. Slunce ve Štíru, Vahách nebo IX. domě příznivé k Martu, Neptunu nebo Plutonu. Mars příznivý k Neptunu propůjčuje boj za ideály. Poškozený Merkur ve vztahu k Rybám působí slepý idealismus.",
   zdroj:"Kefer – IDEALISMUS"},

  {id:"os_009", tema:"Domýšlivost a nafoukanost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[11]}],
   text_cs:"Domýšlivost je obecně působena zdůrazněným, ale slabým Sluncem. Slunce ve Vodnáři a v I. domě je typickým datem. Jupiter ve Skopci, Raku, Lvu nebo Střelci zvláště v I. domě, Saturn v I. domě zvláště ve Štíru nebo Lvu tyto sklony posilují.",
   zdroj:"Kefer – DOMÝŠLIVOST"},

  {id:"os_010", tema:"Fanatismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,9]}],
   text_cs:"Fanatismus je projevem slabého Marta a Urana ve Vahách nebo IX. domě ve špatné vazbě k Venuši. Typickým datem je Luna v konjunkci s Uranem ve ohnivých nebo vodních znameních. Silný Štír působí fanatismus nízkým aspektem. Slunce ve Štíru nebo IX. domě poškozené Martem.",
   zdroj:"Kefer – FANATISMUS"},

  {id:"os_011", tema:"Dobrodružnost a touha po neznámu", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8,9]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Obecným signifikátorem dobrodružných sklonů je silný Mars. Ascendent ve Štíru nebo Střelci (zvláště třetí třetina). Slunce ve druhé třetině Raka, Luna ve třetí třetině Štíra v aspektu k Martu nebo Jupiteru, Neptun ve Střelci zesiluje touhu po neznámu a vzdálených obzorech.",
   zdroj:"Kefer – DOBRODRUŽNOST"},

  {id:"os_012", tema:"Genialita a mimořádný talent", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"ascendent_v_znameni",znameni:[7]}],
   text_cs:"Moderní astrologové vidí podstatu geniality ve šťastném poměru vlivů Uranických, Neptunických a Plutonických. Ascendent výtečně ozářený ve Vahách (zvláště druhá třetina). Merkur v konjunkci s Jupiterem nebo Neptunem. Mocně ozářený Uran v I. domě jsou nejspolehlivějšími znameními.",
   zdroj:"Kefer – GENIALITA"},

  {id:"os_013", tema:"Duchovnost a esoterismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[9]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9]}],
   text_cs:"Vysoké duchovní založení je zapříčiněno příznivou směsí aspektů akcentujících Venuši, Jupitera, Neptuna, Váhy, Střelce a Ryby. Jupiter v IX. domě nebo ve Vodnáři jsou příznivá data pro duchovní rozvoj. Dobu zvýšené duchovnosti naznačuje dobře ozářený Jupiter nebo Saturn v IX. domě solárního horoskopu.",
   zdroj:"Kefer – DUCHOVNOST"},

  {id:"os_014", tema:"Filozofické sklony", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9]}],
   text_cs:"Na filozofickou mysl lze soudit: Slunce ve Vodnáři nebo IX. domě. Jupiter příznivý k Saturnu zvláště ve Štíru, Býku nebo Střelci. Saturn ve Střelci nebo Býku druhé třetiny. Zvláštní filozofické názory působí Uran v IX. domě. Prohloubení světonázoru nastává za příznivých tranzitů Neptuna k Saturnu.",
   zdroj:"Kefer – FILOSOFIE"},

  {id:"os_015", tema:"Zájem o astrologii", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1,3,9]},{typ:"ascendent_v_znameni",znameni:[3,5,6,7,8,9]}],
   text_cs:"Zálib v astrologii je působena Merkurem ve vztahu k Uranu, jsou-li splněny některé z dalších podmínek. Ascendent v Blížencích, Lvu, Panně, Vahách, Štíru nebo Střelci, zdůraznění 27° Lva nebo Vodnáře. Luna v Blížencích nebo Vodnáři a v I. domě jsou dalšími příznivými příznaky.",
   zdroj:"Kefer – ASTROLOGIE"},

  {id:"os_016", tema:"Demokratičnost a humanita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[11]},{typ:"planeta_v_znameni",planeta:"Neptun",znameni:[9,11]}],
   text_cs:"Demokratičnost je působena zdůrazněním Luny, Neptuna, Střelce a Vodnáře. Střelec bývá praktický, Vodnář teoretický. Jupiter v XI. domě aktivuje demokratické zákonodárství. V mundánním horoskopu působí Jupiter v XI. domě aktivitu v demokratickém zákonodárství.",
   zdroj:"Kefer – DEMOKRATIČNOST"},

  {id:"os_017", tema:"Badatelství a vědecký zájem", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Badatelství je projevem těchto příznaků: Ascendent ve Štíru druhé třetiny, Mars ve třetí třetině Skopce nebo Vodnáře, Jupiter v Panně ve třetí třetině, Uran v Panně v první třetině, Saturn ve Střelci třetí třetiny. Uran v X. domě téměř vždy působí zálibu ve starých věcech nebo kulturách.",
   zdroj:"Kefer – BADATELSTVÍ"},

  {id:"os_018", tema:"Vzdorovitost a anarchismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Uran",znameni:[9,5,11]},{typ:"ascendent_v_znameni",znameni:[9,11]}],
   text_cs:"Anarchisty tvoří Uran, Neptun nebo Mars ve vztahu ke Střelci, Lvu nebo Vodnáři. Poškozený Jupiter, Merkur ve Střelci, poškozený Ascendent ve Střelci nebo Vodnáři jsou příznaky vzdorovitého nebo anarchistického smýšlení. Rozhodné stupně jsou 23° Lva a Vodnáře.",
   zdroj:"Kefer – ANARCHIE"},

  {id:"os_019", tema:"Humor a veselost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[1,5]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[11]}],
   text_cs:"Humor je výsledkem příznivé vazby mezi Venuší, Jupiterem, Neptunem, Uranem a Lunou, dále mezi Býkem, Střelcem, Rakem a Rybami. Merkur vždy je silný, buď v I. domě nebo příznivý k Martu. Je-li v těchto vazbách převaha Neptuna, lze soudit na zálibu ve veselých kouscích.",
   zdroj:"Kefer – HUMOR"},

  {id:"os_020", tema:"Hospodárnost a šetrnost", kategorie:["osobnost","finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[2,4]}],
   text_cs:"Hospodárnost závisí od příznivě ozářeného Saturna ve II. nebo IV. domě. Luna v dobrém aspektu k Saturnu, Slunce v první třetině Raka. Venuše příznivá k Saturnu propůjčuje smysl pro hospodárnost při fyzické práci. Příznivě ozářené stupně: 7° Skopce, 27° Býka, 29° Lva.",
   zdroj:"Kefer – HOSPODÁRNOST"},

  {id:"os_021", tema:"Agresivita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8]}],
   text_cs:"Obecným příznakem agresivity je poškozený Mars, Jupiter ve Štíru nebo Merkur ve špatném aspektu k Martu. Důležitý vliv je zdůrazněný Skopec a Uran. Zdůraznění vodních znamení při poškozeném Martu nebo Uranu působí útočnost ve slovním projevu, zvláště je-li i Merkur poškozen.",
   zdroj:"Kefer – AGRESIVITA"},

  {id:"os_022", tema:"Autoritativnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[5]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[11]}],
   text_cs:"Autoritativní vystoupení propůjčuje silné Slunce, Jupiter nebo Saturn. Typické příznaky: Jupiter ve Lvu, Jupiter v příznivém úhlu k Saturnu, Saturn v XI. domě příznivě ozářený Uranem v Kozorohu a v X. domě. Autorita panovníka závisí od X. domu jeho nebo mundánního horoskopu.",
   zdroj:"Kefer – AUTORITA"},

  {id:"os_023", tema:"Aviatika a zájem o létání", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planet_v_znameni",planeta:"Uran",znameni:[9]},{typ:"ascendent_v_znameni",znameni:[11,3,7]}],
   text_cs:"Záliba v aviatice a povolání letce je signováno Uranem. Typické příznaky: Uran v první třetině Střelce nebo v první třetině IX. domu. Ascendent ve třetí třetině Blíženců nebo ve druhé třetině Vah. Ascendent ve Vodnáři vždy působí zájem o letectví.",
   zdroj:"Kefer – AVIATIKA"},

  {id:"os_024", tema:"Bázlivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[1,9]},{typ:"planeta_v_znameni",planeta:"Uran",znameni:[12]}],
   text_cs:"Bázlivost je vadou saturnskou ve vztahu k Luně. Obecně působí bázlivost Uran nebo Saturn v Rybách, Saturn nebo Luna v I. domě nebo Saturn v IX. domě. Záchvaty bázně zakouší každý, kdo prožívá nepříznivý úhel direkčního Slunce k Uranu. Charakteristické stupně jsou 4° Vodnáře a 12° Ryb.",
   zdroj:"Kefer – BÁZLIVOST"},

  {id:"os_025", tema:"Bezcitnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[2]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[10]}],
   text_cs:"Bezcitnost je vadou Kozoroha. Typická data: Luna v Kozorohu, Saturn nepříznivě k Uranu, Mars v Býku v I. domě, Mars v prvním dekanu Štíra, Uran poškozený v Rybách v I. domě, Ascendent poškozený v Býku. Charakteristické stupně: 14° Štíra, 15° Panny.",
   zdroj:"Kefer – BEZCITNOST"},

  {id:"os_026", tema:"Blahovolnost a laskavost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2,12]}],
   text_cs:"Ctnost Jupitera a Ryb. Typická postavení: Slunce ve třetí třetině Raka v dobrém aspektu k Venuši, Slunce ve II. domě, Luna v I. domě v dobrém aspektu k Martu nebo Jupiteru, Jupiter v Býku, Vahách nebo Rybách zvláště v I. domě nebo v příznivém aspektu k Saturnu. Vzdušný trigon bývá silně obsazen.",
   zdroj:"Kefer – BLAHOVOLNOST"},

  {id:"os_027", tema:"Blouznivost a snivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[11]}],
   text_cs:"Blouznivost je působena poškozeným Merkurem ve Vodnáři nebo Martem v VI. domě ve Skopci. Chorobná snivost nastává je-li poškozený Ascendent v Rybách nebo silně poškozený Neptun. Fantazii živí zdravou měrou Luna v IX. domě a příznivé aspekty Luny k Neptunu.",
   zdroj:"Kefer – BLOUZNIVOST"},

  {id:"os_028", tema:"Arogance", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8]}],
   text_cs:"Typickým příznakem arogance je Jupiter ve Štíru a v I. domě. Poškozený Jupiter v I. domě zvláště ve Lvu nebo Skopci působí nafoukanost a přezíravost k ostatním. Na arogan ci lze rovněž soudit ze špatné aspektace Slunce a Luny v I. domě.",
   zdroj:"Kefer – AROGANCE"},

  {id:"os_029", tema:"Asketismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[5]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[8]}],
   text_cs:"Asketismus je obecně vlastností Saturna, zvláště ozařuje-li nepříznivě hrot V. domu nebo má-li nepříznivou vazbu ke Štíru, nebo je-li v V. domě. Typickým příznakem je zdůraznění 4° nebo 9° Ryb. Saturn v V. domě ve Štíru nebo Kozorohu je nejtypičtějším datem.",
   zdroj:"Kefer – ASKETISMUS"},

  {id:"os_030", tema:"Cynismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[11]},{typ:"planeta_v_znameni",planeta:"Uran",znameni:[8,11]}],
   text_cs:"Cynismus způsobuje Uran ve Štíru nebo Vodnáři a Merkur poškozený v XI. domě. Lidé s Ascendentem v Panně, Štíru nebo Kozorohu vždy mají jistý sklon k cynismu, zvláště je-li poškozen. Cynická mluva vzniká za nepříznivých aspektů Marta k Merkurovi.",
   zdroj:"Kefer – CYNISMUS"},

  {id:"os_031", tema:"Chladnokrevnost a klid", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[5,7]}],
   text_cs:"Typická konstelace: Saturn konjunkce Slunce. Slunce v Kozorohu, Luna v Rybách, Saturn v V. nebo VII. domě zvláště je-li v Kozorohu nebo Vodnáři. Tyto příznaky naznačují schopnost zachovat klid i v krizových situacích.",
   zdroj:"Kefer – CHLADNOKREVNOST"},

  {id:"os_032", tema:"Chlubivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2]}],
   text_cs:"Chlubivost je vadou poškozeného Marta a Štíra. Data: Slunce nebo Luna ve špatném aspektu k Martu, Jupiter poškozený Neptunem často v Býku v I. domě, Saturn ve Lvu a v I. domě, Uran v Býku a v I. domě, Ascendent ve Lvu (zvláště druhá třetina) a poškozený (zvláště Jupiterem).",
   zdroj:"Kefer – CHLUBIVOST"},

  {id:"os_033", tema:"Cholerik – výbušný temperament", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[6,9]}],
   text_cs:"Horoskop choleriků vykazuje převahu Skopce, Lva a Střelce. Merkur je často ve Lvu a v I. domě, Mars v Panně a Střelci a v I. domě, Jupiter v Panně a v I. domě. Silný Skopec a Lev propůjčují vznětlivý temperament.",
   zdroj:"Kefer – CHOLERIK"},

  {id:"os_034", tema:"Impulsivita", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[1]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,4]}],
   text_cs:"Impulsivita je působena vztahem Marta a Urana k základním znamením za převahy vody a ohně. Data: Slunce ve Skopci nebo Štíru v I. domě, Luna ve Skopci, Lvu, Štíru nebo Střelci v I. domě nepříznivě k Martu, Mars v Raku poškozený v I. domě, Mars v dobrém aspektu k Uranu nebo Plutonu.",
   zdroj:"Kefer – IMPULSIVITA"},

  {id:"os_035", tema:"Indolence a lenost", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[12]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[2]}],
   text_cs:"Indolence vzniká z těchto dat: slabý Mars, slabé postavení základních znamení, mnoho planet v pevných znameních. Venuše a Býk ve slabém postavení (lenost) a Saturn zpravidla poškozen. Jiným příznakem je poškozený Ascendent v Rybách.",
   zdroj:"Kefer – INDOLENCE"},

  {id:"os_036", tema:"Inorodost a výjimečnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,4]}],
   text_cs:"Inorodost působí zdůrazněná ohnivá znamení a silně obsazené domy I., VII., VIII., IX., X., XI., XII. K inorodosti také disponují Blíženci (zvláště 15°), Váhy (zvláště 19°), Štír, Střelec. Slunce příznivě k Martu nebo Plutonu, Slunce v X. domě nebo ve Skopci.",
   zdroj:"Kefer – INORODOST"},

  {id:"os_037", tema:"Dráždivost a přecitlivělost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[9]}],
   text_cs:"Dráždivost naznačuje zdůrazněný Střelec nebo Skopec. Vodní znamení poukazují na dráždivost citovou. Merkur nebo Mars bývá poškozen Uranem. Data: Slunce poškozené Lunou nebo Martem ve Skopci nebo Střelci, Luna v Rybách třetí třetiny, Merkur zvláště ve Střelci v I. domě poškozený.",
   zdroj:"Kefer – DRÁŽDIVOST"},

  {id:"os_038", tema:"Dobromyslnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2,12,7]}],
   text_cs:"Signifikátoři dobromyslnosti: silný Jupiter, příznivé obsazení Střelce, Ryb nebo Blíženců. Typická postavení: Slunce v Raku, Střelci nebo Rybách zvláště v I. domě, Jupiter v Býku, Vahách nebo Rybách zvláště v I. domě nebo v příznivém aspektu k Saturnu, Saturn v Rybách v I. domě příznivě ozářený.",
   zdroj:"Kefer – DOBROMYSLNOST"},

  {id:"os_039", tema:"Dogmatičnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[9]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[2]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[2]}],
   text_cs:"Data dogmatičnosti: Slunce nebo Merkur v Býku, Mars v IX. domě, Jupiter poškozený Uranem, Saturn ve třetí třetině Lva, Ascendent ve Štíru zvláště třetí třetiny je-li Jupiter v pevných znameních. Dogmatismus je nejčastěji vázán na náboženské nebo ideologické přesvědčení.",
   zdroj:"Kefer – DOGMATIČNOST"},

  {id:"os_040", tema:"Despotismus", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[5]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Příznaky despotismu: Vazba Slunce, Marta, Saturna a Urana. Pevná znamení jsou zdůrazněna, Merkur a Luna jsou poškozeny Saturnem. Ascendent bývá ve Lvu (zvláště druhá třetina). Saturn v I. domě poškozující Lunu nebo Venuši.",
   zdroj:"Kefer – DESPOTISMUS"},

  {id:"os_041", tema:"Drzost a nestydatost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[1]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[4,8]}],
   text_cs:"Drzost je chybou poškozené Venuše a Vah. Vzniká poškozením těchto planet: Luna v Raku nebo Štíru v I. domě, Venuše v Raku v I. domě, Mars ve Skopci a v I. domě, Jupiter v IX. domě, Ascendent ve Štíru. Luna v příznivém aspektu k Martu bez vlivu Venuše tento sklon zesiluje.",
   zdroj:"Kefer – DRZOST"},

  {id:"os_042", tema:"Fantazie a tvůrčí obraznost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[9]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[9]}],
   text_cs:"Fantazie je vlastností silně ozářených ohnivých nebo vodních znamení, Vah, Vodnáře, Ryb, Neptuna a Merkura. Obecný signifikátor Neptun. Data výtečné fantazie: Luna v IX. domě příznivě k Neptunu, Luna ve druhé třetině Ryb nebo Štíra zvláště dobře ozářená Plutonem. Umělecká fantazie: skvelé ozáření Luny, Merkura a Venuše zvláště ve vztahu k V. domu.",
   zdroj:"Kefer – FANTASIE"},

  {id:"os_043", tema:"Fatalismus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[10]}],
   text_cs:"Fatalismus je odvislý obvykle od Jupitera poškozeného ve vztahu k X. domu a od nepříznivých tranzitů Saturna k Jupiteru. Lidé s fatalistickým smýšlením mají zpravidla zdůrazněný Štír, Saturn nebo Jupiter v X. domě poškozené vnějšími planetami.",
   zdroj:"Kefer – FATALISMUS"},

  {id:"os_044", tema:"Flegmatičnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[4,8,12]}],
   text_cs:"Flegmatičnost je vlastností zdůrazněných pevných znamení zvláště poškozených Saturnem. Neptun v Raku, Štíru nebo Rybách a v I. domě. Slabá základní znamení a mnoho planet v pevných znameních přináší těžkopádný, pomalý temperament.",
   zdroj:"Kefer – FLEGMATIČNOST"},

  {id:"os_045", tema:"Frivolita a lehkomyslnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[9]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[4]}],
   text_cs:"Frivolita: Mars v Raku poškozující Venuši, Venuše v IX. domě ve vztahu k Martu. Lehkomyslnost v jednáních naznačuje poškozená Luna ve II. domě. Nepředvídaná jednání jsou zapříčiněna také nepříznivým ozářením Ascendentu a Media coeli.",
   zdroj:"Kefer – FRIVOLITA"},

  {id:"os_046", tema:"Hbitost a pohyblivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[3,11]}],
   text_cs:"Hbitost: Mars v I. domě příznivě ke Slunci je základním příznakem. Merkur v Blížencích nebo Vodnáři v I. domě propůjčuje pohyblivost a pohotovost. Příliš rychlou chůzi způsobuje špatný aspekt Marta k Merkurovi a zdůrazněná základní znamení.",
   zdroj:"Kefer – HBITOST"},

  {id:"os_047", tema:"Hloubavost a vnitřní zájem", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"planeta_v_domu",planeta:"Uran",dum:[9]}],
   text_cs:"Saturn nebo Uran jest v IX. domě, nebo výtečně aspektuje vládce IX. domu. Obdobně působí Saturn v Blížencích a v I. domě a dobře ozářený Neptun ve XII. domě. Hloubavost a zájem o metafyziku je typickým projevem Saturn-Uran vazby v IX. domě.",
   zdroj:"Kefer – HLOUBAVOST"},

  {id:"os_048", tema:"Horlivost a entuziasmus", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"planeta_v_znameni",planeta:"Uran",znameni:[10]}],
   text_cs:"Data horlivosti: Uran v I. domě zvláště v Kozorohu. Charakteristické stupně: 12° Kozoroha, 16° Panny a Vah, 13° Raka. Člověk se stává horlivým za příznivých tranzitů Marta k Mediu coeli a za příznivých aspektů direkčního Slunce k Martu.",
   zdroj:"Kefer – HORLIVOST"},

  {id:"os_049", tema:"Hrubost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[8]}],
   text_cs:"Hrubost je vadou převahy vodních a zemských znamení, slabá Venuše, ale silný Mars. Data: Luna ve Štíru, Venuše v I. domě poškozená Lunou, Mars ve špatném aspektu na Plutona, Ascendent v Kozorohu (první třetina) nebo poškozený Saturnem. Oheň bývá vulgární, nikdy však sprostý.",
   zdroj:"Kefer – HRUBOST"},

  {id:"os_050", tema:"Citlivost a senzitivita", kategorie:["osobnost"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[1,3,4]},{typ:"planeta_v_domu",planeta:"Luna",dum:[1,12]}],
   text_cs:"Citlivost je působena zdůrazněním Skopce (zvláště Neptun v druhé třetině), Blíženců (zvláště je-li v nich Ascendent), Raka (zvláště Ascendent, Merkur, Saturn). Vždy musí být silná Luna, často ve vztahu k I. nebo XII. domu. Pluto bývá ve IV. a Neptun v IX. domě. Chorobná citlivost nastává je-li poškozený Ascendent v Rybách.",
   zdroj:"Kefer – CITLIVOST"},

  {id:"os_051", tema:"Autoritativnost – administrativní schopnosti", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]}],
   text_cs:"Administrativní schopnosti propůjčuje obecně Jupiter v první třetině I. domu, za nočního zrození a přibývající Luny. Je si přát silného vlivu Slunce a Saturna příznivě ozářených Uranem. Pro povolání administrátora je nejvýhodnější Jupiter v konjunkci s ubývající Lunou.",
   zdroj:"Kefer – ADMINISTRATIVNOST"},

  {id:"os_052", tema:"Jasnovidectví a mediální schopnosti", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planet_v_znameni",planeta:"Merkur",znameni:[4]}],
   text_cs:"Signifikátor jasnovidectví: Uran, Neptun. Neptun je v horoskopech jasnovidců v konjunkci se Sluncem nebo Merkurem. Astrální vidění má vztah k vodním znamením zvláště k Raku. Data: Merkur v Raku a v I. domě v konjunkci nebo sextilu k Neptunu, Venuše v dobrém aspektu k Luně, Luna v konjunkci s Neptunem.",
   zdroj:"Kefer – JASNOVIDECTVÍ"},

  {id:"os_053", tema:"Inspirace a tvůrčí vhled", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[9,10]}],
   text_cs:"Signifikátor inspirace: Merkur a Neptun. Za příznivých tranzitů Neptuna k Merkurovi a Mediu coeli prožívá člověk hluboké inspirace. Data: Slunce ve třetí třetině Vodnáře, Uran příznivě k Neptunu, Uran ve Střelci třetí třetiny nebo v X. domě, totéž postavení Neptuna.",
   zdroj:"Kefer – INSPIRACE"},

// ══════════════════════════════════════════════════════
//  ZDRAVÍ
// ══════════════════════════════════════════════════════

  {id:"zdr_001", tema:"Alkoholismus a závislosti", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[12]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Klasický příznak alkoholismu je Mars v Rybách poškozený Neptunem. Vodní znamení převládají u pijáků hloupých, ohnivá u veselých. V. dům téměř vždy je poškozen Neptunem nebo planetou z vodních znamení. Luna poškozená ve Štíru nebo Kozorohu a v I. domě je dalším varováním. Saturn ve druhé třetině Ryb nebo v Býku a I. domě rovněž svědčí o sklonu k pití.",
   zdroj:"Kefer – ALKOHOLISMUS"},

  {id:"zdr_002", tema:"Astma a potíže s dýcháním", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[5]},{typ:"planeta_v_domu",planeta:"Slunce",dum:[6]}],
   text_cs:"Astma je zpravidla působena poškozením Saturna ve vztahu ke III. domu a poškozením Urana ve vztahu k Býku a VI. domu. Saturn ve Lvu v konjunkci se Sluncem. Slunce v Raku nebo Kozorohu poškozené Saturnem. Poškození 4° Panny nebo Ryb, 18° Střelce nebo Ryb.",
   zdroj:"Kefer – ASTHMA"},

  {id:"zdr_003", tema:"Hysterie a nervové poruchy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[6]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[4]}],
   text_cs:"Hysterie je choroba Luny, Urana a Neptuna. Luna poškozená v první třetině Raka, poškozený Ascendent v Rybách, Uran ve Vodnáři a v VI. domě jsou typická data. Hysterická žena má často poškozeného Urana v V. domě.",
   zdroj:"Kefer – HYSTERIE"},

  {id:"zdr_004", tema:"Cukrovka", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[6]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[6]}],
   text_cs:"Cukrovka je choroba poškozených Vah. Dispozici k ní tvoří hrot VI. domu ve Vahách, Mars v Panně a v VI. domě, Jupiter v Panně nebo Vahách zvláště je-li v VI. nebo VIII. domě, nebo poškozuje-li Hyleg.",
   zdroj:"Kefer – CUKROVKA"},

  {id:"zdr_005", tema:"Srdeční potíže a angina pectoris", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Luna",znameni:[5,11]},{typ:"planeta_v_domu",planeta:"Uran",dum:[1]}],
   text_cs:"Obecné charakteristiky anginy pectoris: Luna ve Lvu nebo Vodnáři poškozená Uranem nebo Saturnem, zvláště v opozici nebo konjunkci ve Vodnáři. Uran ve Lvu působí náchylnost přidruží-li se jiné příznaky. Angina pectoris jest chorobou pevných znamení zvláště Býka.",
   zdroj:"Kefer – ANGINA PECTORIS"},

  {id:"zdr_006", tema:"Dna a revmatismus kloubů", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[6]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[4,2,9]}],
   text_cs:"Dna je nemoc Saturnská. Jupiter v Raku, Býku nebo Střelci zvláště v VI. domě, Saturn v VI. domě a v Býku, Štíru, Střelci nebo Kozorohu jsou typická data. Luna v VI. domě zvláště v Blížencích nebo Rybách, Venuše v VI. domě zvláště ve Střelci jsou dalšími příznaky.",
   zdroj:"Kefer – DNA (nemoc)"},

  {id:"zdr_007", tema:"Hypochondrie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Pluto",dum:[8]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[12]}],
   text_cs:"Hypochondrie je choroba Merkura a Plutona. Data: poškozený Merkur v Panně, Jupiter ve Štíru a v VI. domě, Saturn ve XII. domě nepříznivě k Merkurovi, Pluto v VIII. domě v jakémkoliv ozáření. Hypochondrie propukává za nepříznivých tranzitů Saturna k Merkurovi.",
   zdroj:"Kefer – HYPOCHONDRIE"},

  {id:"zdr_008", tema:"Dlouhověkost", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[4,8,12]}],
   text_cs:"Jupiter výtečně ozářený v IV., VIII. nebo XII. domě, nebo příznivě ozařující jejich vládce je příznakem dlouhého života. Podobně působí Uran a Neptun v tomtéž postavení. Rak, Lev a Kozoroh jsou silně obsazeny v horoskopech dlouhověkých lidí.",
   zdroj:"Kefer – DLOUHOVĚKOST"},

  {id:"zdr_009", tema:"Deprese a melancholie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[1,6]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[12,6]}],
   text_cs:"Období deprese jsou působena je-li v radikálním horoskopu Saturn v Rybách nebo Panně zvláště v I. domě. Podobně působí Saturn v Býku a v VI. domě nebo Neptun v I. domě. V solárním horoskopu poškozená Luna v I., IV. nebo VIII. domě zvláště Saturnem.",
   zdroj:"Kefer – DEPRESE"},

  {id:"zdr_010", tema:"Chudokrevnost a anémie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[7,11]}],
   text_cs:"Data chudokrevnosti: Slunce, Luna nebo Saturn v Raku nebo Vodnáři a v VI. domě. Slunce ve Vahách nebo Vodnáři poškozené, Saturn poškozující Lunu. VI. dům ve Vodnáři, poškození Venuše se vztahem k Vodnáři jsou typická data.",
   zdroj:"Kefer – ANEMIE / CHUDOKREVNOST"},

  {id:"zdr_011", tema:"Astigmatismus a oční vady", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[8]}],
   text_cs:"Příznak astigmatismu: Merkur ve Štíru a v VI. domě. Obecně jsou oční vady působeny poškozeným Sluncem, Lunou nebo Merkurem ve vztahu k VI. domu a Býku. Hluchota: Merkur ve špatném aspektu k Saturnu zvláště ve vztahu k XII. domu.",
   zdroj:"Kefer – ASTIGMATISMUS"},

  {id:"zdr_012", tema:"Bederní vředy a potíže se zády", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[9]}],
   text_cs:"Signatura beder: Váhy. Bederní vředy působí Merkur ve Střelci a v VI. domě. Zranění na bocích působí Saturn ve Střelci a v VI. domě, vředy na nich Merkur nebo Venuše ve Střelci a v VI. domě.",
   zdroj:"Kefer – BEDRA / BOKY"},

  {id:"zdr_013", tema:"Bronchitis a záněty průdušek", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8]},{typ:"planeta_v_domu",planeta:"Luna",dum:[6]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[2,5,8,11]}],
   text_cs:"Bronchitis nastává je-li III. dům poškozen vazbou Venuše k Saturnu. Štír je často Ascendentem a 29° Raka nebo Kozoroha je nepříznivě zdůrazněn. Luna bývá v VI. domě a v Býku, Lvu, Štíru nebo Vodnáři.",
   zdroj:"Kefer – BRONCHITIS"},

  {id:"zdr_014", tema:"Dávení a žaludeční potíže", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[10]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[6]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[4]}],
   text_cs:"Chorobné dávení je působeno Merkurem v Kozorohu a v VI. domě, Venuší v Raku a v VI. domě za nepříznivého ozáření. Obecně jsou žaludeční potíže signifikovány Rakem a IV. domem.",
   zdroj:"Kefer – DÁVENÍ"},

  {id:"zdr_015", tema:"Dušnost a potíže s dechem", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[2,3]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[12]}],
   text_cs:"Dušnost je způsobena těmito daty: Slunce v Rybách, Luna v Býku nebo Blížencích, Merkur v Blížencích, Saturn v Býku nebo Blížencích, vždy v VI. domě. Choroby dechu vznikají špatně ozářeným Saturnem zvláště ve vztahu k Merkurovi a III. domu.",
   zdroj:"Kefer – DUŠNOST"},

  {id:"zdr_016", tema:"Halucinace a psychotické stavy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[8]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[1,9,12]}],
   text_cs:"Halucinace je choroba Merkura a Neptuna. Venuše bývá poškozena v VIII. domě. Neptun v I., IX. nebo XII. domě poškozený Martem nebo Saturnem. Blázinec: na pobyt v něm lze soudit ze špatně ozářeného XII. domu — Slunce poškozené nebo Neptun v něm.",
   zdroj:"Kefer – HALUCINACE"},

  {id:"zdr_017", tema:"Hemeroidy a onemocnění dolní části těla", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6,8]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[8]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[6,8]}],
   text_cs:"Hemeroidy jsou nemocí Štíra v němž se nacházejí poškozené planety mající vztah k VI. domu (Jupiter, Saturn), někdy též k VIII. domu. Planety ve Štíru, VI. nebo VIII. domě mají nepříznivý vztah k Vodnáři nebo Panně. Mars jako signifikátor ukazuje na operativní zákroky.",
   zdroj:"Kefer – HEMEROIDY"},

  {id:"zdr_018", tema:"Hluchota a potíže se sluchem", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[12]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[6,12]}],
   text_cs:"Data hluchoty: Merkur ve špatném aspektu k Saturnu zvláště ve vztahu k XII. domu, Merkur v konjunkci se Sluncem ve XII. domě, Saturn tvoří opozici do VI. nebo XII. domu. Neptun je vždy nutno bedlivě zkoumat. Ozáření Neptuna vždy naznačuje skrytou náchylnost.",
   zdroj:"Kefer – HLUCHOTA"},

  {id:"zdr_019", tema:"Hlízy a nádory", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[6]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[12]},{typ:"planeta_v_domu",planeta:"Mars",dum:[6]}],
   text_cs:"Data hlíz: Venuše, Mars nebo Merkur v VI. domě a v Rybách. Hlísty: Mars nebo Venuše v Panně a v VI. domě. Hnisání: Saturn v Býku a v VI. domě. Signifikátor hnisavých chorob je Saturn obecně.",
   zdroj:"Kefer – HLÍZY / HLÍSTY"},

  {id:"zdr_020", tema:"Chrlení krve", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[6]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[3]}],
   text_cs:"Chrlení krve je působeno Martem je-li signifikátorem smrti. Mars je často v Blížencích a v VI. domě. Obecně jsou krvácení způsobena poškozeným Martem ve vztahu k VI. domu a ke znamením zodpovídajícím postižené části těla.",
   zdroj:"Kefer – CHRLENÍ KRVE"},

  {id:"zdr_021", tema:"Drogy a toxikomanie", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[12]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[8]}],
   text_cs:"Užívání drog vykazuje v horoskopu podobné příznaky jako alkoholismus. Neptun bývá poškozen, Mars v Rybách, 25° Býka, Lva, Štíra a Vodnáře zle ozářen. Sklon k nim propukává za nepříznivých tranzitů Neptuna k Slunci. Mundánně poukazuje na vzrůst užívání drog Neptun v VIII. domě.",
   zdroj:"Kefer – DROGY"},

  {id:"zdr_022", tema:"Fobie a úzkostné stavy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[6,8]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[3]}],
   text_cs:"Fobie jsou zapříčiněny poškozením Neptuna ve vztahu k signifikátorům zdraví (Hylegu, k VI. nebo VIII. domu). Merkur bývá poškozen, Blíženci a vodní znamení zdůrazněna. Potlačené komplexy: Akcentace Štíra, vliv Saturna za protikladu kladných a záporných znamení.",
   zdroj:"Kefer – FOBIE"},

  {id:"zdr_023", tema:"Chronické choroby", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[6,12]},{typ:"planeta_v_domu",planeta:"Slunce",dum:[6]}],
   text_cs:"Na chronické choroby soudíme z těchto dat: Slunce poškozené v VI. domě, Slunce v konjunkci s 14° Štíra nebo 23° Vah, Luna a Venuše v VI. domě (zvláště v Blížencích) poškozeny, Saturn poškozený v VI. nebo XII. domě zvláště ve Štíru.",
   zdroj:"Kefer – CHOROBY (chronické)"},

  {id:"zdr_024", tema:"Invalidita a tělesné postižení", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1,7]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1,7]}],
   text_cs:"Klasickým datem invalidity je Mars nebo Saturn velmi poškozený v I. nebo VII. domě. Pravidelně Mars je ve špatném aspektu k Saturnu. Vážné choroby oznamuje Saturn v I. nebo VI. domě zvláště jsou-li ve Skopci nebo ve Štíru.",
   zdroj:"Kefer – INVALIDITA"},

// ══════════════════════════════════════════════════════
//  FINANCE & MAJETEK
// ══════════════════════════════════════════════════════

  {id:"fin_001", tema:"Bohatství", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1,2,10]}],
   text_cs:"Nejlepší vyhlídka na bohatství jest postavení Slunce, Luny, Jupitera v rohových domech a v dobrých aspektech. Trvalé bohatství nastává je-li dobře ozářený Bod štěstí, jehož dispozitor je nepoškozený. Jupiter v I. domě příznivý ke Slunci zvláště ve Lvu a Raku.",
   zdroj:"Kefer – BOHATSTVÍ"},

  {id:"fin_002", tema:"Bohatství – Jupiter ve Býku a Raku", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[2,4]}],
   text_cs:"Jupiter ve Býku nebo Raku zvláště v X. domě přináší příznaky trvalého bohatství. Jupiter ve Býku poukazuje na bohatství zděděné. Luna musí být v dobrém postavení ke Slunci, ve spojení s dobrými planetami a v rohovém domě. Ascendent ve Lvu dává silné předpoklady k bohatství.",
   zdroj:"Kefer – BOHATSTVÍ"},

  {id:"fin_003", tema:"Blahobyt a hojnost", kategorie:["finance"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[2,5]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2]}],
   text_cs:"Blahobyt závisí od silné Venuše a Jupitera, zdůrazněného Lva, Vah a Ryb. Luna přijímá dobrý aspekt od Jupitera, často jest v X. domě. Jupiter bývá ve II. domě nebo v Býku. Ascendent v Býku dává blahobyt v mládí, Slunce v Rybách blahobyt občasný.",
   zdroj:"Kefer – BLAHOBYT"},

  {id:"fin_004", tema:"Bída a chudoba", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[2]}],
   text_cs:"Bída je následkem slabého a poškozeného Saturna. Typická data: Luna poškozená Saturnem, Mars ve II. domě poškozený Saturnem, Saturn ve II. domě poškozený Merkurem a Uranem. Bídu ve stáří ohlašuje poškozený Mars ve IV. domě.",
   zdroj:"Kefer – BÍDA / CHUDOBA"},

  {id:"fin_005", tema:"Finanční nestabilita a dluhy", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[2]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[2]}],
   text_cs:"Uran ve II. domě působí paniky a nestabilitu. Saturn ve II. domě poškozený Merkurem a Uranem naznačuje finanční potíže. Dluhy vznikají za nepříznivé direkce Bodu štěstí k Luně. Pluto ve II. domě mundánního horoskopu nakazuje na silné vlivy burzovních spekulací.",
   zdroj:"Kefer – CHUDOBA / DLUHY"},

  {id:"fin_006", tema:"Dědictví", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2,8]},{typ:"ascendent_v_znameni",znameni:[2,4,5,6,8]}],
   text_cs:"Osoby s Ascendentem v Býku, Raku, Lvu, Panně nebo Štíru mohou dědictví očekávat jsou-li příznaky pro vzrůst majetku. Jupiter ve II. domě příznivý k Saturnu zvláště je-li Saturn vládce II. nebo VIII. domu dědictví přislibuje. Ztrátu dědictví zapříčiňuje poškozený Mars v VIII. domě.",
   zdroj:"Kefer – DĚDICTVÍ"},

  {id:"fin_007", tema:"Dědictví po otci", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[4,8]}],
   text_cs:"Dědictví po otci je dáno je-li Slunce ve IV. domě. Je-li však poškozeno kyne jen marné čekání. Pluto ve II. domě příznivě ozářený při Ascendentu v Býku jest předzvěstí dědictví za zvláštních okolností. Dědictví přichází za direkcí Luny k Saturnu nebo za příznivých tranzitů Jupitera k Venuši v VIII. domě.",
   zdroj:"Kefer – DĚDICTVÍ"},

  {id:"fin_008", tema:"Spekulace a burza", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[5]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[5]}],
   text_cs:"Na zisk v burzovních obchodech lze soudit je-li Jupiter nebo Merkur v V. domě v dobré vazbě. Povolání burzovníka podléhá Plutonu. Mimo řádný úspěch naznačuje Slunce v konjunkci s Lunou v V. domě bez jakéhokoliv poškození.",
   zdroj:"Kefer – BURSA"},

  {id:"fin_009", tema:"Hospodárnost a šetrnost", kategorie:["finance","osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]},{typ:"planeta_v_znameni",planeta:"Saturn",znameni:[2,4]}],
   text_cs:"Hospodárnost závisí od příznivě ozářeného Saturna ve II. nebo IV. domě. Luna v dobrém aspektu k Saturnu a Slunce v první třetině Raka. Příznivé stupně: 7° Skopce, 27° Býka, 29° Lva. Saturn v Býku nebo Raku — člověk šetří s přirozenou lehkostí.",
   zdroj:"Kefer – HOSPODÁRNOST"},

  {id:"fin_010", tema:"Bankovnictví a finanční sektor", kategorie:["finance","povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[12,8]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2,10]}],
   text_cs:"Úspěch v bankovnictví naznačuje Ascendent v Rybách nebo Štíru, Medium coeli ve druhé třetině Býka. Neptun výtečně ozářený ve třetí třetině Štíra je dalším příznivým příznakem. Jupiter v konjunkci s Merkurem ve II. domě při denním zrození.",
   zdroj:"Kefer – BANKOVNICTVÍ / BANKÉŘ"},

  {id:"fin_011", tema:"Finančník z povolání", kategorie:["finance","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[2,10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8,2,7]}],
   text_cs:"Signifikátoři povolání finančníka: Mars — Jupiter. Horoskopy finančníků: Jupiter v konjunkci s Merkurem ve II. domě při denním zrození, Merkur v konjunkci s Martem ve II. domě při nočním zrození. Jupiter ve Štíru (druhá třetina), Býku (první třetina) nebo Vahách (druhá třetina) v II. nebo X. domě příznivý k Luně, Slunci nebo Venuši.",
   zdroj:"Kefer – FINANČNÍK"},

  {id:"fin_012", tema:"Akcie a investice", kategorie:["finance"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[5]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[11]}],
   text_cs:"V individuálním horoskopu prozrazuje úspěch v obchodech s akciemi příznivě ozářený XI. dům ve druhé třetině a V. dům jak přímo tak i dispozitory. Výjimečný úspěch naznačuje Slunce v konjunkci s Lunou v V. domě bez jakéhokoliv poškození. Ztráty nasvědčuje Slunce poškozené Uranem nebo poškozený Jupiter v XI. domě.",
   zdroj:"Kefer – AKCIE"},

  {id:"fin_013", tema:"Doly a těžba", kategorie:["finance","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]}],
   text_cs:"Záležitosti důlní jsou symbolizovány IV. domem individuálního nebo mundánního horoskopu. Zisk z dolů naznačuje Saturn ve II. domě, Bod štěstí v Kozorohu nebo IV. domě. Hornictví: Úspěch v něm lze očekávat když Luna je v Kozorohu a Saturn výhodně aspektuje Medium coeli.",
   zdroj:"Kefer – DOLY / HORNICTVÍ"},

// ══════════════════════════════════════════════════════
//  LÁSKA & VZTAHY
// ══════════════════════════════════════════════════════

  {id:"lask_001", tema:"Milostné aféry a tajné vztahy", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[5,7,11]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[7]}],
   text_cs:"Na milostné aféry lze soudit jsou-li v radikálním horoskopu tyto příznaky: Poškozený Pluto v V. domě, poškozený Uran v V., VII. nebo XI. domě, Venuše v V. domě v konjunkci s Martem, Neptun v VII. domě poškozený. Je-li Venuše ve XII. domě a poškozená lze se obávat tajných milostných afér. Poškozený Ascendent ve Skopci naznačuje aférní sklony.",
   zdroj:"Kefer – AFÉRY"},

  {id:"lask_002", tema:"Silná erotika a vášeň", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[5,7]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[8,12]}],
   text_cs:"Hrot V. domu ve Štíru — nadšené lásky a záliby. Ve Lvu — čistá milostná vášeň. Venuše ve druhé třetině Štíra, v Rybách nebo V. či VII. domě naznačuje silný a hluboký citový život. Saturn, Uran, Neptun a Pluto v V. domě zdůrazňují mohutné smyslné vášně.",
   zdroj:"Kefer – EROTIKA"},

  {id:"lask_003", tema:"Celibát a vyhýbání se vztahům", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[7]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[5,7]}],
   text_cs:"Sklon k celibátu naznačuje: Saturn ve zlém aspektu k Luně a Venuši. Neptun v V. nebo VII. domě. Poškozený Saturn v VII. domě. Slunce ve Střelci také často nepřeje manželství. Odpor k manželství působí je-li vládce VII. domě, Venuše, Luna nebo vládce Ascendentu v neplodných znameních nebo padajících domech.",
   zdroj:"Kefer – CELIBÁT"},

  {id:"lask_004", tema:"Šťastné manželství a harmonické vztahy", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[7]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[7]}],
   text_cs:"Příznivé postavení Jupitera nebo Venuše v VII. domě naznačuje šťastné manželství. Venuše příznivá k Luně, Slunce příznivé k Jupiteru jsou dalšími dobrými příznaky. Luna v příznivém aspektu k Jupiteru, Slunce příznivé k Venuši — trvalé šťastné spojení.",
   zdroj:"Kefer – MANŽELSTVÍ"},

  {id:"lask_005", tema:"Nevěra a cizoložství", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[7]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[7]}],
   text_cs:"V mužském horoskopu ukazuje na cizoložství Luna, v ženském Slunce poškozené Uranem. Poškozená Venuše Uranem poukazuje na poklesky již v mládí. Neptun v VII. domě vždy působí podivné vztahy. Typickým příznakem jsou poškozená Světla a Merkur v VII. domě.",
   zdroj:"Kefer – CIZOLOŽSTVÍ"},

  {id:"lask_006", tema:"Jemná erotika a romantika", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[7]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[2]}],
   text_cs:"Jemnou erotiku propůjčuje Slunce ve Vahách. Povrchní erotiku Býk nebo Venuše v Býku nebo II. domě. Hrot V. domu ve Vahách přináší klidnou lásku manželskou. V Blížencích četné milostné poměry s nervovým a intelektuálním pozadím.",
   zdroj:"Kefer – EROTIKA (jemná)"},

  {id:"lask_007", tema:"Adopce dětí", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[7,10]}],
   text_cs:"Klasický příznak pro adopci do bohaté rodiny jest: Saturn v VII. nebo X. domě v aplikaci k Luně. Jupiter západně ve dvojitých znameních. Tyto příznaky naznačují, že dítě vyrůstá mimo vlastní rodinu nebo pod péčí jiných.",
   zdroj:"Kefer – ADOPCE"},

  {id:"lask_008", tema:"Spory o alimenty a výživné", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[7]},{typ:"planeta_v_domu",planeta:"Uran",dum:[7]}],
   text_cs:"Spory o výživné hrozí je-li v radikálním horoskopu Mars v VII. domě ve špatném aspektu k Uranu nebo Saturnu. Týž význam má Uran v VII. domě poškozený Martem. Nepříznivé aspekty mezi Jupiterem a Marsem v VII. domě rovněž nasvědčují finančním sporům ve vztazích.",
   zdroj:"Kefer – ALIMENTY"},

  {id:"lask_009", tema:"Afrodisiaka a zvýšení pohlavního pudu", kategorie:["laska"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[5]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[5]}],
   text_cs:"Užívání přípravků zvyšujících pohlavní pud souvisí téměř vždy s poškozeným Martem a Venuší. Klasické příznaky jsou: Mars ve Lvu v opozici nebo kvadratu na Venuši, Ascendent poškozený Venuší. Silná Venuše v příznivém aspektu k Martu bez poškození propůjčuje přirozené smyslové nadání.",
   zdroj:"Kefer – AFRODISIAKA"},

// ══════════════════════════════════════════════════════
//  POVOLÁNÍ & KARIÉRA
// ══════════════════════════════════════════════════════

  {id:"pov_001", tema:"Advokát a právník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[7]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[7,6]}],
   text_cs:"Příznaky úspěšného advokáta jsou: obecně zdůraznění třetí třetiny VI. domu, Vah nebo VII. domu; Jupiter ve Vahách, Jupiter v Panně 21°–30°. Merkur ve XII. domě při denním zrození. Merkur v konjunkci se Saturnem se vztahem k X. domu. Styk s advokáty prozrazuje v osobním horoskopu IX. dům.",
   zdroj:"Kefer – ADVOKÁT"},

  {id:"pov_002", tema:"Básník a spisovatel", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[9]}],
   text_cs:"V horoskopech básníků nacházíme silného Merkura ve vztahu k Neptunu. Jupiter bývá ve Střelci, Slunce v X. domě v konjunkci s Merkurem, Medium coeli v první třetině Ryb. Venuše nebo Merkur bývají při denním zrození v I. domě nebo je mezi nimi jakýkoliv aspekt. Příznivý pro úspěch působí dobrý aspekt Merkura k Uranu.",
   zdroj:"Kefer – BÁSNÍK"},

  {id:"pov_003", tema:"Chirurg", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Proslulí chirurgové mají: Lunu, Merkura, Marta, Urana nebo Ascendent v první třetině Štíra. Mars je pravidelně výtečně aspektován Uranem. Bod štěstí ve Štíru. Medium coeli ve třetí třetině Střelce. Signifikátor povolání: Mars.",
   zdroj:"Kefer – CHIRURGIE"},

  {id:"pov_004", tema:"Diplomat a státník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[2,10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[9]}],
   text_cs:"Signifikátor diplomata je Pluto. Merkur v Býku nebo Kozorohu příznivý k Saturnu nebo Plutonu, Jupiter ve Střelci. Ohnivá znamení jsou nevhodná — přílišná otevřenost. Přínivá data: Ascendent v Býku nebo třetí třetině Raka s Merkurem ve II. domě příznivě ozářeným Saturnem.",
   zdroj:"Kefer – DIPLOMAT"},

  {id:"pov_005", tema:"Herec a umělecký performer", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[5]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[1]}],
   text_cs:"Signifikátoři herectví jsou Luna, Merkur, Venuše. Merkur v V. domě v konjunkci s Venuší nebo tatáž konstelace v X. domě při denním zrození. Venuše v I. domě v aspektu s Martem. Ascendent v Panně. Silné obsazení Vodnáře a vodních znamení. Mundánně závisí otázky divadla na V. domu.",
   zdroj:"Kefer – HEREC"},

  {id:"pov_006", tema:"Hudebník a skladatel", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[7]},{typ:"planeta_v_znameni",planeta:"Venuše",znameni:[2]}],
   text_cs:"Povolání hudebníka signifikuje Neptun. Data: Venuše v konjunkci s Merkurem, Merkur v konjunkci s Uranem v I., III. nebo IX. domě. Ascendent bývá v Rybách, Medium coeli v první třetině Býka, Lva nebo Vodnáře nebo třetí třetině Blíženců. Hudební nadání působí: Luna v Býku nebo v VII. domě, Venuše nebo Jupiter v konjunkci s Uranem.",
   zdroj:"Kefer – HUDEBNÍK"},

  {id:"pov_007", tema:"Astrolog z povolání", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[9]},{typ:"planeta_v_domu",planeta:"Uran",dum:[1,9]}],
   text_cs:"Nejčastější příznaky v horoskopu astrologa z povolání: Slunce konjunkce Merkur v IX. domě. Luna v Blížencích nebo Vodnáři a v I. domě. Merkur v konjunkci s Uranem v I., III. a IX. nebo X. domě zvláště je-li Slunce, Merkur nebo Uran ve východních znameních, Saturn v IX. domě při denním zrození.",
   zdroj:"Kefer – ASTROLOG"},

  {id:"pov_008", tema:"Detektiv a vyšetřovatel", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[8]}],
   text_cs:"Povolání detektiva: Merkur je signifikátorem povolání a je ve Štíru. Analytická schopnost závisí od silné Panny a Saturna. Pronikavou schopnost analýzy propůjčuje Saturn v Panně jako signifikátor mentálních kvalit.",
   zdroj:"Kefer – DETEKTIV"},

  {id:"pov_009", tema:"Fyzik a přírodovědec", kategorie:["povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[6]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Fyzikové mívají Ascendent v Panně, Medium coeli v první nebo druhé třetině Střelce. Signifikátor povolání: Uran, Mars, Štír. Merkur příznivý k Uranu udílí zájem o přesné vědy. Jupiter bývá ve druhé třetině Štíra.",
   zdroj:"Kefer – FYZIK"},

  {id:"pov_010", tema:"Vojenský důstojník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[10]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[8,5,9,11]}],
   text_cs:"Horoskopy důstojníků: Jupiter v X. domě v konjunkci s Martem zvláště ve Štíru, Lvu, Střelci nebo Vodnáři. Mars ve III. domě a Jupiter v VII. nebo XI. za nočního zrození. Slunce bývá často ve Střelci. Medium coeli ve druhé třetině Blíženců.",
   zdroj:"Kefer – DŮSTOJNÍK"},

  {id:"pov_011", tema:"Inženýr a technický pracovník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[2,4]}],
   text_cs:"Výtečnéí a úspěšní inženýři mají tato data: Merkur příznivě k Martu, Mars v Býku a v I. domě v dobrém aspektu k Merkurovi, Mars v Raku na 14° a 15°, Mars ve Střelci, Saturn ve druhé třetině Skopce. Ascendent v Raku na 14° nebo 15° příznivě k Luně a Martu.",
   zdroj:"Kefer – INŽENÝR"},

  {id:"pov_012", tema:"Chemik a lékárník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]}],
   text_cs:"Chemikové mají ve svých horoskopech: Slunce ve Štíru dobře k Merkurovi, Merkur ve Štíru zvláště v I. domě, Merkur v dobrém aspektu k Martu nebo Uranu, Marta ve Štíru (zvláště první třetina) nebo v I. domě, Saturna výtečného ve druhé třetině Štíra. Ascendent bývá v Panně, Štíru nebo Rybách.",
   zdroj:"Kefer – CHEMIE / CHEMIK"},

  {id:"pov_013", tema:"Filosof z povolání", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9,4]}],
   text_cs:"Povolání filozofa signifikuje Merkur. Data: Medium coeli ve druhé třetině Raka nebo Ryb, ve třetí třetině Střelce; Merkur v konjunkci s Venuší ve IV. domě, silný Jupiter a IX. dům (zvláště první třetina). Saturn v IX. domě za denního zrození.",
   zdroj:"Kefer – FILOSOF"},

  {id:"pov_014", tema:"Filolog a jazykovědec", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[9]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[9]}],
   text_cs:"Talent k jazykům a povolání jazykovědce prozrazují: Venuše v IX. domě v konjunkci s Merkurem, Merkur v Panně, Luna ve Štíru dobře ozářená. Polygloti mívají Venuši příznivě k Merkurovi a IX. dům silně obsazen.",
   zdroj:"Kefer – FILOLOG"},

  {id:"pov_015", tema:"Agitátor a řečník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[4,7]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[7]}],
   text_cs:"Schopný agitátor mívá obvykle Urana ve IV. nebo VII. domě, Marta v poslední třetině Vah. Mars téměř vždy je poškozen. Na agitaci mezi lidem naznačuje Mars v III. nebo XII. domě, Neptun v I., III. nebo IV. domě v mundánním horoskopu.",
   zdroj:"Kefer – AGITÁTOR"},

  {id:"pov_016", tema:"Archivář a správce dokumentů", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[1]}],
   text_cs:"Úspěch v povolání archiváře působí Merkur v I. domě v konjunkci s Venuší. Zálibu v historii a uchovávání dokumentů propůjčuje Saturn příznivě k Uranovi zvláště ve vazbě k II. domě.",
   zdroj:"Kefer – ARCHIVÁŘ"},

  {id:"pov_017", tema:"Atlet a sportovec z povolání", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[10]},{typ:"planeta_v_domu",planeta:"Mars",dum:[10]}],
   text_cs:"Úspěšný atlet-profesionál rodí se za těchto podmínek: Denní zrození, Merkur ve vztahu (konjunkci) s Martem v X. domě a v úseku, kde vládne Merkur. Silný Mars v aspektu ke Slunci nebo Jupiteru a zdůrazněný I. dům.",
   zdroj:"Kefer – ATHLET"},

  {id:"pov_018", tema:"Archeolog a badatel starověku", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Sklon k archeologii působí vazba Saturna k Uranu. Typické příznaky: Merkur příznivě k Uranu, Saturn ve třetí třetině Štíra, Saturn ve II. domě příznivě k Uranu, Uran v X. domě v opozici k Merkurovi. Uran v X. domě téměř vždy působí zálibu ve starých věcech nebo kulturách.",
   zdroj:"Kefer – ARCHEOLOG / BADATELSTVÍ"},

  {id:"pov_019", tema:"Dělník a manuální pracovník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[2,4]}],
   text_cs:"Povolání dělnické podléhá Saturnu a Kozorohu. V horoskopech dělníků bývá Saturn ve II. domě, ve druhé třetině Raka a IV. domu, Medium coeli často v první třetině Kozoroha. Vedoucí dělník mívá Medium coeli ve druhé třetině Skopce.",
   zdroj:"Kefer – DĚLNÍK"},

  {id:"pov_020", tema:"Dopravce a přepravní povolání", kategorie:["povolani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[3]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[6]}],
   text_cs:"Povolání Merkurické se vztahem ke Skopci. Ascendent úspěšného dopravce bývá v Blížencích. Obchodní cestující: Merkur v VI. domě a západních znameních přičemž X. dům je bez planet. Horoskopy obchodních cestujících mívají Slunce v Blížencích, Ascendent v Blížencích, Medium coeli ve třetí třetině Panny.",
   zdroj:"Kefer – CESTUJÍCÍ (obchodní) / DOPRAVCE"},

  {id:"pov_021", tema:"Geometr a kartograf", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[6,12]}],
   text_cs:"Lidé tohoto povolání mívají Medium coeli v první třetině Panny. Merkur při denním zrození bývá v VI. nebo XII. domě. Zálibu v geometrii a přesných vědách propůjčuje Merkur příznivě k Uranu v zemských znameních.",
   zdroj:"Kefer – GEOMETR"},

  {id:"pov_022", tema:"Hypnotizér a magnetizér", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[10]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[10]}],
   text_cs:"Obratní hypnotizéři mají obvykle v X. domě Urana nebo Merkura, poškozeného Merkurem nebo Uranem (zvláště opozicí). Fascinace: Osoby mající tento dar mají v horoskopu Venuši ve vztahu k Uranu v poměru k VII. domu.",
   zdroj:"Kefer – HYPNOTIZÉR"},

  {id:"pov_023", tema:"Hrobník a funerální pracovník", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[10]}],
   text_cs:"Signifikátor povolání: Venuše-Mars-Saturn. Horoskopy hrobníků vykazují tyto konstelace: Merkur v X. domě ve špatném aspektu k Uranu nebo naopak Uran v X. domě a ve špatném aspektu (opozici) k Merkurovi.",
   zdroj:"Kefer – HROBNÍK"},

  {id:"pov_024", tema:"Akademik a vědec", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[2]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[2]}],
   text_cs:"Předpoklady úspěchů akademických jsou: Merkur ve II. domě v konjunkci s Venuší. Denní zrození a Ascendent ve východních znameních. Saturn v IX. domě za denního zrození je rovněž příznivým příznakem pro vědeckou kariéru.",
   zdroj:"Kefer – AKADEMIK"},

  {id:"pov_025", tema:"Akrobat a cirkusový umělec", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_znameni",planeta:"Merkur",znameni:[3]}],
   text_cs:"Příznakem tohoto povolání v klasické astrologii jest Merkur v Blížencích a v I. domě v konjunkci se Saturnem. Atletické povolání signifikuje Mars a Skopec. Silný Mars v aspektu k Merkurovi propůjčuje fyzickou obratnost a koordinaci.",
   zdroj:"Kefer – AKROBAT"},

  {id:"pov_026", tema:"Film a filmový průmysl", kategorie:["povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"ascendent_v_znameni",znameni:[3]}],
   text_cs:"Signifikátor: Uran zvláště ve vztahu k Plutonu. Úspěch ve filmu lze předvídat je-li Ascendent ve třetí třetině Blíženců a Uran v příznivém a silném postavení. V horoskopech slavných dětí bývá skkvěle ozářen Pluto.",
   zdroj:"Kefer – FILM"},

// ══════════════════════════════════════════════════════
//  CESTOVÁNÍ & POBYT V CIZINĚ
// ══════════════════════════════════════════════════════

  {id:"ces_001", tema:"Mnoho cest a kočovný život", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[10]},{typ:"planeta_v_domu",planeta:"Uran",dum:[3,9,12]}],
   text_cs:"Na mnoho cest poukazují: Luna v X. domě v pohyblivých znameních zvláště je-li v aspektu s Uranem. Uran ve III., IX. nebo XII. domě v pohyblivých znameních. Vzestupný Uzel v Blížencích a Střelci nebo ve III. a IX. domě. Hroty III. a IX. domu v pohyblivých znameních naznačují povolání spojené s cestami.",
   zdroj:"Kefer – CESTY"},

  {id:"ces_002", tema:"Daleké cesty a zámoří", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[9]},{typ:"planeta_v_znameni",planeta:"Jupiter",znameni:[9,11]}],
   text_cs:"Daleké cesty prozrazují: Jupiter ve Střelci nebo druhé třetině Vodnáře. Zámoské cesty: Slunce v VI. domě ve Střelci, Luna v IX. domě ve vodních znameních. Příznivé cesty naznačuje Jupiter v IX. domě solárního horoskopu. Chceme-li vykonat úspěšnou cestu dbejme aby při počátku Luna transitovala Střelcem nebo Rybami.",
   zdroj:"Kefer – CESTY (daleké)"},

  {id:"ces_003", tema:"Cestovatel z povolání", kategorie:["cestovani","povolani"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[9]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[8,4]}],
   text_cs:"Horoskopy cestovatelů: Slunce ve Střelci, Luna v Panně, Mars ve třetí třetině Štíra nebo první třetině Raka, Jupiter ve třetí třetině Panny. Touha po cestách: Merkur v I. domě v Panně, Blížencích, Střelci nebo Rybách v dobrém aspektu k Luně.",
   zdroj:"Kefer – CESTOVATEL"},

  {id:"ces_004", tema:"Emigrace a pobyt v cizině", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]},{typ:"ascendent_v_znameni",znameni:[9,8,12]}],
   text_cs:"Emigranti mívají ve svém horoskopu zdůrazněn 9° Ryb. Je-li Saturn v první třetině Střelce nebo poškozený v IX. domě nutno před emigrováním varovat. Je-li ve IV. domě škůdce lze radit k opuštění vlasti. Ascendent ve Střelci (druhá a třetí třetina) nebo Štíru jsou příznaky pobytu v cizině.",
   zdroj:"Kefer – EMIGRACE / CIZINA"},

  {id:"ces_005", tema:"Nebezpečné cesty a varování", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[9]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[9]}],
   text_cs:"Nebezpečí na cestách hrozí: Saturn v IX. domě vždy varuje před nebezpečnými cestami. Mars v IX. domě ve zlém aspektu ke Světlům. Nikdy nelze radit k cestám transituje-li Saturn, Uran nebo Neptun III. nebo IX. domem. Na cestách se nevydáváme probíhá-li Luna Pannou nebo Štírem.",
   zdroj:"Kefer – CESTY (nebezpečné)"},

  {id:"ces_006", tema:"Úspěšné cesty a výhodný pobyt v cizině", kategorie:["cestovani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[9]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[9]}],
   text_cs:"Úspěšné cesty prozrazují: Slunce v konjunkci s Venuší ve III. domě, Luna příznivě k Merkurovi, Luna v IX. domě příznivě k Venuši, Merkur v IX. domě v příznivém ozáření, Jupiter v Rybách a v I. domě. Pobyt v cizině je výhodný je-li Slunce v IX. domě.",
   zdroj:"Kefer – CESTY (úspěšné)"},

  {id:"ces_007", tema:"Cizina a vztahy s cizinou", kategorie:["cestovani"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[8,9]},{typ:"planeta_v_domu",planeta:"Mars",dum:[10]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[10]}],
   text_cs:"Vztahy k cizině: Vládce Ascendentu v druhé třetině IX. domu, Vzestupný Uzel v IX. domě, Mars v Kozorohu, Ascendent ve druhé a třetí třetině Štíra nebo Střelce. Je-li III. a V. dům příznivý lze se usídlit blízko domova. Dobrý IX. a XI. dům příznivě ozářený je vhodný pro přesídlení kamkoli.",
   zdroj:"Kefer – CIZINA"},

// ══════════════════════════════════════════════════════
//  RODINA & DĚTI
// ══════════════════════════════════════════════════════

  {id:"rod_001", tema:"Děti – příznivé vyhlídky", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[5]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[5,11]}],
   text_cs:"Nejlepším znamením v otázce dětí je Jupiter v V. domě. Je-li dobře aspektován Martem učiní dítě kariéru u vojska nebo v průmyslu. Venuše v XI. domě nebo příznivý aspekt k Jupiteru přináší radost z dětí. Venuše v V. domě nebo V. dům v Býku nebo Vahách přináší krásné děti.",
   zdroj:"Kefer – DĚTI"},

  {id:"rod_002", tema:"Bezdětnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[5]},{typ:"ascendent_v_znameni",znameni:[3,5,7,10]}],
   text_cs:"Bezdětnost: V. dům v neplodných znameních, Slunce ve špatném aspektu k Luně, Uran v V. domě. Ascendent v Blížencích, Lvu, Vahách nebo Kozorohu naznačuje málo dětí. Ascendent ve Vodnáři — sice málo dětí, ale jsou velmi nadané. Při Ascendentu ve Střelci jedno z mála dětí žije mimo rodinu.",
   zdroj:"Kefer – DĚTI (bezdětnost)"},

  {id:"rod_003", tema:"Mnoho dětí", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Luna",dum:[1,5,7,10]},{typ:"ascendent_v_znameni",znameni:[4,12]}],
   text_cs:"Mnoho dětí: Luna v I., V., VII. nebo X. domě zvláště v Raku, Štíru, Rybách, Střelci nebo Blížencích. Jupiter v VII. nebo I. domě. Ascendent v Raku nebo Rybách. Ascendent ve Štíru dává taktéž mnoho dětí, ale některé z nich zemřou. Uzel v I. domě nebo ve plodných znameních je příznivý.",
   zdroj:"Kefer – DĚTI (mnoho)"},

  {id:"rod_004", tema:"Předčasná smrt dítěte", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[5]},{typ:"planeta_v_domu",planeta:"Pluto",dum:[5,11]}],
   text_cs:"Jsou-li škůdci v V. nebo XI. domě a v plodných znameních lze usuzovat, že se děti narodí, avšak nebudou žít dlouho. Totéž působí Saturn v konjunkci s Venuší v VII. domě nebo vládce V. domu v domě VIII. Poškozený Jupiter varuje před předčasnou smrtí některého z dětí.",
   zdroj:"Kefer – DĚTI (smrt)"},

  {id:"rod_005", tema:"Domov a rodinné zázemí", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[4]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[4]}],
   text_cs:"Signifikátor domova je IV. dům. Láska ke domovu: Hrot IV. domu ve Lvu, Vahách, Venuše ve IV. domě nebo v Raku. Zisk v domově kyne je-li hrot II. domu v Raku nebo hrot V. domu v Panně. Jupiter ve druhé třetině Raka, Slunce ve IV. domě, konjunkce Luny s Venuší přinášejí krásný harmonický domov.",
   zdroj:"Kefer – DOMOV"},

  {id:"rod_006", tema:"Domácnost a péče o domov", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[4,12]},{typ:"planeta_v_znameni",planeta:"Luna",znameni:[4,12]}],
   text_cs:"Smysl pro domácnost dává Slunce nebo Luna v Raku nebo Rybách zvláště ve druhé třetině, Vzestupný Uzel ve IV. domě. Nepříjemnosti v domácnosti vznikají je-li Venuše poškozena Lunou nebo je-li špatně ozářen 19° Střelce. Sestupný Uzel ve IV. domě rovněž není dobrým příznakem.",
   zdroj:"Kefer – DOMÁCNOST"},

  {id:"rod_007", tema:"Bratr a sourozenci", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Venuše",dum:[3]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[3]}],
   text_cs:"Mladší bratr je signován Merkurem. Pomoc od bratra slibuje Venuše ve III. domě. Poškození bratrem nastává když direkční Slunce tvoří nepříznivý úhel na Saturna ve vztahu k III. domu nebo když Saturn transituje III. domem.",
   zdroj:"Kefer – BRATR"},

// ══════════════════════════════════════════════════════
//  SMRT & PŘECHOD
// ══════════════════════════════════════════════════════

  {id:"smrt_001", tema:"Dlouhý život a přirozená smrt", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[8,4,12]}],
   text_cs:"Jupiter jako signifikátor dlouhého života: stojí-li Jupiter osamocen a nepoškozen v IV., VIII. nebo XII. domě v příznivém aspektu k Hylegu je to znamením dlouhého věku. Hylég je znamenitě aspektován, vládce IV. domu v silném postavení nebo přímo ve IV. domě, Saturn v příznivém postavení.",
   zdroj:"Kefer – DLOUHOVĚKOST"},

  {id:"smrt_002", tema:"Nebezpečí smysly a úrazy", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[8]},{typ:"planeta_v_domu",planeta:"Mars",dum:[8]}],
   text_cs:"Škody způsobené elektřinou naznačuje poškozený Uran v VIII. domě individuálního horoskopu. Smrt elektřinou lze soudit je-li poškození značné a vládce VIII. domu má nepříznivou vazbu k Uranu. Nebezpečí úrazů: Mars nebo Saturn velmi poškozený v I. nebo VIII. domě.",
   zdroj:"Kefer – ELEKTŘINA / ÚRAZY"},

  {id:"smrt_003", tema:"Smrt jedem a otravou", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[8]},{typ:"planeta_v_domu",planeta:"Pluto",dum:[8]}],
   text_cs:"Sklon k užívání jedů naznačují: poškozený Jupiter v Rybách, Mars ve špatném aspektu k Neptunu, poškozený Neptun ve vztahu ke Štíru nebo I. domu. Smrt jedem způsobuje Neptun jako signifikátor smrti nebo Mars ve Štíru nebo Býku. Na epidemické užívání jedů lze soudit je-li Neptun nebo Pluto v VIII. domě mundánního horoskopu.",
   zdroj:"Kefer – JEDY"},

// ══════════════════════════════════════════════════════
//  SPIRITUALITA & PSYCHIKA
// ══════════════════════════════════════════════════════

  {id:"spi_001", tema:"Jasnovidectví a vizionářství", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1]},{typ:"planeta_v_domu",planeta:"Uran",dum:[9]}],
   text_cs:"Signifikátor jasnovidectví: Uran, Neptun. Neptun v horoskopech jasnovidců v konjunkci se Sluncem nebo Merkurem. Jiná data: Slunce nepříznivě k Uranu, Merkur v Raku a v I. domě v konjunkci nebo sextilu k Neptunu, Luna v konjunkci s Neptunem, Uran v IX. domě poškozený Saturnem.",
   zdroj:"Kefer – JASNOVIDECTVÍ"},

  {id:"spi_002", tema:"Halucinace a zjevení", kategorie:["zdravi","osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[12,1]},{typ:"planeta_v_domu",planeta:"Merkur",dum:[12]}],
   text_cs:"Halucinace jsou choroba Merkura a Neptuna. Neptun v XII. nebo I. domě poškozený Martem nebo Saturnem. Venuše bývá poškozena v VIII. domě. Mystické vize a duchovní vnímání jsou od patologických halucinací odlišeny kvalitou celkového horoskopu.",
   zdroj:"Kefer – HALUCINACE"},

  {id:"spi_003", tema:"Intuice a duchovní vnímání", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1,9]},{typ:"planeta_v_domu",planeta:"Luna",dum:[9,12]}],
   text_cs:"Intuice vysokého řádu: Neptun v I. nebo IX. domě v příznivé vazbě ke Slunci nebo Merkurovi. Luna příznivě k Neptunu, Luna ve druhé třetině Ryb nebo Štíra dobře ozářená Plutonem. Slunce v první třetině Ryb. Výtečná intuice se projevuje za příznivých tranzitů Neptuna k Merkurovi.",
   zdroj:"Kefer – INTUICE (duchovní)"},

// ══════════════════════════════════════════════════════
//  KOMUNIKACE & INTELEKT
// ══════════════════════════════════════════════════════

  {id:"kom_001", tema:"Inteligence a intelekt", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"ascendent_v_znameni",znameni:[3,6,7,11]}],
   text_cs:"Na inteligenci lze soudit dle ozáření Merkura, Luny a Ascendentu. Jemný intelekt propůjčuje dobře ozářená Venuše ve III. domě. Dobrou inteligenci propůjčuje Slunce v Blížencích a Merkur ve Střelci při dobrém ozáření. Inteligence se prohlubuje za příznivých tranzitů Saturna a Urana k Merkurovi.",
   zdroj:"Kefer – INTELIGENCE"},

  {id:"kom_002", tema:"Řečnické a debatní schopnosti", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[1]},{typ:"ascendent_v_znameni",znameni:[8,11]}],
   text_cs:"Dobrý debatér má obvykle v I. domě Urana ve Štíru, Lvu nebo Vodnáři. Disputace: Sklon k nim působí silný Merkur zvláště ve Štíru a Mars v I. domě. Argumentování: Sklon k němu mají lidé s Ascendentem nebo Merkurem ve Skopci zvláště je-li Ascendent nebo Merkur v konjunkci s Martem.",
   zdroj:"Kefer – DEBATÉR / DISPUTACE"},

  {id:"kom_003", tema:"Zálib ve čtení a literární zájem", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[3,9]},{typ:"planeta_v_domu",planeta:"Venuše",dum:[3,9]}],
   text_cs:"Náruživou zálibu ve čtení působí: zdůraznění Blíženců, Slunce v první třetině Blíženců, Luna v první třetině Panny, Merkur ve III. nebo IX. domě v dobrém aspektu k Venuši, Venuše ve III. nebo IX. domě. Zvýšený zájem o četbu nastává za direkcí nebo tranzitů Slunce k Merkurovi.",
   zdroj:"Kefer – ČTENÍ"},

  {id:"kom_004", tema:"Improvizace a pohotovost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1,4,7,10]}],
   text_cs:"Schopnost improvizace propůjčuje Merkur v rohových domech a základních znameních. Pohotovost v reakci: Merkur v příznivém aspektu k Martu bez poškození. Je-li Mars na Ascendentu nebo v pohyblivých znameních a Ascendent je ve Střelci nebo Blížencích hrozí rozptýlení sil.",
   zdroj:"Kefer – IMPROVIZACE"},

// ══════════════════════════════════════════════════════
//  VŮLE & CHARAKTER – DALŠÍ
// ══════════════════════════════════════════════════════

  {id:"char_001", tema:"Vůle a soustředěnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[10,1]}],
   text_cs:"Silná vůle závisí od silně ozářeného Slunce a Saturna, zdůrazněného Kozoroha a základních znamení. Typické příznaky: Slunce v X. domě příznivě k Saturnu, Saturn v I. domě příznivě ozářený, Ascendent ve Lvu nebo Kozorohu. Ohnivá znamení propůjčují silnou vůli krátkodobě, zemská trvale.",
   zdroj:"Kefer – VŮLE"},

  {id:"char_002", tema:"Čestnost a poctivost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"planeta_v_domu",planeta:"Mars",dum:[10]},{typ:"planeta_v_domu",planeta:"Neptun",dum:[10]}],
   text_cs:"Ctnost silného Marta a Jupitera. Typická postavení: Luna příznivě k Jupiteru, Luna ve třetí třetině Skopce, Venuše ve Lvu nebo v X. domě, Mars ve Lvu, Jupiter příznivě k Saturnu nebo v I. domě, Saturn ve Skopci nebo Lvu v I. domě, Neptun v X. domě. Příznivě ozářený Střelec.",
   zdroj:"Kefer – ČESTNOST"},

  {id:"char_003", tema:"Drzost a neohroženost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[1,10]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Odvaha je vlastností silného Marta v příznivém aspektu ke Slunci nebo Jupiteru. Neohroženost naznačuje Mars v I. domě v Skopci nebo Lvu příznivě ozářený. Zbabělost: Saturn nebo Uran v I. domě poškozený. Hrobaři váhavosti jsou pevná znamení v I. domě bez příznivého Marta.",
   zdroj:"Kefer – ODVAHA / DRZOST"},

  {id:"char_004", tema:"Důvěryhodnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Jupiter",dum:[1]},{typ:"ascendent_v_znameni",znameni:[5,8]}],
   text_cs:"Znaky důvěryhodnosti jsou: Luna ve Štíru, Slunce v X. domě v dobrém aspektu k Uranu, Ascendent ve Lvu nebo Panně, Jupiter v I. domě ve Skopci nebo Lvu. Důvěryhodnost je narušena za nepříznivých tranzitů Neptuna k XII. domu nebo Plutona k zvrhlým jednáním.",
   zdroj:"Kefer – DŮVĚRYHODNOST"},

  {id:"char_005", tema:"Hochštaplerství a podvody", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[1,12]},{typ:"ascendent_v_znameni",znameni:[5,8]}],
   text_cs:"Hochštaplerství je působeno poškozením Venuše a Jupitera Neptunem ve vztahu k vodním znamením. Ascendent je poškozen a ve Štíru nebo ve Lvu. Obecným signifikátorem je Neptun. Podvody: jejich nebezpečí naznačuje poškozený Neptun ve XII. domě a Saturnem poškozená Panna.",
   zdroj:"Kefer – HOCHŠTAPLERSTVÍ"},

  {id:"char_006", tema:"Intriky a zákulisní jednání", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Neptun",dum:[12]},{typ:"planeta_v_domu",planeta:"Pluto",dum:[12]}],
   text_cs:"Nebezpečné intriky jsou naznačeny poškozeným Neptunem ve XII. domě. Tranzity Neptuna XII. domem, špatné tranzity Uzlu k Neptunovi a Plutonovi působí stejně. Přemožení intrik naznačuje tranzit Jupitera XII. domem nebo dobrý aspekt transitujícího Jupitera k poškozenému Neptunovi.",
   zdroj:"Kefer – INTRIKY"},

// ══════════════════════════════════════════════════════
//  DOPISY & KOMUNIKACE
// ══════════════════════════════════════════════════════

  {id:"kom2_001", tema:"Dopisy a písemná komunikace", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Saturn",dum:[3]},{typ:"planeta_v_domu",planeta:"Jupiter",dum:[3]}],
   text_cs:"Signifikátor: druhá třetina III. domu. Zisk z dopisů kyne je-li tam Bod štěstí. Neštěstí skrze dopisy prozrazuje Saturn poškozující Merkura. Příjemné dopisy nás docházejí za dobrého tranzitu Venuše k Slunci nebo Luny k Slunci a Merkurovi. Špatné za tranzitů Slunce k Merkurovi.",
   zdroj:"Kefer – DOPISY"},

  {id:"kom2_002", tema:"Úspěch ve veřejném životě", kategorie:["osobnost","povolani"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Slunce",dum:[10]},{typ:"planeta_v_znameni",planeta:"Slunce",znameni:[8,4]}],
   text_cs:"Veřejnou činnost naznačuje Slunce ve Štíru, Luna v VII. domě v příznivém aspektu k Venuši, Merkur v VII. domě. Ztráty z veřejné činnosti způsobuje Saturn v X. domě v nepříznivém aspektu ke Slunci. Člověk bývá veřejně činný za direkcí Slunce k Ascendentu nebo direkcí Luny k Mediu coeli.",
   zdroj:"Kefer – ČINNOST (veřejná)"},

// ══════════════════════════════════════════════════════
//  TĚLO & FYZICKÉ VLASTNOSTI
// ══════════════════════════════════════════════════════

  {id:"telo_001", tema:"Hlava a fyzický vzhled hlavy", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[5,10]},{typ:"planeta_v_domu",planeta:"Luna",dum:[1]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Signifikátor: Mars. Kulatou hlavu tvoří Ascendent ve Lvu nebo ve vztahu k Jupiteru, malou Mars nebo Jupiter v I. domě zvláště v Kozorohu, velkou Luna v I. domě. Ascendent v Kozorohu působí dlouhou bradu, Slunce v Býku plnou. Hranatá brada je projevem silného Marta.",
   zdroj:"Kefer – HLAVA"},

  {id:"telo_002", tema:"Chůze a pohyb těla", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[10,2,5,8,11]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]}],
   text_cs:"Chůze člověka závisí na Blížencích a III. domě horoskopu. Špatnou chůzi propůjčuje Ascendent v Kozorohu, příliš rychlou špatný aspekt Marta k Merkurovi a zdůrazněná základní znamení, pomalou pevná znamení. Krátké nohy jsou darem pevných, dlouhé pohyblivých znamení.",
   zdroj:"Kefer – CHŮZE"},

  {id:"telo_003", tema:"Hubenost a nízká tělesná hmotnost", kategorie:["zdravi"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Merkur",dum:[1]},{typ:"planeta_v_domu",planeta:"Mars",dum:[1]},{typ:"ascendent_v_znameni",znameni:[1,6,8]}],
   text_cs:"Hubenost je vadou Saturna, Skopce, Býka a druhé poloviny Lva. 1° Panny je zdůrazněn. Data platící pro postavení v I. domě: Merkur ve Lvu, Mars v Kozorohu. Celkově působí hubenost: Ascendent ve Skopci, Panně nebo Beranovi s poškozeným Saturnem.",
   zdroj:"Kefer – HUBENOST"},

  {id:"telo_004", tema:"Bledost a výrazný fyzický typ", kategorie:["zdravi"],
   podmínky:[{typ:"ascendent_v_znameni",znameni:[10,11]},{typ:"planeta_v_domu",planeta:"Saturn",dum:[1]}],
   text_cs:"Bledost není-li projevem choroby závisí od Saturna jenž obvykle má aspektární vztah k Ascendentu bývajícímu v Kozorohu nebo Vodnáři. Luna v Raku a v I. domě působí bledost v mládí, Neptun v poměru k Ascendentu působí bledost nápadnou.",
   zdroj:"Kefer – BLEDOST"},

// ══════════════════════════════════════════════════════
//  KONFLIKTY & NESHODY
// ══════════════════════════════════════════════════════

  {id:"kon_001", tema:"Hádky a konflikty", kategorie:["laska","osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Uran",dum:[7]},{typ:"planeta_v_domu",planeta:"Mars",dum:[7]}],
   text_cs:"Hádky propukají za špatných tranzitů Luny k Slunci a Uranu, Merkura k Martu a Saturnu. Uran ve špatném aspektu k Merkurovi. 18° Býka nebo 2° Střelce bývají zdůrazněny. Hádky s ženou propukají za špatných tranzitů Venuše k Luně a Marta k Luně a Martu.",
   zdroj:"Kefer – HÁDKY"},

  {id:"kon_002", tema:"Boj za ideály a spravedlnost", kategorie:["osobnost"],
   podmínky:[{typ:"planeta_v_domu",planeta:"Mars",dum:[11]},{typ:"planeta_v_znameni",planeta:"Mars",znameni:[7,9]}],
   text_cs:"Boj za ideály je napovězen příznivým aspektem Marta k Jupiteru, zvláště ke Střelci. Mars příznivý k Neptunu propůjčuje boj za ideály. Boj osudový naznačuje každá kvadratura, 1° nebo 23° Skopce, 22° Střelce, 19° a 25° Štíra, 2° Blíženců, Mars v XI. domě.",
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
