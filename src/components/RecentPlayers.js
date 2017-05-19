import React from 'react';

export default function RecentPlayers(props) {
    let lis = props.recentPlayers.map((player, i) => {
        return <li key={i}>{player}</li>
    })
    return (
        <div>
            <span className='recent-players-header'>Recent Players</span>
            <ul>
                {lis}
            </ul>
        </div>
    )
}