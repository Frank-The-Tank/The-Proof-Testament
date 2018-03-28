// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
import { DocContext } from './SlickParser';
import { ProofContext } from './SlickParser';
import { SepContext } from './SlickParser';
import { HeaderContext } from './SlickParser';
import { TheoremContext } from './SlickParser';
import { MethodContext } from './SlickParser';
import { MethodNameContext } from './SlickParser';
import { StepContext } from './SlickParser';
import { ExprContext } from './SlickParser';
import { HintContext } from './SlickParser';
import { HintOpContext } from './SlickParser';
import { VarlistContext } from './SlickParser';
import { ExprlistContext } from './SlickParser';
import { QuantifiedExprContext } from './SlickParser';
import { SetEnumerationContext } from './SlickParser';
import { SetComprehensionContext } from './SlickParser';
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
	 * Visit a parse tree produced by the `JunctionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJunctionExpr?: (ctx: JunctionExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `QuantExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantExpr?: (ctx: QuantExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPrefixExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPrefixExpr?: (ctx: UnaryPrefixExprContext) => Result;

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

