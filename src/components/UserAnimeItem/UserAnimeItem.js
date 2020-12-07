//Should return an anime item to be displayed in a list on the dashboard
//Will return the data for an anime (desc, image, rating ect.) from the OtakuRisuto database and display for users to see

import React, { Component } from 'react'

export default class UserAnimeItem extends Component {
  state = {
    expanded: false,
  }

  // this function is responsible for sending the index 
  // up to the parent component's state
  handleExpand = () => {
    this.props.updateExpandedItem(this.props.index)
  }

  render() {
    //asuming all anime details will be passed in from the parent component
    const { title, description, imageUrl, rating, episode_count, expand, genres } = this.props
    return (
      <div onClick={this.handleExpand} className='animeItemContainer'>
        <div className='animeItemHeader'>
          <h2>{title}</h2>
        </div>
        { expand && 
        <div className='animeItemExpanded'>
          <p>Description: {description}</p>
          <img src={imageUrl} alt={title}></img>
          <p>Rating: {rating}</p>
          <p>Episode Count: {episode_count}</p>
          <div>Genres: {genres.map((genre, index) => <p key={index}>{genre}</p>)}</div>
        </div>
        }
      </div>
    )
  }
}
