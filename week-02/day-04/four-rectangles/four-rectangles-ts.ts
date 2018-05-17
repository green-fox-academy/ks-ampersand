'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
let color: string[] = ['#A6D785', '#FFB6C1', '#55AE3A', '#DF5286']

function drawRect(x: number, y: number, w: number, h: number) {
    for (let j: number = 0; j < color.length; j++) {
    ctx.fillStyle = color[j];
    x += 100;
    y += 15;
    w += 15;
    h += 15; 
    ctx.fillRect(x, y, w, h);
    }
  }
 
drawRect(10, 20, 10, 20);