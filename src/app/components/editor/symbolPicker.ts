import {Injectable} from '@angular/core';
import {EditorService} from './editor.service';

import * as QuillNamespace from 'quill';

const Quill: any = QuillNamespace;
const Keyboard = Quill.import('modules/keyboard');

export interface Config {
  container: string;
  selector: 'equals' | 'implies' | 'followsFrom';
}

export interface QuillInstance {
  on: Function;
  getText: Function;
}

export default class SymbolPicker {
  quill: QuillInstance;
  options: Config;

  constructor(quill, options, private editorService: EditorService) {
    this.quill = quill;
    this.options = options;

    const container = document.querySelector(this.options.container);

    switch (this.options.selector) {
      case 'equals': {
        container.addEventListener('click', function () {
          console.log('FRANK: EQUALS PRESSED');
          quill.insertText(quill.getSelection(), '=            〈  〉');
          console.log('EDITOR SERVICE: ' + this.editorService);
          this.editorService.toggleHideSymbols();
        });
        break;
      }
      case 'implies': {
        container.addEventListener('click', function () {
          console.log('FRANK: IMPLIES PRESSED');
          quill.insertText(quill.getSelection(), '=>            〈  〉');
          this.editorService.toggleHideSymbols();
        });
        break;
      }
      default: {
        console.log('FRANK: selectionChoice set to non-understood value (' + this.options.selector + ')');
        container.addEventListener('click', function () {
          quill.insertText(quill.getSelection(), '\nINVALID STRING');
          this.editorService.toggleHideSymbols();
        });
        break;
      }
    }
  }
}
