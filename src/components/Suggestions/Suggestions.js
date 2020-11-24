//should give a list of suggestions for the purpose of prefilling some anime lists that someone might be interested in. Should occur during registration process
import React, { Component } from 'react'
import KitsuApiService from '../../services/kitsuApiService'
import SuggestionsItem from '../SuggestionsItem/SuggestionsItem'
import Store from '../../store/testStoreForUserListRoute'
import Context from '../../contexts/OtakuContext'
import './Suggestions.css'

export default class Suggestions extends Component {
  state = {
    suggestions: Store
  }

  static contextType = Context
  
  componentDidMount () {
    console.log('suggestions component did mount')
    KitsuApiService.getAnimeSuggestions() 
      .then(res => {
        let genreObject = {}
          res.included.map(genre => {
              return genreObject[genre.id] = genre.attributes.title
          })               
          
          // create an array of anime objects with only the data necessary for our purposes.
          let animeArray = []
          res.data.forEach(anime => {
              let animeObject = {};
              animeObject = {
                  title: anime.attributes.canonicalTitle,
                  description: anime.attributes.description,
                  smallImage: anime.attributes.posterImage.tiny,
                  mediumImage: anime.attributes.posterImage.medium,
                  rating: anime.attributes.averageRating,
                  episodeCount: anime.attributes.episodeCount,
                  // only return genreObject values that match the id of genres in the anime object from kitsu.
                  genres: anime.relationships.categories.data.map(genre => {
                      return genreObject[genre.id]
                  })
              }                
              animeArray.push(animeObject)
          })
          console.log('anime array', animeArray)
          this.setState({
            suggestions: animeArray
          })        
      })
      .catch(error => this.context.setError(error))
  }

  onSubmit = event => {
    // On submit, the form will create the users first anime list based on the suggestions they selected
    // Registration will update to false and will cause the dashboard to no render the suggestions view
    event.preventDefault()
    this.context.setRegistration()
    // create list function needs to be implemented 
  }

  renderSuggestionsItem = () => {
    console.log('renderSuggestion', this.state.suggestions.anime)
    return this.state.suggestions.anime.map((anime, index) => {
      console.log(anime)
      return (
        <>
          <input name={`suggestion${index}`} type='checkbox' id={`checkbox${index}`} />
          <label htmlFor={`checkbox${index}`}>
            <SuggestionsItem
              key = {index}
              title = {anime.title}
              image = {anime.mediumImage}
              description = {anime.description}
              episodeCount = {anime.episodeCount}
              rating = {anime.rating}
              genres = {anime.genres}
            />
          </label>
        </>
      )
    })
  }

  handleSubmitForm = event => {
    event.preventDefault()
    const { suggestion1, suggestion2, suggestion3, suggestion4, suggestion5, suggestion6, suggestion7 } = event.target
    // still need to find best way to organize anime array from suggestions
    KitsuApiService.postList({
      anime: [] // suggestions
    })
    this.state.setRegistration()
  }

  handleCancelSubmit = () => {
    this.context.setRegistration()
  }

  render() {
    return (
      <div className='3sBody'>
        <div className='container'>
          <form className='suggestionsListForm' onSubmit={this.handleSubmitForm}>
            {this.renderSuggestionsItem()}
            <button type='submit'>Submit</button>
            <button onClick={this.handleCancelSubmit}>Cancel</button>
          </form>
        </div>
      </div>
    )
  }
}
