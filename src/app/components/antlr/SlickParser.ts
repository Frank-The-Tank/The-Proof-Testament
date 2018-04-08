// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT


import {ATN} from 'antlr4ts/atn/ATN';
import {ATNDeserializer} from 'antlr4ts/atn/ATNDeserializer';
import {FailedPredicateException} from 'antlr4ts/FailedPredicateException';
import {NotNull} from 'antlr4ts/Decorators';
import {NoViableAltException} from 'antlr4ts/NoViableAltException';
import {Override} from 'antlr4ts/Decorators';
import {Parser} from 'antlr4ts/Parser';
import {ParserRuleContext} from 'antlr4ts/ParserRuleContext';
import {ParserATNSimulator} from 'antlr4ts/atn/ParserATNSimulator';
import {ParseTreeListener} from 'antlr4ts/tree/ParseTreeListener';
import {ParseTreeVisitor} from 'antlr4ts/tree/ParseTreeVisitor';
import {RecognitionException} from 'antlr4ts/RecognitionException';
import {RuleContext} from 'antlr4ts/RuleContext';
import {RuleVersion} from 'antlr4ts/RuleVersion';
import {TerminalNode} from 'antlr4ts/tree/TerminalNode';
import {Token} from 'antlr4ts/Token';
import {TokenStream} from 'antlr4ts/TokenStream';
import {Vocabulary} from 'antlr4ts/Vocabulary';
import {VocabularyImpl} from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import {SlickListener} from './SlickListener';
import {SlickVisitor} from './SlickVisitor';


export class DocContext extends ParserRuleContext {
  public proof(): ProofContext[];
  public proof(i: number): ProofContext;
  public proof(i?: number): ProofContext | ProofContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ProofContext);
    } else {
      return this.getRuleContext(i, ProofContext);
    }
  }

  public sep(): SepContext[];
  public sep(i: number): SepContext;
  public sep(i?: number): SepContext | SepContext[] {
    if (i === undefined) {
      return this.getRuleContexts(SepContext);
    } else {
      return this.getRuleContext(i, SepContext);
    }
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_doc;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterDoc) listener.enterDoc(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitDoc) listener.exitDoc(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitDoc) return visitor.visitDoc(this);
    else return visitor.visitChildren(this);
  }
}


export class ProofContext extends ParserRuleContext {
  public standardProof(): StandardProofContext | undefined {
    return this.tryGetRuleContext(0, StandardProofContext);
  }

  public caseProof(): CaseProofContext | undefined {
    return this.tryGetRuleContext(0, CaseProofContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_proof;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterProof) listener.enterProof(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitProof) listener.exitProof(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitProof) return visitor.visitProof(this);
    else return visitor.visitChildren(this);
  }
}


export class StandardProofContext extends ParserRuleContext {
  public step(): StepContext[];
  public step(i: number): StepContext;
  public step(i?: number): StepContext | StepContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StepContext);
    } else {
      return this.getRuleContext(i, StepContext);
    }
  }

  public header(): HeaderContext | undefined {
    return this.tryGetRuleContext(0, HeaderContext);
  }

  public startExpo(): StartExpoContext | undefined {
    return this.tryGetRuleContext(0, StartExpoContext);
  }

  public hint(): HintContext[];
  public hint(i: number): HintContext;
  public hint(i?: number): HintContext | HintContext[] {
    if (i === undefined) {
      return this.getRuleContexts(HintContext);
    } else {
      return this.getRuleContext(i, HintContext);
    }
  }

  public END(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.END, 0);
  }

  public endExpo(): EndExpoContext | undefined {
    return this.tryGetRuleContext(0, EndExpoContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_standardProof;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterStandardProof) listener.enterStandardProof(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitStandardProof) listener.exitStandardProof(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitStandardProof) return visitor.visitStandardProof(this);
    else return visitor.visitChildren(this);
  }
}


export class StartExpoContext extends ParserRuleContext {
  public EXPO(): TerminalNode {
    return this.getToken(SlickParser.EXPO, 0);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_startExpo;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterStartExpo) listener.enterStartExpo(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitStartExpo) listener.exitStartExpo(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitStartExpo) return visitor.visitStartExpo(this);
    else return visitor.visitChildren(this);
  }
}


export class EndExpoContext extends ParserRuleContext {
  public EXPO(): TerminalNode {
    return this.getToken(SlickParser.EXPO, 0);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_endExpo;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterEndExpo) listener.enterEndExpo(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitEndExpo) listener.exitEndExpo(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitEndExpo) return visitor.visitEndExpo(this);
    else return visitor.visitChildren(this);
  }
}


export class SepContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_sep;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterSep) listener.enterSep(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitSep) listener.exitSep(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitSep) return visitor.visitSep(this);
    else return visitor.visitChildren(this);
  }
}


export class HeaderContext extends ParserRuleContext {
  public theorem(): TheoremContext {
    return this.getRuleContext(0, TheoremContext);
  }

  public method(): MethodContext | undefined {
    return this.tryGetRuleContext(0, MethodContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_header;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterHeader) listener.enterHeader(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitHeader) listener.exitHeader(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitHeader) return visitor.visitHeader(this);
    else return visitor.visitChildren(this);
  }
}


export class TheoremContext extends ParserRuleContext {
  constructor();
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent?: ParserRuleContext, invokingState?: number) {
    if (parent !== undefined && invokingState !== undefined) {
      super(parent, invokingState);
    } else {
      super();
    }
  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_theorem;
  }

  public copyFrom(ctx: TheoremContext): void {
    super.copyFrom(ctx);
  }
}

export class AdHocTheoremContext extends TheoremContext {
  public PROVE(): TerminalNode {
    return this.getToken(SlickParser.PROVE, 0);
  }

  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(ctx: TheoremContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterAdHocTheorem) listener.enterAdHocTheorem(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitAdHocTheorem) listener.exitAdHocTheorem(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitAdHocTheorem) return visitor.visitAdHocTheorem(this);
    else return visitor.visitChildren(this);
  }
}

export class BibleTheoremContext extends TheoremContext {
  public PROVE(): TerminalNode {
    return this.getToken(SlickParser.PROVE, 0);
  }

  public RULENUM(): TerminalNode {
    return this.getToken(SlickParser.RULENUM, 0);
  }

  constructor(ctx: TheoremContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterBibleTheorem) listener.enterBibleTheorem(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitBibleTheorem) listener.exitBibleTheorem(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitBibleTheorem) return visitor.visitBibleTheorem(this);
    else return visitor.visitChildren(this);
  }
}


export class MethodContext extends ParserRuleContext {
  public methodName(): MethodNameContext {
    return this.getRuleContext(0, MethodNameContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_method;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterMethod) listener.enterMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitMethod) listener.exitMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitMethod) return visitor.visitMethod(this);
    else return visitor.visitChildren(this);
  }
}


export class MethodNameContext extends ParserRuleContext {
  constructor();
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent?: ParserRuleContext, invokingState?: number) {
    if (parent !== undefined && invokingState !== undefined) {
      super(parent, invokingState);
    } else {
      super();
    }
  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_methodName;
  }

  public copyFrom(ctx: MethodNameContext): void {
    super.copyFrom(ctx);
  }
}

