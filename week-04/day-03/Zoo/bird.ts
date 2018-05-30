'use strict';

import { Animals, layingEggs } from './animals'; 
import { Flyable } from '../Flyable/flyable'; 

class Bird extends Animals implements Flyable {
  feathers: boolean;
  
  buildNest(){
    console.log(`${this.name} is now ready to lay eggs`);
  };

  layEgg() {
    return `laying eggs`;
  }
  
  breed() {
    return this.layEgg();
  }

  fly() {
    return `The ${this.name} is happily landing`;
  }

  takeOff() {
    return `The ${this.name} is happily taking off`;
  }

  land() {
    return `The ${this.name} is happily landing`;
  }
} 

export { Bird };
