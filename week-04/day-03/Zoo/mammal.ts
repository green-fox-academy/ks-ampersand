'use strict';

import { Animals } from './animals'; 

class Mammal extends Animals {
  hibernates: boolean;
  constructor(name: string) {
    super(name);
  }

  breed() {
    return `by pushing out smaller versions of itself`;
  }
} 

export { Mammal };
