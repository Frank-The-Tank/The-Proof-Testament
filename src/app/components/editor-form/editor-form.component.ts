import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditorService} from '../editor/editor.service';
import {BibleService} from '../bible/bible.service';
import {Theorem} from '../../model/theorem';
import {Observable} from 'rxjs/Observable';
import {Heuristic} from '../../model/heuristic';

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit, OnDestroy {

  nameText = '';
  pinText = '';
  courseText = '';
  heuristicText = '';
  assignmentText = '';
  proofText = '';
  infoFilled: boolean;
  infoFilledSubscription;
  customProofSelected = false;
  theorems$: Observable<Theorem[]>;
  heuristic: Heuristic[];


  constructor(private editorService: EditorService, private bibleService: BibleService) {
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
    this.theorems$ = this.bibleService.findAllTheorems();
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

  }

  ngOnDestroy() {
    this.infoFilledSubscription.unsubscribe();
  }
}
