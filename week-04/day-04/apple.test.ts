'use strict';

import {test} from 'tape';
import { Apple } from './apple';

test('testing the apple', t => {
  let testApple = new Apple;
  let runTest = testApple.getApple();
  t.equal(runTest, 'this apple is yummy');
  t.end();
});