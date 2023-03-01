'use strict';

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
	let map = new Map();

	for (let item of arr) {
		let word = item.toLowerCase().split('').sort().join('');
		map.set(word, item);
	}
	return Array.from(map.values());
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
