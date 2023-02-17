'use strict';

function getMinNum(a, b) {
	return a < b ? a : b;
}

console.log(getMinNum(2, 5));
console.log(getMinNum(3, -1));
console.log(getMinNum(1, 1));

function getMinNumAnother(a, b) {
	if (a <= b) {
		return a;
	} else {
		return b;
	}
}

console.log(getMinNumAnother(2, 5));
console.log(getMinNumAnother(3, -1));
console.log(getMinNumAnother(1, 1));
