'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.



function drawSqCenter() {
let s: number = 1;
let x: number = 300;
let y: number = 200;
  for (let i: number = 0; i <= 600; i++) {
  s += 2;
  x--;
  y--;
  ctx.strokeStyle = `hsl(${i}, 100%, 50%)`;
  ctx.strokeRect(x, y, s, s);
  }
} 
drawSqCenter();
