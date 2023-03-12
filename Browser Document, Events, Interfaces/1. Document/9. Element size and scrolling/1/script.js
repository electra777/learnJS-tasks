'use strict';

if (elem.scrollHeight == clientHeight || elem.scrollHeight == scrollTop + elem.clientHeight) {
	elem.scrollBottom = 0;
}
elem.scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
