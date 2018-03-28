"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    constructor(quill, options) {
        this.quill = quill;
        this.options = options;
        const container = document.querySelector(this.options.container);
        this.quill.on('text-change', () => {
            const length = this.calculate();
            container.innerHTML = length + ' ' + this.options.unit + 's';
        });
    }
    calculate() {
        const text = this.quill.getText().trim();
        if (this.options.unit === 'word') {
            return !text ? 0 : text.split(/\s+/).length;
        }
        return text.length;
    }
}
exports.default = Counter;
//# sourceMappingURL=counter.js.map