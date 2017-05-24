import React from 'react';
import '../css/session.css'

export default function Session(props) {
    const players = props.players.map(player => {
        return `${player} `;
    })
    return (
        <div className='session'>
            <section className='title' onClick={(e)=>toggleExpand(e)}>{props.title}</section>
            <section className='session-info'>
                <section className='players'>Players: {players}</section>
                <section className='winner'>Winner: {props.winner}</section>
                <section className='date'>{props.date}</section>
                <a href="#">Delete Session</a>
            </section>
        </div>
    )
}

function toggleExpand(e){
    e.target.classList.toggle('expanded');
}