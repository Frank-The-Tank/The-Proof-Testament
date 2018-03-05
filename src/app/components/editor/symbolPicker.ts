import * as QuillNamespace from 'quill';
let Quill: any = QuillNamespace;
const Keyboard = Quill.import('modules/keyboard');

export interface Config {
  container: string;
  selector: 'equals'|'implies'|'followsFrom';
}

export interface QuillInstance {
  on: Function;
  getText: Function;
}

export default class SymbolPicker {
  quill: QuillInstance;
  options: Config;

  constructor(quill, options) {
    this.quill = quill;
    this.options = options;

    const container = document.querySelector(this.options.container);

    quill.keyboard.addBinding({ key: 'Enter' }, {
        collapsed: true
      },
      (range, context) => {
        console.log('ENTER PRESSED');
      });

    switch (this.options.selector) {
      case 'equals': {
        container.addEventListener('click', function() {
          console.log('FRANK: EQUALS PRESSED');
          quill.insertText(quill.getSelection(), '\n=            〈  〉');
        });
        break;
      }
      case 'implies': {
        container.addEventListener('click', function() {
          console.log('FRANK: IMPLIES PRESSED');
          quill.insertText(quill.getSelection(), '\n=>            〈  〉');
        });
        break;
      }
      default: {
        console.log('FRANK: selectionChoice set to non-understood value (' + this.options.selector + ')');
        container.addEventListener('click', function() {
          quill.insertText(quill.getSelection(), '\nINVALID STRING');
        });
        break;
      }
    }
  }
}
