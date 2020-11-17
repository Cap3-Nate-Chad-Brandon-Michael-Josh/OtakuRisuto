// Login Route Container

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LoginRoute extends Component {
    render(){
        return(
            <section className='LoginRoute'>
                <Link to={'/'}>landing</Link>
                <br></br>
                <Link to={'/register'}>Don't have an account yet?</Link>
                <p>this is the login page</p>
                <Link to={'/home'}>dashboard</Link>
            </section>
        )
    }
}

export default LoginRoute;