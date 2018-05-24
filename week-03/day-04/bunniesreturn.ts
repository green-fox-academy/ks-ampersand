'use strict';

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars(bunny: number): number {
  if (bunny === 0) {
    return 0;
  }
  console.log(bunny);
  
  if (bunny % 2 === 0) {
    return 2 + bunnyEars(bunny - 1);
  } else {
    return 3 + bunnyEars(bunny - 1);
  }
  
  //nice solution from Balazs
  /*let ears = bunny % 2 === 0 ? 2 : 3;
  return ears + bunnyEars(bunny - 1); */
}
console.log(bunnyEars(4));

