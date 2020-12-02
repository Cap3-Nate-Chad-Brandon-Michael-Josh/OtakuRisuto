//should give a list of suggestions for the purpose of prefilling some anime lists that someone might be interested in. Should occur during registration process
import React, { Component } from 'react'
import KitsuApiService from '../../services/kitsuApiService'
import SuggestionsItem from '../SuggestionsItem/SuggestionsItem'
import Context from '../../contexts/OtakuContext'
import './Suggestions.css'
import OtakuApiService from '../../services/otakuApiService'

export default class Suggestions extends Component {
  state = {
    suggestions: [],
    hoverIndex: 4
  }

  static contextType = Context
  
  componentDidMount () {
    console.log('suggestions component did mount')
    KitsuApiService.getAnimeSuggestions() 
      .then(res => { 
        console.log(KitsuApiService.serializeAnime(res.included, res.data))
        this.setState({
          suggestions: KitsuApiService.serializeAnime(res.included, res.data)
        })    
      })
  }

  handleHover = (index) => {
    console.log('hanlde hover', this.state.hoverIndex)
    this.setState({
      hoverIndex: index
    })
  }

  renderSuggestionsItem = () => {
    return this.state.suggestions.map((anime, index) => {
      let background = {backgroundImage: `url(${anime.image_url})`}
      return (
        // <>
        //   <input name={`suggestion${index}`} type='checkbox' id={`checkbox${index}`} className='suggestionsItemCheckbox'/>
        //   <label htmlFor={`checkbox${index}`}>
        //     <button>
        //     <SuggestionsItem
        //       key = {index}
        //       title = {anime.title}
        //       image = {anime.mediumImage}
        //       description = {anime.description}
        //       episodeCount = {anime.episodeCount}
        //       rating = {anime.rating}
        //       genres = {anime.genres}
        //     />
        //     </button>
        //   </label>
        // </>
        
        <label className='optionItem'> 
          <input type='checkbox' className='suggestionsItemCheckbox'></input>
          {this.state.hoverIndex !== index && 
          <div className='optionInner' style={background} onMouseEnter={() => this.handleHover(index)}>
            <div className='tickmark'></div>
            <div className='icon'>{anime.title}</div>
          </div>
          }
          {this.state.hoverIndex === index &&
          <div className='optionInner' style={{backgroundColor: 'black'}} onMouseLeave={() => this.handleHover(null)}>
            <div className='tickmark'></div>
            <div className='icon'>
              <span>{anime.title}</span>
              <span>{anime.description}</span>
              <span>{anime.rating}</span>
              <span>{anime.episodeCount}</span>
              <span>{anime.genre}</span>
            </div>
          </div>
          }
        </label>
      )
    })
  }

  handleSubmitForm = event => {
    event.preventDefault()
    // checks to see what checkboxes are checked. Then proceeds to match the checked anime indexes to this.state.suggestions and pushes them into an new array to be sent to the OR API
    let inputElements = document.getElementsByClassName('suggestionsItemCheckbox')
    let suggestionsResults = []
    for(var i=0; i<10; i++) {
      if(inputElements[i].checked) {
        let anime = this.state.suggestions[i]
        suggestionsResults.push({
          title: anime.title,
          description: anime.description,
          image_url: anime.mediumImage,
          rating: anime.rating,
          episode_count: anime.episodeCount,
          genre: anime.genres
        })
      }
    }

    OtakuApiService.postList('My First Anime List', false, suggestionsResults)
    this.context.setRegistration()
  }

  handleCancelSubmit = () => {
    this.context.setRegistration(false)
  }

  render() {
    return (
      // <div className='3sBody'>
      //   <div className='container'>
      //     {this.state.seggestions !== [] &&
      //     <form className='suggestionsListForm' onSubmit={this.handleSubmitForm}>
      //       <p>To help you get started we pulled some of the most popular anime to add to your first list!</p>
      //       {this.renderSuggestionsItem()}
      //       <button type='submit'>Submit</button>
      //       <button onClick={this.handleCancelSubmit}>Cancel</button>
      //     </form> }
      //   </div>
      // </div>
      <form className='suggestionsListForm' onSubmit={this.handleSubmitForm}>
        {this.state.seggestions !== [] &&
        <div className='wrapper'>
          <div className='title'>
            Choose Your Favorites!
          </div>
          <div></div>
          <div className='container'>
            {this.renderSuggestionsItem()}
          </div>
        </div>
        }
      <button type='submit'>Submit</button>
      <button onClick={this.handleCancelSubmit}>Cancel</button>
      </form>
    )
  }
}
