
import { Component, OnInit } from '@angular/core';
import {ImplicationExprContext} from './SlickParser';
import {EquivalenceExprContext} from './SlickParser';
import {AtomContext} from './SlickParser';
import {RelativeExprContext} from './SlickParser';
import {SetEnumExprContext} from './SlickParser';
import {FunctionCallExprContext} from './SlickParser';
import {AdditionExprContext} from './SlickParser';
import {LeibnizExprContext} from './SlickParser';
import {SetCompExprContext} from './SlickParser';
import {GeneralExprContext} from './SlickParser';
import {ParenExprContext} from './SlickParser';
import {TSExprContext} from './SlickParser';
import {JunctionExprContext} from './SlickParser';
import {QuantExprContext} from './SlickParser';
import {UnaryPrefixExprContext} from './SlickParser';
import {DocContext} from './SlickParser';
import {ProofContext} from './SlickParser';
import {SepContext} from './SlickParser';
import {HeaderContext} from './SlickParser';
import {TheoremContext} from './SlickParser';
import {MethodContext} from './SlickParser';
import {MethodNameContext} from './SlickParser';
import {StepContext} from './SlickParser';
import {ExprContext} from './SlickParser';
import {HintContext} from './SlickParser';
import {HintOpContext} from './SlickParser';
import {VarlistContext} from './SlickParser';
import {ExprlistContext} from './SlickParser';
import {QuantifiedExprContext} from './SlickParser';
import {SetEnumerationContext} from './SlickParser';
import {SetComprehensionContext} from './SlickParser';
import {FunctionCallContext} from './SlickParser';
import {TypedVarContext} from './SlickParser';
import {Parser} from 'antlr4ts/Parser';

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
  private parser: SlickParser;
  private bible: Object;
  private latex: Object;
  private output: string;
  private input: string;
  private chars: ANTLRInputStream;
  private lexer: SlickLexer;
  private tokens: CommonTokenStream;
  private stack: Array<any>;
  private tree: DocContext;
  private preamble: string;

  constructor() {
    this.preamble =
      '\\documentclass[11pt]{amsart}\n' +
      '\\usepackage{times}\n' +
      '\\usepackage{amssymb,latexsym}\n' +
      '\\usepackage[usenames, dvipsnames]{color}\n' +
      '\\usepackage{ wasysym }\n' +
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
      '\\begin{document}\n' +
      '\\begin{tabbing}\n' +
      '99.\\;\\=(m)\\;\\=\\kill\n';
    const theoremsStr = JSON.stringify(theoremInput);
    this.bible = {};
    const theorems = JSON.parse(theoremsStr).theorems;
    for (let i = 0; i < theorems.length; i++) {
      const theorem = theorems[i];
      this.bible[theorem.rule] =
        '(' + theorem.rule + ') ' + (theorem.name ? '\\textbf{'
        + theorem.name.slice(0, 1).toUpperCase() + theorem.name.slice(1)
        + '}:\\ \\ ' : '\\ \\ ') + theorem.eq;
      }

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
  public exitDoc = (ctx: DocContext) => {
    this.output += this.preamble;
    while (this.stack.length > 0) {
      this.output += this.stack.shift() + '\n';
    }
  }

  public exitProof(ctx: ProofContext) {
    if (ctx.END()) {
      this.stack.push('\\done\n');
    }
  }

  public exitSep = (ctx: SepContext) => {
    this.stack.push('\\end{tabbing}\n\\newpage\n\\begin{tabbing}\n99.\\;\\=(m)\\;\\=\\kill\n');
  }


  public exitAtom = (ctx: AtomContext) => {
    this.stack.push(ctx.text);
  }

  public exitJunctionExpr = (ctx: JunctionExprContext) => {
    const rhs = this.stack.pop();
    const lhs = this.stack.pop();
    // @ts-ignore: Type: 'Terminal Node' Cannot be used as index type
    const x = lhs + ' ' + this.latex[ctx.JOP()] + ' ' + rhs;
    this.stack.push(x);
  }

  public exitImplicationExpr = (ctx: ImplicationExprContext) => {
    const rhs = this.stack.pop();
    const lhs = this.stack.pop();
    // @ts-ignore: Type: 'Terminal Node' Cannot be used as index type
    const x = lhs + ' ' + this.latex[ctx.IMPOP()] + ' ' + rhs;
    this.stack.push(x);
  }

  public exitEquivalenceExpr = (ctx: EquivalenceExprContext) => {
    const rhs = this.stack.pop();
    const lhs = this.stack.pop();
    // @ts-ignore: Type: 'Terminal Node' Cannot be used as index type
    const x = lhs + ' ' + this.latex[ctx.EQOP] + ' ' + rhs;
    this.stack.push(x);
  }

  public exitUnaryPrefixExpr = (ctx: UnaryPrefixExprContext) => {
    const rhs = this.stack.pop();
    const x = '\\neg ' + rhs;
    this.stack.push(x);
  }

  public exitParenExpr = (ctx: ParenExprContext) => {
    const e = this.stack.pop();
    const x = '(' + e + ')';
    this.stack.push(x);
  }

  public exitLeibnizExpr = (ctx: LeibnizExprContext) => {
    const z = this.stack.pop();
    const v = ctx.VAR().text;
    const e = this.stack.pop();
    const x = e + '^\{' + v + '\}_\{' + z + '\}';
    this.stack.push(x);
  }

  public exitStep = (ctx: StepContext) => {
    this.stack.push('\\Step\{' + this.stack.pop() + '\}');
  }

  public exitHint = (ctx: HintContext) => {
    let token = ctx.COMMENT().text;
    token = token.substr(1, token.length - 2);
    token = this.removeFm(token);
    const op = this.stack.pop();
    this.stack.push('\\\\$' + this.latex[op] + '$\\>\\>\\ \\ \\ $\\Gll$\\ \\text{' + token + '}\\ $\\Ggg$ \\\\');
  }

  public exitHintOp = (ctx: HintOpContext) => {
    this.stack.push(ctx.text);
  }

  public exitTheorem = (ctx: TheoremContext) => {
    // @ts-ignore: Type: 'Terminal Node' Cannot be used as index type
    const theorem = this.bible[ctx.RULENUM()];
    this.stack.push('Prove\\ ' + theorem + '\\\\ \\\\\n');
  }

  public removeFm(s: string) {
    const ops = Object.keys(this.latex);
    for (let i = 0; i < ops.length; i++) {
      s = s.replace(new RegExp(ops[i], 'g'), '$' + this.latex[ops[i]] + '$');
    }
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
    // @ts-ignore: Unreachable code error
    ParseTreeWalker.DEFAULT.walk(this, this.tree);
    return this.output;
  }
}
