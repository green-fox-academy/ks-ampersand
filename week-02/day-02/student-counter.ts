'use strict';
export {};

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have less than 5 candies


/*function howCandies2(array: any[]): void {
    let temp: string[] = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i].candies);
        temp.push(array[i].candies);
    }
    console.log(temp.join(' '));
}

console.log(howCandies2(students));  */

function howCandies(array: any[], key: string): number {
    let candySum = 0;
    for (let i = 0; i < array.length; i++) {
        candySum += array[i][key];
    };

    return candySum;
};
console.log(howCandies(students, 'candies'));    


function whatAgeSum(array: any[], key: string): number {
  let ageSum = 0;
  for (let i = 0; i < array.length; i++) { 
    if (array[i].candies < 5)
    ageSum +=  array[i][key];
  };

return ageSum;

};
console.log(whatAgeSum(students, 'age'));
