'use strict';

 // Given a string, compute recursively a new string where all the 'x' chars have been removed.

 function fuckX(myString: string): string {
  if (myString.indexOf('x') === -1) {
    return myString;
  }
  myString = myString.replace('x', '');
  return fuckX(myString);
}

console.log(fuckX('xxXXX  vexxry  XXX  nixcxe  XXX  stxrxing'));

