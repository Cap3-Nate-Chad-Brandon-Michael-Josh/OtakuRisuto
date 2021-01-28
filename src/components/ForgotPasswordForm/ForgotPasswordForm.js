import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./ForgotPasswordForm.css";

export default class ForgotPasswordForm extends Component {
  state = {
    message: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ message: null });
    const { email } = e.target;
    AuthApiService.emailRequest({ email: email.value }).then(() => {
      this.setState({
        message:
          "Email has been sent to any accounts linked to this email address",
      });
    });
  };
  render() {
    return (
      <div>
        <h1>OtakuRisuto</h1>
        <div className="passwordReset">
          <h3>Forgotten Password?</h3>
          <p>{this.state.message}</p>
          <form className="Reset" onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              id="email"
              name="email"
              className="emailInput"
            />{" "}
            <br />
            <input
              type="submit"
              className="Submit"
              value="Reset Password"
            />{" "}
            <br />
          </form>
        </div>
      </div>
    );
  }
}
