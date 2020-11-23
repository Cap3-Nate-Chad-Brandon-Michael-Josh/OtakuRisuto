//form for registering

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service'
import OtakuContext from '../../contexts/OtakuContext'
import './Registration.css'

class Registration extends Component {
    state = { error: null }

    static contextType = OtakuContext

    handleSubmit = event => {
        event.preventDefault()
        const { email, password } = event.target
        AuthApiService.postUser({
            email: email.value,
            password: password.value
        })
            .then(user => {
                email.value = ''
                password.value = ''
                this.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    onRegistrationSuccess = () => {
        const { history } = this.props
        this.context.Registration()
        history.push('/dashboard')
    }

    render(){
        return(
            <form className='Registration' onSubmit={this.hanldeSubmit}>
                <label for='email'>Email</label><br></br>
                <input type='text' name='email' className='' placeholder='email'></input><br></br>
                <label for='password'>Password</label><br></br>
                <input type='text' name='password' className='' placeholder='password'></input><br></br>
                <label for='re-enter password'>re-enter password</label><br></br>
                <input type='text' className='' placeholder='re-enter password'></input><br></br>
                <button type='submit' className=''>Submit</button>
            </form>
        )
    }
}

export default Registration;