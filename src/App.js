import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import Login from './components/Login';
import Register from './components/Register';
import Publish from './components/Publish';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  if (userToken) {
    return userToken.token;
  } else {
    return null;
  }
}

function App() {
  const token = getToken();

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
