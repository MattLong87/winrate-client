import React from 'react';
import '../css/recentplayers.css';

export default function RecentPlayers(props) {
    if (!props.recentPlayers) {
        return <div></div>
    }

    let lis = <li>No Sessions Added</li>;

    if (props.recentPlayers.length > 0) {
        lis = props.recentPlayers.map((player, i) => {
            return <li key={i}>{player}</li>
        })
    }
    
    return (
        <div className='recent-players'>
            <span className='recent-players-header'>Recent Players</span>
            <ul>
                {lis}
            </ul>
        </div>
    )
}