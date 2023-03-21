'use strict';

new Promise(function (resolve, reject) {
	setTimeout(() => {
		throw new Error('Whoops!');
	}, 1000);
}).catch(console.log());

// catch не перехватывает, т.к. ошибка генерируется позже (не по ходу выполнения кода)
