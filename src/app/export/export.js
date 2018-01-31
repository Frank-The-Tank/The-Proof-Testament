/*
 *	export.js
 *	
 *  Takes input and converts it to LaTeX. 
 *	Imported text must follow the format below.
 */

const latex = require('node-latex');
const fs = require('fs');

var text = `
@Name
@Course
@Date
@Assignment

# Exercise 1.1
p = q
=	<1.23>
q #

# Exercise 1.2
p & q
=	<1.24>
q #
`;

convertToLatex(text);

// Converts a string into LaTeX. Returns PDF stream.

function convertToLatex(entry) {
	
	var doc = "";
	
	// Document settings
	let docSettings = '\\documentclass[11pt]{article}\n\\usepackage[margin=1in]{geometry}\n\\usepackage{fancyhdr}\n\\pagestyle{fancy}\n\\usepackage{amsmath}\n\\usepackage{amssymb}';
						
	// Header text
	let rawHeaders = entry.match(/@(.*)/g);
	
	if (rawHeaders.length != 4){
		return "<convertToLatex> Entry text must have 4 headers denoted by '@'.";
	}
	
	let lhead = ('\\lhead{' + rawHeaders[1]).replace('@', '') + ' \\ ' + (rawHeaders[3] + '}').replace('@', '');
	let chead = ('\\chead{' + rawHeaders[0] + '}').replace('@', '');
	let rhead = ('\\rhead{' + rawHeaders[2] + '}').replace('@', '');
	
	let header = lhead + '\n' + chead + '\n' + rhead;
	
	// Content
	let content = entry.replace(/@.*.$/gm, "").replace(/\n{2,}/gm, "\n");
	
	// Format excerise headings
	content = content.replace(/#\s(?=\w.*.$)(.*.$)/gm, "\\textbf{$1}\n");
	
	// Format indentation
	content = content.replace(/([=|&])(?=[\t{1,}|\s{1,}]<)(.*)/gm, "\\\\ \\unindent $ $1 \\ $2 $ \n");
	
	// Format math
	content = content.replace(/(\w\s?[=|&|<].*)/gm, "$ $1 $");
	
	// Format symbols
	content = content.replace(/&/gm, "\\wedge");
	content = content.replace(/or/gm, "\\vee");
	
	// Newline at end of exercises
	content = content.replace(/#$/gm, "\\\\ \n");
	
	// Assemble the document
	doc = docSettings + '\n\n' + header + '\n\n\\begin{document}\\newcommand{\\unindent}{ \\hspace{-2em} }' + '\n\n' + content + '\n\n\\end{document}';
	
	// Export to PDF
	let fileName = String('pdfs/' + Date.now()) + '.pdf';
	
	const output = fs.createWriteStream(fileName);
	const pdf = latex(doc);
	
	pdf.pipe(output);
	
	pdf.on('error', err => {
		console.error(err);
		
		return "Error"
	});
	
	return pdf;
}