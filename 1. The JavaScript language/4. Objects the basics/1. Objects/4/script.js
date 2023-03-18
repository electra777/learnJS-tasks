'use strict';

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function calcSalaries(obj) {
	let result = 0;

	for (const key in obj) {
		result += obj[key];
	}
	return result;
}

console.log(calcSalaries(salaries));
