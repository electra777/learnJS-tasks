'use strict';

function formatDate(date) {
	let different = new Date() - date;
	let sec = Math.floor(different / 1000);
	let min = Math.floor(different / 60000);

	if (different < 1000) {
		return 'прямо сейчас';
	}

	if (sec < 60) {
		return sec + ' сек. назад';
	}

	if (min < 60) {
		return min + ' мин. назад';
	}

	let d = date;
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes(),
	].map((component) => component.slice(-2));
	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

//
// function formatDate(date) {
//   let dayOfMonth = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let diffMs = new Date() - date;
//   let diffSec = Math.round(diffMs / 1000);
//   let diffMin = diffSec / 60;
//   let diffHour = diffMin / 60;

//   // форматирование
//   year = year.toString().slice(-2);
//   month = month < 10 ? '0' + month : month;
//   dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
//   hour = hour < 10 ? '0' + hour : hour;
//   minutes = minutes < 10 ? '0' + minutes : minutes;

//   if (diffSec < 1) {
//     return 'прямо сейчас';
//   } else if (diffMin < 1) {
//     return `${diffSec} сек. назад`
//   } else if (diffHour < 1) {
//     return `${diffMin} мин. назад`
//   } else {
//     return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
//   }
// }
