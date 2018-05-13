'use strict';
export {};

let lineCount: number = 4;
let a = '*';
let b: string = '******';
let spaceCnt: number = 3;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


for (let i: number = 1; i <= lineCount; i++) {
    let sp: string = '';
   
    
    for (let j: number = 1; j <= spaceCnt; j++) {
        sp += ' ';
    }
    console.log(sp + a);
    a += '**';
    spaceCnt--;
}
for (let f: number = 0; f >= lineCount; f--) {
    let k: string = '';
    
    for (let m: number = 1; m >= spaceCnt; m--) {
        k += ' ';
    }
    console.log(k + b);
    b = `${b} - '**'`;
    spaceCnt++;
}