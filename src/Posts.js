import './Posts.css';
import Post from './Post';
import { useState, useEffect } from 'react';

function Posts(props) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => setPosts(data));
  }, []);

  return (
    <div className="posts">
        {posts.map(function(post, i){
            return <Post post={post}/>;
        })}
    </div>
  );
}

export default Posts;
