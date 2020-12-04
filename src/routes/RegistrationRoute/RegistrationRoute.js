// Registration Route Container

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Registration from "../../components/Registration/Registration";
import "./RegistrationRoute.css";
class RegistrationRoute extends Component {
<<<<<<< HEAD
  render() {
    return (
      <section className="RegistrationRoute">
        <h2>OtakuRisuto</h2>
        <Link to={"/"}>Landing</Link>
        <br></br>
        <Registration history={this.props.history} />
        <Link className="login-QA" to={"/login"}>
          Already have an account?
        </Link>
        <br></br>

        <Link to={"/login"}>Login</Link>
      </section>
    );
  }
=======
    render(){
        return(
            <section className='RegistrationRoute'>
                <h2>OtakuRisuto</h2>
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
>>>>>>> loginRegistrationStyleUpdates
}

export default RegistrationRoute;
