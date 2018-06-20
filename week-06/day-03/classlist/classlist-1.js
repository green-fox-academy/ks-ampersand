'use strict';

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

let randomThings = document.querySelectorAll('p');

if (randomThings[3].classList.value === 'dolphin') {
  randomThings[0].innerText = 'pear';
}

// If the first p has an 'apple' class, replace cat's content with 'dog'

if (randomThings[0].classList.value === 'apple') {
  randomThings[2].innerText = 'dog';
}

// Make apple red by adding a .red class

randomThings[0].classList.add('red');

// Make balloon less balloon-like

randomThings[1].classList.remove('balloon');
