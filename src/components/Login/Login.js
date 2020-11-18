//login form

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    render(){
        return(
            <form className='Login'>
                <input type='text' className='' placeholder='email'></input>
                <input type='text' className='' placeholder='password'></input>
                <button type='submit' className=''>Submit</button>
            </form>
        )
    }
}

export default Login;