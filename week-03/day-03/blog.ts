'use strict';
import {blogPost} from './blog-post';

/* 
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost */

class Blog {
  allBlogPosts: blogPost[] = [];
  delete(a: number) {
    this.allBlogPosts.splice(a, 1);
  }
}

let blogs = new Blog;
console.log(blogs.allBlogPosts.length);
