'use strict';

export class Animals {
  hunger: number;
  thirst: number;
    constructor() {
      this.hunger = 50;
      this.thirst = 50;
    }
  eat() {
    this.hunger -= 1;  
  }
  drink()  {
    this.thirst -= 1;
  }
  play() {
    this.hunger += 1; 
    this.thirst += 1;
  }
}    

let lion = new Animals();
lion.play();
lion.eat();
console.log(lion.play());
