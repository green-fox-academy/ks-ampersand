// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console
let ai = [3, 4, 5, 6, 7];
let sum2: number = 0;

for (let i: number = 0; i < ai.length; i++) {
    sum2 += ai[i];
}
console.log(sum2);
