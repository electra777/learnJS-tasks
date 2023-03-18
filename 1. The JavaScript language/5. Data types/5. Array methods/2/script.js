'use strict';

function filterRange(arr, a, b) {
	let newArr = [];

	for (let item of arr) {
		if (item >= a && item <= b) newArr.push(item);
	}

	return newArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

// function filterRange(arr, a, b) {
//   // добавлены скобки вокруг выражения для улучшения читабельности
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
