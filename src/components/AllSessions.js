import React from 'react';
import { connect } from 'react-redux';
import Session from './Session';
import { Link } from 'react-router-dom';
import '../css/allsessions.css'

export function AllSessions(props) {
    return (
        <div className='all-sessions'>
            <h1>All Sessions</h1>
            <div className='add-session-link'>
                <Link to='/add-session'><h4>+ Add a session</h4></Link>
            </div>
            {props.user.sessions.map(function (session, i) {
                return (
                    <Session key={i} title={session.game} players={session.players} winner={session.winner} date={session.date} sessionId={session._id} token={props.token} />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(AllSessions);