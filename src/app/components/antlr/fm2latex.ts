import { AntlrComponent } from './antlr.component'
// import * as fs from 'fs';
const filename = './test/A7.fm';
if (filename) {
  const compiler = new AntlrComponent();
  const code = '  p ⋁ q ≢ p ⋁ ¬q\n' +
    '=    〈 Distributivity of ⋁ over ≡ 〉\n' +
    '  p ⋁ (q ≡ ¬q)\n' +
    '=    〈 (3.15) p ≡ ¬p ≡ false 〉\n' +
    '  p ⋁ false\n' +
    '=    〈 Identity of ⋁ 〉\n' +
    '  p  ╱╱';
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
