const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));


//running the pretty website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})


//doubling exercise
app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      error: 'Please provide an input!'
    });
  } else {
    res.json({
      received: req.query.input,
      result: req.query.input * 2
    });
  }
});

//greeter exercise

/* const name = req.query.name;
const title = req.query.title; */
app.get('/greeter', (req, res) => {
  if (req.query.name === undefined) {
    res.json({
      error: 'Please provide a name!'
    })
  } else if (req.query.title === undefined) {
    res.json({
      error: 'Please provide a title!'
    })
  } else {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  }
});

//append-a exercise

app.get('/appenda/:input', (req, res) => {
  if (req.params.input === undefined) {
    res.sendStatus(404);
  } else {
    res.json({
      appended: `${req.params.input}a`
    })
  }
});

//do-until exercise

function fact(num) {
  let multiply = 1;
  for (let i = 1; i < num; i++) {
    multiply *= i;
  }
  return multiply;
}

function sum(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  return sum;
}

app.post('/dountil/:what', (req, res) => {
  const what = req.params.what;
  let input = req.body.until;

  if (what === 'factor') {
    res.json({
      input,
      result: fact(input),
      message: 'I see you'
    })
  } else if (what === 'sum') {
    res.json({
      input: input,
      result: sum(input),
      message: 'I see you'
    })
  } else if (input === undefined) {
    res.json({
      error: 'Please provide a number!'
    })
  }
});



module.exports = app;
