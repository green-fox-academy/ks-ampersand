'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawHorizontal(x: number, y : number) {

  for (let i: number = 0; i < 3 ; i++) {
    x += 70;
    let horTo: number = x + 50;
    ctx.strokeStyle = "#FF0080";
    ctx.beginPath();
    ctx.moveTo(x , y);
    ctx.lineTo(horTo, y);
    ctx.stroke();
    }
  
  }
  
  drawHorizontal(10, 300);
