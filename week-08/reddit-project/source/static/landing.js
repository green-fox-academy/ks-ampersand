const http = new XMLHttpRequest();
const host = 'http://localhost:3000';

const main = document.querySelector('main');

//function to parse data
function getData(route, callback) {
  http.open('GET', `${host}/${route}`, true);
  http.onload = () => {
    const data = JSON.parse(http.responseText);
    callback(data.posts);
  };
  http.send();
} 

function sendRequest(request, route, callback) {
  http.open(request, `${host}/${route}`, true);
  http.onload = () => {
    let result = JSON.parse(http.responseText);
    console.log(result.posts);
    callback(result.posts);
  }
  http.send();
}



 function createPosts(data) {
  data.forEach(post => {
    const mainPostcontainer = document.createElement('div');
    mainPostcontainer.className = 'post-container';
    main.appendChild(mainPostcontainer);

    const arrowBlockDiv = document.createElement('div')
    arrowBlockDiv.className = 'score-container';
    mainPostcontainer.appendChild(arrowBlockDiv);
    const arrowUpDiv = document.createElement('div')
    arrowUpDiv.className = 'arrowup';
    arrowBlockDiv.appendChild(arrowUpDiv);
    const arrowUp = document.createElement('button');
    arrowUp.className = 'up-button';
    arrowUpDiv.appendChild(arrowUp);
    const scoreDiv = document.createElement('div');
    scoreDiv.className = 'score';
    arrowBlockDiv.appendChild(scoreDiv);
    scoreDiv.innerHTML = post.score;

    arrowUp.addEventListener('click', () => {
      const upvoteReq = new XMLHttpRequest();
      upvoteReq.open('PUT', `posts/${post.id}/upvote`);
      upvoteReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      upvoteReq.send(JSON.stringify({
        vote : 1,
      }));
      upvoteReq.onload = () => {
        location.reload();
      }
    });

    const arrowDownDiv = document.createElement('div');
    arrowDownDiv.className = 'arrowdown';
    arrowBlockDiv.appendChild(arrowDownDiv);
    const arrowDown = document.createElement('button');
    arrowDown.className = 'down-button';
    arrowDownDiv.appendChild(arrowDown);

    arrowDown.addEventListener('click', () => {
      const downvoteReq = new XMLHttpRequest();
      downvoteReq.open('PUT', `posts/${post.id}/downvote`);
      downvoteReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      downvoteReq.send(JSON.stringify({
        vote : -1,
      }));
      downvoteReq.onload = () => {
        location.reload();
      }
    });

    const contentBlockDiv = document.createElement('div');
    contentBlockDiv.className = 'content-container';
    mainPostcontainer.appendChild(contentBlockDiv);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'postcontent';
    contentBlockDiv.appendChild(contentDiv);
    const url = document.createElement('a');
    contentDiv.appendChild(url);
    url.innerHTML = `${post.title}`;
    url.href = `${post.url}`;

    const submitTimeDiv = document.createElement('div');
    submitTimeDiv.className = 'submittime';
    contentBlockDiv.appendChild(submitTimeDiv);
    submitTimeDiv.innerHTML = `Submited on ${post.timestamp.slice(0, 10)}`;

    const linksDiv = document.createElement('div');
    linksDiv.className = 'modify-content-links';
    contentBlockDiv.appendChild(linksDiv);

    const ul = document.createElement('ul');
    ul.className = 'modify-content-ul';
    linksDiv.appendChild(ul);

    const modifyLi = document.createElement('li');
    const modifya = document.createElement('a');
    modifyLi.className = 'modify';
    ul.appendChild(modifyLi);
    modifyLi.appendChild(modifya);
    modifya.innerHTML = 'Modify';
    modifya.href = `/modify?id=${post.id}?title=${post.title}?url=${post.url}`;
    

    const deleteLi = document.createElement('li');
    const deletea = document.createElement('a');
    deleteLi.className = 'delete';
    ul.appendChild(deleteLi);
    modifyLi.appendChild(deletea);
    deletea.innerHTML = 'Delete';

    deletea.addEventListener('click', () => {
      console.log('yo');
      const delReq = new XMLHttpRequest();
      delReq.open('DELETE', `/posts/${post.id}`);
      delReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      delReq.send(JSON.stringify({
        id: post.id
      }))
      delReq.onload = () => {
        location.reload();
      }
    })
  });


}

 getData('api/posts', createPosts); 


