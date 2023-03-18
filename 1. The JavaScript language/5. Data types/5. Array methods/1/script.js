'use strict';

function camelize(str) {
	let arr = str.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '-') {
			arr.splice(i, 1);
			arr[i] = arr[i].toUpperCase();
		}
	}
	return arr.join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
