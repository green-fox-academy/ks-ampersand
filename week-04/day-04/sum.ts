'use strict';

class Numbers {
  getSum(listOfNumbers: number []) {
    let sumOfAll: number = 0;
      listOfNumbers.forEach(value => {
        sumOfAll += value;
      });
    return sumOfAll;
  }
}

let sumNum = new Numbers;
let list = [1, 2, 3, 4];
console.log(sumNum.getSum(list));

export { Numbers };