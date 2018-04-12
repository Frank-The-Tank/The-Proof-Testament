import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditorService} from '../editor/editor.service';
import {Heuristic} from '../../model/heuristic';
import {whatTheorem} from '../../model/whatTheorem';
declare var MathJax: any;

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit, OnDestroy{

  nameText = '';
  pinText = '';
  courseText = '';
  heuristicText = '';
  assignmentText = '';
  proofText = '';
  infoFilled: boolean;
  infoFilledSubscription;
  customProofSelected = false;
  whatTheorem: whatTheorem[];
  heuristic: Heuristic[];


  constructor(private editorService: EditorService) {
    this.infoFilledSubscription = this.editorService.infoFilledChange.subscribe(infoFilled => {
      this.infoFilled = infoFilled;
    });
  }

  formSubmit(selection, hiddenVal) {
    this.editorService.toggleFormFilled();
    if (selection === 'custom') {
      this.proofText = hiddenVal;
    }
    if (this.heuristicText === ''){
        this.heuristicText = 'by showing equivalence to a previous theorem' + '<br /><br /><u>Proof:</u>';
    }
    const outline =
      ('Name: ').bold() +  this.nameText + " #" + this.pinText + '<br />' +
      ('Course: ').bold() + this.courseText + '<br />' +
      ('Assignment: ').bold() +  this.assignmentText + '<br /><br />' +
      'Prove ' + this.proofText + '<br />' + this.heuristicText;
    this.editorService.submitData(outline);
  }

onHeuristicSelectionChanged(selection) {
  }

  onProofSelectionChanged(selection) {
    if (selection === 'custom') {
      this.customProofSelected = true;
    } else {
      this.customProofSelected = false;
    }
  }



  ngOnInit() {
    this.heuristic = [
      {name: 'Prove Equivalent to Previous Theorem', description: 'by showing equivalence to a previous theorem <br /><br /><u>Proof:</u>'},
      {name: 'Deduction', description: 'by assuming conjunct of antecedent <br /><br /><u>Proof:</u>'},
      {name: 'Case Analysis', description: 'by case analysis on p <br />' +
        ' prove <br />' +
        '  (1) true ⋀ (q ⋁ r) ≡ (true ⋀ q) ⋁ (true ⋀ r) <br />' +
        '  (2) false ⋀ (q ⋁ r) ≡ (false ⋀ q) ⋁ (false ⋀ r)<br /><br />' +
        'Proof of (1)<br /><br />' +
        'Proof of (2)<br /><br />'
      },
      {name: 'Mutual Implication', description: 'To prove P ≡ Q, prove P ⇒ Q and Q ⇒ P.<br /><br /><u>Proof:</u>'},
      {name: 'Truth Implication', description: 'To prove P, prove true ⇒ P.<br /><br /><u>Proof:</u>'},
      {name: 'Induction', description: 'by mathematical induction<br /><br /><u>Proof:</u>'},
      {name: 'Proof by Contradiction', description: 'by contradiction<br /><br /><u>Proof:</u>'},
      {name: 'Proof by Contrapositive', description: 'by proving the contrapositive: <br /><br /><u>Proof:</u>'}];
    this.whatTheorem = [
      {number:"(3.1)", name:"Associativity of ≡"},
      {number:"(3.2)", name:"Symmetry of ≡"},
      {number:"(3.3)", name:"Identity of ≡"},
      {number:"(3.4)", name:"true"},
      {number:"(3.5)", name:"Reflexivity of ≡"},
      {number:"(3.8)", name:" Definition of false"},
      {number:"(3.9)", name:"  Distributivity of ¬ over ≡"},
      {number:"(3.10)", name:" Definition of ≢"},
      {number:"(3.11)", name:" ¬p ≡ q ≡ p ≡ ¬q"},
      {number:"(3.12)", name:" Double negation"},
      {number:"(3.13)", name:" Negation of false"},
      {number:"(3.14)", name:" (p ≢ q) ≡ ¬p ≡ q"},
      {number:"(3.15)", name:" ¬p ≡ p ≡ false"},
      {number:"(3.16)", name:" Symmetry of ≢"},
      {number:"(3.17)", name:" Associativity of ≢"},
      {number:"(3.18)", name:" Mutual associativity"},
      {number:"(3.19)", name:" Mutual interchangeability"},
      {number:"(3.19.1)", name:" p ≢ p ≢ q  ≡  q"},
      {number:"(3.24)", name:"  Symmetry of ⋁"},
      {number:"(3.25)", name:"  Associativity of ⋁"},
      {number:"(3.26)", name:"  Idempotency of ⋁"},
      {number:"(3.27)", name:"  Distributivity of ⋁ over ≡"},
      {number:"(3.28)", name:"  Excluded middle"},
      {number:"(3.29)", name:" Zero of ⋁"},
      {number:"(3.30)", name:" Identity of ⋁"},
      {number:"(3.31)", name:" Distributivity of ⋁ over ⋁"},
      {number:"(3.32)", name:"p ⋁ q ≡ p ⋁ ¬q ≡ p"},
      {number:"(3.35)", name:"   Golden rule: p ⋀ q ≡ p ≡ q ≡ p ⋁ q"},
      {number:"(3.36)", name:" Symmetry of ⋀: p ⋀ q ≡ q ⋀ p"},
      {number:"(3.37)", name:" Associativity of ⋀: (p ⋀ q) ⋀ r  ≡  p ⋀ (q ⋀ r)"},
      {number:"(3.38)", name:" Idempotency of ⋀: p ⋀ p ≡ p"},
      {number:"(3.39)", name:" Identity of ⋀: p ⋀ true ≡ p"},
      {number:"(3.40)", name:" Zero of ⋀: p ⋀ false ≡ false"},
      {number:"(3.41)", name:" Distributivity of ⋀ over ⋀"},
      {number:"(3.42)", name:" Contradiction"},
      {number:"(3.43a)", name:" Absorption: p ⋀ (p ⋁ q) ≡ p"},
      {number:"(3.43b)", name:" Absorption: p ⋁ (p ⋀ q) ≡ p"},
      {number:"(3.44a)", name:" Absorption: p ⋀ (¬p ⋁ q) ≡ p ⋀ q"},
      {number:"(3.44b)", name:" Absorption: p ⋁ (¬p ⋀ q) ≡ p ⋁ q"},
      {number:"(3.45)", name:" Distributivity of ⋁ over ⋀"},
      {number:"(3.46)", name:" Distributivity of ⋀ over ⋁"},
      {number:"(3.47a)", name:" De Morgan: ¬(p ⋀ q) ≡ ¬p ⋁ ¬q"},
      {number:"(3.47b)", name:" De Morgan: ¬(p ⋁ q) ≡ ¬p ⋀ ¬q"},
      {number:"(3.48)", name:" p ⋀ q ≡ p ⋀ ¬q ≡ ¬p"},
      {number:"(3.49)", name:" p ⋀ (q ≡ r) ≡ p ⋀ q ≡ p ⋀ r ≡ p"},
      {number:"(3.50)", name:" p ⋀ (q ≡ p) ≡ p ⋀ q"},
      {number:"(3.51)", name:" Replacement"},
      {number:"(3.52)", name:" Equivalence"},
      {number:"(3.53)", name:" Exclusive or"},
      {number:"(3.55)", name:" (p ⋀ q) ⋀ r ≡ p ≡ q ≡ r ≡ p ⋁ q ≡ q ⋁ r ≡ r ⋁ p ≡ p ⋁ q ⋁ r"},
      {number:"(3.57)", name:" Definition of Implication"},
      {number:"(3.58)", name:"   Consequence"},
      {number:"(3.59)", name:" Implication"},
      {number:"(3.60)", name:" Implication"},
      {number:"(3.61)", name:" Contrapositive"},
      {number:"(3.62)", name:" p ⇒ (q ≡ r)  ≡  p ⋀ q ≡ p ⋀ r"},
      {number:"(3.63)", name:" Distributivity of ⇒ over ≡"},
      {number:"(3.63.1)", name:" Distributivity of ⇒ over ⋀"},
      {number:"(3.63.2)", name:" Distributivity of ⇒ over ⋁"},
      {number:"(3.64)", name:" p ⇒ (q ⇒ r)  ≡  (p ⇒ q) ⇒ (p ⇒ r)"},
      {number:"(3.65)", name:" Shunting"},
      {number:"(3.66)", name:" p ⋀ (p ⇒ q)  ≡  p ⋀ q"},
      {number:"(3.67)", name:" p ⋀ (q ⇒ p)  ≡  p"},
      {number:"(3.68)", name:" p ⋁ (p ⇒ q) ≡ true"},
      {number:"(3.69)", name:" p ⋁ (q ⇒ p) ≡ q ⇒ p"},
      {number:"(3.70)", name:" p ⋁ q ⇒ p ⋀ q  ≡  p ≡ q"},
      {number:"(3.71)", name:" Reflexivity of ⇒"},
      {number:"(3.72)", name:" Right zero of ⇒"},
      {number:"(3.73)", name:" Left identity of ⇒"},
      {number:"(3.74)", name:" p ⇒ false  ≡  ¬p"},
      {number:"(3.74.1)", name:" ¬p ⇒ false  ≡  p"},
      {number:"(3.75)", name:" false ⇒ p  ≡  true"},
      {number:"(3.76a)", name:" Weakening the consequent"},
      {number:"(3.76b)", name:" Stengthening the antecedent"},
      {number:"(3.76c)", name:" Weakening/strengthening"},
      {number:"(3.76d)", name:" p ⋁ (q ⋀ r) ⇒ p ⋁ q"},
      {number:"(3.76e)", name:" p ⋀ q ⇒ p ⋀ (q ⋁ r)"},
      {number:"(3.76.1)", name:" p ⋀ q ⇒ p ⋁ r"},
      {number:"(3.76.2)", name:" (p ⇒ q)  ⇒  ((q ⇒ r) ⇒ (p ⇒ r))"},
      {number:"(3.77)", name:" Modus ponens"},
      {number:"(3.77.1)", name:" Modus tollens"},
      {number:"(3.78)", name:" (p ⇒ r) ⋀ (q ⇒ r)  ⇒  (p ⋁ q) ⇒ r"},
      {number:"(3.79)", name:" (p ⇒ r) ⋀ (¬p ⇒ r)  ≡  r"},
      {number:"(3.80)", name:" Mutual implication"},
      {number:"(3.81)", name:" Antisymmetry"},
      {number:"(3.82a)", name:" Transitivity: (p ⇒ q) ⋀ (q ⇒ r)  ⇒  (p ⇒ r)"},
      {number:"(3.82b)", name:" Transitivity: (p ≡ q) ⋀ (q ⇒ r)  ⇒  (p ⇒ r)"},
      {number:"(3.82c)", name:" Transitivity: (p ⇒ q) ⋀ (q ≡ r)  ⇒  (p ⇒ r)"},
      {number:"(3.82.1)", name:" Transitivity of ≡"},
      {number:"(3.82.2)", name:" (p ≡ q) ⇒ (p ⇒ q)"},
      {number:"(3.83)", name:"   Leibniz"},
      {number:"(3.84a)", name:" Substitution: (e = f) ⋀ E[z,e]  ≡  (e = f) ⋀ E[z,f]"},
      {number:"(3.84b)", name:" Substitution: (e = f) ⇒ E[z,e]  ≡  (e = f) ⇒ E[z,f]"},
      {number:"(3.84c)", name:" Substitution: q ⋀ (e = f) ⇒ E[z,e]  ≡  q ⋀ (e = f) ⇒ E[z,f]"},
      {number:"(3.85a)", name:" Replace by true: p ⇒ E[z,p]  ≡  p ⇒ E[z,true]"},
      {number:"(3.85b)", name:" Replace by true: q ⋀ p ⇒ E[z,p]  ≡  q ⋀ p ⇒ E[z,true]"},
      {number:"(3.86a)", name:" Replace by false: E[z,p] ⇒ p  ≡  E[z,false] ⇒ p"},
      {number:"(3.86b)", name:" Replace by false: E[z,p] ⇒ p ⋁ q  ≡  E[z,false] ⇒ p ⋁ q"},
      {number:"(3.87)", name:" Replace by true"},
      {number:"(3.88)", name:" Replace by false"},
      {number:"(3.89)", name:" Shannon"},
      {number:"(4.1) p ⇒ (q ⇒ p)"},
      {number:"(4.2)", name:" Monotonicity of ⋁"},
      {number:"(4.3)", name:" Monotonicity of ⋀"},

      {number:"(8.13)", name:"   Empty range"},
      {number:"(8.14)", name:"   One-point rule"},
      {number:"(8.15)", name:"   Distributivity"},
      {number:"(8.16)   Range split: (★x | R ⋁ S : P) = (★x | R : P) ★ (★x | S : P)"},
      {number:"(8.17)", name:"   Range split: (★x | R ⋁ S : P) ★ (★x | R ⋀ S : P) = (★x | R : P) ★ (★x | S | P)"},
      {number:"(8.18)", name:"   Range split for idempotent ★"},
      {number:"(8.19)", name:"   Interchange of dummies"},
      {number:"(8.20)", name:"   Nesting"},
      {number:"(8.21)", name:"   Dummy renaming"},
      {number:"(8.22)", name:" Change of dummy"},
      {number:"(8.23a)", name:" Split off term"},
      {number:"(8.23b)", name:" Split off term"},
      {number:"(9.2)", name:"   Trading: (∀x | R : P) ≡ (∀x |: R ⇒ P)"},
      {number:"(9.3a)", name:" Trading: (∀x | R : P) ≡ (∀x |: ¬R ⋁ P)"},
      {number:"(9.3b)", name:" Trading: (∀x | R : P) ≡ (∀x |: R ⋀ P ≡ R)"},
      {number:"(9.3c)", name:" Trading: (∀x | R : P) ≡ (∀x |: R ⋁ P ≡ P)"},
      {number:"(9.4a)", name:" Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : R ⇒ P)"},
      {number:"(9.4b)", name:" Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : ¬R ⋁ P)"},
      {number:"(9.4c)", name:" Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : R ⋀ P ≡ R)"},
      {number:"(9.4d)", name:" Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : R ⋁ P ≡ P)"},
      {number:"(9.4.1)", name:" Universal double trading"},
      {number:"(9.5)", name:"   Distributivity of ⋁ over ∀"},
      {number:"(9.6)", name:" (∀x | R : P) ≡ P ⋁ (∀x |: ¬R)"},
      {number:"(9.7)", name:" Distributivity of ⋀ over ∀"},
      {number:"(9.8)", name:" (∀x | R : true) ≡ true"},
      {number:"(9.9)", name:" (∀x | R : P ≡ Q) ⇒ ((∀x | R : P) ≡ (∀x | R : Q))"},
      {number:"(9.10)", name:" Range weakening/strengthening"},
      {number:"(9.11)", name:" Body weakening/strengthening"},
      {number:"(9.12)", name:" Monotonicity of ∀"},
      {number:"(9.13)", name:" Instantiation"},
      {number:"(9.14)", name:" Metatheorem"},
      {number:"(9.17)", name:"Generalized De Morgan: (∃x | R : P) ≡ ¬(∀x | R : ¬P)"},
      {number:"(9.18a)", name:" Generalized De Morgan: ¬(∃x | R : ¬P) ≡ (∀x | R : P)"},
      {number:"(9.18b)", name:" Generalized De Morgan: ¬(∃x | R : P) ≡ (∀x | R : ¬P)"},
      {number:"(9.18c)", name:" Generalized De Morgan: (∃x | R : ¬P) ≡ ¬(∀x | R : P)"},
      {number:"(9.19)", name:" Trading: (∃x | R : P) ≡ (∃x |: R ⋀ P)"},
      {number:"(9.20)", name:" Trading: (∃x | Q ⋀ R : P) ≡ (∃x | Q : R ⋀ P)"},
      {number:"(9.20.1)", name:" Existential double trading"},
      {number:"(9.20.2)", name:" (∃x |: R) ⇒ ((∀x | R : P) ⇒ (∃x | R : P))"},
      {number:"(9.21)", name:" Distributivity of ⋀ over ∃"},
      {number:"(9.22)", name:" (∃x | R : P) ≡ P ⋀ (∃ |: R)"},
      {number:"(9.23)", name:" Distributivity of ⋁ over ∃"},
      {number:"(9.24)", name:" (∃x | R : false) ≡ false"},
      {number:"(9.25)", name:" Range weakening/strengthening"},
      {number:"(9.26)", name:" Body weakening/strengthening"},
      {number:"(9.27)", name:" Monotonicity of ∃"},
      {number:"(9.28)", name:" ∃-Introduction"},
      {number:"(9.29)", name:" Interchange of quantificiation"},
      {number:"(9.30)", name:" (∃x | R : P) ⇒ Q is a theorem iff (R ⋀ P)[x ≔ y] ⇒ Q is a theorem"}
    ];
  }

  ngOnDestroy() {
    this.infoFilledSubscription.unsubscribe();
  }
}
