'use strict';

function makeDictionary(inputString: string): Object {
  let dictionary: Object = {};
  inputString.split('').forEach(value => {
    if (dictionary[value] === undefined) {
      dictionary[value] = 1;
    } else {
      dictionary[value]++;
    }
  })
  return dictionary;
}

console.log(makeDictionary('apple'));

export { makeDictionary };