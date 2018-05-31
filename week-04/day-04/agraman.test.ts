'use strict';

import { test } from 'tape';
import { getAnagram } from './agraman';

test('Test the anagram', t => {
  let testString1 = 'blabla';
  let testString2 = 'ablabl';
  let runTest = getAnagram(testString1, testString2);
  t.equal(runTest, true);
  t.end();
});
