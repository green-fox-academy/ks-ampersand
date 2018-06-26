'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function printWhatever(string) {
  console.log(string);
}

function printFruit() {
  setTimeout(() => printWhatever('apple'), 0);
  setTimeout(() => printWhatever('pear'), 1000);
  setTimeout(() => printWhatever('melon'), 3000);
  setTimeout(() => printWhatever('grapes'), 5000);
}

printFruit();