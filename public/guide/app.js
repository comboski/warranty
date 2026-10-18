const q = (question, answers, correct, hint) => ({question, answers, correct, hint});
const p = (text, image) => ({text, image});

const lessons = {
  cs: [
    {
      eyebrow:"01 · PŘEPÍNÁNÍ REŽIMŮ", title:"Sněžnice, nebo mini-lyže?", duration:"0:00–0:56:21", visual:"video-snowshoe",
      intro:"V první kapitole si ukážeme celé přepnutí Combo Ski mezi režimem sněžnice pro chůzi do kopce a režimem mini-lyže pro jízdu dolů.",
      points:[p("V režimu sněžnice vždy směřuje dopředu strana s kovovou obručí a kovovými hroty. Plastová špička nikdy není vepředu.","supplied-diagram snowshoe-correct"),p("Toto je špatně: plastová špička nesmí v režimu sněžnice směřovat dopředu.","supplied-diagram snowshoe-wrong"),p("V režimu sněžnice je na prostředním čepu zajištěna pouze přední klíčová dírka, takže se pata může mírně pohybovat.","supplied-diagram snowshoe-pin"),p("<strong>V režimu mini-lyže je vázání upevněné vpředu i vzadu.</strong>","supplied-diagram mini-ski-secured"),p("Nejprve nasadíme zadní „klíčovou dírku“.","supplied-diagram mini-ski-step-one"),p("Poté nasadíme přední „klíčovou dírku“ s tlačítkem.","supplied-diagram mini-ski-step-two")],
      questions:[q("Která strana Combo Ski směřuje v režimu sněžnice dopředu?",["Strana s plastovou špičkou","Strana s kovovou obručí a hroty","Na směru nezáleží"],1,"Dopředu vždy směřuje strana s kovovou obručí a kovovými hroty."),q("Co je v režimu sněžnice zajištěno na prostředním čepu?",["Pouze přední klíčová dírka","Pouze zadní klíčová dírka","Obě klíčové dírky"],0,"Na prostředním čepu je zajištěna pouze přední klíčová dírka."),q("V jakém pořadí upevníte vázání v režimu mini-lyže?",["Nejprve přední, potom zadní","Nejprve zadní, potom přední s tlačítkem","Na pořadí nezáleží"],1,"Nejprve nasaďte zadní klíčovou dírku, potom přední klíčovou dírku s tlačítkem.")]
    },
    {
      eyebrow:"02 · SPRÁVNÉ NASAZENÍ", title:"Nastavení a nasazení na nohu", duration:"1:27", visual:"video-fit",
      intro:"Teď nastavíme správnou velikost, rozeznáme levou a pravou stranu a Combo Ski bezpečně upevníme na botu.",
      points:[p("Vždy zkontrolujte, zda máte levé vázání na levé noze a pravé vázání na pravé noze. Označení L a R najdete na pásku se suchým zipem.","supplied-diagram setup-one"),p("Pomocí patního textilního pásku nastavte pozici boty tak, aby vaše pata byla zároveň s vyznačenými pozicemi S, M a L podle přiložené tabulky velikostí.","supplied-diagram setup-two"),p("Postup opakujeme na druhé straně vázání.","supplied-diagram setup-three"),p("Oba pásky dotáhneme opravdu pevně, jako by byla Combo Ski pevnou součástí boty.","supplied-diagram setup-four")],
      questions:[q("Jak poznáte levou a pravou Combo Ski?",["Podle barvy","Podle označení L a R na pásku se suchým zipem","Jsou zaměnitelné"],1,"Označení L a R najdete na pásku se suchým zipem."),q("Co je důležité správně nastavit podle velikosti boty?",["Patní textilní pásek","Pouze přední ráčnový pásek","Není potřeba nic nastavovat"],0,"Správně nastavte patní textilní pásek, aby pata odpovídala vyznačené velikosti."),q("Jak mají být pásky před jízdou?",["Volné","Pevně dotažené","Stačí dotáhnout jeden"],1,"Pro bezpečné ovládání dotáhněte oba pásky.")]
    },
    {
      eyebrow:"03 · PRVNÍ JÍZDA", title:"Postoj, zatáčení a brzdění", duration:"01:31", visual:"video-ski",
      intro:"Začněte na rovince a poté pokračujte na mírném svahu. Nejprve si osvojte stabilní postoj, zatáčení a bezpečné brzdění.",
      points:[p("Doporučujeme použít lyžařskou helmu.","supplied-diagram downhill-helmet"),p("Držte nohy u sebe, kolena pokrčená. Je nutné držet předozadní rovnováhu jako na klasických nebo kolečkových bruslích. Nezaklánějte se dozadu.",""),p("Zatáčejte jako na klasických lyžích nebo přesunutím jedné nohy před druhou.","supplied-diagram downhill-turn"),p("Brzděte skluzem přes hranu; v nouzi zvolte kontrolovaný pád.","supplied-diagram downhill-brake")],
      questions:[q("Kde je nejlepší začít?",["Na jakékoliv sjezdovce","Na rovince a poté na mírném svahu","Na zledovatělém sněhu"],1,"Začněte na rovince a poté pokračujte na mírném svahu."),q("Jaký je základní postoj?",["Nohy u sebe a kolena pokrčená","Nohy široce a kolena propnutá","Váha výrazně vzadu"],0,"Držte nohy u sebe, kolena pokrčená a udržujte předozadní rovnováhu."),q("Jak se doporučuje brzdit?",["Skluzem přes hranu jako na klasických bruslích","Plužením","Přenesením váhy dozadu"],0,"Brzděte skluzem přes hranu jako na klasických bruslích.")]
    },
    {
      eyebrow:"04 · TRÉNINK", title:"Povrch, obuv a jistota", duration:"00:48", visual:"video-safety",
      intro:"Combo Ski se chovají podle povrchu. Trénujte postupně a podmínky vždy přizpůsobte svým schopnostem.",
      points:[p("Vyhněte se zledovatělému nebo zmrzlému sněhu a kamenům.","supplied-diagram conditions-surface"),p("Pevná zimní obuv s vysokým kotníkem zlepšuje oporu a ovládání.","supplied-diagram conditions-boot"),p("Nejdřív trénujte rovnováhu, potom přejděte na bruslení a mírné sjezdy.","")],
      questions:[q("Kterému povrchu se máte vyhnout?",["Normálnímu měkkému sněhu","Zledovatělému nebo zmrzlému sněhu","Mírnému svahu"],1,"Vyhněte se zledovatělému nebo zmrzlému sněhu a kamenům."),q("Jaká obuv je vhodná?",["Pevná zimní obuv s vysokým kotníkem","Nízké trekové boty","Tenisky"],0,"Použijte pevnou zimní obuv s vysokým kotníkem."),q("Co trénovat jako první?",["Maximální rychlost","Sjezdy","Rovnováhu a základní postoj"],2,"Nejprve trénujte rovnováhu a základní postoj.")]
    },
    {
      eyebrow:"05 · CESTA NAHORU", title:"Zpět do režimu sněžnice a vzhůru", duration:"01:27", visual:"video-snowshoe",
      intro:"Před výšlapem připravte čisté spojovací části, nastavte vázání a zkontrolujte správné upevnění v režimu sněžnice.",
      points:[p("Vyčistěte klíčové dírky a čepy od sněhu nebo ledu, například vyfouknutím.","supplied-diagram snowshoe-clear"),p("Vázání odjistíte nebo zajistíte stisknutím tlačítka a vysunutím klíčové dírky z čepu dolů.","supplied-diagram snowshoe-release"),p("Otočte Combo Ski skluznicí vzhůru a nasaďte vázání na prostřední čep.","supplied-diagram snowshoe-base"),p("Přední klíčovou dírku upevněte na prostřední čep.","supplied-diagram snowshoe-pin"),p("Patu ponechte volnou pro přirozenější krok.","supplied-diagram snowshoe-correct"),p("Pomocí patního textilního pásku nastavte botu tak, aby byla její špička zároveň se špičkou Combo Ski.","supplied-diagram snowshoe-align"),p("V režimu sněžnice utahujte pásky v pořadí: nejprve přední, potom zadní.","supplied-diagram snowshoe-tighten")],
      questions:[q("Co uděláte, pokud jsou klíčové dírky nebo čepy zanesené sněhem či ledem?",["Vyčistím je, například vyfouknutím","Připevním vázání silou","Nechám je zanesené"],0,"Klíčové dírky a čepy nejprve vyčistěte, například vyfouknutím."),q("V jakém pořadí dotahujete pásky v režimu sněžnice?",["Nejprve zadní, potom přední","Nejprve přední, potom zadní","Na pořadí nezáleží"],1,"V režimu sněžnice utáhněte nejprve přední a potom zadní pásek."),q("Jak má být nastavena špička boty?",["Zároveň se špičkou Combo Ski","Výrazně za špičkou Combo Ski","Mimo osu Combo Ski"],0,"Špička boty má být zároveň se špičkou Combo Ski."),q("Kterou klíčovou dírku upevníte na prostřední čep?",["Přední","Zadní","Obě"],0,"Na prostřední čep upevněte přední klíčovou dírku.")]
    },
    {
      eyebrow:"06 · PÉČE", title:"Po jízdě vysušit a zkontrolovat", duration:"00:25", visual:"video-care",
      intro:"Správné sušení, kontrola a uložení chrání skluznice i spojovací části a prodlužují životnost výrobku.",
      points:[p("Po každém použití nechte Combo Ski úplně vyschnout. Neukládejte je mokré.","supplied-diagram care-dry"),p("Při přenášení nebo uložení dejte skluznice k sobě.","supplied-diagram care-pack"),p("Pravidelně kontrolujte dotažení šroubových spojů.",""),p("Poškozený díl nepoužívejte a kontaktujte servis.","")],
      questions:[q("Co uděláte po návratu?",["Nechám výrobek mokrý v tašce","Nechám ho úplně vyschnout","Dám ho k topení na maximum"],1,"Po použití nechte Combo Ski přirozeně vyschnout."),q("Jak je uložíte do batohu?",["Skluznicemi k sobě","Skluznicemi ven","Je to jedno"],0,"Skluznice dejte k sobě, aby se chránily."),q("Co s poškozenou částí?",["Pokračovat v jízdě","Provizorně přelepit a jet","Přestat používat a kontaktovat servis na info@comboski.cz"],2,"Poškozený výrobek dál nepoužívejte a kontaktujte servis na info@comboski.cz.")]
    }
  ]
};

