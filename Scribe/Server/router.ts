import { AbstractScribe as scribe } from '../Scribe';

import { PDF } from '../Scribes/PDF';
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
		rtf: RTF
	};

	scribe.setScribe(scribes[type]);

	scribe.write(text).then((result) => {
		console.log(result);

		res.status(200).send({"base64": result});
	}).catch((error) => {
		console.log(error);

		res.status(501).send();
	});
});

module.exports = router;