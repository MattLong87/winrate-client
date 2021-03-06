import 'reset-css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import AllSessions from './AllSessions';
import AddSession from './AddSession';
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';

import '../css/winrate.css';

export class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar className='navbar' />
          <div className='page-container'>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/all-sessions' component={AllSessions} />
            <Route exact path='/add-session' component={AddSession} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/demo-login' render={(props) => (
              <Login {...props} demoAccount={true} />
            )}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App