'use strict';

function getAnagram(firstWord: string, secondWord: string): boolean {
  if (firstWord.split('').sort().join('') === secondWord.split('').sort().join('')) {
    return true
  } else {
    return false;
  }
}

console.log(getAnagram('word', 'drow'));

export { getAnagram };
