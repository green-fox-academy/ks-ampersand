// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let x: number = 9;

function sum1(): number {
  let sum: number = 0;
    for (let i: number = 1; i < x; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum1());