import React, { Component } from 'react';
import UserAnimeItem from '../../components/UserAnimeItem/UserAnimeItem';
import OtakuApiService from '../../services/otakuApiService';
// import UserList from '../../store/testStoreForUserListRoute'

export default class SearchedUserListItem extends Component {
  state = {
    animeList: [],
    commentsList: [],
    expandedItem: null,
  }

  componentDidMount () {
    OtakuApiService.getListInfo(this.props.listId)
            .then(res => this.setState({                
                commentsList: res.comments,
                animeList: res.anime,                                
            }))
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
    const { animeList } = this.state    
    return animeList.map((anime, index) => {
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
          imageUrl = {anime.image_url}
          rating = {anime.rating}
          episode_count = {anime.episode_count}
          expand = {expand}
          updateExpandedItem = {this.updateExpandedItem}
        />
      )
    })
  }

  render() {
    return (
      <div className='userListItemContainer'>
        <h2></h2>
        {this.renderListItems()}
      </div>
    )
  }
}
