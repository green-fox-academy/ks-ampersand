'use strict';

import { Plants } from './plants';
import { Flower } from './flowers';
import { Tree } from './trees';

class Garden {

plants: any [];

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
    if (this.plants[i].returnWaterNeed()) {
      amntNeedWater++;
      } 
    }
  return amntNeedWater;
  }

  waterPlants(waterAmount: number){
    Math.floor(waterAmount / this.needWater());
    console.log(`Watering with ${waterAmount}`);
  }

  checkKellVizecskem() {
    for (let i: number = 0; i < this.plants.length; i++){
      this.plants[i].getWaterNeed();
    } 
  }
}

let pp = new Garden();
pp.createGarden();
pp.needWater();
pp.checkKellVizecskem();