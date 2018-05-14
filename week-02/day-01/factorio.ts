// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(a: number): number {
    let multSum = 1;
      for (let i: number = 1; i < a; i++) {
          multSum *= i;
      } 
    
    return multSum;
}
console.log(factorio(6));
