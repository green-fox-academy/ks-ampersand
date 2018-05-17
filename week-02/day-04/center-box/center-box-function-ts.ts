'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let color: string[] = ['#4F2F4F', '#584E56', '#ECC8EC']

function drawSqCenter(size: number) {
  for (let i: number = 0; i <= color.length; i++) {
  let x: number = 300 - (size / 2);
  let y: number = 200 - (size / 2);
  ctx.fillStyle = color[i];
  size -=30
  ctx.fillRect(x, y, size, size);
  }
}
drawSqCenter(200);



