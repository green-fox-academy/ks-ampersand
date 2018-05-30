'use strict';

import { Instrument } from './instruments';

abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  constructor(name: string, numberOfStrings: number){
    super(name);
    this.numberOfStrings = numberOfStrings
  }
  sound() {
  };
    //Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum
  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`) 
  }
}

export { StringedInstrument };