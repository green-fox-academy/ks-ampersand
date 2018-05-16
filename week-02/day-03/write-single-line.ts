'use strict';
export {};

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

declare function require(path: string): any;
let fs = require('fs');

{
  try {
    fs.writeFile('my-file.txt', 'Ksyusha');
  } catch(error) {
    console.log('Unable to write file: my-file.txt');
  }
}
