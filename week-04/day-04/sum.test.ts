'use strict';

import {test} from 'tape';
import { Numbers } from './sum';

test('Sum test 1: Core Functionality', t => {
  let testNumber = new Numbers;
  let testArray: number[] = [1, 3, 5];
  let runTestSum = testNumber.getSum(testArray);
  t.equal(runTestSum, 9);
  t.end();
});

test('Sum test 2: Empty array', t => {
  let testNumber2 = new Numbers;
  let testArray2: number[] = [];
  let runTestSum2 = testNumber2.getSum(testArray2);
  t.equal(runTestSum2, 0);
  t.end();
});

test('Sum test 3: one element', t => {
  let testNumber3 = new Numbers;
  let testArray3: number[] = [2];
  let runTestSum3 = testNumber3.getSum(testArray3);
  t.equal(runTestSum3, 2);
  t.end();
});

test('Sum test 4: with a null', t => {
  let testNumber4 = new Numbers;
  let testArray4: number[] = [null];
  let runTestSum4 = testNumber4.getSum(testArray4);
  t.equal(runTestSum4, 0);
  t.end();
});

// Test case 5:
//not sure how I can assign a string to an array of numbers?