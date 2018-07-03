'use strict';

/* 
If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
5 seconds elapsed and clicked 3 times
If the user starts clicking before the first 5 seconds, nothing should be printed */

const button = document.querySelector('button');
const main = document.querySelector('p');
const startDate = new Date();
let counter = 0;

function getStartTime() {
  const startTime = startDate.getTime();
  return startTime;
}

window.onload = () => { getStartTime() };

function timeElapsed() {
  const endDate = new Date();
  let currTime = endDate.getTime()
  console.log(currTime)
  let elapsedTime = currTime - getStartTime();
  let seconds = Math.floor(elapsedTime / 1000);
  return seconds;
}

button.addEventListener('click', () => {
  if (timeElapsed() >= 5) {
    counter++;
    console.log(counter);
    if (counter >= 3) {
      main.innerHTML = '5 seconds elapsed and clicked 3 times';
    }
  }
});
