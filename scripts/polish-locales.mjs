import fs from 'node:fs';
const reviewed={
de:{
  mounting:'Im Schneeschuhmodus befestigen Sie die vordere schlüssellochförmige Öffnung vorne an der Bindung auf beiden Seiten am mittleren Stift. Der vordere Stift bleibt frei, damit sich die Ferse leicht bewegen kann.',
  answers:['Nur die vordere Befestigungsöffnung vorne an der Bindung, damit sich die Ferse leicht bewegen kann','Nur die hintere Befestigungsöffnung hinten an der Bindung','Beide Befestigungsöffnungen'],
  attach:'Befestigen Sie die vordere schlüssellochförmige Öffnung vorne an der Bindung auf beiden Seiten am mittleren Stift.',
  ui:{welcomeLead:'<strong>Schließen Sie diesen kurzen Leitfaden ab, um die Garantiebedingungen zu erfüllen.</strong> Wir zeigen Ihnen, wie Sie Combo Ski richtig einstellen, sicher benutzen und pflegen.',
    socialPostConsent:'Ich bestätige, dass ich einen <strong>Beitrag oder eine Story</strong> mit gut sichtbarem Produkt veröffentlicht habe <strong>oder veröffentlichen werde</strong> und dabei <strong>@combo_ski</strong> auf Instagram oder <strong>@Comboski</strong> auf Facebook markiere.',
    pairingNote:'<strong>Was passiert danach?</strong> Sobald Ihr markierter <strong>Beitrag oder Ihre Story</strong> erscheint, prüfen wir ihn, <strong>ordnen ihn anhand des Kontonamens Ihrer Registrierung zu</strong> und <strong>aktivieren die verlängerte Garantie auf insgesamt 3 Jahre</strong>.',
    extendedSuccess:'Wir warten jetzt auf Ihren <strong>Beitrag oder Ihre Story</strong> mit der Markierung <strong>@combo_ski</strong> auf Instagram oder <strong>@Comboski</strong> auf Facebook. Falls Sie den Beitrag bereits geteilt haben, haben Sie bitte etwas Geduld, bis wir ihn Ihrer Registrierung zugeordnet haben.',
    actionRuleRights:'Ihre gesetzlichen Rechte bleiben unabhängig von der Teilnahme an dieser Aktion unberührt. Der genannte Leistungsumfang und die Ausschlüsse gelten nur für das freiwillig gewährte dritte Garantiejahr. Bei Fragen oder Garantieansprüchen wenden Sie sich an <a href=mailto:info@comboski.cz>info@comboski.cz</a>.'}},
fr:{
  mounting:'En mode raquettes, fixez l’ouverture avant en forme de trou de serrure, à l’avant de la fixation, sur l’ergot central de chaque côté. L’ergot avant reste libre pour que le talon puisse bouger légèrement.',
  answers:['Uniquement l’ouverture avant, à l’avant de la fixation, pour que le talon puisse bouger légèrement','Uniquement l’ouverture arrière, à l’arrière de la fixation','Les deux ouvertures de fixation'],
  attach:'Fixez l’ouverture avant en forme de trou de serrure, à l’avant de la fixation, sur l’ergot central de chaque côté.',
  ui:{programTermTag:'Dans votre <strong>publication ou story</strong>, identifiez <strong>@combo_ski</strong> sur Instagram ou <strong>@Comboski</strong> sur Facebook.',
    socialPostConsent:'Je confirme avoir publié <strong>ou m’engage à publier</strong> une <strong>publication ou story</strong> montrant clairement le produit, en identifiant <strong>@combo_ski</strong> sur Instagram ou <strong>@Comboski</strong> sur Facebook.',
    pairingNote:'<strong>Que se passe-t-il ensuite ?</strong> Dès que votre <strong>publication ou story</strong> avec notre profil identifié apparaît, nous la vérifions, <strong>la rattachons à votre inscription</strong> grâce au nom du compte, puis <strong>activons votre garantie prolongée à 3 ans au total</strong>.',
    extendedSuccess:'Nous attendons maintenant votre <strong>publication ou story</strong> identifiant <strong>@combo_ski</strong> sur Instagram ou <strong>@Comboski</strong> sur Facebook. Si vous l’avez déjà partagée, merci de patienter le temps que nous la rattachions à votre inscription.',
    actionRuleActivation:'L’envoi du formulaire enregistre votre demande. Nous <strong>activons l’extension après vérification de la publication ou story et rattachement à votre inscription</strong>.'}},
it:{
  mounting:'In modalità ciaspole, aggancia l’asola anteriore a forma di buco della serratura, nella parte anteriore dell’attacco, al perno centrale su entrambi i lati. Il perno anteriore resta libero, così il tallone può muoversi leggermente.',
  answers:['Solo l’asola anteriore, nella parte anteriore dell’attacco, così il tallone può muoversi leggermente','Solo l’asola posteriore, nella parte posteriore dell’attacco','Entrambe le asole di fissaggio'],
  attach:'Aggancia l’asola anteriore a forma di buco della serratura, nella parte anteriore dell’attacco, al perno centrale su entrambi i lati.',
  ui:{socialPostConsent:'Confermo di aver pubblicato <strong>o mi impegno a pubblicare</strong> un <strong>post o una storia</strong> in cui il prodotto è ben visibile, taggando <strong>@combo_ski</strong> su Instagram o <strong>@Comboski</strong> su Facebook.',
    pairingNote:'<strong>Cosa succede dopo?</strong> Quando compare il <strong>post o la storia</strong> con il nostro tag, lo verifichiamo, <strong>lo abbiniamo alla tua registrazione</strong> tramite il nome dell’account e <strong>attiviamo la garanzia estesa a 3 anni totali</strong>.',
    extendedSuccess:'Ora aspettiamo il tuo <strong>post o la tua storia</strong> con il tag <strong>@combo_ski</strong> su Instagram o <strong>@Comboski</strong> su Facebook. Se hai già pubblicato, ti chiediamo di attendere mentre abbiniamo il contenuto alla tua registrazione.'}},
es:{
  mounting:'En modo raquetas de nieve, fija la ranura delantera con forma de ojo de cerradura, en la parte delantera de la fijación, al pasador central de ambos lados. El pasador delantero queda libre para que el talón pueda moverse ligeramente.',
  answers:['Solo la ranura delantera, en la parte delantera de la fijación, para que el talón pueda moverse ligeramente','Solo la ranura trasera, en la parte trasera de la fijación','Las dos ranuras de fijación'],
  attach:'Fija la ranura delantera con forma de ojo de cerradura, en la parte delantera de la fijación, al pasador central de ambos lados.',
  ui:{socialPostConsent:'Confirmo que he publicado <strong>o publicaré</strong> una <strong>publicación o historia</strong> con el producto claramente visible, etiquetando a <strong>@combo_ski</strong> en Instagram o <strong>@Comboski</strong> en Facebook.',
    extendedSuccess:'Ahora esperamos tu <strong>publicación o historia</strong> con la etiqueta <strong>@combo_ski</strong> en Instagram o <strong>@Comboski</strong> en Facebook. Si ya la has compartido, ten un poco de paciencia mientras la vinculamos con tu registro.'}},
pl:{
  mounting:'W trybie rakiet śnieżnych załóż przedni otwór montażowy w kształcie dziurki od klucza, z przodu wiązania, na środkowy sworzeń po obu stronach. Przedni sworzeń pozostaje wolny, dzięki czemu pięta może się lekko poruszać.',
  answers:['Tylko przedni otwór z przodu wiązania, aby pięta mogła się lekko poruszać','Tylko tylny otwór z tyłu wiązania','Oba otwory montażowe'],
  attach:'Załóż przedni otwór w kształcie dziurki od klucza, z przodu wiązania, na środkowy sworzeń po obu stronach.',
  ui:{socialPostConsent:'Potwierdzam, że opublikowałem/am <strong>lub opublikuję</strong> <strong>post lub relację</strong> z dobrze widocznym produktem i oznaczę <strong>@combo_ski</strong> na Instagramie lub <strong>@Comboski</strong> na Facebooku.',
    pairingNote:'<strong>Co dalej?</strong> Gdy pojawi się oznaczony <strong>post lub relacja</strong>, sprawdzimy go, <strong>połączymy z Twoją rejestracją</strong> na podstawie nazwy konta i <strong>aktywujemy gwarancję przedłużoną łącznie do 3 lat</strong>.',
    extendedSuccess:'Teraz czekamy na Twój <strong>post lub relację</strong> z oznaczeniem <strong>@combo_ski</strong> na Instagramie lub <strong>@Comboski</strong> na Facebooku. Jeśli już został opublikowany, prosimy o cierpliwość, aż połączymy go z Twoją rejestracją.',
    actionRuleActivation:'Wysłanie formularza zapisuje zgłoszenie. <strong>Aktywujemy przedłużoną gwarancję po sprawdzeniu postu lub relacji i połączeniu z rejestracją</strong>.',questionCount:'Liczba pytań: {n}'}},
nl:{
  mounting:'Bevestig in de sneeuwschoenstand de voorste sleutelgatvormige sleuf aan de voorkant van de binding aan de middelste pen, aan beide kanten. De voorste pen blijft vrij, zodat de hiel een beetje kan bewegen.',
  answers:['Alleen de voorste sleuf aan de voorkant van de binding, zodat de hiel een beetje kan bewegen','Alleen de achterste sleuf aan de achterkant van de binding','Beide bevestigingssleuven'],
  attach:'Bevestig de voorste sleutelgatvormige sleuf aan de voorkant van de binding aan de middelste pen, aan beide kanten.',
  ui:{socialPostConsent:'Ik bevestig dat ik een <strong>post of story</strong> met het product duidelijk in beeld heb gepubliceerd <strong>of zal publiceren</strong>, met de tag <strong>@combo_ski</strong> op Instagram of <strong>@Comboski</strong> op Facebook.',
    pairingNote:'<strong>Wat gebeurt er daarna?</strong> Zodra de getagde <strong>post of story</strong> verschijnt, controleren we deze, <strong>koppelen we deze via de accountnaam aan je registratie</strong> en <strong>activeren we de verlengde garantie van in totaal 3 jaar</strong>.',
    extendedSuccess:'We wachten nu op je <strong>post of story</strong> met de tag <strong>@combo_ski</strong> op Instagram of <strong>@Comboski</strong> op Facebook. Heb je deze al gedeeld? Heb dan nog even geduld terwijl we deze aan je registratie koppelen.'}},
ro:{
  mounting:'În modul rachete de zăpadă, fixează fanta din față, în formă de gaură de cheie, din partea din față a legăturii, pe știftul din mijloc de pe ambele părți. Știftul din față rămâne liber, astfel încât călcâiul se poate mișca ușor.',
  answers:['Doar fanta din față, din partea din față a legăturii, astfel încât călcâiul se poate mișca ușor','Doar fanta din spate, din partea din spate a legăturii','Ambele fante de fixare'],
  attach:'Fixează fanta din față, în formă de gaură de cheie, din partea din față a legăturii, pe știftul din mijloc de pe ambele părți.',
  ui:{programTermTag:'În <strong>postare sau story</strong>, etichetează <strong>@combo_ski</strong> pe Instagram sau <strong>@Comboski</strong> pe Facebook.',
    socialPostConsent:'Confirm că am publicat <strong>sau voi publica</strong> o <strong>postare sau un story</strong> cu produsul clar vizibil și voi eticheta <strong>@combo_ski</strong> pe Instagram sau <strong>@Comboski</strong> pe Facebook.',
    pairingNote:'<strong>Ce urmează?</strong> Când apare <strong>postarea sau story-ul</strong> cu eticheta noastră, îl verificăm, <strong>îl asociem înregistrării tale</strong> pe baza numelui contului și <strong>activăm garanția extinsă la 3 ani în total</strong>.',
    extendedSuccess:'Acum așteptăm <strong>postarea sau story-ul</strong> cu eticheta <strong>@combo_ski</strong> pe Instagram sau <strong>@Comboski</strong> pe Facebook. Dacă ai publicat deja, te rugăm să ai răbdare până asociem conținutul cu înregistrarea ta.',
    actionRuleActivation:'Trimiterea formularului înregistrează cererea. <strong>Activăm garanția extinsă după verificarea postării sau a story-ului și asocierea cu înregistrarea</strong>.'}},
hu:{
  mounting:'Hótalpas módban a kötés elején lévő első, kulcslyuk alakú rögzítőnyílást rögzítse a középső csapra mindkét oldalon. Az első csap szabadon marad, így a sarok kissé mozoghat.',
  answers:['Csak a kötés elején lévő első nyílás, hogy a sarok kissé mozoghasson','Csak a kötés hátulján lévő hátsó nyílás','Mindkét rögzítőnyílás'],
  attach:'Rögzítse a kötés elején lévő első, kulcslyuk alakú nyílást a középső csapra mindkét oldalon.',
  ui:{snowshoeMode:'Hótalpas mód',programTermTag:'A <strong>bejegyzésben vagy történetben</strong> jelölje meg az Instagramon a <strong>@combo_ski</strong>, vagy a Facebookon a <strong>@Comboski</strong> profilunkat.',
    pairingNote:'<strong>Mi történik ezután?</strong> Amint megjelenik a megjelölést tartalmazó <strong>bejegyzés vagy történet</strong>, ellenőrizzük, <strong>a fióknév alapján összekapcsoljuk a regisztrációval</strong>, és <strong>aktiváljuk az összesen 3 évre meghosszabbított garanciát</strong>.',
    extendedSuccess:'Most várjuk a <strong>bejegyzését vagy történetét</strong>, amelyben megjelöli a <strong>@combo_ski</strong> profilunkat az Instagramon vagy a <strong>@Comboski</strong> profilunkat a Facebookon. Ha már közzétette, kérjük, legyen türelemmel, amíg összekapcsoljuk a regisztrációjával.',
    actionRuleActivation:'Az űrlap elküldésével rögzítjük a kérelmet. <strong>A meghosszabbított garanciát a bejegyzés vagy történet ellenőrzése és a regisztrációval való összekapcsolása után aktiváljuk</strong>.',
    warrantyCoverage:'A harmadik garanciális év a <strong>gyártási és anyaghibákra</strong> terjed ki, ha a terméket az útmutató szerint használják.',
    warrantyExclusions:'Nem terjed ki a <strong>normál kopásra, esztétikai karcolásokra, köveknek ütközésből eredő sérülésekre, helytelen használatra és szakszerűtlen átalakításokra</strong>.'}},
sk:{
  mounting:'V režime snežnice upevnite predný otvor v tvare kľúčovej dierky v prednej časti viazania na prostredný čap na oboch stranách. Predný čap zostáva voľný, takže sa päta môže mierne pohybovať.',
  answers:['Iba predný otvor v prednej časti viazania, aby sa päta mohla mierne pohybovať','Iba zadný otvor v zadnej časti viazania','Oba upevňovacie otvory'],
  attach:'Predný otvor v tvare kľúčovej dierky v prednej časti viazania upevnite na prostredný čap na oboch stranách.',
  ui:{welcomeLead:'<strong>Dokončite tohto krátkeho sprievodcu, aby ste splnili pravidlá záruky.</strong> Ukážeme vám správne nastavenie, bezpečné používanie a starostlivosť o Combo Ski.',
    socialPostConsent:'Potvrdzujem, že som zverejnil/a <strong>alebo zverejním</strong> <strong>príspevok alebo story</strong> s viditeľným produktom a označím <strong>@combo_ski</strong> na Instagrame alebo <strong>@Comboski</strong> na Facebooku.',
    pairingNote:'<strong>Čo sa stane potom?</strong> Keď sa označený <strong>príspevok alebo story</strong> objaví, overíme ho, <strong>spárujeme s vašou registráciou</strong> podľa názvu účtu a <strong>aktivujeme predĺženú záruku na celkovo 3 roky</strong>.',
    extendedSuccess:'Teraz budeme čakať na váš <strong>príspevok alebo story</strong> s označením <strong>@combo_ski</strong> na Instagrame alebo <strong>@Comboski</strong> na Facebooku. Ak ste príspevok už pridali, prosíme o strpenie, kým ho spárujeme s vašou registráciou.',
    warrantyExclusions:'Nevzťahuje sa na <strong>bežné opotrebenie, kozmetické škrabance, poškodenie nárazom do kameňov, nesprávne používanie ani neodborné úpravy</strong>.',questionCount:'Počet otázok: {n}'}},
sl:{
  mounting:'V načinu krpelj pritrdite sprednjo odprtino v obliki ključavnice na sprednjem delu vezi na srednji zatič na obeh straneh. Sprednji zatič ostane prost, zato se lahko peta rahlo premika.',
  answers:['Samo sprednja odprtina na sprednjem delu vezi, da se lahko peta rahlo premika','Samo zadnja odprtina na zadnjem delu vezi','Obe pritrdilni odprtini'],
  attach:'Sprednjo odprtino v obliki ključavnice na sprednjem delu vezi pritrdite na srednji zatič na obeh straneh.',
  ui:{socialPostConsent:'Potrjujem, da sem objavil/a <strong>ali bom objavil/a</strong> <strong>objavo ali zgodbo</strong> z jasno vidnim izdelkom in označil/a <strong>@combo_ski</strong> na Instagramu ali <strong>@Comboski</strong> na Facebooku.',
    extendedSuccess:'Zdaj čakamo na vašo <strong>objavo ali zgodbo</strong> z oznako <strong>@combo_ski</strong> na Instagramu ali <strong>@Comboski</strong> na Facebooku. Če ste jo že objavili, vas prosimo za potrpljenje, dokler je ne povežemo z vašo registracijo.',
    actionRuleActivation:'Z oddajo obrazca shranimo vašo prijavo. <strong>Podaljšano garancijo aktiviramo po preverjanju objave ali zgodbe in povezavi z registracijo</strong>.',questionCount:'Število vprašanj: {n}'}}
};
const finalLabels={
  de:['Zuerst befestigen Sie die hintere Öffnung hinten an der Bindung.','Danach befestigen Sie die vordere Öffnung mit dem Entriegelungsknopf vorne an der Bindung.','Kontrollfragen','Füße weit auseinander und Knie durchgestreckt','Gewicht deutlich nach hinten verlagert','Schneeschuhmodus','Miniski-Modus'],
  fr:['Fixez d’abord l’ouverture arrière, à l’arrière de la fixation.','Fixez ensuite l’ouverture avant avec le bouton de déverrouillage, à l’avant de la fixation.','Questions de contrôle','Pieds écartés et genoux tendus','Poids nettement vers l’arrière','Mode raquettes','Mode mini-skis'],
  it:['Aggancia prima l’asola posteriore, nella parte posteriore dell’attacco.','Poi aggancia l’asola anteriore con il pulsante di sgancio, nella parte anteriore dell’attacco.','Domande di verifica','Piedi divaricati e ginocchia dritte','Peso molto spostato all’indietro','Modalità ciaspole','Modalità minisci'],
  es:['Fija primero la ranura trasera, en la parte trasera de la fijación.','Después fija la ranura delantera con el botón de desbloqueo, en la parte delantera de la fijación.','Preguntas de control','Pies separados y rodillas estiradas','Peso muy desplazado hacia atrás','Modo raquetas de nieve','Modo miniesquís'],
  pl:['Najpierw załóż tylny otwór montażowy z tyłu wiązania.','Następnie załóż przedni otwór z przyciskiem zwalniającym, z przodu wiązania.','Pytania kontrolne','Stopy szeroko i kolana wyprostowane','Ciężar ciała mocno przesunięty do tyłu','Tryb rakiet śnieżnych','Tryb mininart'],
  nl:['Bevestig eerst de achterste sleuf aan de achterkant van de binding.','Bevestig daarna de voorste sleuf met de ontgrendelingsknop aan de voorkant van de binding.','Controlevragen','Voeten ver uit elkaar en knieën gestrekt','Gewicht ver naar achteren','Sneeuwschoenstand','Miniskistand'],
  ro:['Fixează mai întâi fanta din spate, din partea din spate a legăturii.','Apoi fixează fanta din față cu butonul de eliberare, din partea din față a legăturii.','Întrebări de verificare','Picioarele depărtate și genunchii întinși','Greutatea mult prea în spate','Mod rachete de zăpadă','Mod mini-schiuri'],
  hu:['Először a kötés hátulján lévő hátsó nyílást rögzítse.','Ezután rögzítse a kötés elején lévő első nyílást a kioldógombbal.','Ellenőrző kérdések','Lábak szélesen, térdek kinyújtva','A testsúly erősen hátrahelyezve','Hótalpas mód','Minisí mód'],
  sk:['Najprv nasaďte zadný upevňovací otvor v zadnej časti viazania.','Potom nasaďte predný upevňovací otvor s tlačidlom v prednej časti viazania.','Kontrolné otázky','Nohy široko a kolená vystreté','Váha výrazne vzadu','Režim snežnice','Režim minilyže'],
  sl:['Najprej pritrdite zadnjo odprtino na zadnjem delu vezi.','Nato pritrdite sprednjo odprtino z gumbom za sprostitev na sprednjem delu vezi.','Kontrolna vprašanja','Stopala narazen in kolena iztegnjena','Teža močno pomaknjena nazaj','Način krpelj','Način mini smuči']
};
for(const [lang,c] of Object.entries(reviewed)){
  const file=`public/guide/locales/${lang}.json`,d=JSON.parse(fs.readFileSync(file,'utf8'));
  d.lessons[0].points[2].text=c.mounting;
  d.lessons[0].questions[1].answers=c.answers;
  d.lessons[4].points[3].text=c.attach;
  d.lessons[4].questions[0].hint=d.lessons[4].points[0].text;
  if(lang==='hu')d.lessons[0].title='Hótalp vagy minisí?';
  d.lessons[4].questions[3]=structuredClone(d.lessons[0].questions[1]);
  Object.assign(d.copy,c.ui);
  const labels=finalLabels[lang];
  d.lessons[0].points[4].text=labels[0];d.lessons[0].points[5].text=labels[1];
  d.copy.quizTitle=labels[2];d.lessons[2].questions[1].answers[1]=labels[3];d.lessons[2].questions[1].answers[2]=labels[4];
  d.copy.snowshoeMode=labels[5];d.copy.miniSkiMode=labels[6];
  // The proper group name is not translated.
  d.copy.communityText=d.copy.communityText.replace(/<strong>[^<]*<\/strong>/,'<strong>Combo Ski Users</strong>');
  fs.writeFileSync(file,JSON.stringify(d,null,2)+'\n');
}
