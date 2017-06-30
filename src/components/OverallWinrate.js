import React from 'react';
import '../css/overallwinrate.css';

export default function OverallWinrate(props) {
    return (
        <div className='overall-winrate'>
            <span className='my-winrate-header'>{
                props.winrate || props.winrate === 0 ? 'My WinRate' : "No Sessions Added"
                }</span>
            <div className='my-winrate-wrapper'>
                <span className='my-winrate'>{
                    props.winrate || props.winrate === 0 ? props.winrate + '%' : ""
                    }</span>
            </div>
        </div>
    )
}