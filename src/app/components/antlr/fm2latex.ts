import { SlickCompiler } from './SlickCompiler';
// import * as fs from 'fs';
const filename = './test/A4.fm';
if (filename) {
  const compiler = new SlickCompiler();
  const code = '  ¬q ⇒ ¬p\n' +
    '=    〈 (3.59) with p, q ≔ ¬q, ¬p 〉\n' +
    '  ¬¬q ⋁ ¬p\n' +
    '=    〈 Double negation 〉\n' +
    '  q ⋁ ¬p\n' +
    '=    〈 Symmetry of ⋁ 〉\n' +
    '  ¬p ⋁ q\n' +
    '=    〈 (3.59) 〉\n' +
    '  p ⇒ q  ╱╱';
  const results = compiler.compile(code);
  console.log(results);
} else {
  console.log('Missing filename\n');
}
