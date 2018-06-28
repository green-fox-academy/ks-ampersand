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
app.use('/assets', express.static('assets'));


//render the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

//hello --> return `Hello world`
app.get('/hello', (req, res) => {
  res.send('What\'s up folks?');
})

//get posts
app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.json({
      posts,
    });
  });
});

//send post request with the new data
app.post('/posts', (req, res) => {
  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}','${req.body.url}')`;

  conn.query(sql, (err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    sql = `SELECT * FROM posts WHERE id = ${posts.insertId}`;

    conn.query(sql, (err, posts) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        posts,
      })
    });
  });
});

//upvote logic
app.post('/posts/:id/upvote', (req, res) => {
  let id = req.params.id;
  let sql = `UPDATE posts SET score = score + 1, vote = "1" WHERE id="${id}";`;

  conn.query(sql, (err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    sql = `SELECT * FROM posts WHERE id = '${id}'`;
    conn.query(sql, (err, posts) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json({
        posts,
      });
    });
  });
});

module.exports = app;
