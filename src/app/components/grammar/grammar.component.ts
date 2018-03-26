// import { Component, OnInit } from '@angular/core';
// import { ImplicationExprContext } from './SlickParser';
// import { EquivalenceExprContext } from './SlickParser';
// import { AtomContext } from './SlickParser';
// import { RelativeExprContext } from './SlickParser';
// import { SetEnumExprContext } from './SlickParser';
// import { FunctionCallExprContext } from './SlickParser';
// import { AdditionExprContext } from './SlickParser';
// import { LeibnizExprContext } from './SlickParser';
// import { SetCompExprContext } from './SlickParser';
// import { GeneralExprContext } from './SlickParser';
// import { ParenExprContext } from './SlickParser';
// import { TSExprContext } from './SlickParser';
// import { JunctionExprContext } from './SlickParser';
// import { QuantExprContext } from './SlickParser';
// import { UnaryPrefixExprContext } from './SlickParser';
// import { DocContext } from './SlickParser';
// import { ProofContext } from './SlickParser';
// import { SepContext } from './SlickParser';
// import { HeaderContext } from './SlickParser';
// import { TheoremContext } from './SlickParser';
// import { MethodContext } from './SlickParser';
// import { MethodNameContext } from './SlickParser';
// import { StepContext } from './SlickParser';
// import { ExprContext } from './SlickParser';
// import { HintContext } from './SlickParser';
// import { VarlistContext } from './SlickParser';
// import { ExprlistContext } from './SlickParser';
// import { QuantifiedExprContext } from './SlickParser';
// import { SetEnumerationContext } from './SlickParser';
// import { SetComprehensionContext } from './SlickParser';
// import { FunctionCallContext } from './SlickParser';
// import { TypedVarContext } from './SlickParser';
//
// import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
// import { TerminalNode, ParseTreeWalker } from 'antlr4ts/tree';
// import { TokenStream } from 'antlr4ts/tree';
// import { SlickParser } from './SlickParser';
// import { SlickListener } from './SlickListener';
// import { SlickLexer } from './SlickLexer';
//
// import * as fs from 'fs';
//
//
// @Component({
//   selector: 'app-grammar',
//   templateUrl: './grammar.component.html',
//   styleUrls: ['./grammar.component.scss']
// })
// export class SlickCompiler implements SlickListener {
//   private parser : SlickParser;
//   private bible : Object;
//   private latex : Object;
//   private output : string;
//   private preamble : string;
//   private input : string;
//   private chars : ANTLRInputStream;
//   private lexer : SlickLexer;
//   private tokens : CommonTokenStream;
//   private stack : Array;
//
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
