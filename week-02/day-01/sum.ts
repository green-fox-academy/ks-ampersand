// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result


function sum1(x): number {
  let sum: number = 0;
    for (let i: number = 1; i < x; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum1(9));