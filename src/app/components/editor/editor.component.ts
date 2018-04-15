import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {QuillEditorComponent} from 'ngx-quill/src/quill-editor.component';

import {Symbols} from '../../model/symbols';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import * as QuillNamespace from 'quill';

const Quill: any = QuillNamespace;

import {SymbolPickerService} from '../symbol-picker/symbol-picker.service';
import {EditorService} from './editor.service';

import {convert} from '../../convert/convert';

import {AntlrComponent} from '../antlr/antlr.component';
import {PDFTeX} from './pdftex/pdftex';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements OnInit, OnDestroy {

  @ViewChild('autoCompleteContainer', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  keys = Object.keys;
  symbols = Symbols;

  editorInstance: any;
  previousEditorSelection: any;
  infoFilled: boolean;
  private infoFilledSubscription;
  outline: string;
  private outlineSubscription;
  private additionalProofSubscription;
  hideSymbols = true;
  private hideSymbolsSubscription;
  isReadOnly = false;
  form: FormGroup;
  modules = {};

  equalsUnicode = '\u003D ';
  impliesUnicode = '\u21D2 ';
  followsFromUnicode = '\u21d0 ';
  lessThanUnicode = '\u003C ';
  greaterThanUnicode = '\u003E ';
  doesNotEqualUnicode = '\u2260 ';
  leftBracketUnicode = '\u3008';
  rightBracketUnicode = '\u3009';
  hintUnicode = '          ' + this.leftBracketUnicode + '  ' + this.rightBracketUnicode;
  textSubUnicode = ' \u2254 ';
  genQuantifierUnicode = '\u2605';
  lessThanOrEqUnicode = '\u2264 ';
  greaterThanOrEqUnicode = '\u2265 ';
  elementOfUnicode = ' \u2208 ';
  notElementOfUnicode = ' \u2209 ';
  properSubsetOfUnicode = ' \u2282 ';
  subsetOfUnicode = ' \u2286 ';
  properSupersetOfUnicode = ' \u2283 ';
  supersetOfUnicode = ' \u2287 ';
  notProperSubsetOfUnicode = ' \u2284 ';
  notSubsetOf = ' \u2289 ';
  notProperSupersetOfUnicode = ' \u2285 ';
  notSupersetOfUnicode = ' \u2289 ';
  unionUnicode = ' \u222a ';
  intersectionUnicode = ' \u2229 ';
  emptySetUnicode = ' \u2205 ';
  conjuctionUnicode = ' \u22c0 ';
  disjunctionUnicode = ' \u22c1 ';
  equivalesUnicode = ' \u2261 ';
  notEquivalesUnicode = ' \u2262 ';
  doesNotImplyUnicode = ' \u21cf ';
  doesNotFollowFromUnicode = ' \u21cd ';
  universalQuantifierUnicode = ' \u2200';
  existentialQuanitiferUnicode = ' \u2203';
  endProofUnicode = '\u2571';
  integerUnicode = '\u2124';
  naturalUnicode = '\u2115 ';
  rationalUnicode = '\u211a ';
  realUnicode = '\u211d';
  nextUnicode = '\u25cb';
  untilUnicode = '\u02af';
  alwaysUnicode = '\u25a1';
  eventuallyUnicode = '\u25c7';
  booleanSymbol = '𝔹';
  plusUnicode = '\u002B';


  bindings = {
    enter: {
      key: 13,
      handler: () => {
        this.hideSymbols = false;
        this.editorInstance.insertText(this.editorInstance.getSelection(), '\n     ');
        this.previousEditorSelection = this.editorInstance.getSelection();
      }
    }
  };


  constructor(fb: FormBuilder,
              private factoryResolver: ComponentFactoryResolver,
              private symbolService: SymbolPickerService,
              private editorService: EditorService,
              private http: HttpClient) {

    this.infoFilledSubscription = this.editorService.infoFilledChange.subscribe(infoFilled => {
      this.infoFilled = infoFilled;
    });

    this.outlineSubscription = this.editorService.outlineChange.subscribe(outline => {
      this.outline = outline;
    });

    this.additionalProofSubscription = this.editorService.outlineAdditionChange.subscribe(proof => {
      this.outline += '<br />' + proof;
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
    };
  }

  @ViewChild('editor') editor: QuillEditorComponent;

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
    this.additionalProofSubscription.unsubscribe();
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
    this.editorInstance.insertText(this.previousEditorSelection, selectedVal.substring(0, selectedVal.length - 15));
    this.editorInstance.setSelection(this.previousEditorSelection.index + selectedVal.length + 1);
    this.previousEditorSelection = this.editorInstance.getSelection();
  }

  insertSymbolFromBible(selectedVal) {
    this.editorInstance.insertText(this.previousEditorSelection, selectedVal);
    this.editorInstance.setSelection(this.previousEditorSelection.index + selectedVal.length + 1);
    this.previousEditorSelection = this.editorInstance.getSelection();
  }

  symbolSelectorChanged(selectedVal) {
    switch (selectedVal) {
      case 'equals': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection.index - 5,
          this.equalsUnicode + '           〈  〉'
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 15);
        this.hideSymbols = true;
        break;
      }
      case 'implies': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection.index -5,
          this.impliesUnicode + '            〈  〉'
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 10);
        this.hideSymbols = true;
        break;
      }
      case 'followsFrom': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection.index - 5,
          this.followsFromUnicode + '            〈  〉'
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 10);
        this.hideSymbols = true;
        break;
      }
      case 'lessThan': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection.index - 5,
          this.lessThanUnicode + '            〈  〉'
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 12);
        this.hideSymbols = true;
        break;
      }
      case 'greaterThan': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection.index - 5,
          this.greaterThanUnicode + '            〈  〉'
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 12);
        this.hideSymbols = true;
        break;
      }
      case 'greaterThanOrEq': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection,
          this.greaterThanOrEqUnicode + '  ' + this.hintUnicode
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 12);
        this.hideSymbols = true;
        break;
      }
      case 'lessThanOrEq': {
        this.editorInstance.deleteText(0, 5);
        this.editorInstance.insertText(
          this.previousEditorSelection,
          this.lessThanOrEqUnicode + '  ' + this.hintUnicode
        );
        this.editorInstance.setSelection(this.previousEditorSelection.index + 12);
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

  addNewThm() {
    this.editorService.toggleFormFilled();
  }

  addBindingCreated(quill) {

    this.editorInstance = quill;

    quill.on('text-change', function () {
      console.log('Text change!');
      this.hideSymbols = true;
    });

    // implies
    quill.keyboard.addBinding({key: '1'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '⇒            〈  〉');
        quill.setSelection(range.index + 11);
      });

    // follows from
    quill.keyboard.addBinding({key: '1'}, {
        empty: false,
        collapsed: true,
        prefix: /[≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/,
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '⇐            〈  〉');
        quill.setSelection(range.index + 11);
      });

    // equals
    quill.keyboard.addBinding({key: '1'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/,
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '=            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // less than
    quill.keyboard.addBinding({key: '1'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/,
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '<            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // less than or equal to
    quill.keyboard.addBinding({key: '2'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/,
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '≤            〈  〉');
        quill.setSelection(range.index + 13);
      });


    // greater than
    quill.keyboard.addBinding({key: '1'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;g$/,
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '>            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // greater than or equal to
    quill.keyboard.addBinding({key: '3'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;g$/,
        // offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 7, '≥            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // ///////////////////////////////////////////inline symbols///////////////////////////////////////////

    // close paren
    quill.keyboard.addBinding({key: '9', shiftKey: true}, {
        // empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.insertText(range.index, ' (  ) ');
        quill.setSelection(range.index + 3);
      });

    // close curly brace
    quill.keyboard.addBinding({key: 219, shiftKey: true}, {
        // empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.insertText(range.index, ' {  } ');
        quill.setSelection(range.index + 3);
      });

    // close square brackets
    quill.keyboard.addBinding({key: 219}, {
        // empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.insertText(range.index, ' [  ] ');
        quill.setSelection(range.index + 3);
      });


    // p
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;i$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '≺ ');
          quill.setSelection(range.index);
      });


    // poset
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;r$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⪯ ');
        quill.setSelection(range.index);
      });

    // poset inverted
    quill.keyboard.addBinding({key: 'r'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;t$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⪰ ');
          quill.setSelection(range.index);
      });

    // p inverted
    quill.keyboard.addBinding({key: 'i'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;t$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '≻ ');
          quill.setSelection(range.index);
      });

    // hash
    quill.keyboard.addBinding({key: 'h'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;h$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '# ');
          quill.setSelection(range.index);
      });

    // sigma
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;s$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'σ ');
          quill.setSelection(range.index);
      });

    // pi
    quill.keyboard.addBinding({key: 'i'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;p$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'π ');
          quill.setSelection(range.index);
      });

    // natural join
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;j$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⨝ ');
          quill.setSelection(range.index);
      });

    // big-O
    quill.keyboard.addBinding({key: 'o'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;b$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'Ο ');
          quill.setSelection(range.index);
      });

    // big omega
    quill.keyboard.addBinding({key: 'g'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;b$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'Ω ');
          quill.setSelection(range.index);
      });

    // big theta
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;b$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'Θ ');
          quill.setSelection(range.index);
      });

    // phi
    quill.keyboard.addBinding({key: 'h'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;p$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '𝜙 ');
          quill.setSelection(range.index);
      });

    // follows from
    quill.keyboard.addBinding({key: 'f'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;f$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.followsFromUnicode);
          quill.setSelection(range.index + 1);
      });

    // less than
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;l$/

        // missing * and - and + characters and ^
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ' + this.lessThanUnicode);
          quill.setSelection(range.index + 1);
      });

    // less than or equal to
    quill.keyboard.addBinding({key: 'e'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;l$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ' + this.lessThanOrEqUnicode);
          quill.setSelection(range.index + 1);
      });

    // greater than
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;g$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ' + this.greaterThanUnicode);
          quill.setSelection(range.index + 1);
      });


    // greater than or equal to
    quill.keyboard.addBinding({key: 'e'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;g$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ' + this.greaterThanOrEqUnicode);
          quill.setSelection(range.index + 1);
      });

    // left hint bracket
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;l$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.leftBracketUnicode + ' ');
          quill.setSelection(range.index);
      });

    // right hint bracket
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;r$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.rightBracketUnicode);
          quill.setSelection(range.index);
      });

    // implies
    quill.keyboard.addBinding({key: 'm'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]* ;i$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ' + this.impliesUnicode);
          quill.setSelection(range.index + 1);
      });

    // equival
    quill.keyboard.addBinding({key: 'q'}, {
      empty: false,
      collapsed: true,
      prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;e$/
    }, (range, context) => {
      quill.format('bold', false);
      quill.format('italic', false);
      quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
      quill.insertText(range.index - 2, this.equivalesUnicode);
        quill.setSelection(range.index + 1);
    });

    // textual subsitution
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;t$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.textSubUnicode);
        quill.setSelection(range.index + 1);
      });

    // element of
    quill.keyboard.addBinding({key: 'l'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;e$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.elementOfUnicode);
          quill.setSelection(range.index + 1);
      });

    // universe
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;u$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'Ʊ ');
          quill.setSelection(range.index + 1);
      });

    // proper subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;p$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.properSubsetOfUnicode);
          quill.setSelection(range.index + 1);
      });

    // proper superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;p$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.properSupersetOfUnicode);
          quill.setSelection(range.index + 1);
      });

    // subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;s$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.subsetOfUnicode);
          quill.setSelection(range.index + 1);
      });

    // superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;s$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.supersetOfUnicode);
          quill.setSelection(range.index + 1);
      });

    // empty set
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;e$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.emptySetUnicode);
          quill.setSelection(range.index + 1);
      });


    // union
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;u$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.unionUnicode);
          quill.setSelection(range.index + 1);
      });

    // intersection
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;i$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.intersectionUnicode);
          quill.setSelection(range.index + 1);
      });

    // complement
    quill.keyboard.addBinding({key: 'o'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;c$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '~ ');
          quill.setSelection(range.index);
      });


    // disjunction
    quill.keyboard.addBinding({key: 'r'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;o$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.disjunctionUnicode);
          quill.setSelection(range.index + 1);
      });

    // conjunction
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;a$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.conjuctionUnicode);
          quill.setSelection(range.index + 1);
      });

    // for all
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;f$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.universalQuantifierUnicode);
          quill.setSelection(range.index + 1);
      });

    // there exists
    quill.keyboard.addBinding({key: 'x'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;e$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.existentialQuanitiferUnicode);
          quill.setSelection(range.index + 1);
      });

    // power set
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;p$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'P ');
          quill.setSelection(range.index);
      });

    // up arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;u$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '↑ ');
          quill.setSelection(range.index);
      });

    // right arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;r$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '→ ');
          quill.setSelection(range.index);
      });

    // left arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;l$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '← ');
          quill.setSelection(range.index);
      });

    // down arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;d$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '↓ ');
          quill.setSelection(range.index);
      });
    // cross product
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;c$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '× ');
          quill.setSelection(range.index);
      });

    // division symbol
    quill.keyboard.addBinding({key: 'v'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;d$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '÷ ');
          quill.setSelection(range.index);
      });

    // function composition
    quill.keyboard.addBinding({key: 'c'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;f$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '∙ ');
          quill.setSelection(range.index);
      });

    // function product
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;f$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '∘ ');
          quill.setSelection(range.index);
      });

    // dot product
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;d$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⋅ ');
          quill.setSelection(range.index);
      });

    // star
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;s$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.genQuantifierUnicode);
          quill.setSelection(range.index);
      });


    // brackets defintely different than les than

    /////////// //////////////////////// not + symbols //////////////////////// ////////////////////////

    // not
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;no$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ¬ ');
          quill.setSelection(range.index);
      });

    // does not imply
    quill.keyboard.addBinding({key: 'm'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ni$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.doesNotImplyUnicode);
          quill.setSelection(range.index);
      });

    // does not follow from
    quill.keyboard.addBinding({key: 'f'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;nf$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.doesNotFollowFromUnicode);
          quill.setSelection(range.index);
      });

    // not equal
    quill.keyboard.addBinding({key: 'q'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ne$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.doesNotEqualUnicode);
          quill.setSelection(range.index);
      });

    // not equivales
    quill.keyboard.addBinding({key: 'v'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ne$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.notEquivalesUnicode);
          quill.setSelection(range.index);
      });

    // not element of
    quill.keyboard.addBinding({key: 'l'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ne$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.notElementOfUnicode);
          quill.setSelection(range.index);
      });

    // not a subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ns$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.notSubsetOf);
          quill.setSelection(range.index);
      });

    // not a superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ns$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.notSupersetOfUnicode);
          quill.setSelection(range.index);
      });

    // not a proper superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;np$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.notProperSupersetOfUnicode);
          quill.setSelection(range.index);
      });

    // not a proper subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;np$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.notProperSubsetOfUnicode);
          quill.setSelection(range.index);
      });

    ////////////////////////////////// natural numbers, etc ///////////////////////////////
    // natural numbers
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;n$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.naturalUnicode);
          quill.setSelection(range.index + 1);
      });

    // integers
    quill.keyboard.addBinding({key: 'r'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;i$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.integerUnicode);
          quill.setSelection(range.index + 1);
      });

    //rational
    quill.keyboard.addBinding({key: 'l'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;r$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.rationalUnicode);
          quill.setSelection(range.index);
      });

    //real numbers
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;r$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.realUnicode);
          quill.setSelection(range.index);
      });

    //booleans
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;b$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, this.booleanSymbol );
          quill.setSelection(range.index);
      });

    //end of proof
    quill.keyboard.addBinding({key: 'd'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;en$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.endProofUnicode + this.endProofUnicode);
          quill.setSelection(range.index);
      });

    ////////////////////////// temporal //////////////////////////
    //next
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;nx$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.nextUnicode);
          quill.setSelection(range.index);
      });

    //until
    quill.keyboard.addBinding({key: 'l'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ut$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.untilUnicode);
          quill.setSelection(range.index + 1);
      });

    //eventually
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;ev$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.eventuallyUnicode);
          quill.setSelection(range.index);
      });

    //always
    quill.keyboard.addBinding({key: 'w'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;al$/
      },
      (range, context) => {
        quill.format('bold', false);
        quill.format('italic', false);
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, this.alwaysUnicode);
          quill.setSelection(range.index);
      });

    //plus
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*plu$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' plus ', {'bold': true, 'italic': true});
        quill.format('bold', false);
        quill.format('italic', false);
      });

    //gcd
    quill.keyboard.addBinding({key: 'd'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*gc$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' gcd ', {'bold': true, 'italic': true});
        quill.format('bold', false);
        quill.format('italic', false);
      });

    // lcm
    quill.keyboard.addBinding({key: 'm'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*lc$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' lcm ', {'bold': true, 'italic': true});
        quill.format('bold', false);
        quill.format('italic', false);

      });

    //mod
    quill.keyboard.addBinding({key: 'd'}, {
        empty: false,
        collapsed: true,
        prefix: /[[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*mo$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' mod ', {'bold': true, 'italic': true});
        quill.format('bold', false);
        quill.format('italic', false);

      });

    // abs
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*ab$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, 'abs ', {'bold': true, 'italic': true});
        quill.format('bold', false);
        quill.format('italic', false);

      });

    // true
    quill.keyboard.addBinding({key: 'e'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*tru$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, 'true ', 'italic', true);
        quill.format('italic', false);

      });

    // false
    quill.keyboard.addBinding({key: 'e'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*fals$/
      },
      (range, context) => {
        quill.deleteText(range.index - 4, 4); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 4, 'false ', 'italic', true);
        quill.format('italic', false);

      });

    // sum
    quill.keyboard.addBinding({key: 'm'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;su$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ∑');
          quill.setSelection(range.index);
      });

    // product
    quill.keyboard.addBinding({key: 'd'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Zs]*;pr$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, '∏');
          quill.setSelection(range.index);
      });

    // wp
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/(){}╱∏∑◇○ʯ□≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕℤℚℝ𝔹〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a-zA-Z]*w$/
      },
      (range, context) => {
        quill.deleteText(range.index - 1, 1); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 1, 'wp.().R ', 'italic', true);
        quill.format('italic', false);
          quill.setSelection(range.index+3);
      });
  }


  updateSelection($event: any) {
    if (this.editorInstance.getSelection()) {
      this.previousEditorSelection = this.editorInstance.getSelection();
    }
  }

  export() {
    const loader = document.getElementById('exportLoader');
    const exportBtn = (<HTMLInputElement> document.getElementById('exportBtn'));

    loader.style.visibility = 'visible';
    exportBtn.disabled = true;

    const text = this.editorInstance.getText();

    const pin = text.match(/Pin\:(?:\s)(.*)/m);
    const assignment = text.match(/Assignment\:(?:\s)(.*)/m);

    this.http.post('http://localhost:4201/scribe/pdf', {
      text
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((data: { base64: string }) => {
      const pdfDataURL = 'data:application/pdf;charset=binary;base64,' + data['base64'];

      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = pdfDataURL;

      a.download = (pin + 'a' + assignment + 'written').replace(/\s/g, '_');

      a.download = "proof";

      a.click();

      loader.style.visibility = 'hidden';
      exportBtn.disabled = false;
    });

    // const arrayText = text.split('\n');

    // const numHeaders = 4;

    // if (arrayText.length >= 4) {
    //   const name = (arrayText[0] as string).replace(/Name:(?:\s)(.*)/gm, '$1');
    //   const pin = ((arrayText[1] as string)).replace(/Pin:(?:\s)(.*)/gm, '$1');
    //   const course = (arrayText[2] as string).replace(/Course:(?:\s)(.*)/gm, '$1');
    //   const assignment = (arrayText[3] as string).replace(/Assignment:(?:\s)(.*)/gm, '$1');

    //   const latexName = '\\textbf{' + name + '}\\\\' + '\n';
    //   const latexPin = '\\textbf{' + 'Pin: ' + pin + '}\\\\' + '\n';
    //   const latexCourse = '\\textbf{' + course + '}\\\\' + '\n';
    //   const latexAssignment = '\\textbf{' + "A"+ assignment + '}\\\\\\\\' + '\n';

    //   const heading = latexName + latexPin + latexCourse + latexAssignment;

    //   for (let i = 0; i < numHeaders; i++) {
    //     arrayText.shift();
    //   }

    //   const proofs = arrayText.join('\n');

    //   let compiler = new AntlrComponent();
    //   let compiledProofs = compiler.compile(proofs);

    //   let latex = compiler.preamble + heading + compiledProofs + compiler.postamble;

    //   this.http.post('http://localhost:4201/scribe/pdf', {
    //     text
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).subscribe((data: { base64: string }) => {
    //     let pdfDataURL = 'data:application/pdf;charset=binary;base64,' + data['base64'];

    //     let a = document.createElement('a');
    //     document.body.appendChild(a);
    //     a.href = pdfDataURL;
    //     a.download = (pin + 'a' + assignment + 'written').replace(/\s/g, '_');
    //     a.click();

    //     loader.style.visibility = 'hidden';
    //     exportBtn.disabled = false;
    //   });
    // } else {
    //   alert("Please include the default headers.");

    //   loader.style.visibility = 'hidden';
    //   exportBtn.disabled = false;
    // }
  }
}
