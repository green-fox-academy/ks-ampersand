'use strict';
export {};

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;
let fs = require('fs');
let ut: string = 'utf-8'

function writeTo(file1: string, file2: string) {
  let content1 = fs.readFileSync(file1, ut);
  fs.writeFileSync(file2, content1);
  let content2 = fs.readFileSync(file2, ut);
  return content1 == content2
}

console.log(writeTo('file1.txt', 'file2.txt'));