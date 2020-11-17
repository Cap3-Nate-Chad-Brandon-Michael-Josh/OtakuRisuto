// Registration Route Container

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RegistrationRoute extends Component {
    render(){
        return(
            <section className='RegistrationRoute'>
                <Link to={'/'}>landing</Link>
                <br></br>
                <Link to={'/login'}>Already have an account?</Link>
                <p>this is the registration page</p>
                <Link to={'/home'}>dashboard</Link>
            </section>
        )
    }
}

export default RegistrationRoute;