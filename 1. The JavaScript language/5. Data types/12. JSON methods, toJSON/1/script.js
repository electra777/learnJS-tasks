'use strict';

let user = {
	name: 'Василий Иванович',
	age: 35,
};

let anotherUser = JSON.parse(JSON.stringify(user));

console.log(anotherUser);
