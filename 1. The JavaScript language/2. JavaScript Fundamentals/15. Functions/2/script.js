'use strict';

function checkAge(age) {
	return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age2) {
	return age2 > 18 || confirm('Родители разрешили?');
}
