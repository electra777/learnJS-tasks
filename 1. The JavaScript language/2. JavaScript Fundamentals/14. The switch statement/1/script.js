'use strict';

let browser = prompt('what is the browser?', '');

if (browser === 'Edge') {
	alert('Youve got the Edge!');
} else if (
	browser === 'Chrome' ||
	browser === 'Firefox' ||
	browser === 'Safari' ||
	browser === 'Opera'
) {
	alert('Okay we support these browsers too');
} else alert('We hope that this page looks ok!');
