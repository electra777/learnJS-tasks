'use strict';

let menuElem = document.querySelector('#sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
	menuElem.classList.toggle('open');
};
