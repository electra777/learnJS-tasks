'use strict';

let ul = document.createElement('ul');
let body = document.querySelector('body');
body.append(ul);

for (;;) {
	let text = prompt('Введите содержимое пункта', '');

	if (text == '' || text == null) break;

	let li = document.createElement('li');
	ul.append(li);
	li.textContent = text;
}
