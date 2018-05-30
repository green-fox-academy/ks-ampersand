'use strict';

import { Animals, layingEggs } from './animals'; 

class Reptile extends Animals implements layingEggs {
  shedsSkin: boolean;
  breed() {
    return this.layEgg();
  }

  layEgg() {
    return `laying eggs`;
  }

} 

export { Reptile };
