'use strict';

function factorial(n) {
	if (n == 1) return n;
	else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(5));

function factorialByCycle(n) {
	let fac = 1;
	for (let i = 1; i <= n; i++) {
		fac *= i;
	}
	return fac;
}

console.log(factorialByCycle(5));

// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
