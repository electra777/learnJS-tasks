'use strict';

function sum(a) {
	let sum = a;

	function func(b) {
		sum += b;
		return func;
	}

	func.toString = function () {
		return sum;
	};

	return func;
}

alert(sum(1)(2));
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));
