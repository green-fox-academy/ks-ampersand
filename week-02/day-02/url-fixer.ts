'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace('bots', 'odds/');
let url1: string = `${url.slice(0, 4)}:${url.slice(5, url.indexOf('/', 30) + 1)}`;

console.log(url)
console.log(url1)