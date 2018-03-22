/*
 *	convert.js
 *
 *  Takes a string and converts it to LaTeX.
 *	Imported text must follow the format below.
 */

import { PDFTeX } from './pdftex/pdftex'

const input = `
<strong>Name: Micah</strong>
<strong>Class: Benn</strong>
<strong>Proof: 2.1</strong>
<strong>Solution: hi</strong>
p
≤            〈 a 〉
l
`

 convert(input);

export function convert(string) {
	
	// Replace strings
	var resolvedString = string;
	
	resolvedString = resolvedString.replace("\<strong\>Name\: ", "@");
	resolvedString = resolvedString.replace("\<strong\>Class\: ", "@");
	resolvedString = resolvedString.replace("\<strong\>Proof\: ", "@");
	resolvedString = resolvedString.replace("\<strong\>Solution\: ", "@");
	
	resolvedString = resolvedString.replace("</strong>")
	
	// Final document
	var doc = "";

	// Document settings
	let docSettings = '\\documentclass[11pt]{article}\n\\usepackage[margin=1in]{geometry}\n\\usepackage{fancyhdr}\n\\pagestyle{fancy}\n\\usepackage{amsmath}\n\\usepackage{amssymb}';

	// Header text
	let rawHeaders = resolvedString.match(/@(.*)/g);

	if (rawHeaders.length != 4){
		return "<convert> Entry text must have 4 headers denoted by '@'.";
	}

	let lhead = ('\\lhead{' + rawHeaders[1]).replace('@', '') + ' \\ ' + (rawHeaders[3] + '}').replace('@', '');
	let chead = ('\\chead{' + rawHeaders[0] + '}').replace('@', '');
	let rhead = ('\\rhead{' + rawHeaders[2] + '}').replace('@', '');

	let header = lhead + '\n' + chead + '\n' + rhead;

	// Content
	let content = resolvedString.replace(/@.*.$/gm, "").replace(/\n{2,}/gm, "\n");

	// Format excerise headings
	content = content.replace(/#\s(?=\w.*.$)(.*.$)/gm, "\\textbf{$1}\n");

	// Format indentation
	content = content.replace(/([=|&])(?=[\t{1,}|\s{1,}]<)(.*)/gm, "\\\\ \\unindent $ $1 \\ $2 $ \n");

	// Format math
	// content = content.replace(/(\w\s?[=|&|<].*)/gm, "$ $1 $");

	// Format symbols
	content = content.replace(/&/gm, "\\wedge");
	content = content.replace(/or/gm, "\\vee");

	// Newline at end of exercises
	content = content.replace(/#$/gm, "\\\\ \n");

	// Assemble the document
	doc = docSettings + '\n\n' + header + '\n\n\\begin{document}\\newcommand{\\unindent}{ \\hspace{-2em} }' + '\n\n' + content + '\n\n\\end{document}';

	console.log(doc);

	// Compile LaTeX

	// var pdftex = PDFTeX;

	// pdftex.compile(doc).then(function(pdf_dataurl) {
	// 	var answer = confirm("Your PDF is ready. View now?");

	// 	if (answer) {
	// 		window.open(pdf_dataurl, '_blank');
	// 	} else {

	// 	}
	// });

	return doc;
}