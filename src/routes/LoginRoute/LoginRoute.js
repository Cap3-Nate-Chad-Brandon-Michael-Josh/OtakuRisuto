// Login Route Container

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Login from '../../components/Login/Login'
import './LoginRoute.css'

class LoginRoute extends Component {
    render(){
        return(
            <section className='LoginRoute'>
                <h1>OtakuRisuto</h1>
                <Link to={'/'}>landing</Link>
                <br></br>
                <Login />
                <Link className="Register-QA" to={'/register'}>Don't have an account yet?</Link><br></br>
                {/* <p>this is the login page</p> */}
                <Link to={'/register'}>Sign Up</Link>
            </section>
        )
    }
}

export default LoginRoute;