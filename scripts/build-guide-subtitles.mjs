import fs from 'node:fs';
import path from 'node:path';

const directory = path.resolve('public/guide/assets/videos');
const reference = process.argv[2];
if (!reference) throw new Error('Pass the supplied English SRT reference path.');
function parse(text) {
  return text.replace(/^\uFEFF/, '').trim().split(/\r?\n\s*\r?\n/).map(block => {
    const lines = block.split(/\r?\n/);
    const timing = lines.findIndex(line => line.includes('-->'));
    if (timing < 0) throw new Error('Subtitle cue has no timing.');
    return { timing: lines[timing].replaceAll(',', '.'), text: lines.slice(timing + 1).join(' ').trim() };
  });
}
const referenceCues = parse(fs.readFileSync(reference, 'utf8'));
const enCorrections = {
  4:'Snowshoe mode or mini-ski mode.',
  5:'In snowshoe mode, I attach only the middle pin',
  6:'to the front keyhole-shaped mounting slot.',
  12:'The front pin remains unused.',
  13:'Now let’s switch to mini-ski mode.',
  15:'and release the mounting slot on the other side too.',
  17:'First the rear mounting slot, then the front one.',
  19:'Now I need to adjust the textile heel strap',
  8:'The plastic end stays',
  9:'at the back, never at the front.',
  27:'The R mark is',
  28:'on the upper Velcro strap.',
  31:'The front strap over the toes,',
  32:'then the upper Velcro strap.',
  36:'I check the heel strap used to adjust the size.',
  37:'The upper strap',
  49:'For better balance, I keep one foot',
  50:'slightly in front of the other.',
  55:'Keep one foot slightly in front of the other for better balance.',
  64:'thanks to the edges and the upper strap,',
  69:'It helps you balance forwards and backwards:',
  70:'you skate just as you would on inline skates.',
  79:'Sturdy winter boots are ideal for Combo Ski.',
  81:'They must support the ankle.',
  86:'and release the rear slot.',
  91:'So I attach only the middle pin',
  99:'I slide my foot fully back and check',
  100:'that the textile heel strap is seated securely.',
  101:'I tighten the front strap over the toes,',
  102:'then the rear strap over the top of the foot,',
  103:'and finally the upper Velcro strap.',
};
function seconds(time) {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}
function timestamp(value) {
  return new Date(Math.round(value * 1000)).toISOString().slice(11, 23);
}
function wrap(text) {
  if (text.length <= 44) return text;
  const words = text.split(' ');
  let best = 1;
  for (let i = 1; i < words.length; i++) {
    if (Math.abs(words.slice(0, i).join(' ').length - text.length / 2) < Math.abs(words.slice(0, best).join(' ').length - text.length / 2)) best = i;
  }
  return words.slice(0, best).join(' ') + '\n' + words.slice(best).join(' ');
}
let offset = 0;
for (let chapter = 1; chapter <= 5; chapter++) {
  const cs = parse(fs.readFileSync(path.join(directory, `lesson-${chapter}.srt`), 'utf8'));
  const english = referenceCues.slice(offset, offset + cs.length);
  if (english.length !== cs.length) throw new Error(`Missing English cues for chapter ${chapter}`);
  const cues = cs.map((cue, i) => ({timing: cue.timing, text: enCorrections[offset+i] ?? english[i].text}));
  for (let i = 0; i < cues.length; i++) {
    const cue = cues[i];
    const [start, end] = cue.timing.split(' --> ').map(seconds);
    const nextStart = i + 1 < cues.length ? seconds(cues[i + 1].timing.split(' --> ')[0]) : end;
    // Use an existing silent gap for reading time without moving the spoken start or overlapping another cue.
    const readableEnd = Math.min(nextStart, Math.max(end, start + cue.text.length / 20));
    cue.timing = `${timestamp(start)} --> ${timestamp(readableEnd)}`;
    cue.text = wrap(cue.text);
  }
  const output = 'WEBVTT\n\n' + cues.map((cue,i)=>`${i+1}\n${cue.timing}\n${cue.text}\n`).join('\n');
  fs.writeFileSync(path.join(directory, `lesson-${chapter}.en.vtt`), output);
  offset += cs.length;
}
if (offset !== 110) throw new Error(`Unexpected chapter split: ${offset} cues`);
console.log('Built 5 English subtitle tracks: 110 cues, aligned to the edited videos.');