export class PreviousTheoremMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterPreviousTheoremMethod) listener.enterPreviousTheoremMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitPreviousTheoremMethod) listener.exitPreviousTheoremMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitPreviousTheoremMethod) return visitor.visitPreviousTheoremMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class RightEquivalesLeftMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterRightEquivalesLeftMethod) listener.enterRightEquivalesLeftMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitRightEquivalesLeftMethod) listener.exitRightEquivalesLeftMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitRightEquivalesLeftMethod) return visitor.visitRightEquivalesLeftMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class RightFollowsLeftMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterRightFollowsLeftMethod) listener.enterRightFollowsLeftMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitRightFollowsLeftMethod) listener.exitRightFollowsLeftMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitRightFollowsLeftMethod) return visitor.visitRightFollowsLeftMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class LeftEquivalesRightMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterLeftEquivalesRightMethod) listener.enterLeftEquivalesRightMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitLeftEquivalesRightMethod) listener.exitLeftEquivalesRightMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitLeftEquivalesRightMethod) return visitor.visitLeftEquivalesRightMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class ContrapositiveMethodContext extends MethodNameContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterContrapositiveMethod) listener.enterContrapositiveMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitContrapositiveMethod) listener.exitContrapositiveMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitContrapositiveMethod) return visitor.visitContrapositiveMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class AssumingConjunctsMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterAssumingConjunctsMethod) listener.enterAssumingConjunctsMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitAssumingConjunctsMethod) listener.exitAssumingConjunctsMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitAssumingConjunctsMethod) return visitor.visitAssumingConjunctsMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class LeftImpliesRightMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterLeftImpliesRightMethod) listener.enterLeftImpliesRightMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitLeftImpliesRightMethod) listener.exitLeftImpliesRightMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitLeftImpliesRightMethod) return visitor.visitLeftImpliesRightMethod(this);
    else return visitor.visitChildren(this);
  }
}

export class ContradictionMethodContext extends MethodNameContext {
  constructor(ctx: MethodNameContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterContradictionMethod) listener.enterContradictionMethod(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitContradictionMethod) listener.exitContradictionMethod(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitContradictionMethod) return visitor.visitContradictionMethod(this);
    else return visitor.visitChildren(this);
  }
}


export class CaseProofContext extends ParserRuleContext {
  public theorem(): TheoremContext {
    return this.getRuleContext(0, TheoremContext);
  }

  public VAR(): TerminalNode {
    return this.getToken(SlickParser.VAR, 0);
  }

  public caseList(): CaseListContext {
    return this.getRuleContext(0, CaseListContext);
  }

  public caseProof1(): CaseProof1Context {
    return this.getRuleContext(0, CaseProof1Context);
  }

  public caseProof2(): CaseProof2Context {
    return this.getRuleContext(0, CaseProof2Context);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_caseProof;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCaseProof) listener.enterCaseProof(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCaseProof) listener.exitCaseProof(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCaseProof) return visitor.visitCaseProof(this);
    else return visitor.visitChildren(this);
  }
}


export class CaseVariableContext extends ParserRuleContext {
  public VAR(): TerminalNode {
    return this.getToken(SlickParser.VAR, 0);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_caseVariable;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCaseVariable) listener.enterCaseVariable(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCaseVariable) listener.exitCaseVariable(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCaseVariable) return visitor.visitCaseVariable(this);
    else return visitor.visitChildren(this);
  }
}


export class CaseListContext extends ParserRuleContext {
  public case1(): Case1Context {
    return this.getRuleContext(0, Case1Context);
  }

  public case2(): Case2Context {
    return this.getRuleContext(0, Case2Context);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_caseList;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCaseList) listener.enterCaseList(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCaseList) listener.exitCaseList(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCaseList) return visitor.visitCaseList(this);
    else return visitor.visitChildren(this);
  }
}


export class Case1Context extends ParserRuleContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_case1;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCase1) listener.enterCase1(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCase1) listener.exitCase1(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCase1) return visitor.visitCase1(this);
    else return visitor.visitChildren(this);
  }
}


export class Case2Context extends ParserRuleContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_case2;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCase2) listener.enterCase2(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCase2) listener.exitCase2(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCase2) return visitor.visitCase2(this);
    else return visitor.visitChildren(this);
  }
}


export class CaseProof1Context extends ParserRuleContext {
  public standardProof(): StandardProofContext {
    return this.getRuleContext(0, StandardProofContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_caseProof1;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCaseProof1) listener.enterCaseProof1(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCaseProof1) listener.exitCaseProof1(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCaseProof1) return visitor.visitCaseProof1(this);
    else return visitor.visitChildren(this);
  }
}


export class CaseProof2Context extends ParserRuleContext {
  public standardProof(): StandardProofContext {
    return this.getRuleContext(0, StandardProofContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_caseProof2;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterCaseProof2) listener.enterCaseProof2(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitCaseProof2) listener.exitCaseProof2(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitCaseProof2) return visitor.visitCaseProof2(this);
    else return visitor.visitChildren(this);
  }
}


export class StepContext extends ParserRuleContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_step;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterStep) listener.enterStep(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitStep) listener.exitStep(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitStep) return visitor.visitStep(this);
    else return visitor.visitChildren(this);
  }
}


export class ExprContext extends ParserRuleContext {
  constructor();
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent?: ParserRuleContext, invokingState?: number) {
    if (parent !== undefined && invokingState !== undefined) {
      super(parent, invokingState);
    } else {
      super();
    }
  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_expr;
  }

  public copyFrom(ctx: ExprContext): void {
    super.copyFrom(ctx);
  }
}

export class ImplicationExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  public IMPOP(): TerminalNode {
    return this.getToken(SlickParser.IMPOP, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterImplicationExpr) listener.enterImplicationExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitImplicationExpr) listener.exitImplicationExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitImplicationExpr) return visitor.visitImplicationExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class EquivalenceExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  public EQOP(): TerminalNode {
    return this.getToken(SlickParser.EQOP, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterEquivalenceExpr) listener.enterEquivalenceExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitEquivalenceExpr) listener.exitEquivalenceExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitEquivalenceExpr) return visitor.visitEquivalenceExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class AtomContext extends ExprContext {
  public EVAR(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.EVAR, 0);
  }

  public VAR(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.VAR, 0);
  }

  public NUM(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.NUM, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterAtom) listener.enterAtom(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitAtom) listener.exitAtom(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitAtom) return visitor.visitAtom(this);
    else return visitor.visitChildren(this);
  }
}

export class RelativeExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  public RELOP(): TerminalNode {
    return this.getToken(SlickParser.RELOP, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterRelativeExpr) listener.enterRelativeExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitRelativeExpr) listener.exitRelativeExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitRelativeExpr) return visitor.visitRelativeExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class SetEnumExprContext extends ExprContext {
  public setEnumeration(): SetEnumerationContext {
    return this.getRuleContext(0, SetEnumerationContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterSetEnumExpr) listener.enterSetEnumExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitSetEnumExpr) listener.exitSetEnumExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitSetEnumExpr) return visitor.visitSetEnumExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class FunctionCallExprContext extends ExprContext {
  public functionCall(): FunctionCallContext {
    return this.getRuleContext(0, FunctionCallContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterFunctionCallExpr) listener.enterFunctionCallExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitFunctionCallExpr) listener.exitFunctionCallExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitFunctionCallExpr) return visitor.visitFunctionCallExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class AdditionExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  public ADDOP(): TerminalNode {
    return this.getToken(SlickParser.ADDOP, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterAdditionExpr) listener.enterAdditionExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitAdditionExpr) listener.exitAdditionExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitAdditionExpr) return visitor.visitAdditionExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class LeibnizExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  public VAR(): TerminalNode {
    return this.getToken(SlickParser.VAR, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterLeibnizExpr) listener.enterLeibnizExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitLeibnizExpr) listener.exitLeibnizExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitLeibnizExpr) return visitor.visitLeibnizExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class SetCompExprContext extends ExprContext {
  public setComprehension(): SetComprehensionContext {
    return this.getRuleContext(0, SetComprehensionContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterSetCompExpr) listener.enterSetCompExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitSetCompExpr) listener.exitSetCompExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitSetCompExpr) return visitor.visitSetCompExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class GeneralExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterGeneralExpr) listener.enterGeneralExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitGeneralExpr) listener.exitGeneralExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitGeneralExpr) return visitor.visitGeneralExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class ParenExprContext extends ExprContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterParenExpr) listener.enterParenExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitParenExpr) listener.exitParenExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitParenExpr) return visitor.visitParenExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class TSExprContext extends ExprContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  public varlist(): VarlistContext {
    return this.getRuleContext(0, VarlistContext);
  }

  public exprlist(): ExprlistContext {
    return this.getRuleContext(0, ExprlistContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterTSExpr) listener.enterTSExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitTSExpr) listener.exitTSExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitTSExpr) return visitor.visitTSExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class JunctionExprContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  public JOP(): TerminalNode {
    return this.getToken(SlickParser.JOP, 0);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterJunctionExpr) listener.enterJunctionExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitJunctionExpr) listener.exitJunctionExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitJunctionExpr) return visitor.visitJunctionExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class QuantExprContext extends ExprContext {
  public quantifiedExpr(): QuantifiedExprContext {
    return this.getRuleContext(0, QuantifiedExprContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterQuantExpr) listener.enterQuantExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitQuantExpr) listener.exitQuantExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitQuantExpr) return visitor.visitQuantExpr(this);
    else return visitor.visitChildren(this);
  }
}

