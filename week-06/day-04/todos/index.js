'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

const chores = [
  'get up',
  'survive',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('home', {
    tasks: chores,  
  })
})

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
});
