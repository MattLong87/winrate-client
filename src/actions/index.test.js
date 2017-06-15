import * as actions from '../actions';

describe('deleteSessionSuccess', () => {
    it('should return the action', () => {
        const action = actions.deleteSessionSuccess("data");
        expect(action.type).toEqual("DELETE_SESSION_SUCCESS");
        expect(action.userData).toEqual("data");
    })
});

describe('deleteSessionError', () => {
    it('should return the action', () => {
        const action = actions.deleteSessionError("data");
        expect(action.type).toEqual("DELETE_SESSION_ERROR");
        expect(action.err).toEqual("data");
    })
});

describe('addSessionSuccess', () => {
    it('should return the action', () => {
        const action = actions.addSessionSuccess("data");
        expect(action.type).toEqual("ADD_SESSION_SUCCESS");
        expect(action.userData).toEqual("data");
    })
});

describe('addSessionError', () => {
    it('should return the action', () => {
        const action = actions.addSessionError("data");
        expect(action.type).toEqual("ADD_SESSION_ERROR");
        expect(action.err).toEqual("data");
    })
});

describe('logInUserSuccess', () => {
    it('should return the action', () => {
        const action = actions.logInUserSuccess("data");
        expect(action.type).toEqual("LOG_IN_USER_SUCCESS");
        expect(action.userData).toEqual("data");
    })
});

describe('logInUserError', () => {
    it('should return the action', () => {
        const action = actions.logInUserError("data");
        expect(action.type).toEqual("LOG_IN_USER_ERROR");
        expect(action.err).toEqual("data");
    })
});

describe('signUpUserSuccess', () => {
    it('should return the action', () => {
        const action = actions.signUpUserSuccess("data");
        expect(action.type).toEqual("SIGN_UP_USER_SUCCESS");
        expect(action.userData).toEqual("data");
    })
});

describe('signUpUserError', () => {
    it('should return the action', () => {
        const action = actions.signUpUserError("data");
        expect(action.type).toEqual("SIGN_UP_USER_ERROR");
        expect(action.err).toEqual("data");
    })
});

describe('deleteSession', () => {
    it('should dispatch deleteSessionSuccess', () => {
        const userData = {
            sessions: []
        }
        global.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json() {
                    return userData
                }
            })
        )
        const dispatch = jest.fn();
        return actions.deleteSession()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledWith(actions.deleteSessionSuccess(userData));
        })
    })
})