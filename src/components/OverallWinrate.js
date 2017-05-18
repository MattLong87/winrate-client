import React from 'react';

export default function OverallWinrate(props) {
    return (
        <div>
            <span className='my-winrate-header'>My Winrate</span>
            <span className='my-winrate'>{props.winrate}%</span>
        </div>
    )
}