'use strict';

function fib(n) {
	let res = 0;
	let curr = 1;
	let prev = 1;

	if (n == 1 || n == 2) res = 1;

	for (let i = 3; i <= n; i++) {
		res = curr + prev;
		prev = curr;
		curr = res;
	}
	return res;
}

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

//1, 1, 2, 3, 5, 8, 13, 21..

function fibByRec(n) {
	if (n <= 1) return n;
	else {
		return fibByRec(n - 1) + fibByRec(n - 2);
	}
}

console.log(fibByRec(2)); // 1
console.log(fibByRec(3)); // 2
console.log(fibByRec(7)); // 13
// console.log(fibByRec(77)); // 5527939700884757

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