lessons.en = lessons.cs.map((lesson, index) => ({
  ...lesson,
  eyebrow:["01 · SWITCHING MODES","02 · CORRECT FIT","03 · FIRST RUN","04 · PRACTICE","05 · UPHILL","06 · CARE"][index],
  title:["Snowshoes or skis?","Adjustment and correct fit","Stance, turning and braking","Surface, footwear and control","Back to snowshoes and uphill","Dry and inspect after use"][index],
  intro:["This chapter shows the complete switch between snowshoe mode for walking uphill and mini-ski mode for riding down.","Set the correct size, identify left and right, and secure Combo Ski safely to your boots.","Start on flat ground, then move to a gentle slope. First learn a stable stance, turning and safe braking.","Behaviour changes with the surface. Practise gradually and match the conditions to your ability.","Change mode on level ground and make sure the heel remains free.","Drying, inspection and correct storage protect the bases and extend product life."][index],
  points: [
    [p("In snowshoe mode, the side with the metal rim and metal spikes always points forward. The plastic tip must never be at the front.","supplied-diagram snowshoe-correct"),p("This is incorrect: the plastic tip must not point forward in snowshoe mode.","supplied-diagram snowshoe-wrong"),p("In snowshoe mode, only the front ‘keyhole’ is secured on the middle pin, allowing the heel to move freely.","supplied-diagram snowshoe-pin"),p("<strong>In mini-ski mode, the binding is secured at both the front and rear.</strong>","supplied-diagram mini-ski-secured"),p("First attach the rear ‘keyhole’.","supplied-diagram mini-ski-step-one"),p("Then attach the front ‘keyhole’ with the button.","supplied-diagram mini-ski-step-two")],
    [p("Always check that the left binding is on the left foot and the right binding on the right foot. The L and R markings are on the Velcro strap.","supplied-diagram setup-one"),p("Use the heel textile strap to position the boot so the heel aligns with the marked positions S, M or L according to the size chart.","supplied-diagram setup-two"),p("Repeat the process on the other side of the binding.","supplied-diagram setup-three"),p("Tighten both straps securely, as if Combo Ski were a solid part of the boot.","supplied-diagram setup-four")],
    [p("We recommend wearing a ski helmet.","supplied-diagram downhill-helmet"),p("Keep your feet together and your knees bent. Maintain fore-and-aft balance as on traditional or inline skates. Do not lean backwards.",""),p("Turn as on traditional skis or by moving one foot in front of the other.","supplied-diagram downhill-turn"),p("Brake by sliding across the edge; use a controlled fall if necessary.","supplied-diagram downhill-brake")],
    [p("Avoid icy or frozen snow and rocks.","supplied-diagram conditions-surface"),p("Sturdy high-ankle winter boots improve support and control.","supplied-diagram conditions-boot"),p("Practise balance first, then progress to skating and gentle descents.","")],
    [p("Clear snow or ice from the keyholes and pins, for example by blowing it out.","supplied-diagram snowshoe-clear"),p("Release or secure the binding by pressing the button and sliding the keyhole down from the pin.","supplied-diagram snowshoe-release"),p("Turn Combo Ski base-up and place the binding on the middle pin.","supplied-diagram snowshoe-base"),p("Attach the front keyhole to the middle pin.","supplied-diagram snowshoe-pin"),p("Keep the heel free for a more natural step.","supplied-diagram snowshoe-correct"),p("Use the heel textile strap to align the boot tip with the tip of Combo Ski.","supplied-diagram snowshoe-align"),p("In snowshoe mode, tighten the front strap first, then the rear strap.","supplied-diagram snowshoe-tighten")],
    [p("Let Combo Ski dry completely after every use. Do not store them wet.","supplied-diagram care-dry"),p("Pack or store them with the sliding surfaces together.","supplied-diagram care-pack"),p("Check screw connections regularly.",""),p("Stop using damaged parts and contact service.","")]
  ][index],
  questions: [
    [q("Which side points forward in snowshoe mode?",["The plastic-tip side","The side with the metal rim and spikes","Either side"],1,"The side with the metal rim and metal spikes always points forward."),q("What is secured on the middle pin in snowshoe mode?",["Only the front keyhole","Only the rear keyhole","Both keyholes"],0,"Only the front keyhole is secured on the middle pin."),q("In which order is the binding attached in mini-ski mode?",["Front first, then rear","Rear first, then the front keyhole with the button","The order does not matter"],1,"Attach the rear keyhole first, then the front keyhole with the button.")],
    [q("How do you identify left and right?",["By colour","By the L and R markings on the Velcro strap","They are interchangeable"],1,"The L and R markings are on the Velcro strap."),q("What must be adjusted correctly for the boot size?",["The heel textile strap","Only the front ratchet strap","Nothing needs adjustment"],0,"Adjust the heel textile strap so the heel matches the marked size."),q("How should the straps be?",["Loose","Both firmly tightened","Only one tightened"],1,"Tighten both straps firmly.")],
    [q("Where should you start?",["On any ski slope","On flat ground, then on a gentle slope","On icy snow"],1,"Start on flat ground, then move to a gentle slope."),q("What is the basic stance?",["Feet together and knees bent","Feet wide and knees straight","Weight far back"],0,"Keep your feet together, bend your knees and maintain fore-and-aft balance."),q("How is braking recommended?",["Slide across the edge as on traditional skates","Use a snowplough","Shift your weight backwards"],0,"Brake by sliding across the edge as on traditional skates.")],
    [q("What surface should you avoid?",["Normal soft snow","Icy or frozen snow","A gentle slope"],1,"Avoid icy or frozen snow and rocks."),q("What footwear is suitable?",["Sturdy high-ankle winter boots","Low hiking shoes","Trainers"],0,"Use sturdy high-ankle winter boots."),q("What should you practise first?",["Top speed","Descents","Balance and basic stance"],2,"Practise balance and basic stance first.")],
    [q("What should you do if the keyholes or pins contain snow or ice?",["Clear them, for example by blowing it out","Force the binding into place","Leave them blocked"],0,"Clear the keyholes and pins first, for example by blowing out the snow."),q("In what order do you tighten the straps in snowshoe mode?",["Rear first, then front","Front first, then rear","The order does not matter"],1,"In snowshoe mode, tighten the front strap first, then the rear."),q("How should the boot tip be positioned?",["Aligned with the tip of Combo Ski","Far behind the Combo Ski tip","Outside the Combo Ski centre line"],0,"Align the boot tip with the tip of Combo Ski."),q("Which keyhole is attached to the middle pin?",["Front","Rear","Both"],0,"Attach the front keyhole to the middle pin.")],
    [q("What should you do after use?",["Leave them wet","Let them dry completely","Use maximum direct heat"],1,"Let them dry completely."),q("How should they be packed?",["Sliding surfaces together","Sliding surfaces outward","Either way"],0,"Pack sliding surfaces together."),q("What if a part is damaged?",["Keep riding","Tape it and ride","Stop using it and contact service at info@comboski.cz"],2,"Do not use a damaged product; contact service at info@comboski.cz.")]
  ][index]
}));

