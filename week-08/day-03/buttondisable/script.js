'use strict';

const signup = document.querySelector('#signup');
const dogRadio = document.querySelector('#dogradio');
const catRadio = document.querySelector('#catradio');
const viktorRadio = document.querySelector('#viktorradio');
const heartCats = document.querySelector('#ilovecats');
const yesRadio = document.querySelector('#yes-radio');
const noRadio = document.querySelector('#no-radio');
const normalAlert = 'Thank you, you\'ve successfully signed up for cat facts';
const sadAlert = 'We will send you double the amount of cat facts and you will learn to love them';

function enableButton(button) {
  button.disabled = false;
}

function disableButton(button) {
  button.disabled = true;
}

//Enable signup if cat or dog is checked
function signupBut() {
  if (dogRadio.checked || catRadio.checked) {
    enableButton(signup);
  }
}

//Disable I love cats if anything other than cats and yes is checked
function disableHeartCats() {
  if (!catRadio.checked) {
    disableButton(heartCats);
  }
}

//No word about the cats button in the task, made up this logic
function loveCatsBut() {
  if (catRadio.checked && yesRadio.checked) {
    enableButton(heartCats);
  }
}

dogRadio.addEventListener('change', signupBut);
dogRadio.addEventListener('change', disableHeartCats);
viktorRadio.addEventListener('change', disableHeartCats);
catRadio.addEventListener('change', signupBut);
catRadio.addEventListener('change', loveCatsBut);
yesRadio.addEventListener('change', loveCatsBut);

//Just having fun
viktorRadio.addEventListener('change', () => {
  alert('We are cats and dogs nazis >:(')
  disableButton(signup);
});

//Having fun
heartCats.addEventListener('click', () => {
  alert('💖 😻 💖 😻 💖')
});

//Sign up to cat facts, slightly changed the logic
function makeSignup() {
  if (dogRadio.checked && noRadio.checked) {
    alert(sadAlert);
  } else {
    alert(normalAlert);
  }
}

signup.addEventListener('click', makeSignup);