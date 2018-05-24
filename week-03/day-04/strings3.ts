'use strict';
export {};
// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function twinkleStar(string: string): string {
  let n: number = string.length;
  if (n === 0) {
    return string;
  }
  return `${twinkleStar(string.slice(0, n-1))}*${string.charAt(n - 1)}`;
}

console.log(twinkleStar('Nna itt van a string'));

