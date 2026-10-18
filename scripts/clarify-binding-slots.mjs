import fs from 'node:fs';

// Location of mounting slots is defined by the binding, not the boot.
const replacements = {
  en: [['at the boot toe','at the front of the binding'],['at the boot heel','at the back of the binding']],
  de: [['an der Schuhspitze','vorne an der Bindung'],['an der Ferse','hinten an der Bindung']],
  fr: [['près de la pointe de la chaussure','à l’avant de la fixation'],['du côté de la pointe de la chaussure','à l’avant de la fixation'],['près du talon','à l’arrière de la fixation'],['du côté du talon','à l’arrière de la fixation']],
  it: [['vicino alla punta dello scarponcino','nella parte anteriore dell’attacco'],['vicino al tallone','nella parte posteriore dell’attacco']],
  es: [['junto a la puntera de la bota','en la parte delantera de la fijación'],['junto al talón','en la parte trasera de la fijación']],
  pl: [['przy czubku buta','z przodu wiązania'],['przy pięcie','z tyłu wiązania']],
  nl: [['bij de neus van de schoen','aan de voorkant van de binding'],['bij de hiel','aan de achterkant van de binding']],
  ro: [['de lângă vârful bocancului','din partea din față a legăturii'],['de lângă călcâi','din partea din spate a legăturii'],['lângă vârful bocancului','în partea din față a legăturii'],['lângă călcâi','în partea din spate a legăturii']],
  hu: [['a bakancs orránál','a kötés elején'],['a saroknál','a kötés hátulján']],
  sk: [['pri špičke topánky','v prednej časti viazania'],['pri päte topánky','v zadnej časti viazania'],['pri päte','v zadnej časti viazania']],
  sl: [['pri konici čevlja','na sprednjem delu vezi'],['pri peti čevlja','na zadnjem delu vezi'],['pri peti','na zadnjem delu vezi']],
  cs: [['u špičky boty','v přední části vázání'],['u paty boty','v zadní části vázání'],['zadní u paty','zadní v zadní části vázání']]
};
const replace = (s, pairs) => pairs.reduce((text,[from,to])=>text.replaceAll(from,to),s);
for (const [lang,pairs] of Object.entries(replacements)) {
  if(lang==='cs') continue;
  const path=`public/guide/locales/${lang}.json`;
  const d=JSON.parse(fs.readFileSync(path,'utf8'));
  d.lessons[0].intro=replace(d.lessons[0].intro,pairs);
  for(const i of [2,4,5]) d.lessons[0].points[i].text=replace(d.lessons[0].points[i].text,pairs);
  d.lessons[0].questions[1].answers=d.lessons[0].questions[1].answers.map(s=>replace(s,pairs));
  d.lessons[4].points[3].text=replace(d.lessons[4].points[3].text,pairs);
  d.lessons[4].questions[3]=structuredClone(d.lessons[0].questions[1]);
  fs.writeFileSync(path,JSON.stringify(d,null,2)+'\n');
}
// Keep the Czech runtime and the optional translation preparation sources aligned.
for(const path of ['public/guide/app.js','scripts/polish-locales.mjs']) {
  let s=fs.readFileSync(path,'utf8');
  for(const pairs of Object.values(replacements)) s=replace(s,pairs);
  fs.writeFileSync(path,s);
}
