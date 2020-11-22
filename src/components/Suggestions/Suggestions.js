//should give a list of suggestions for the purpose of prefilling some anime lists that someone might be interested in. Should occur during registration process
import React, { Component } from 'react'
import kitsuApiService from '../../services/kitsuApiService'
import SuggestionsItem from '../SuggestionsItem/SuggestionsItem'
import Store from '../../store/testStoreForUserListRoute'
import './Suggestions.css'

export default class Suggestions extends Component {
  state = {
    suggestions: Store
  }
  
  componentDidMount () {
    // kitsuApiService.getAnimeSuggestions() 
    //   .then(res => {
    //     this.setState({
    //       suggestions: res
    //     })
    //   })
  }

  renderSuggestionsItem = () => {
    console.log('renderSuggestion', this.state.suggestions.anime)
    return this.state.suggestions.anime.map((anime, index) => {
      console.log(anime)
      return (
        <SuggestionsItem
          key = {index}
          title = {anime.title}
          description = {anime.description}
          episodeCount = {anime.episodeCount}
          rating = {anime.rating}
        />
      )
    })
  }

  render() {
    return (
      <div className='suggestionsBody'>
        {/* <div className='suggestionsContainer'> */}
        <div className='container'>
          {this.renderSuggestionsItem()}
        </div>
      </div>
    )
  }
}
