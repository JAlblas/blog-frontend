import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import Login from './components/Login';
import Register from './components/Register';
import Publish from './components/Publish';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <h1>Application</h1>
      <header className="App-header">
        <nav>Welcome to my blog!</nav>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