export class UnaryPrefixExprContext extends ExprContext {
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(ctx: ExprContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterUnaryPrefixExpr) listener.enterUnaryPrefixExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitUnaryPrefixExpr) listener.exitUnaryPrefixExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitUnaryPrefixExpr) return visitor.visitUnaryPrefixExpr(this);
    else return visitor.visitChildren(this);
  }
}


export class HintContext extends ParserRuleContext {
  public hintOp(): HintOpContext {
    return this.getRuleContext(0, HintOpContext);
  }

  public COMMENT(): TerminalNode {
    return this.getToken(SlickParser.COMMENT, 0);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_hint;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterHint) listener.enterHint(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitHint) listener.exitHint(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitHint) return visitor.visitHint(this);
    else return visitor.visitChildren(this);
  }
}


export class HintOpContext extends ParserRuleContext {
  public RELOP(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.RELOP, 0);
  }

  public IMPOP(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.IMPOP, 0);
  }

  public EQOP(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.EQOP, 0);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_hintOp;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterHintOp) listener.enterHintOp(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitHintOp) listener.exitHintOp(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitHintOp) return visitor.visitHintOp(this);
    else return visitor.visitChildren(this);
  }
}


export class VarlistContext extends ParserRuleContext {
  public typedVar(): TypedVarContext[];
  public typedVar(i: number): TypedVarContext;
  public typedVar(i?: number): TypedVarContext | TypedVarContext[] {
    if (i === undefined) {
      return this.getRuleContexts(TypedVarContext);
    } else {
      return this.getRuleContext(i, TypedVarContext);
    }
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_varlist;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterVarlist) listener.enterVarlist(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitVarlist) listener.exitVarlist(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitVarlist) return visitor.visitVarlist(this);
    else return visitor.visitChildren(this);
  }
}


export class ExprlistContext extends ParserRuleContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_exprlist;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterExprlist) listener.enterExprlist(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitExprlist) listener.exitExprlist(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitExprlist) return visitor.visitExprlist(this);
    else return visitor.visitChildren(this);
  }
}


export class QuantifiedExprContext extends ParserRuleContext {
  public QUANTIFIER(): TerminalNode {
    return this.getToken(SlickParser.QUANTIFIER, 0);
  }

  public varlist(): VarlistContext {
    return this.getRuleContext(0, VarlistContext);
  }

  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_quantifiedExpr;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterQuantifiedExpr) listener.enterQuantifiedExpr(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitQuantifiedExpr) listener.exitQuantifiedExpr(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitQuantifiedExpr) return visitor.visitQuantifiedExpr(this);
    else return visitor.visitChildren(this);
  }
}


export class SetEnumerationContext extends ParserRuleContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_setEnumeration;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterSetEnumeration) listener.enterSetEnumeration(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitSetEnumeration) listener.exitSetEnumeration(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitSetEnumeration) return visitor.visitSetEnumeration(this);
    else return visitor.visitChildren(this);
  }
}


export class SetComprehensionContext extends ParserRuleContext {
  public typedVar(): TypedVarContext {
    return this.getRuleContext(0, TypedVarContext);
  }

  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_setComprehension;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterSetComprehension) listener.enterSetComprehension(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitSetComprehension) listener.exitSetComprehension(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitSetComprehension) return visitor.visitSetComprehension(this);
    else return visitor.visitChildren(this);
  }
}


export class FunctionCallContext extends ParserRuleContext {
  constructor();
  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent?: ParserRuleContext, invokingState?: number) {
    if (parent !== undefined && invokingState !== undefined) {
      super(parent, invokingState);
    } else {
      super();
    }
  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_functionCall;
  }

  public copyFrom(ctx: FunctionCallContext): void {
    super.copyFrom(ctx);
  }
}

export class FunctionDotContext extends FunctionCallContext {
  public VAR(): TerminalNode {
    return this.getToken(SlickParser.VAR, 0);
  }

  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }

  constructor(ctx: FunctionCallContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterFunctionDot) listener.enterFunctionDot(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitFunctionDot) listener.exitFunctionDot(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitFunctionDot) return visitor.visitFunctionDot(this);
    else return visitor.visitChildren(this);
  }
}

export class FunctionParenContext extends FunctionCallContext {
  public VAR(): TerminalNode {
    return this.getToken(SlickParser.VAR, 0);
  }

  public exprlist(): ExprlistContext {
    return this.getRuleContext(0, ExprlistContext);
  }

  constructor(ctx: FunctionCallContext) {
    super();
    this.copyFrom(ctx);
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterFunctionParen) listener.enterFunctionParen(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitFunctionParen) listener.exitFunctionParen(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitFunctionParen) return visitor.visitFunctionParen(this);
    else return visitor.visitChildren(this);
  }
}


export class TypedVarContext extends ParserRuleContext {
  public VAR(): TerminalNode {
    return this.getToken(SlickParser.VAR, 0);
  }

  public TYPE(): TerminalNode | undefined {
    return this.tryGetToken(SlickParser.TYPE, 0);
  }

  constructor(parent: ParserRuleContext, invokingState: number);
  constructor(parent: ParserRuleContext, invokingState: number) {
    super(parent, invokingState);

  }

  @Override
  public get ruleIndex(): number {
    return SlickParser.RULE_typedVar;
  }

  @Override
  public enterRule(listener: SlickListener): void {
    if (listener.enterTypedVar) listener.enterTypedVar(this);
  }

  @Override
  public exitRule(listener: SlickListener): void {
    if (listener.exitTypedVar) listener.exitTypedVar(this);
  }

  @Override
  public accept<Result>(visitor: SlickVisitor<Result>): Result {
    if (visitor.visitTypedVar) return visitor.visitTypedVar(this);
    else return visitor.visitChildren(this);
  }
}


