import { Antlr } from '../Antlr/Antlr'

var LaTeX = function() {
	this.write = function(string) {
		var resolver;
		var rejecter;
		
		const promise = new Promise((resolve, reject) => {
			resolver = resolve;
			rejecter = reject;
		});

		const arrayString = string.split('\n');

		const numHeaders = 4;

		if (arrayString.length >= 4) {
			const name = (arrayString[0] as string).replace(/Name:(?:\s)(.*)/gm, '$1');
			const pin = ((arrayString[1] as string)).replace(/Pin:(?:\s)(.*)/gm, '$1');
			const course = (arrayString[2] as string).replace(/Course:(?:\s)(.*)/gm, '$1');
			const assignment = (arrayString[3] as string).replace(/Assignment:(?:\s)(.*)/gm, '$1');

			const latexName = '\\textbf{' + name + '}\\\\' + '\n';
			const latexPin = '\\textbf{' + 'Pin: ' + pin + '}\\\\' + '\n';
			const latexCourse = '\\textbf{' + course + '}\\\\' + '\n';
			const latexAssignment = '\\textbf{' + "A"+ assignment + '}\\\\\\\\' + '\n';

			const heading = latexName + latexPin + latexCourse + latexAssignment;

			for (let i = 0; i <= numHeaders; i++) {
				arrayString.shift();
			}

			const proofs = arrayString.join('\n');

			const compiler = new Antlr();

			try {
				const compiledProofs = compiler.compile(proofs);

				const latex = compiler.preamble + heading + compiledProofs + compiler.postamble;

				resolver(latex);
			} catch(error) {
				rejecter(error);
			}
		} else {
			rejecter('Insufficient amount of headers.');
		}

		return promise;
	};
};

const instance = new LaTeX();

export { instance as LaTeX };