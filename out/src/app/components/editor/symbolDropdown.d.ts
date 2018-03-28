export interface Config {
    container: [string];
}
export interface QuillInstance {
    on: Function;
    getText: Function;
}
export default class SymbolDropdown {
    quill: QuillInstance;
    options: Config;
    constructor(quill: any, options: any);
}
