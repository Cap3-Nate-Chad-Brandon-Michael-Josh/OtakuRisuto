import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import OtakuContext from "../../contexts/OtakuContext";
import "./PasswordResetForm.css";

export default class PasswordResetForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = OtakuContext;
  state = {
    message: null,
    error: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { password, confirmPassword } = e.target;
    const token = this.props.match.params.token;

    this.setState({ message: null });
    this.setState({ error: null });
    if (password.value === confirmPassword.value) {
      AuthApiService.patchPasssword({ token, password: password.value })
        .then((res) => {
          password.value = "";
          confirmPassword.value = "";
          this.context.processLogin(res.authToken);
          history.push("/home");
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    } else {
      this.setState({ message: "Passwords must match!" });
    }
  };
  render() {
    return (
      <div>
        <h1>OtakuRisuto</h1>
        <div className="passwordReset">
          <h3>New Password</h3>
          <p>{this.state.message}</p>
          <p>{this.state.error}</p>
          <form className="Reset" onSubmit={this.handleSubmit}>
            <label htmlFor="password">New Password:</label>
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <br />
            <input type="submit" className="Submit" value="Reset Password" />
          </form>
        </div>
      </div>
    );
  }
}
