'use strict';

let calculator = {
	read() {
		this.a = +prompt('Введите a', '');
		this.b = +prompt('Введите b', '');
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Second time learning

let calculator2 = {
	read() {
		this.a = +prompt('Введи число а', 0);
		this.b = +prompt('Введи число b', 0);
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},
};
