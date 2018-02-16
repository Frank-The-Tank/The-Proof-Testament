import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {QuillEditorComponent} from 'ngx-quill/src/quill-editor.component';
import {AutocompleteBoxComponent} from '../autocomplete-box/autocomplete-box.component';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import Quill from 'quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class EditorComponent implements OnInit {

  @ViewChild('autoCompleteContainer', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

  title = '<p>Prove: </p> ' +
    '<p>Description: By ... </p> ' +
    '<br>Proof: <br> ';
  // '<p> /≡=¬≢≠≥≤⇒⇐⇍⇏≔<>∈∅Ʊ⊂⊃⊆⊇∉⊄⊅⊈⊉∪∩#~⋅*∘∙÷×Ρ↓↑◃▹★∀∃⋁⋀+-^ </p>';
  isReadOnly = false;
  placeholder = 'placeholder';
  form: FormGroup;
  modules = {};

  constructor(fb: FormBuilder, private factoryResolver: ComponentFactoryResolver) {
    this.form = fb.group({
      editor: ['test']
    });

    this.modules = {
      formula: true,
      toolbar: [[{'indent': '-1'}, {'indent': '+1'}], ['formula']]
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

    this.editor
      .onContentChanged.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        console.log('view child + directly subscription', data);
      });
  }

  // keyPressed() {
  //   console.log('TEST WORKED');
  //   const factory = this.factoryResolver.resolveComponentFactory(AutocompleteBoxComponent);
  //   const ref = this.viewContainerRef.createComponent(factory);
  //   ref.changeDetectorRef.detectChanges();
  // }

  addBindingCreated(quill) {
    //rule definition symbol

    //implies
    quill.keyboard.addBinding({key: 'm'}, {
        collapsed: true,
        prefix: /^;i$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⇒          <>');
        quill.setSelection(range.index + 11);
      });

    //follows from
    quill.keyboard.addBinding({key: 'f'}, {
        collapsed: true,
        prefix: /^;f$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⇐          <>');
        quill.setSelection(range.index + 11);
      });

    //equals
    quill.keyboard.addBinding({key: 'q'}, {
        collapsed: true,
        prefix: /^;e$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '=            <>');
        quill.setSelection(range.index + 13);
      });

    //less than
    quill.keyboard.addBinding({key: 't'}, {
        collapsed: true,
        prefix: /^;l$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '<            <>');
        quill.setSelection(range.index + 13);
      });

      //less than or equal to
      quill.keyboard.addBinding({key: 'e'}, {
          collapsed: true,
          prefix: /^;l$/,
          offset: 2,
        },
        (range, context) => {
          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
          quill.insertText(range.index - 2, '≤            <>');
          quill.setSelection(range.index + 13);
        });


    //greater than
    quill.keyboard.addBinding({key: 't'}, {

        collapsed: true,
        prefix: /^;g$/,
        offset: 2,
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '>            <>');
        quill.setSelection(range.index + 13);
      });

      //greater than or equal to
      quill.keyboard.addBinding({key: 'e'}, {

          collapsed: true,
          prefix: /^;g$/,
          offset: 2,
        },
        (range, context) => {
          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
          quill.insertText(range.index - 2, '≥            <>');
          quill.setSelection(range.index + 13);
        });

    // ///////////////////////////////////////////inline symbols///////////////////////////////////////////

    // follows from
    quill.keyboard.addBinding({key: 'f'}, {
        empty: false,
        collapsed: true,
        prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;f$/
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '⇐ ');
      });

    //less than
    quill.keyboard.addBinding({key: 't'}, {
        empty: false,
        collapsed: true,
        prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;l$/

        //missing * and - and + characters and ^
      },
      (range, context) => {
        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
        quill.insertText(range.index - 2, '< ');
      });

      //less than or equal to
      quill.keyboard.addBinding({key: 'e'}, {
          empty: false,
          collapsed: true,
          prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;l$/
        },
        (range, context) => {
          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
          quill.insertText(range.index - 2, '≤ ');
        });

      //greater than
      quill.keyboard.addBinding({key: 't'}, {
          empty: false,
          collapsed: true,
          prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;g$/
        },
        (range, context) => {
          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
          quill.insertText(range.index - 2, '> ');
        });


      //greater than or equal to
      quill.keyboard.addBinding({key: 'e'}, {
          empty: false,
          collapsed: true,
          prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;g$/
        },
        (range, context) => {
          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
          quill.insertText(range.index - 2, '≥ ');
        });

        //implies
        quill.keyboard.addBinding({key: 'm'}, {
            empty: false,
            collapsed: true,
            prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;i$/
          },
          (range, context) => {
            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
            quill.insertText(range.index - 2, '⇒ ');
          });

          //equival
          quill.keyboard.addBinding({key: 'q'}, {
              empty: false,
              collapsed: true,
              prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;e$/
            },
            (range, context) => {
              quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
              quill.insertText(range.index - 2, '≡ ');
            });

            //textual subsitution
            quill.keyboard.addBinding({key: 's'}, {
                empty: false,
                collapsed: true,
                prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;t$/
              },
              (range, context) => {
                quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                quill.insertText(range.index - 2, '≔ ');
              });

              //element of
              quill.keyboard.addBinding({key: 'l'}, {
                  empty: false,
                  collapsed: true,
                  prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;e$/
                },
                (range, context) => {
                  quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                  quill.insertText(range.index - 2, '∈ ');
                });

                //universe
                quill.keyboard.addBinding({key: 's'}, {
                    empty: false,
                    collapsed: true,
                    prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;u$/
                  },
                  (range, context) => {
                    quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                    quill.insertText(range.index - 2, 'Ʊ ');
                  });

                  //proper subset
                  quill.keyboard.addBinding({key: 'b'}, {
                      empty: false,
                      collapsed: true,
                      prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;p$/
                    },
                    (range, context) => {
                      quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                      quill.insertText(range.index - 2, '⊂ ');
                    });

                    //proper superset
                    quill.keyboard.addBinding({key: 'p'}, {
                        empty: false,
                        collapsed: true,
                        prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;p$/
                      },
                      (range, context) => {
                        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                        quill.insertText(range.index - 2, '⊃ ');
                      });

                      //subset
                      quill.keyboard.addBinding({key: 'b'}, {
                          empty: false,
                          collapsed: true,
                          prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;s$/
                        },
                        (range, context) => {
                          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                          quill.insertText(range.index - 2, '⊆ ');
                        });

                        //superset
                        quill.keyboard.addBinding({key: 'p'}, {
                            empty: false,
                            collapsed: true,
                            prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;s$/
                          },
                          (range, context) => {
                            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                            quill.insertText(range.index - 2, '⊇ ');
                          });

                          //empty set
                          quill.keyboard.addBinding({key: 's'}, {
                              empty: false,
                              collapsed: true,
                              prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;e$/
                            },
                            (range, context) => {
                              quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                              quill.insertText(range.index - 2, '∅ ');
                            });


                                                      //union
                                                      quill.keyboard.addBinding({key: 'n'}, {
                                                          empty: false,
                                                          collapsed: true,
                                                          prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;u$/
                                                        },
                                                        (range, context) => {
                                                          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                          quill.insertText(range.index - 2, '∪ ');
                                                        });

                          //intersection
                          quill.keyboard.addBinding({key: 'n'}, {
                              empty: false,
                              collapsed: true,
                              prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;i$/
                            },
                            (range, context) => {
                              quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                              quill.insertText(range.index - 2, '∩ ');
                            });

                            // complement
                            quill.keyboard.addBinding({key: 'o'}, {
                                empty: false,
                                collapsed: true,
                                prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;c$/
                              },
                              (range, context) => {
                                quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                quill.insertText(range.index - 2, '~ ');
                              });


                                                          // disjunction
                                                          quill.keyboard.addBinding({key: 'r'}, {
                                                              empty: false,
                                                              collapsed: true,
                                                              prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;o$/
                                                            },
                                                            (range, context) => {
                                                              quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                              quill.insertText(range.index - 2, '⋁ ');
                                                            });

                                                            // conjunction
                                                            quill.keyboard.addBinding({key: 'n'}, {
                                                                empty: false,
                                                                collapsed: true,
                                                                prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;a$/
                                                              },
                                                              (range, context) => {
                                                                quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                quill.insertText(range.index - 2, '⋀ ');
                                                              });

                                                              // for all
                                                              quill.keyboard.addBinding({key: 'a'}, {
                                                                  empty: false,
                                                                  collapsed: true,
                                                                  prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;f$/
                                                                },
                                                                (range, context) => {
                                                                  quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                  quill.insertText(range.index - 2, '∀ ');
                                                                });

                                                                // there exists
                                                                quill.keyboard.addBinding({key: 'x'}, {
                                                                    empty: false,
                                                                    collapsed: true,
                                                                    prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;e$/
                                                                  },
                                                                  (range, context) => {
                                                                    quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                    quill.insertText(range.index - 2, '∃ ');
                                                                  });
                                                                  //power set
                                                                  quill.keyboard.addBinding({key: 's'}, {
                                                                      empty: false,
                                                                      collapsed: true,
                                                                      prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;p$/
                                                                    },
                                                                    (range, context) => {
                                                                      quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                      quill.insertText(range.index - 2, 'Ρ ');
                                                                    });

                                                                    //up arrow
                                                                    quill.keyboard.addBinding({key: 'p'}, {
                                                                        empty: false,
                                                                        collapsed: true,
                                                                        prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;u$/
                                                                      },
                                                                      (range, context) => {
                                                                        quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                        quill.insertText(range.index - 2, '↑ ');
                                                                      });

                                                                      //down arrow
                                                                      quill.keyboard.addBinding({key: 'n'}, {
                                                                          empty: false,
                                                                          collapsed: true,
                                                                          prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;d$/
                                                                        },
                                                                        (range, context) => {
                                                                          quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                          quill.insertText(range.index - 2, '↓ ');
                                                                        });
                                                                        //cross product
                                                                        quill.keyboard.addBinding({key: 'p'}, {
                                                                            empty: false,
                                                                            collapsed: true,
                                                                            prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;c$/
                                                                          },
                                                                          (range, context) => {
                                                                            quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                            quill.insertText(range.index - 2, '× ');
                                                                          });

                                                                          //division symbol
                                                                          quill.keyboard.addBinding({key: 'v'}, {
                                                                              empty: false,
                                                                              collapsed: true,
                                                                              prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;d$/
                                                                            },
                                                                            (range, context) => {
                                                                              quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                              quill.insertText(range.index - 2, '÷ ');
                                                                            });

                                                                            //function composition
                                                                            quill.keyboard.addBinding({key: 'c'}, {
                                                                                empty: false,
                                                                                collapsed: true,
                                                                                prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;f$/
                                                                              },
                                                                              (range, context) => {
                                                                                quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                                quill.insertText(range.index - 2, '∙ ');
                                                                              });

                                                                              //function product
                                                                              quill.keyboard.addBinding({key: 'p'}, {
                                                                                  empty: false,
                                                                                  collapsed: true,
                                                                                  prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;f$/
                                                                                },
                                                                                (range, context) => {
                                                                                  quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                                  quill.insertText(range.index - 2, '∘ ');
                                                                                });

                                                                                //floating dot
                                                                                quill.keyboard.addBinding({key: 't'}, {
                                                                                    empty: false,
                                                                                    collapsed: true,
                                                                                    prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;d$/
                                                                                  },
                                                                                  (range, context) => {
                                                                                    quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                                    quill.insertText(range.index - 2, '⋅ ');
                                                                                  });

                                                                                  //star
                                                                                  quill.keyboard.addBinding({key: 't'}, {
                                                                                      empty: false,
                                                                                      collapsed: true,
                                                                                      prefix: /^([A-Z]|[a-z]|\s|:|.|≡|=|¬|≢|≠|≥|≤|⇒|⇐|⇍|⇏|≔|<|>|∈|∅|Ʊ|⊂|⊃|⊆|⊇|∉|⊄|⊅|⊈|⊉|∪|∩|#|~|⋅|∘|∙|÷|×|Ρ|↓|↑|◃|▹|★|∀|∃|⋁|⋀)*;s$/
                                                                                    },
                                                                                    (range, context) => {
                                                                                      quill.deleteText(range.index - 2, 2); // range.index-1 = user's cursor -1 -> where = character is
                                                                                      quill.insertText(range.index - 2, '★ ');
                                                                                    });




//brackets defintely different than les than
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

  logSelection($event: any) {
    console.log($event);
  }

}
