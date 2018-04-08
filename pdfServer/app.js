// app.js

var express = require('express');
var app = express();

var Scribe = require('./scribe');

app.use('/scribe', Scribe);

module.exports = app;