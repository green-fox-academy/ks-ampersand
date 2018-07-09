const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(express.json());
app.use('/views', express.static('views'));
app.use('/static', express.static('static'));

//render the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

//add attractions to the page
app.post('/add', (req, res) => {
  let query = [req.body.name, req.body.city, req.body.category, req.body.price, req.body.longitude, req.body.lattitude, req.body.age, req.body.duration];
  if (req.body.id) {
    let sql = `UPDATE attractions SET attr_name = ?, city = ?, category = ?, price = ?, longitude = ?, lattitude =?, recommended_age = ?, duration = ? WHERE id="${req.body.id}";`;
  } else {
    let sql = `INSERT INTO attractions (attr_name, city, category, price, longitude, lattitude, recommended_age, duration) VALUES ('${req.body.name}, ${req.body.city}, ${req.body.category}, ${req.body.price}, ${req.body.longitude}, ${req.body.lattitude}, ${req.body.age}, ${req.body.duration}')`;
  }

  conn.query(sql, query, (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    sql =  `SELECT id FROM attractions WHERE attr_name = '${req.body.name}'`;

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        status: 'Ok',
        id,
      });
    })
  });
});

module.exports = app;
