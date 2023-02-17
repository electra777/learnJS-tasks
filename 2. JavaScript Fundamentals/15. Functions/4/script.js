'use strict';

let x = +prompt('Введите x', '');
let n = +prompt('Введите n', '');

if (x < 1 || x !== Math.round(x) || n < 1 || n !== Math.round(n)) {
	alert('Введите целые числа');
} else alert(pow(x, n));

function pow(x, n) {
	let res = x;
	for (let i = 1; i < n; i++) {
		res *= x;
	}
	return res;
}
