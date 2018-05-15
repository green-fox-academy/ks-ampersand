'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

planetList.push('Saturn');
console.log(planetList);

/* function putSaturn(array: string[]): string[] {
    array = array.map(element => {element = `"${element}" `;
    return element
    });
   array.push("Saturn");
    return array;
};

console.log(putSaturn(planetList));

export = putSaturn; */

function putSaturn(array: string[]): void {
   array.push(`Saturn"`);
   console.log(array.join('", "'));
   array.unshift('"');
};

console.log(putSaturn(planetList));