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
  assignmentText = '';
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

  formSubmit(selection, hiddenVal) {
    this.editorService.toggleFormFilled();
    if (selection === 'custom') {
      this.proofText = hiddenVal;
    }
    // const outline =
    //   ('Name: ') +  this.nameText + '<br />' +
    //   ('Class: ') + this.classText + '<br />' +
    //   ('Proof: ') + this.proofText + '<br /><br />' +
    //   ('Solution: ').bold() +  '<br />' +
    //   this.descriptionText;

    const outline = 
      this.nameText + '<br/>' +
      this.classText + '<br/>' + 
      this.assignmentText + '<br/><br/>' + 
      'Prove ' + this.proofText + '<br/><br/><br/> ----------'

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
