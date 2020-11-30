// Registration Route Container

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Registration from '../../components/Registration/Registration'
import './RegistrationRoute.css'
class RegistrationRoute extends Component {
    render(){
        return(
            <section className='RegistrationRoute'>
                 <h2>OtakuRisuto</h2>
                <Link to={'/'}>landing</Link>
                <br></br>
                <Registration history={this.props.history}/>
                <Link className='login-QA' to={'/login'}>Already have an account?</Link><br></br>
                {/* <p>this is the registration page</p> */}
                <Link to={'/home'}>dashboard</Link>
            </section>
        )
    }
}

export default RegistrationRoute;