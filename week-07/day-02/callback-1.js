'use strict';

const mapWith = (array, callback) => {
  let output = [];
  output = (array.map(e => callback(e)));
  return output
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which remove every second letter from a string

const removeSecondLetter = (string) => {
  let str = string.split('');
  let nth = 2;
  for (let i = 1; i < str.length - 1; i += nth) {
    str[i] = ''
  }
  return str.join('');
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']