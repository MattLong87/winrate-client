import * as actions from '../actions';

const initialState = {
    user: {
        username: "MattLong87",
        name: {
            firstName: "Matt",
            lastName: "Long"
        },
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
            winner: "Matt",
            date: "May 8, 2017"
        }]
    }
}

export const winrateReducer = (state = initialState, action) => {
    if (action.type === actions.ADD_SESSION) {
        var newState = { user: {} };
        for (var key in state.user) {
            newState.user[key] = state.user[key];
        }
        newState.user.sessions.push(action.session);
        return newState;
    }

    else if (action.type === actions.LOG_IN_USER_SUCCESS) {
        return {
            user: action.userData,
            isLoggedIn: true
        };
    }

    else if (action.type === actions.LOG_IN_USER_ERROR) {
        return { user: "error logging in" }
    }

    else if (action.type === actions.SIGN_UP_USER_SUCCESS) {
        return {
            user: action.userData,
            isLoggedIn: true
        };
    }

    else if (action.type === actions.SIGN_UP_USER_ERROR) {
        return { user: "error signing up" }
    }

    else if (action.type === actions.DELETE_SESSION_SUCCESS) {
        return {
            user: action.userData,
            isLoggedIn: true
        };
    }

    else if (action.type === actions.DELETE_SESSION_ERROR) {
        return { user: "error deleting session" }
    }

    else if (action.type === actions.ADD_SESSION_SUCCESS) {
        return {
            user: action.userData,
            isLoggedIn: true
        };
    }

    else if (action.type === actions.ADD_SESSION_ERROR) {
        return { user: "error adding session" }
    }

    return state;
}