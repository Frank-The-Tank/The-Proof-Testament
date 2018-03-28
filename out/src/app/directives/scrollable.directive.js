"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ScrollableDirective = class ScrollableDirective {
    constructor(el) {
        this.el = el;
        this.scrollPosition = new core_1.EventEmitter();
    }
    onScroll(event) {
        try {
            const top = event.target.scrollTop;
            const height = this.el.nativeElement.scrollHeight;
            const offset = this.el.nativeElement.offsetHeight;
            // emit bottom event
            if (top > height - offset - 1) {
                this.scrollPosition.emit('bottom');
            }
            // emit top event
            if (top === 0) {
                this.scrollPosition.emit('top');
            }
        }
        catch (err) { }
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ScrollableDirective.prototype, "scrollPosition", void 0);
__decorate([
    core_1.HostListener('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ScrollableDirective.prototype, "onScroll", null);
ScrollableDirective = __decorate([
    core_1.Directive({
        selector: '[appScrollable]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ScrollableDirective);
exports.ScrollableDirective = ScrollableDirective;
//# sourceMappingURL=scrollable.directive.js.map