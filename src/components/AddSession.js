import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';
import '../css/addSession.css';

export class AddSession extends React.Component {
    //using local state here to allow for adding to list of players
    constructor(props) {
        super(props);
        let allPlayers = [];
        if (props.user && props.user.sessions.length === 0) {
            allPlayers = [props.user.name.firstName];
        }
        if (props.user) {
            props.user.sessions.forEach(session => {
                session.players.forEach(player => {
                    if (allPlayers.indexOf(player) === -1) {
                        allPlayers.push(player);
                    }
                })
            })
        }
        this.state = { allPlayers }
    }

    addSession(e) {
        e.preventDefault();
        this.props.dispatch(actions.addSession(this.props.user.token));
        this.setState(Object.assign({}, this.state, { sessionAdded: true }));
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
        if (this.state.sessionAdded) {
            return <Redirect to={'/dashboard'} />
        }

        let playerCheckboxes = this.state.allPlayers.map((player, i) => {
            return (<div key={i}><input type="checkbox" name="player" id={player + i} value={player} /><label htmlFor={player + i} className="player-checkbox">{player}</label></div>)
        })
        let winnerOptions = this.state.allPlayers.map((player, j) => {
            return (<option key={j}>{player}</option>);
        })

        return (
            <div className='add-session'>
                <form id="add-session-form" onSubmit={(e) => this.addSession(e)}>
                    <h1>Add a Session</h1>
                    <label htmlFor="gameName">Game:</label>
                    <input id="gameName" type="text" name="gameName" placeholder="Game Name" />
                    <div className="players-input">
                        <section id="players-input">
                            <label htmlFor="players">Players:</label>
                            <div className="checkbox-container">
                                {playerCheckboxes}
                            </div>
                            <div className='add-player-container'>
                                <input id='add-player' onKeyDown={(e) => { this.addPlayer(e) }} type='text' name='add-player' placeholder='Add a player' />
                            </div>
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