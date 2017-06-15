const { API_BASE_URL } = require('../config');

export const DELETE_SESSION_SUCCESS = "DELETE_SESSION_SUCCESS";
export const deleteSessionSuccess = userData => ({
    type: DELETE_SESSION_SUCCESS,
    userData
})

export const DELETE_SESSION_ERROR = "DELETE_SESSION_ERROR";
export const deleteSessionError = err => ({
    type: DELETE_SESSION_ERROR,
    err
})

export const deleteSession = (sessionId, token) => dispatch => {
    return fetch(`${API_BASE_URL}/users/me/sessions?access_token=${token}`, {
        method: "DELETE",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ sessionId })
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(userData => {
            dispatch(deleteSessionSuccess(userData))
        }).catch(err => dispatch(deleteSessionError(err)))
}

export const ADD_SESSION_SUCCESS = "ADD_SESSION_SUCCESS";
export const addSessionSuccess = userData => ({
    type: ADD_SESSION_SUCCESS,
    userData
})

export const ADD_SESSION_ERROR = "ADD_SESSION_ERROR";
export const addSessionError = err => ({
    type: ADD_SESSION_ERROR,
    err
})

export const addSession = (token) => dispatch => {
    const addSessionForm = document.getElementById('add-session-form');
    const elements = addSessionForm.elements;
    let body = {
        game: elements.gameName.value,
        players: [],
        winner: elements.winner.value,
        date: Date.now()
    };
    elements.player.forEach((element) => {
        if (element.name === "player" && element.checked) {
            body.players.push(element.value)
        }
        else if (element.name === "game") {
            body.game = element.value;
        }
        else if (element.name === "winner") {
            body.winner = element.value;
        }
    })
    return fetch(`${API_BASE_URL}/users/me/add-session?access_token=${token}`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(body)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(userData => {
            dispatch(addSessionSuccess(userData));
        }).catch(err => dispatch(addSessionError(err)));
}

export const LOG_IN_USER_SUCCESS = "LOG_IN_USER_SUCCESS";
export const logInUserSuccess = userData => ({
    type: LOG_IN_USER_SUCCESS,
    userData
})

export const LOG_IN_USER_ERROR = "LOG_IN_USER_ERROR";
export const logInUserError = err => ({
    type: LOG_IN_USER_ERROR,
    err
})

export const logInUser = () => dispatch => {
    const loginForm = new FormData(document.getElementById('login-form'));
    let result = {};
    for (var entry of loginForm.entries()) {
        result[entry[0]] = entry[1];
    }
    result.email = result.email.toLowerCase();
    result = JSON.stringify(result)
    return fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: result
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(userData => {
            dispatch(logInUserSuccess(userData));
        }).catch(err => dispatch(logInUserError(err)));
};

export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const signUpUserSuccess = userData => ({
    type: SIGN_UP_USER_SUCCESS,
    userData
})

export const SIGN_UP_USER_ERROR = "SIGN_UP_USER_ERROR";
export const signUpUserError = err => ({
    type: SIGN_UP_USER_ERROR,
    err
})

export const signUpUser = () => dispatch => {
    const signUpForm = new FormData(document.getElementById('signup-form'));
    let result = {};
    for (var entry of signUpForm.entries()) {
        result[entry[0]] = entry[1];
    }
    result.email = result.email.toLowerCase();
    result = JSON.stringify(result)
    return fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: result
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(userData => {
            dispatch(signUpUserSuccess(userData));
        }).catch(err => dispatch(signUpUserError(err)));
}