import React, { Component } from 'react'

export default class SuggestionsItem extends Component {
  render() {
    const { title, description, rating, episode_count } = this.props
    return (
      // <div className='suggestionsItemContainer'>
      //   <h2>{title}</h2>
      //   <div className='suggestionsItemMain'>
      //     <span>{description}</span>
      //     <span>{}</span>
      //     <span>{rating}</span>
      //   </div>
      // </div>

        // <div className="box">
        //   <h2>{title}</h2>
        //   <h3>service one</h3>
        //   <p>{description}</p>
        // </div>  

      <div className='container'>
        <label className='optionItem'>
          <input type='checkbox' className='suggestionsItemCheckbox'></input>
          <div className='optionInner'>
            <div className='tickmark'></div>
            <div className='icon'>{title}</div>
            <div className='anime'></div>
          </div>
        </label>
      </div>
    )
  }
}