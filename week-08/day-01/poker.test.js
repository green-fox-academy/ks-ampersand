'use strict';

const test = require('tape');
const poker = require('./poker');

test('test', (t) => {
  t.equal(poker.sumValues, 0);
  t.end();
})