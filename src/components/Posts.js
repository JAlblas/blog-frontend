import './Posts.css';
import Post from './Post';
import React from 'react';
import { useState, useEffect } from 'react';

function Posts(props) {

  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  let createPost = (() => {
    setShowForm(!showForm);
  });
  
  if (showForm) {
    return (
      <form className="createPostForm" onSubmit={createPost}>
        <label>
          Name:
          <input type="text"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  if (posts.length === 0) {
    return "NO POSTS";
  }

  return (
    <div className="posts">
        {posts.map(function(post, i){
            return <Post post={post}/>;
        })}
        <button onClick={createPost}>Create post</button>
    </div>
  );
}

export default Posts;
