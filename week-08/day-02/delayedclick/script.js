'use strict';

const main = document.querySelector('p');
const button = document.querySelector('button');

function showTimeElapsed() {
  main.innerHTML = '2 seconds elapsed';
}

button.addEventListener('click', () => {
  setTimeout(() => showTimeElapsed(), 2000);
});
