'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let b: number;

function divide(b): number {
  if (b === 0) {
    console.log('fail')
    return 0
  } else {
  return 10 / b; 
  }
}

console.log(divide(0));
