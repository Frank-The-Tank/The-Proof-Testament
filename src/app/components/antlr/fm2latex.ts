import { AntlrComponent } from './antlr.component'
// import * as fs from 'fs';
const filename = './test/A7.fm';
if (filename) {
  const compiler = new AntlrComponent();
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


// import { SlickCompiler } from './SlickCompiler';
// import * as fs from 'fs';
// const filename = process.argv[2];
// if (filename) {
//   let compiler = new SlickCompiler();
//   let code = fs.readFileSync(filename).toString();
//   let results = compiler.compile(code);
//   process.stdout.write(results);
// } else {
//   process.stdout.write("Missing filename\n");
// }
