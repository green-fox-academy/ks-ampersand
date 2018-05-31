'use strict';

class Apple {
  getApple() {
    return 'this apple is yummy';
  }
}

let apple = new Apple();
console.log(apple.getApple());

export { Apple };