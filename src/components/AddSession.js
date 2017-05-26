import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/addSession.css';

export class AddSession extends React.Component {

    constructor(props) {
        super(props);
        let allPlayers = [];
        props.user.sessions.forEach(session => {
            session.players.forEach(player => {
                if (allPlayers.indexOf(player) === -1) {
                    allPlayers.push(player);
                }
            })
        })
        this.state = { allPlayers }
    }

    addSession(e) {
        e.preventDefault();
        this.props.dispatch(actions.addSession());
    }

    addPlayer(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.setState({
                allPlayers: [...this.state.allPlayers, e.target.value]
            })
            e.target.value = "";
        }
    }

    render() {
        let playerCheckboxes = this.state.allPlayers.map((player, i) => {
            return (<div key={i}><input type="checkbox" name="player" value={player} /> {player}</div>)
        })
        let winnerOptions = this.state.allPlayers.map((player, j) => {
            return (<option key={j}>{player}</option>);
        })
        return (
            <div className='add-session'>
                <h1>Add a Session</h1>
                <form id="add-session-form" onSubmit={(e) => this.addSession(e)}>
                    <label htmlFor="gameName">Game:</label>
                    <input id="gameName" type="text" name="gameName" placeholder="Game Name" />
                    <div className="players-input">
                        <section id="players-input">
                            <label htmlFor="players">Players:</label>
                            {playerCheckboxes}
                            <input id='add-player' onKeyDown={(e) => { this.addPlayer(e) }} type='text' name='add-player' placeholder='Add a player' />
                        </section>
                    </div>
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