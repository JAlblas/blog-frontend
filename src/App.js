import logo from './logo.svg';
import './App.css';
import Posts from './Posts';

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
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Posts posts={posts}/>
      </header>
    </div>
  );
}

export default App;
