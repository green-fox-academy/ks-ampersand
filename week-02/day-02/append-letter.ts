'use strict';
export {};
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(array: string[]): string[] {
    array = array.map(function(element) {
        element = `${element}a`; 
    return element;
   });
      return array;
  }

console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;

