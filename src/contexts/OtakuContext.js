import React, { Component } from "react";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

const OtakuContext = React.createContext({
  user: {},
  error: null,
  searchTerm: "",
  searchOption: "",
  kitsuAnimeData: [],
  loggedInUserLists: [],
  searchedUserData: [],
  publicListsData: [],
  registration: false,
  currentList: {},
  resetComments: () => {},
  resetListName: () => {},
  resetUserLists: () => {},
  resetRating: () => {},
  resetCurrentList: () => {},
  setCurrentList: () => {},
  setRegistration: () => {},
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setSearchTerm: () => {},
  setSearchOption: () => {},
  setKitsuAnimeData: () => {},
  setLoggedInUserLists: () => {},
  setSearchedUserData: () => {},
  setPublicListsData: () => {},
  processLogin: () => {},
  processLogout: () => {},
});
export default OtakuContext;

export class OtakuProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      user: {},
      loggedInUserLists: [],
      kitsuAnimeData: [],
      searchedUserData: [],
      publicListsData: [],
      error: null,
      searchTerm: "",
      searchOption: "",
      registration: false,
      currentList: {},
    };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        username: jwtPayload.sub,
      };

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle);
  }

  resetComments = (comment) => {
    const newComment = comment;
    newComment.username = this.state.user.username;
    const newList = { ...this.state.currentList };
    newList.comments = [...newList.comments, newComment];
    this.setState({ currentList: newList });
  };

  resetListName = (name, list_id) => {
    const newList = { ...this.state.currentList };
    const userLists = [...this.state.loggedInUserLists];
    let index = userLists.findIndex((list) => list.list_id === list_id);
    userLists[index].name = name;
    newList.name = name;
    this.setState({
      currentList: newList,
      loggedInUserLists: userLists,
    });
  };

  resetUserLists = (list_id) => {
    const userLists = this.state.loggedInUserLists.filter((item) => {
      return item.list_id !== list_id;
    });
    this.setState({ loggedInUserLists: userLists });
  };

  setRegistration = (value) => {
    this.setState({
      registration: value,
    });
  };

  resetCurrentList = (anime) => {
    const newArr = this.state.currentList.list_anime.filter((item) => {
      return item.list_anime_id !== anime.list_anime_id;
    });
    const newArr2 = this.state.currentList.anime.filter((item) => {
      return item.anime_id !== anime.anime_id;
    });
    const newList = this.state.currentList;
    newList.list_anime = newArr;
    newList.anime = newArr2;
    this.setState({ currentList: newList });
  };

  setCurrentList = (data) => {
    this.setState({ currentList: data });
  };

  setError = (error) => {    
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setLoggedInUserLists = (data) => {
    this.setState({ loggedInUserLists: data });
  };

  setKitsuAnimeData = (data) => {
    this.setState({ kitsuAnimeData: data });
  };

  setSearchedUserData = (data) => {
    this.setState({ searchedUserData: data });
  };

  setPublicListsData = (data) => {
    this.setState({ publicListsData: data });
  };

  setSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  setSearchOption = (searchOption) => {
    this.setState({ searchOption });
  };

  processLogin = (authToken) => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      username: jwtPayload.sub,
    });
  };

  processLogout = () => {
    TokenService.clearAuthToken();
    this.setUser({});
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      kitsuAnimeData: this.state.kitsuAnimeData,
      loggedInUserLists: this.state.loggedInUserLists,
      searchedUserData: this.state.searchedUserData,
      publicListsData: this.state.publicListsData,
      searchTerm: this.state.searchTerm,
      searchOption: this.state.searchOption,
      currentList: this.state.currentList,
      resetComments: this.resetComments,
      resetListName: this.resetListName,
      resetUserLists: this.resetUserLists,
      resetRating: this.resetRating,
      resetCurrentList: this.resetCurrentList,
      setCurrentList: this.setCurrentList,
      setSearchedUserData: this.setSearchedUserData,
      setKitsuAnimeData: this.setKitsuAnimeData,
      setLoggedInUserLists: this.setLoggedInUserLists,
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
    };

    return (
      <OtakuContext.Provider value={value}>
        {this.props.children}
      </OtakuContext.Provider>
    );
  }
}
