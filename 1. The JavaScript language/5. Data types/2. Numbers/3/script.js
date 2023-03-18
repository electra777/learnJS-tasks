'use strict';

function readNumber() {
	let num;
	for (;;) {
		num = prompt('Введите число', '0');
		if (num === null || num === '') return null;
		else if (isFinite(num)) return +num;
	}
}

alert(`Число: ${readNumber()}`);
