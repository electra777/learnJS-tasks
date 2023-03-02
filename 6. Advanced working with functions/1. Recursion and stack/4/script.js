'use strict';

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

function printListByCycle(list) {
	let tmp = list;

	while (tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
}

console.log(printListByCycle(list));

function printListByRecursion(list) {
	console.log(list.value);
	if (list.next) {
		printListByRecursion(list.next);
	}
}

console.log(printListByRecursion(list));
