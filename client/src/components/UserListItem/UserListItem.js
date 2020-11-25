//Should return a list for displaying on dashboard. Or nav bar? Instructions unclear dick caught in ceiling fan. (Please remove this comment when you write this so it doesnt get into final production guys)

import React, { Component } from 'react'
import UserAnimeItem from '../UserAnimeItem/UserAnimeItem'
import UserList from '../../store/testStoreForUserListRoute'

export default class UserListItem extends Component {
  state = {
    userList: UserList,
    expandedItem: null,
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

  updateExpandedItem = (index) => {
    let update = index
    // this will allow an already expanded list item to collapse
    if(index === this.state.expandedItem) {
      update = null
    }
    this.setState({
      expandedItem: update
    })
  }
  
  renderListItems = () => {
    const { userList } = this.state
    return userList.anime.map((anime, index) => {
      // 1. this will default all items to their non-expanded view
      // 2. the updateExpand function will update the expandedItem 
      // within state when the child component is clicked based on 
      // the index value passed in as a prop
      let expand = false
      if(this.state.expandedItem === index) {
        expand = true
      }
      return (
        <UserAnimeItem 
          key = {index}
          index = {index}
          title = {anime.title}
          description = {anime.description}
          imageUrl = {anime.imageUrl}
          rating = {anime.rating}
          episodeCount = {anime.episodeCount}
          expand = {expand}
          updateExpandedItem = {this.updateExpandedItem}
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
