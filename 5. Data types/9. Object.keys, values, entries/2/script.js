'use strict';

let user = {
	name: 'John',
	age: 30,
};

function count(obj) {
	let count = 0;

	for (let index of Object.keys(obj)) {
		if (index) count++;
	}
	return count;
}

console.log(count(user)); // 2

// function count(obj) {
//   return Object.keys(obj).length;
// }
