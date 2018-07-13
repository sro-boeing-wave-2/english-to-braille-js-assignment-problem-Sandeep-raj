/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

const set = new Map(englishToBrailleLiteralSet);

function converter() {
  const str = document.getElementById('sourceLangText').value;
  let res = str.split('').map(s => set.get(s));
  res = res.join('');
  document.getElementById('targetLangText').innerHTML = res;
}
const btn = document.getElementById('btnConvertEnglishToBraille');
btn.addEventListener('click', converter);
