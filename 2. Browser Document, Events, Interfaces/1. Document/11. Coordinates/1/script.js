'use strict';

document.onclick = function (e) {
	// показывает координаты точки клика
	coords.innerHTML = e.clientX + ':' + e.clientY;
};

let fieldCoords = field.getBoundingClientRect();

let one = [fieldCoords.left, fieldCoords.top];
let two = [fieldCoords.right, fieldCoords.bottom];
let three = [fieldCoords.left + field.clientLeft, fieldCoords.top + field.clientTop];
let four = [
	fieldCoords.left + field.clientLeft + field.clientWidth,
	fieldCoords.top + field.clientTop + field.clientHeight,
];

console.log(one);
console.log(two);
console.log(three);
console.log(four);