export class SlickParser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly T__7 = 8;
  public static readonly T__8 = 9;
  public static readonly T__9 = 10;
  public static readonly T__10 = 11;
  public static readonly T__11 = 12;
  public static readonly T__12 = 13;
  public static readonly T__13 = 14;
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly T__17 = 18;
  public static readonly T__18 = 19;
  public static readonly T__19 = 20;
  public static readonly T__20 = 21;
  public static readonly T__21 = 22;
  public static readonly T__22 = 23;
  public static readonly T__23 = 24;
  public static readonly T__24 = 25;
  public static readonly T__25 = 26;
  public static readonly T__26 = 27;
  public static readonly T__27 = 28;
  public static readonly T__28 = 29;
  public static readonly T__29 = 30;
  public static readonly T__30 = 31;
  public static readonly T__31 = 32;
  public static readonly T__32 = 33;
  public static readonly T__33 = 34;
  public static readonly T__34 = 35;
  public static readonly T__35 = 36;
  public static readonly T__36 = 37;
  public static readonly T__37 = 38;
  public static readonly T__38 = 39;
  public static readonly T__39 = 40;
  public static readonly T__40 = 41;
  public static readonly T__41 = 42;
  public static readonly T__42 = 43;
  public static readonly T__43 = 44;
  public static readonly T__44 = 45;
  public static readonly T__45 = 46;
  public static readonly COMMENT = 47;
  public static readonly EXPO = 48;
  public static readonly PROVE = 49;
  public static readonly RULENUM = 50;
  public static readonly EVAR = 51;
  public static readonly VAR = 52;
  public static readonly TYPE = 53;
  public static readonly NUM = 54;
  public static readonly ADDOP = 55;
  public static readonly RELOP = 56;
  public static readonly JOP = 57;
  public static readonly IMPOP = 58;
  public static readonly EQOP = 59;
  public static readonly QUANTIFIER = 60;
  public static readonly WS = 61;
  public static readonly END = 62;
  public static readonly RULE_doc = 0;
  public static readonly RULE_proof = 1;
  public static readonly RULE_standardProof = 2;
  public static readonly RULE_startExpo = 3;
  public static readonly RULE_endExpo = 4;
  public static readonly RULE_sep = 5;
  public static readonly RULE_header = 6;
  public static readonly RULE_theorem = 7;
  public static readonly RULE_method = 8;
  public static readonly RULE_methodName = 9;
  public static readonly RULE_caseProof = 10;
  public static readonly RULE_caseVariable = 11;
  public static readonly RULE_caseList = 12;
  public static readonly RULE_case1 = 13;
  public static readonly RULE_case2 = 14;
  public static readonly RULE_caseProof1 = 15;
  public static readonly RULE_caseProof2 = 16;
  public static readonly RULE_step = 17;
  public static readonly RULE_expr = 18;
  public static readonly RULE_hint = 19;
  public static readonly RULE_hintOp = 20;
  public static readonly RULE_varlist = 21;
  public static readonly RULE_exprlist = 22;
  public static readonly RULE_quantifiedExpr = 23;
  public static readonly RULE_setEnumeration = 24;
  public static readonly RULE_setComprehension = 25;
  public static readonly RULE_functionCall = 26;
  public static readonly RULE_typedVar = 27;
  public static readonly ruleNames: string[] = [
    'doc', 'proof', 'standardProof', 'startExpo', 'endExpo', 'sep', 'header',
    'theorem', 'method', 'methodName', 'caseProof', 'caseVariable', 'caseList',
    'case1', 'case2', 'caseProof1', 'caseProof2', 'step', 'expr', 'hint',
    'hintOp', 'varlist', 'exprlist', 'quantifiedExpr', 'setEnumeration', 'setComprehension',
    'functionCall', 'typedVar'
  ];

  private static readonly _LITERAL_NAMES: (string | undefined)[] = [
    undefined, '\'-\'', '\'by\'', '\'showing\'', '\'equivalence\'', '\'to\'', '\'previous\'',
    '\'theorem\'', '\'the\'', '\'LHS\'', '\'is\'', '\'equivalent\'', '\'RHS\'', '\'implies\'',
    '\'follows\'', '\'from\'', '\'assuming\'', '\'conjuncts\'', '\'of\'', '\'antecedent\'',
    '\'contradiction\'', '\'proving\'', '\'contrapositive\'', '\':\'', '\'case\'', '\'analysis\'',
    '\'on\'', '\'anlaysis\'', '\'Must\'', '\'prove\'', '\'(1)\'', '\'(2)\'', '\'Proof\'',
    '\'[\'', '\'≔\'', '\']\'', '\',\'', '\'¬\'', '\'★\'', '\'true\'', '\'false\'', '\'(\'',
    '\')\'', '\'|\'', '\'{\'', '\'}\'', '\'.\'', undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, '\'╱╱\''
  ];
  private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, 'COMMENT', 'EXPO',
    'PROVE', 'RULENUM', 'EVAR', 'VAR', 'TYPE', 'NUM', 'ADDOP', 'RELOP', 'JOP',
    'IMPOP', 'EQOP', 'QUANTIFIER', 'WS', 'END'
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SlickParser._LITERAL_NAMES, SlickParser._SYMBOLIC_NAMES, []);

  @Override
  @NotNull
  public get vocabulary(): Vocabulary {
    return SlickParser.VOCABULARY;
  }

  @Override
  public get grammarFileName(): string {
    return 'Slick.g4';
  }

  @Override
  public get ruleNames(): string[] {
    return SlickParser.ruleNames;
  }

  @Override
  public get serializedATN(): string {
    return SlickParser._serializedATN;
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(SlickParser._ATN, this);
  }

  @RuleVersion(0)
  public doc(): DocContext {
    let _localctx: DocContext = new DocContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, SlickParser.RULE_doc);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 56;
        this.proof();
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SlickParser.T__0) {
          {
            {
              this.state = 57;
              this.sep();
              this.state = 58;
              this.proof();
            }
          }
          this.state = 64;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public proof(): ProofContext {
    let _localctx: ProofContext = new ProofContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, SlickParser.RULE_proof);
    try {
      this.state = 67;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 65;
          this.standardProof();
        }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 66;
          this.caseProof();
        }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public standardProof(): StandardProofContext {
    let _localctx: StandardProofContext = new StandardProofContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, SlickParser.RULE_standardProof);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SlickParser.PROVE) {
          {
            this.state = 69;
            this.header();
          }
        }

        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SlickParser.EXPO) {
          {
            this.state = 72;
            this.startExpo();
          }
        }

        this.state = 75;
        this.step();
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (SlickParser.RELOP - 56)) | (1 << (SlickParser.IMPOP - 56)) | (1 << (SlickParser.EQOP - 56)))) !== 0)) {
          {
            {
              this.state = 76;
              this.hint();
              this.state = 77;
              this.step();
            }
          }
          this.state = 83;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SlickParser.END) {
          {
            this.state = 84;
            this.match(SlickParser.END);
          }
        }

        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SlickParser.EXPO) {
          {
            this.state = 87;
            this.endExpo();
          }
        }

      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public startExpo(): StartExpoContext {
    let _localctx: StartExpoContext = new StartExpoContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, SlickParser.RULE_startExpo);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 90;
        this.match(SlickParser.EXPO);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public endExpo(): EndExpoContext {
    let _localctx: EndExpoContext = new EndExpoContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, SlickParser.RULE_endExpo);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 92;
        this.match(SlickParser.EXPO);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public sep(): SepContext {
    let _localctx: SepContext = new SepContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, SlickParser.RULE_sep);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 94;
        this.match(SlickParser.T__0);
        this.state = 95;
        this.match(SlickParser.T__0);
        this.state = 96;
        this.match(SlickParser.T__0);
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 97;
              this.match(SlickParser.T__0);
            }
          }
          this.state = 100;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === SlickParser.T__0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public header(): HeaderContext {
    let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, SlickParser.RULE_header);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 102;
        this.theorem();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SlickParser.T__1) {
          {
            this.state = 103;
            this.method();
          }
        }

      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public theorem(): TheoremContext {
    let _localctx: TheoremContext = new TheoremContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, SlickParser.RULE_theorem);
    try {
      this.state = 110;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          _localctx = new BibleTheoremContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 106;
          this.match(SlickParser.PROVE);
          this.state = 107;
          this.match(SlickParser.RULENUM);
        }
          break;

        case 2:
          _localctx = new AdHocTheoremContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 108;
          this.match(SlickParser.PROVE);
          this.state = 109;
          this.expr(0);
        }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public method(): MethodContext {
    let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, SlickParser.RULE_method);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 112;
        this.match(SlickParser.T__1);
        this.state = 113;
        this.methodName();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public methodName(): MethodNameContext {
    let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, SlickParser.RULE_methodName);
    try {
      this.state = 161;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          _localctx = new PreviousTheoremMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 115;
          this.match(SlickParser.T__2);
          this.state = 116;
          this.match(SlickParser.T__3);
          this.state = 117;
          this.match(SlickParser.T__4);
          this.state = 118;
          this.match(SlickParser.T__5);
          this.state = 119;
          this.match(SlickParser.T__6);
        }
          break;

        case 2:
          _localctx = new LeftEquivalesRightMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 120;
          this.match(SlickParser.T__2);
          this.state = 121;
          this.match(SlickParser.T__7);
          this.state = 122;
          this.match(SlickParser.T__8);
          this.state = 123;
          this.match(SlickParser.T__9);
          this.state = 124;
          this.match(SlickParser.T__10);
          this.state = 125;
          this.match(SlickParser.T__4);
          this.state = 126;
          this.match(SlickParser.T__7);
          this.state = 127;
          this.match(SlickParser.T__11);
        }
          break;

        case 3:
          _localctx = new RightEquivalesLeftMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 3);
        {
          this.state = 128;
          this.match(SlickParser.T__2);
          this.state = 129;
          this.match(SlickParser.T__7);
          this.state = 130;
          this.match(SlickParser.T__11);
          this.state = 131;
          this.match(SlickParser.T__9);
          this.state = 132;
          this.match(SlickParser.T__10);
          this.state = 133;
          this.match(SlickParser.T__4);
          this.state = 134;
          this.match(SlickParser.T__7);
          this.state = 135;
          this.match(SlickParser.T__8);
        }
          break;

        case 4:
          _localctx = new LeftImpliesRightMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 4);
        {
          this.state = 136;
          this.match(SlickParser.T__2);
          this.state = 137;
          this.match(SlickParser.T__7);
          this.state = 138;
          this.match(SlickParser.T__8);
          this.state = 139;
          this.match(SlickParser.T__12);
          this.state = 140;
          this.match(SlickParser.T__7);
          this.state = 141;
          this.match(SlickParser.T__11);
        }
          break;

        case 5:
          _localctx = new RightFollowsLeftMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 5);
        {
          this.state = 142;
          this.match(SlickParser.T__2);
          this.state = 143;
          this.match(SlickParser.T__7);
          this.state = 144;
          this.match(SlickParser.T__11);
          this.state = 145;
          this.match(SlickParser.T__13);
          this.state = 146;
          this.match(SlickParser.T__14);
          this.state = 147;
          this.match(SlickParser.T__7);
          this.state = 148;
          this.match(SlickParser.T__8);
        }
          break;

        case 6:
          _localctx = new AssumingConjunctsMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 6);
        {
          this.state = 149;
          this.match(SlickParser.T__15);
          this.state = 150;
          this.match(SlickParser.T__7);
          this.state = 151;
          this.match(SlickParser.T__16);
          this.state = 152;
          this.match(SlickParser.T__17);
          this.state = 153;
          this.match(SlickParser.T__7);
          this.state = 154;
          this.match(SlickParser.T__18);
        }
          break;

        case 7:
          _localctx = new ContradictionMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 7);
        {
          this.state = 155;
          this.match(SlickParser.T__19);
        }
          break;

        case 8:
          _localctx = new ContrapositiveMethodContext(_localctx);
          this.enterOuterAlt(_localctx, 8);
        {
          this.state = 156;
          this.match(SlickParser.T__20);
          this.state = 157;
          this.match(SlickParser.T__7);
          this.state = 158;
          this.match(SlickParser.T__21);
          this.state = 159;
          this.match(SlickParser.T__22);
          this.state = 160;
          this.expr(0);
        }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public caseProof(): CaseProofContext {
    let _localctx: CaseProofContext = new CaseProofContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, SlickParser.RULE_caseProof);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 163;
        this.theorem();
        this.state = 164;
        this.match(SlickParser.T__1);
        this.state = 165;
        this.match(SlickParser.T__23);
        this.state = 166;
        this.match(SlickParser.T__24);
        this.state = 167;
        this.match(SlickParser.T__25);
        this.state = 168;
        this.match(SlickParser.VAR);
        this.state = 169;
        this.caseList();
        this.state = 170;
        this.caseProof1();
        this.state = 171;
        this.caseProof2();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public caseVariable(): CaseVariableContext {
    let _localctx: CaseVariableContext = new CaseVariableContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, SlickParser.RULE_caseVariable);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 173;
        this.match(SlickParser.T__1);
        this.state = 174;
        this.match(SlickParser.T__23);
        this.state = 175;
        this.match(SlickParser.T__26);
        this.state = 176;
        this.match(SlickParser.T__25);
        this.state = 177;
        this.match(SlickParser.VAR);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public caseList(): CaseListContext {
    let _localctx: CaseListContext = new CaseListContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, SlickParser.RULE_caseList);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 179;
        this.match(SlickParser.T__27);
        this.state = 180;
        this.match(SlickParser.T__28);
        this.state = 181;
        this.case1();
        this.state = 182;
        this.case2();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public case1(): Case1Context {
    let _localctx: Case1Context = new Case1Context(this._ctx, this.state);
    this.enterRule(_localctx, 26, SlickParser.RULE_case1);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 184;
        this.match(SlickParser.T__29);
        this.state = 185;
        this.expr(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public case2(): Case2Context {
    let _localctx: Case2Context = new Case2Context(this._ctx, this.state);
    this.enterRule(_localctx, 28, SlickParser.RULE_case2);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 187;
        this.match(SlickParser.T__30);
        this.state = 188;
        this.expr(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public caseProof1(): CaseProof1Context {
    let _localctx: CaseProof1Context = new CaseProof1Context(this._ctx, this.state);
    this.enterRule(_localctx, 30, SlickParser.RULE_caseProof1);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 190;
        this.match(SlickParser.T__31);
        this.state = 191;
        this.match(SlickParser.T__17);
        this.state = 192;
        this.match(SlickParser.T__29);
        this.state = 193;
        this.standardProof();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public caseProof2(): CaseProof2Context {
    let _localctx: CaseProof2Context = new CaseProof2Context(this._ctx, this.state);
    this.enterRule(_localctx, 32, SlickParser.RULE_caseProof2);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 195;
        this.match(SlickParser.T__31);
        this.state = 196;
        this.match(SlickParser.T__17);
        this.state = 197;
        this.match(SlickParser.T__30);
        this.state = 198;
        this.standardProof();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public step(): StepContext {
    let _localctx: StepContext = new StepContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, SlickParser.RULE_step);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 200;
        this.expr(0);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  public expr(): ExprContext;
  public expr(_p: number): ExprContext;
  @RuleVersion(0)
  public expr(_p?: number): ExprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
    let _prevctx: ExprContext = _localctx;
    let _startState: number = 36;
    this.enterRecursionRule(_localctx, 36, SlickParser.RULE_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 218;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
          case 1: {
            _localctx = new FunctionCallExprContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;

            this.state = 203;
            this.functionCall();
          }
            break;

          case 2: {
            _localctx = new UnaryPrefixExprContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 204;
            this.match(SlickParser.T__36);
            this.state = 205;
            this.expr(16);
          }
            break;

          case 3: {
            _localctx = new AtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 206;
            this.match(SlickParser.EVAR);
          }
            break;

          case 4: {
            _localctx = new AtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 207;
            this.match(SlickParser.VAR);
          }
            break;

          case 5: {
            _localctx = new AtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 208;
            this.match(SlickParser.T__38);
          }
            break;

          case 6: {
            _localctx = new AtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 209;
            this.match(SlickParser.T__39);
          }
            break;

          case 7: {
            _localctx = new AtomContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 210;
            this.match(SlickParser.NUM);
          }
            break;

          case 8: {
            _localctx = new QuantExprContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 211;
            this.quantifiedExpr();
          }
            break;

          case 9: {
            _localctx = new SetEnumExprContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 212;
            this.setEnumeration();
          }
            break;

          case 10: {
            _localctx = new SetCompExprContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 213;
            this.setComprehension();
          }
            break;

          case 11: {
            _localctx = new ParenExprContext(_localctx);
            this._ctx = _localctx;
            _prevctx = _localctx;
            this.state = 214;
            this.match(SlickParser.T__40);
            this.state = 215;
            this.expr(0);
            this.state = 216;
            this.match(SlickParser.T__41);
          }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 254;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) this.triggerExitRuleEvent();
            _prevctx = _localctx;
            {
              this.state = 252;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1: {
                  _localctx = new AdditionExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 220;
                  if (!(this.precpred(this._ctx, 15))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 15)');
                  this.state = 221;
                  this.match(SlickParser.ADDOP);
                  this.state = 222;
                  this.expr(16);
                }
                  break;

                case 2: {
                  _localctx = new GeneralExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 223;
                  if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 14)');
                  this.state = 224;
                  this.match(SlickParser.T__37);
                  this.state = 225;
                  this.expr(15);
                }
                  break;

                case 3: {
                  _localctx = new RelativeExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 226;
                  if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 13)');
                  this.state = 227;
                  this.match(SlickParser.RELOP);
                  this.state = 228;
                  this.expr(14);
                }
                  break;

                case 4: {
                  _localctx = new JunctionExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 229;
                  if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 12)');
                  this.state = 230;
                  this.match(SlickParser.JOP);
                  this.state = 231;
                  this.expr(13);
                }
                  break;

                case 5: {
                  _localctx = new ImplicationExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 232;
                  if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 11)');
                  this.state = 233;
                  this.match(SlickParser.IMPOP);
                  this.state = 234;
                  this.expr(12);
                }
                  break;

                case 6: {
                  _localctx = new EquivalenceExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 235;
                  if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 10)');
                  this.state = 236;
                  this.match(SlickParser.EQOP);
                  this.state = 237;
                  this.expr(11);
                }
                  break;

                case 7: {
                  _localctx = new TSExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 238;
                  if (!(this.precpred(this._ctx, 19))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 19)');
                  this.state = 239;
                  this.match(SlickParser.T__32);
                  this.state = 240;
                  this.varlist();
                  this.state = 241;
                  this.match(SlickParser.T__33);
                  this.state = 242;
                  this.exprlist();
                  this.state = 243;
                  this.match(SlickParser.T__34);
                }
                  break;

                case 8: {
                  _localctx = new LeibnizExprContext(new ExprContext(_parentctx, _parentState));
                  this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
                  this.state = 245;
                  if (!(this.precpred(this._ctx, 18))) throw new FailedPredicateException(this, 'this.precpred(this._ctx, 18)');
                  this.state = 246;
                  this.match(SlickParser.T__32);
                  this.state = 247;
                  this.match(SlickParser.VAR);
                  this.state = 248;
                  this.match(SlickParser.T__35);
                  this.state = 249;
                  this.expr(0);
                  this.state = 250;
                  this.match(SlickParser.T__34);
                }
                  break;
              }
            }
          }
          this.state = 256;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  @RuleVersion(0)
  public hint(): HintContext {
    let _localctx: HintContext = new HintContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, SlickParser.RULE_hint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 257;
        this.hintOp();
        this.state = 258;
        this.match(SlickParser.COMMENT);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public hintOp(): HintOpContext {
    let _localctx: HintOpContext = new HintOpContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, SlickParser.RULE_hintOp);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 260;
        _la = this._input.LA(1);
        if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (SlickParser.RELOP - 56)) | (1 << (SlickParser.IMPOP - 56)) | (1 << (SlickParser.EQOP - 56)))) !== 0))) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public varlist(): VarlistContext {
    let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, SlickParser.RULE_varlist);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 262;
        this.typedVar();
        this.state = 267;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SlickParser.T__35) {
          {
            {
              this.state = 263;
              this.match(SlickParser.T__35);
              this.state = 264;
              this.typedVar();
            }
          }
          this.state = 269;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public exprlist(): ExprlistContext {
    let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
    this.enterRule(_localctx, 44, SlickParser.RULE_exprlist);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 270;
        this.expr(0);
        this.state = 275;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === SlickParser.T__35) {
          {
            {
              this.state = 271;
              this.match(SlickParser.T__35);
              this.state = 272;
              this.expr(0);
            }
          }
          this.state = 277;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public quantifiedExpr(): QuantifiedExprContext {
    let _localctx: QuantifiedExprContext = new QuantifiedExprContext(this._ctx, this.state);
    this.enterRule(_localctx, 46, SlickParser.RULE_quantifiedExpr);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 278;
        this.match(SlickParser.T__40);
        this.state = 279;
        this.match(SlickParser.QUANTIFIER);
        this.state = 280;
        this.varlist();
        this.state = 281;
        this.match(SlickParser.T__42);
        this.state = 282;
        this.expr(0);
        this.state = 283;
        this.match(SlickParser.T__22);
        this.state = 284;
        this.expr(0);
        this.state = 285;
        this.match(SlickParser.T__41);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public setEnumeration(): SetEnumerationContext {
    let _localctx: SetEnumerationContext = new SetEnumerationContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, SlickParser.RULE_setEnumeration);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 287;
        this.match(SlickParser.T__43);
        this.state = 296;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (SlickParser.T__36 - 37)) | (1 << (SlickParser.T__38 - 37)) | (1 << (SlickParser.T__39 - 37)) | (1 << (SlickParser.T__40 - 37)) | (1 << (SlickParser.T__43 - 37)) | (1 << (SlickParser.EVAR - 37)) | (1 << (SlickParser.VAR - 37)) | (1 << (SlickParser.NUM - 37)))) !== 0)) {
          {
            this.state = 288;
            this.expr(0);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === SlickParser.T__35) {
              {
                {
                  this.state = 289;
                  this.match(SlickParser.T__35);
                  this.state = 290;
                  this.expr(0);
                }
              }
              this.state = 295;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 298;
        this.match(SlickParser.T__44);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public setComprehension(): SetComprehensionContext {
    let _localctx: SetComprehensionContext = new SetComprehensionContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, SlickParser.RULE_setComprehension);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 300;
        this.match(SlickParser.T__43);
        this.state = 301;
        this.typedVar();
        this.state = 302;
        this.match(SlickParser.T__42);
        this.state = 303;
        this.expr(0);
        this.state = 304;
        this.match(SlickParser.T__22);
        this.state = 305;
        this.expr(0);
        this.state = 306;
        this.match(SlickParser.T__44);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public functionCall(): FunctionCallContext {
    let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, SlickParser.RULE_functionCall);
    try {
      this.state = 316;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          _localctx = new FunctionDotContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
        {
          this.state = 308;
          this.match(SlickParser.VAR);
          this.state = 309;
          this.match(SlickParser.T__45);
          this.state = 310;
          this.expr(0);
        }
          break;

        case 2:
          _localctx = new FunctionParenContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
        {
          this.state = 311;
          this.match(SlickParser.VAR);
          this.state = 312;
          this.match(SlickParser.T__40);
          this.state = 313;
          this.exprlist();
          this.state = 314;
          this.match(SlickParser.T__41);
        }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  @RuleVersion(0)
  public typedVar(): TypedVarContext {
    let _localctx: TypedVarContext = new TypedVarContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, SlickParser.RULE_typedVar);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 318;
        this.match(SlickParser.VAR);
        this.state = 321;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === SlickParser.T__22) {
          {
            this.state = 319;
            this.match(SlickParser.T__22);
            this.state = 320;
            this.match(SlickParser.TYPE);
          }
        }

      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 18:
        return this.expr_sempred(_localctx as ExprContext, predIndex);
    }
    return true;
  }

  private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 15);

      case 1:
        return this.precpred(this._ctx, 14);

      case 2:
        return this.precpred(this._ctx, 13);

      case 3:
        return this.precpred(this._ctx, 12);

      case 4:
        return this.precpred(this._ctx, 11);

      case 5:
        return this.precpred(this._ctx, 10);

      case 6:
        return this.precpred(this._ctx, 19);

      case 7:
        return this.precpred(this._ctx, 18);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    '\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03@\u0146\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
    '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
    '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04' +
    '\x1D\t\x1D\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02?\n\x02\f\x02\x0E\x02' +
    'B\v\x02\x03\x03\x03\x03\x05\x03F\n\x03\x03\x04\x05\x04I\n\x04\x03\x04' +
    '\x05\x04L\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04R\n\x04\f\x04\x0E' +
    '\x04U\v\x04\x03\x04\x05\x04X\n\x04\x03\x04\x05\x04[\n\x04\x03\x05\x03' +
    '\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07e\n\x07\r' +
    '\x07\x0E\x07f\x03\b\x03\b\x05\bk\n\b\x03\t\x03\t\x03\t\x03\t\x05\tq\n' +
    '\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x05\v\xA4\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f' +
    '\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E' +
    '\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x05\x14\xDD\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\xFF' +
    '\n\x14\f\x14\x0E\x14\u0102\v\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16' +
    '\x03\x17\x03\x17\x03\x17\x07\x17\u010C\n\x17\f\x17\x0E\x17\u010F\v\x17' +
    '\x03\x18\x03\x18\x03\x18\x07\x18\u0114\n\x18\f\x18\x0E\x18\u0117\v\x18' +
    '\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19' +
    '\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u0126\n\x1A\f\x1A\x0E\x1A\u0129' +
    '\v\x1A\x05\x1A\u012B\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03' +
    '\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03' +
    '\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u013F\n\x1C\x03\x1D\x03\x1D\x03\x1D' +
    '\x05\x1D\u0144\n\x1D\x03\x1D\x02\x02\x03&\x1E\x02\x02\x04\x02\x06\x02' +
    '\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A' +
    '\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02' +
    '4\x026\x028\x02\x02\x03\x04\x02::<=\u0152\x02:\x03\x02\x02\x02\x04E\x03' +
    '\x02\x02\x02\x06H\x03\x02\x02\x02\b\\\x03\x02\x02\x02\n^\x03\x02\x02\x02' +
    '\f`\x03\x02\x02\x02\x0Eh\x03\x02\x02\x02\x10p\x03\x02\x02\x02\x12r\x03' +
    '\x02\x02\x02\x14\xA3\x03\x02\x02\x02\x16\xA5\x03\x02\x02\x02\x18\xAF\x03' +
    '\x02\x02\x02\x1A\xB5\x03\x02\x02\x02\x1C\xBA\x03\x02\x02\x02\x1E\xBD\x03' +
    '\x02\x02\x02 \xC0\x03\x02\x02\x02"\xC5\x03\x02\x02\x02$\xCA\x03\x02\x02' +
    '\x02&\xDC\x03\x02\x02\x02(\u0103\x03\x02\x02\x02*\u0106\x03\x02\x02\x02' +
    ',\u0108\x03\x02\x02\x02.\u0110\x03\x02\x02\x020\u0118\x03\x02\x02\x02' +
    '2\u0121\x03\x02\x02\x024\u012E\x03\x02\x02\x026\u013E\x03\x02\x02\x02' +
    '8\u0140\x03\x02\x02\x02:@\x05\x04\x03\x02;<\x05\f\x07\x02<=\x05\x04\x03' +
    '\x02=?\x03\x02\x02\x02>;\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02' +
    '\x02@A\x03\x02\x02\x02A\x03\x03\x02\x02\x02B@\x03\x02\x02\x02CF\x05\x06' +
    '\x04\x02DF\x05\x16\f\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\x05\x03' +
    '\x02\x02\x02GI\x05\x0E\b\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x03' +
    '\x02\x02\x02JL\x05\b\x05\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x03' +
    '\x02\x02\x02MS\x05$\x13\x02NO\x05(\x15\x02OP\x05$\x13\x02PR\x03\x02\x02' +
    '\x02QN\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02' +
    '\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02VX\x07@\x02\x02WV\x03\x02\x02' +
    '\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02Y[\x05\n\x06\x02ZY\x03\x02\x02' +
    '\x02Z[\x03\x02\x02\x02[\x07\x03\x02\x02\x02\\]\x072\x02\x02]\t\x03\x02' +
    '\x02\x02^_\x072\x02\x02_\v\x03\x02\x02\x02`a\x07\x03\x02\x02ab\x07\x03' +
    '\x02\x02bd\x07\x03\x02\x02ce\x07\x03\x02\x02dc\x03\x02\x02\x02ef\x03\x02' +
    '\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\r\x03\x02\x02\x02hj\x05' +
    '\x10\t\x02ik\x05\x12\n\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02k\x0F\x03' +
    '\x02\x02\x02lm\x073\x02\x02mq\x074\x02\x02no\x073\x02\x02oq\x05&\x14\x02' +
    'pl\x03\x02\x02\x02pn\x03\x02\x02\x02q\x11\x03\x02\x02\x02rs\x07\x04\x02' +
    '\x02st\x05\x14\v\x02t\x13\x03\x02\x02\x02uv\x07\x05\x02\x02vw\x07\x06' +
    '\x02\x02wx\x07\x07\x02\x02xy\x07\b\x02\x02y\xA4\x07\t\x02\x02z{\x07\x05' +
    '\x02\x02{|\x07\n\x02\x02|}\x07\v\x02\x02}~\x07\f\x02\x02~\x7F\x07\r\x02' +
    '\x02\x7F\x80\x07\x07\x02\x02\x80\x81\x07\n\x02\x02\x81\xA4\x07\x0E\x02' +
    '\x02\x82\x83\x07\x05\x02\x02\x83\x84\x07\n\x02\x02\x84\x85\x07\x0E\x02' +
    '\x02\x85\x86\x07\f\x02\x02\x86\x87\x07\r\x02\x02\x87\x88\x07\x07\x02\x02' +
    '\x88\x89\x07\n\x02\x02\x89\xA4\x07\v\x02\x02\x8A\x8B\x07\x05\x02\x02\x8B' +
    '\x8C\x07\n\x02\x02\x8C\x8D\x07\v\x02\x02\x8D\x8E\x07\x0F\x02\x02\x8E\x8F' +
    '\x07\n\x02\x02\x8F\xA4\x07\x0E\x02\x02\x90\x91\x07\x05\x02\x02\x91\x92' +
    '\x07\n\x02\x02\x92\x93\x07\x0E\x02\x02\x93\x94\x07\x10\x02\x02\x94\x95' +
    '\x07\x11\x02\x02\x95\x96\x07\n\x02\x02\x96\xA4\x07\v\x02\x02\x97\x98\x07' +
    '\x12\x02\x02\x98\x99\x07\n\x02\x02\x99\x9A\x07\x13\x02\x02\x9A\x9B\x07' +
    '\x14\x02\x02\x9B\x9C\x07\n\x02\x02\x9C\xA4\x07\x15\x02\x02\x9D\xA4\x07' +
    '\x16\x02\x02\x9E\x9F\x07\x17\x02\x02\x9F\xA0\x07\n\x02\x02\xA0\xA1\x07' +
    '\x18\x02\x02\xA1\xA2\x07\x19\x02\x02\xA2\xA4\x05&\x14\x02\xA3u\x03\x02' +
    '\x02\x02\xA3z\x03\x02\x02\x02\xA3\x82\x03\x02\x02\x02\xA3\x8A\x03\x02' +
    '\x02\x02\xA3\x90\x03\x02\x02\x02\xA3\x97\x03\x02\x02\x02\xA3\x9D\x03\x02' +
    '\x02\x02\xA3\x9E\x03\x02\x02\x02\xA4\x15\x03\x02\x02\x02\xA5\xA6\x05\x10' +
    '\t\x02\xA6\xA7\x07\x04\x02\x02\xA7\xA8\x07\x1A\x02\x02\xA8\xA9\x07\x1B' +
    '\x02\x02\xA9\xAA\x07\x1C\x02\x02\xAA\xAB\x076\x02\x02\xAB\xAC\x05\x1A' +
    '\x0E\x02\xAC\xAD\x05 \x11\x02\xAD\xAE\x05"\x12\x02\xAE\x17\x03\x02\x02' +
    '\x02\xAF\xB0\x07\x04\x02\x02\xB0\xB1\x07\x1A\x02\x02\xB1\xB2\x07\x1D\x02' +
    '\x02\xB2\xB3\x07\x1C\x02\x02\xB3\xB4\x076\x02\x02\xB4\x19\x03\x02\x02' +
    '\x02\xB5\xB6\x07\x1E\x02\x02\xB6\xB7\x07\x1F\x02\x02\xB7\xB8\x05\x1C\x0F' +
    '\x02\xB8\xB9\x05\x1E\x10\x02\xB9\x1B\x03\x02\x02\x02\xBA\xBB\x07 \x02' +
    '\x02\xBB\xBC\x05&\x14\x02\xBC\x1D\x03\x02\x02\x02\xBD\xBE\x07!\x02\x02' +
    '\xBE\xBF\x05&\x14\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC1\x07"\x02\x02\xC1' +
    '\xC2\x07\x14\x02\x02\xC2\xC3\x07 \x02\x02\xC3\xC4\x05\x06\x04\x02\xC4' +
    '!\x03\x02\x02\x02\xC5\xC6\x07"\x02\x02\xC6\xC7\x07\x14\x02\x02\xC7\xC8' +
    '\x07!\x02\x02\xC8\xC9\x05\x06\x04\x02\xC9#\x03\x02\x02\x02\xCA\xCB\x05' +
    '&\x14\x02\xCB%\x03\x02\x02\x02\xCC\xCD\b\x14\x01\x02\xCD\xDD\x056\x1C' +
    '\x02\xCE\xCF\x07\'\x02\x02\xCF\xDD\x05&\x14\x12\xD0\xDD\x075\x02\x02\xD1' +
    '\xDD\x076\x02\x02\xD2\xDD\x07)\x02\x02\xD3\xDD\x07*\x02\x02\xD4\xDD\x07' +
    '8\x02\x02\xD5\xDD\x050\x19\x02\xD6\xDD\x052\x1A\x02\xD7\xDD\x054\x1B\x02' +
    '\xD8\xD9\x07+\x02\x02\xD9\xDA\x05&\x14\x02\xDA\xDB\x07,\x02\x02\xDB\xDD' +
    '\x03\x02\x02\x02\xDC\xCC\x03\x02\x02\x02\xDC\xCE\x03\x02\x02\x02\xDC\xD0' +
    '\x03\x02\x02\x02\xDC\xD1\x03\x02\x02\x02\xDC\xD2\x03\x02\x02\x02\xDC\xD3' +
    '\x03\x02\x02\x02\xDC\xD4\x03\x02\x02\x02\xDC\xD5\x03\x02\x02\x02\xDC\xD6' +
    '\x03\x02\x02\x02\xDC\xD7\x03\x02\x02\x02\xDC\xD8\x03\x02\x02\x02\xDD\u0100' +
    '\x03\x02\x02\x02\xDE\xDF\f\x11\x02\x02\xDF\xE0\x079\x02\x02\xE0\xFF\x05' +
    '&\x14\x12\xE1\xE2\f\x10\x02\x02\xE2\xE3\x07(\x02\x02\xE3\xFF\x05&\x14' +
    '\x11\xE4\xE5\f\x0F\x02\x02\xE5\xE6\x07:\x02\x02\xE6\xFF\x05&\x14\x10\xE7' +
    '\xE8\f\x0E\x02\x02\xE8\xE9\x07;\x02\x02\xE9\xFF\x05&\x14\x0F\xEA\xEB\f' +
    '\r\x02\x02\xEB\xEC\x07<\x02\x02\xEC\xFF\x05&\x14\x0E\xED\xEE\f\f\x02\x02' +
    '\xEE\xEF\x07=\x02\x02\xEF\xFF\x05&\x14\r\xF0\xF1\f\x15\x02\x02\xF1\xF2' +
    '\x07#\x02\x02\xF2\xF3\x05,\x17\x02\xF3\xF4\x07$\x02\x02\xF4\xF5\x05.\x18' +
    '\x02\xF5\xF6\x07%\x02\x02\xF6\xFF\x03\x02\x02\x02\xF7\xF8\f\x14\x02\x02' +
    '\xF8\xF9\x07#\x02\x02\xF9\xFA\x076\x02\x02\xFA\xFB\x07&\x02\x02\xFB\xFC' +
    '\x05&\x14\x02\xFC\xFD\x07%\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xDE\x03' +
    '\x02\x02\x02\xFE\xE1\x03\x02\x02\x02\xFE\xE4\x03\x02\x02\x02\xFE\xE7\x03' +
    '\x02\x02\x02\xFE\xEA\x03\x02\x02\x02\xFE\xED\x03\x02\x02\x02\xFE\xF0\x03' +
    '\x02\x02\x02\xFE\xF7\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE' +
    '\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\'\x03\x02\x02\x02\u0102' +
    '\u0100\x03\x02\x02\x02\u0103\u0104\x05*\x16\x02\u0104\u0105\x071\x02\x02' +
    '\u0105)\x03\x02\x02\x02\u0106\u0107\t\x02\x02\x02\u0107+\x03\x02\x02\x02' +
    '\u0108\u010D\x058\x1D\x02\u0109\u010A\x07&\x02\x02\u010A\u010C\x058\x1D' +
    '\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B' +
    '\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E-\x03\x02\x02\x02\u010F' +
    '\u010D\x03\x02\x02\x02\u0110\u0115\x05&\x14\x02\u0111\u0112\x07&\x02\x02' +
    '\u0112\u0114\x05&\x14\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0117\x03' +
    '\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116' +
    '/\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u0119\x07+\x02\x02' +
    '\u0119\u011A\x07>\x02\x02\u011A\u011B\x05,\x17\x02\u011B\u011C\x07-\x02' +
    '\x02\u011C\u011D\x05&\x14\x02\u011D\u011E\x07\x19\x02\x02\u011E\u011F' +
    '\x05&\x14\x02\u011F\u0120\x07,\x02\x02\u01201\x03\x02\x02\x02\u0121\u012A' +
    '\x07.\x02\x02\u0122\u0127\x05&\x14\x02\u0123\u0124\x07&\x02\x02\u0124' +
    '\u0126\x05&\x14\x02\u0125\u0123\x03\x02\x02\x02\u0126\u0129\x03\x02\x02' +
    '\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012B' +
    '\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u0122\x03\x02\x02\x02' +
    '\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012D\x07' +
    '/\x02\x02\u012D3\x03\x02\x02\x02\u012E\u012F\x07.\x02\x02\u012F\u0130' +
    '\x058\x1D\x02\u0130\u0131\x07-\x02\x02\u0131\u0132\x05&\x14\x02\u0132' +
    '\u0133\x07\x19\x02\x02\u0133\u0134\x05&\x14\x02\u0134\u0135\x07/\x02\x02' +
    '\u01355\x03\x02\x02\x02\u0136\u0137\x076\x02\x02\u0137\u0138\x070\x02' +
    '\x02\u0138\u013F\x05&\x14\x02\u0139\u013A\x076\x02\x02\u013A\u013B\x07' +
    '+\x02\x02\u013B\u013C\x05.\x18\x02\u013C\u013D\x07,\x02\x02\u013D\u013F' +
    '\x03\x02\x02\x02\u013E\u0136\x03\x02\x02\x02\u013E\u0139\x03\x02\x02\x02' +
    '\u013F7\x03\x02\x02\x02\u0140\u0143\x076\x02\x02\u0141\u0142\x07\x19\x02' +
    '\x02\u0142\u0144\x077\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144' +
    '\x03\x02\x02\x02\u01449\x03\x02\x02\x02\x16@EHKSWZfjp\xA3\xDC\xFE\u0100' +
    '\u010D\u0115\u0127\u012A\u013E\u0143';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!SlickParser.__ATN) {
      SlickParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SlickParser._serializedATN));
    }

    return SlickParser.__ATN;
  }

}
