'use strict';

import { Plants } from './plants';

class Tree extends Plants {

  constructor(colorName: string) {
  super('Tree', colorName);
  this.waterNeed = 10;
  }

  absorbWater(water: number) {
    this.waterAmount += (water * 0.4);
  }
}

export { Tree };