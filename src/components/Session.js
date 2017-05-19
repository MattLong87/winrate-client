import React from 'react';

export default function Session(props) {

    return (
        <div>
            <section className='title'>{props.title}</section>
            <section className='session-info'>
                <section className='players'>Players: {props.players}</section>
                <section className='winner'>Winner: {props.winner}</section>
                <section className='date'>{props.date}</section>
                <a href="#">Delete Session</a>
            </section>
        </div>
    )
}