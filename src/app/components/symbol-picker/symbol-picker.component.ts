import {Component, Input, OnInit} from '@angular/core';
import {SymbolPickerService} from './symbol-picker.service';

@Component({
  selector: 'app-symbol-picker',
  templateUrl: './symbol-picker.component.html',
  styleUrls: ['./symbol-picker.component.scss']
})

export class SymbolPickerComponent implements OnInit {

  equalsTxt = '=';
  impliesTxt = '=>';

  constructor(private symbolService: SymbolPickerService) { }

  setSymbol(symbol: string) {
    this.symbolService.symbolSelected = symbol;
  }

  ngOnInit() {
  }

}
