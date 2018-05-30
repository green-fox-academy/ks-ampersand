'use strict';

import { Plants } from './plants';

class Tree extends Plants {
type: string = 'Tree';

  constructor(colorName){
  super(colorName)
  this.waterNeed = 10;
  }

  absorbWater(water: number) {
    this.waterAmount += water * 0.4;
  }
}

export { Tree };