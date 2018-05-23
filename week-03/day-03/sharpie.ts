'use strict';

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;
    constructor(color: string, width: number) {
      this.inkAmount = 100;
    }
  use() {
    this.inkAmount -= 5;
  }
}

let pinkSharpie = new Sharpie('yellow', 3);
pinkSharpie.use();
console.log(pinkSharpie.inkAmount);
