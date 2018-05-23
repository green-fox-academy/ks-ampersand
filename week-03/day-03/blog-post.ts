'use strict';

export class blogPost{
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
}

let blogPost1 = new blogPost;
blogPost1.authorName = 'John Doe';
blogPost1.title = 'Lorem Ipsum';
blogPost1.text = 'Lorem ipsum dolor sit amet.';
blogPost1.publicationDate = '2000.05.04.';
console.log(blogPost1);

let blogPost2 = new blogPost;
blogPost1.authorName = 'Tim Urban';
blogPost1.title = 'Wait but why';
blogPost1.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
blogPost1.publicationDate = '2010.10.10.';
console.log(blogPost1);

let blogPost3 = new blogPost;
blogPost1.authorName = 'William Turton';
blogPost1.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
blogPost1.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
blogPost1.publicationDate = '2017.03.28.';
console.log(blogPost1);

