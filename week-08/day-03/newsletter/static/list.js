'use strict';

const http = new XMLHttpRequest;
const host = 'http://localhost:3000/api/signups';
const ul = document.querySelector('ul');

http.open('get', host);
http.onload = () => {
  let result = JSON.parse(http.responseText);
  console.log(result);
  result.users.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = `Name: ${element.username}, email: ${element.email}`;
    ul.appendChild(li);
  });
}
http.send();