for (const language of ["cs", "en"]) {
  const cs = language === "cs", chapters = lessons[language];
  chapters[0].questions[1].answers[0] = cs
    ? "Pouze přední klíčová dírka, aby se pata mohla mírně pohybovat"
    : "Only the front keyhole, so the heel can move slightly";
  chapters[4].questions[2].question = cs
    ? "Jak má být nastavena špička boty v režimu sněžnice?"
    : "How should the boot tip be positioned in snowshoe mode?";
  chapters[4].questions[3] = structuredClone(chapters[0].questions[1]);
  chapters[5].questions[1].answers[0] = cs
    ? "Tak, aby se nepoškodila skluznice o kovové zuby"
    : "So the metal teeth cannot damage the sliding surface";
  chapters[5].points[1].text = cs
    ? "Při přenášení nebo uložení do batohu umístěte Combo Ski tak, aby se skluznice nepoškodila o kovové zuby."
    : "When carrying or packing Combo Ski in a backpack, position them so the metal teeth cannot damage the sliding surface.";
  chapters[5].questions[1].hint = cs
    ? "Umístěte Combo Ski tak, aby se skluznice nepoškodila o kovové zuby."
    : "Position Combo Ski so the metal teeth cannot damage the sliding surface.";
}

lessons.cs[0].intro += " Upevňovací otvory ve vázání mají tvar klíčové dírky. Přední otvor je v přední části vázání, zadní v zadní části vázání — v obou režimech.";
lessons.en[0].title = "Snowshoes or mini-skis?";
lessons.en[0].intro += " The binding has keyhole-shaped mounting slots. The front slot is at the front of the binding and the rear slot at the back of the binding, in both modes.";
lessons.cs[0].points[2].text = "V režimu sněžnice upevněte přední otvor ve tvaru klíčové dírky (v přední části vázání) na prostřední čep na obou stranách. Přední čep zůstává volný, takže se pata může mírně pohybovat.";
lessons.en[0].points[2].text = "In snowshoe mode, attach the front keyhole-shaped mounting slot (at the front of the binding) to the middle pin on each side. The front pin remains unused, allowing the heel to move slightly.";
lessons.en[0].points[4].text = "First attach the rear mounting slot, at the back of the binding.";
lessons.en[0].points[5].text = "Then attach the front mounting slot with the release button, at the front of the binding.";
lessons.cs[0].points[4].text = "Nejprve nasaďte zadní otvor ve tvaru klíčové dírky, v zadní části vázání.";
lessons.cs[0].points[5].text = "Poté nasaďte přední otvor ve tvaru klíčové dírky s tlačítkem, v přední části vázání.";
lessons.cs[0].questions[1].answers[0] = "Pouze přední otvor ve tvaru klíčové dírky (v přední části vázání), aby se pata mohla mírně pohybovat";
lessons.en[0].questions[1].answers = ["Only the front mounting slot (at the front of the binding), so the heel can move slightly", "Only the rear mounting slot (at the back of the binding)", "Both mounting slots"];
lessons.en[0].questions[2].answers = ["Front mounting slot first, then rear", "Rear mounting slot first, then the front slot with the release button", "The order does not matter"];
for(const language of ["cs","en"]){
  const cs=language==="cs", chapters=lessons[language];
  chapters[1].intro += cs
    ? " Patní textilní pásek nastavuje velikost a polohu boty. Přední ráčnový pásek vede přes špičku boty, zadní ráčnový pásek přes nárt. Horní pásek se suchým zipem obepíná holeň."
    : " The textile heel strap sets the boot size and position. The front ratchet strap goes over the boot toe and the rear ratchet strap over the instep. The upper hook-and-loop strap wraps around the shin.";
  chapters[1].questions[2].question=cs?"Jak dotáhnete přední a zadní ráčnový pásek před jízdou?":"How should you tighten the front and rear ratchet straps before riding?";
  chapters[1].questions[2].answers=cs?["Oba nechám volné","Oba pevně, jako by Combo Ski byla pevnou součástí boty","Stačí dotáhnout pouze přední pásek"]:["Leave both loose","Tighten both firmly, as if Combo Ski were a solid part of the boot","Tightening only the front strap is enough"];
  chapters[4].points[3].text=cs?"Přední otvor ve tvaru klíčové dírky (v přední části vázání) upevněte na prostřední čep na obou stranách.":"Attach the front keyhole-shaped mounting slot (at the front of the binding) to the middle pin on each side.";
  chapters[4].points[6].text=cs?"Nejprve dotáhněte přední ráčnový pásek přes špičku boty, potom zadní ráčnový pásek přes nárt a nakonec horní pásek se suchým zipem kolem holeně.":"First tighten the front ratchet strap over the boot toe, then the rear ratchet strap over the instep, and finally the upper hook-and-loop strap around the shin.";
  chapters[4].questions[1].question=cs?"V jakém pořadí dotahujete pásky v režimu sněžnice?":"In what order should you tighten the straps in snowshoe mode?";
  chapters[4].questions[1].answers=cs?["Nejprve zadní ráčnový přes nárt, pak přední přes špičku","Přední ráčnový přes špičku, zadní přes nárt a nakonec horní se suchým zipem","Na pořadí nezáleží"]:["Rear ratchet strap over the instep first, then front over the toe","Front ratchet strap over the toe, rear over the instep, then the upper hook-and-loop strap","The order does not matter"];
  chapters[4].questions[3]=structuredClone(chapters[0].questions[1]);
}

