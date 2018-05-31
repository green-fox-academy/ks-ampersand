'use strict';

import { test } from 'tape';
import { makeDictionary } from './countletters';

test('simple single letter word', t => {
  let counter = makeDictionary('a');
  t.deepEqual(counter, {a: 1});
  t.end();
});

test('simple multiple same letter word', t => {
  let counter = makeDictionary('aab');
  t.deepEqual(counter, {a: 2, b: 1});
  t.end();
});

test('empty string', t => {
  let counter = makeDictionary('');
  t.deepEqual(counter, {});
  t.end();
});