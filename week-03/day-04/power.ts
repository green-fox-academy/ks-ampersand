'use strict';

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(n: number, b: number): number {
  if (b === 0) {
    return 1;
  }
  console.log(n);
  console.log(b);
  return n * power(n, b - 1)
  
}
console.log(power(3, 4));
