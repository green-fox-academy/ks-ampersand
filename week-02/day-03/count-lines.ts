'use strict';
export {};

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.


declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

function readFile(filePath: string, charEncoding: string) {
  try {
    let result: string = fs.readFileSync(filePath, charEncoding);
    let content: string[] = [];
    if (result !== null) {
        content = result.split('\n')
      } 
    //console.log(content.length);
    return content.length

  } catch(error) {
    return 0;
  }
}
console.log(readFile('my-file.txt', charEncoding));