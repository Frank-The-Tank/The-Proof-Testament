// SlickCompiler.ts

// import { antlr4 } from 'antlr4/index';
// import { SlickListener } from './SlickListener.ts';
// import { SlickLexer } from './SlickLexer.ts';
// import { SlickParser } from './SlickParser.ts';

import { ImplicationExprContext } from './SlickParser';
import { EquivalenceExprContext } from './SlickParser';
import { AtomContext } from './SlickParser';
import { RelativeExprContext } from './SlickParser';
import { SetEnumExprContext } from './SlickParser';
import { FunctionCallExprContext } from './SlickParser';
import { AdditionExprContext } from './SlickParser';
import { LeibnizExprContext } from './SlickParser';
import { SetCompExprContext } from './SlickParser';
import { GeneralExprContext } from './SlickParser';
import { ParenExprContext } from './SlickParser';
import { TSExprContext } from './SlickParser';
import { JunctionExprContext } from './SlickParser';
import { QuantExprContext } from './SlickParser';
import { UnaryPrefixExprContext } from './SlickParser';
import { DocContext } from './SlickParser'
import { ProofContext } from './SlickParser';
import { SepContext } from './SlickParser';
import { HeaderContext } from './SlickParser';
import { TheoremContext } from './SlickParser';
import { MethodContext } from './SlickParser';
import { MethodNameContext } from './SlickParser';
import { StepContext } from './SlickParser';
import { ExprContext } from './SlickParser';
import { HintContext } from './SlickParser';
import { VarlistContext } from './SlickParser';
import { ExprlistContext } from './SlickParser';
import { QuantifiedExprContext } from './SlickParser';
import { SetEnumerationContext } from './SlickParser';
import { SetComprehensionContext } from './SlickParser';
import { FunctionCallContext } from './SlickParser';
import { TypedVarContext } from './SlickParser';

import { ANTLRInputStream, CommonTokenStream, TokenStream } from 'antlr4ts';
import { TerminalNode, ParseTreeWalker } from 'antlr4ts/tree';
import { SlickParser } from './SlickParser';
import { SlickListener } from './SlickListener';
import { SlickLexer } from './SlickLexer';
import { SlickVisitor } from './SlickVisitor';

import * as fs from 'fs';


export class SlickCompiler implements SlickListener {
  private parser : SlickParser;
  private bible : Object;
  private latex : Object;
  private output : string;
  private preamble : string;
  private input : string;
  private chars : ANTLRInputStream;
  private lexer : SlickLexer;
  private tokens : CommonTokenStream;
  private stack : Array;


  constructor() {
    this.preamble = fs.readFileSync("preamble.tex").toString();
    let theoremsStr= fs.readFileSync("theorems.json").toString();
    this.bible = {};
    let theorems = JSON.parse(theoremsStr).theorems;
    for (let i = 0; i < theorems.length; i++) {
      let theorem = theorems[i];
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? "\\textbf{" + theorem.name.slice(0,1).toUpperCase() + theorem.name.slice(1) + "}:\\ \\ ": "\\ \\ ") + theorem.eq;
    }

    // this.listener = new SlickListener();
    this.latex = {
      '⋀' : '\\wedge',
      '⋁' : '\\vee',
      '=' : '=',
      '≡' : '\\equiv',
      '⇒' : '\\Rightarrow',
      '⇐' : '\\Leftarrow',
      '¬' : '\\neg',
      '≢' : '\\not \\equiv',
      '≔'  : ':='
    };

    this.output = "";
    this.stack = [];
  }

  public exitDoc = (ctx : DocContext) => {
    this.output += this.preamble;
    while (this.stack.length > 0) {
      this.output += this.stack.shift() + "\n";
    }
    this.output += "\\end{tabbing}\\end{document}\n\n";
  }

  public exitProof(ctx : ProofContext) {
    if (ctx.END()) {
      this.stack.push("\\done\n");
    }
  }

  public exitSep = (ctx : SepContext) => {
    this.stack.push("\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n");
  }


  public exitAtom = (ctx : AtomContext) => {
    this.stack.push(ctx.text);
  }

  public exitJunctionExpr = (ctx : JunctionExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitImplicationExpr = (ctx : ImplicationExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitEquivalenceExpr = (ctx : EquivalenceExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    let x = lhs + " " + this.latex[ctx.EQOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitUnaryPrefixExpr = (ctx : UnaryPrefixExprContext) => {
    let rhs = this.stack.pop();
    let x = "\\neg " + rhs;
    this.stack.push(x);
  }

  public exitParenExpr = (ctx : ParenExprContext) => {
    let e = this.stack.pop();
    let x = "(" + e + ")";
    this.stack.push(x);
  }

  public exitLeibnizExpr = (ctx : LeibnizExprContext) => {
    let z = this.stack.pop();
    let v = ctx.VAR().text;
    let e = this.stack.pop()
    let x = e + "^\{" + v + "\}_\{" + z + "\}";
    this.stack.push(x);
  }

  public exitStep = (ctx : StepContext) => {
    this.stack.push("\\Step\{" + this.stack.pop() + "\}");
  }

  public exitHint = (ctx : HintContext) => {
    let token = ctx.COMMENT().text;
    token = token.substr(1, token.length - 2);
    token = this.removeFm(token);
    let op = this.stack.pop();
    this.stack.push("\\\\$" + this.latex[op] + "$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{" + token + "}\\ $\\Ggg$ \\\\");
  }

  public exitHintOp = (ctx : HintOpContext) => {
    this.stack.push(ctx.text);
  }

  public exitTheorem = (ctx : TheoremContext) => {
    let theorem = this.bible[ctx.RULENUM()];
    this.stack.push("Prove\\ " + theorem + "\\\\ \\\\\n");
  }

  public removeFm(s : string) {
    let ops = Object.keys(this.latex);
    for (let i = 0; i < ops.length; i++) {
      s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
    }
    return s;
  }

  public compile(data : string) {
    this.input = data;
    this.chars = new ANTLRInputStream(this.input);
    this.lexer = new SlickLexer(this.chars);
    this.tokens = new CommonTokenStream(this.lexer);
    this.parser = new SlickParser(this.tokens);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.doc();
    ParseTreeWalker.DEFAULT.walk(this, this.tree);
    return this.output;
  }
}




//exports.SlickCompiler = SlickCompiler;
