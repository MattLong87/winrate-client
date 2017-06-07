import React from 'react';
import {connect} from 'react-redux';
import Session from './Session';
import '../css/allsessions.css'

export function AllSessions(props) {
    return (
        <div className='all-sessions'>
            <h1>All Sessions</h1>
            {props.user.sessions.map(function (session, i) {
                return (
                    <Session key={i} title={session.game} players={session.players} winner={session.winner} date={session.date} sessionId={session._id} token={props.token}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(AllSessions);