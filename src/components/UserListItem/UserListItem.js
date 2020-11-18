//Should return a list for displaying on dashboard. Or nav bar? Instructions unclear dick caught in ceiling fan. (Please remove this comment when you write this so it doesnt get into final production guys)

import React, { Component } from 'react'
import UserAnimeItem from '../UserAnimeItem/UserAnimeItem'

export default class UserListItem extends Component {
  state = {
    userList: {}
  }

  componentDidMount () {
    //fetch call to the OR db. This will return an object with All the list information and an array containing all the anime associated with that list
    //OtakuRisuto.getAllAnime()
    //  .then(res => {
    //   this.setState({
    //     userList: res
    //   })
    // })
  }  
  
  renderListItems = () => {
    const { userList } = this.state
    return userList.anime.map(anime => {
      return (
        <UserAnimeItem 
          title = {anime.title}
          description = {anime.description}
          imageUrl = {anime.imageUrl}
          rating = {anime.rating}
          episodeCount = {anime.episodeCount}
        />
      )
    })
  }

  render() {
    return (
      <div className='userListItemContainer'>
        {this.renderListItems()}
      </div>
    )
  }
}
