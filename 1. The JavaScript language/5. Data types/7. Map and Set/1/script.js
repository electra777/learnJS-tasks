'use strict';

function unique(arr) {
	let set = new Set(arr);
	let uniqueArr = [];

	for (let item of set) {
		uniqueArr.push(item);
	}
	return uniqueArr;
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(values)); // Hare,Krishna,:-O

// function unique(arr) {
//   return Array.from(new Set(arr));
// }
