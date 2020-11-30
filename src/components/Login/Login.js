//login form

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import OtakuContext from '../../contexts/OtakuContext'
import './login.css'
class Login extends Component {

    static defaultProps = {
        onLoginSuccess: () => { }
    }

    static contextType = OtakuContext

    state = { error: null }

    firstInput = React.createRef()

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password } = ev.target
        console.log(username.value)

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
        return (
            <form className='Login' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {this.state.error && <p>{this.state.error}</p>}
                </div>
                <label htmlFor="username" ref={this.firstInput}>Username</label><br></br>
                <input type='text' name='username' className='' placeholder='username'></input><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type='text' name='password' className='' placeholder='password'></input><br></br>
                <button type='submit' className='Submit'>Login</button>
            </form>
        )
    }
}

export default Login;