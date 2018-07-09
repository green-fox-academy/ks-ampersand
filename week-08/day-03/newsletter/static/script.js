'use strict';

const http = new XMLHttpRequest();
const host = 'http://localhost:3000/'

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); //stop thee html form from executing the default event: reloading, writing the weird shit in the browser
  let userName = event.target.elements.username.value; //retreive the data from the form through the event
  let eMail = event.target.elements.email.value;
  http.open('post', host); // make out the http request , in this case it's a post request
  http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //set the communication language to json
  http.send(JSON.stringify
    ({ username: userName, email: eMail })); //make a string out of the json, send the data through json package to the server
  http.onload = () => {
    let result = JSON.parse(http.responseText); // we get the response from the server in a Json format, so we parse it back into the object that can be worked with in the JS
    console.log(result);
    document.querySelector('.response').innerHTML = result.message;
  };
});


