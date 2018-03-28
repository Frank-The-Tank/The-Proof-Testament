"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, OnInit } from '@angular/core';
// import {ImplicationExprContext} from './SlickParser';
// import {EquivalenceExprContext} from './SlickParser';
// import {AtomContext} from './SlickParser';
// import {RelativeExprContext} from './SlickParser';
// import {SetEnumExprContext} from './SlickParser';
// import {FunctionCallExprContext} from './SlickParser';
// import {AdditionExprContext} from './SlickParser';
// import {LeibnizExprContext} from './SlickParser';
// import {SetCompExprContext} from './SlickParser';
// import {GeneralExprContext} from './SlickParser';
// import {ParenExprContext} from './SlickParser';
// import {TSExprContext} from './SlickParser';
// import {JunctionExprContext} from './SlickParser';
// import {QuantExprContext} from './SlickParser';
// import {UnaryPrefixExprContext} from './SlickParser';
// import {DocContext} from './SlickParser';
// import {ProofContext} from './SlickParser';
// import {SepContext} from './SlickParser';
// import {HeaderContext} from './SlickParser';
// import {TheoremContext} from './SlickParser';
// import {MethodContext} from './SlickParser';
// import {MethodNameContext} from './SlickParser';
// import {StepContext} from './SlickParser';
// import {ExprContext} from './SlickParser';
// import {HintContext} from './SlickParser';
// import {HintOpContext} from './SlickParser';
// import {VarlistContext} from './SlickParser';
// import {ExprlistContext} from './SlickParser';
// import {QuantifiedExprContext} from './SlickParser';
// import {SetEnumerationContext} from './SlickParser';
// import {SetComprehensionContext} from './SlickParser';
// import {FunctionCallContext} from './SlickParser';
// import {TypedVarContext} from './SlickParser';
// import {Parser} from 'antlr4ts/Parser';
//
// import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
// import {TerminalNode, ParseTreeWalker} from 'antlr4ts/tree';
// import {TokenStream} from 'antlr4ts';
// import {SlickParser} from './SlickParser';
// import {SlickListener} from './SlickListener';
// import {SlickLexer} from './SlickLexer';
//
//
const core_1 = require("@angular/core");
let AntlrComponent = class AntlrComponent {
    constructor() { }
    ngOnInit() {
    }
};
AntlrComponent = __decorate([
    core_1.Component({
        selector: 'app-antlr',
        templateUrl: './antlr.component.html',
        styleUrls: ['./antlr.component.scss']
    }),
    __metadata("design:paramtypes", [])
], AntlrComponent);
exports.AntlrComponent = AntlrComponent;
// export class AntlrComponent implements SlickListener {
//   private parser: SlickParser;
//   private bible: Object;
//   private latex: Object;
//   private output: string;
//   private preamble: string;
//   private input: string;
//   private chars: ANTLRInputStream;
//   private lexer: SlickLexer;
//   private tokens: CommonTokenStream;
//   private stack: Array<any>;
//   private tree: DocContext;
//   private results: string;
//
//
//
//   constructor() {
//    this.preamble = JSON.stringify('src/app/components/antlr/preamble.tex');
//    const theoremsStr = JSON.stringify('src/app/components/antlr/theorems.json');
//     this.bible = {};
//     const theorems = JSON.parse(theoremsStr).theorems;
//     for (let i = 0; i < theorems.length; i++) {
//       const theorem = theorems[i];
//       this.bible[theorem.rule] =
//         '(' + theorem.rule + ') ' + (theorem.name ? '\\textbf{'
//         + theorem.name.slice(0, 1).toUpperCase() + theorem.name.slice(1)
//         + '}:\\ \\ ' : '\\ \\ ') + theorem.eq;
//     }
//
//   // this.listener = new SlickListener();
//   this.latex = {
//     '⋀': '\\wedge',
//     '⋁': '\\vee',
//     '=': '=',
//     '≡': '\\equiv',
//     '⇒': '\\Rightarrow',
//     '⇐': '\\Leftarrow',
//     '¬': '\\neg',
//     '≢': '\\not \\equiv',
//     '≔': ':='
//   };
//
//   this.output = '';
//   this.stack = [];
// }
//
// public exitDoc = (ctx: DocContext) => {
//   this.output += this.preamble;
//   while (this.stack.length > 0) {
//     this.output += this.stack.shift() + '\n';
//   }
//   this.output += '\\end{tabbing}\\end{document}\n\n';
// }
//
// public exitProof(ctx: ProofContext) {
//   if (ctx.END()) {
//     this.stack.push('\\done\n');
//   }
// }
//
// public exitSep = (ctx: SepContext) => {
//   this.stack.push('\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n');
// }
//
//
// public exitAtom = (ctx: AtomContext) => {
//   this.stack.push(ctx.text);
// }
//
// public exitJunctionExpr = (ctx: JunctionExprContext) => {
//   const rhs = this.stack.pop();
//   const lhs = this.stack.pop();
//   // @ts-ignore: Unreachable code error
//   const x = lhs + ' ' + this.latex[ctx.JOP()] + ' ' + rhs;
//   this.stack.push(x);
// }
//
// public exitImplicationExpr = (ctx: ImplicationExprContext) => {
//   const rhs = this.stack.pop();
//   const lhs = this.stack.pop();
//   // @ts-ignore: Unreachable code error
//   const x = lhs + ' ' + this.latex[ctx.IMPOP()] + ' ' + rhs;
//   this.stack.push(x);
// }
//
// public exitEquivalenceExpr = (ctx: EquivalenceExprContext) => {
//   const rhs = this.stack.pop();
//   const lhs = this.stack.pop();
//   // @ts-ignore: Unreachable code error
//   const x = lhs + ' ' + this.latex[ctx.EQOP] + ' ' + rhs;
//   this.stack.push(x);
// }
//
// public exitUnaryPrefixExpr = (ctx: UnaryPrefixExprContext) => {
//   const rhs = this.stack.pop();
//   const x = '\\neg ' + rhs;
//   this.stack.push(x);
// }
//
// public exitParenExpr = (ctx: ParenExprContext) => {
//   const e = this.stack.pop();
//   const x = '(' + e + ')';
//   this.stack.push(x);
// }
//
// public exitLeibnizExpr = (ctx: LeibnizExprContext) => {
//   const z = this.stack.pop();
//   const v = ctx.VAR().text;
//   const e = this.stack.pop();
//   const x = e + '^\{' + v + '\}_\{' + z + '\}';
//   this.stack.push(x);
// }
//
// public exitStep = (ctx: StepContext) => {
//   this.stack.push('\\Step\{' + this.stack.pop() + '\}');
// }
//
// public exitHint = (ctx: HintContext) => {
//   let token = ctx.COMMENT().text;
//   token = token.substr(1, token.length - 2);
//   token = this.removeFm(token);
//   const op = this.stack.pop();
//   this.stack.push('\\\\$' + this.latex[op] + '$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{' + token + '}\\ $\\Ggg$ \\\\');
// }
//
// public exitHintOp = (ctx: HintOpContext) => {
//   this.stack.push(ctx.text);
// }
//
// public exitTheorem = (ctx: TheoremContext) => {
//   // @ts-ignore: Unreachable code error
//   const theorem = this.bible[ctx.RULENUM()];
//   this.stack.push('Prove\\ ' + theorem + '\\\\ \\\\\n');
// }
//
// public removeFm(s: string) {
//   const ops = Object.keys(this.latex);
//   for (let i = 0; i < ops.length; i++) {
//     s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
//   }
//   return s;
// }
//
// public compile(data: string) {
//   this.input = data;
//   this.chars = new ANTLRInputStream(this.input);
//   this.lexer = new SlickLexer(this.chars);
//   this.tokens = new CommonTokenStream(this.lexer);
//   this.parser = new SlickParser(this.tokens);
//   this.parser.buildParseTree = true;
//   this.tree = this.parser.doc();
//   // @ts-ignore: Unreachable code error
//   ParseTreeWalker.DEFAULT.walk(this, this.tree);
//   return this.output;
// }
//
// public test() {
//     const compiler = new AntlrComponent();
//     const code = '  ¬q ⇒ ¬p\n' +
//       '=    〈 (3.59) with p, q ≔ ¬q, ¬p 〉\n' +
//       '  ¬¬q ⋁ ¬p\n' +
//       '=    〈 Double negation 〉\n' +
//       '  q ⋁ ¬p\n' +
//       '=    〈 Symmetry of ⋁ 〉\n' +
//       '  ¬p ⋁ q\n' +
//       '=    〈 (3.59) 〉\n' +
//       '  p ⇒ q  ╱╱';
//     this.results = compiler.compile(code);
//
// }
//
//
//
//
// }
//# sourceMappingURL=antlr.component.js.map