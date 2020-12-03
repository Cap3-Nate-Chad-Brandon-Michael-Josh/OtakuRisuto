import { render } from "@testing-library/react";
import React, { Component } from "react";
import './Modal.css';
import OtakuContext from '../../contexts/OtakuContext';
import OtakuApiService from '../../services/otakuApiService';

export default class Modal extends Component {
    static contextType = OtakuContext;
    state = {
        modal: false,
        className: "modal-wrapper",
        classNameHidden: "modal-wrapper2",
        error: null
    }

    handleModalclick = () => {
        this.setState({ modal: !this.state.modal })
    }

    handleDelete = () => {
        const list_anime = this.context.currentList.list_anime;
        const animeToDelete = list_anime.find(anime => anime.anime_id === this.props.anime.anime_id);
        console.log(animeToDelete.list_anime_id)
        this.setState({ modal: !this.state.modal })
        this.context.resetCurrentList(animeToDelete)
        OtakuApiService.deleteListAnime(animeToDelete.list_anime_id)
            .then(res => {
                console.log(res);

            })
            .catch(error => {
                this.setState((error))
            })
    }

    render() {
        const animeImg = require('../../img/animeCover.png')
        return (
            <div>
                <h2 onClick={this.handleModalclick} >{this.props.anime.title}</h2>
                <div className={(this.state.modal) ? this.state.className : this.state.classNameHidden}>
                    <div>
                        {/* <div className="modal-header">
                            <p className='Title'>{this.props.anime.title}</p>
                        </div> */}
                        <div className="modal-content">
                            <div className="modal-body">
                                <img src={this.props.anime.image_url} />
                                <h3>Genres:</h3>
                                {this.props.anime.genre.map(genre => <h4>{genre}</h4>)}
                                <h3>Episode Count: {this.props.anime.episode_count}</h3>
                                <h3>Rating: {this.props.anime.rating}</h3>
                                <p>Description: {this.props.anime.description}</p>
                                <button onClick={() => {
                                    this.handleDelete()
                                    this.props.handleItemDelete();
                                }}>Delete</button>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="modalS" onClick={this.handleModalclick}>
                <i className="fas fa-list-alt">Expand</i>
                </button> */}
            </div>
        )
    }
}