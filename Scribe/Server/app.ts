const express = require('express');
const app = express();

const router = require('./router');

app.use('/scribe', router);

module.exports = app;