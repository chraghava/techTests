import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Generate from './components/Generate';
import Home from './components/Home';
import Saved from './components/Saved';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Generate" component={Generate} />
      <Route path="/Saved" component={Saved} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
