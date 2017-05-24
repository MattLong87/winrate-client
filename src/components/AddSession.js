import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class AddSession extends React.Component {

    addSession(e){
        e.preventDefault();
        this.props.dispatch(actions.addSession({game: this.gameName.value}));
    }

    render(){ return (
        <div>
            <h1>Add a Session</h1>
            <form id="js-add-session" onSubmit={(e) => this.addSession(e)}>
                <div className="game-name">
                    <label htmlFor="game">Game:</label>
                    <input className="typeahead" id="js-select-game" type="text" name="game" placeholder="Game Name" ref={(a)=>{this.gameName = a}}/>
                </div>
                <div className="players-input">
                    <section id="players-input">
                        <label htmlFor="players">Players:</label>
                        <input className="typeahead" id="js-add-player" type="text" placeholder="Add a Player" ref={(a)=>{this.players = a}}/>
                        <section id="js-players-added" className="players-added"></section>
                    </section>
                </div>
                <section id="hidden-inputs"></section>
                <div className="winner-selection">
                    <label htmlFor="winner">Winner:</label>
                    <select name="winner" id="winner">
                    </select>
                </div>
                <button type="submit" id="submit">Submit</button>
            </form>
            <section className="js-session-added">
                <span className="js-game"></span>
                <span className="js-players"></span>
                <span className="js-winner"></span>
            </section>
        </div>
    )}
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(AddSession);