import { Subject } from 'rxjs/Subject';
export declare class EditorService {
    infoFilled: boolean;
    hideSymbols: boolean;
    infoFilledChange: Subject<boolean>;
    hideSymbolsChange: Subject<boolean>;
    outlineChange: Subject<string>;
    constructor();
    toggleFormFilled(): void;
    toggleHideSymbols(): void;
    submitData(data: string): void;
}