// Plain English: explain the parts once, then use the same short names throughout.
lessons.en[1].intro = "Set the size and check the L and R marks before putting Combo Ski on. The fabric heel strap adjusts the size and the position of the boot. The front ratchet strap goes over the toes. The rear ratchet strap goes over the top of the foot. The upper Velcro strap goes around the shin.";
lessons.en[2].points[1].text = "Keep your feet together and your knees bent. Balance forwards and backwards, as on ice skates or inline skates. Do not lean back.";
lessons.en[2].points[2].text = "Turn as on normal skis, or move one foot slightly in front of the other.";
lessons.en[2].points[3].text = "To brake, turn both mini-skis sideways and slide on their edges, as on ice skates. If you cannot stop, use a controlled fall.";
lessons.en[2].questions[1].hint = "Keep your feet together and your knees bent. Do not lean back.";
lessons.en[2].questions[2].question = "How should you brake?";
lessons.en[2].questions[2].answers[0] = "Turn both mini-skis sideways and slide on their edges, as on ice skates";
lessons.en[2].questions[2].hint = "Turn both mini-skis sideways and slide on their edges.";
lessons.en[4].points[6].text = "Tighten the straps in this order: first the front strap over the toes, then the rear strap over the top of the foot, and finally the upper Velcro strap around the shin.";
lessons.en[4].questions[1].answers = ["Rear strap first, then front strap", "Front strap over the toes, rear strap over the top of the foot, then upper Velcro strap", "The order does not matter"];
lessons.en[4].questions[2].question = "Where should the boot toe be in snowshoe mode?";
lessons.cs[4].points[1].text = "Vázání uvolníte stisknutím tlačítka a vysunutím upevňovacího otvoru z čepu směrem dolů.";
lessons.en[4].points[1].text = "To release the binding, press the button and slide the mounting slot down off the pin.";

const copy = {
  cs:{welcomeEyebrow:"GARANČNÍ PROHLÍDKA COMBO SKI",welcomeTitle:"Než vyrazíte na sníh",welcomeLead:"<strong>Dokončete tohoto krátkého průvodce pro splnění pravidel záruky.</strong> Ukážeme vám správné nastavení, bezpečné používání a péči o Combo Ski.",welcomeRequired:"<strong>Průvodce je potřeba dokončit.</strong><br>Na konci zadáte e-mail a zaznamenáme splnění garanční prohlídky.",welcomeReward:"<strong>Můžete získat 3 roky záruky</strong><br><small>Po dokončení průvodce můžete získat třetí rok záruky.</small>",chooseLanguage:"Vyberte jazyk",durationNote:"Zabere přibližně 4 minuty",startGuide:"Začít garanční prohlídku",testSkip:"TEST: Přeskočit na registraci",prototype:"Garanční prohlídka Combo Ski",videoHeading:"Nejdřív se podívejte na video",manualLink:"Otevřít původní obrázkový návod",quizTitle:"Kontrolní otázky",quizCount:"3 otázky",completeEyebrow:"PROHLÍDKA DOKONČENA",completeTitle:"Znáte základy bezpečného používání",completeLead:"Teď můžete výrobek zaregistrovat. E-mail použijeme pro evidenci a potvrzení registrace.",chooseRegistration:"Vyberte typ registrace",standardTitle:"Standardní registrace",standardText:"Bez odběru newsletteru. Vaše zákonná práva tím nejsou dotčena.",extendedTitle:"3letá obchodní záruka",extendedText:"Zveřejněte příspěvek s viditelným produktem, označte @combo_ski na Instagramu nebo @Comboski na Facebooku a udělte marketingový souhlas. Získáte tím třetí rok záruky.",socialProofLabel:"Odkaz na příspěvek nebo název IG/FB účtu <b aria-label=povinné>*</b>",socialProofHelp:"Stačí jedna z možností. Použijeme ji pouze ke spárování příspěvku s registrací.",socialTagCallout:"<strong>V příspěvku nezapomeňte označit náš profil:</strong><a href=https://www.instagram.com/combo_ski/ target=_blank rel=noopener>Instagram @combo_ski</a><span>nebo</span><a href=https://www.facebook.com/Comboski/ target=_blank rel=noopener>Facebook @Comboski</a>",newsletterConsent:"Přihlašuji se k odběru novinek, praktických tipů a nabídek Combo Ski. Souhlas mohu kdykoliv odvolat.",socialPostConsent:"Potvrzuji, že jsem zveřejnil/a příspěvek s viditelným produktem a označil/a <strong>@combo_ski</strong> na Instagramu nebo <strong>@Comboski</strong> na Facebooku.",legalNote:"Registrace ani absolvování této prohlídky neomezuje zákonná práva z vadného plnění. Odesláním formuláře potvrzujete, že uvedené údaje mohou být použity pro evidenci záruky. Více najdete v <a href=https://www.comboski.cz/podminky-ochrany-osobnich-udaju/ target=_blank rel=noopener>podmínkách ochrany osobních údajů</a>.",submit:"Dokončit registraci",certificate:"Potvrzení registrace",restart:"Projít znovu",back:"Zpět",check:"Zkontrolovat odpovědi",next:"Pokračovat",step:"Krok",of:"z",correct:"Všechny odpovědi jsou správně. Můžete pokračovat.",answerRequired:"Odpovězte na všechny tři otázky.",formEmail:"Zadejte platný e-mail.",formChoice:"Vyberte typ registrace.",formConsents:"Pro tříletou záruku vyplňte odkaz nebo název účtu, potvrďte zveřejnění příspěvku a udělte marketingový souhlas.",formSaving:"Ukládám registraci…",formSaveError:"Registraci se nepodařilo uložit. Zkuste to prosím znovu.",successTitle:"Registrace byla uložena",standardSuccess:"Dokončili jste standardní registraci výrobku.",extendedSuccess:"Dokončili jste registraci tříleté obchodní záruky. Příspěvek spárujeme podle uvedeného odkazu nebo názvu účtu.",standardCertificate:"Standardní registrace",extendedCertificate:"3letá obchodní záruka"},
  en:{welcomeEyebrow:"COMBO SKI WARRANTY CHECK",welcomeTitle:"Before you head out into the snow",welcomeLead:"<strong>Complete this short guide to meet the warranty rules.</strong> We will show you the correct setup, safe use and care of Combo Ski.",welcomeRequired:"<strong>The guide must be completed.</strong><br>At the end, enter your email to record completion of the warranty check.",welcomeReward:"<strong>You can receive a 3-year warranty</strong><br><small>After completing the guide, you may receive a third warranty year.</small>",chooseLanguage:"Choose your language",durationNote:"Takes approximately 4 minutes",startGuide:"Start warranty check",testSkip:"TEST: Skip to registration",prototype:"Combo Ski warranty check",videoHeading:"First, watch the video",manualLink:"Open the original illustrated manual",quizTitle:"Check questions",quizCount:"3 questions",completeEyebrow:"CHECK COMPLETED",completeTitle:"You know the basics of safe use",completeLead:"You can now register your product. We use your email to record and confirm registration.",chooseRegistration:"Choose registration type",standardTitle:"Standard registration",standardText:"No newsletter. Your statutory rights are not affected.",extendedTitle:"3-year commercial warranty",extendedText:"Publish a post showing the product, tag @combo_ski on Instagram or @Comboski on Facebook, and give marketing consent to receive the third warranty year.",socialProofLabel:"Post link or IG/FB account name <b aria-label=required>*</b>",socialProofHelp:"Either option is enough. We will use it only to match the post with your registration.",socialTagCallout:"<strong>Remember to tag our profile in the post:</strong><a href=https://www.instagram.com/combo_ski/ target=_blank rel=noopener>Instagram @combo_ski</a><span>or</span><a href=https://www.facebook.com/Comboski/ target=_blank rel=noopener>Facebook @Comboski</a>",newsletterConsent:"I subscribe to Combo Ski news, practical tips and offers. I may withdraw my consent at any time.",socialPostConsent:"I confirm that I have published a post showing the product and tagged <strong>@combo_ski</strong> on Instagram or <strong>@Comboski</strong> on Facebook.",legalNote:"Registration and this check do not limit statutory rights relating to defective goods. By submitting, you confirm the details may be used to record the warranty. Read our <a href=https://www.comboski.cz/podminky-ochrany-osobnich-udaju/ target=_blank rel=noopener>privacy policy</a>.",submit:"Complete registration",certificate:"Registration confirmation",restart:"Start again",back:"Back",check:"Check answers",next:"Continue",step:"Step",of:"of",correct:"All answers are correct. You can continue.",answerRequired:"Answer all three questions.",formEmail:"Enter a valid email address.",formChoice:"Choose a registration type.",formConsents:"For the three-year warranty, enter the post link or account name, confirm that you published the post, and give marketing consent.",formSaving:"Saving registration…",formSaveError:"We could not save the registration. Please try again.",successTitle:"Registration saved",standardSuccess:"You have completed standard product registration.",extendedSuccess:"You have completed registration for the three-year commercial warranty. We will match the post using the link or account name provided.",standardCertificate:"Standard registration",extendedCertificate:"3-year commercial warranty"}
};

