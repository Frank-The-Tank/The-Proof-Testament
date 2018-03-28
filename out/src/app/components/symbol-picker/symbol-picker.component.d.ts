import { OnInit } from '@angular/core';
import { SymbolPickerService } from './symbol-picker.service';
export declare class SymbolPickerComponent implements OnInit {
    private symbolService;
    equalsTxt: string;
    impliesTxt: string;
    constructor(symbolService: SymbolPickerService);
    setSymbol(symbol: string): void;
    ngOnInit(): void;
}
