import React from 'react';
import logo from '../../img/logo.png';

import '../css/landingpage.css';

export default function LandingPage() {
    return (
        <div className='landing-page'>
            <header>
                <img src={logo} alt='WinRate Logo' />
                <div><h2>Stat Tracking for Boardgamers</h2></div>
            </header>
            <main>
                <h3>How to Use WinRate</h3>
                <ul>
                    <li className='top-box box'>Create an Account</li>
                    <li className='mid-box box'>Add Some Sessions</li>
                    <li className='bottom-box box'>Check out the Stats</li>
                </ul>
            </main>
        </div>
    );
}