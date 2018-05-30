'use strict';

import { Instrument } from './instruments';
import { StringedInstrument } from './stringed';

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super('Electric Guitar', numberOfStrings);
  }
  sound(): string {
    return 'Twang';
  }
}

export { ElectricGuitar };