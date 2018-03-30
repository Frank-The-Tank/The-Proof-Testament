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
  descriptionText = '';
  infoFilled: boolean;
  infoFilledSubscription;
  customProofSelected = false;
  theorems$: Observable<Theorem[]>;

  constructor(private editorService: EditorService, private bibleService: BibleService) {
    this.infoFilledSubscription = this.editorService.infoFilledChange.subscribe(infoFilled => {
      this.infoFilled = infoFilled;
    });
  }

  formSubmit() {
    this.editorService.toggleFormFilled();
    const outline =
      ('Name: ').bold() +  this.nameText + '<br />' +
      ('Class: ').bold() + this.classText + '<br />' +
      ('Proof: ').bold() + this.proofText + '<br /><br />' +
      ('Solution: ').bold() +  '<br />' +
      this.descriptionText;
    this.editorService.submitData(outline);
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
