// Login Route Container

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import "./LoginRoute.css";

class LoginRoute extends Component {
<<<<<<< HEAD
  render() {
    return (
      <section className="LoginRoute">
        <h1>OtakuRisuto</h1>
        <Link to={"/"}>Landing</Link>
        <br></br>
        <Login history={this.props.history} />
        <Link className="Register-QA" to={"/register"}>
          Don't have an account yet?
        </Link>
        <br></br>

        <Link to={"/register"}>Sign Up</Link>
      </section>
    );
  }
=======
    render(){
        return(
            <section className='LoginRoute'>
                <h1>OtakuRisuto</h1>
                <div className='LoginContainer'>
                    <br></br>
                    <Login history={this.props.history}/>
                </div>
                <div className='Register-QA-Container'>
                    <Link className="Register-QA" to={'/register'}>Don't have an account yet?</Link><br></br>
                </div>
            </section>
        )
    }
>>>>>>> loginRegistrationStyleUpdates
}

export default LoginRoute;
