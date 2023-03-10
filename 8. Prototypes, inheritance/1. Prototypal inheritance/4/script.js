'use strict';

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	},
};

let speedy = {
	stomach: [],
	__proto__: hamster,
};

let lazy = {
	stomach: [],
	__proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
// т.к. не было своего массива
console.log(lazy.stomach);
console.log(hamster.stomach);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     // присвоение значения this.stomach вместо вызова this.stomach.push
//     this.stomach = [food];
//   }
// };

// let speedy = {
//    __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Шустрый хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Живот ленивого хомяка пуст
// alert( lazy.stomach ); // <ничего>
