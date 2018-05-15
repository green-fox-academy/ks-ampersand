'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

//1st way
function makingMatches(girlsArray: string[], boysArray: string[]): string[] {
    let loveEver: string[] = [];
  for (let i: number = 0; i < girlsArray.length; i++) {
    loveEver.push(`${girlsArray[i]} ${boysArray[i]}`);
  }  
    return loveEver;
}

console.log(makingMatches(girls, boys)); 

//output: [ 'Eve Joe', 'Ashley Fred', 'Bözsi Béla', 'Kat Todd', 'Jane Neef' ]


//2nd way
function makingMatches(girlsArray: string[], boysArray: string[]): string[] {
    let loveEver: string[] = [];
  for (let i: number = 0; i < girlsArray.length; i++) {
    loveEver.push(girlsArray[i]);
    loveEver.push(boysArray[i]);
  }  
    return loveEver;
}

console.log(makingMatches(girls, boys));

export = makingMatches;

/* output: 
[ 'Eve',
  'Joe',
  'Ashley',
  'Fred',
  'Bözsi',
  'Béla',
  'Kat',
  'Todd',
  'Jane',
  'Neef' ] */
