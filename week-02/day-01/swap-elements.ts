// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ['Arthur', 'Boe', 'Chloe'];
abc.splice(0, 0, abc[2]);

abc.splice(3, 1, abc[1]);

abc.splice(1, 1);

console.log(abc);