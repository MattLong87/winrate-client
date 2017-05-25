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
    fetch(`${API_BASE_URL}/users/me/sessions?access_token=${token}`, {
        method: "DELETE", 
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({sessionId})
    })
    .then(res => {
        if (!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(userData => {
        dispatch(deleteSessionSuccess(userData))
    }).catch(err => dispatch(deleteSessionError(err)))
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
    result = JSON.stringify(result)
    fetch(`${API_BASE_URL}/login`, {
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
    result = JSON.stringify(result)
    fetch(`${API_BASE_URL}/users`, {
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