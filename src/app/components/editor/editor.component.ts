import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged';

import Quill from 'quill';

// // override p with div tag
// const Parchment = Quill.import('parchment');
// let Block = Parchment.query('block');
//
// Block.tagName = 'DIV';
// // or class NewBlock extends Block {}; NewBlock.tagName = 'DIV';
// Quill.register(Block /* or NewBlock */, true);
// //
// // import Counter from './counter';
// // Quill.register('modules/counter', Counter)


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class EditorComponent {
  // title = content already in the editor



  title = '<p> Prove: </p> ' +
    '<p> Description: By ... </p> ' +
    '<br> Proof: <br> ' +
    '<p> Step: </p>' +
    '<p style="text-indent: 5em;">=  Rule</p>' +
    '<p> Step: </p>' +
    '<p style="text-indent: 5em;">=  Rule</p>' +
    '<p> Step: </p>' +
    '<p style="text-indent: 5em;">=  Rule</p>' +
    '<p> Step: </p>' +
    '<p style="text-indent: 5em;">=  Rule</p>' +
    '<p> /≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩#~⋅*∘∙÷×Ρ↓↑◃▹★∀∃⋁⋀+-^ </p>';
    isReadOnly = false;
    placeholder = 'placeholder';
    form: FormGroup;
    modules = {};

    constructor(fb: FormBuilder) {
      this.form = fb.group({
        editor: ['test']
      });

      this.modules = {
        formula: true,
        toolbar: [[{ 'indent': '-1'}, { 'indent': '+1' }],['formula']]
      }
  }

  @ViewChild('editor') editor: QuillEditorComponent

  ngOnInit() {
    this.form
      .controls
      .editor
      .valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        console.log('native fromControl value changes with debounce', data)
      });

    this.editor
      .onContentChanged.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        console.log('view child + directly subscription', data)
      });
    }

    addBindingCreated(quill){
      quill.keyboard.addBinding({
        key: 'B',
        metaKey: true
      }, (range, context) => {
        console.log('KEYBINDING B', range, context);
      });
    }

    setControl() {
      this.form.setControl('editor', new FormControl('test - new Control'));
    }

    setFocus($event) {
      $event.focus();
    }

    logChange($event: any) {
      console.log($event);
    }

    logSelection($event: any) {
      console.log($event);
    }
  }
