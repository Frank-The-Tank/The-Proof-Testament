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
let TheoremsListComponent = class TheoremsListComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollHandler(e) {
        console.log(e);
    }
    setBackgroundColor(type) {
        if (type === 'axiom') {
            return '#00025c';
        }
        else {
            return '#ee7624';
        }
    }
    ngAfterContentChecked() {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TheoremsListComponent.prototype, "theorems", void 0);
TheoremsListComponent = __decorate([
    core_1.Component({
        selector: 'app-theorems-list',
        templateUrl: './theorems-list.component.html',
        styleUrls: ['./theorems-list.component.scss']
    }),
    __metadata("design:paramtypes", [])
], TheoremsListComponent);
exports.TheoremsListComponent = TheoremsListComponent;
//# sourceMappingURL=theorems-list.component.js.map