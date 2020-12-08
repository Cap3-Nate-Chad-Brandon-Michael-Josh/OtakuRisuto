import React, { Component } from "react";
import "./Modal.css";
import OtakuContext from "../../contexts/OtakuContext";
import OtakuApiService from "../../services/otakuApiService";

export default class Modal extends Component {
  static contextType = OtakuContext;
  state = {
    modal: false,
    className: "modal-wrapper",
    classNameHidden: "modal-wrapper2",
    error: null,
  };

  componentDidMount = () => {
    this.setState({ modal: this.props.show });
  };
  handleModalclick = () => {
    if (this.props.show) {
      this.props.handleResetRandomAnime();
    } else {
      this.setState({ modal: !this.state.modal });
    }
  };

  handleDelete = () => {
    const list_anime = this.context.currentList.list_anime;
    const animeToDelete = list_anime.find(
      (anime) => anime.anime_id === this.props.anime.anime_id
    );

    this.setState({ modal: !this.state.modal });
    this.context.resetCurrentList(animeToDelete);
    OtakuApiService.deleteListAnime(animeToDelete.list_anime_id).catch(
      (error) => {
        this.setState(error);
      }
    );
  };

  render() {
    return (
      <div className="anime-border">
        <h2
          className="anime-title"
          onClick={() => {
            this.handleModalclick();
          }}
        >
          {this.props.anime.title}
        </h2>
        <div
          className={
            this.state.modal || this.props.show
              ? this.state.className
              : this.state.classNameHidden
          }
        >
          <div>
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src={this.props.anime.image_url}
                  alt={"Image of " + this.props.anime.title}
                />
                <h3>Genres:</h3>
                <div className='modal-genre-container'>
                  {this.props.anime.genre.map((genre, index) => (
                    <h4 className='modal-genre-item' key={index}>{genre}</h4>
                  ))}
                </div>
                <h3>Episode Count: {this.props.anime.episode_count}</h3>
                <h3>Rating: {this.props.anime.rating}</h3>
                <p>Description: {this.props.anime.description}</p>
                <button
                className="delete"
                  onClick={() => {
                    this.handleDelete();
                    this.props.handleItemDelete();
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
