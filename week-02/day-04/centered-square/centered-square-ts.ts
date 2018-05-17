'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let x: number = (600 / 2) - 5;
let y: number = (400 / 2) - 5;

ctx.fillStyle = '#98fb98';
ctx.fillRect(x, y, 10, 10);

