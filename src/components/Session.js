import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import '../css/session.css'

export function Session(props) {
    const players = props.players.map((player, i) => {
        if (i === props.players.length - 1){
            return `${player}`;
        }
        return `${player}, `;
    })
    return (
        <div className='session'>
            <section className='title' onClick={(e)=>toggleExpand(e)}>{props.title}</section>
            <section className='session-info'>
                <section className='players'><span className='label'>Players:</span> {players}</section>
                <section className='winner'><span className='label'>Winner:</span> {props.winner}</section>
                <section className='date'><span className='label'>Date:</span> {props.date}</section>
                <span className='delete-session' onClick={(e)=>{props.dispatch(actions.deleteSession(props.sessionId, props.token))}}>
                    Delete Session
                </span>
            </section>
        </div>
    )
}

function toggleExpand(e){
    e.target.classList.toggle('expanded');
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Session);