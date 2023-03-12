'use strict';

let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

let midleWidth = field.clientWidth / 2 - ball.clientWidth / 2;
let midleHeight = field.scrollHeight / 2 - ball.scrollHeight / 2;

ball.style.left = midleWidth + 'px';
ball.style.top = midleHeight + 'px';

// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';
