import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";

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
        <h3>Forgotten Password?</h3>
        <p>{this.state.message}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          <input type="submit" value="Reset Password" />
        </form>
      </div>
    );
  }
}
