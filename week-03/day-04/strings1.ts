'use strict';

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeToY(niceOne: string): string {
  if (niceOne.indexOf('x') === -1) {
    return niceOne;
  }
  niceOne = niceOne.replace('x', 'y');
  return changeToY(niceOne);
}

console.log(changeToY('I do not have any chocolate. Whxxxxx'));
