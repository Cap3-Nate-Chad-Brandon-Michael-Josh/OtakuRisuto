// Search results container
import Header from "../../components/Header/Header";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import OtakuContext from "../../contexts/OtakuContext";
import KitsuAnimeItem from "../../components/KitsuAnimeItem/KitsuAnimeItem";
import UserResultItem from "../../components/UserResultItem/UserResultItem";
import SearchPublicListResults from "../../components/SearchPublicListsResults/SearchPublicListsResults";
import OtakuApiService from "../../services/otakuApiService";

class ResultsRoute extends Component {
  state = {
    error: null,
    searchTerm: this.context.searchTerm,
    searchOption: this.context.searchOption,
    kitsuAnimeData: this.context.kitsuAnimeData,
    searchedUserData: this.context.searchedUserData,
    publicListsData: this.context.publicListsData,
    addToSelectedList: null,
    expandedItem: null,
  };

  static contextType = OtakuContext;

  async componentDidMount() {
    await OtakuApiService.getLoggedInUserLists().then((res) =>
      this.context.setLoggedInUserLists(res)
    );
  }

  handleDetails = (event, item) => {
    event.preventDefault();
    let update = item;
    if (item === this.state.expandedItem) {
      update = null;
    }
    this.setState({ expandedItem: update });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddToList = (event, anime) => {
    event.preventDefault();
    OtakuApiService.addAnimeToList(anime, this.state.addToSelectedList);
    let addedTo = this.context.loggedInUserLists.find(list => {      
      return list.list_id === Number(this.state.addToSelectedList)
    })    
    this.setState({ 
      expandedItem: null,        
    }); 
    
    alert(`${anime.title} added to ${addedTo.name}`)   
  };

  renderAnimeFromKitsu() {
    if (this.context.kitsuAnimeData) {
      return (
        <div>
          {this.context.kitsuAnimeData.map((anime, index) => {
            let details = false;
            if (this.state.expandedItem === anime.title) {
              details = true;
            }
            return (
              <KitsuAnimeItem
                key={(index, anime.title)}
                anime={anime}
                userLists={this.context.loggedInUserLists}
                changeSelectedList={this.handleChange}
                submitAnime={this.handleAddToList}
                expanded={details}
                clickDetails={this.handleDetails}
              />
            );
          })}
        </div>
      );
    }
  }

  handleViewUserClick = (event, userId) => {
    event.preventDefault();
    this.props.history.push(`/userProfile/${userId}`);
  };

  renderUsers() {
    if (this.context.searchedUserData) {
      return (
        <div>
          {this.context.searchedUserData.map((user, index) => {
            return (
              <UserResultItem
                user={user}
                key={index}
                viewUser={this.handleViewUserClick}
              />
            );
          })}
        </div>
      );
    }
  }

  handleViewListClick = (event, listId) => {
    event.preventDefault();
    this.props.history.push(`/SearchedList/${listId}`);
  };

  renderLists() {
    if (this.context.publicListsData) {
      return (
        <div>
          {this.context.publicListsData.map((list, index) => {
            return (
              <SearchPublicListResults
                list={list}
                key={(index, list.list_id)}
                viewList={this.handleViewListClick}
              />
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <section className="results">
        <Header />
        {this.state.kitsuAnimeData && this.state.kitsuAnimeData
          ? this.context.searchOption === "anime"
            ? this.renderAnimeFromKitsu()
            : null
          : null}

        {this.state.searchedUserData && this.state.searchedUserData
          ? this.context.searchOption === "users"
            ? this.renderUsers()
            : null
          : null}

        {this.state.publicListsData && this.state.publicListsData
          ? this.context.searchOption === "lists"
            ? this.renderLists()
            : null
          : null}
      </section>
    );
  }
}

export default withRouter(ResultsRoute);
