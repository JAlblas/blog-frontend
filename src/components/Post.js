import './Post.css';
import React from 'react';

function Post(props) {
  return (
    <article className="post">
        <h3> {props.post.title} </h3>
        <p> {props.post.message}</p>
        <sub> {props.post.timestamp}</sub>
    </article>
  );
}

export default Post;
