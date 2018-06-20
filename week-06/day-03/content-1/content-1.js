'use strict';

//fill every paragraph with the last one's content.

let content = document.querySelectorAll('p');
let element = content[content.length - 1];

for(let i = 0; i < content.length - 1; i++) {
  console.log(content[i]);
  content[i].innerText = element.innerText;
}

//fill every paragraph with the last one's content keeping the cat strong.

let contentHtml = document.querySelectorAll('p');
let elementHtml = contentHtml[content.length - 1];

for(let i = 0; i < contentHtml.length - 1; i++) {
  console.log(contentHtml[i]);
  contentHtml[i].innerHTML = elementHtml.innerHTML;
}

