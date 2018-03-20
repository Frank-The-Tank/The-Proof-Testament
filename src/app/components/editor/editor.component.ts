import {Component, ElementRef, OnInit, OnDestroy, ViewChild, ViewEncapsulation, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {QuillEditorComponent} from 'ngx-quill/src/quill-editor.component';
import {AutocompleteBoxComponent} from '../autocomplete-box/autocomplete-box.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;

import Counter from './counter';
import SymbolPicker from './symbolPicker';
import SymbolDropdown from './symbolDropdown';
import {SymbolPickerService} from '../symbol-picker/symbol-picker.service';
import {EditorService} from './editor.service';

import { convert } from '../../convert/convert';

Quill.register('modules/counter', Counter);
Quill.register('modules/equalsSymbol', SymbolPicker);
Quill.register('modules/impliesSymbol', SymbolPicker);
Quill.register('modules/symbolDropdown', SymbolDropdown);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements OnInit, OnDestroy {

  @ViewChild('autoCompleteContainer', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  infoFilled: boolean;
  private infoFilledSubscription;
  outline: string;
  private outlineSubscription;
  hideSymbols = true;
  private hideSymbolsSubscription;
  isReadOnly = false;
  form: FormGroup;
  modules = {};

  bindings = {
    enter: {
      key: 13,
      handler: () => {
        this.editorService.toggleHideSymbols();
        Quill.insertText(Quill.getSelection(), '\n');
      }
    }
  };

  constructor(fb: FormBuilder,
              private factoryResolver: ComponentFactoryResolver,
              private symbolService: SymbolPickerService,
              private editorService: EditorService) {

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
      counter: { container: '#counter', unit: 'word' },
      equalsSymbol: { container: '#equalsBtn', selector: 'equals' },
      impliesSymbol: { container: '#impliesBtn', selector: 'implies' }
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
  }

  addBindingCreated(quill) {

    // implies
    quill.keyboard.addBinding({key: 'm'}, {
        collapsed: true,
        prefix: /^;i$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⇒          〈  〉');
        quill.setSelection(range.index + 11);
      });

    // follows from
    quill.keyboard.addBinding({key: 'f'}, {
        collapsed: true,
        prefix: /^;f$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⇐          〈  〉');
        quill.setSelection(range.index + 11);
      });

    // equals
    quill.keyboard.addBinding({key: 'q'}, {
        collapsed: true,
        prefix: /^;e$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '=            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // less than
    quill.keyboard.addBinding({key: 't'}, {
        collapsed: true,
        prefix: /^;l$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '<            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // less than or equal to
    quill.keyboard.addBinding({key: 'e'}, {
        collapsed: true,
        prefix: /^;l$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '≤            〈  〉');
        quill.setSelection(range.index + 13);
      });


    // greater than
    quill.keyboard.addBinding({key: 't'}, {

        collapsed: true,
        prefix: /^;g$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '>            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // greater than or equal to
    quill.keyboard.addBinding({key: 'e'}, {

        collapsed: true,
        prefix: /^;g$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '≥            〈  〉');
        quill.setSelection(range.index + 13);
      });

    // ///////////////////////////////////////////inline symbols///////////////////////////////////////////

    // natural numbers
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;n$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ℕ ');
      });


    // p
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ≺ ');
      });


    // poset
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;r$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⪯ ');
      });

    // poset inverted
    quill.keyboard.addBinding({key: 'r'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;t$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⪰ ');
      });

    // p inverted
    quill.keyboard.addBinding({key: 'i'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;t$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ≻ ');
      });

    // hash
    quill.keyboard.addBinding({key: 'h'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;h$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' # ');
      });

    // sigma
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' σ ');
      });

    // pi
    quill.keyboard.addBinding({key: 'i'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' π ');
      });

    // natural join
    quill.keyboard.addBinding({key: 'j'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;n$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⨝ ');
      });

    // big-O
    quill.keyboard.addBinding({key: 'o'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' Ο ');
      });

    // big omega
    quill.keyboard.addBinding({key: 'g'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' Ω ');
      });

    // big theta
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;b$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' Θ ');
      });

    // phi
    quill.keyboard.addBinding({key: 'h'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' 𝜙 ');
      });

    // follows from
    quill.keyboard.addBinding({key: 'f'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⇐ ');
      });

    // less than
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/

        // missing * and - and + characters and ^
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' < ');
      });

    // less than or equal to
    quill.keyboard.addBinding({key: 'e'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ≤ ');
      });

    // greater than
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;g$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' > ');
      });


    // greater than or equal to
    quill.keyboard.addBinding({key: 'e'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;g$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ≥ ');
      });

    // implies
    quill.keyboard.addBinding({key: 'm'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⇒ ');
      });

    // equival
    quill.keyboard.addBinding({key: 'q'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ≡ ');
      });

    // textual subsitution
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;t$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ≔ ');
      });

    // element of
    quill.keyboard.addBinding({key: 'l'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∈ ');
      });

    // universe
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;u$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' Ʊ ');
      });

    // proper subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⊂ ');
      });

    // proper superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⊃ ');
      });

    // subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⊆ ');
      });

    // superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⊇ ');
      });

    // empty set
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∅ ');
      });


    // union
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;u$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∪ ');
      });

    // intersection
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;i$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∩ ');
      });

    // complement
    quill.keyboard.addBinding({key: 'o'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;c$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ~ ');
      });


    // disjunction
    quill.keyboard.addBinding({key: 'r'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;o$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⋁ ');
      });

    // conjunction
    quill.keyboard.addBinding({key: 'n'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;a$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⋀ ');
      });

    // for all
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∀');
      });

    // there exists
    quill.keyboard.addBinding({key: 'x'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;e$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∃');
      });

    // power set
    quill.keyboard.addBinding({key: 's'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;p$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' Ρ ');
      });

    // up arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;u$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ↑ ');
      });

    // right arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;r$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' → ');
      });

    // left arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;l$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ← ');
      });

    // down arrow
    quill.keyboard.addBinding({key: 'a'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;d$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ↓ ');
      });
    // cross product
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;c$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' × ');
      });

    // division symbol
    quill.keyboard.addBinding({key: 'v'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;d$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ÷ ');
      });

    // function composition
    quill.keyboard.addBinding({key: 'c'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∙ ');
      });

    // function product
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;f$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ∘ ');
      });

    // floating dot
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;d$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ⋅ ');
      });

    // star
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;s$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, ' ★ ');
      });


    // brackets defintely different than les than

    /////////// //////////////////////// not + symbols //////////////////////// ////////////////////////

    // not
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;no$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ¬ ');
      });

    // does not imply
    quill.keyboard.addBinding({key: 'm'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ni$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ⇏ ');
      });

    // does not follow from
    quill.keyboard.addBinding({key: 'f'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;nf$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ⇍ ');
      });

    // not equal
    quill.keyboard.addBinding({key: 'q'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ne$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ≠ ');
      });

    // not element of
    quill.keyboard.addBinding({key: 'l'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ne$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ∉ ');
      });

    // not a subset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ns$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ⊄ ');
      });

    // not a superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ns$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ⊅ ');
      });

    // not a proper superset
    quill.keyboard.addBinding({key: 'b'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;np$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ⊈ ');
      });

    // not a proper superset
    quill.keyboard.addBinding({key: 'p'}, {
        empty: false,
        collapsed: true,
        prefix: /[/≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩~⋅*∘∙÷×Ρ↓↑←→ ℕ〈〉◃▹σ★∀∃⋁⋀≺⪯⪰≻ΩΟΘπ#𝜙⨝+-^a]*;ns$/
      },
      (range, context) => {
        quill.deleteText(range.index - 3, 3); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 3, ' ⊉ ');
      });
  }

  setControl() {
    this.form.setControl('editor', new FormControl('test - new Control'));
  }

  setFocus($event) {
    $event.focus();
  }

  logChange($event: any) {
    console.log($event);
  }

  export() {
    // Find the text boxes
    const textBoxes = document.getElementsByClassName("ql-editor");

    var output = textBoxes[0].innerHTML;

    // Loop through each text box
    // for (var i = 0; i < textBoxes.length; i++) {
    //   const textBox = textBoxes[i];

    //   output += "# Exercise " + (i + 1) + "\n" + textBox.innerHTML + "# \n";
    // }

    // Cleanup output manually. Method textContent fails to keep new lines.
    output = output.replace(/<p>/g, "");
    output = output.replace(/<\/p>/g, "\n");
    output = output.replace(/<br>/g, "\n")

    convert(output);
  }

}
