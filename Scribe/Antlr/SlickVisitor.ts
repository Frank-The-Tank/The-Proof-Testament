// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ImplicationExprContext } from './SlickParser';
import { EquivalenceExprContext } from './SlickParser';
import { AtomContext } from './SlickParser';
import { RelativeExprContext } from './SlickParser';
import { SetEnumExprContext } from './SlickParser';
import { ArrayExprContext } from './SlickParser';
import { FunctionCallExprContext } from './SlickParser';
import { AdditionExprContext } from './SlickParser';
import { LeibnizExprContext } from './SlickParser';
import { SetCompExprContext } from './SlickParser';
import { GeneralExprContext } from './SlickParser';
import { InverseCallExprContext } from './SlickParser';
import { ParenExprContext } from './SlickParser';
import { TSExprContext } from './SlickParser';
import { QuantExprContext } from './SlickParser';
import { JunctionExprContext } from './SlickParser';
import { UnaryPrefixExprContext } from './SlickParser';
import { EmptyRExprContext } from './SlickParser';
import { PreviousTheoremMethodContext } from './SlickParser';
import { RightEquivalesLeftMethodContext } from './SlickParser';
import { RightFollowsLeftMethodContext } from './SlickParser';
import { LeftEquivalesRightMethodContext } from './SlickParser';
import { ContrapositiveMethodContext } from './SlickParser';
import { AssumingConjunctsMethodContext } from './SlickParser';
import { LeftImpliesRightMethodContext } from './SlickParser';
import { ContradictionMethodContext } from './SlickParser';
import { AdHocTheoremContext } from './SlickParser';
import { BibleTheoremContext } from './SlickParser';
import { FunctionDotContext } from './SlickParser';
import { FunctionParenContext } from './SlickParser';
import { TheoremHeaderContext } from './SlickParser';
import { ExerciseHeaderContext } from './SlickParser';
import { DocContext } from './SlickParser';
import { ProofContext } from './SlickParser';
import { StandardProofContext } from './SlickParser';
import { StartExpoContext } from './SlickParser';
import { EndExpoContext } from './SlickParser';
import { SepContext } from './SlickParser';
import { HeaderContext } from './SlickParser';
import { TheoremContext } from './SlickParser';
import { MethodContext } from './SlickParser';
import { MethodNameContext } from './SlickParser';
import { CaseProofContext } from './SlickParser';
import { CaseVariableContext } from './SlickParser';
import { CaseListContext } from './SlickParser';
import { Case1Context } from './SlickParser';
import { Case2Context } from './SlickParser';
import { CaseProof1Context } from './SlickParser';
import { CaseProof2Context } from './SlickParser';
import { StepContext } from './SlickParser';
import { ExprContext } from './SlickParser';
import { HintContext } from './SlickParser';
import { HintOpContext } from './SlickParser';
import { VarlistContext } from './SlickParser';
import { ExprlistContext } from './SlickParser';
import { EmptyRangeExprContext } from './SlickParser';
import { QuantifiedExprContext } from './SlickParser';
import { SetEnumerationContext } from './SlickParser';
import { SetComprehensionContext } from './SlickParser';
import { InverseCallContext } from './SlickParser';
import { FunctionCallContext } from './SlickParser';
import { TypedVarContext } from './SlickParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SlickParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SlickVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ImplicationExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicationExpr?: (ctx: ImplicationExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `EquivalenceExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquivalenceExpr?: (ctx: EquivalenceExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `Atom`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelativeExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelativeExpr?: (ctx: RelativeExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetEnumExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetEnumExpr?: (ctx: SetEnumExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpr?: (ctx: ArrayExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionCallExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpr?: (ctx: FunctionCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionExpr?: (ctx: AdditionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LeibnizExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeibnizExpr?: (ctx: LeibnizExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetCompExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCompExpr?: (ctx: SetCompExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `GeneralExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralExpr?: (ctx: GeneralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `InverseCallExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInverseCallExpr?: (ctx: InverseCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TSExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTSExpr?: (ctx: TSExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `QuantExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantExpr?: (ctx: QuantExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `JunctionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJunctionExpr?: (ctx: JunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPrefixExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPrefixExpr?: (ctx: UnaryPrefixExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `EmptyRExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyRExpr?: (ctx: EmptyRExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `PreviousTheoremMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreviousTheoremMethod?: (ctx: PreviousTheoremMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `RightEquivalesLeftMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightEquivalesLeftMethod?: (ctx: RightEquivalesLeftMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `RightFollowsLeftMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightFollowsLeftMethod?: (ctx: RightFollowsLeftMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `LeftEquivalesRightMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftEquivalesRightMethod?: (ctx: LeftEquivalesRightMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `ContrapositiveMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContrapositiveMethod?: (ctx: ContrapositiveMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssumingConjunctsMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssumingConjunctsMethod?: (ctx: AssumingConjunctsMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `LeftImpliesRightMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftImpliesRightMethod?: (ctx: LeftImpliesRightMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `ContradictionMethod`
	 * labeled alternative in `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContradictionMethod?: (ctx: ContradictionMethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdHocTheorem`
	 * labeled alternative in `SlickParser.theorem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdHocTheorem?: (ctx: AdHocTheoremContext) => Result;

	/**
	 * Visit a parse tree produced by the `BibleTheorem`
	 * labeled alternative in `SlickParser.theorem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBibleTheorem?: (ctx: BibleTheoremContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionDot`
	 * labeled alternative in `SlickParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDot?: (ctx: FunctionDotContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionParen`
	 * labeled alternative in `SlickParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParen?: (ctx: FunctionParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `TheoremHeader`
	 * labeled alternative in `SlickParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheoremHeader?: (ctx: TheoremHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExerciseHeader`
	 * labeled alternative in `SlickParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExerciseHeader?: (ctx: ExerciseHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.doc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoc?: (ctx: DocContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.proof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProof?: (ctx: ProofContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.standardProof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardProof?: (ctx: StandardProofContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.startExpo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartExpo?: (ctx: StartExpoContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.endExpo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndExpo?: (ctx: EndExpoContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.sep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSep?: (ctx: SepContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.theorem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheorem?: (ctx: TheoremContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.caseProof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseProof?: (ctx: CaseProofContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.caseVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseVariable?: (ctx: CaseVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.caseList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseList?: (ctx: CaseListContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.case1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase1?: (ctx: Case1Context) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.case2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase2?: (ctx: Case2Context) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.caseProof1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseProof1?: (ctx: CaseProof1Context) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.caseProof2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseProof2?: (ctx: CaseProof2Context) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStep?: (ctx: StepContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHint?: (ctx: HintContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.hintOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintOp?: (ctx: HintOpContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.varlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarlist?: (ctx: VarlistContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.emptyRangeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyRangeExpr?: (ctx: EmptyRangeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.quantifiedExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedExpr?: (ctx: QuantifiedExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.setEnumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetEnumeration?: (ctx: SetEnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.setComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetComprehension?: (ctx: SetComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.inverseCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInverseCall?: (ctx: InverseCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SlickParser.typedVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedVar?: (ctx: TypedVarContext) => Result;
}

