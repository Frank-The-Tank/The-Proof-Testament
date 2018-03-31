//will replace fm2latex, takes text from quill and parses with AntlrComponent

export interface Config {
  container: string;
  unit: 'word'|'char';
}

export interface QuillInstance {
  on: Function;
  getText: Function;
}

export default class AntlrGrammar {
  quill: QuillInstance;
  options: Config;
}
