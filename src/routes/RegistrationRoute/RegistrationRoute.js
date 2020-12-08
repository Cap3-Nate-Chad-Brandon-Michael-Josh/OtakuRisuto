// Registration Route Container

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Registration from "../../components/Registration/Registration";
import "./RegistrationRoute.css";
class RegistrationRoute extends Component {
    render(){
        return(
            <section className='RegistrationRoute'>
                <h1>OtakuRisuto</h1>
                <div className='RegistrationContainer'>
                    <br></br>
                    <Registration history={this.props.history}/>
                </div>
                <div className='Login-QA-Container'>
                    <Link className='Login-QA' to={'/login'}>Already have an account?</Link><br></br>
                </div>
            </section>
        )
    }
}

export default RegistrationRoute;
