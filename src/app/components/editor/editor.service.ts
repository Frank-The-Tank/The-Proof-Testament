import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EditorService {

  infoFilled = false;
  hideSymbols = true;

  infoFilledChange: Subject<boolean> = new Subject<boolean>();
  hideSymbolsChange: Subject<boolean> = new Subject<boolean>();
  outlineChange: Subject<string> = new Subject<string>();

  constructor() {}

  toggleFormFilled() {
    this.infoFilledChange.next(!this.infoFilled);
    this.infoFilled = !this.infoFilled;
  }

  toggleHideSymbols() {
    this.hideSymbolsChange.next(!this.hideSymbols);
    this.hideSymbols = !this.hideSymbols;
  }

  submitData(data: string) {
    this.outlineChange.next(data);
  }

}
