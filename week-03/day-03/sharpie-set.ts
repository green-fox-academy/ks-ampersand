/* Reuse your Sharpie class
Create SharpieSet class
 -it contains a list of Sharpie
 -countUsable() -> sharpie is usable if it has ink in it
 -removeTrash() -> removes all unusable sharpies */

import { Sharpie } from './sharpie';

class SharpieSet {
  sharpies: Sharpie[] = [];
  countUsable() {
    let usable = [];
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount > 0) {
        usable.push(this.sharpies[i]);
      }  
    }
    return usable;
  }
  removeTrash() {
    for (let j: number = 0; j < this.sharpies.length; j++) {
      if (this.sharpies[j].inkAmount <= 0) {
        this.sharpies.splice(j, 1);
      }
    }
    return this.sharpies;
  }
}

let container = new SharpieSet();
let yellow = new Sharpie('yellow', 7);
let pink = new Sharpie('pink', 0.4);
let rainbow = new Sharpie('rainbow', 2, 0);
let black = new Sharpie('black', 2)

container.sharpies.push(yellow);
container.sharpies.push(pink);
container.sharpies.push(rainbow);
container.sharpies.push(black);

console.log(container.countUsable());

container.removeTrash();
console.log(container);

