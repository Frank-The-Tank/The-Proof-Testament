import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditorService} from '../editor/editor.service';
import {Heuristic} from '../../model/heuristic';
import {whatTheorem} from '../../model/whatTheorem';
import {RadioControlValueAccessor} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';

declare var MathJax: any;

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit, OnDestroy {


  intent = new FormGroup({
    intention: new FormControl('prove'),

  });

  nameText = '';
  pinText = '';
  courseText = '';
  heuristicText = '';
  addHeuristicText = '';
  addIntention = '';
  addExNumText = '';
  addExerciseText = '';
  assignmentText = '';
  proofText = '';
  addProofText = '';
  addReproveText = '';
  reproveText = '';
  intention = '';
  infoFilled: boolean;
  requiredFieldsFilled = true;
  exerciseText = '';
  exNumText = '';
  private infoFilledSubscription;
  editorEmpty: boolean;
  private editorEmptySubscription;
  customProofSelected = false;
  whatTheorem: whatTheorem[];
  exHeuristic: Heuristic[];
  heuristic: Heuristic[];


  constructor(private editorService: EditorService) {
    this.infoFilledSubscription = this.editorService.infoFilledChange.subscribe(infoFilled => {
      this.infoFilled = infoFilled;
    });
    this.editorEmptySubscription = this.editorService.editorEmptyChange.subscribe(value => {
      this.editorEmpty = value;
    });
  }

  formSubmit(selection, hiddenVal, valid) {
    if (!valid) {
      this.requiredFieldsFilled = false;
      return;
    }
    this.requiredFieldsFilled = true;
    this.editorService.toggleFormFilled();
    this.editorService.setEditorNonEmpty(true);
    if (selection === 'custom') {
      this.proofText = hiddenVal;
    }
    if (this.heuristicText === '') {
      this.heuristicText = '<br /><u>Proof:</u>';
    }
    if (this.assignmentText !== '') {
      this.assignmentText = 'A' + this.assignmentText;
    }

    let outline =
      ('Name: ').bold() + this.nameText + '<br />' +
      ('Pin: ').bold() + this.pinText + '<br />' +
      ('Course: ').bold() + this.courseText + '<br />' +
      ('Assignment: ').bold() + this.assignmentText + '<br /><br />';

    switch (this.intention) {
      case 'prove':
        outline += 'Prove ' + this.proofText + '<br />' + this.heuristicText;
        break;
      case 'reprove':
        outline += 'Reprove ' + this.reproveText + '<br />' + this.heuristicText;
        break;
      case 'exercise':
        outline += 'Exercise ' + this.exNumText + '<br /><br />[[[<br />--clear out if no explanations needed--<br />]]]'+
        '<br /><br />Proof or answer to exercise here<br /><br />[[[<br />--clear out if no explanations needed--<br />]]]' ;
        break;
      default:
        break;
    }

    this.editorService.submitData(outline);
  }

  addNewProof() {
    this.editorService.setEditorNonEmpty(true);
    this.editorService.toggleFormFilled();

    if (this.addHeuristicText === '') {
      this.addHeuristicText = '<br /><u>Proof:</u>';
    }
    let outline = '---------------- <br /><br />';
    switch (this.addIntention) {
      case 'prove':
        outline += 'Prove ' + this.addProofText + '<br />' + this.addHeuristicText;
        break;
      case 'reprove':
        outline += 'Reprove ' + this.addReproveText + '<br />' + this.addHeuristicText;
        break;
      case 'exercise':
        outline += 'Exercise ' + this.addExNumText + '<br /><br />[[[<br />--clear out if no explanations needed--<br />]]]'+
        '<br /><br />answer goes here<br /><br />[[[<br />--clear out if no explanations needed--<br />]]]';
        break;
      default:
        break;
    }
    this.editorService.addProofToData(outline);
  }

  cancelAddNewProof() {
    this.editorService.setEditorNonEmpty(true);
    this.editorService.toggleFormFilled();
  }

  intentionChosen(value) {
    this.intention = value;
    if (value === 'prove') {
      document.getElementById('method').style.display = 'block';
      document.getElementById('proofDiv').style.display = 'block';
      document.getElementById('reproveDiv').style.display = 'none';
      document.getElementById('exNumDiv').style.display = 'none';
      document.getElementById('proveBtn').style.backgroundColor = '#82ac60';
      document.getElementById('proveBtn').style.borderColor = '#82ac60';
      document.getElementById('reproveBtn').style.backgroundColor = 'grey';
      document.getElementById('reproveBtn').style.borderColor = 'grey';
      document.getElementById('exerciseBtn').style.backgroundColor = 'grey';
      document.getElementById('exerciseBtn').style.borderColor = 'grey';
    } else if (value === 'reprove') {
      document.getElementById('method').style.display = 'block';
      document.getElementById('proofDiv').style.display = 'none';
      document.getElementById('reproveDiv').style.display = 'block';
      document.getElementById('exNumDiv').style.display = 'none';
      document.getElementById('proveBtn').style.backgroundColor = 'grey';
      document.getElementById('proveBtn').style.borderColor = 'grey';
      document.getElementById('reproveBtn').style.backgroundColor = '#82ac60';
      document.getElementById('reproveBtn').style.borderColor = '#82ac60';
      document.getElementById('exerciseBtn').style.backgroundColor = 'grey';
      document.getElementById('exerciseBtn').style.borderColor = 'grey';
    } else if (value === 'exercise') {
      document.getElementById('method').style.display = 'none';
      document.getElementById('proofDiv').style.display = 'none';
      document.getElementById('reproveDiv').style.display = 'none';
      document.getElementById('exNumDiv').style.display = 'block';
      document.getElementById('proveBtn').style.backgroundColor = 'grey';
      document.getElementById('proveBtn').style.borderColor = 'grey';
      document.getElementById('reproveBtn').style.backgroundColor = 'grey';
      document.getElementById('reproveBtn').style.borderColor = 'grey';
      document.getElementById('exerciseBtn').style.backgroundColor = '#82ac60';
      document.getElementById('exerciseBtn').style.borderColor = '#82ac60';
    }
  }

  addIntentionChosen(value) {
    this.addIntention = value;
    if (value === 'prove') {
      document.getElementById('addMethod').style.display = 'block';
      document.getElementById('addProofDiv').style.display = 'block';
      document.getElementById('addReproveDiv').style.display = 'none';
      document.getElementById('addExNumDiv').style.display = 'none';
      document.getElementById('addProveBtn').style.backgroundColor = '#82ac60';
      document.getElementById('addProveBtn').style.borderColor = '#82ac60';
      document.getElementById('addReproveBtn').style.backgroundColor = 'grey';
      document.getElementById('addReproveBtn').style.borderColor = 'grey';
      document.getElementById('addExerciseBtn').style.backgroundColor = 'grey';
      document.getElementById('addExerciseBtn').style.borderColor = 'grey';
    } else if (value === 'reprove') {
      document.getElementById('addMethod').style.display = 'block';
      document.getElementById('addProofDiv').style.display = 'none';
      document.getElementById('addReproveDiv').style.display = 'block';
      document.getElementById('addExNumDiv').style.display = 'none';
      document.getElementById('addProveBtn').style.backgroundColor = 'grey';
      document.getElementById('addProveBtn').style.borderColor = 'grey';
      document.getElementById('addReproveBtn').style.backgroundColor = '#82ac60';
      document.getElementById('addReproveBtn').style.borderColor = '#82ac60';
      document.getElementById('addExerciseBtn').style.backgroundColor = 'grey';
      document.getElementById('addExerciseBtn').style.borderColor = 'grey';
    } else if (value === 'exercise') {
      document.getElementById('addMethod').style.display = 'none';
      document.getElementById('addProofDiv').style.display = 'none';
      document.getElementById('addReproveDiv').style.display = 'none';
      document.getElementById('addExNumDiv').style.display = 'block';
      document.getElementById('addProveBtn').style.backgroundColor = 'grey';
      document.getElementById('addProveBtn').style.borderColor = 'grey';
      document.getElementById('addReproveBtn').style.backgroundColor = 'grey';
      document.getElementById('addReproveBtn').style.borderColor = 'grey';
      document.getElementById('addExerciseBtn').style.backgroundColor = '#82ac60';
      document.getElementById('addExerciseBtn').style.borderColor = '#82ac60';
    }
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
      {name: 'Prove Equivalent to Previous Theorem', description: 'by showing equivalence to previous theorem <br /><br /><u>Proof:</u>'},
      {name: 'Show LHS is Equivalent to RHS ', description: 'by showing the LHS is equivalent to the RHS <br /><br /><u>Proof:</u>'},
      {name: 'Show LHS Implies RHS ', description: 'by showing the LHS implies the RHS <br /><br /><u>Proof:</u>'},
      {name: 'Show RHS is Equivalent to LHS ', description: 'by showing the RHS is equivalent to the LHS <br /><br /><u>Proof:</u>'},
      {name: 'Show RHS Follows From LHS ', description: 'by showing the RHS follows from the LHS <br /><br /><u>Proof:</u>'},
      {name: 'Deduction', description: 'by assuming conjunct of antecedent <br /><br /><u>Proof:</u>'},
      {
        name: 'Case Analysis', description: 'by case analysis on p <br /><br />' +
        'Must prove <br />' +
        '  (1) true ⋀ (q ⋁ r) ≡ (true ⋀ q) ⋁ (true ⋀ r) <br />' +
        '  (2) false ⋀ (q ⋁ r) ≡ (false ⋀ q) ⋁ (false ⋀ r)<br /><br />' +
        '(1) Proof<br /><br />' +
        '(2) Proof<br />'
      },
      {name: 'Mutual Implication', description: 'To prove P ≡ Q, prove P ⇒ Q and Q ⇒ P.<br /><br /><u>Proof:</u>'},
      {name: 'Truth Implication', description: 'To prove P, prove true ⇒ P.<br /><br /><u>Proof:</u>'},
      {name: 'Induction', description: 'by mathematical induction<br /><br /><u>Proof:</u>'},
      {name: 'Proof by Contradiction', description: 'by contradiction<br /><br /><u>Proof:</u>'},
      {name: 'Proof by Contrapositive', description: 'by proving the contrapositive: <br /><br /><u>Proof:</u>'}

    ];

    this.exHeuristic = [
      {
        name: 'Formalization of Argument', description: '[[[ <br />' +
        'Declare variables <br /> <br />' +
        'State what argument is <br /> <br />' +
        'The argument is a theorem by the following proof.<br /><br />' +
        ']]]<br />' + ' <br />' + '[[[<br /> <br /> ]]]'
      },
      {name: 'Exercise with Proof', description: '[[[<br /> <br />]]]<br /> <br />Proof:'},
      {name: 'Answer Exercise', description: '<br /> <br /> [[[ <br /> <br /> ]]] '}
    ];

    this.whatTheorem = [
      {rule: '(3.4)', name: 'true'},
      {rule: '(3.5)', name: 'Reflexivity of ≡'},
      {rule: '(3.8)', name: ' Definition of false'},
      {rule: '(3.10)', name: ' Definition of ≢'},
      {rule: '(3.11)', name: ' ¬p ≡ q ≡ p ≡ ¬q'},
      {rule: '(3.12)', name: ' Double negation'},
      {rule: '(3.13)', name: ' Negation of false'},
      {rule: '(3.14)', name: ' (p ≢ q) ≡ ¬p ≡ q'},
      {rule: '(3.15)', name: ' ¬p ≡ p ≡ false'},
      {rule: '(3.16)', name: ' Symmetry of ≢'},
      {rule: '(3.17)', name: ' Associativity of ≢'},
      {rule: '(3.18)', name: ' Mutual associativity'},
      {rule: '(3.19)', name: ' Mutual interchangeability'},
      {rule: '(3.19.1)', name: ' p ≢ p ≢ q  ≡  q'},
      {rule: '(3.29)', name: ' Zero of ⋁'},
      {rule: '(3.30)', name: ' Identity of ⋁'},
      {rule: '(3.31)', name: ' Distributivity of ⋁ over ⋁'},
      {rule: '(3.32)', name: 'p ⋁ q ≡ p ⋁ ¬q ≡ p'},
      {rule: '(3.36)', name: ' Symmetry of ⋀: p ⋀ q ≡ q ⋀ p'},
      {rule: '(3.37)', name: ' Associativity of ⋀: (p ⋀ q) ⋀ r  ≡  p ⋀ (q ⋀ r)'},
      {rule: '(3.38)', name: ' Idempotency of ⋀: p ⋀ p ≡ p'},
      {rule: '(3.39)', name: ' Identity of ⋀: p ⋀ true ≡ p'},
      {rule: '(3.40)', name: ' Zero of ⋀: p ⋀ false ≡ false'},
      {rule: '(3.41)', name: ' Distributivity of ⋀ over ⋀'},
      {rule: '(3.42)', name: ' Contradiction'},
      {rule: '(3.43a)', name: ' Absorption: p ⋀ (p ⋁ q) ≡ p'},
      {rule: '(3.43b)', name: ' Absorption: p ⋁ (p ⋀ q) ≡ p'},
      {rule: '(3.44a)', name: ' Absorption: p ⋀ (¬p ⋁ q) ≡ p ⋀ q'},
      {rule: '(3.44b)', name: ' Absorption: p ⋁ (¬p ⋀ q) ≡ p ⋁ q'},
      {rule: '(3.45)', name: ' Distributivity of ⋁ over ⋀'},
      {rule: '(3.46)', name: ' Distributivity of ⋀ over ⋁'},
      {rule: '(3.47a)', name: ' De Morgan: ¬(p ⋀ q) ≡ ¬p ⋁ ¬q'},
      {rule: '(3.47b)', name: ' De Morgan: ¬(p ⋁ q) ≡ ¬p ⋀ ¬q'},
      {rule: '(3.48)', name: ' p ⋀ q ≡ p ⋀ ¬q ≡ ¬p'},
      {rule: '(3.49)', name: ' p ⋀ (q ≡ r) ≡ p ⋀ q ≡ p ⋀ r ≡ p'},
      {rule: '(3.50)', name: ' p ⋀ (q ≡ p) ≡ p ⋀ q'},
      {rule: '(3.51)', name: ' Replacement'},
      {rule: '(3.52)', name: ' Equivalence'},
      {rule: '(3.53)', name: ' Exclusive or'},
      {rule: '(3.55)', name: ' (p ⋀ q) ⋀ r ≡ p ≡ q ≡ r ≡ p ⋁ q ≡ q ⋁ r ≡ r ⋁ p ≡ p ⋁ q ⋁ r'},
      {rule: '(3.57)', name: ' Definition of Implication'},
      {rule: '(3.59)', name: ' Implication'},
      {rule: '(3.60)', name: ' Implication'},
      {rule: '(3.61)', name: ' Contrapositive'},
      {rule: '(3.62)', name: ' p ⇒ (q ≡ r)  ≡  p ⋀ q ≡ p ⋀ r'},
      {rule: '(3.63)', name: ' Distributivity of ⇒ over ≡'},
      {rule: '(3.63.1)', name: ' Distributivity of ⇒ over ⋀'},
      {rule: '(3.63.2)', name: ' Distributivity of ⇒ over ⋁'},
      {rule: '(3.64)', name: ' p ⇒ (q ⇒ r)  ≡  (p ⇒ q) ⇒ (p ⇒ r)'},
      {rule: '(3.65)', name: ' Shunting'},
      {rule: '(3.66)', name: ' p ⋀ (p ⇒ q)  ≡  p ⋀ q'},
      {rule: '(3.67)', name: ' p ⋀ (q ⇒ p)  ≡  p'},
      {rule: '(3.68)', name: ' p ⋁ (p ⇒ q) ≡ true'},
      {rule: '(3.69)', name: ' p ⋁ (q ⇒ p) ≡ q ⇒ p'},
      {rule: '(3.70)', name: ' p ⋁ q ⇒ p ⋀ q  ≡  p ≡ q'},
      {rule: '(3.71)', name: ' Reflexivity of ⇒'},
      {rule: '(3.72)', name: ' Right zero of ⇒'},
      {rule: '(3.73)', name: ' Left identity of ⇒'},
      {rule: '(3.74)', name: ' p ⇒ false  ≡  ¬p'},
      {rule: '(3.74.1)', name: ' ¬p ⇒ false  ≡  p'},
      {rule: '(3.75)', name: ' false ⇒ p  ≡  true'},
      {rule: '(3.76a)', name: ' Weakening the consequent'},
      {rule: '(3.76b)', name: ' Stengthening the antecedent'},
      {rule: '(3.76c)', name: ' Weakening/strengthening'},
      {rule: '(3.76d)', name: ' p ⋁ (q ⋀ r) ⇒ p ⋁ q'},
      {rule: '(3.76e)', name: ' p ⋀ q ⇒ p ⋀ (q ⋁ r)'},
      {rule: '(3.76.1)', name: ' p ⋀ q ⇒ p ⋁ r'},
      {rule: '(3.76.2)', name: ' (p ⇒ q)  ⇒  ((q ⇒ r) ⇒ (p ⇒ r))'},
      {rule: '(3.77)', name: ' Modus ponens'},
      {rule: '(3.77.1)', name: ' Modus tollens'},
      {rule: '(3.78)', name: ' (p ⇒ r) ⋀ (q ⇒ r)  ⇒  (p ⋁ q) ⇒ r'},
      {rule: '(3.79)', name: ' (p ⇒ r) ⋀ (¬p ⇒ r)  ≡  r'},
      {rule: '(3.80)', name: ' Mutual implication'},
      {rule: '(3.81)', name: ' Antisymmetry'},
      {rule: '(3.82a)', name: ' Transitivity: (p ⇒ q) ⋀ (q ⇒ r)  ⇒  (p ⇒ r)'},
      {rule: '(3.82b)', name: ' Transitivity: (p ≡ q) ⋀ (q ⇒ r)  ⇒  (p ⇒ r)'},
      {rule: '(3.82c)', name: ' Transitivity: (p ⇒ q) ⋀ (q ≡ r)  ⇒  (p ⇒ r)'},
      {rule: '(3.82.1)', name: ' Transitivity of ≡'},
      {rule: '(3.82.2)', name: ' (p ≡ q) ⇒ (p ⇒ q)'},
      {rule: '(3.84a)', name: ' Substitution: (e = f) ⋀ E[z,e]  ≡  (e = f) ⋀ E[z,f]'},
      {rule: '(3.84b)', name: ' Substitution: (e = f) ⇒ E[z,e]  ≡  (e = f) ⇒ E[z,f]'},
      {rule: '(3.84c)', name: ' Substitution: q ⋀ (e = f) ⇒ E[z,e]  ≡  q ⋀ (e = f) ⇒ E[z,f]'},
      {rule: '(3.85a)', name: ' Replace by true: p ⇒ E[z,p]  ≡  p ⇒ E[z,true]'},
      {rule: '(3.85b)', name: ' Replace by true: q ⋀ p ⇒ E[z,p]  ≡  q ⋀ p ⇒ E[z,true]'},
      {rule: '(3.86a)', name: ' Replace by false: E[z,p] ⇒ p  ≡  E[z,false] ⇒ p'},
      {rule: '(3.86b)', name: ' Replace by false: E[z,p] ⇒ p ⋁ q  ≡  E[z,false] ⇒ p ⋁ q'},
      {rule: '(3.87)', name: ' Replace by true'},
      {rule: '(3.88)', name: ' Replace by false'},
      {rule: '(3.89)', name: ' Shannon'},
      {rule: '(4.1)', name: 'p ⇒ (q ⇒ p)'},
      {rule: '(4.2)', name: ' Monotonicity of ⋁'},
      {rule: '(4.3)', name: ' Monotonicity of ⋀'},
      {rule: '(8.22)', name: ' Change of dummy'},
      {rule: '(8.23a)', name: ' Split off term'},
      {rule: '(8.23b)', name: ' Split off term'},
      {rule: '(9.3a)', name: ' Trading: (∀x | R : P) ≡ (∀x |: ¬R ⋁ P)'},
      {rule: '(9.3b)', name: ' Trading: (∀x | R : P) ≡ (∀x |: R ⋀ P ≡ R)'},
      {rule: '(9.3c)', name: ' Trading: (∀x | R : P) ≡ (∀x |: R ⋁ P ≡ P)'},
      {rule: '(9.4a)', name: ' Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : R ⇒ P)'},
      {rule: '(9.4b)', name: ' Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : ¬R ⋁ P)'},
      {rule: '(9.4c)', name: ' Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : R ⋀ P ≡ R)'},
      {rule: '(9.4d)', name: ' Trading: (∀x | Q ⋀ R : P) ≡ (∀x | Q : R ⋁ P ≡ P)'},
      {rule: '(9.4.1)', name: ' Universal double trading'},
      {rule: '(9.6)', name: ' (∀x | R : P) ≡ P ⋁ (∀x |: ¬R)'},
      {rule: '(9.7)', name: ' Distributivity of ⋀ over ∀'},
      {rule: '(9.8)', name: ' (∀x | R : true) ≡ true'},
      {rule: '(9.9)', name: ' (∀x | R : P ≡ Q) ⇒ ((∀x | R : P) ≡ (∀x | R : Q))'},
      {rule: '(9.10)', name: ' Range weakening/strengthening'},
      {rule: '(9.11)', name: ' Body weakening/strengthening'},
      {rule: '(9.12)', name: ' Monotonicity of ∀'},
      {rule: '(9.13)', name: ' Instantiation'},
      {rule: '(9.14)', name: ' Metatheorem'},
      {rule: '(9.18a)', name: ' Generalized De Morgan: ¬(∃x | R : ¬P) ≡ (∀x | R : P)'},
      {rule: '(9.18b)', name: ' Generalized De Morgan: ¬(∃x | R : P) ≡ (∀x | R : ¬P)'},
      {rule: '(9.18c)', name: ' Generalized De Morgan: (∃x | R : ¬P) ≡ ¬(∀x | R : P)'},
      {rule: '(9.19)', name: ' Trading: (∃x | R : P) ≡ (∃x |: R ⋀ P)'},
      {rule: '(9.20)', name: ' Trading: (∃x | Q ⋀ R : P) ≡ (∃x | Q : R ⋀ P)'},
      {rule: '(9.20.1)', name: ' Existential double trading'},
      {rule: '(9.20.2)', name: ' (∃x |: R) ⇒ ((∀x | R : P) ⇒ (∃x | R : P))'},
      {rule: '(9.21)', name: ' Distributivity of ⋀ over ∃'},
      {rule: '(9.22)', name: ' (∃x | R : P) ≡ P ⋀ (∃ |: R)'},
      {rule: '(9.23)', name: ' Distributivity of ⋁ over ∃'},
      {rule: '(9.24)', name: ' (∃x | R : false) ≡ false'},
      {rule: '(9.25)', name: ' Range weakening/strengthening'},
      {rule: '(9.26)', name: ' Body weakening/strengthening'},
      {rule: '(9.27)', name: ' Monotonicity of ∃'},
      {rule: '(9.28)', name: ' ∃-Introduction'},
      {rule: '(9.29)', name: ' Interchange of quantificiation'},
      {rule: '(9.30)', name: ' (∃x | R : P) ⇒ Q is a theorem iff (R ⋀ P)[x ≔ y] ⇒ Q is a theorem'}
    ];
  }

  ngOnDestroy() {
    this.infoFilledSubscription.unsubscribe();
    this.editorEmptySubscription.unsubscribe();
  }
}
