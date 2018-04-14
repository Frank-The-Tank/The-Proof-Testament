import { AbstractScribe as scribe } from '../Scribe';

import { LaTeX } from './LaTeX';

const nodeLatex = require('node-latex');
const base64 = require('base64-stream');

var PDF = function() {
	this.write = function(string) {
		var resolver;
		var rejecter;
		
		scribe.setScribe(LaTeX);
		
		const promise = new Promise((resolve, reject) => {
			resolver = resolve;
			rejecter = reject;
		});
		
		scribe.write(string).then((result) => {
			const input = result;
			const output = base64.encode();
			
			const pdf = nodeLatex(input);
			const stream = pdf.pipe(output);
			
			const chunks = [];
			
			pdf.on('error', (error) => {
				rejecter(error);
			});

			stream.on('data', (chunk) => {
				chunks.push(chunk.toString());
			});
			
			stream.on('end', () => {
				const base64PDF = chunks.join('');

				resolver(base64PDF);
			});
			
			stream.on('error', (error) => {
				rejecter(error);
			});
		});
		
		return promise;
	};
};

const instance = new PDF();

export { instance as PDF };