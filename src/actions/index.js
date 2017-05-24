const { API_BASE_URL } = require('../config');
var Router = require('react-router');

export const ADD_SESSION = 'ADD_SESSION';
export const addSession = session => ({
    type: ADD_SESSION,
    session
})

export const logInUser = () => dispatch => {
    const loginForm = new FormData(document.getElementById('login-form'));
    let result = {};
    for (var entry of loginForm.entries()) {
        result[entry[0]] = entry[1];
    }
    result = JSON.stringify(result)
    console.log(loginForm);
    fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
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