Object.assign(copy.cs,{
  standardText:"Evidujeme dokončení garanční prohlídky. Vaše zákonná práva tím nejsou dotčena.",
  extendedText:"Sdílejte příspěvek s viditelným produktem a označte náš oficiální profil. Po ověření získáte třetí rok záruky.",
  socialOfferEyebrow:"JAK ZÍSKAT TŘETÍ ROK ZÁRUKY",socialOfferTitle:"Ukažte Combo Ski v akci",socialOfferLead:"Zveřejněte vlastní příspěvek, ve kterém je produkt dobře vidět, a označte jeden z našich oficiálních profilů.",
  socialStepOne:"Vyfoťte nebo natočte Combo Ski",socialStepTwo:"Zveřejněte příspěvek",socialStepThree:"Označte náš profil",officialProfiles:"Oficiální profily Combo Ski",openProfile:"Otevřít profil ↗",
  newsletterRequired:"Pro získání 3leté obchodní záruky je potřeba zaškrtnout souhlas s odběrem novinek.",formSocialProof:"Vyplňte odkaz na příspěvek nebo název IG/FB účtu.",formSocialPost:"Potvrďte zveřejnění příspěvku a označení našeho profilu."
});
Object.assign(copy.en,{
  standardText:"We record completion of the warranty check. Your statutory rights are not affected.",
  extendedText:"Share a post showing the product and tag our official profile. After verification, you receive the third warranty year.",
  socialOfferEyebrow:"HOW TO RECEIVE THE THIRD WARRANTY YEAR",socialOfferTitle:"Show Combo Ski in action",socialOfferLead:"Publish your own post in which the product is clearly visible and tag one of our official profiles.",
  socialStepOne:"Photograph or film Combo Ski",socialStepTwo:"Publish the post",socialStepThree:"Tag our profile",officialProfiles:"Official Combo Ski profiles",openProfile:"Open profile ↗",
  newsletterRequired:"To receive the 3-year commercial warranty, please select the consent to receive news.",formSocialProof:"Enter the post link or your IG/FB account name.",formSocialPost:"Confirm that you published the post and tagged our profile."
});
Object.assign(copy.cs,{
  successEyebrow:"DĚKUJEME",communityEyebrow:"KOMUNITA COMBO SKI",communityTitle:"Přidejte se k ostatním nadšencům",communityText:"Sdílejte zážitky, inspirujte se, získejte tipy a buďte u novinek jako první ve facebookové skupině <strong>Combo Ski Users</strong>.",communityButton:"Připojit se ke skupině na Facebooku ↗",
  completeLead:"Teď můžete výrobek zaregistrovat. E-mail použijeme pro evidenci registrace.",standardTitle:"Registrace standardní 2leté záruky",standardText:"Zaregistrujte dokončení garanční prohlídky ke standardní 2leté záruce.",
  extendedTitle:"Prodloužená záruka na 3 roky",extendedCertificate:"Registrace k prodloužené záruce na 3 roky",newsletterRequired:"Pro prodloužení záruky na 3 roky je potřeba zaškrtnout souhlas s odběrem novinek.",
  newsletterOfferTitle:"Buďte o krok napřed",newsletterOfferLead:"Praktické tipy pro bezpečnější a zábavnější jízdu, návody, novinky a výhodné nabídky Combo Ski přímo do e-mailu.",standardNewsletterConsent:"Chci dostávat tipy, návody, novinky a nabídky Combo Ski. Souhlas mohu kdykoliv odvolat.",newsletterConsent:"Přihlašuji se k odběru novinek, praktických tipů a nabídek Combo Ski. Souhlas mohu kdykoliv odvolat.",
  socialProofLabel:"Název vašeho IG/FB účtu <b aria-label=povinné>*</b>",socialProofHelp:"Podle názvu účtu spárujeme označení s vaší registrací.",pairingNote:"<strong>Co se stane potom?</strong> Jakmile se označený příspěvek nebo story objeví, ověříme jej a spárujeme s registrací podle názvu účtu.",socialPostConsent:"Potvrzuji, že jsem zveřejnil/a nebo zveřejním příspěvek či story s viditelným produktem a označím <strong>@combo_ski</strong> na Instagramu nebo <strong>@Comboski</strong> na Facebooku.",formSocialProof:"Zadejte název vašeho IG nebo FB účtu.",formSocialPost:"Potvrďte, že jste zveřejnil/a nebo zveřejníte příspěvek či story a označíte náš profil.",
  extendedText:"Ukažte Combo Ski přátelům a získejte 3 roky záruky.",
  programEyebrow:"PRODLOUŽENÁ ZÁRUKA COMBO SKI",programTitle:"Prodlužte si záruku ze 2 na 3 roky",programLead:"Vyplňte údaje níže. E-mail použijeme pro evidenci registrace a spárování s příspěvkem nebo story.",programTiming:"<strong>Nemusíte čekat na hory.</strong> Combo Ski můžete vyfotit už při rozbalování nebo je ukázat v akci.",programExampleCaption:"Ukázka příspěvku nebo story: produkt je dobře vidět a profil Combo Ski je označený.",programTermsTitle:"Podmínky prodloužení záruky",programTermProduct:"Na fotografii nebo videu musí být produkt Combo Ski zřetelně viditelný.",programTermTag:"V příspěvku nebo story označte <strong>@combo_ski</strong> na Instagramu nebo <strong>@Comboski</strong> na Facebooku.",
  extendedSuccess:"Teď budeme čekat na váš příspěvek nebo story s označením @combo_ski na Instagramu nebo @Comboski na Facebooku. Pokud jste příspěvek již přidali, prosíme o strpení, než ho spárujeme s vaší registrací."
});
Object.assign(copy.en,{
  successEyebrow:"THANK YOU",communityEyebrow:"COMBO SKI COMMUNITY",communityTitle:"Join other Combo Ski enthusiasts",communityText:"Share your adventures, find inspiration, get practical tips and be first to hear the news in the <strong>Combo Ski Users</strong> Facebook group.",communityButton:"Join the Facebook group ↗",
  completeLead:"You can now register your product. We use your email to record the registration.",standardTitle:"Standard 2-year warranty registration",standardText:"Register completion of the warranty check for the standard 2-year warranty.",
  extendedTitle:"Extended 3-year warranty",extendedCertificate:"Registration for the extended 3-year warranty",newsletterRequired:"To extend the warranty to 3 years, please select the consent to receive news.",
  newsletterOfferTitle:"Stay one step ahead",newsletterOfferLead:"Practical tips for safer and more enjoyable rides, how-to guides, news and special Combo Ski offers delivered to your inbox.",standardNewsletterConsent:"I would like to receive Combo Ski tips, guides, news and offers. I can withdraw my consent at any time.",newsletterConsent:"I subscribe to Combo Ski news, practical tips and offers. I may withdraw my consent at any time.",
  socialProofLabel:"Your IG/FB account name <b aria-label=required>*</b>",socialProofHelp:"We use the account name to match the tag with your registration.",pairingNote:"<strong>What happens next?</strong> Once the tagged post or story appears, we will verify it and match it with the registration using the account name.",socialPostConsent:"I confirm that I have published or will publish a post or story showing the product and will tag <strong>@combo_ski</strong> on Instagram or <strong>@Comboski</strong> on Facebook.",formSocialProof:"Enter your IG or FB account name.",formSocialPost:"Confirm that you have published or will publish a post or story and will tag our profile.",
  extendedText:"Show Combo Ski to your friends and receive a 3-year warranty.",
  programEyebrow:"COMBO SKI EXTENDED WARRANTY",programTitle:"Extend your warranty from 2 to 3 years",programLead:"Complete the details below. We use your email to record the registration and match it with the post or story.",programTiming:"<strong>You do not need to wait for a mountain trip.</strong> Photograph Combo Ski while unboxing them or show them in action.",programExampleCaption:"Example post or story: the product is clearly visible and the Combo Ski profile is tagged.",programTermsTitle:"Extended warranty terms",programTermProduct:"The Combo Ski product must be clearly visible in the photo or video.",programTermTag:"Tag <strong>@combo_ski</strong> on Instagram or <strong>@Comboski</strong> on Facebook in the post or story.",
  extendedSuccess:"We will now wait for your post or story tagging @combo_ski on Instagram or @Comboski on Facebook. If you have already shared it, please allow us some time to match it with your registration."
});

