import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';

import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged';

import Quill from 'quill';

// // // add image resize module
// // import ImageResize from 'quill-image-resize-module';
// // Quill.register('modules/imageResize', ImageResize);
//
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
//
// // Add fonts to whitelist
// var Font = Quill.import('formats/font');
// // We do not add Aref Ruqaa since it is the default
// Font.whitelist = ['mirza', 'aref', 'sans-serif', 'monospace', 'serif'];
// Quill.register(Font, true);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent{
  title = '<div>hi</div> <p> hello </p> <br> <ul><option>hi </option><option>shut up</option> </ul>';
  isReadOnly = false;
  placeholder = 'placeholder';
  form: FormGroup;

  constructor() { }

  ngOnInit() {

  }

}
