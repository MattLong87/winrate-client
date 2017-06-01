import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../img/hamburger.png';
import '../css/navbar.css'

export default function NavBar() {

    return (
        <nav>
            <ul>
                <li className='top-li'><img src={hamburger} className='hamburger' onClick={(e) => toggleNavExpand(e)} /></li>
                <section className='nav-links'>
                    <li><Link to='/'>WinRate</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/all-sessions'>All Sessions</Link></li>
                    <li><Link to='/add-session'>Add a Session</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/sign-up'>Sign Up</Link></li>
                </section>
            </ul>
        </nav>
    )
}

function toggleNavExpand(e) {
    e.target.parentElement.parentElement.parentElement.classList.toggle('nav-expanded');
}