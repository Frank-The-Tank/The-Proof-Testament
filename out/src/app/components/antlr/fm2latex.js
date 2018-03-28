"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SlickCompiler_1 = require("./SlickCompiler");
// import * as fs from 'fs';
const filename = "./test/A7.fm";
if (filename) {
    const compiler = new SlickCompiler_1.SlickCompiler();
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
}
else {
    console.log('Missing filename\n');
}
//# sourceMappingURL=fm2latex.js.map