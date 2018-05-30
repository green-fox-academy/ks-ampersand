'use strict';

import { Instrument } from './instruments';
import { StringedInstrument } from './stringed';

class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
  }
  sound(): string {
    return 'Screech';
  }
}

export { Violin };
