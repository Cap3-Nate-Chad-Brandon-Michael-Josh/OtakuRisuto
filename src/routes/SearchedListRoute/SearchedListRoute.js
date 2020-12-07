import Header from "../../components/Header/Header";
import React, { Component } from "react";

import "./SearchedListRoute.css";
import OtakuContext from "../../contexts/OtakuContext";
import OtakuApiService from "../../services/otakuApiService";
import UserAnimeItem from "../../components/UserAnimeItem/UserAnimeItem";
import Comments from "../../components/Comments/Comments";
import Rating from "../../components/Rating/Rating";

class SearchedListRoute extends Component {
  state = {
    error: null,
    expandedItem: null,
    viewing: false,
    list: this.context.currentList,
  };

  static contextType = OtakuContext;

  async componentDidMount() {
    this.context.setCurrentList({});
    let id = this.props.match.params.id;
    await OtakuApiService.getListInfo(id)
      .then((res) => {
        this.context.setCurrentList(res);
      })
      .catch(this.context.setError);
  }

  updateExpandedItem = (index) => {
    let update = index;
    if (index === this.state.expandedItem) {
      update = null;
    }
    this.setState({
      expandedItem: update,
    });
  };

  renderListItems = () => {
    return (
      this.context.currentList.anime &&
      this.context.currentList.anime.map((anime, index) => {
        let expand = false;
        if (this.state.expandedItem === index) {
          expand = true;
        }
        return (
          <UserAnimeItem
            key={index}
            index={index}
            title={anime.title}
            description={anime.description}
            imageUrl={anime.image_url}
            rating={anime.rating}
            episode_count={anime.episode_count}
            genres={anime.genre}
            expand={expand}
            updateExpandedItem={this.updateExpandedItem}
          />
        );
      })
    );
  };
  cloneList = (ev) => {
    let { name, privacy } = ev.target;
    let privateStatus = false;
    if (privacy.checked) {
      privateStatus = true;
    }
    OtakuApiService.postList(
      name.value,
      privateStatus,
      this.context.currentList.anime
    );
  };
  render() {
    return (
      <section className="SearchedListRoute">
        <Header />
<<<<<<< HEAD
=======

>>>>>>> b6d08d01688ca112134e8b53ff0f22101362b951
        <h2>{this.context.currentList && this.context.currentList.name}</h2>
        <h3>
          Owned by:{" "}
          {this.context.currentList && this.context.currentList.owner_username}
        </h3>
        <form onSubmit={this.cloneList}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="privacy">Private:</label>
          <input type="checkbox" id="privacy" name="privacy" value={true} />
          <input type="submit" value="Clone List" />
        </form>
        {this.context.currentList ? this.renderListItems() : null}
        <Rating currentList={this.context.currentList} />
        <Comments currentList={this.context.currentList} />
      </section>
    );
  }
}

export default SearchedListRoute;
