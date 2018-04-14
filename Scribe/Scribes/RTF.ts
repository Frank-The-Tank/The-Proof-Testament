var RTF = function() {
	this.write = function(string) {
		var resolver;
		var rejecter;

		const promise = new Promise((resolve, reject) => {
			resolver = resolve;
			rejecter = reject;
		});

		// Convert to RTF...

		// On sucess, resolver(<base64-encoded-rtf>)

		// On failure, rejecter(<error>)
		
		return promise;
	};
}

const instance = new RTF();

export { instance as RTF }