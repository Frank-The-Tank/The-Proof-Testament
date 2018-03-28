import { EditorService } from './editor.service';
export interface Config {
    container: string;
    selector: 'equals' | 'implies' | 'followsFrom';
}
export interface QuillInstance {
    on: Function;
    getText: Function;
}
export default class SymbolPicker {
    private editorService;
    quill: QuillInstance;
    options: Config;
    constructor(quill: any, options: any, editorService: EditorService);
}
