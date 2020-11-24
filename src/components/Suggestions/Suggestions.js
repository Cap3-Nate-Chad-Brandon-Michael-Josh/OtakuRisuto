//should give a list of suggestions for the purpose of prefilling some anime lists that someone might be interested in. Should occur during registration process
import React, { Component } from 'react'
import KitsuApiService from '../../services/kitsuApiService'
import SuggestionsItem from '../SuggestionsItem/SuggestionsItem'
import Context from '../../contexts/OtakuContext'
import './Suggestions.css'

export default class Suggestions extends Component {
  state = {
    suggestions: []
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

  renderSuggestionsItem = () => {
    return this.state.suggestions.map((anime, index) => {
      return (
        <>
          <input name={`suggestion${index}`} type='checkbox' id={`checkbox${index}`} className='suggestionsItemCheckbox'/>
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
    // checks to see what checkboxes are checked. Then proceeds to match the checked anime indexes to this.state.suggestions and pushes them into an new array to be sent to the OR API
    let inputElements = document.getElementsByClassName('suggestionsItemCheckbox')
    let suggestionsResults = []
    for(var i=0; i<10; i++) {
      if(inputElements[i].checked) {
        suggestionsResults.push(this.state.suggestions[i])
      }
    }

    // KitsuApiService.postList({
    //   anime: [] // suggestions
    // })
    this.context.setRegistration()
  }

  handleCancelSubmit = () => {
    this.context.setRegistration()
  }

  render() {
    return (
      <div className='3sBody'>
        <div className='container'>
          {this.state.seggestions !== [] &&
          <form className='suggestionsListForm' onSubmit={this.handleSubmitForm}>
            {this.renderSuggestionsItem()}
            <button type='submit'>Submit</button>
            <button onClick={this.handleCancelSubmit}>Cancel</button>
          </form> }
        </div>
      </div>
    )
  }
}
