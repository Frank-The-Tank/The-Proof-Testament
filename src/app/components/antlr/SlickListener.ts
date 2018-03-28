// Generated from Slick.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `SlickParser`.
 */
export interface SlickListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ImplicationExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterImplicationExpr?: (ctx: ImplicationExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ImplicationExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitImplicationExpr?: (ctx: ImplicationExprContext) => void;

	/**
	 * Enter a parse tree produced by the `EquivalenceExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEquivalenceExpr?: (ctx: EquivalenceExprContext) => void;
	/**
	 * Exit a parse tree produced by the `EquivalenceExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEquivalenceExpr?: (ctx: EquivalenceExprContext) => void;

	/**
	 * Enter a parse tree produced by the `Atom`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by the `Atom`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by the `RelativeExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterRelativeExpr?: (ctx: RelativeExprContext) => void;
	/**
	 * Exit a parse tree produced by the `RelativeExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitRelativeExpr?: (ctx: RelativeExprContext) => void;

	/**
	 * Enter a parse tree produced by the `SetEnumExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSetEnumExpr?: (ctx: SetEnumExprContext) => void;
	/**
	 * Exit a parse tree produced by the `SetEnumExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSetEnumExpr?: (ctx: SetEnumExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionCallExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpr?: (ctx: FunctionCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCallExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpr?: (ctx: FunctionCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAdditionExpr?: (ctx: AdditionExprContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAdditionExpr?: (ctx: AdditionExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LeibnizExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLeibnizExpr?: (ctx: LeibnizExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LeibnizExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLeibnizExpr?: (ctx: LeibnizExprContext) => void;

	/**
	 * Enter a parse tree produced by the `SetCompExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSetCompExpr?: (ctx: SetCompExprContext) => void;
	/**
	 * Exit a parse tree produced by the `SetCompExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSetCompExpr?: (ctx: SetCompExprContext) => void;

	/**
	 * Enter a parse tree produced by the `GeneralExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGeneralExpr?: (ctx: GeneralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `GeneralExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGeneralExpr?: (ctx: GeneralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TSExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTSExpr?: (ctx: TSExprContext) => void;
	/**
	 * Exit a parse tree produced by the `TSExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTSExpr?: (ctx: TSExprContext) => void;

	/**
	 * Enter a parse tree produced by the `JunctionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterJunctionExpr?: (ctx: JunctionExprContext) => void;
	/**
	 * Exit a parse tree produced by the `JunctionExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitJunctionExpr?: (ctx: JunctionExprContext) => void;

	/**
	 * Enter a parse tree produced by the `QuantExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterQuantExpr?: (ctx: QuantExprContext) => void;
	/**
	 * Exit a parse tree produced by the `QuantExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitQuantExpr?: (ctx: QuantExprContext) => void;

	/**
	 * Enter a parse tree produced by the `UnaryPrefixExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryPrefixExpr?: (ctx: UnaryPrefixExprContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPrefixExpr`
	 * labeled alternative in `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryPrefixExpr?: (ctx: UnaryPrefixExprContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.doc`.
	 * @param ctx the parse tree
	 */
	enterDoc?: (ctx: DocContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.doc`.
	 * @param ctx the parse tree
	 */
	exitDoc?: (ctx: DocContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.proof`.
	 * @param ctx the parse tree
	 */
	enterProof?: (ctx: ProofContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.proof`.
	 * @param ctx the parse tree
	 */
	exitProof?: (ctx: ProofContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.sep`.
	 * @param ctx the parse tree
	 */
	enterSep?: (ctx: SepContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.sep`.
	 * @param ctx the parse tree
	 */
	exitSep?: (ctx: SepContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.theorem`.
	 * @param ctx the parse tree
	 */
	enterTheorem?: (ctx: TheoremContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.theorem`.
	 * @param ctx the parse tree
	 */
	exitTheorem?: (ctx: TheoremContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.methodName`.
	 * @param ctx the parse tree
	 */
	enterMethodName?: (ctx: MethodNameContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.methodName`.
	 * @param ctx the parse tree
	 */
	exitMethodName?: (ctx: MethodNameContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.step`.
	 * @param ctx the parse tree
	 */
	enterStep?: (ctx: StepContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.step`.
	 * @param ctx the parse tree
	 */
	exitStep?: (ctx: StepContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.hintOp`.
	 * @param ctx the parse tree
	 */
	enterHintOp?: (ctx: HintOpContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.hintOp`.
	 * @param ctx the parse tree
	 */
	exitHintOp?: (ctx: HintOpContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.quantifiedExpr`.
	 * @param ctx the parse tree
	 */
	enterQuantifiedExpr?: (ctx: QuantifiedExprContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.quantifiedExpr`.
	 * @param ctx the parse tree
	 */
	exitQuantifiedExpr?: (ctx: QuantifiedExprContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.setEnumeration`.
	 * @param ctx the parse tree
	 */
	enterSetEnumeration?: (ctx: SetEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.setEnumeration`.
	 * @param ctx the parse tree
	 */
	exitSetEnumeration?: (ctx: SetEnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.setComprehension`.
	 * @param ctx the parse tree
	 */
	enterSetComprehension?: (ctx: SetComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.setComprehension`.
	 * @param ctx the parse tree
	 */
	exitSetComprehension?: (ctx: SetComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `SlickParser.typedVar`.
	 * @param ctx the parse tree
	 */
	enterTypedVar?: (ctx: TypedVarContext) => void;
	/**
	 * Exit a parse tree produced by `SlickParser.typedVar`.
	 * @param ctx the parse tree
	 */
	exitTypedVar?: (ctx: TypedVarContext) => void;
}

