import Post from './components/Post.js';

(async () => {
  // Get data from backend
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // Render blog posts
  const $blog = document.getElementById("blog");
  if (!$blog) {
    throw new Error("Blog container not found");
  }

  for (const post of data) {
    const $post = new Post(post);

    $blog.appendChild($post);
  }
})();
