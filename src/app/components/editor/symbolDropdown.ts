export interface Config {
  container: [string];
}

export interface QuillInstance {
  on: Function;
  getText: Function;
}

export default class SymbolDropdown {
  quill: QuillInstance;
  options: Config;

  constructor(quill, options) {
    this.quill = quill;
    this.options = options;

    const container = document.querySelector(this.options.container);

    console.log('symbolDropdown: ' + container);
    console.log(container.innerHTML);



    // const placeholderPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-placeholder .ql-picker-item'));
    //
    // placeholderPickerItems.forEach(item => item.textContent = item.dataset.value);
    //
    // document.querySelector('.ql-placeholder .ql-picker-label').innerHTML
    //     = 'Insert placeholder' + document.querySelector('.ql-placeholder .ql-picker-label').innerHTML;

  }
}
