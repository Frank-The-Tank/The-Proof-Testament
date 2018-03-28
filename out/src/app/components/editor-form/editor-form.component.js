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
const editor_service_1 = require("../editor/editor.service");
let EditorFormComponent = class EditorFormComponent {
    constructor(editorService) {
        this.editorService = editorService;
        this.nameText = '';
        this.classText = '';
        this.proofText = '';
        this.descriptionText = '';
        this.customProofSelected = false;
        this.infoFilledSubscription = this.editorService.infoFilledChange.subscribe(infoFilled => {
            this.infoFilled = infoFilled;
        });
    }
    formSubmit() {
        this.editorService.toggleFormFilled();
        const outline = ('Name: ').bold() + this.nameText + '<br />' +
            ('Class: ').bold() + this.classText + '<br />' +
            ('Proof: ').bold() + this.proofText + '<br /><br />' +
            ('Solution: ').bold() + '<br />' +
            this.descriptionText;
        this.editorService.submitData(outline);
    }
    onProofSelectionChanged(selection) {
        if (selection === 'custom') {
            this.customProofSelected = true;
        }
        else {
            this.customProofSelected = false;
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.infoFilledSubscription.unsubscribe();
    }
};
EditorFormComponent = __decorate([
    core_1.Component({
        selector: 'app-editor-form',
        templateUrl: './editor-form.component.html',
        styleUrls: ['./editor-form.component.scss']
    }),
    __metadata("design:paramtypes", [editor_service_1.EditorService])
], EditorFormComponent);
exports.EditorFormComponent = EditorFormComponent;
//# sourceMappingURL=editor-form.component.js.map