'use strict';

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;
    constructor(color: string, width: number, inkAmount: number = 100) {
      this.color = color;
      this.width = width;
      this.inkAmount = inkAmount;
    }
  use() {
    this.inkAmount -= 5;
  }
}

/* let pinkSharpie = new Sharpie('yellow', 3);
pinkSharpie.use();
console.log(pinkSharpie); */
