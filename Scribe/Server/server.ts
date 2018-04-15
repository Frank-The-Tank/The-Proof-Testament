// @ts-ignore
var app = require('./app');
var port = 4201;

var server = app.listen(port, () => {
	console.log('Express server listening on port ' + port);
});