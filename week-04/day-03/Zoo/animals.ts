'use strict';

abstract class Animals {
  protected name: string;
  protected age: number;
  protected petName: string;
  protected gender: string;
  protected adult: boolean;

  constructor(name: string) {
    this.name = name;
  }

  getName(){
    return this.name;
  };
  abstract breed();
}

interface layingEggs {
  layEgg(): void;
}

export { Animals, layingEggs };