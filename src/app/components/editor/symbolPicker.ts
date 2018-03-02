export interface Config {
  container: string;
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

    container.addEventListener('click', function() {
      console.log('FRANK: ADD PRESSED');
      quill.insertText(quill.getSelection(), 'LETS GO');
    });
  }

  calculate() {
    const text = this.quill.getText().trim();

    return text.length;
  }
}
