import { Component } from '@angular/core';
import { ImplicationExprContext,
         EquivalenceExprContext,
         AtomContext,
         RelativeExprContext,
         SetEnumExprContext,
         FunctionCallExprContext,
         AdditionExprContext,
         LeibnizExprContext,
         SetCompExprContext,
         GeneralExprContext,
         ParenExprContext,
         TSExprContext,
         JunctionExprContext,
         QuantExprContext,
         UnaryPrefixExprContext,
         DocContext,
         StandardProofContext,
         CaseProofContext,
         SepContext,
         HeaderContext,
         TheoremContext,
         MethodContext,
         MethodNameContext,
         StepContext,
         ExprContext,
         HintContext,
         VarlistContext,
         ExprlistContext,
         QuantifiedExprContext,
         SetEnumerationContext,
         SetComprehensionContext,
         FunctionCallContext,
         TypedVarContext,
         HintOpContext,
         BibleTheoremContext,
         AdHocTheoremContext,
         StartExpoContext,
         EndExpoContext,
         AssumingConjunctsMethodContext
} from './SlickParser';

import {ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {TerminalNode, ParseTreeWalker} from 'antlr4ts/tree';
import {TokenStream} from 'antlr4ts';
import {SlickParser} from './SlickParser';
import {SlickListener} from './SlickListener';
import {SlickLexer} from './SlickLexer';

import * as theoremInput from './theorems.json';



@Component({
  selector: 'app-antlr',
  templateUrl: './antlr.component.html',
  styleUrls: ['./antlr.component.scss']
})

export class AntlrComponent implements SlickListener {
  private parser : SlickParser;
  private bible : Object;
  private latex : Object;
  private output : string;
  private preamble : string;
  private input : string;
  private chars : ANTLRInputStream;
  private lexer : SlickLexer;
  private tokens : CommonTokenStream;
  private tree: DocContext;
  private stack : Array<any>;

  constructor() {
    this.preamble =
      '\\documentclass[11pt]{amsart}\n'+
      '\\usepackage[pdftex]{graphicx}\n' +
      '\\usepackage[margin=1in]{geometry}'+
      '\\usepackage{fancyhdr}\n' +
      '\\pagestyle{fancy}\n' +
      '\\usepackage{amsmath}\n' +
      '\\usepackage{amssymb,latexsym}\n' +
      '\\usepackage{centernot}'+
      '\\usepackage{times}\n' +
      '\\usepackage[usenames, dvipsnames]{color}\n' +
      '\n' +
      '\\newcommand{\\lgap}{12pt}                            % Line gap\n' +
      '\\newcommand{\\slgap}{4pt}                            % Small line gap\n' +
      '\\newcommand{\\equivs}{\\ensuremath{\\;\\equiv\\;}}       % Equivales with space\n' +
      '\\newcommand{\\equivss}{\\ensuremath{\\;\\;\\equiv\\;\\;}}  % Equivales with double space\n' +
      '\\newcommand{\\nequiv}{\\ensuremath{\\not\\equiv}}       % Inequivalent\n' +
      '\\newcommand{\\impl}{\\ensuremath{\\Rightarrow}}        % Implies\n' +
      '\\newcommand{\\nimpl}{\\ensuremath{\\not\\Rightarrow}}   % Does not imply\n' +
      '\\newcommand{\\foll}{\\ensuremath{\\Leftarrow}}         % Follows from\n' +
      '\\newcommand{\\nfoll}{\\ensuremath{\\not\\Leftarrow}}    % Does not follow from\n' +
      '\\newcommand{\\proofbreak}{\\\\ \\\\ \\\\ \\\\}\n' +
      '\n' +
      '% These macros are used for quantifications. Thanks to David Gries for sharing\n' +
      '\\newcommand{\\thedr}{\\rule[-.25ex]{.32mm}{1.75ex}}   % Symbol that separates dummy from range in quantification\n' +
      '\\newcommand{\\dr}{\\;\\,\\thedr\\,\\;}                    % Symbol that separates dummy from range, with spacing\n' +
      '\\newcommand{\\rb}{:}                                 % Symbol that separates range from body in quantification\n' +
      '\\newcommand{\\drrb}{\\;\\thedr\\,{:}\\;}                 % Symbol that separates dummy from body when range is missing\n' +
      '\\newcommand{\\all}{\\forall}                          % Universal quantification\n' +
      '\\newcommand{\\ext}{\\exists}                          % Existential quantification\n' +
      '\\newcommand{\\Gll} {\\langle}                         % Open hint\n' +
      '\\newcommand{\\Ggg} {\\rangle}                         % Close hint\n' +
      '\n' +
      '% Proof\n' +
      '\\newcommand{\\Step}[1]{\\>{$#1$}}\n' +
      '%\\newcommand{\\Hint}[1] {\\\\=\\>\\>\\ \\ \\ $\\Gll\\ \\mbox{#1}\\ \\Ggg$ \\\\}   % Single line hint\n' +
      '\\newcommand{\\Hint}[1] {\\\\=\\>\\>\\ \\ \\ $\\Gll$\\ \\text{#1}\\ $\\Ggg$ \\\\}   % Single line hint\n' +
      '\\newcommand{\\done}{{\\color{BurntOrange} \\ \\ $//$}}\n' +
      '\n' +
      '% Math symbols\n' +
      '\\newcommand{\\nat}{\\mathbb{N}}\n' +
      '\\newcommand{\\real}{\\mathbb{R}}\n' +
      '\\newcommand{\\integer}{\\mathbb{Z}}\n' +
      '\\newcommand{\\bool}{\\mathbb{B}}\n' +
      '\n' +
      '% Single and double quotes\n' +
      '\\newcommand{\\Lq}{\\mbox{`}}\n' +
      '\\newcommand{\\Rq}{\\mbox{\'}}\n' +
      '\\newcommand{\\Lqq}{\\mbox{``}}\n' +
      '\\newcommand{\\Rqq}{\\mbox{\'\'}}\n' +
      '\n' +
      '\n' +
      '\\oddsidemargin  0.0in\n' +
      '\\evensidemargin 0.0in\n' +
      '\\textwidth      6.5in\n' +
      '\\headheight     0.0in\n' +
      '\\topmargin      0.0in\n' +
      '\\textheight=9.0in\n' +
      '\\parindent=0in\n' +
      '\\pagestyle{empty}\n' +
      '\n' +
      '\\begin{document}\\newcommand{\\unindent}{ \\hspace{-2em}}'+
      '\\begin{tabbing}\n' +
      '99.\\;\\=(m)\\;\\=\\kill\n';
    const theoremsStr = JSON.stringify(theoremInput);
    this.bible = {};
    const theorems = JSON.parse(theoremsStr).theorems;
    for (let i = 0; i < theorems.length; i++) {
      let theorem = theorems[i];
      this.bible[theorem.rule] = "(" + theorem.rule + ") " + (theorem.name? theorem.name.substr(0,1).toUpperCase() + theorem.name.substr(1) + ":\\ \\ ": "\\ \\ ") + theorem.eq;
    }

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

    this.output = '';
    this.stack = [];

  }

  public exitDoc = (ctx : DocContext) => {
    this.output += this.preamble;
    while (this.stack.length > 0) {
      this.output += this.stack.shift() + "\n";
    }
    this.output += "\\end{tabbing}\\end{document}\n\n";
  }

  public exitStartExpo = (ctx : StartExpoContext) => {
    if (ctx.EXPO()) {
      let expo = ctx.EXPO().toString();
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

  public exitEndExpo = (ctx : EndExpoContext) => {
    if (ctx.EXPO()) {
      let expo = ctx.EXPO().toString();
      expo = this.removeFm(expo);
      expo = this.formatExpo(expo);
      this.stack.push("\\\\\n\\text{" + expo);
    }
  }

  public exitStandardProof = (ctx : StandardProofContext) => {
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
    //@ts-ignore
    let x = lhs + " " + this.latex[ctx.JOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitImplicationExpr = (ctx : ImplicationExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    //@ts-ignore
    let x = lhs + " " + this.latex[ctx.IMPOP()] + " " + rhs;
    this.stack.push(x);
  }

  public exitEquivalenceExpr = (ctx : EquivalenceExprContext) => {
    let rhs = this.stack.pop();
    let lhs = this.stack.pop();
    //@ts-ignore
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

  public exitBibleTheorem = (ctx : BibleTheoremContext) => {
    let proveOrReprove = ctx.PROVE();
    //@ts-ignore
    let theorem = this.bible[ctx.RULENUM()];
    this.stack.push("\\color{blue}" + proveOrReprove + "\\ " + theorem + "\\\\ \\\\\n");
  }

  public exitAdHocTheorem = (ctx : AdHocTheoremContext) => {
    let proveOrReprove = ctx.PROVE();
    let theorem = this.stack.pop();
    this.stack.push("\\color{blue}" + proveOrReprove + "\\ $" + theorem + "$\\\\ \\\\\n")
  }

  public exitAssumingConjunctsMethod = (ctx : AssumingConjunctsMethodContext) => {
    this.stack.push("by assuming the conjuncts of the antecedent\\\\\\\\");
  }

  public enterCaseProof = (ctx: CaseProofContext) => {
    this.stack.push("by case analysis on " + ctx.VAR() + "\\\\\\\\");
  }

  public exitCaseProof = (ctx : CaseProofContext) => {

  }
  //@ts-ignore
  public exitExpo = (ctx : ExpoContext) => {
    this.stack.push("\\text{" + ctx.text + "}");
  }

  public removeFm(s : string) {
    let ops = Object.keys(this.latex);
    for (let i = 0; i < ops.length; i++) {
      s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
    }
    return s;
  }

  public formatExpo(s : string) {
    s = s.replace(/\/\*/, "");
    s = s.replace(/\*\//, "");
    s = s.replace(/(\W)([B-Zb-z])(\W)/g, "$1\\textit{$2}$3");
    s = s.replace(/true/g, "\\textit{true}");
    s = s.replace(/false/g, "\\textit{false}");
    s = s.replace(/\n/g, "\} \\\\\n\\text\{");
    s = s.replace(/ /g, "\\ \\ ");
    s = s.substr(0, s.length - 7);
    return s;
  }

  public compile(data: string) {
    this.input = data;
    this.chars = new ANTLRInputStream(this.input);
    this.lexer = new SlickLexer(this.chars);
    this.tokens = new CommonTokenStream(this.lexer);
    this.parser = new SlickParser(this.tokens);
    this.parser.buildParseTree = true;
    this.tree = this.parser.doc();
    // @ts-ignore
    ParseTreeWalker.DEFAULT.walk(this, this.tree);
    return this.output;
  }
}
