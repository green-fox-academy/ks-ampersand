const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));


//render the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

//hello --> return `Hello world`
app.get('/hello', (req, res) => {
  res.send('What\'s up folks?');
})



module.exports = app;
