import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from '../css/navbar.css'

export default function NavBar() {

    return (
        <nav>
        <ul>
            <li><Link to='/'>WinRate</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/all-sessions'>All Sessions</Link></li>
            <li><Link to='/add-session'>Add a Session</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/sign-up'>Sign Up</Link></li>
        </ul>
        </nav>
    )
}