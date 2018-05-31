'use strict';

import { Garden } from './secretGarden';
import { Plants } from './plants';
import { Flower } from './flowers';
import { Tree } from './trees';

let mySecretGarden: Garden = new Garden();
mySecretGarden.createGarden();
console.log(mySecretGarden.isNeedingWater());
mySecretGarden.waterPlants(40);
console.log(mySecretGarden.isNeedingWater());
