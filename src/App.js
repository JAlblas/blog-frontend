import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import Publish from './components/Publish';
import useToken from './hooks/useToken';

function App() {
  const { token, setToken } = useToken();

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
          <Route path="/users">
            <Users />
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
