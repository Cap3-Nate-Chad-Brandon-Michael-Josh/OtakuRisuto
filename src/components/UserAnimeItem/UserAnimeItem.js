//Should return an anime item to be displayed in a list on the dashboard
//Will return the data for an anime (desc, image, rating ect.) from the OtakuRisuto database and display for users to see

import React, { Component } from 'react'

export default class UserAnimeItem extends Component {
  render() {
    //asuming all anime details will be passed in from the parent component
    const { } = this.props
    return (
      <div className='animeItemContainer'>
        <div className='animeItemHeader'>
          <h2>Title of Anime</h2>
        </div>
        <div className='animeItemMain'>
          <span>Description</span>
          <span>Genre</span>
          <span>Rating</span>
          <span>Episode Count</span>
        </div>
      </div>
    )
  }
}
