import React from 'react';
import {connect} from 'react-redux';
import OverallWinrate from './OverallWinrate';
import RecentPlayers from './RecentPlayers';
import RecentSessions from './RecentSessions';

export function Dashboard(props) {
    return (
        <div>
            <header>MattLong87's Dashboard</header>

            <OverallWinrate winrate={props.user.winrate} />

            <RecentPlayers recentPlayers={props.user.recentPlayers} />

            <RecentSessions sessions={props.user.sessions} />
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Dashboard);