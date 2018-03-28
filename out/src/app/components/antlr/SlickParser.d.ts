import { ATN } from 'antlr4ts/atn/ATN';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RuleContext } from 'antlr4ts/RuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { SlickListener } from './SlickListener';
import { SlickVisitor } from './SlickVisitor';
export declare class DocContext extends ParserRuleContext {
    proof(): ProofContext[];
    proof(i: number): ProofContext;
    sep(): SepContext[];
    sep(i: number): SepContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class ProofContext extends ParserRuleContext {
    step(): StepContext[];
    step(i: number): StepContext;
    header(): HeaderContext | undefined;
    hint(): HintContext[];
    hint(i: number): HintContext;
    END(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class SepContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class HeaderContext extends ParserRuleContext {
    theorem(): TheoremContext;
    method(): MethodContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class TheoremContext extends ParserRuleContext {
    RULENUM(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class MethodContext extends ParserRuleContext {
    methodName(): MethodNameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class MethodNameContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class StepContext extends ParserRuleContext {
    expr(): ExprContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class ExprContext extends ParserRuleContext {
    constructor();
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    copyFrom(ctx: ExprContext): void;
}
export declare class ImplicationExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    IMPOP(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class EquivalenceExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    EQOP(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class AtomContext extends ExprContext {
    EVAR(): TerminalNode | undefined;
    VAR(): TerminalNode | undefined;
    NUM(): TerminalNode | undefined;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class RelativeExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    RELOP(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class SetEnumExprContext extends ExprContext {
    setEnumeration(): SetEnumerationContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class FunctionCallExprContext extends ExprContext {
    functionCall(): FunctionCallContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class AdditionExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    ADDOP(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class LeibnizExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    VAR(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class SetCompExprContext extends ExprContext {
    setComprehension(): SetComprehensionContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class GeneralExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class ParenExprContext extends ExprContext {
    expr(): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class TSExprContext extends ExprContext {
    expr(): ExprContext;
    varlist(): VarlistContext;
    exprlist(): ExprlistContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class JunctionExprContext extends ExprContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    JOP(): TerminalNode;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class QuantExprContext extends ExprContext {
    quantifiedExpr(): QuantifiedExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class UnaryPrefixExprContext extends ExprContext {
    expr(): ExprContext;
    constructor(ctx: ExprContext);
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class HintContext extends ParserRuleContext {
    hintOp(): HintOpContext;
    COMMENT(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class HintOpContext extends ParserRuleContext {
    RELOP(): TerminalNode | undefined;
    IMPOP(): TerminalNode | undefined;
    EQOP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class VarlistContext extends ParserRuleContext {
    typedVar(): TypedVarContext[];
    typedVar(i: number): TypedVarContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class ExprlistContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class QuantifiedExprContext extends ParserRuleContext {
    QUANTIFIER(): TerminalNode;
    varlist(): VarlistContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class SetEnumerationContext extends ParserRuleContext {
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class SetComprehensionContext extends ParserRuleContext {
    typedVar(): TypedVarContext;
    expr(): ExprContext[];
    expr(i: number): ExprContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class FunctionCallContext extends ParserRuleContext {
    VAR(): TerminalNode;
    expr(): ExprContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class TypedVarContext extends ParserRuleContext {
    VAR(): TerminalNode;
    TYPE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SlickListener): void;
    exitRule(listener: SlickListener): void;
    accept<Result>(visitor: SlickVisitor<Result>): Result;
}
export declare class SlickParser extends Parser {
    static readonly T__0: number;
    static readonly T__1: number;
    static readonly T__2: number;
    static readonly T__3: number;
    static readonly T__4: number;
    static readonly T__5: number;
    static readonly T__6: number;
    static readonly T__7: number;
    static readonly T__8: number;
    static readonly T__9: number;
    static readonly T__10: number;
    static readonly T__11: number;
    static readonly T__12: number;
    static readonly T__13: number;
    static readonly T__14: number;
    static readonly T__15: number;
    static readonly T__16: number;
    static readonly T__17: number;
    static readonly T__18: number;
    static readonly T__19: number;
    static readonly T__20: number;
    static readonly T__21: number;
    static readonly COMMENT: number;
    static readonly RULENUM: number;
    static readonly EVAR: number;
    static readonly VAR: number;
    static readonly TYPE: number;
    static readonly NUM: number;
    static readonly ADDOP: number;
    static readonly RELOP: number;
    static readonly JOP: number;
    static readonly IMPOP: number;
    static readonly EQOP: number;
    static readonly QUANTIFIER: number;
    static readonly WS: number;
    static readonly END: number;
    static readonly RULE_doc: number;
    static readonly RULE_proof: number;
    static readonly RULE_sep: number;
    static readonly RULE_header: number;
    static readonly RULE_theorem: number;
    static readonly RULE_method: number;
    static readonly RULE_methodName: number;
    static readonly RULE_step: number;
    static readonly RULE_expr: number;
    static readonly RULE_hint: number;
    static readonly RULE_hintOp: number;
    static readonly RULE_varlist: number;
    static readonly RULE_exprlist: number;
    static readonly RULE_quantifiedExpr: number;
    static readonly RULE_setEnumeration: number;
    static readonly RULE_setComprehension: number;
    static readonly RULE_functionCall: number;
    static readonly RULE_typedVar: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    doc(): DocContext;
    proof(): ProofContext;
    sep(): SepContext;
    header(): HeaderContext;
    theorem(): TheoremContext;
    method(): MethodContext;
    methodName(): MethodNameContext;
    step(): StepContext;
    expr(): ExprContext;
    expr(_p: number): ExprContext;
    hint(): HintContext;
    hintOp(): HintOpContext;
    varlist(): VarlistContext;
    exprlist(): ExprlistContext;
    quantifiedExpr(): QuantifiedExprContext;
    setEnumeration(): SetEnumerationContext;
    setComprehension(): SetComprehensionContext;
    functionCall(): FunctionCallContext;
    typedVar(): TypedVarContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expr_sempred(_localctx, predIndex);
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
