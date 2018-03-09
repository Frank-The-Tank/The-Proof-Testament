import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EditorService {

  infoFilled = false;

  infoFilledChange: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  toggleFormFilled() {
    this.infoFilledChange.next(!this.infoFilled);
    this.infoFilled = !this.infoFilled;
  }

}
