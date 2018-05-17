'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let color: string[] = ['#388E8E', '#66CCCC', '#AEEEEE']

function drawSquares(x: number, y: number) {
    for (let i: number = 0; i < color.length; i++) {
    ctx.fillStyle = color[i];
    x += 100;
    y += 50;
    ctx.fillRect(x, y, 50, 50);
    }
  }
 
drawSquares(80, 70);
