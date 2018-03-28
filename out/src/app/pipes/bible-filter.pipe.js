"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let BibleFilterPipe = class BibleFilterPipe {
    transform(items, searchText) {
        const answer = [];
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(values => {
            for (const i in values) {
                if (values[i]['name']) {
                    answer.push(values[i]['name'].toString().toLowerCase());
                }
            }
            console.log('ANSWER: ' + answer);
            console.log(answer.includes(searchText));
            return answer.includes(searchText);
        });
    }
};
BibleFilterPipe = __decorate([
    core_1.Pipe({
        name: 'bibleFilter'
    })
], BibleFilterPipe);
exports.BibleFilterPipe = BibleFilterPipe;
//# sourceMappingURL=bible-filter.pipe.js.map