'use strict';

/* 
1) Subscribe to keyup events on the global window object
2) Console log the event object and peek inside
3) Display the last pressed key's code as "Last pressed key code is: __" */

const header = document.querySelector('h1');

window.addEventListener('keyup', () => {
  header.innerHTML = `Last pressed key code is: ${event.keyCode}`;
});
