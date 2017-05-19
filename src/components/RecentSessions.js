import React from 'react';
import Session from './Session';

export default function RecentSessions(props) {
    
    return (
        <div>
            {props.sessions.map(function (session, i) {
                return (
                    <Session key={i} title={session.game} players={session.players} winner={session.winner} date={session.date} />
                )
            })}
        </div>
    )
}