import React, { Component } from 'react'

export default class SuggestionsItem extends Component {
  render() {
    const { title, description, rating, episodeCount } = this.props
    return (
      // <div className='suggestionsItemContainer'>
      //   <h2>{title}</h2>
      //   <div className='suggestionsItemMain'>
      //     <span>{description}</span>
      //     <span>{episodeCount}</span>
      //     <span>{rating}</span>
      //   </div>
      // </div>

        <div className="box">
          <h2>{title}</h2>
          <h3>service one</h3>
          <p>{description}</p>
        </div>  
    )
  }
}