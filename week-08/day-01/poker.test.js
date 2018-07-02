'use strict';

const test = require('tape');
const checkTheWinner = require('./poker');
const checkIfFlush = require('./poker');

let blackHand = ['2D', '5D'];
let whiteHand = ['2C', 'AH'];

test('Get highest value', (t) => {
  t.equal(checkTheWinner(blackHand, whiteHand), 'Black wins!');
  t.end();
}); 

test('Check if flush', (t) => {
  t.equal(checkIfFlush(blackHand), true);
  t.end();
})

