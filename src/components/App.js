import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import AllSessions from './AllSessions';
import AddSession from './AddSession';
import Login from './Login';
import SignUp from './SignUp';
//import Styles from 'reset-css';

export class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar className='navbar' />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/all-sessions' component={AllSessions} />
          <Route exact path='/add-session' component={AddSession} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App