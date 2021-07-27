import './App.css';
import Posts from './Posts';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>Welcome to my blog!</nav>
      </header>
      <Posts/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
