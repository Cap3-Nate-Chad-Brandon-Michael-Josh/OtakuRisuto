// Login Route Container

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import "./LoginRoute.css";

class LoginRoute extends Component {
  render() {
    return (
      <section className="LoginRoute">
        <h1>OtakuRisuto</h1>
        <div className="LoginContainer">
          <br></br>
          <Login history={this.props.history} />
        </div>
        <div className="Register-QA-Container">
          <Link className="Register-QA" to={"/register"}>
            Don't have an account yet?
          </Link>
          <br></br>
        </div>
        <div className="Register-QA-Container">
          <Link className="Register-QA" to={"/reset"}>
            Forgotten password?
          </Link>
          <br></br>
        </div>
      </section>
    );
  }
}

export default LoginRoute;
