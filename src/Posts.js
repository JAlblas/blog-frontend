import './Posts.css';
import { useState, useEffect } from 'react';

import Post from './Post';

function Posts(props) {

  //const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div className="posts">
        {props.posts.map(function(post, i){
            return <Post post={post}/>;
        })}
    </div>
  );
}

export default Posts;
