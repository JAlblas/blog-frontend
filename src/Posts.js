import './Posts.css';

import Post from './Post';

function Posts(props) {

  return (
    <div className="posts">
        {props.posts.map(function(post, i){
            return <Post post={post}/>;
        })}
    </div>
  );
}

export default Posts;
