import './Posts.css';
import { useState, useEffect } from 'react';

function Posts(props) {

  //const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div className="Posts">
        {props.posts.map(function(post, i){
            return <div key={i} post={post}> {post.message}</div>;
        })}
    </div>
  );
}

export default Posts;
