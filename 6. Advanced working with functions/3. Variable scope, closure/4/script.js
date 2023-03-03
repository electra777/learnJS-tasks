'use strict';

// let a = 3;
// let b = 5;

// (function () {
// 	console.log(a);
// 	console.log(b);
// 	return console.log(a + b);
// })(a, b);

function sum(a) {
	return function (b) {
		return a + b;
	};
}

console.log(sum(3)(5));
