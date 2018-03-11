import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EditorService {

  infoFilled = false;
  outline = '';

  infoFilledChange: Subject<boolean> = new Subject<boolean>();
  outlineChange: Subject<string> = new Subject<string>();

  constructor() {}

  toggleFormFilled() {
    this.infoFilledChange.next(!this.infoFilled);
    this.infoFilled = !this.infoFilled;
  }

  submitData(data: string) {
    this.outlineChange.next(data);
  }

}
