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
const forms_1 = require("@angular/forms");
const quill_editor_component_1 = require("ngx-quill/src/quill-editor.component");
const symbols_1 = require("../../model/symbols");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
const QuillNamespace = require("quill");
const Quill = QuillNamespace;
const counter_1 = require("./counter");
const symbol_picker_service_1 = require("../symbol-picker/symbol-picker.service");
const editor_service_1 = require("./editor.service");
Quill.register('modules/counter', counter_1.default);
let EditorComponent = class EditorComponent {
    constructor(fb, factoryResolver, symbolService, editorService) {
        this.factoryResolver = factoryResolver;
        this.symbolService = symbolService;
        this.editorService = editorService;
        this.keys = Object.keys;
        this.symbols = symbols_1.Symbols;
        this.hideSymbols = true;
        this.isReadOnly = false;
        this.modules = {};
        this.equalsUnicode = '\u003D';
        this.impliesUnicode = '\u21D2';
        this.followsFromUnicode = '\u21D0';
        this.lessThanUnicode = '\u003C';
        this.greaterThanUnicode = '\u003E';
        this.bindings = {
            enter: {
                key: 13,
                handler: () => {
                    this.hideSymbols = false;
                    this.editorInstance.insertText(this.editorInstance.getSelection(), '\n');
                    this.previousEditorSelection = this.editorInstance.getSelection();
                }
            }
        };
        this.infoFilledSubscription = this.editorService.infoFilledChange.subscribe(infoFilled => {
            this.infoFilled = infoFilled;
        });
        this.outlineSubscription = this.editorService.outlineChange.subscribe(outline => {
            this.outline = outline;
        });
        this.hideSymbolsSubscription = this.editorService.hideSymbolsChange.subscribe(hideSymbols => {
            this.hideSymbols = hideSymbols;
        });
        this.form = fb.group({
            editor: ['test']
        });
        this.modules = {
            keyboard: {
                bindings: this.bindings
            },
            formula: true,
            toolbar: true,
            counter: { container: '#counter', unit: 'word' }
        };
    }
    ngOnInit() {
        this.form
            .controls
            .editor
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(data => {
            console.log('native fromControl value changes with debounce', data);
        });
    }
    ngOnDestroy() {
        this.infoFilledSubscription.unsubscribe();
        this.outlineSubscription.unsubscribe();
        this.hideSymbolsSubscription.unsubscribe();
    }
    generateSymbolShortcut(symbolIdentifier) {
        let symbolShortcut = '';
        switch (symbolIdentifier) {
            case 'not': {
                symbolShortcut = ';er';
                break;
            }
            default: {
                console.log('symbol could not be identified');
                break;
            }
        }
        return symbolShortcut;
    }
    insertSymbol(selectedVal) {
        this.editorInstance.insertText(this.previousEditorSelection, selectedVal);
        this.editorInstance.setSelection(this.previousEditorSelection.index + 1);
    }
    symbolSelectorChanged(selectedVal) {
        switch (selectedVal) {
            case 'equals': {
                this.editorInstance.insertText(this.previousEditorSelection, this.equalsUnicode + '           〈  〉');
                this.editorInstance.setSelection(this.previousEditorSelection.index + 14);
                this.hideSymbols = true;
                break;
            }
            case 'implies': {
                this.editorInstance.insertText(this.previousEditorSelection, this.impliesUnicode + '            〈  〉');
                this.editorInstance.setSelection(this.previousEditorSelection.index + 15);
                this.hideSymbols = true;
                break;
            }
            case 'followsFrom': {
                this.editorInstance.insertText(this.previousEditorSelection, this.followsFromUnicode + '            〈  〉');
                this.editorInstance.setSelection(this.previousEditorSelection.index + 15);
                this.hideSymbols = true;
                break;
            }
            case 'lessThan': {
                this.editorInstance.insertText(this.previousEditorSelection, this.lessThanUnicode + '            〈  〉');
                this.editorInstance.setSelection(this.previousEditorSelection.index + 15);
                this.hideSymbols = true;
                break;
            }
            case 'greaterThan': {
                this.editorInstance.insertText(this.previousEditorSelection, this.greaterThanUnicode + '            〈  〉');
                this.editorInstance.setSelection(this.previousEditorSelection.index + 15);
                this.hideSymbols = true;
                break;
            }
            default: {
                console.log('something other than equals was pressed');
                this.hideSymbols = true;
                break;
            }
        }
    }
    addBindingCreated(quill) {
        this.editorInstance = quill;
        quill.on('text-change', function () {
            console.log('Text change!');
            this.hideSymbols = true;
        });
        // implies
        quill.keyboard.addBinding({ key: 'm' }, {
            collapsed: true,
            prefix: /^;i$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '⇒          〈  〉');
            quill.setSelection(range.index + 11);
        });
        // follows from
        quill.keyboard.addBinding({ key: 'f' }, {
            collapsed: true,
            prefix: /^;f$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '⇐          〈  〉');
            quill.setSelection(range.index + 11);
        });
        // equals
        quill.keyboard.addBinding({ key: 'q' }, {
            collapsed: true,
            prefix: /^;e$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '=            〈  〉');
            quill.setSelection(range.index + 13);
        });
        // less than
        quill.keyboard.addBinding({ key: 't' }, {
            collapsed: true,
            prefix: /^;l$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '<            〈  〉');
            quill.setSelection(range.index + 13);
        });
        // less than or equal to
        quill.keyboard.addBinding({ key: 'e' }, {
            collapsed: true,
            prefix: /^;l$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '≤            〈  〉');
            quill.setSelection(range.index + 13);
        });
        // greater than
        quill.keyboard.addBinding({ key: 't' }, {
            collapsed: true,
            prefix: /^;g$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '>            〈  〉');
            quill.setSelection(range.index + 13);
        });
        // greater than or equal to
        quill.keyboard.addBinding({ key: 'e' }, {
            collapsed: true,
            prefix: /^;g$/,
            offset: 2,
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '≥            〈  〉');
            quill.setSelection(range.index + 13);
        });
        // ///////////////////////////////////////////inline symbols///////////////////////////////////////////
        // p
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ≺ ');
        });
        // poset
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;r$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⪯ ');
        });
        // poset inverted
        quill.keyboard.addBinding({ key: 'r' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;t$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⪰ ');
        });
        // p inverted
        quill.keyboard.addBinding({ key: 'i' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;t$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ≻ ');
        });
        // hash
        quill.keyboard.addBinding({ key: 'h' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;h$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' # ');
        });
        // sigma
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' σ ');
        });
        // pi
        quill.keyboard.addBinding({ key: 'i' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' π ');
        });
        // natural join
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;j$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⨝ ');
        });
        // big-O
        quill.keyboard.addBinding({ key: 'o' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' Ο ');
        });
        // big omega
        quill.keyboard.addBinding({ key: 'g' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' Ω ');
        });
        // big theta
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' Θ ');
        });
        // phi
        quill.keyboard.addBinding({ key: 'h' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' 𝜙 ');
        });
        // follows from
        quill.keyboard.addBinding({ key: 'f' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⇐ ');
        });
        // less than
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/
            // missing * and - and + characters and ^
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' < ');
        });
        // less than or equal to
        quill.keyboard.addBinding({ key: 'e' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ≤ ');
        });
        // greater than
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;g$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' > ');
        });
        // greater than or equal to
        quill.keyboard.addBinding({ key: 'e' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;g$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ≥ ');
        });
        // implies
        quill.keyboard.addBinding({ key: 'm' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⇒ ');
        });
        // equival
        quill.keyboard.addBinding({ key: 'q' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ≡ ');
        });
        // textual subsitution
        quill.keyboard.addBinding({ key: 's' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;t$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ≔ ');
        });
        // element of
        quill.keyboard.addBinding({ key: 'l' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∈ ');
        });
        // universe
        quill.keyboard.addBinding({ key: 's' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;u$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' Ʊ ');
        });
        // proper subset
        quill.keyboard.addBinding({ key: 'b' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⊂ ');
        });
        // proper superset
        quill.keyboard.addBinding({ key: 'p' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⊃ ');
        });
        // subset
        quill.keyboard.addBinding({ key: 'b' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⊆ ');
        });
        // superset
        quill.keyboard.addBinding({ key: 'p' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⊇ ');
        });
        // empty set
        quill.keyboard.addBinding({ key: 's' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∅ ');
        });
        // union
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;u$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∪ ');
        });
        // intersection
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∩ ');
        });
        // complement
        quill.keyboard.addBinding({ key: 'o' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;c$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ~ ');
        });
        // disjunction
        quill.keyboard.addBinding({ key: 'r' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;o$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⋁ ');
        });
        // conjunction
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;a$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⋀ ');
        });
        // for all
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∀');
        });
        // there exists
        quill.keyboard.addBinding({ key: 'x' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∃');
        });
        // power set
        quill.keyboard.addBinding({ key: 's' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' Ρ ');
        });
        // up arrow
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;u$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ↑ ');
        });
        // right arrow
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;r$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' → ');
        });
        // left arrow
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ← ');
        });
        // down arrow
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;d$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ↓ ');
        });
        // cross product
        quill.keyboard.addBinding({ key: 'p' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;c$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' × ');
        });
        // division symbol
        quill.keyboard.addBinding({ key: 'v' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;d$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ÷ ');
        });
        // function composition
        quill.keyboard.addBinding({ key: 'c' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∙ ');
        });
        // function product
        quill.keyboard.addBinding({ key: 'p' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ∘ ');
        });
        // floating dot
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;d$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ⋅ ');
        });
        // star
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ★ ');
        });
        // brackets defintely different than les than
        /////////// //////////////////////// not + symbols //////////////////////// ////////////////////////
        // not
        quill.keyboard.addBinding({ key: 't' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;no$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ¬ ');
        });
        // does not imply
        quill.keyboard.addBinding({ key: 'm' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ni$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ⇏ ');
        });
        // does not follow from
        quill.keyboard.addBinding({ key: 'f' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;nf$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ⇍ ');
        });
        // not equal
        quill.keyboard.addBinding({ key: 'q' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ne$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ≠ ');
        });
        //not equivales
        quill.keyboard.addBinding({ key: 'v' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ne$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ≢ ');
        });
        // not element of
        quill.keyboard.addBinding({ key: 'l' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ne$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ∉ ');
        });
        // not a subset
        quill.keyboard.addBinding({ key: 'b' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ns$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ⊄ ');
        });
        // not a superset
        quill.keyboard.addBinding({ key: 'p' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ns$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ⊅ ');
        });
        // not a proper superset
        quill.keyboard.addBinding({ key: 'b' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;np$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ⊈ ');
        });
        // not a proper superset
        quill.keyboard.addBinding({ key: 'p' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ns$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ⊉ ');
        });
        ////////////////////////////////// natural numbers, etc ///////////////////////////////
        // natural numbers
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;n$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ℕ ');
        });
        // integers
        quill.keyboard.addBinding({ key: 'r' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ℤ ');
        });
        //rational
        quill.keyboard.addBinding({ key: 'a' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;r$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ℚ ');
        });
        //real numbers
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;r$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' ℝ ');
        });
        //booleans
        quill.keyboard.addBinding({ key: 'n' }, {
            empty: false,
            collapsed: true,
            prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
        }, (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, ' 𝔹 ');
        });
        //end of proof
        quill.keyboard.addBinding({ key: 'd' }, {
            empty: false,
            collapsed: true,
            prefix: /[/╱≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;en$/
        }, (range, context) => {
            quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 3, ' ╱╱ ');
        });
    }
    setControl() {
        this.form.setControl('editor', new forms_1.FormControl('test - new Control'));
    }
    setFocus($event) {
        $event.focus();
    }
    updateSelection($event) {
        if (this.editorInstance.getSelection()) {
            this.previousEditorSelection = this.editorInstance.getSelection();
        }
    }
    export() {
        // Find the text boxes
        const textBoxes = document.getElementsByClassName("ql-editor");
        var output = "";
        // Loop through each text box
        for (var i = 0; i < textBoxes.length; i++) {
            const textBox = textBoxes[i];
            output += "# Exercise " + (i + 1) + "\n" + textBox.innerHTML + "# \n";
        }
        // Cleanup output manually. Method textContent fails to keep new lines.
        output = output.replace(/<p>/g, "");
        output = output.replace(/<\/p>/g, "\n");
        output = output.replace(/<br>/g, "\n");
        console.log(output);
    }
};
__decorate([
    core_1.ViewChild('autoCompleteContainer', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], EditorComponent.prototype, "viewContainerRef", void 0);
__decorate([
    core_1.ViewChild('editor'),
    __metadata("design:type", quill_editor_component_1.QuillEditorComponent)
], EditorComponent.prototype, "editor", void 0);
EditorComponent = __decorate([
    core_1.Component({
        selector: 'app-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.scss'],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        core_1.ComponentFactoryResolver,
        symbol_picker_service_1.SymbolPickerService,
        editor_service_1.EditorService])
], EditorComponent);
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map