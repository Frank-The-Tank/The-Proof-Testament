// scribe.js

const latex = require('node-latex');
const base64 = require('base64-stream');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

router.options('/', cors());

router.post('/', function(req, res){
	console.log(req.body.latex);
	
	const input = req.body.latex
	const output = base64.encode()
	
	const pdf = latex(input);
		
	var stream = pdf.pipe(output);
	
	const chunks = [];
	
	stream.on('data', (chunk) => {
		chunks.push(chunk.toString());
	});
	
	stream.on('end', () => {
		var base64PDF = chunks.join('');
		
		res.status(200).send({'pdf': base64PDF});

		console.log('Scribe processed PDF.')
	});
	
	pdf.on('error', (err) => {
		console.log("pdf error");
	});

	stream.on('error', (err) => {
		console.log("pdf error");
	});
});

module.exports = router;
