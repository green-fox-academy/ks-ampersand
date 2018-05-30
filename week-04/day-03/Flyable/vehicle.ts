'use strict';

abstract class Vehicle {
  typeOfVehicle: string;
  velocity: number;
  constructor(typeOfVehicle: string, velocity: number){
    this.typeOfVehicle = typeOfVehicle;
    this.velocity = velocity;
  }
  abstract move();
}

export { Vehicle };
