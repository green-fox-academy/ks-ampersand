'use strict';

import { Plants } from './plants';
import { Flower } from './flowers';
import { Tree } from './trees';

class Garden {
plants: Plants [];

constructor(){
  this.plants = [];
}

createGarden() {
 this.plants.push(new Flower('yellow'));
 this.plants.push(new Flower('blue'));
 this.plants.push(new Tree('purple'));
 this.plants.push(new Tree('orange'));
}

needWater(): number {
  let amntNeedWater: number = 0;
  for (let i: number = 0; i < this.plants.length; i++){
    if (this.plants[i].returnWaterNeed() === true) {
        amntNeedWater++;
      } 
    }
  return amntNeedWater;
  }

  waterPlants(waterAmount: number): void {
    let portion: number = Math.floor(waterAmount / this.needWater());
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].returnWaterNeed()) {
      this.plants[i].modifyWaterAmount(portion);
      }
    }
    console.log(`Watering with ${waterAmount}`);
  }

  isNeedingWater() {
    for (let i: number = 0; i < this.plants.length; i++){
      this.plants[i].getWaterNeed(i);
    } 
  }
}

export { Garden };
