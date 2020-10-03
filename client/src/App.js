import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Multi container</h3>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>NandaGopal tests</span>
          <Link to="/">Home</Link>
          <Link to="/fib">Fibonacci Page</Link>
          <Route exact path="/" component={OtherPage}/>
          <Route path="/fib" component={Fib}/>
        </header>
      </div>
    </Router>
  );
}

export default App;
