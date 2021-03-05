export default class Post {
  constructor(post) {
    const $post = document.createElement('div');
    $post.className = 'post';
    
    const $title = document.createElement('h2');
    $post.appendChild($title);

    const $body = document.createElement('p');
    $body.textContent = post.body;
    $post.appendChild($body);

    return $post;
  }
}
