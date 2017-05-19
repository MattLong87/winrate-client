import React from 'react';
import OverallWinrate from './OverallWinrate';
import RecentPlayers from './RecentPlayers';
import RecentSessions from './RecentSessions';

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

export default function Dashboard() {
    return (
        <div>
            <header>MattLong87's Dashboard</header>

            <OverallWinrate winrate={user.winrate} />

            <RecentPlayers recentPlayers={user.recentPlayers} />

            <RecentSessions sessions={user.sessions} />
        </div>
    );
}