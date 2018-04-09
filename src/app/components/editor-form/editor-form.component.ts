import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditorService} from '../editor/editor.service';
import {BibleService} from '../bible/bible.service';
import {Theorem} from '../../model/theorem';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit, OnDestroy {

  nameText = '';
  classText = '';
  proofText = '';
  heuristicText = '';
  proof = "<br />";
  infoFilled: boolean;
  infoFilledSubscription;
  customProofSelected = false;
  theorems$: Observable<Theorem[]>;

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
    const outline =
      ('Name: ').bold() +  this.nameText + '<br />' +
      ('Class: ').bold() + this.classText + '<br />' +
      ('Prove: ').bold() + this.proofText + '<br /><br />' +
      ('Heuristic: ').bold() + this.heuristicText + '<br /><br />' +
      ('Proof:').bold()+ this.proof + '<br /><br />';
    this.editorService.submitData(outline);
  }

onHeuristicSelectionChanged(selection) {
    switch (selection){
      case "Deduction":
        this.heuristicText += '<br />' + "To prove P1 ⋀ P2 ⇒ Q, assume P1 and P2 and prove Q." +
          "<br />" + "You cannot use textual substitution in P1 or P2.";
        break;
      case "Case Analysis Expressions":
        this.heuristicText += '<br />' + "If E[z,true] and E[z, false] are theorems, then so is E[z, p].";
        break;
      case "Case Analysis":
        this.heuristicText += '<br />' + "(p ⋁ q ⋁ r) ⋀ (p ⇒ s) ⋀ (q ⇒ s) ⋀ (r ⇒ s) ⇒ s";
        break;
      case "Mutual Implication":
        this.heuristicText += '<br />' + "To prove P ≡ Q, prove P ⇒ Q and Q ⇒ P."
        break;
      case "Truth Implication":
        this.heuristicText += '<br />' + "To prove P, prove true ⇒ P.";
        break;
      case "Induction":
        console.log('need to fix induction');
        break;
      case "Proof by Contradiction":
        this.heuristicText += '<br />' + "To prove P, prove ¬ P ⇒ false."
        break;
      case "Proof by Contrapositive":
        this.heuristicText += '<br />' + "P ⇒ Q, prove  ¬ Q ⇒  ¬ P."
        break;
      default: console.log("didn't click it");
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
    this.theorems$ = this.bibleService.findAllTheorems();
  }

  ngOnDestroy() {
    this.infoFilledSubscription.unsubscribe();
  }
}
