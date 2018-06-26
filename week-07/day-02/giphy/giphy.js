'use strict';

const http = new XMLHttpRequest();
http.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=4p25Kxa0SpehWWCLRHneYLKd28yN17p3&q=dachhund&limit=20&offset=0&rating=G&lang=en', true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  const container = document.querySelector('#pics');

  response.data.forEach((element) => {
    const image = document.createElement('img');

    image.src = element.images.fixed_width_still.url;
    image.addEventListener('click', () => {
      image.setAttribute('src', element.images.fixed_height.url)
    })

    container.appendChild(image);
  })

}

const button = document.querySelector('#get_images')
button.addEventListener('click', () => {
  http.send();
})




