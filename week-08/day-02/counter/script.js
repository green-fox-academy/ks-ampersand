'use strict';

/* 
On the click of the button,
Count the items in the list
And display the result in the result element. */

const ul = document.querySelector('ul');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  const liNum = ul.childElementCount;
  result.innerHTML = `This list has ${liNum} items`;
});

