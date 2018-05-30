'use strict';

import { Plants } from './plants';

class Flower extends Plants {
type: string = 'Flower';

  constructor(colorName){
  super(colorName)
  this.waterNeed = 5;
  }

  absorbWater(water: number) {
    this.waterAmount += water * 0.75;
  }
}

export { Flower };