Object.assign(copy.cs, {
  programTitle:"Sdílejte Combo Ski na Instagramu nebo Facebooku a získejte 3 roky záruky.",
  socialProofLabel:"Název vašeho instagramového nebo facebookového účtu <b aria-label=povinné>*</b>",
  programExampleCaption:"<strong>Ukázka příspěvku nebo story:</strong> produkt je dobře vidět a profil Combo Ski je označený.",
  pairingNote:"<strong>Co se stane potom?</strong> Jakmile se označený <strong>příspěvek nebo story</strong> objeví, ověříme jej, <strong>spárujeme s vaší registrací</strong> podle názvu účtu a <strong>aktivujeme prodlouženou záruku na 3 roky</strong>.",
  socialPostConsent:"Potvrzuji, že jsem zveřejnil/a <strong>nebo zveřejním</strong> příspěvek či story s viditelným produktem a označím <strong>@combo_ski</strong> na Instagramu nebo <strong>@Comboski</strong> na Facebooku.",
  officialProfiles:"Přidejte příspěvek nebo story",openInstagram:"Otevřít Instagram ↗",openFacebook:"Otevřít Facebook ↗",
  socialComposeHelp:"V aplikaci nebo na webu zvolte <strong>+ / Vytvořit příspěvek</strong>, přidejte vlastní fotku a označte <strong>@combo_ski</strong> na Instagramu nebo <strong>@Comboski</strong> na Facebooku. Potom se vraťte sem a dokončete registraci.",
  actionRulesTitle:"Pravidla akce",actionRuleDeadline:"O prodloužení záruky požádejte <strong>do jednoho roku od zakoupení produktu</strong>.",actionRuleOnce:"Záruku lze prodloužit <strong>pouze jednou na konkrétní produkt</strong>.",actionRuleRegistration:"Dokončete průvodce a vyplňte e-mail a název svého instagramového nebo facebookového účtu.",
  actionRulePost:"Zveřejněte vlastní příspěvek nebo story s viditelným produktem Combo Ski a označte náš profil: <strong>@combo_ski</strong> nebo <strong>@Comboski</strong>.",
  actionRuleConsent:"Součástí akce je <strong>souhlas s odběrem novinek</strong>. Souhlas lze kdykoliv odvolat.",
  actionRuleActivation:"Odesláním formuláře evidujeme žádost. Prodlouženou záruku <strong>aktivujeme po ověření a spárování příspěvku nebo story</strong>.",
  warrantyCoverageTitle:"Co kryje prodloužená záruka ve třetím roce?",
  warrantyCoverage:"Prodloužená záruka ve třetím roce kryje <strong>výrobní vady a vady materiálu</strong> při používání výrobku podle návodu.",
  warrantyExclusions:"Nevztahuje se na <strong>běžné opotřebení, kosmetické škrábance, poškození nárazem do kamenů, nesprávné používání ani neodborné úpravy</strong>.",
  warrantyRemedy:"Uznanou závadu řešíme <strong>opravou nebo výměnou vadného dílu</strong>.",
  warrantyDuration:"Celková doba záruky po prodloužení je <strong>36 měsíců od převzetí výrobku</strong>, nikoli od registrace.",
  actionRuleRights:"Vaše zákonná práva z vadného plnění nejsou účastí ani neúčastí v akci dotčena. Uvedené krytí a výluky se týkají dobrovolně poskytovaného třetího roku záruky. S dotazy a požadavky na záruční servis se obraťte na <a href=mailto:info@comboski.cz>info@comboski.cz</a>."
});
Object.assign(copy.en, {
  programTitle:"Share Combo Ski on Instagram or Facebook and get a 3-year warranty.",
  socialProofLabel:"Your Instagram or Facebook account name <b aria-label=required>*</b>",
  programExampleCaption:"<strong>Example post or story:</strong> the product is clearly visible and the Combo Ski profile is tagged.",
  pairingNote:"<strong>What happens next?</strong> Once the tagged <strong>post or story</strong> appears, we will verify it, <strong>match it to your registration</strong> using the account name and <strong>activate your extended 3-year warranty</strong>.",
  socialPostConsent:"I confirm that I have published <strong>or will publish</strong> a post or story showing the product and will tag <strong>@combo_ski</strong> on Instagram or <strong>@Comboski</strong> on Facebook.",
  officialProfiles:"Add a post or story",openInstagram:"Open Instagram ↗",openFacebook:"Open Facebook ↗",
  socialComposeHelp:"In the app or website, choose <strong>+ / Create post</strong>, add your own photo and tag <strong>@combo_ski</strong> on Instagram or <strong>@Comboski</strong> on Facebook. Then return here to complete your registration.",
  actionRulesTitle:"Promotion rules",actionRuleDeadline:"Apply for the warranty extension <strong>within one year of purchasing the product</strong>.",actionRuleOnce:"The warranty can be extended <strong>only once per product</strong>.",actionRuleRegistration:"Complete the guide and enter your email and Instagram or Facebook account name.",
  actionRulePost:"Publish your own post or story showing Combo Ski and tag our profile: <strong>@combo_ski</strong> or <strong>@Comboski</strong>.",
  actionRuleConsent:"The promotion includes <strong>consent to receive news</strong>. You can withdraw consent at any time.",
  actionRuleActivation:"Submitting the form records your application. We <strong>activate the extended warranty after verifying and matching the post or story</strong>.",
  warrantyCoverageTitle:"What does the third warranty year cover?",
  warrantyCoverage:"The third warranty year covers <strong>manufacturing and material defects</strong> when the product is used according to the instructions.",
  warrantyExclusions:"It does not cover <strong>normal wear and tear, cosmetic scratches, damage from impacts with rocks, misuse or unauthorised modifications</strong>.",
  warrantyRemedy:"Accepted defects are resolved by <strong>repairing or replacing the defective part</strong>.",
  warrantyDuration:"The total warranty period after extension is <strong>36 months from receipt of the product</strong>, not from registration.",
  actionRuleRights:"Your statutory rights are unaffected by participating or not participating in this promotion. The stated coverage and exclusions apply to the voluntarily provided third warranty year. Contact <a href=mailto:info@comboski.cz>info@comboski.cz</a> with questions or warranty service requests."
});

Object.assign(copy.cs,{retailerLabel:"Kde jste Combo Ski koupili? *",retailerPlaceholder:"Vyberte prodejce",retailerCombo:"E-shop Combo Ski",retailerOther:"Jiný prodejce",retailerNameLabel:"Název prodejce *",retailerError:"Vyberte, kde jste Combo Ski koupili.",retailerNameError:"Napište název prodejce."});
Object.assign(copy.en,{retailerLabel:"Where did you buy Combo Ski? *",retailerPlaceholder:"Select a retailer",retailerCombo:"Combo Ski online store",retailerOther:"Other retailer",retailerNameLabel:"Retailer name *",retailerError:"Select where you bought Combo Ski.",retailerNameError:"Enter the retailer name."});

