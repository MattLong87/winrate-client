import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../img/hamburger.png';
import '../css/navbar.css'

export default function NavBar() {

    return (
        <nav>
            <ul>
                <li className='top-li'><img src={hamburger} className='hamburger' onClick={(e) => toggleNavExpand(e)} alt='expand navigation' /></li>
                <section className='nav-links'>
                    <li><Link to='/' onClick={(e) => linkToggleNavExpand(e)}>WinRate</Link></li>
                    <li><Link to='/dashboard' onClick={(e) => linkToggleNavExpand(e)}>Dashboard</Link></li>
                    <li><Link to='/all-sessions' onClick={(e) => linkToggleNavExpand(e)}>All Sessions</Link></li>
                    <li><Link to='/add-session' onClick={(e) => linkToggleNavExpand(e)}>Add a Session</Link></li>
                    <li><Link to='/login' onClick={(e) => linkToggleNavExpand(e)}>Login</Link></li>
                    <li><Link to='/sign-up' onClick={(e) => linkToggleNavExpand(e)}>Sign Up</Link></li>
                </section>
            </ul>
        </nav>
    )
}

function toggleNavExpand(e) {
    e.target.parentElement.parentElement.parentElement.classList.toggle('nav-expanded');
}

function linkToggleNavExpand(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('nav-expanded');
}