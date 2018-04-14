var AbstractScribe = function() {
	this.scribe = "";
};

AbstractScribe.prototype = {
	setScribe: function(scribe) {
		this.scribe = scribe;
	},

	/*
	 * @desc converts to a document format
	 * @param string - the string to convert
	 * @return string - base64-encoded string of converted document
	*/
	write: function(string) {
		return this.scribe.write(string);
	}
};

const instance = new AbstractScribe();

export { instance as AbstractScribe }