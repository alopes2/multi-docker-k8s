import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div>
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
            </div>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
