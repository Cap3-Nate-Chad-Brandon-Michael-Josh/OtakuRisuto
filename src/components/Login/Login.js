//login form

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './login.css'
class Login extends Component {
    render(){
        return(
            <form className='Login'>
                <label for="email">Email</label><br></br>
                <input type='text' className='' placeholder='email'></input><br></br>
                <label for="email">Password</label><br></br>
                <input type='text' className='' placeholder='password'></input><br></br>
                <button type='submit' className='Submit'>Login</button>
            </form>
        )
    }
}

export default Login;