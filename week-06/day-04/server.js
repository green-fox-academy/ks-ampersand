'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.get('/greet/:message', (req, res) => {
  console.log(req.query)
  let name = 'Fox';
  res.send(`${req.params.message}, ${req.query.name}`);
});

app.listen(PORT, () => {
  console.log(`Nice, I'm running on port ${PORT}`)
});
