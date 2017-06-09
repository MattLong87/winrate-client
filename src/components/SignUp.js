import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions';
import '../css/form.css'
import '../css/signup.css'

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { missingFields: [] }
    }

    signUp(e) {
        e.preventDefault();
        let requiredFields = ["firstName", "lastName", "email", "password"]
        let emptyFields = [];
        for (let i = 0; i < requiredFields.length; i++) {
            let input = document.getElementById(requiredFields[i]);
            if (!input.value) {
                emptyFields.push(requiredFields[i]);
            }
        }
        if (emptyFields.length === 0) {
            this.setState({});
            this.props.dispatch(actions.signUpUser());
        }
        else {
            this.setState({
                missingFields: emptyFields
            })
        }
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to={'/dashboard'} />
        }
        let missingFields = [];
        for (let i = 0; i < this.state.missingFields.length; i++) {
            missingFields.push(<h3 key={i} className='sign-up-error'>Please enter a {this.state.missingFields[i]}</h3>)
        }

        return (<div className='signup'>
            <h1 className='desktop-only'>Sign Up</h1>
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
                {missingFields}
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    user: state.user
});

export default connect(mapStateToProps)(SignUp);