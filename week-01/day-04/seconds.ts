'use strict';
export {};

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let a = 14 * 60 * 60;
let b = 34 * 60;
let totalSec: number = 24 * 60 * 60;
console.log(totalSec - a - b - currentSeconds);
