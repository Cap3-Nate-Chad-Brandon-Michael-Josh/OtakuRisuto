import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';


const OtakuContext = React.createContext({
  user: {},
  error: null,
  searchTerm: '',
  searchOption: '',
  registration: false,
  setRegistration: () => {},  
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setSearchTerm: () => {},
  setSearchOption: () => {}, 
  processLogin: () => {},
  processLogout: () => {},
})
export default OtakuContext;

export class OtakuProvider extends Component {
  constructor(props) {
    super(props)
    const state = { 
      user: {}, 
      error: null,
      searchTerm: '',
      searchOption: '', 
      registration: false,
    }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,        
        username: jwtPayload.sub,
      }

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle)
  }  

  setRegistration = () => {
    this.setState({
      registration: !this.state.registration
    })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {    
    this.setState({ user })
  }

  setSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  setSearchOption = searchOption => {
    this.setState({ searchOption })
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,      
      username: jwtPayload.sub,
    })    
  }

  processLogout = () => {
    TokenService.clearAuthToken()    
    this.setUser({})
  } 

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      searchTerm: this.state.searchTerm,
      searchOption: this.state.searchOption,
      registration: this.state.registration,
      setRegistration: this.state.setRegistration,
      setSearchTerm: this.setSearchTerm,
      setSearchOption: this.setSearchOption,      
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }

    return (
      <OtakuContext.Provider value={value}>
        {this.props.children}
      </OtakuContext.Provider>
    )
  }
}