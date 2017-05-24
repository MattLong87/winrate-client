import React from 'react';
import {connect} from 'react-redux';
import Session from './Session';

export function AllSessions(props) {
    return (
        <div>
            {props.user.sessions.map(function (session, i) {
                return (
                    <Session key={i} title={session.game} players={session.players} winner={session.winner} date={session.date} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(AllSessions);