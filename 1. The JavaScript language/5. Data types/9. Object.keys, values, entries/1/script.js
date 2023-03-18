'use strict';

let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

function sumSalaries(salaries) {
	let sum = 0;

	for (let item of Object.values(salaries)) {
		sum += item;
	}
	return sum;
}

console.log(sumSalaries(salaries)); // 650

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }
