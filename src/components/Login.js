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

        let logInError = "";
        if(this.props.logInError){
            logInError = <h3 className='log-in-error'>Invalid username or password</h3>
        }

        let demoEmail = "";
        let demoPassword = "";

        if(this.props.demoAccount){
            demoEmail = "Demo_Account@gmail.com";
            demoPassword = "abc123";
        }
        
        return (
            <div className='login'>
                <h1 className='desktop-only'>Login</h1>
                <form className='login-form' id='login-form' onSubmit={(e) => this.login(e)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' defaultValue={demoEmail}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' defaultValue={demoPassword}/>
                    </div>
                    {logInError}
                    <button type='submit'>Log In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    logInError: state.logInError
});

export default connect(mapStateToProps)(Login);