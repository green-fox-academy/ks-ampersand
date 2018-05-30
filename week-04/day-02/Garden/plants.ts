'use strict';

class Plants {
  protected colorName: string;
  protected waterNeed: number;
  protected waterAmount: number;
  protected type: string;

  constructor(colorName: string) {
    this.colorName = colorName;
    this.waterNeed = 0;
    this.waterAmount = 0;
  }

  getWaterNeed() {
    if (this.waterAmount < this.waterNeed) {
      console.log(`The ${this.colorName} ${this.type} needs water`);
    } else {console.log(`The ${this.colorName} ${this.type} doesn't need water`);
    }
  }

  returnWaterNeed(): boolean {
    if (this.waterAmount < this.waterNeed) {
    return true;
    }
  }
}

export { Plants };