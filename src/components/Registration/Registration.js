//form for registering

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Registration extends Component {
    render(){
        return(
            <form className='Registration'>
                <input type='text' className='' placeholder='email'></input>
                <input type='text' className='' placeholder='password'></input>
                <input type='text' className='' placeholder='re-enter password'></input>
                <button type='submit' className=''>Submit</button>
            </form>
        )
    }
}

export default Registration;