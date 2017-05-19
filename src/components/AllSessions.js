import React from 'react';
import Session from './Session';

const user ={
    winrate: 36,
    recentPlayers: ["Jon", "Steven", "Kyle"],
    sessions: [{
        game: "Puerto Rico",
        players: ["Matt", "Jon", "Steven"],
        winner: "Jon",
        date: "May 12, 2017"
    },
    {
        game: "Galaxy Trucker",
        players: ["Matt", "Jon", "Kyle"],
        winner: "Kyle",
        date: "May 11, 2017"
    },
    {
        game: "Agricola",
        players: ["Matt", "Jon", "Ian", "James"],
        winner: "Ian",
        date: "May 8, 2017"
    }]
}

export default function AllSessions() {
    
    return (
        <div>
            {user.sessions.map(function (session, i) {
                return (
                    <Session key={i} title={session.game} players={session.players} winner={session.winner} date={session.date} />
                )
            })}
        </div>
    )
}