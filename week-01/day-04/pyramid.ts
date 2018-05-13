'use strict';
export {};

let lineCount: number = 4;
let a = '*';
let spaceCnt: number = 3;


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
    let sp: string = '';
    
    for (let j: number = 1; j <= spaceCnt; j++) {
        sp += ' ';
    }
    console.log(sp + a);
    a += '**';
    spaceCnt--;
}