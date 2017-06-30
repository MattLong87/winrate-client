import React from 'react';
import '../css/mostplayed.css';

export default function MostPlayed(props) {
    if (!props.sessions) {
        return <div></div>
    }
    //build an object with frequency for each game name, then convert to nested
    //array and sort by frequency
    let gamesFrequency = {};
    props.sessions.map(session => {
        if (session.game in gamesFrequency) {
            gamesFrequency[session.game]++;
        }
        else {
            gamesFrequency[session.game] = 1;
        }
        return true; //to avoid React warning
    })
    let gamesSortable = [];
    for (var game in gamesFrequency) {
        gamesSortable.push([game, gamesFrequency[game]])
    }
    gamesSortable.sort((a, b) => b[1] - a[1]);

    let lis = <li>No games played</li>

    if (gamesSortable.length > 0) {
        lis = gamesSortable.map((game, i) => {
            return <li key={i}>{game[0]}</li>
        })
    }

    return (
        <div className='most-played'>
            <span className='most-played-header'>Most-Played Games</span>
            <ul>
                {lis}
            </ul>
        </div>
    )
}