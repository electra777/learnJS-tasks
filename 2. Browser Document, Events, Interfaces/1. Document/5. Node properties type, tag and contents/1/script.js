'use strict';

let liAll = document.querySelectorAll('li');

for (let li of liAll) {
	alert(li.firstChild.data.trim() + ': ' + li.querySelectorAll('li').length);
}
