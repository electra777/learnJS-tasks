'use strict';

let arr = ['a', 'b'];

arr.push(function () {
	console.log(this);
});

arr[2](); // выведет 3 элемента массива, включая добавленную функцию
