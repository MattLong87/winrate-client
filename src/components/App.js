import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;