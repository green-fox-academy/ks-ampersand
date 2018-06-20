'use strict';

// Write the image's url to the console.

let image = document.querySelector('img');
console.log(image.getAttribute('src'));

// Replace the image with a picture of your favorite animal.

image.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Common_Seal_Phoca_vitulina.jpg/1200px-Common_Seal_Phoca_vitulina.jpg');
image.style.height = '394px';
image.style.width = '591px';

// Make the link point to the Green Fox Academy website.

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/');

// Disable the second button.

document.querySelector('.this-one').setAttribute('disabled', 'true');

// Replace its text with 'Don't click me!'.

document.querySelector('.this-one').innerHTML = 'Don\'t click me!'
