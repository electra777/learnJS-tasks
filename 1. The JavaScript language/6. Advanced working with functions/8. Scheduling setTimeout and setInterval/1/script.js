'use strict';

function printNumbersInterval(from, to) {
	let current = from;

	let timerID = setInterval(() => {
		alert(current);
		current++;
		if (current > to) {
			clearInterval(timerID);
		}
	}, 1000);
}

printNumbersInterval(1, 7);

function printNumbersTimeout(from, to) {
	let current = from;

	let timerID = setTimeout(function sec() {
		alert(current);
		current++;
		if (current <= to) {
			timerID = setTimeout(sec, 1000);
		}
	}, 1000);
}

printNumbersTimeout(3, 5);

// function printNumbers(from, to) {
//   let current = from;

//   function go() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }

//   go();
//   let timerId = setInterval(go, 1000);
// }

// printNumbers(5, 10);
