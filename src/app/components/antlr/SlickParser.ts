// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { SlickListener } from './SlickListener';
import { SlickVisitor } from './SlickVisitor';


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
	@Override public get ruleIndex(): number { return SlickParser.RULE_doc; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_proof; }
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
	public END(): TerminalNode | undefined { return this.tryGetToken(SlickParser.END, 0); }
	public endExpo(): EndExpoContext | undefined {
		return this.tryGetRuleContext(0, EndExpoContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_standardProof; }
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
	public EXPO(): TerminalNode { return this.getToken(SlickParser.EXPO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_startExpo; }
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
	public EXPO(): TerminalNode { return this.getToken(SlickParser.EXPO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_endExpo; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_sep; }
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
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_header; }

	public copyFrom(ctx: HeaderContext): void {
		super.copyFrom(ctx);
	}
}
export class TheoremHeaderContext extends HeaderContext {
	public theorem(): TheoremContext | undefined {
		return this.tryGetRuleContext(0, TheoremContext);
	}
	public method(): MethodContext | undefined {
		return this.tryGetRuleContext(0, MethodContext);
	}
	constructor(ctx: HeaderContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterTheoremHeader) listener.enterTheoremHeader(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitTheoremHeader) listener.exitTheoremHeader(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitTheoremHeader) return visitor.visitTheoremHeader(this);
		else return visitor.visitChildren(this);
	}
}
export class ExerciseHeaderContext extends HeaderContext {
	public RULENUM(): TerminalNode { return this.getToken(SlickParser.RULENUM, 0); }
	constructor(ctx: HeaderContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterExerciseHeader) listener.enterExerciseHeader(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitExerciseHeader) listener.exitExerciseHeader(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitExerciseHeader) return visitor.visitExerciseHeader(this);
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_theorem; }

	public copyFrom(ctx: TheoremContext): void {
		super.copyFrom(ctx);
	}
}
export class AdHocTheoremContext extends TheoremContext {
	public PROVE(): TerminalNode { return this.getToken(SlickParser.PROVE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: TheoremContext) { super(); this.copyFrom(ctx); }
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
	public PROVE(): TerminalNode { return this.getToken(SlickParser.PROVE, 0); }
	public RULENUM(): TerminalNode { return this.getToken(SlickParser.RULENUM, 0); }
	constructor(ctx: TheoremContext) { super(); this.copyFrom(ctx); }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_method; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_methodName; }

