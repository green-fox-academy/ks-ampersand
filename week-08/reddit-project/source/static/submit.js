'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000/';

let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let postTitle = event.target.elements.posttitle.value;
  let postUrl = event.target.elements.posturl.value;
  http.open('POST', `${host}posts`);
  http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //set the communication language to json
  http.send(JSON.stringify({
    title: postTitle,
    url: postUrl
  }));

  window.location.replace("http://localhost:3000");
});

