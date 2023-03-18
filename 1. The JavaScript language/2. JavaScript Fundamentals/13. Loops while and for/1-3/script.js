'use strict';

let i = 3;

while (i) {
	alert(i--);
}
//последнее значение 1

let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5

for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4