for(const language of ["cs","en"]){
  const emphasis=language==="cs"
    ? /(<strong>[\s\S]*?<\/strong>)|(@combo_ski|@Comboski|příspěvek nebo story|příspěvek či story|příspěvku nebo story)/g
    : /(<strong>[\s\S]*?<\/strong>)|(@combo_ski|@Comboski|post or story)/g;
  for(const key of ["extendedSuccess","socialPostConsent","programLead","programExampleCaption","programTermTag","actionRulePost"]){
    copy[language][key]=copy[language][key].replace(emphasis,(match,strong)=>strong||`<strong>${match}</strong>`);
  }
}

const localeNames = {cs:["🇨🇿","Čeština"],en:["🇬🇧","English"],de:["🇩🇪","Deutsch"],fr:["🇫🇷","Français"],it:["🇮🇹","Italiano"],es:["🇪🇸","Español"],pl:["🇵🇱","Polski"],nl:["🇳🇱","Nederlands"],ro:["🇷🇴","Română"],hu:["🇭🇺","Magyar"],sk:["🇸🇰","Slovenčina"],sl:["🇸🇮","Slovenščina"]};
Object.assign(copy.cs,{selected:"Vybráno",select:"Vybrat",backToLanguages:"Zpět na výběr jazyka",snowshoeMode:"Režim sněžnice",miniSkiMode:"Režim mini-lyže",questionCount:"{n} otázky",chooseAnswer:"Vyberte odpověď.",tryAgain:"Zkuste to znovu.",correctAnswer:"Správně.",allQuestions:"Odpovězte na všechny otázky ({n}).",fixAnswers:"Některé odpovědi ještě opravte.",videoUnsupported:"Váš prohlížeč nepodporuje přehrávání videa.",yearBadge:"3 ROKY",tagInstagram:"Označte @combo_ski",tagFacebook:"Označte @Comboski",socialExampleAlt:"Ukázka příspěvku nebo story s produktem Combo Ski a označením profilu",formEmailLabel:"E-mail *",accountPlaceholder:"@uživatelské_jméno",emailPlaceholder:"vas@email.cz"});
for(const [language,data] of Object.entries(window.COMBO_LOCALES || {})){
  lessons[language]=data.lessons;
  copy[language]=data.copy;
}
document.querySelector(".language-grid").innerHTML=Object.entries(localeNames).map(([code,[flag,name]])=>`<button class="language-card" type="button" data-lang="${code}" aria-pressed="false"><span class="flag" aria-hidden="true">${flag}</span><span class="language-name">${name}</span><small></small></button>`).join("");
const $ = id => document.getElementById(id);
let lang = "cs", step = 0, verified = false;

function setLanguage(nextLang){
  if(!copy[nextLang] || !lessons[nextLang])return;
  lang = nextLang; document.documentElement.lang = lang;
  document.title=copy[lang].prototype;
  $("languageShortcut").innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 5-7 7 7 7M5 12h15"/></svg>`;
  $("languageShortcut").setAttribute("aria-label",copy[lang].backToLanguages);
  $("languageShortcut").removeAttribute("aria-haspopup");
  $("languageShortcut").removeAttribute("aria-expanded");
  document.querySelectorAll("[data-i18n]").forEach(node => { const value = copy[lang][node.dataset.i18n]; if(value) node.innerHTML = value; });
  $("quizTitle").textContent = copy[lang].quizTitle; $("quizCount").textContent = copy[lang].quizCount;
  document.querySelectorAll("[data-lang]").forEach(button=>{const selected=button.dataset.lang===lang;button.classList.toggle("language-card-selected",selected);button.setAttribute("aria-pressed",String(selected));const note=button.querySelector("small");if(note)note.textContent=selected?copy[lang].selected:copy[lang].select;});
  $("email").placeholder=copy[lang].emailPlaceholder;
  $("socialProof").placeholder=copy[lang].accountPlaceholder;
  document.querySelector(".program-example img").alt=copy[lang].socialExampleAlt;
  $("videoPanel").setAttribute("aria-label",copy[lang].videoHeading);
  document.querySelector(".language-grid").setAttribute("aria-label",copy[lang].chooseLanguage);
  $("formError").textContent="";
}

function startCourse(nextLang){
  setLanguage(nextLang); $("languageScreen").classList.add("hidden"); $("registration").classList.add("hidden"); $("success").classList.add("hidden"); $("course").classList.remove("hidden"); step=0; renderLesson(); window.scrollTo({top:0,behavior:"smooth"});
}

function skipToRegistration(){
  setLanguage(lang); $("languageScreen").classList.add("hidden"); $("course").classList.add("hidden"); $("success").classList.add("hidden"); $("registration").classList.remove("hidden"); window.scrollTo({top:0,behavior:"smooth"});
}

function renderLesson(){
  verified=false; const lesson=lessons[lang][step], total=lessons[lang].length;
  $("lessonIndex").textContent=String(step+1).padStart(2,"0"); $("lessonEyebrow").textContent=lesson.eyebrow; $("lessonTitle").textContent=lesson.title; $("lessonIntro").textContent=lesson.intro;
  const videoPanel=$("videoPanel"), videoColumn=$("videoColumn"), mediaLayout=videoColumn.parentElement;
  mediaLayout.classList.toggle("no-video-layout",step===5);
  videoColumn.classList.toggle("hidden",step===5);
  $("videoHeading").textContent=copy[lang].videoHeading;
  if(step<5){
    const videoNumber=step+1;
    videoPanel.className="video-panel video-live";
    const subtitleFile=(lang==="cs"?`lesson-${videoNumber}.vtt`:`lesson-${videoNumber}.${lang}.vtt`)+"?v=20261018-caption-gap";
    videoPanel.innerHTML=`<video controls playsinline preload="metadata" poster="assets/videos/lesson-${videoNumber}-poster.jpg" aria-label="${lesson.title}"><source src="assets/videos/lesson-${videoNumber}.mp4" type="video/mp4"><track kind="subtitles" src="assets/videos/${subtitleFile}" srclang="${lang}" label="${localeNames[lang][1]}" default>${copy[lang].videoUnsupported}</video><span class="video-time">${lesson.duration}</span>`;
  }else{
    videoPanel.className="video-panel hidden";
    videoPanel.innerHTML="";
  }
  const lessonPoints=$("lessonPoints");
  lessonPoints.className=step<=5?"lesson-points mode-points":"lesson-points";
  if(step===0){
    const cards=lesson.points.map(point=>`<li class="stacked-visual"><span class="point-image ${point.image}" aria-hidden="true"></span><span class="point-text">${point.text}</span></li>`);
    lessonPoints.innerHTML=`<li class="point-section-title"><h2>${copy[lang].snowshoeMode}</h2></li>${cards.slice(0,3).join("")}<li class="point-section-title point-section-title-secondary"><h2>${copy[lang].miniSkiMode}</h2></li>${cards.slice(3).join("")}`;
  }else{
    lessonPoints.innerHTML=lesson.points.map(point=>`<li class="${step<=5?"stacked-visual":""} ${point.image?"":"text-only-point"}">${point.image?`<span class="point-image ${point.image}" aria-hidden="true"></span>`:""}<span class="point-text">${point.text}</span></li>`).join("");
  }
  $("quizCount").textContent=copy[lang].questionCount.replace("{n}",lesson.questions.length);
  $("quizQuestions").innerHTML=lesson.questions.map((item,i)=>`<fieldset class="quiz-item"><legend><span class="question-number">${i+1}.</span>${item.question}</legend>${item.answers.map((answer,j)=>`<label class="answer"><input type="radio" name="quiz-${i}" value="${j}"><span>${answer}</span></label>`).join("")}<p class="question-feedback" id="questionFeedback-${i}"></p></fieldset>`).join("");
  $("feedback").textContent=""; $("feedback").className="feedback";
  const back=$("backButton");
  back.classList.toggle("back-icon-only",step===0);
  if(step===0){
    back.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 5-7 7 7 7M5 12h15"/></svg>';
    back.setAttribute("aria-label",copy[lang].backToLanguages);
  }else{
    back.textContent=copy[lang].back;
    back.removeAttribute("aria-label");
  }
  back.disabled=false; $("continueButton").textContent=copy[lang].check;
  $("progressLabel").textContent=`${copy[lang].step} ${step+1} ${copy[lang].of} ${total}`; const percent=Math.round((step+1)/total*100); $("progressPercent").textContent=`${percent} %`; $("progressFill").style.width=`${percent}%`;
}

