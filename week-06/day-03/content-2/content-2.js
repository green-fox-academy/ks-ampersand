'use strict';

//1) replace the list items' content with items from this list:
//['apple', 'banana', 'cat', 'dog']

let awesomeNatureList = ['apple', 'banana', 'cat', 'dog'];
let curContent = document.querySelectorAll('li');

curContent.forEach((element, index) => {
  element.innerHTML = awesomeNatureList[index];
})

//2) change the <ul> element's background color to 'limegreen'
// - use css class to change the color instead of the style property

let listEl = document.querySelector('ul');
listEl.style.backgroundColor = 'limegreen';
