import { SlickCompiler } from './SlickCompiler';
import * as fs from 'fs';
const filename = process.argv[2];
if (filename) {
  let compiler = new SlickCompiler();
  let code = fs.readFileSync(filename).toString();
  let results = compiler.compile(code);
  process.stdout.write(results);
} else {
  process.stdout.write("Missing filename\n");
}
