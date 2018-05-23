'use strict';

export class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;
}

//an orange with blue text: "Idea 1"
let post1 = new postIt;
post1.backgroundColor = 'orange';
post1.text = 'Idea1';
post1.textColor = 'blue';
console.log(post1);

//a pink with black text: "Awesome"
let post2 = new postIt;
post2.backgroundColor = 'pink';
post2.text = 'Awesome';
post2.textColor = 'black';
console.log(post2);

//a yellow with green text: "Superb!"
let post3 = new postIt;
post3.backgroundColor = 'yellow';
post3.text = 'Superb!';
post3.textColor = 'green';
console.log(post3);
