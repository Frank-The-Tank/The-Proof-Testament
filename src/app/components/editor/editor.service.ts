import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EditorService {

  infoFilled = false;
  editorEmpty = true;
  hideSymbols = true;

  infoFilledChange: Subject<boolean> = new Subject<boolean>();
  editorEmptyChange: Subject<boolean> = new Subject<boolean>();
  hideSymbolsChange: Subject<boolean> = new Subject<boolean>();
  outlineChange: Subject<string> = new Subject<string>();
  outlineAdditionChange: Subject<string> = new Subject<string>();

  constructor() {}

  toggleFormFilled() {
    this.infoFilledChange.next(!this.infoFilled);
    this.infoFilled = !this.infoFilled;
  }

  setEditorNonEmpty(val) {
    this.editorEmptyChange.next(val);
    this.editorEmpty = val;
  }

  toggleHideSymbols() {
    this.hideSymbolsChange.next(!this.hideSymbols);
    this.hideSymbols = !this.hideSymbols;
  }

  submitData(data: string) {
    this.outlineChange.next(data);
  }

  addProofToData(newData: string) {
    this.outlineAdditionChange.next(newData);
  }

}
