import React from 'react';
import '../css/overallwinrate.css';

export default function OverallWinrate(props) {
    return (
        <div className='overall-winrate'>
            <span className='my-winrate-header'>My Winrate</span>
            <div className='my-winrate-wrapper'>
                <span className='my-winrate'>{props.winrate}%</span>
            </div>
        </div>
    )
}