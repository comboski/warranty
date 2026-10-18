import fs from 'node:fs';
// Zero-based cue numbers across all five chapters, matching the English reference.
const corrections={
de:`5|Im Schneeschuhmodus nutze ich nur den mittleren Stift
6|für die vordere schlüssellochförmige Öffnung.
7|Die Metallspitzen müssen immer nach vorne zeigen.
8|Das Kunststoffende bleibt
11|Ich befestige nur einen Stift,
14|Ich löse die Befestigung,
15|und löse auch die Öffnung auf der anderen Seite.
16|Jetzt befestige ich beide Stifte.
24|und stelle den Riemen passend ein.
26|Jetzt lege ich Combo Ski am rechten Fuß an.
27|Die Markierung R ist
28|auf dem oberen Klettband.
35|sodass Combo Ski fest mit dem Schuh verbunden ist.
38|kann über dem Schuh sitzen
39|oder am Bein darüber. Beides ist richtig.
41|Beginnen Sie nie
44|Achten Sie darauf,
45|nicht zu verkrampfen.
46|Bleiben Sie locker und beugen Sie die Knie.
48|fahre kurze Kurven
49|und halte für mehr Gleichgewicht einen Fuß
50|leicht vor dem anderen.
52|aber mit der Zeit gewöhnen Sie sich daran,
53|werden sicherer und bremsen mit einem seitlichen Kantenschwung.
57|Fahren Sie nicht mit steifen Beinen und bremsen Sie nicht im Pflug.
60|besonders in den Knien.
62|und die Fahrt mehr genießen.
68|den Umgang mit Combo Ski zu lernen.
70|Sie bewegen sich wie auf Inlineskates.
71|Das geht bergab,
86|und löse die hintere Befestigungsöffnung.
87|Dasselbe mache ich auf der anderen Seite.
89|Wichtig ist,
91|Ich befestige nur den mittleren Stift
92|und drücke die Verbindung fest.
94|blase ich ihn einfach heraus.
95|Dasselbe mache ich auf der anderen Seite.
98|Jetzt setze ich den rechten Fuß ein.
103|und zuletzt das obere Klettband.
105|Die Schuhspitze liegt auf Höhe der Spitze von Combo Ski.
109|drücken Sie Combo Ski fest in den Schnee.`,
fr:`5|En mode raquettes, j’utilise seulement l’ergot central
6|pour l’ouverture avant en forme de trou de serrure.
7|Les pointes métalliques doivent toujours être à l’avant.
11|Je fixe un seul ergot.
12|L’ergot avant reste libre.
14|Je détache la fixation,
15|puis je dégage aussi l’ouverture de l’autre côté.
16|Maintenant, je fixe les deux ergots.
17|D’abord l’ouverture arrière, puis l’ouverture avant.
19|Je règle maintenant la sangle textile derrière le talon
24|et je règle la sangle à ma taille.
26|Je mets maintenant Combo Ski au pied droit.
27|Le repère R se trouve
35|pour que Combo Ski fasse corps avec la chaussure.
38|peut se placer sur la chaussure
39|ou autour de la jambe au-dessus. Les deux conviennent.
41|Ne commencez jamais
44|Veillez toujours
45|à ne pas vous crisper.
46|Restez détendu et gardez les genoux fléchis.
48|je fais de petits virages
53|vous gagnez en assurance et freinez en dérapant de côté.
57|Ne skiez pas jambes tendues et ne freinez pas en chasse-neige.
61|Après un peu d’entraînement, augmentez progressivement la vitesse et la pente,
62|pour profiter davantage de la descente.
64|grâce aux carres et à la sangle supérieure,
69|Cela vous aide à garder l’équilibre d’avant en arrière.
70|Le mouvement est le même qu’en rollers.
71|Vous pouvez avancer ainsi en descente,
86|et je dégage l’ouverture arrière.
87|Je fais la même chose de l’autre côté.
89|l’essentiel est
91|Je fixe donc seulement l’ergot central
92|et j’appuie pour l’emboîter.
94|je la retire simplement en soufflant.
95|Je fais la même chose de l’autre côté.
109|n’hésitez pas à enfoncer Combo Ski dans la neige.`,
it:`2|e i nostri bastoncini Sever Gear.
5|In modalità ciaspole uso solo il perno centrale
6|per l’asola anteriore a forma di buco della serratura.
7|Le punte metalliche devono sempre essere davanti.
11|Fisso un solo perno.
14|Sgancio l’attacco,
15|poi libero l’asola anche sull’altro lato.
16|Ora fisso entrambi i perni.
17|Prima l’asola posteriore, poi quella anteriore.
24|e regolo la cinghia in modo che calzi bene.
27|Il segno R si trova
35|così Combo Ski diventa come una parte dello scarponcino.
38|può stare sopra lo scarponcino
39|o attorno alla gamba, più in alto. Vanno bene entrambi.
40|Ora vediamo come scendere con Combo Ski.
44|Assicurati sempre
45|di non essere rigido.
46|Resta rilassato e tieni le ginocchia piegate.
48|faccio curve brevi
53|acquisti sicurezza e freni con una derapata laterale.
57|Non sciare a gambe dritte e non frenare a spazzaneve.
62|e goderti di più la discesa.
64|grazie alle lamine e alla cinghia superiore,
65|la discesa è comoda e sicura.
69|Ti aiuta a mantenere l’equilibrio avanti e indietro.
75|In discesa le condizioni della neve sono molto importanti.
78|Per i principianti sciare sul ghiaccio è quasi impossibile.
86|e sgancio l’asola posteriore.
87|Faccio lo stesso dall’altra parte.
91|Quindi fisso solo il perno centrale
92|e premo per agganciarlo.
94|la rimuovo soffiando.
95|Faccio lo stesso dall’altra parte.
109|non esitare a piantare Combo Ski nella neve.`,
es:`0|Hola, soy Vojta y hoy te mostraré
2|y nuestros bastones Sever Gear.
5|En modo raquetas de nieve uso solo el pasador central
6|para la ranura delantera con forma de ojo de cerradura.
7|Las puntas metálicas siempre deben estar delante.
11|Fijo solo un pasador.
14|Suelto la fijación,
15|y libero también la ranura del otro lado.
16|Ahora fijo los dos pasadores.
17|Primero la ranura trasera y luego la delantera.
23|Así que aflojo la hebilla de plástico
24|y ajusto la correa a mi talla.
27|La marca R está
35|para que Combo Ski quede como parte de la bota.
38|puede ir sobre la bota
39|o alrededor de la pierna, por encima. Ambas opciones valen.
44|Asegúrate siempre
45|de no estar rígido.
46|Relájate y mantén las rodillas flexionadas.
48|hago giros cortos
53|ganas confianza y frenas derrapando de lado.
55|Mantén un pie un poco delante del otro para equilibrarte mejor.
57|No esquíes con las piernas rígidas ni frenes en cuña.
61|Tras practicar, puedes aumentar poco a poco la velocidad y la pendiente,
62|y disfrutar más de la bajada.
64|gracias a los cantos y a la correa superior,
65|la bajada es cómoda y segura.
69|Te ayuda a mantener el equilibrio hacia delante y hacia atrás.
78|Para los principiantes, esquiar sobre hielo es casi imposible.
81|Deben sujetar bien el tobillo.
83|mejor.
86|y libero la ranura trasera.
87|Hago lo mismo del otro lado.
91|Así que fijo solo el pasador central
92|y presiono para encajarlo.
94|la quito simplemente soplando.
95|Hago lo mismo del otro lado.`,
pl:`0|Cześć, jestem Vojta i dziś pokażę ci,
2|oraz naszych kijków Sever Gear.
5|W trybie rakiet śnieżnych używam tylko środkowego sworznia
6|do przedniego otworu w kształcie dziurki od klucza.
7|Metalowe kolce muszą być zawsze z przodu.
11|Mocuję tylko jeden sworzeń.
14|Odpinam mocowanie,
15|i zwalniam otwór również po drugiej stronie.
16|Teraz mocuję oba sworznie.
24|i dopasowuję pasek do rozmiaru buta.
25|To samo robię z drugim Combo Ski.
26|Teraz zakładam Combo Ski na prawą stopę.
35|tak aby Combo Ski było jak część buta.
38|może leżeć na bucie
39|lub obejmować nogę powyżej buta. Obie opcje są poprawne.
44|Zawsze pamiętaj,
45|żeby się nie usztywniać.
48|wykonuję krótkie skręty
49|i dla lepszej równowagi trzymam jedną stopę
50|nieco przed drugą.
53|nabierzesz pewności i nauczysz się hamować ślizgiem bokiem.
57|Nie jedź na prostych nogach i nie hamuj pługiem.
62|i czerpać więcej przyjemności z jazdy.
66|Jednym z najprzyjemniejszych ruchów jest krok łyżwowy.
68|żeby nauczyć się korzystać z Combo Ski.
70|Ruch jest taki sam jak na rolkach.
71|Tak możesz poruszać się w dół,
86|i zwalniam tylny otwór montażowy.
87|To samo robię po drugiej stronie.
91|Mocuję więc tylko środkowy sworzeń
92|i dociskam mocowanie.
94|po prostu go wydmuchuję.
95|To samo robię po drugiej stronie.
101|Zaciskam przedni pasek nad palcami,
102|potem tylny pasek nad podbiciem,
109|mocno wbij Combo Ski w śnieg.`,
nl:`5|In de sneeuwschoenstand gebruik ik alleen de middelste pen
6|voor de voorste sleutelgatvormige bevestigingssleuf.
7|De metalen punten moeten altijd naar voren wijzen.
11|Ik maak maar één pen vast.
14|Ik maak de bevestiging los,
16|en nu maak ik beide pennen vast.
26|Nu plaats ik Combo Ski aan mijn rechtervoet.
44|Zorg ervoor
45|dat je niet verkrampt.
46|Blijf ontspannen en houd je knieën gebogen.
48|maak korte bochten
49|en houd voor een beter evenwicht één voet
53|krijg je vertrouwen en leer je met een hockeystop te remmen.
57|Ski niet met stijve benen en rem niet in ploegstand.
61|Na wat oefenen kun je de snelheid en de helling geleidelijk verhogen,
62|en meer van de afdaling genieten.
64|dankzij de kanten en de bovenste band,
68|om met Combo Ski te leren omgaan.
86|en maak de achterste sleuf los.
94|blaas ik die gewoon weg.
109|zet Combo Ski stevig in de sneeuw.`,
ro:`1|cum să folosești în siguranță Combo Ski
2|și bețele noastre Sever Gear.
5|În modul rachete de zăpadă folosesc doar știftul din mijloc
6|pentru fanta din față, în formă de gaură de cheie.
7|Vârfurile metalice trebuie să fie mereu în față.
9|în spate, niciodată în față.
11|Fixez un singur știft.
12|Știftul din față rămâne liber.
14|Desfac prinderea,
15|și eliberez fanta și pe cealaltă parte.
16|Acum fixez ambele știfturi.
20|ca să se potrivească mărimea.
22|Am reglat Combo Ski între mărimile S și M.
24|și reglez cureaua să se potrivească bine.
35|astfel încât Combo Ski să fie ca o parte a bocancului.
38|poate sta peste bocanc
39|sau în jurul gambei, deasupra lui. Ambele variante sunt corecte.
44|Ai grijă mereu
45|să nu fii încordat.
46|Rămâi relaxat și ține genunchii îndoiți.
48|fac viraje scurte
53|prinzi încredere și frânezi prin derapaj lateral.
57|Nu schia cu picioarele rigide și nu frâna în plug.
62|și te poți bucura mai mult de coborâre.
64|datorită canturilor și curelei superioare,
65|coborârea este confortabilă și sigură.
69|Te ajută să păstrezi echilibrul înainte și înapoi.
74|ușor la deal.
76|cel mai bine este pe zăpadă normală, moale.
78|Pentru începători, alunecarea pe gheață este aproape imposibilă.
85|Apăs butonul
86|și eliberez fanta din spate.
87|Fac la fel și pe cealaltă parte.
92|și apăs pentru a-l fixa.
94|o îndepărtez pur și simplu suflând.
95|Fac la fel și pe cealaltă parte.
103|și la final cureaua superioară cu arici.
109|înfige ferm Combo Ski în zăpadă.`,
hu:`2|és a Sever Gear botjainkat.
5|Hótalpas módban csak a középső csapot használom
6|az első, kulcslyuk alakú rögzítőnyíláshoz.
7|A fémtüskéknek mindig elöl kell lenniük.
8|A műanyag vég
11|Csak egy csapot rögzítek.
12|Az első csap szabadon marad.
14|Kioldom a rögzítést,
15|és a másik oldalon is kioldom a nyílást.
16|Most mindkét csapot rögzítem.
24|és kényelmes méretre állítom a pántot.
26|Most felteszem a Combo Skit a jobb lábamra.
27|Az R jelzés
35|hogy a Combo Ski szinte a bakancs része legyen.
38|a bakancsra is kerülhet,
39|vagy fölé, a lábszár köré. Mindkettő helyes.
40|Most bemutatjuk a lejtmenetet a Combo Skivel.
44|Mindig figyeljen arra,
45|hogy ne feszüljön meg.
46|Maradjon laza, és hajlítsa be a térdét.
48|rövid kanyarokat teszek
49|és a jobb egyensúlyért az egyik lábamat
50|kissé a másik előtt tartom.
53|magabiztosabb lesz, és megtanul oldalirányú csúszással fékezni.
57|Ne síeljen nyújtott térddel, és ne fékezzen hóekében.
62|és jobban élvezheti a síelést.
64|az éleknek és a felső pántnak köszönhetően
65|a síelés kényelmes és biztonságos.
68|megtanulni a Combo Ski használatát.
81|Meg kell tartaniuk a bokát.
86|és kioldom a hátsó nyílást.
87|Ugyanezt teszem a másik oldalon.
92|és benyomom a rögzítést.
95|Ugyanezt teszem a másik oldalon.
100|hogy a textil sarokpánt a helyén van-e.
109|nyomja a Combo Skit határozottan a hóba.`,
sk:`4|Režim snežnice alebo režim minilyže.
5|V režime snežnice používam len prostredný čap
6|pre predný otvor v tvare kľúčovej dierky.
11|Upevním iba jeden čap.
12|Predný čap zostáva voľný.
14|Uvoľním upevnenie,
15|a uvoľním otvor aj na druhej strane.
16|Teraz upevním oba čapy.
19|Teraz nastavím patný textilný pásik
21|Napríklad
22|svoje Combo Ski som nastavil medzi veľkosťami S a M.
24|a nastavím pásik tak, aby mi veľkosť sedela.
25|To isté urobím na druhej Combo Ski.
26|Teraz nasadím Combo Ski na pravú nohu.
38|môže byť na topánke
39|alebo okolo nohy nad topánkou. Obe možnosti sú správne.
41|Nikdy nezačínajte
44|Vždy dbajte na to,
45|aby ste neboli stuhnutí.
46|Zostaňte uvoľnení a kolená majte pokrčené.
48|robím krátke oblúky
50|mierne pred druhou.
53|získate istotu a naučíte sa brzdiť šmykom cez hrany.
57|Nejazdite s vystretými kolenami a nebrzdite pluhom.
62|a jazdu si viac užívať.
64|vďaka hranám a hornému pásiku,
68|ako sa naučiť používať Combo Ski.
81|Musia poskytnúť oporu členku.
86|a uvoľním zadný upevňovací otvor.
87|To isté urobím na druhej strane.
91|Upevním teda len prostredný čap
92|a zatlačím upevnenie.
94|jednoducho ho vyfúknem.
95|To isté urobím na druhej strane.
100|či je patný textilný pásik správne usadený.
106|Takto je Combo Ski správne nasadená.
109|neváhajte pevne zaboriť Combo Ski do snehu.`,
sl:`2|in naše palice Sever Gear.
5|V načinu krpelj uporabim samo srednji zatič
6|za sprednjo odprtino v obliki ključavnice.
7|Kovinske konice morajo biti vedno spredaj.
11|Pritrdim samo en zatič.
14|Sprostim pritrditev,
15|in sprostim odprtino tudi na drugi strani.
16|Zdaj pritrdim oba zatiča.
17|Najprej zadnjo pritrdilno odprtino, nato sprednjo.
19|Zdaj nastavim tekstilni petni trak,
22|Combo Ski sem nastavil med velikostma S in M.
24|in nastavim trak na ustrezno velikost.
35|tako da je Combo Ski kot del čevlja.
38|je lahko na čevlju
39|ali okoli noge nad čevljem. Oboje je pravilno.
41|Nikoli ne začnite
44|Vedno pazite,
45|da niste zakrčeni.
46|Ostanite sproščeni in imejte kolena pokrčena.
48|delam kratke zavoje
50|rahlo pred drugo.
53|pridobite samozavest in se naučite zavirati z bočnim zdrsom.
57|Ne smučajte z iztegnjenimi koleni in ne zavirajte v plugu.
62|in še bolj uživate v vožnji.
64|zahvaljujoč robnikom in zgornjemu traku,
68|da se naučite uporabljati Combo Ski.
86|in sprostim zadnjo pritrdilno odprtino.
87|Enako naredim na drugi strani.
92|in pritisnem, da se zaskoči.
94|ga preprosto izpiham.
95|Enako naredim na drugi strani.`
};
for(const [lang,lines] of Object.entries(corrections)){
  const file=`public/guide/locales/${lang}.json`,data=JSON.parse(fs.readFileSync(file,'utf8'));
  const cues=data.subtitles.flat();
  for(const line of lines.split('\n')){const split=line.indexOf('|');cues[Number(line.slice(0,split))].text=line.slice(split+1);}
  fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
