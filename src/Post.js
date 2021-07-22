import './Post.css';

function Post(props) {
  return (
    <div className="post">
        <h1> {props.post.title} </h1>
        <p> {props.post.message}</p>;
    </div>
  );
}

export default Post;
