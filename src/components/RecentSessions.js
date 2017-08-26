import React from 'react';
import Session from './Session';

export default function RecentSessions(props) {
    
    return (
        <div>
            {props.sessions.map(function (session, i) {
                let date = new Date(parseInt(session.date));
                let formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
                return (
                    <Session key={i} title={session.game} players={session.players} winner={session.winner} date={formattedDate} sessionId={session._id} token={props.token}/>
                )
            })}
        </div>
    )
}