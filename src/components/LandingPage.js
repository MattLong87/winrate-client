import React from 'react';
import logo from '../../img/logo.png';

import '../css/landingpage.css';

export default function LandingPage() {
    return (
        <div className='landing-page'>
            <header>
                <img src={logo} alt='WinRate Logo' />
                <h2>Stat Tracking for Boardgamers</h2>
            </header>
            <main>
                <h3>How to Use WinRate</h3>
                <ul>
                    <li>Create an Account</li>
                    <li>Add Some Sessions</li>
                    <li>Check out the Stats</li>
                </ul>
            </main>
        </div>
    );
}