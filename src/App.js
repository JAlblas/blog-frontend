import './App.css';
import Posts from './Posts';
import Login from './Login';

import { useState, useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data => setPosts(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav>Welcome to my blog!</nav>
      </header>
      <Posts posts={posts}/>
      <Login/>
    </div>
  );
}

export default App;
