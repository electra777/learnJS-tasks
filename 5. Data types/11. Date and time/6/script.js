'use strict';

function getSecondsToday() {
	let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let different = now - today;

	return Math.round(different / 1000);
}

console.log(getSecondsToday());

// function getSecondsToday() {
//   let d = new Date();
//   return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }
