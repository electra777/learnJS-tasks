'use strict';

let hider = document.querySelector('#hider');
let text = document.querySelector('#text');

hider.onclick = function () {
	text.style.display = 'none';
};
