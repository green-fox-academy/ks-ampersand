'use strict';

// Turn the party on and off by clicking the button. (the whole page)

let button = document.querySelector('button');
let div = document.querySelector('div');

div.classList.value = '';

button.onclick = () => {
  if (div.classList.value === '') {
    div.classList.value = 'party';
  } else {
    div.classList.value = '';
  }
};
