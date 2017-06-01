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
                <ul>
                    <li className='top-box box'><div className='overlay overlay-top'><span className='feature'>Record your boardgaming sessions</span></div></li>
                    <li className='mid-box box'><div className='overlay overlay-mid'><span className='feature'>Compare your WinRate to your friends</span></div></li>
                    <li className='bottom-box box'><div className='overlay overlay-bottom'><span className='feature'>See your most-played games</span></div></li>
                </ul>
            </main>
        </div>
    );
}