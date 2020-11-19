//form for registering

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Registration.css'
class Registration extends Component {
    render(){
        return(
            <form className='Registration'>
                <label for='email'>Email</label><br></br>
                <input type='text' className='' placeholder='email'></input><br></br>
                <label for='password'>Password</label><br></br>
                <input type='text' className='' placeholder='password'></input><br></br>
                <label for='re-enter password'>re-enter password</label><br></br>
                <input type='text' className='' placeholder='re-enter password'></input><br></br>
                <button type='submit' className=''>Submit</button>
            </form>
        )
    }
}

export default Registration;