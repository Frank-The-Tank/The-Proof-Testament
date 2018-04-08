// server.js

var app = require('./app');
var port = 4201;

var server = app.listen(port, function() {
	console.log('Express server listening on port 4201');
});