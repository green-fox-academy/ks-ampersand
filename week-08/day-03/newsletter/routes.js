const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static('static')); //set up the static folder
app.use(express.json()); //create Json from the Json body

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
})

let signups = [];

app.post('/', (req, res) => {
  let signupData = { username: req.body.username, email: req.body.email };
  signups.push(signupData);
  let responseMessage = `Thanks ${req.body.username}, we will send updates to ${req.body.email}!`; //OR Thanks ${signups[signups.length - 1].username}, we will send updates to ${signups[signups.length - 1].email}`
  res.json({
    message: responseMessage,
  });
});

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/list.html'));
});

app.get('/api/signups', (req, res) => {
  res.json({        //nothing is coming from frontend
    users: signups,
  });                
});


module.exports = app;
