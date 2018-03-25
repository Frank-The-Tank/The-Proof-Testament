// SlickCompiler.ts

// import { antlr4 } from 'antlr4/index';
// import { SlickListener } from './SlickListener.ts';
// import { SlickLexer } from './SlickLexer.ts';
// import { SlickParser } from './SlickParser.ts';

import { EquivalenceExprContext } from '../../../../../Slick/SlickParser';
import { AtomContext } from '../../../../../Slick/SlickParser';
import { RelativeExprContext } from '../../../../../Slick/SlickParser';
import { SetEnumExprContext } from '../../../../../Slick/SlickParser';
import { FunctionCallExprContext } from '../../../../../Slick/SlickParser';
import { AdditionExprContext } from '../../../../../Slick/SlickParser';
import { LeibnizExprContext } from '../../../../../Slick/SlickParser';
import { SetCompExprContext } from '../../../../../Slick/SlickParser';
import { GeneralExprContext } from '../../../../../Slick/SlickParser';
import { ParenExprContext } from '../../../../../Slick/SlickParser';
import { TSExprContext } from '../../../../../Slick/SlickParser';
import { JunctionExprContext } from '../../../../../Slick/SlickParser';
import { QuantExprContext } from '../../../../../Slick/SlickParser';
import { UnaryPrefixExprContext } from '../../../../../Slick/SlickParser';
import { DocContext } from '../../../../../Slick/SlickParser';
import { ProofContext } from '../../../../../Slick/SlickParser';
import { SepContext } from '../../../../../Slick/SlickParser';
import { HeaderContext } from '../../../../../Slick/SlickParser';
import { TheoremContext } from '../../../../../Slick/SlickParser';
import { MethodContext } from '../../../../../Slick/SlickParser';
import { MethodNameContext } from '../../../../../Slick/SlickParser';
import { StepContext } from '../../../../../Slick/SlickParser';
import { ExprContext } from '../../../../../Slick/SlickParser';
import { HintContext } from '../../../../../Slick/SlickParser';
import { VarlistContext } from '../../../../../Slick/SlickParser';
import { ExprlistContext } from '../../../../../Slick/SlickParser';
import { QuantifiedExprContext } from '../../../../../Slick/SlickParser';
import { SetEnumerationContext } from '../../../../../Slick/SlickParser';
import { SetComprehensionContext } from '../../../../../Slick/SlickParser';
import { FunctionCallContext } from '../../../../../Slick/SlickParser';
import { TypedVarContext } from '../../../../../Slick/SlickParser';

import { ANTLRInputStream, CommonTokenStream, TokenStream } from 'antlr4ts';
import { TerminalNode, ParseTreeWalker } from 'antlr4ts/tree';
import { SlickParser } from '../../../../../Slick/SlickParser';
import { SlickListener } from '../../../../../Slick/SlickListener';
import { SlickLexer } from '../../../../../Slick/SlickLexer';

import { ImplicationExprContext } from '../../../../../Slick/SlickParser';



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
    this.preamble = readFileSync("preamble.tex").toString();
    let theoremsStr= readFileSync("theorems.json").toString();
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
    this.parser._buildParseTrees = true;
    this.tree = this.parser.doc();
    ParseTreeWalker.DEFAULT.walk(this, this.tree);
    return this.output;
  }
}




//exports.SlickCompiler = SlickCompiler;
