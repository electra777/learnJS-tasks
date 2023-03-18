'use strict';

let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'];

function unique(arr) {
	let uniqueArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (uniqueArr.includes(arr[i])) continue;
		uniqueArr.push(arr[i]);
	}
	return uniqueArr;
}

console.log(unique(strings)); // кришна, харе, :-O

// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }
