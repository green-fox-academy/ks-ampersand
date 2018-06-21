'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Such a smart demon!');
});

app.listen(PORT, () => {
  console.log(`Nice, I'm running on port ${PORT}`)
});
