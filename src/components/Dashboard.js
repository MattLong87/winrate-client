import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import OverallWinrate from './OverallWinrate';
import RecentPlayers from './RecentPlayers';
import MostPlayed from './MostPlayed';
import RecentSessions from './RecentSessions';
import calculateWinrate from '../calculateWinrate';

import '../css/dashboard.css';

export function Dashboard(props) {
    let recentPlayers = [];
    if (props.user.sessions[0]) {
        recentPlayers = props.user.sessions[0].players;
    }
    return (
        <div className='dashboard'>
            <header>
                <span className='dashboard-title'>{props.user.name.firstName}'s Dashboard</span>

                <OverallWinrate winrate={calculateWinrate(props.user, props.user.name.firstName)} />
            </header>

            <section className='panels'>
                <RecentPlayers recentPlayers={recentPlayers} />
                <MostPlayed sessions={props.user.sessions} />
            </section>
            <div className='recent-sessions-header'>Recent Sessions (<Link to='/all-sessions'>View All</Link>)</div>
            <RecentSessions sessions={props.user.sessions} token={props.user.token} />
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Dashboard);