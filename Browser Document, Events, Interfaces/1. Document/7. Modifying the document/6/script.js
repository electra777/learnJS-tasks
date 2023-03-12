'use strict';

let lis = document.querySelectorAll('li');

for (let li of lis) {
	let countChildLi = li.querySelectorAll('li').length;

	if (!countChildLi) continue;
	li.firstChild.data += `[${countChildLi}]`;
}
