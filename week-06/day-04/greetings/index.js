'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  //console.log(req.query);
  let name = 'Guest';
  if (req.query.name !== undefined) {
    name = req.query.name;
  }
  res.send(`Welcome back, ${name}!`);
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});