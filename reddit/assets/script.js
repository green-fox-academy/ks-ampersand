const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

//function to parse data

function getData(apiRoute, callback) {
  http.open('GET', `${host}${apiRoute}`, true);
  http.onload = () => {
    const result = JSON.parse(http.responseText);
    callback(result.reddit);
  };

  http.send();
}
