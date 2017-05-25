import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';
import '../css/form.css'
import '../css/login.css'

export class Login extends React.Component {

    login(e) {
        e.preventDefault();
        this.props.dispatch(actions.logInUser());
    }

    render() {
        if(this.props.isLoggedIn){
            return <Redirect to={'/dashboard'} />
        }
        
        return (
            <div className='login'>
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Login);