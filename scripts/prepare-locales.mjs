// Build-time drafts only: the public website never calls a translation service.
import fs from 'node:fs';
import vm from 'node:vm';
const source = fs.readFileSync('public/guide/app.js', 'utf8');
const boundary=source.indexOf('const localeNames =');
const {lessons, copy} = vm.runInNewContext(source.slice(0, boundary<0?source.indexOf('const $ ='):boundary) + ';({lessons,copy})', {structuredClone});
Object.assign(copy.en, {
  selected:'Selected',select:'Select',backToLanguages:'Back to language selection',snowshoeMode:'Snowshoe mode',miniSkiMode:'Mini-ski mode',
  questionCount:'{n} questions',chooseAnswer:'Choose an answer.',tryAgain:'Try again.',correctAnswer:'Correct.',
  allQuestions:'Answer all {n} questions.',fixAnswers:'Please correct the highlighted answers.',videoUnsupported:'Your browser does not support video playback.',
  yearBadge:'3 YEARS',tagInstagram:'Tag @combo_ski',tagFacebook:'Tag @Comboski',socialExampleAlt:'Example of a post or story showing Combo Ski and tagging our profile',
  formEmailLabel:'Email *',accountPlaceholder:'@your_account',emailPlaceholder:'you@example.com'
});
// Hints must agree with the final questions, even though wrong answers never reveal them.
lessons.en[0].questions[1].hint='Attach only the front mounting slot to the middle pin on each side, so the heel can move slightly.';
lessons.en[0].questions[2].hint='Attach the rear mounting slot first, then the front slot with the release button.';
lessons.en[4].questions[1].hint='Front strap over the toes, rear strap over the top of the foot, then upper Velcro strap.';
lessons.en[4].questions[3]=structuredClone(lessons.en[0].questions[1]);
const template={lessons:lessons.en,copy:copy.en,subtitles:[]};
for(let n=1;n<=5;n++)template.subtitles.push(fs.readFileSync(`public/guide/assets/videos/lesson-${n}.en.vtt`,'utf8').trim().split(/\n\n/).slice(1).map(b=>{const lines=b.split('\n');return {timing:lines[1],text:lines.slice(2).join(' ')};}));
fs.mkdirSync('public/guide/locales',{recursive:true});
fs.writeFileSync('public/guide/locales/en.json',JSON.stringify(template,null,2)+'\n');
const requested=process.argv.slice(2);
for(const lang of requested){
  const draft=structuredClone(template), entries=[];
  function walk(value,path=[]){for(const [key,item] of Object.entries(value)){const next=[...path,key];if(typeof item==='object'&&item!==null)walk(item,next);else if(typeof item==='string'&&!['image','diagram','duration','timing'].includes(key))entries.push({path:next,text:item});}}
  walk(draft);
  const unique=[...new Set(entries.map(e=>e.text))], translations=new Map();
  for(let start=0;start<unique.length;){
    const chunk=[];let length=0;
    while(start<unique.length&&(length+unique[start].length<3800||!chunk.length)){const text=unique[start++];chunk.push(text);length+=text.length+1;}
    const url=new URL('https://translate.googleapis.com/translate_a/single');
    for(const [key,value] of Object.entries({client:'gtx',sl:'en',tl:lang,dt:'t',q:chunk.join('\n')}))url.searchParams.set(key,value);
    let result;
    for(let attempt=0;attempt<4;attempt++){
      const response=await fetch(url);
      if(response.ok){const body=await response.json();result=body[0].map(x=>x[0]).join('').trim().split('\n');if(result.length===chunk.length)break;}
      await new Promise(resolve=>setTimeout(resolve,1000*(attempt+1)));
    }
    if(result?.length!==chunk.length)throw Error(`${lang}: translation line mismatch at ${start}`);
    chunk.forEach((text,i)=>translations.set(text,result[i]));
    console.log(`${lang}: ${start}/${unique.length}`);
  }
  for(const entry of entries){let parent=draft;for(const key of entry.path.slice(0,-1))parent=parent[key];parent[entry.path.at(-1)]=translations.get(entry.text);}
  fs.writeFileSync(`public/guide/locales/${lang}.json`,JSON.stringify(draft,null,2)+'\n');
}
