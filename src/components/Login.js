import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class Login extends React.Component {

    login(e) {
        e.preventDefault();
        this.props.dispatch(actions.logInUser());
    }

    render() {
        return (
            <form className='login-form' id='login-form' onSubmit={(e) => this.login(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>Log In</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Login);