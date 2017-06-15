import { winrateReducer } from './winrateReducer';
import * as actions from '../actions';

describe('Winrate reducer', () => {
    it('should set the initial state when nothing is passed in', () => {
        const state = winrateReducer(undefined, { type: '__unknown' });
        expect(state).toEqual({ loggedIn: false });
    })

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = winrateReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('add session', () => {
        it('should add a new session to the end of state', () => {
            let state = {
                user: {
                    sessions: ["a", "b"]
                }
            };
            let newState;
            newState = winrateReducer(state, actions.addSession("c"));
            newState = winrateReducer(newState, actions.addSession("d"));
            expect(newState.user.sessions).toHaveLength(4);
        })
    })

    describe('login actions', () => {
        it('should populate with userData and set isLoggedIn flag on success', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.logInUserSuccess("userData"));
            expect(newState).toEqual({
                user: "userData",
                isLoggedIn: true
            })
        })

        it('should populate state with error on login error', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.logInUserError("err"));
            expect(newState).toEqual({
                user: "error logging in",
                logInError: true
            })
        })
    })

    describe('signup actions', () => {
        it('should populate with userData and set isLoggedIn flag on success', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.signUpUserSuccess("userData"));
            expect(newState).toEqual({
                user: "userData",
                isLoggedIn: true
            })
        })

        it('should populate state with error on login error', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.signUpUserError("err"));
            expect(newState).toEqual({
                user: "error signing up"
            })
        })
    })

    describe('addSession actions', () => {
        it('should populate with userData on success', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.addSessionSuccess("userData"));
            expect(newState).toEqual({
                user: "userData",
                isLoggedIn: true
            })
        })

        it('should populate state with error on error', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.addSessionError("err"));
            expect(newState).toEqual({
                user: "error adding session"
            })
        })
    })

    describe('delete session actions', () => {
        it('should populate with userData on success', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.deleteSessionSuccess("userData"));
            expect(newState).toEqual({
                user: "userData",
                isLoggedIn: true
            })
        })

        it('should populate state with error on error', () => {
            let currentState = {}
            const newState = winrateReducer(currentState, actions.deleteSessionError("err"));
            expect(newState).toEqual({
                user: "error deleting session"
            })
        })
    })
})