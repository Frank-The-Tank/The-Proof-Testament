import { AbstractScribe as scribe } from '../AbstractScribe';

import { PDF } from '../Scribes/PDF';
import { TXT } from '../Scribes/TXT';
import { RTF } from '../Scribes/RTF';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const cors = require('cors');

router.use(bodyParser.json());
router.use(cors());

router.options('/', cors());

router.post('/:type', (req, res) => {
	const text = req.body.text;
	const type = req.params.type;
	
	const scribes = {
		pdf: PDF,
		txt: TXT,
		rtf: RTF
	};

	scribe.setScribe(scribes[type]);

	scribe.write(text).then((result) => {
		res.status(200).send({"base64": result});
	}).catch((error) => {
		console.log(error);

		res.status(501).send('Unable to process entry. Please check for valid formatting and headers.');
	});
});

module.exports = router;