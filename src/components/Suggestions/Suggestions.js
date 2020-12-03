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
    this.setState({
      hoverIndex: index
    })
  }

  renderSuggestionsItem = () => {
    return this.state.suggestions.map((anime, index) => {
      let background = {backgroundImage: `url(${anime.image_url})`}
      let genreString = ''
      anime.genre.forEach(genre => genreString += `${genre}, `)
      return (
        <label className='optionItem'> 
          <input type='checkbox' className='suggestionsItemCheckbox'></input>
          {this.state.hoverIndex !== index && 
          <div className='optionInner' style={background} onMouseEnter={() => this.handleHover(index)}>
            <div className='tickmark'></div>
            <div className='animeTitle'>{anime.title}</div>
          </div>
          }
          {this.state.hoverIndex === index &&
          <div className='optionInner' style={{backgroundColor: 'black'}} onMouseLeave={() => this.handleHover(null)}>
            <div className='tickmark'></div>
            <div className='animeDescription'>
              <span className='animeDescriptionTitle'>{anime.title}</span><br></br><br></br>
              <span className='animeDescriptionRating'>{`Rating: ${anime.rating}`}</span><br></br>
              <span className='animeDescriptionCount'>{`Episode Count: ${anime.episode_count}`}</span><br></br>
              <span className='animeDescriptionGenre'>{`Genres: ${genreString}`}</span>
            </div>
          </div>
          }
        </label>
      )
    })
  }

  handleSubmitForm = event => {
    console.log('handleSubmitform')
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
          episode_count: anime.episode_count,
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
      <button type='submit' onClick={this.handleSubmitForm}>Submit</button>
      <button onClick={this.handleCancelSubmit}>Cancel</button>
      </form>
    )
  }
}
