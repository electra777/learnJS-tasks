'use strict';

let one = document.querySelector('#one');
let two = document.createElement('li');

two.textContent = '2';
one.after(two);

let three = document.createElement('li');
three.textContent = '3';
two.after(three);

// one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
