'use strict';

import { Instrument } from './instruments';
import { StringedInstrument } from './stringed';

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings);
  }
  sound(): string {
    return 'Duum-duum-duum';
  }
}

export { BassGuitar };
