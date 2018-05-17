'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


function purpleStep(s: number) {
let x: number = s;
let y: number = s;
  for (let i: number = 0; i <= 19; i++) {
  ctx.strokeStyle = 'black';
  ctx.fillStyle = '#DB70DB';
  x += (s + 1);
  y += (s + 1);
  ctx.strokeRect(x, y, s, s);
  ctx.fillRect(x, y, s, s);
  }
}
purpleStep(10);

