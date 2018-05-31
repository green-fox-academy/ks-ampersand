'use strict';

class Plants {
  protected colorName: string;
  protected waterNeed: number;
  protected waterAmount: number;
  protected type: string;

  constructor(type: string, colorName: string) {
    this.type = type;
    this.colorName = colorName;
    this.waterAmount = 0;
  }

  modifyWaterAmount(n: number) {
    this.waterAmount += n;
  }

  getWaterNeed(i: number) {
    if (this.waterAmount < this.waterNeed) {
      console.log(`${i} The ${this.colorName} ${this.type} needs water`);
    } else {
      console.log(`${i} The ${this.colorName} ${this.type} doesn't need water`);
    }
  }

  returnWaterNeed(): boolean {
    if (this.waterAmount < this.waterNeed) {
      return true;
    } else {
      return false;
    }
  }
}

export { Plants };