'use strict';

import { Animals, layingEggs } from './animals'; 

class Bird extends Animals {
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
} 

export { Bird };
