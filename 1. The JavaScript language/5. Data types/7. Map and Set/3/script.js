'use strict';

let map = new Map();

map.set('name', 'John');

let keys = [];

for (let item of map.keys()) {
	keys.push(item);
}

keys.push('more');

console.log(keys);

// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");

// alert(keys); // name, more
