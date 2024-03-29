import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import OtakuContext from "../../contexts/OtakuContext";
import "./login.css";
class Login extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = OtakuContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { history } = this.props;
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        history.push("/home");
      })
      .catch((res) => {
        if(res.error.message){
          this.setState({ error: res.error.message});
        } else if (res.error){
          this.setState({ error: res.error});
        }
      });
  };

  componentDidMount() {
    if (this.firstInput.current) {
      this.firstInput.current.focus();
    }
  }

  render() {
    return (
      <form className="Login" onSubmit={this.handleSubmit}>
        <div role="alert">{this.state.error && <p>{this.state.error}</p>}</div>
        <label htmlFor="username" ref={this.firstInput}>
          Username
        </label>
        <br></br>
        <input
          type="text"
          id="username"
          className=""
          placeholder="username"
        ></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input
          type="password"
          id="password"
          className=""
          placeholder="password"
        ></input>
        <br></br>
        <button type="submit" className="Submit">
          Login
        </button>
        <p>Demo Username: DemoUser</p>
        <p>Demo Password: P@ssword1</p>
      </form>
    );
  }
}

export default Login;
