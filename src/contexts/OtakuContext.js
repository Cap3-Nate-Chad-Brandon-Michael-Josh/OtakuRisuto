import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';


const OtakuContext = React.createContext({
  user: {},
  error: null,
  searchTerm: '',
  searchOption: '',
  kitsuAnimeData: [],
  searchedUserData: [],
  publicListsData: [],     
  registration: false,
  currentList: {},
  resetComments: () => {},
  setCurrentList: () => {},
  setRegistration: () => {},  
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setSearchTerm: () => {},
  setSearchOption: () => {},
  setKitsuAnimeData: () => {},
  setSearchedUserData: () => {},
  setPublicListsData: () => {},  
  processLogin: () => {},
  processLogout: () => {},
})
export default OtakuContext;

export class OtakuProvider extends Component {
  constructor(props) {
    super(props)
    const state = { 
      user: {},
      kitsuAnimeData: [],
      searchedUserData: [],
      publicListsData: [],      
      error: null,
      searchTerm: '',
      searchOption: '', 
      registration: false,
      currentList: {}
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

  resetComments = comment => {
    const newComment = comment;
    newComment.username = this.state.user.username;
    const newList = {...this.state.currentList};
    newList.comments = [...newList.comments, newComment];
    this.setState({currentList: newList});
  }

  setRegistration = (value) => {
    this.setState({
      registration: value
    })
  }

  setCurrentList = data => {
    this.setState({currentList: data})
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

  setKitsuAnimeData = data => {
    this.setState({ kitsuAnimeData: data })
  }
  
  setSearchedUserData = data => {
    this.setState({ searchedUserData: data })
  }

  setPublicListsData = data => {
    this.setState({ publicListsData: data })
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
      kitsuAnimeData: this.state.kitsuAnimeData,
      searchedUserData: this.state.searchedUserData,
      publicListsData: this.state.publicListsData,      
      searchTerm: this.state.searchTerm,
      searchOption: this.state.searchOption,
      currentList: this.state.currentList,
      resetComments: this.resetComments,
      setCurrentList: this.setCurrentList,
      setSearchedUserData: this.setSearchedUserData,
      setKitsuAnimeData: this.setKitsuAnimeData,
      setPublicListsData: this.setPublicListsData,
      setKitsuGenreData: this.setKitsuGenreData,
      registration: this.state.registration,
      setSearchTerm: this.setSearchTerm,
      setRegistration: this.setRegistration,
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