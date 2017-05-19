import React from 'react';

export default function AddSession() {

    return (
        <div>
            <h1>Add a Session</h1>
            <form id="js-add-session">
                <div className="game-name">
                    <label htmlFor="game">Game:</label>
                    <input className="typeahead" id="js-select-game" type="text" name="game" placeholder="Game Name" />
                </div>
                <div className="players-input">
                    <section id="players-input">
                        <label htmlFor="players">Players:</label>
                        <input className="typeahead" id="js-add-player" type="text" placeholder="Add a Player" />
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
    )
}