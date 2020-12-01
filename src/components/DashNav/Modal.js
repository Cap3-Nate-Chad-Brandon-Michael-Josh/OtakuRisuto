import { render } from "@testing-library/react"
import React, { Component } from "react"
import './Modal.css'

export default class Modal extends Component {
    state = {
        modal: false,
        className: "modal-wrapper",
        classNameHidden: "modal-wrapper2"
    }

    handleModalclick = () => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        const animeImg = require('../../img/animeCover.png')
        return (

            <div>
                <div className={(this.state.modal) ? this.state.className : this.state.classNameHidden}>
                    {(this.props.anime && this.props.anime.map(anime => {
                        return (
                            <div>
                                <div className="modal-header">
                                    <p className='Title'>{anime.title}</p>
                                </div>
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <img src={anime.image_url} />
                                        <h3>Genres:</h3>
                                        {anime.genre.map(genre => <h4>{genre}</h4>)}
                                        <h3>Episode Count:</h3>
                                        <h4>{anime.episodeCount}</h4>
                                        <h3>Rating: {anime.rating}</h3>
                                        <p>Description: {anime.description}</p>
                                    </div>
                                    <div className="modal-footer">
                                    </div>
                                </div>
                            </div>

                        )
                    }))}



                </div>

                <button className="modalS" onClick={this.handleModalclick}>
                    <i className="fas fa-list-alt"></i>
                </button>
            </div>


        )

    }
}