'use strict';

import { Flyable } from './flyable';
import { Vehicle } from './vehicle';

class Helicopter extends Vehicle implements Flyable {
  constructor(typeOfVehicle: string, velocity: number) {
    super('Helicopter', 5);
  }
  land() {
    return `${this.typeOfVehicle} is landing`;
  }
  fly() {
    return `${this.typeOfVehicle} is flying. Wheee!`;
  }
  takeOff() {
    return `${this.typeOfVehicle} is taking off`;
  }

  move() {
    return `Drrrrrr`
  }
}
