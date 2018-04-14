import { AbstractScribe as scribe } from './Scribe';

import { PDF } from './Scribes/PDF';
import { RTF } from './Scribes/RTF';

const input = `
Name: Micah Benn
Pin: 02
Course: Math 221
Assignment: 1

Prove (3.1)
by assuming the conjuncts of the antecedent 

Proof:
     p ⇒ q
⇒          〈 1 〉
     p
`

scribe.setScribe(PDF);

scribe.write(input).then((result) => {
	console.log(result);
}).catch((error) => {
	console.log(error);
});