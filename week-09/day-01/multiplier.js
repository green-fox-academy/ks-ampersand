'use strict';

// Create the multiplier function that you can use like this:

function multiplier(num) {
  return function(setNum) {
    return num * setNum;
  }
}

const duplicator = multiplier(2);

console.log(duplicator(5)); // should log 10
console.log(duplicator(10)); // should log 20

const threeTimes = multiplier(3);

console.log(threeTimes(5)); // should log 15
console.log(threeTimes(100)); // should log 300