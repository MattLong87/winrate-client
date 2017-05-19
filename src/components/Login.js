import React from 'react';

export default function Login() {

    return (
        <form className='login-form'>
            <div>
                <label htmlFor="username">Email</label>
                <input type="text" name='username' id='username' />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Log In</button>
        </form>
    )
}