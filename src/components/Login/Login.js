//login form

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service'
import './login.css'
class Login extends Component {

    static defaultProps = {
        onLoginSuccess: () => { }
      }
    
      static contextType = UserContext
    
      state = { error: null }
    
      firstInput = React.createRef()
    
      handleSubmit = ev => {
        ev.preventDefault()
        const { username, password } = ev.target
    
        this.setState({ error: null })
    
        AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        })
          .then(res => {
            username.value = ''
            password.value = ''
            this.context.processLogin(res.authToken)
            this.props.onLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
    
      componentDidMount() {
        this.firstInput.current.focus()
      }
    
      render() {
        const { error } = this.state
        return (
          <form
            className='main-form center'
            onSubmit={this.handleSubmit}
          >
            <div role='alert'>
              {error && <p>{error}</p>}
            </div>
            <div className='LoginItem'>
              <Label htmlFor='login-username-input'>
                Username
              </Label>
              <Input
                ref={this.firstInput}
                id='login-username-input'
                name='username'
                required
              />
            </div>
            <div className='LoginItem'>
              <Label htmlFor='login-password-input'>
                Password
              </Label>
              <Input
                id='login-password-input'
                name='password'
                type='password'
                required
              />
            </div>
            <footer className='center'>
            <Button className='LoginItem center' type='submit'>
              Login
            </Button>
            </footer>
          </form>
        )
      }
    }

    render(){
        return(
            <form className='Login' onSubmit={this.handleSubmit}>
                <label for="email">Email</label><br></br>
                <input type='text' className='' placeholder='email'></input><br></br>
                <label for="email">Password</label><br></br>
                <input type='text' className='' placeholder='password'></input><br></br>
                <button type='submit' className='Submit'>Login</button>
            </form>
        )
    }
}

export default Login;