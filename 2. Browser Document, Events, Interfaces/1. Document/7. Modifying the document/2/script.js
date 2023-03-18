'use strict';

let elem = document.querySelector('#elem');

function clear(elem) {
	let lis = elem.querySelectorAll('li');

	for (let li of lis) {
		li.remove();
	}
}

clear(elem);

// function clear(elem) {
//   elem.innerHTML = '';
// }

// function clear(elem) {
//   while (elem.firstChild) {
//     elem.firstChild.remove();
//   }
// }
