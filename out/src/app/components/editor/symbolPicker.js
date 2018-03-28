"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuillNamespace = require("quill");
const Quill = QuillNamespace;
const Keyboard = Quill.import('modules/keyboard');
class SymbolPicker {
    constructor(quill, options, editorService) {
        this.editorService = editorService;
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
exports.default = SymbolPicker;
//# sourceMappingURL=symbolPicker.js.map