// SlickCompiler.ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const tree_1 = require("antlr4ts/tree");
const SlickParser_1 = require("./SlickParser");
const SlickLexer_1 = require("./SlickLexer");
const fs = require("fs");
class SlickCompiler {
    constructor() {
        this.exitDoc = (ctx) => {
            this.output += this.preamble;
            while (this.stack.length > 0) {
                this.output += this.stack.shift() + '\n';
            }
            this.output += '\\end{tabbing}\\end{document}\n\n';
        };
        this.exitSep = (ctx) => {
            this.stack.push('\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n');
        };
        this.exitAtom = (ctx) => {
            this.stack.push(ctx.text);
        };
        this.exitJunctionExpr = (ctx) => {
            const rhs = this.stack.pop();
            const lhs = this.stack.pop();
            const x = lhs + ' ' + this.latex[ctx.JOP()] + ' ' + rhs;
            this.stack.push(x);
        };
        this.exitImplicationExpr = (ctx) => {
            const rhs = this.stack.pop();
            const lhs = this.stack.pop();
            const x = lhs + ' ' + this.latex[ctx.IMPOP()] + ' ' + rhs;
            this.stack.push(x);
        };
        this.exitEquivalenceExpr = (ctx) => {
            const rhs = this.stack.pop();
            const lhs = this.stack.pop();
            const x = lhs + ' ' + this.latex[ctx.EQOP()] + ' ' + rhs;
            this.stack.push(x);
        };
        this.exitUnaryPrefixExpr = (ctx) => {
            const rhs = this.stack.pop();
            const x = '\\neg ' + rhs;
            this.stack.push(x);
        };
        this.exitParenExpr = (ctx) => {
            const e = this.stack.pop();
            const x = '(' + e + ')';
            this.stack.push(x);
        };
        this.exitLeibnizExpr = (ctx) => {
            const z = this.stack.pop();
            const v = ctx.VAR().text;
            const e = this.stack.pop();
            const x = e + '^\{' + v + '\}_\{' + z + '\}';
            this.stack.push(x);
        };
        this.exitStep = (ctx) => {
            this.stack.push('\\Step\{' + this.stack.pop() + '\}');
        };
        this.exitHint = (ctx) => {
            let token = ctx.COMMENT().text;
            token = token.substr(1, token.length - 2);
            token = this.removeFm(token);
            const op = this.stack.pop();
            this.stack.push('\\\\$' + this.latex[op] + '$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{' + token + '}\\ $\\Ggg$ \\\\');
        };
        this.exitHintOp = (ctx) => {
            this.stack.push(ctx.text);
        };
        this.exitTheorem = (ctx) => {
            const theorem = this.bible[ctx.RULENUM()];
            this.stack.push('Prove\\ ' + theorem + '\\\\ \\\\\n');
        };
        this.preamble = fs.readFileSync('preamble.tex').toString();
        const theoremsStr = fs.readFileSync('theorems.json').toString();
        this.bible = {};
        const theorems = JSON.parse(theoremsStr).theorems;
        for (let i = 0; i < theorems.length; i++) {
            const theorem = theorems[i];
            this.bible[theorem.rule] =
                '(' + theorem.rule + ') ' + (theorem.name ? '\\textbf{'
                    + theorem.name.slice(0, 1).toUpperCase() + theorem.name.slice(1)
                    + '}:\\ \\ ' : '\\ \\ ') + theorem.eq;
        }
        // this.listener = new SlickListener();
        this.latex = {
            '⋀': '\\wedge',
            '⋁': '\\vee',
            '=': '=',
            '≡': '\\equiv',
            '⇒': '\\Rightarrow',
            '⇐': '\\Leftarrow',
            '¬': '\\neg',
            '≢': '\\not \\equiv',
            '≔': ':='
        };
        this.output = '';
        this.stack = [];
    }
    exitProof(ctx) {
        if (ctx.END()) {
            this.stack.push('\\done\n');
        }
    }
    removeFm(s) {
        const ops = Object.keys(this.latex);
        for (let i = 0; i < ops.length; i++) {
            s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
        }
        return s;
    }
    compile(data) {
        this.input = data;
        this.chars = new antlr4ts_1.ANTLRInputStream(this.input);
        this.lexer = new SlickLexer_1.SlickLexer(this.chars);
        this.tokens = new antlr4ts_1.CommonTokenStream(this.lexer);
        this.parser = new SlickParser_1.SlickParser(this.tokens);
        this.parser.buildParseTree = true;
        this.tree = this.parser.doc();
        tree_1.ParseTreeWalker.DEFAULT.walk(this, this.tree);
        return this.output;
    }
}
exports.SlickCompiler = SlickCompiler;
//# sourceMappingURL=SlickCompiler.js.map