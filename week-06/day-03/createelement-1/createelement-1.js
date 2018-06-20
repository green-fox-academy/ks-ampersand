'use strict';

// Add an item that says 'The Green Fox' to the asteroid list.

let newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';

let myAsteroidList = document.querySelector('ul');
myAsteroidList.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.

let lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter'
myAsteroidList.appendChild(lampLighter);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
let header = document.createElement('h1')
header  .textContent = 'I can add elements to the DOM! How awesome is that?';
let container = document.querySelector('div.container')
container.appendChild(header);

// Add an image, any image, to the container.

let newImage = document.createElement('img');
newImage.setAttribute('src', 'https://78.media.tumblr.com/0ee52031625763bde6d45fb874ab5ff5/tumblr_nptq18s09Q1uy95wbo1_500.gif');
container.appendChild(newImage);
