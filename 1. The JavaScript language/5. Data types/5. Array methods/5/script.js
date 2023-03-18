'use strict';

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

function copySorted(arr) {
	let sortArr = arr.slice(arr);
	return sortArr.sort();
}

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)

// function copySorted(arr) {
//   return arr.slice().sort();
// }
