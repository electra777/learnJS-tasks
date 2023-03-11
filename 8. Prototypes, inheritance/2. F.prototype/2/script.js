'use strict';

function Rabbit(name) {
	this.name = name;
}

let rabbit = new Rabbit('White');
let rabbit2 = new rabbit.constructor('Black');

console.log(rabbit2.name);

// Rabbit.prototype = {};

// let rabbit3 = new Rabbit('Blue');
// let rabbit4 = new rabbit3.constructor('Yellow');

// console.log(rabbit4.name);
