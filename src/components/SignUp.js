import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/form.css'
import '../css/signup.css'

export class SignUp extends React.Component {
    signUp(e) {
        e.preventDefault();
        this.props.dispatch(actions.signUpUser());
    }
    render() {
        return (<div className='signup'>
            <form className='signup-form' id='signup-form' onSubmit={(e) => this.signUp(e)}>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input placeholder='First Name' type="text" name='firstName' id='firstName' />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name='lastName' id='lastName' placeholder='Last Name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id='email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(SignUp);