	public copyFrom(ctx: MethodNameContext): void {
		super.copyFrom(ctx);
	}
}
export class PreviousTheoremMethodContext extends MethodNameContext {
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: MethodNameContext) { super(); this.copyFrom(ctx); }
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
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_caseProof; }
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
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_caseVariable; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_caseList; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_case1; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_case2; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_caseProof1; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_caseProof2; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_step; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_expr; }

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
	public IMPOP(): TerminalNode { return this.getToken(SlickParser.IMPOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	public EQOP(): TerminalNode { return this.getToken(SlickParser.EQOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	public EVAR(): TerminalNode | undefined { return this.tryGetToken(SlickParser.EVAR, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(SlickParser.VAR, 0); }
	public NUM(): TerminalNode | undefined { return this.tryGetToken(SlickParser.NUM, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	public RELOP(): TerminalNode { return this.getToken(SlickParser.RELOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
export class ArrayExprContext extends ExprContext {
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterArrayExpr) listener.enterArrayExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitArrayExpr) listener.exitArrayExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitArrayExpr) return visitor.visitArrayExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class FunctionCallExprContext extends ExprContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	public ADDOP(): TerminalNode { return this.getToken(SlickParser.ADDOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
export class InverseCallExprContext extends ExprContext {
	public inverseCall(): InverseCallContext {
		return this.getRuleContext(0, InverseCallContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterInverseCallExpr) listener.enterInverseCallExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitInverseCallExpr) listener.exitInverseCallExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitInverseCallExpr) return visitor.visitInverseCallExpr(this);
		else return visitor.visitChildren(this);
	}
}
export class ParenExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
export class QuantExprContext extends ExprContext {
	public quantifiedExpr(): QuantifiedExprContext {
		return this.getRuleContext(0, QuantifiedExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
	public JOP(): TerminalNode { return this.getToken(SlickParser.JOP, 0); }
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
export class UnaryPrefixExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
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
export class EmptyRExprContext extends ExprContext {
	public emptyRangeExpr(): EmptyRangeExprContext {
		return this.getRuleContext(0, EmptyRangeExprContext);
	}
	constructor(ctx: ExprContext) { super(); this.copyFrom(ctx); }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterEmptyRExpr) listener.enterEmptyRExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitEmptyRExpr) listener.exitEmptyRExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitEmptyRExpr) return visitor.visitEmptyRExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class HintContext extends ParserRuleContext {
	public hintOp(): HintOpContext {
		return this.getRuleContext(0, HintOpContext);
	}
	public COMMENT(): TerminalNode { return this.getToken(SlickParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_hint; }
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
	public RELOP(): TerminalNode | undefined { return this.tryGetToken(SlickParser.RELOP, 0); }
	public IMPOP(): TerminalNode | undefined { return this.tryGetToken(SlickParser.IMPOP, 0); }
	public EQOP(): TerminalNode | undefined { return this.tryGetToken(SlickParser.EQOP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_hintOp; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_varlist; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_exprlist; }
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


export class EmptyRangeExprContext extends ParserRuleContext {
	public QUANTIFIER(): TerminalNode { return this.getToken(SlickParser.QUANTIFIER, 0); }
	public varlist(): VarlistContext {
		return this.getRuleContext(0, VarlistContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_emptyRangeExpr; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterEmptyRangeExpr) listener.enterEmptyRangeExpr(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitEmptyRangeExpr) listener.exitEmptyRangeExpr(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitEmptyRangeExpr) return visitor.visitEmptyRangeExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class QuantifiedExprContext extends ParserRuleContext {
	public QUANTIFIER(): TerminalNode { return this.getToken(SlickParser.QUANTIFIER, 0); }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_quantifiedExpr; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_setEnumeration; }
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_setComprehension; }
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


export class InverseCallContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_inverseCall; }
	@Override
	public enterRule(listener: SlickListener): void {
		if (listener.enterInverseCall) listener.enterInverseCall(this);
	}
	@Override
	public exitRule(listener: SlickListener): void {
		if (listener.exitInverseCall) listener.exitInverseCall(this);
	}
	@Override
	public accept<Result>(visitor: SlickVisitor<Result>): Result {
		if (visitor.visitInverseCall) return visitor.visitInverseCall(this);
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
	@Override public get ruleIndex(): number { return SlickParser.RULE_functionCall; }

	public copyFrom(ctx: FunctionCallContext): void {
		super.copyFrom(ctx);
	}
}
export class FunctionDotContext extends FunctionCallContext {
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: FunctionCallContext) { super(); this.copyFrom(ctx); }
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
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(ctx: FunctionCallContext) { super(); this.copyFrom(ctx); }
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
	public VAR(): TerminalNode { return this.getToken(SlickParser.VAR, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SlickParser.TYPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SlickParser.RULE_typedVar; }
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
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly T__28=29;
	public static readonly T__29=30;
	public static readonly T__30=31;
	public static readonly T__31=32;
	public static readonly T__32=33;
	public static readonly T__33=34;
	public static readonly T__34=35;
	public static readonly T__35=36;
	public static readonly T__36=37;
	public static readonly T__37=38;
	public static readonly T__38=39;
	public static readonly T__39=40;
	public static readonly T__40=41;
	public static readonly T__41=42;
	public static readonly T__42=43;
	public static readonly T__43=44;
	public static readonly T__44=45;
	public static readonly T__45=46;
	public static readonly T__46=47;
	public static readonly T__47=48;
	public static readonly T__48=49;
	public static readonly COMMENT=50;
	public static readonly EXPO=51;
	public static readonly PROVE=52;
	public static readonly RULENUM=53;
	public static readonly EVAR=54;
	public static readonly VAR=55;
	public static readonly TYPE=56;
	public static readonly NUM=57;
	public static readonly ADDOP=58;
	public static readonly RELOP=59;
	public static readonly JOP=60;
	public static readonly IMPOP=61;
	public static readonly EQOP=62;
	public static readonly QUANTIFIER=63;
	public static readonly WS=64;
	public static readonly END=65;
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
	public static readonly RULE_emptyRangeExpr = 23;
	public static readonly RULE_quantifiedExpr = 24;
	public static readonly RULE_setEnumeration = 25;
	public static readonly RULE_setComprehension = 26;
	public static readonly RULE_inverseCall = 27;
	public static readonly RULE_functionCall = 28;
	public static readonly RULE_typedVar = 29;
	public static readonly ruleNames: string[] = [
		"doc", "proof", "standardProof", "startExpo", "endExpo", "sep", "header",
		"theorem", "method", "methodName", "caseProof", "caseVariable", "caseList",
		"case1", "case2", "caseProof1", "caseProof2", "step", "expr", "hint",
		"hintOp", "varlist", "exprlist", "emptyRangeExpr", "quantifiedExpr", "setEnumeration",
		"setComprehension", "inverseCall", "functionCall", "typedVar"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'Proof'", "':'", "'-'", "'Exercise'", "'('", "')'", "'by'",
		"'showing'", "'equivalence'", "'to'", "'a'", "'previous'", "'theorem'",
		"'the'", "'LHS'", "'is'", "'equivalent'", "'RHS'", "'implies'", "'follows'",
		"'from'", "'assuming'", "'conjuncts'", "'of'", "'antecedent'", "'contradiction'",
		"'proving'", "'contrapositive'", "'case'", "'analysis'", "'on'", "'anlaysis'",
		"'Must'", "'prove'", "'(1)'", "'(2)'", "'['", "'≔'", "']'", "','", "'¬'",
		"'%'", "'true'", "'false'", "'|'", "'{'", "'}'", "'inv'", "'.'", undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		"'╱╱'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, "COMMENT", "EXPO", "PROVE", "RULENUM", "EVAR", "VAR", "TYPE",
		"NUM", "ADDOP", "RELOP", "JOP", "IMPOP", "EQOP", "QUANTIFIER", "WS", "END"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SlickParser._LITERAL_NAMES, SlickParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SlickParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Slick.g4"; }

	@Override
	public get ruleNames(): string[] { return SlickParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SlickParser._serializedATN; }

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
			this.state = 60;
			this.proof();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SlickParser.T__2) {
				{
				{
				this.state = 61;
				this.sep();
				this.state = 62;
				this.proof();
				}
				}
				this.state = 68;
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
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.standardProof();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
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
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__3 || _la===SlickParser.PROVE) {
				{
				this.state = 73;
				this.header();
				}
			}

			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.EXPO) {
				{
				this.state = 76;
				this.startExpo();
				}
			}

			this.state = 79;
			this.match(SlickParser.T__0);
			this.state = 80;
			this.match(SlickParser.T__1);
			this.state = 81;
			this.step();
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SlickParser.RELOP - 59)) | (1 << (SlickParser.IMPOP - 59)) | (1 << (SlickParser.EQOP - 59)))) !== 0)) {
				{
				{
				this.state = 82;
				this.hint();
				this.state = 83;
				this.step();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.END) {
				{
				this.state = 90;
				this.match(SlickParser.END);
				}
			}

			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.EXPO) {
				{
				this.state = 93;
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
			this.state = 96;
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
			this.state = 98;
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
			this.state = 100;
			this.match(SlickParser.T__2);
			this.state = 101;
			this.match(SlickParser.T__2);
			this.state = 102;
			this.match(SlickParser.T__2);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 103;
				this.match(SlickParser.T__2);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SlickParser.T__2 );
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
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SlickParser.PROVE:
				_localctx = new TheoremHeaderContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 108;
				this.theorem();
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SlickParser.T__6) {
					{
					this.state = 109;
					this.method();
					}
				}

				}
				}
				break;
			case SlickParser.T__3:
				_localctx = new ExerciseHeaderContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 112;
				this.match(SlickParser.T__3);
				this.state = 113;
				this.match(SlickParser.RULENUM);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				_localctx = new BibleTheoremContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.match(SlickParser.PROVE);
				this.state = 117;
				this.match(SlickParser.T__4);
				this.state = 118;
				this.match(SlickParser.RULENUM);
				this.state = 119;
				this.match(SlickParser.T__5);
				}
				break;

			case 2:
				_localctx = new AdHocTheoremContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(SlickParser.PROVE);
				this.state = 121;
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
			this.state = 124;
			this.match(SlickParser.T__6);
			this.state = 125;
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
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
			case 1:
				_localctx = new PreviousTheoremMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.match(SlickParser.T__7);
				this.state = 128;
				this.match(SlickParser.T__8);
				this.state = 129;
				this.match(SlickParser.T__9);
				this.state = 130;
				this.match(SlickParser.T__10);
				this.state = 131;
				this.match(SlickParser.T__11);
				this.state = 132;
				this.match(SlickParser.T__12);
				}
				break;

			case 2:
				_localctx = new LeftEquivalesRightMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 133;
				this.match(SlickParser.T__7);
				this.state = 134;
				this.match(SlickParser.T__13);
				this.state = 135;
				this.match(SlickParser.T__14);
				this.state = 136;
				this.match(SlickParser.T__15);
				this.state = 137;
				this.match(SlickParser.T__16);
				this.state = 138;
				this.match(SlickParser.T__9);
				this.state = 139;
				this.match(SlickParser.T__13);
				this.state = 140;
				this.match(SlickParser.T__17);
				}
				break;

			case 3:
				_localctx = new RightEquivalesLeftMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 141;
				this.match(SlickParser.T__7);
				this.state = 142;
				this.match(SlickParser.T__13);
				this.state = 143;
				this.match(SlickParser.T__17);
				this.state = 144;
				this.match(SlickParser.T__15);
				this.state = 145;
				this.match(SlickParser.T__16);
				this.state = 146;
				this.match(SlickParser.T__9);
				this.state = 147;
				this.match(SlickParser.T__13);
				this.state = 148;
				this.match(SlickParser.T__14);
				}
				break;

			case 4:
				_localctx = new LeftImpliesRightMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 149;
				this.match(SlickParser.T__7);
				this.state = 150;
				this.match(SlickParser.T__13);
				this.state = 151;
				this.match(SlickParser.T__14);
				this.state = 152;
				this.match(SlickParser.T__18);
				this.state = 153;
				this.match(SlickParser.T__13);
				this.state = 154;
				this.match(SlickParser.T__17);
				}
				break;

			case 5:
				_localctx = new RightFollowsLeftMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 155;
				this.match(SlickParser.T__7);
				this.state = 156;
				this.match(SlickParser.T__13);
				this.state = 157;
				this.match(SlickParser.T__17);
				this.state = 158;
				this.match(SlickParser.T__19);
				this.state = 159;
				this.match(SlickParser.T__20);
				this.state = 160;
				this.match(SlickParser.T__13);
				this.state = 161;
				this.match(SlickParser.T__14);
				}
				break;

			case 6:
				_localctx = new AssumingConjunctsMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 162;
				this.match(SlickParser.T__21);
				this.state = 163;
				this.match(SlickParser.T__13);
				this.state = 164;
				this.match(SlickParser.T__22);
				this.state = 165;
				this.match(SlickParser.T__23);
				this.state = 166;
				this.match(SlickParser.T__13);
				this.state = 167;
				this.match(SlickParser.T__24);
				}
				break;

			case 7:
				_localctx = new ContradictionMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 168;
				this.match(SlickParser.T__25);
				}
				break;

			case 8:
				_localctx = new ContrapositiveMethodContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 169;
				this.match(SlickParser.T__26);
				this.state = 170;
				this.match(SlickParser.T__13);
				this.state = 171;
				this.match(SlickParser.T__27);
				this.state = 172;
				this.match(SlickParser.T__1);
				this.state = 173;
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
			this.state = 176;
			this.theorem();
			this.state = 177;
			this.match(SlickParser.T__6);
			this.state = 178;
			this.match(SlickParser.T__28);
			this.state = 179;
			this.match(SlickParser.T__29);
			this.state = 180;
			this.match(SlickParser.T__30);
			this.state = 181;
			this.match(SlickParser.VAR);
			this.state = 182;
			this.caseList();
			this.state = 183;
			this.caseProof1();
			this.state = 184;
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
			this.state = 186;
			this.match(SlickParser.T__6);
			this.state = 187;
			this.match(SlickParser.T__28);
			this.state = 188;
			this.match(SlickParser.T__31);
			this.state = 189;
			this.match(SlickParser.T__30);
			this.state = 190;
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
			this.state = 192;
			this.match(SlickParser.T__32);
			this.state = 193;
			this.match(SlickParser.T__33);
			this.state = 194;
			this.case1();
			this.state = 195;
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
			this.state = 197;
			this.match(SlickParser.T__34);
			this.state = 198;
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
			this.state = 200;
			this.match(SlickParser.T__35);
			this.state = 201;
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
			this.state = 203;
			this.match(SlickParser.T__0);
			this.state = 204;
			this.match(SlickParser.T__23);
			this.state = 205;
			this.match(SlickParser.T__34);
			this.state = 206;
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
			this.state = 208;
			this.match(SlickParser.T__0);
			this.state = 209;
			this.match(SlickParser.T__23);
			this.state = 210;
			this.match(SlickParser.T__35);
			this.state = 211;
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
			this.state = 213;
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
			this.state = 239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
			case 1:
				{
				_localctx = new ArrayExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 216;
				this.match(SlickParser.VAR);
				this.state = 217;
				this.match(SlickParser.T__36);
				this.state = 218;
				this.expr(0);
				this.state = 219;
				this.match(SlickParser.T__38);
				}
				break;

			case 2:
				{
				_localctx = new QuantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 221;
				this.quantifiedExpr();
				}
				break;

			case 3:
				{
				_localctx = new InverseCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 222;
				this.inverseCall();
				}
				break;

			case 4:
				{
				_localctx = new FunctionCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 223;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new UnaryPrefixExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 224;
				this.match(SlickParser.T__40);
				this.state = 225;
				this.expr(17);
				}
				break;

			case 6:
				{
				_localctx = new EmptyRExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 226;
				this.emptyRangeExpr();
				}
				break;

			case 7:
				{
				_localctx = new QuantExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 227;
				this.quantifiedExpr();
				}
				break;

			case 8:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 228;
				this.match(SlickParser.EVAR);
				}
				break;

			case 9:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 229;
				this.match(SlickParser.VAR);
				}
				break;

			case 10:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 230;
				this.match(SlickParser.T__42);
				}
				break;

			case 11:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 231;
				this.match(SlickParser.T__43);
				}
				break;

			case 12:
				{
				_localctx = new AtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 232;
				this.match(SlickParser.NUM);
				}
				break;

			case 13:
				{
				_localctx = new SetEnumExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 233;
				this.setEnumeration();
				}
				break;

			case 14:
				{
				_localctx = new SetCompExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 234;
				this.setComprehension();
				}
				break;

			case 15:
				{
				_localctx = new ParenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 235;
				this.match(SlickParser.T__4);
				this.state = 236;
				this.expr(0);
				this.state = 237;
				this.match(SlickParser.T__5);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 275;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 273;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
					case 1:
						{
						_localctx = new AdditionExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 241;
						if (!(this.precpred(this._ctx, 14))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						this.state = 242;
						this.match(SlickParser.ADDOP);
						this.state = 243;
						this.expr(15);
						}
						break;

					case 2:
						{
						_localctx = new GeneralExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 244;
						if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						this.state = 245;
						this.match(SlickParser.T__41);
						this.state = 246;
						this.expr(14);
						}
						break;

					case 3:
						{
						_localctx = new RelativeExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 247;
						if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						this.state = 248;
						this.match(SlickParser.RELOP);
						this.state = 249;
						this.expr(13);
						}
						break;

					case 4:
						{
						_localctx = new JunctionExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 250;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 251;
						this.match(SlickParser.JOP);
						this.state = 252;
						this.expr(12);
						}
						break;

					case 5:
						{
						_localctx = new ImplicationExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 253;
						if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						this.state = 254;
						this.match(SlickParser.IMPOP);
						this.state = 255;
						this.expr(11);
						}
						break;

					case 6:
						{
						_localctx = new EquivalenceExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 256;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 257;
						this.match(SlickParser.EQOP);
						this.state = 258;
						this.expr(10);
						}
						break;

					case 7:
						{
						_localctx = new TSExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 259;
						if (!(this.precpred(this._ctx, 23))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						this.state = 260;
						this.match(SlickParser.T__36);
						this.state = 261;
						this.varlist();
						this.state = 262;
						this.match(SlickParser.T__37);
						this.state = 263;
						this.exprlist();
						this.state = 264;
						this.match(SlickParser.T__38);
						}
						break;

					case 8:
						{
						_localctx = new LeibnizExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SlickParser.RULE_expr);
						this.state = 266;
						if (!(this.precpred(this._ctx, 22))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						this.state = 267;
						this.match(SlickParser.T__36);
						this.state = 268;
						this.match(SlickParser.VAR);
						this.state = 269;
						this.match(SlickParser.T__39);
						this.state = 270;
						this.expr(0);
						this.state = 271;
						this.match(SlickParser.T__38);
						}
						break;
					}
					}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
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
			this.state = 278;
			this.hintOp();
			this.state = 279;
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
			this.state = 281;
			_la = this._input.LA(1);
			if ( !(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (SlickParser.RELOP - 59)) | (1 << (SlickParser.IMPOP - 59)) | (1 << (SlickParser.EQOP - 59)))) !== 0)) ) {
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
			this.state = 283;
			this.typedVar();
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SlickParser.T__39) {
				{
				{
				this.state = 284;
				this.match(SlickParser.T__39);
				this.state = 285;
				this.typedVar();
				}
				}
				this.state = 290;
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
			this.state = 291;
			this.expr(0);
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SlickParser.T__39) {
				{
				{
				this.state = 292;
				this.match(SlickParser.T__39);
				this.state = 293;
				this.expr(0);
				}
				}
				this.state = 298;
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
	public emptyRangeExpr(): EmptyRangeExprContext {
		let _localctx: EmptyRangeExprContext = new EmptyRangeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SlickParser.RULE_emptyRangeExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(SlickParser.T__4);
			this.state = 300;
			this.match(SlickParser.QUANTIFIER);
			this.state = 301;
			this.varlist();
			this.state = 302;
			this.match(SlickParser.T__44);
			this.state = 303;
			this.match(SlickParser.T__1);
			this.state = 304;
			this.expr(0);
			this.state = 305;
			this.match(SlickParser.T__5);
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
		this.enterRule(_localctx, 48, SlickParser.RULE_quantifiedExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(SlickParser.T__4);
			this.state = 308;
			this.match(SlickParser.QUANTIFIER);
			this.state = 309;
			this.varlist();
			this.state = 310;
			this.match(SlickParser.T__44);
			this.state = 311;
			this.expr(0);
			this.state = 312;
			this.match(SlickParser.T__1);
			this.state = 313;
			this.expr(0);
			this.state = 314;
			this.match(SlickParser.T__5);
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
		this.enterRule(_localctx, 50, SlickParser.RULE_setEnumeration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(SlickParser.T__45);
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__4 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SlickParser.T__40 - 41)) | (1 << (SlickParser.T__42 - 41)) | (1 << (SlickParser.T__43 - 41)) | (1 << (SlickParser.T__45 - 41)) | (1 << (SlickParser.T__47 - 41)) | (1 << (SlickParser.EVAR - 41)) | (1 << (SlickParser.VAR - 41)) | (1 << (SlickParser.NUM - 41)))) !== 0)) {
				{
				this.state = 317;
				this.expr(0);
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===SlickParser.T__39) {
					{
					{
					this.state = 318;
					this.match(SlickParser.T__39);
					this.state = 319;
					this.expr(0);
					}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 327;
			this.match(SlickParser.T__46);
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
		this.enterRule(_localctx, 52, SlickParser.RULE_setComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(SlickParser.T__45);
			this.state = 330;
			this.typedVar();
			this.state = 331;
			this.match(SlickParser.T__44);
			this.state = 332;
			this.expr(0);
			this.state = 333;
			this.match(SlickParser.T__1);
			this.state = 334;
			this.expr(0);
			this.state = 335;
			this.match(SlickParser.T__46);
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
	public inverseCall(): InverseCallContext {
		let _localctx: InverseCallContext = new InverseCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SlickParser.RULE_inverseCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(SlickParser.T__47);
			this.state = 338;
			this.match(SlickParser.T__48);
			this.state = 339;
			this.functionCall();
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
		this.enterRule(_localctx, 56, SlickParser.RULE_functionCall);
		try {
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
			case 1:
				_localctx = new FunctionDotContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(SlickParser.VAR);
				this.state = 342;
				this.match(SlickParser.T__48);
				this.state = 343;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new FunctionParenContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(SlickParser.VAR);
				this.state = 345;
				this.match(SlickParser.T__4);
				this.state = 346;
				this.exprlist();
				this.state = 347;
				this.match(SlickParser.T__5);
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
		this.enterRule(_localctx, 58, SlickParser.RULE_typedVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(SlickParser.VAR);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SlickParser.T__1) {
				{
				this.state = 352;
				this.match(SlickParser.T__1);
				this.state = 353;
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
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 23);

		case 7:
			return this.precpred(this._ctx, 22);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03C\u0167\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x03\x02"+
		"\x07\x02C\n\x02\f\x02\x0E\x02F\v\x02\x03\x03\x03\x03\x05\x03J\n\x03\x03"+
		"\x04\x05\x04M\n\x04\x03\x04\x05\x04P\n\x04\x03\x04\x03\x04\x03\x04\x03"+
		"\x04\x03\x04\x03\x04\x07\x04X\n\x04\f\x04\x0E\x04[\v\x04\x03\x04\x05\x04"+
		"^\n\x04\x03\x04\x05\x04a\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x06\x07k\n\x07\r\x07\x0E\x07l\x03\b\x03\b\x05"+
		"\bq\n\b\x03\b\x03\b\x05\bu\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05"+
		"\t}\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x05\v\xB1\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f"+
		"\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03"+
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03"+
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03"+
		"\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03"+
		"\x14\x05\x14\xF2\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14"+
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14"+
		"\u0114\n\x14\f\x14\x0E\x14\u0117\v\x14\x03\x15\x03\x15\x03\x15\x03\x16"+
		"\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0121\n\x17\f\x17\x0E\x17\u0124"+
		"\v\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0129\n\x18\f\x18\x0E\x18\u012C"+
		"\v\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19"+
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A"+
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0143\n\x1B\f\x1B\x0E\x1B\u0146"+
		"\v\x1B\x05\x1B\u0148\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0160"+
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0165\n\x1F\x03\x1F\x02\x02\x03"+
		"& \x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\x03\x04\x02==?"+
		"@\u0176\x02>\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06L\x03\x02\x02\x02"+
		"\bb\x03\x02\x02\x02\nd\x03\x02\x02\x02\ff\x03\x02\x02\x02\x0Et\x03\x02"+
		"\x02\x02\x10|\x03\x02\x02\x02\x12~\x03\x02\x02\x02\x14\xB0\x03\x02\x02"+
		"\x02\x16\xB2\x03\x02\x02\x02\x18\xBC\x03\x02\x02\x02\x1A\xC2\x03\x02\x02"+
		"\x02\x1C\xC7\x03\x02\x02\x02\x1E\xCA\x03\x02\x02\x02 \xCD\x03\x02\x02"+
		"\x02\"\xD2\x03\x02\x02\x02$\xD7\x03\x02\x02\x02&\xF1\x03\x02\x02\x02("+
		"\u0118\x03\x02\x02\x02*\u011B\x03\x02\x02\x02,\u011D\x03\x02\x02\x02."+
		"\u0125\x03\x02\x02\x020\u012D\x03\x02\x02\x022\u0135\x03\x02\x02\x024"+
		"\u013E\x03\x02\x02\x026\u014B\x03\x02\x02\x028\u0153\x03\x02\x02\x02:"+
		"\u015F\x03\x02\x02\x02<\u0161\x03\x02\x02\x02>D\x05\x04\x03\x02?@\x05"+
		"\f\x07\x02@A\x05\x04\x03\x02AC\x03\x02\x02\x02B?\x03\x02\x02\x02CF\x03"+
		"\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02E\x03\x03\x02\x02\x02"+
		"FD\x03\x02\x02\x02GJ\x05\x06\x04\x02HJ\x05\x16\f\x02IG\x03\x02\x02\x02"+
		"IH\x03\x02\x02\x02J\x05\x03\x02\x02\x02KM\x05\x0E\b\x02LK\x03\x02\x02"+
		"\x02LM\x03\x02\x02\x02MO\x03\x02\x02\x02NP\x05\b\x05\x02ON\x03\x02\x02"+
		"\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x07\x03\x02\x02RS\x07\x04\x02"+
		"\x02SY\x05$\x13\x02TU\x05(\x15\x02UV\x05$\x13\x02VX\x03\x02\x02\x02WT"+
		"\x03\x02\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02"+
		"Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02\\^\x07C\x02\x02]\\\x03\x02\x02\x02"+
		"]^\x03\x02\x02\x02^`\x03\x02\x02\x02_a\x05\n\x06\x02`_\x03\x02\x02\x02"+
		"`a\x03\x02\x02\x02a\x07\x03\x02\x02\x02bc\x075\x02\x02c\t\x03\x02\x02"+
		"\x02de\x075\x02\x02e\v\x03\x02\x02\x02fg\x07\x05\x02\x02gh\x07\x05\x02"+
		"\x02hj\x07\x05\x02\x02ik\x07\x05\x02\x02ji\x03\x02\x02\x02kl\x03\x02\x02"+
		"\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\r\x03\x02\x02\x02np\x05\x10"+
		"\t\x02oq\x05\x12\n\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02qu\x03\x02\x02"+
		"\x02rs\x07\x06\x02\x02su\x077\x02\x02tn\x03\x02\x02\x02tr\x03\x02\x02"+
		"\x02u\x0F\x03\x02\x02\x02vw\x076\x02\x02wx\x07\x07\x02\x02xy\x077\x02"+
		"\x02y}\x07\b\x02\x02z{\x076\x02\x02{}\x05&\x14\x02|v\x03\x02\x02\x02|"+
		"z\x03\x02\x02\x02}\x11\x03\x02\x02\x02~\x7F\x07\t\x02\x02\x7F\x80\x05"+
		"\x14\v\x02\x80\x13\x03\x02\x02\x02\x81\x82\x07\n\x02\x02\x82\x83\x07\v"+
		"\x02\x02\x83\x84\x07\f\x02\x02\x84\x85\x07\r\x02\x02\x85\x86\x07\x0E\x02"+
		"\x02\x86\xB1\x07\x0F\x02\x02\x87\x88\x07\n\x02\x02\x88\x89\x07\x10\x02"+
		"\x02\x89\x8A\x07\x11\x02\x02\x8A\x8B\x07\x12\x02\x02\x8B\x8C\x07\x13\x02"+
		"\x02\x8C\x8D\x07\f\x02\x02\x8D\x8E\x07\x10\x02\x02\x8E\xB1\x07\x14\x02"+
		"\x02\x8F\x90\x07\n\x02\x02\x90\x91\x07\x10\x02\x02\x91\x92\x07\x14\x02"+
		"\x02\x92\x93\x07\x12\x02\x02\x93\x94\x07\x13\x02\x02\x94\x95\x07\f\x02"+
		"\x02\x95\x96\x07\x10\x02\x02\x96\xB1\x07\x11\x02\x02\x97\x98\x07\n\x02"+
		"\x02\x98\x99\x07\x10\x02\x02\x99\x9A\x07\x11\x02\x02\x9A\x9B\x07\x15\x02"+
		"\x02\x9B\x9C\x07\x10\x02\x02\x9C\xB1\x07\x14\x02\x02\x9D\x9E\x07\n\x02"+
		"\x02\x9E\x9F\x07\x10\x02\x02\x9F\xA0\x07\x14\x02\x02\xA0\xA1\x07\x16\x02"+
		"\x02\xA1\xA2\x07\x17\x02\x02\xA2\xA3\x07\x10\x02\x02\xA3\xB1\x07\x11\x02"+
		"\x02\xA4\xA5\x07\x18\x02\x02\xA5\xA6\x07\x10\x02\x02\xA6\xA7\x07\x19\x02"+
		"\x02\xA7\xA8\x07\x1A\x02\x02\xA8\xA9\x07\x10\x02\x02\xA9\xB1\x07\x1B\x02"+
		"\x02\xAA\xB1\x07\x1C\x02\x02\xAB\xAC\x07\x1D\x02\x02\xAC\xAD\x07\x10\x02"+
		"\x02\xAD\xAE\x07\x1E\x02\x02\xAE\xAF\x07\x04\x02\x02\xAF\xB1\x05&\x14"+
		"\x02\xB0\x81\x03\x02\x02\x02\xB0\x87\x03\x02\x02\x02\xB0\x8F\x03\x02\x02"+
		"\x02\xB0\x97\x03\x02\x02\x02\xB0\x9D\x03\x02\x02\x02\xB0\xA4\x03\x02\x02"+
		"\x02\xB0\xAA\x03\x02\x02\x02\xB0\xAB\x03\x02\x02\x02\xB1\x15\x03\x02\x02"+
		"\x02\xB2\xB3\x05\x10\t\x02\xB3\xB4\x07\t\x02\x02\xB4\xB5\x07\x1F\x02\x02"+
		"\xB5\xB6\x07 \x02\x02\xB6\xB7\x07!\x02\x02\xB7\xB8\x079\x02\x02\xB8\xB9"+
		"\x05\x1A\x0E\x02\xB9\xBA\x05 \x11\x02\xBA\xBB\x05\"\x12\x02\xBB\x17\x03"+
		"\x02\x02\x02\xBC\xBD\x07\t\x02\x02\xBD\xBE\x07\x1F\x02\x02\xBE\xBF\x07"+
		"\"\x02\x02\xBF\xC0\x07!\x02\x02\xC0\xC1\x079\x02\x02\xC1\x19\x03\x02\x02"+
		"\x02\xC2\xC3\x07#\x02\x02\xC3\xC4\x07$\x02\x02\xC4\xC5\x05\x1C\x0F\x02"+
		"\xC5\xC6\x05\x1E\x10\x02\xC6\x1B\x03\x02\x02\x02\xC7\xC8\x07%\x02\x02"+
		"\xC8\xC9\x05&\x14\x02\xC9\x1D\x03\x02\x02\x02\xCA\xCB\x07&\x02\x02\xCB"+
		"\xCC\x05&\x14\x02\xCC\x1F\x03\x02\x02\x02\xCD\xCE\x07\x03\x02\x02\xCE"+
		"\xCF\x07\x1A\x02\x02\xCF\xD0\x07%\x02\x02\xD0\xD1\x05\x06\x04\x02\xD1"+
		"!\x03\x02\x02\x02\xD2\xD3\x07\x03\x02\x02\xD3\xD4\x07\x1A\x02\x02\xD4"+
		"\xD5\x07&\x02\x02\xD5\xD6\x05\x06\x04\x02\xD6#\x03\x02\x02\x02\xD7\xD8"+
		"\x05&\x14\x02\xD8%\x03\x02\x02\x02\xD9\xDA\b\x14\x01\x02\xDA\xDB\x079"+
		"\x02\x02\xDB\xDC\x07\'\x02\x02\xDC\xDD\x05&\x14\x02\xDD\xDE\x07)\x02\x02"+
		"\xDE\xF2\x03\x02\x02\x02\xDF\xF2\x052\x1A\x02\xE0\xF2\x058\x1D\x02\xE1"+
		"\xF2\x05:\x1E\x02\xE2\xE3\x07+\x02\x02\xE3\xF2\x05&\x14\x13\xE4\xF2\x05"+
		"0\x19\x02\xE5\xF2\x052\x1A\x02\xE6\xF2\x078\x02\x02\xE7\xF2\x079\x02\x02"+
		"\xE8\xF2\x07-\x02\x02\xE9\xF2\x07.\x02\x02\xEA\xF2\x07;\x02\x02\xEB\xF2"+
		"\x054\x1B\x02\xEC\xF2\x056\x1C\x02\xED\xEE\x07\x07\x02\x02\xEE\xEF\x05"+
		"&\x14\x02\xEF\xF0\x07\b\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xD9\x03\x02"+
		"\x02\x02\xF1\xDF\x03\x02\x02\x02\xF1\xE0\x03\x02\x02\x02\xF1\xE1\x03\x02"+
		"\x02\x02\xF1\xE2\x03\x02\x02\x02\xF1\xE4\x03\x02\x02\x02\xF1\xE5\x03\x02"+
		"\x02\x02\xF1\xE6\x03\x02\x02\x02\xF1\xE7\x03\x02\x02\x02\xF1\xE8\x03\x02"+
		"\x02\x02\xF1\xE9\x03\x02\x02\x02\xF1\xEA\x03\x02\x02\x02\xF1\xEB\x03\x02"+
		"\x02\x02\xF1\xEC\x03\x02\x02\x02\xF1\xED\x03\x02\x02\x02\xF2\u0115\x03"+
		"\x02\x02\x02\xF3\xF4\f\x10\x02\x02\xF4\xF5\x07<\x02\x02\xF5\u0114\x05"+
		"&\x14\x11\xF6\xF7\f\x0F\x02\x02\xF7\xF8\x07,\x02\x02\xF8\u0114\x05&\x14"+
		"\x10\xF9\xFA\f\x0E\x02\x02\xFA\xFB\x07=\x02\x02\xFB\u0114\x05&\x14\x0F"+
		"\xFC\xFD\f\r\x02\x02\xFD\xFE\x07>\x02\x02\xFE\u0114\x05&\x14\x0E\xFF\u0100"+
		"\f\f\x02\x02\u0100\u0101\x07?\x02\x02\u0101\u0114\x05&\x14\r\u0102\u0103"+
		"\f\v\x02\x02\u0103\u0104\x07@\x02\x02\u0104\u0114\x05&\x14\f\u0105\u0106"+
		"\f\x19\x02\x02\u0106\u0107\x07\'\x02\x02\u0107\u0108\x05,\x17\x02\u0108"+
		"\u0109\x07(\x02\x02\u0109\u010A\x05.\x18\x02\u010A\u010B\x07)\x02\x02"+
		"\u010B\u0114\x03\x02\x02\x02\u010C\u010D\f\x18\x02\x02\u010D\u010E\x07"+
		"\'\x02\x02\u010E\u010F\x079\x02\x02\u010F\u0110\x07*\x02\x02\u0110\u0111"+
		"\x05&\x14\x02\u0111\u0112\x07)\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113"+
		"\xF3\x03\x02\x02\x02\u0113\xF6\x03\x02\x02\x02\u0113\xF9\x03\x02\x02\x02"+
		"\u0113\xFC\x03\x02\x02\x02\u0113\xFF\x03\x02\x02\x02\u0113\u0102\x03\x02"+
		"\x02\x02\u0113\u0105\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0114"+
		"\u0117\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02"+
		"\x02\x02\u0116\'\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118\u0119"+
		"\x05*\x16\x02\u0119\u011A\x074\x02\x02\u011A)\x03\x02\x02\x02\u011B\u011C"+
		"\t\x02\x02\x02\u011C+\x03\x02\x02\x02\u011D\u0122\x05<\x1F\x02\u011E\u011F"+
		"\x07*\x02\x02\u011F\u0121\x05<\x1F\x02\u0120\u011E\x03\x02\x02\x02\u0121"+
		"\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02"+
		"\x02\x02\u0123-\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u012A"+
		"\x05&\x14\x02\u0126\u0127\x07*\x02\x02\u0127\u0129\x05&\x14\x02\u0128"+
		"\u0126\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02"+
		"\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B/\x03\x02\x02\x02\u012C\u012A"+
		"\x03\x02\x02\x02\u012D\u012E\x07\x07\x02\x02\u012E\u012F\x07A\x02\x02"+
		"\u012F\u0130\x05,\x17\x02\u0130\u0131\x07/\x02\x02\u0131\u0132\x07\x04"+
		"\x02\x02\u0132\u0133\x05&\x14\x02\u0133\u0134\x07\b\x02\x02\u01341\x03"+
		"\x02\x02\x02\u0135\u0136\x07\x07\x02\x02\u0136\u0137\x07A\x02\x02\u0137"+
		"\u0138\x05,\x17\x02\u0138\u0139\x07/\x02\x02\u0139\u013A\x05&\x14\x02"+
		"\u013A\u013B\x07\x04\x02\x02\u013B\u013C\x05&\x14\x02\u013C\u013D\x07"+
		"\b\x02\x02\u013D3\x03\x02\x02\x02\u013E\u0147\x070\x02\x02\u013F\u0144"+
		"\x05&\x14\x02\u0140\u0141\x07*\x02\x02\u0141\u0143\x05&\x14\x02\u0142"+
		"\u0140\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02"+
		"\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0148\x03\x02\x02\x02\u0146"+
		"\u0144\x03\x02\x02\x02\u0147\u013F\x03\x02\x02\x02\u0147\u0148\x03\x02"+
		"\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x071\x02\x02\u014A5\x03"+
		"\x02\x02\x02\u014B\u014C\x070\x02\x02\u014C\u014D\x05<\x1F\x02\u014D\u014E"+
		"\x07/\x02\x02\u014E\u014F\x05&\x14\x02\u014F\u0150\x07\x04\x02\x02\u0150"+
		"\u0151\x05&\x14\x02\u0151\u0152\x071\x02\x02\u01527\x03\x02\x02\x02\u0153"+
		"\u0154\x072\x02\x02\u0154\u0155\x073\x02\x02\u0155\u0156\x05:\x1E\x02"+
		"\u01569\x03\x02\x02\x02\u0157\u0158\x079\x02\x02\u0158\u0159\x073\x02"+
		"\x02\u0159\u0160\x05&\x14\x02\u015A\u015B\x079\x02\x02\u015B\u015C\x07"+
		"\x07\x02\x02\u015C\u015D\x05.\x18\x02\u015D\u015E\x07\b\x02\x02\u015E"+
		"\u0160\x03\x02\x02\x02\u015F\u0157\x03\x02\x02\x02\u015F\u015A\x03\x02"+
		"\x02\x02\u0160;\x03\x02\x02\x02\u0161\u0164\x079\x02\x02\u0162\u0163\x07"+
		"\x04\x02\x02\u0163\u0165\x07:\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164"+
		"\u0165\x03\x02\x02\x02\u0165=\x03\x02\x02\x02\x17DILOY]`lpt|\xB0\xF1\u0113"+
		"\u0115\u0122\u012A\u0144\u0147\u015F\u0164";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SlickParser.__ATN) {
			SlickParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SlickParser._serializedATN));
		}

		return SlickParser.__ATN;
	}

}
