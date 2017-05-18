import React from 'react';
import OverallWinrate from './OverallWinrate';
import RecentPlayers from './RecentPlayers';

const user ={
    winrate: 36,
    recentPlayers: ["Jon", "Steven", "Kyle"]
}

export default function Dashboard() {
    return (
        <div>
            <header>MattLong87's Dashboard</header>
            <OverallWinrate winrate={user.winrate} />
            <RecentPlayers recentPlayers={user.recentPlayers} />
            <section className='recent-sessions accordion'>
                <section className='title'>Puerto Rico</section>
                <section className='session-info'>
                    <section className='players'>Players: Matt, Jon, Steven</section>
                    <section className='winner'>Winner: Jon</section>
                    <section className='date'>May 12, 2017</section>
                    <a href="#">Delete Session</a>
                </section>
                <section className='title'>Galaxy Trucker</section>
                <section className='session-info'>
                    <section className='players'>Players: Matt, Jon, Steven</section>
                    <section className='winner'>Winner: Jon</section>
                    <section className='date'>May 12, 2017</section>
                    <a href="#">Delete Session</a>
                </section>
                <section className='title'>Agricola</section>
                <section className='session-info'>
                    <section className='players'>Players: Matt, Jon, Steven</section>
                    <section className='winner'>Winner: Jon</section>
                    <section className='date'>May 12, 2017</section>
                    <a href="#">Delete Session</a>
                </section>

            </section>
        </div>
    );
}