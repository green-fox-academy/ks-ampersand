'use strict';
export {};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;
let fs = require('fs');
let ut: string = 'utf-8'
let result = fs.readFileSync('log.txt', ut);


  function returnIp(logFile: string, ut: string) {
  let wholeLogByLine: string[] = result.split('\n');
  let justIp: string[] = [];
  for (let i: number = 0; i < wholeLogByLine.length; i++) {
    justIp.push(wholeLogByLine[i].slice(27, 38));
   
  }
  justIp = justIp.sort();
  let uniqueIp: string[] = [];
  for (let j: number = 0; j < justIp.length; j++) {
    if (justIp[j] !== justIp[j+1]) {
      uniqueIp.push(justIp[j])
    }
  }
  return uniqueIp
}
console.log(returnIp('log.txt', ut));



function methodRatio(logFile: string, ut: string) {
  let wholeLogBySpace: string[] = result.split(' ');
  let post: string[] = [];
  let get: string[] = [];
  wholeLogBySpace.forEach(element => {
    if (element === 'POST') {
      post.push(wholeLogBySpace[element]);

    } else if (element === 'GET') {
      get.push(wholeLogBySpace[element]);
    }
  });
  return get.length / post.length;
}

console.log(methodRatio('log.txt', ut));
