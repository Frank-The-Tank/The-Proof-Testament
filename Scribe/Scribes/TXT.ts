const base64 = require('base64-stream');

var TXT = function() {
	this.write = function(input) {
		var resolver;
		var rejecter;

		const promise = new Promise((resolve, reject) => {
			resolver = resolve;
			rejecter = reject;
		});

		const output = Buffer.from(input).toString('base64');

		resolver(output);
		
		return promise;
	};
};

const instance = new TXT();

export { instance as TXT }