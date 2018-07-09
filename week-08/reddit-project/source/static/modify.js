'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000/'

console.log(window.location.href);
let href = window.location.href.split('?');
let id = href[1].split('=')[1];
let title = href[2].split('=')[1];
let url = href[3].split('=')[1];

let inputTitle = document.querySelector('.modifytitle');
let inputUrl = document.querySelector('.modifyurl');
let submitForm = document.querySelector('form');

inputTitle.value = title;
inputUrl.value = url;

submitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let newTitle = event.target.posttitle.value;
  let newUrl = event.target.posturl.value;

  http.open('put', `${host}modify/${id}`);
  http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  http.send(JSON.stringify
    ({ title: newTitle, url: newUrl }));
  http.onload = () => {
    window.location.replace("http://localhost:3000"); 
  }
});


