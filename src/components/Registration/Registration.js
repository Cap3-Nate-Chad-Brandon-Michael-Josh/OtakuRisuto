//form for registering

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import OtakuContext from "../../contexts/OtakuContext";
import "./Registration.css";

class Registration extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  state = { error: null };

  static contextType = OtakuContext;

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password, password2 } = event.target;
    AuthApiService.postUser({
      email: email.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        this.onRegistrationSuccess(username.value, password.value);
        email.value = "";
        username.value = "";
        password.value = "";
        password2.value = "";
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  onRegistrationSuccess = (username, password) => {
    AuthApiService.postLogin({
      username: username,
      password: password,
    })
      .then((res) => {
        this.context.processLogin(res.authToken);
        const { history } = this.props;
        this.context.setRegistration(true);
        history.push("/home");
      })
      .then(() => {})
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

    render(){
        return(
            <form className='Registration' onSubmit={this.handleSubmit}>
                <label htmlFor='email'>Email</label><br></br>
                <input type='text' name='email' className='' placeholder='email'></input><br></br>
                <label htmlFor="username" ref={this.firstInput}>Username</label><br></br>
                <input type='text' name='username' className='' placeholder='username'></input><br></br>
                <label htmlFor='password'>Password</label><br></br>
                <input type='password' name='password' className='' placeholder='password'></input><br></br>
                <label htmlFor='re-enter password'>Re-enter password</label><br></br>
                <input type='password' className='' name='password2' placeholder='re-enter password'></input><br></br>
                <button type='submit' className=''>Submit</button>
            </form>
        )
    }
}

export default Registration;
