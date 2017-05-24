import React from 'react';
import {connect} from 'react-redux';
import OverallWinrate from './OverallWinrate';
import RecentPlayers from './RecentPlayers';
import RecentSessions from './RecentSessions';
import calculateWinrate from '../calculateWinrate';

import '../css/dashboard.css';

export function Dashboard(props) {
    return (
        <div className='dashboard'>
            <header>MattLong87's Dashboard</header>

            <OverallWinrate winrate={calculateWinrate(props.user, props.user.name.firstName)} />

            <RecentPlayers recentPlayers={props.user.recentPlayers} />

            <RecentSessions sessions={props.user.sessions} />
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Dashboard);