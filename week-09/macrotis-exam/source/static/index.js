'use strict';

const host = 'http://localhost:3000';

const get = new XMLHttpRequest();
get.open('GET', `${host}/attractions`, true);
get.onload = () => {
  const data = JSON.parse(get.responseText);

  data.forEach((attraction) => {      //use paranthesis for attraction!
    let table = document.querySelector('tbody');
    let row = document.createElement('tr');

    Object.keys(attraction).forEach(key => {
      if (key !== 'id') {
        let cell = document.createElement('td');
        cell.innerText = attraction[key];
        row.appendChild(cell);

      }
    });
    let button = document.createElement('button');
    button.innerText = 'Edit';
    row.appendChild(button);
    button.addEventListener('click', () => {
      document.querySelector('input[name="identification"]').value = `${attraction.id}`;
      document.querySelector('input[name="name"]').value = `${attraction.attr_name}`;
      document.querySelector('input[name="city"]').value = `${attraction.city}`;
      document.querySelector('input[name="price"]').value = `${attraction.price}`;
      document.querySelector('input[name="longitude"]').value = `${attraction.longitude}`;
      document.querySelector('input[name="lattitude"]').value = `${attraction.lattitude}`;
      document.querySelector('input[name="category"]').value = `${attraction.category}`;
      document.querySelector('input[name="duration"]').value = `${attraction.duration}`;
      document.querySelector('input[name="age"]').value = `${attraction.recommended_age}`;
    });
    table.appendChild(row);
  });
}
get.send();

const post = new XMLHttpRequest();
const submitButt = document.querySelector('form');

submitButt.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
  
post.open('POST', `${host}/add`);
post.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //set the communication language to json

const {identification, name, city, price, lattitude, longitude, category, duration, age } = event.target.elements;

post.send(JSON.stringify({
    id: identification.value,
    name: name.value, 
    city: city.value, 
    price: price.value, 
    lattitude: lattitude.value, 
    longitude: longitude.value, 
    category: category.value, 
    duration: duration.value, 
    age: age.value,

  })); 
});
