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
	// console.log(req.body.results);
	
	const input = req.body.results
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
	});
	
	stream.on('error', (err) => {
		res.status(500).send(err);
	});
});

module.exports = router;