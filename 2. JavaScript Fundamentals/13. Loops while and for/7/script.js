'use strict';

let n = prompt('Введи n', 5);

outer: for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue outer;
	}
	alert(`простое число ${i}`);
}
