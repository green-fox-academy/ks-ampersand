'use strict';

const candies = document.querySelector('.candies');
const lollipops = document.querySelector('.lollipops');
const speed = document.querySelector('.speed');
let candiesCount = 1000;
let lollipopCount = 8;
let lollipop = '🍭';

const candyButton = document.querySelector('.create-candies');
const buyLollipops = document.querySelector('.buy-lollipops');
const candyRain = document.querySelector('.candy-machine');

function displayCandies() {
  candies.innerText = `${candiesCount}`;
};
displayCandies();

candyButton.addEventListener('click', () => {
  candiesCount++;
  displayCandies();
});

//You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
function displayLollipops() {
  let lollipopString = '';
  for (let i = 0; i < lollipopCount; i++) {
    lollipopString += lollipop;
  }
  lollipops.innerText = `${lollipopString}`;
}
displayLollipops();

buyLollipops.addEventListener('click', () => {
  if (candiesCount >= 100) {
    lollipopCount++;
    candiesCount -= 100;
    displayCandies();
    displayLollipops();
    generateCandies();
  }
});

//10 lollipops generate 1 candy per second.
let genSpeed = 1000;
let candySpeed = 0;

function generateCandies() {
  if (lollipopCount >= 10) {
    window.setInterval(generateOneCandy, genSpeed);
    displaySpeed();
  }
};

function generateOneCandy() {
  candiesCount++;
  displayCandies();
}

function checkCounterStart() {
  if (lollipopCount === 10) {
    candySpeed = 1;
    displaySpeed();
  }
}

function speedUpCandies() {
  genSpeed /= 10;
  generateCandies();
  candySpeed *= 10 ;
  displaySpeed();
}

buyLollipops.addEventListener('click', checkCounterStart);
candyRain.addEventListener('click', speedUpCandies);

function displaySpeed() {
  speed.innerHTML = `${candySpeed}`;
}
displaySpeed();