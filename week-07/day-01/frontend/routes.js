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
  console.log(input)

  if (input === undefined) {
    res.json({
      error: 'Please provide a number!'
    })
  } else if (what === 'sum') {
    res.json({
      result: sum(input),
    })
  } else if (what === 'factor') {
    res.json({
      result: fact(input),
    })
  }
});

//arrays exercise

function sumMyArray(array) {
  let sumArray = 0;
  array.forEach(e => { sumArray += e });
  return sumArray;
}

function multiplyMyArray(array) {
  let multArray = 1;
  array.forEach(e => { multArray *= e });
  return multArray;
}

function doubleMyArray(array) {
  let newArray = array.map((e) => { return e *= 2 });
  return newArray;
}

app.post('/arrays/', (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;
  if (what === undefined) {
    res.json({
      error: 'Please provide What the hell to do with the numbers!',
    });
  } else if (numbers === undefined) {
    res.json({
      error: 'Please provide the Numbers to do the hell with!',
    });
  } else if (what === 'sum') {
    res.json({
      result: sumMyArray(numbers),
    });
  } else if (what === 'multiply') {
    res.json({
      result: multiplyMyArray(numbers),
    });
  } else if (what === 'double') {
    res.json({
      result: doubleMyArray(numbers),
    });
  }
});

module.exports = app;
