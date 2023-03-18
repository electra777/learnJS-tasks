'use strict';

button.addEventListener('click', () => alert('1')); //запустится

button.removeEventListener('click', () => alert('1')); // не запустится, т.к. другая ф-ия

button.onclick = () => alert(2); //запустится
