'use strict';

export class Counter {
  calc: number;
  constructor(calc: number = 0) {
    this.calc = calc;
  }
add(a?: number) {
  if (a === undefined) {
    this.calc++;
  } else {
  this.calc += a;
    }
  }
}

let thisN = new Counter();
thisN.add();
thisN.add(5);
console.log(thisN);