function handleContinue(){
  if(verified){ if(step<lessons[lang].length-1){step++;renderLesson();}else{$("course").classList.add("hidden");$("registration").classList.remove("hidden");} window.scrollTo({top:0,behavior:"smooth"}); return; }
  const questions=lessons[lang][step].questions; let complete=true, allCorrect=true;
  questions.forEach((item,i)=>{ const chosen=document.querySelector(`input[name="quiz-${i}"]:checked`), feedback=$(`questionFeedback-${i}`), block=feedback.closest(".quiz-item"); feedback.className="question-feedback"; block.classList.remove("quiz-correct","quiz-error"); if(!chosen){complete=false;allCorrect=false;block.classList.add("quiz-error");feedback.textContent=copy[lang].chooseAnswer;}else if(Number(chosen.value)!==item.correct){allCorrect=false;block.classList.add("quiz-error");feedback.textContent=copy[lang].tryAgain;}else{block.classList.add("quiz-correct");feedback.textContent=copy[lang].correctAnswer;feedback.classList.add("correct");} });
  if(!complete){showFeedback(copy[lang].allQuestions.replace("{n}",questions.length),false);return;} if(!allCorrect){showFeedback(copy[lang].fixAnswers,false);return;} verified=true;showFeedback(copy[lang].correct,true);$("continueButton").textContent=copy[lang].next;
}

function showFeedback(message,correct){$("feedback").textContent=message;$("feedback").className=`feedback ${correct?"correct":"error"}`;}
$("quizQuestions").addEventListener("change",event=>{
  const block=event.target.closest(".quiz-item");
  if(!block)return;
  verified=false;
  block.classList.remove("quiz-correct","quiz-error");
  block.querySelector(".question-feedback").textContent="";
  $("feedback").textContent="";
  $("continueButton").textContent=copy[lang].check;
});
document.querySelectorAll("[data-lang]").forEach(button=>button.addEventListener("click",()=>setLanguage(button.dataset.lang)));
$("startButton").addEventListener("click",()=>startCourse(lang));
$("testSkipButton").addEventListener("click",skipToRegistration);
function closeLanguageMenu(){ $("languageMenu").classList.add("hidden"); $("languageShortcut").setAttribute("aria-expanded","false"); }
$("languageShortcut").addEventListener("click",()=>{
  $("languageMenu").classList.add("hidden");
  for(const id of ["course","registration","success"])$(id).classList.add("hidden");
  $("languageScreen").classList.remove("hidden");
  document.querySelectorAll("video").forEach(video=>video.pause());
  window.scrollTo({top:0,behavior:"smooth"});
});
$("languageMenu").addEventListener("click",event=>event.stopPropagation());
document.querySelectorAll("[data-switch-lang]").forEach(button=>button.addEventListener("click",()=>{setLanguage(button.dataset.switchLang);closeLanguageMenu();if(!$("course").classList.contains("hidden"))renderLesson();}));
document.addEventListener("click",closeLanguageMenu);
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeLanguageMenu();});
$("continueButton").addEventListener("click",handleContinue); $("backButton").addEventListener("click",()=>{if(step>0){step--;renderLesson();}else{$("course").classList.add("hidden");$("languageScreen").classList.remove("hidden");}window.scrollTo({top:0,behavior:"smooth"});});
document.querySelectorAll('input[name="warranty"]').forEach(radio=>radio.addEventListener("change",event=>{const type=event.target.value;$("extendedConsents").classList.toggle("hidden",type!=="extended");$("standardNewsletterOffer").classList.toggle("hidden",type!=="standard");$("newsletterError").classList.add("hidden");$("formError").textContent="";}));
$("newsletterConsent").addEventListener("change",()=>{if($("newsletterConsent").checked)$("newsletterError").classList.add("hidden");});
$("registrationForm").addEventListener("submit",async event=>{
  event.preventDefault();
  const email=$("email").value.trim();
  const retailer=$("retailer").value, otherRetailer=$("otherRetailer").value.trim();
  const type=document.querySelector('input[name="warranty"]:checked')?.value;
  const socialProof=$("socialProof").value.trim();
  const marketingConsent=type==="extended"?$("newsletterConsent").checked:$("standardNewsletterConsent").checked;
  const submit=$("submitButton");
  $("newsletterError").classList.add("hidden");
  if(!/^\S+@\S+\.\S+$/.test(email)){$("formError").textContent=copy[lang].formEmail;return;}
  if(!retailer){$("formError").textContent=copy[lang].retailerError;$("retailer").focus();return;}
  if(retailer==="other"&&!otherRetailer){$("formError").textContent=copy[lang].retailerNameError;$("otherRetailer").focus();return;}
  if(!type){$("formError").textContent=copy[lang].formChoice;return;}
  if(type==="extended"&&socialProof.length<2){$("formError").textContent=copy[lang].formSocialProof;return;}
  if(type==="extended"&&!$("warrantyTerms").checked){$("formError").textContent=copy[lang].formSocialPost;return;}
  if(type==="extended"&&!$("newsletterConsent").checked){$("formError").textContent="";$("newsletterError").classList.remove("hidden");$("newsletterConsent").focus();return;}
  submit.disabled=true;submit.textContent=copy[lang].formSaving;$("formError").textContent="";
  let source="direct";
  try{const parentUrl=new URL(document.referrer);source=parentUrl.searchParams.get("source")||"direct";}catch{}
  try{
    source=new URLSearchParams(location.search).get("source")||source;
    const payload={email,retailer,otherRetailer:retailer==="other"?otherRetailer:"",warrantyType:type,socialProof:type==="extended"?socialProof:"",marketingConsent,warrantyTermsConsent:type==="extended"&&$("warrantyTerms").checked,language:lang,source,website:$("website").value};
    const signature=JSON.stringify(payload);
    let pending;
    try{pending=JSON.parse(sessionStorage.getItem("combo-pending-registration")||"null");}catch{}
    if(!pending||pending.signature!==signature){pending={signature,id:crypto.randomUUID()};try{sessionStorage.setItem("combo-pending-registration",JSON.stringify(pending));}catch{}}
    const endpoint=window.COMBO_REGISTRATION_URL||"/api/register";
    const response=await fetch(endpoint,{method:"POST",credentials:"omit",headers:{"Content-Type":window.COMBO_REGISTRATION_URL?"text/plain;charset=UTF-8":"application/json"},body:JSON.stringify({...payload,id:pending.id}),signal:AbortSignal.timeout(45000)});
    const result=await response.json();
    if(!response.ok||result.ok!==true)throw new Error(copy[lang].formSaveError);
    try{sessionStorage.removeItem("combo-pending-registration");}catch{}
    $("registration").classList.add("hidden");$("success").classList.remove("hidden");$("successTitle").textContent=copy[lang].successTitle;$("successMessage").innerHTML=type==="extended"?copy[lang].extendedSuccess:copy[lang].standardSuccess;window.scrollTo({top:0,behavior:"smooth"});
  }catch(error){$("formError").textContent=copy[lang].formSaveError;}
  finally{submit.disabled=false;submit.textContent=copy[lang].submit;}
});
$("restartButton").addEventListener("click",()=>{$("registrationForm").reset();$("extendedConsents").classList.add("hidden");$("standardNewsletterOffer").classList.add("hidden");$("newsletterError").classList.add("hidden");startCourse(lang);});
function syncRetailerField(){
  const other=$("retailer").value==="other";
  $("otherRetailerField").classList.toggle("hidden",!other);
  $("otherRetailer").disabled=!other;
  $("otherRetailer").required=other;
}
$("retailer").addEventListener("change",syncRetailerField);
$("registrationForm").addEventListener("reset",()=>queueMicrotask(syncRetailerField));
setLanguage("cs");
