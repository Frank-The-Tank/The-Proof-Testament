import { ImplicationExprContext } from './SlickParser';
import { EquivalenceExprContext } from './SlickParser';
import { AtomContext } from './SlickParser';
import { LeibnizExprContext } from './SlickParser';
import { ParenExprContext } from './SlickParser';
import { JunctionExprContext } from './SlickParser';
import { UnaryPrefixExprContext } from './SlickParser';
import { DocContext } from './SlickParser';
import { ProofContext } from './SlickParser';
import { SepContext } from './SlickParser';
import { TheoremContext } from './SlickParser';
import { StepContext } from './SlickParser';
import { HintContext } from './SlickParser';
import { HintOpContext } from './SlickParser';
import { SlickListener } from './SlickListener';
export declare class SlickCompiler implements SlickListener {
    private parser;
    private bible;
    private latex;
    private output;
    private preamble;
    private input;
    private chars;
    private lexer;
    private tokens;
    private stack;
    private tree;
    constructor();
    exitDoc: (ctx: DocContext) => void;
    exitProof(ctx: ProofContext): void;
    exitSep: (ctx: SepContext) => void;
    exitAtom: (ctx: AtomContext) => void;
    exitJunctionExpr: (ctx: JunctionExprContext) => void;
    exitImplicationExpr: (ctx: ImplicationExprContext) => void;
    exitEquivalenceExpr: (ctx: EquivalenceExprContext) => void;
    exitUnaryPrefixExpr: (ctx: UnaryPrefixExprContext) => void;
    exitParenExpr: (ctx: ParenExprContext) => void;
    exitLeibnizExpr: (ctx: LeibnizExprContext) => void;
    exitStep: (ctx: StepContext) => void;
    exitHint: (ctx: HintContext) => void;
    exitHintOp: (ctx: HintOpContext) => void;
    exitTheorem: (ctx: TheoremContext) => void;
    removeFm(s: string): string;
    compile(data: string): string;
}
