/*
	export.js
	
	Takes input and converts it to LaTeX. Imported text must follow the format below.
*/

// Still deciding on the format.

var text = `
	@Micah Benn
	@MATH 221
	@April 28, 2018
	@A1
	
	# Exercise 1.1
	p = q
=	<1.23>
	q //
	
	# Exercise 1.2
	p & q
=	<1.24>
	q //
`;

// Returns a LaTeX string.

function convertToLatex(entry) {
	
	var doc = "";
	
	let symbols = {
		"equiv": "$equiv$"
		">": "$>$",
	}
	
	// Document settings
	let docSettings = '\\documentclass[11pt]{article}\n\\usepackage[margin=1in]{geometry}\n\\usepackage{fancyhdr}\n\\pagestyle{fancy}\n\\usepackage{amsmath}\n\\usepackage{amssymb}';
						
	// Header text
	let rawHeaders = entry.match(/@(.*)/g);
	
	if (rawHeaders.length != 4){
		return "<convertToLatex> Entry text must have 4 headers denoted by '@'.";
	}
	
	let lhead = ('\\lhead{' + rawHeaders[1] + ' \\ ' + rawHeaders[3] + '}').replace('@', '');
	let chead = ('\\chead{' + rawHeaders[0] + '}').replace('@', '');
	let rhead = ('\\rhead{' + rawHeaders[2] + '}').replace('@', '');
	
	let header = lhead + '\n' + chead + '\n' + rhead;
	
	// Main content
	let content = "content here";
	
	// Assemble the document.
	doc = docSettings + '\n\n' + header + '\n\n\\begin{document}' + '\n\n' + content + '\n\n\\end{document}';
	
	return doc;
}

console.log(convertToLatex(text));