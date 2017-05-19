//import * as actions from '../actions';

const initialState = {
    user: {
        winrate: 26,
        recentPlayers: ["Jon", "Steven", "Kyle"],
        sessions: [{
            game: "Puerto Rico",
            players: ["Matt", "Jon", "Steven"],
            winner: "Jon",
            date: "May 13, 2017"
        },
        {
            game: "Galaxy Trucker",
            players: ["Matt", "Jon", "Kyle"],
            winner: "Kyle",
            date: "May 11, 2017"
        },
        {
            game: "Agricola",
            players: ["Matt", "Jon", "Ian", "James"],
            winner: "Ian",
            date: "May 8, 2017"
        }]
    }
}

export const winrateReducer = (state = initialState) => {
    return state;
}