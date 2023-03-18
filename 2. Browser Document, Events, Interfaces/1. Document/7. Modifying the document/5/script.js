'use strict';

let data = {
	Рыбы: {
		форель: {},
		лосось: {},
	},

	Деревья: {
		Огромные: {
			секвойя: {},
			дуб: {},
		},
		Цветковые: {
			яблоня: {},
			магнолия: {},
		},
	},
};

function createTree(container, data) {
	container.append(createTreeDom(data));
}

function createTreeDom(data) {
	if (!Object.keys(data).length) return;

	let ul = document.createElement('ul');

	for (let item in data) {
		let li = document.createElement('li');
		li.append(ul);
		li.textContent = item;

		let childrenUl = createTreeDom(data[item]);
		if (childrenUl) {
			li.append(childrenUl);
		}

		ul.append(li);
	}
	return ul;
}

let container = document.getElementById('container');

createTree(container, data); // создаёт дерево в контейнере

// function createTree(container, obj) {
// 	container.innerHTML = createTreeText(obj);
// }

// function createTreeText(obj) { // отдельная рекурсивная функция
// 	let li = '';
// 	let ul;
// 	for (let key in obj) {
// 		li += '<li>' + key + createTreeText(obj[key]) + '</li>';
// 	}
// 	if (li) {
// 		ul = '<ul>' + li + '</ul>'
// 	}
// 	return ul || '';
// }

// createTree(container, data);
