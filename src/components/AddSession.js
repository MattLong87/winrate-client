import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/addSession.css';

export class AddSession extends React.Component {

    addSession(e) {
        e.preventDefault();
        this.props.dispatch(actions.addSession({ game: this.gameName.value }));
    }

    render() {
        let playerCheckboxes = [];
        let allPlayers = [];
        this.props.user.sessions.forEach(session => {
            session.players.forEach(player => {
                if (allPlayers.indexOf(player) === -1) {
                    allPlayers.push(player);
                }
            })
        })
        playerCheckboxes = allPlayers.map((player, i) => {
            return (<div key={i}><input type="checkbox" name="player" value={player} /> {player}</div>)
        })
        let winnerOptions = allPlayers.map((player, j) => {
            return (<option key={j}>{player}</option>);
        })
        return (
            <div className='add-session'>
                <h1>Add a Session</h1>
                <form id="js-add-session" onSubmit={(e) => this.addSession(e)}>
                    <div className="game-name">
                        <label htmlFor="game">Game:</label>
                        <input id="js-select-game" type="text" name="game" placeholder="Game Name" ref={(a) => { this.gameName = a }} />
                    </div>
                    <div className="players-input">
                        <section id="players-input">
                            <label htmlFor="players">Players:</label>
                            {playerCheckboxes}
                            <input id='add-player' type='text' name='add-player' placeholder='Add a player' />
                        </section>
                    </div>
                    <section id="hidden-inputs"></section>
                    <div className="winner-selection">
                        <label htmlFor="winner">Winner:</label>
                        <select name="winner" id="winner">
                            {winnerOptions}
                        </select>
                    </div>
                    <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(AddSession);