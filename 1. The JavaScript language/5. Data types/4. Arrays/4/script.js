'use strict';

function sumInput() {
	let num;
	let arr = [];
	let sum = 0;
	for (;;) {
		num = prompt('Введите значение', '');
		if (num === null || num === '' || !isFinite(num)) break;
		arr.push(+num);
	}
	for (let item of arr) {
		sum += item;
	}
	return sum;
}
alert(sumInput());
