/*
 *	convert.js
 *
 *  Takes a string and converts it to LaTeX.
 *	Imported text must follow the format below.
 */

import { PDFTeX } from './pdftex/pdftex'

// const input = `
// <strong>Name: Micah Benn</strong>
// <strong>Class: Math 221</strong>
// <strong>Proof: 2.1</strong>


// <strong>Solution: </strong>
// <strong>a</strong>
// <strong>
// =&gt;            〈  2.1〉</strong>
// <strong>p  ⋀ d</strong>
// =            〈 1.1 〉
// q  ⋁  g
// `

// convert(input);

export function convert(string) {
	
	// Replace strings	
	var resolvedString = string.replace(/<strong>.*:\s?(.*)<\/strong>/gm, "@$1");
	
	resolvedString = resolvedString.replace(/<strong>/gm, "");
	resolvedString = resolvedString.replace(/<\/strong>/gm, "");
	
	// Final document
	var doc = "";

	// Document settings
	let docSettings = '\\documentclass[12pt]{article}\n\\usepackage[margin=1in]{geometry}\n\\usepackage{fancyhdr}\n\\pagestyle{fancy}\n\\usepackage{amsmath}\n\\usepackage{amssymb}';

	// \n\\usepackage{centernot}\n\\usepackage{setspace}\n\\doublespacing

	// Header text
	let rawHeaders = resolvedString.match(/@(.*)/g);

	if (rawHeaders.length != 4){
		return "<convert> Entry text must have 4 headers denoted by '@'.";
	}

	let lhead = ('\\lhead{' + rawHeaders[0] + '}').replace('@', '');
	let chead = ('\\chead{' + rawHeaders[1] + '}').replace('@', '');
	let rhead = ('\\rhead{' + rawHeaders[2] + '}').replace('@', '');

	let header = lhead + '\n' + chead + '\n' + rhead;
	
	// Content
	let content = resolvedString.replace(/@.*.$/gm, "").replace(/\n{2,}/gm, "\n");

	// Format excerise headings
	content = content.replace(/#\s(?=\w.*.$)(.*.$)/gm, "\\textbf{$1}\n");

	// Format indentation
	content = content.replace(/([=|&])(?=[\t{1,}|\s{1,}]<)(.*)/gm, "\\\\ \\unindent $ $1 \\ $2 $ \n");

	// Format indentation
	content = content.replace(/\n(<|>|≤|≥|\=\&gt\;|=|⇒|⇐)/gm, "\\newline$1");
	content = content.replace(/(〉)\n/gm, "$1\\newline\\indent ");
	
	// Format symbols
	var symbolMap: { [key: string]: string } = {
		"〈"	: "\\langle",
		"〉": "\\rangle",
		"<": "<",
		">": ">",
		"≤": "\\leq",
		"≥": "\\geq",
		"=&gt;": "\\Rightarrow",
		"⋀": "\\wedge",
		"⋁": "\\vee",
		"⇒": "\\Rightarrow",
		"⇐": "\\Leftarrow",
		"⇏": "\\centernot\\Rightarrow",
		"⇍": "\\centernot\\Leftarrow",
		"=": "=",
		"≡": "\\equiv",
		"≠": "\\neq",
		"ℕ": "\\natural",
		"≺": "\\prec",
		"≻": "\\succ",
		"⪯": "\\preceq",
		"⪰": "\\succeq",
		"#": "\\#",
		"σ": "\\sigma",
		"π": "\\pi",
		"⨝": "\\bowtie",
		"Ω": "\\Omega",
		"Θ": "\\Theta",
		"𝜙": "\\phi",
		"≔": ":=",
		"∈": "\\in",
		"∉": "\\notin",
		"Ʊ": "U",
		"⊂": "\\subset",
		"⊃": "\\supset",
		"⊆": "\\subseteq",
		"⊇": "\\supseteq",
		"⊄": "\\centernot\\subset",
		"⊅": "\\centernot\\supset",
		"⊈": "\\nsubseteq",
		"⊉": "\\centernot\\supseteq",
		"∅": "\\varnothing",
		"∪": "\\cup",
		"∩": "\\cap",
		"~": "\\sim",
		"∀": "\\forall",
		"∃": "\\exists",
		"Ρ": "P",
		"↑": "\\uparrow",
		"→": "\\rightarrow",
		"↓": "\\downarrow",
		"×": "\\times",
		"÷": "\\div",
		"∙": "\\bullet",
		"∘": "\\circ",
		"⋅": "\\cdot",
		"★": "\\star",
		"¬": "\\neg"
	};
		
	for (let symbol in symbolMap) {
		content = content.replace(RegExp(symbol, "g"), "$" + symbolMap[symbol] + "$");
	}
		
	// Newline at end of exercises
	content = content.replace(/#$/gm, "\\\\ \n");

	// Assemble the document
	doc = docSettings + '\n\n' + header + '\n\n\\begin{document}\\newcommand{\\unindent}{ \\hspace{-2em} }' + '\n\n' + content + '\n\n\\end{document}';

	// Temp fix
	doc = doc.replace(/@/, "");

	console.log(doc);

	// Compile LaTeX

	 var pdftex = PDFTeX;

	 pdftex.compile(doc).then(function(pdf_dataurl) {
	 	var answer = confirm("Your PDF is ready. View now?");

	 	if (answer) {
	 		window.open(pdf_dataurl, '_blank');
	 	} else {

	 	}
	 });

	return doc;
}