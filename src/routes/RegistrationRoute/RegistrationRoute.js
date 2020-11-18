// Registration Route Container

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Registration from '../../components/Registration/Registration'

class RegistrationRoute extends Component {
    render(){
        return(
            <section className='RegistrationRoute'>
                <Link to={'/'}>landing</Link>
                <br></br>
                <Registration />
                <Link to={'/login'}>Already have an account?</Link>
                <p>this is the registration page</p>
                <Link to={'/home'}>dashboard</Link>
            </section>
        )
    }
}

export default RegistrationRoute;