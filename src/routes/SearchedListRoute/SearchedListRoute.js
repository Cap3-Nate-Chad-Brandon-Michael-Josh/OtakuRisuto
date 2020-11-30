// user dashboard container
import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
// import Modal from '../../components/DashNav/Modal'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchedListRoute.css';
import OtakuApiService from '../../services/otakuApiService';
import SearchedUserListItem from '../../components/SearchedUserListItem/SearchedUserListItem';
import UserAnimeItem from '../../components/UserAnimeItem/UserAnimeItem';


class SearchedListRoute extends Component {
    state = {
        error: null,        
        expandedItem: null,
        viewing: false,
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        await OtakuApiService.getListInfo(id)
            .then(res => this.setState({ list: res }))
    }

    updateExpandedItem = (index) => {
        let update = index
        // this will allow an already expanded list item to collapse
        if (index === this.state.expandedItem) {
            update = null
        }
        this.setState({
            expandedItem: update
        })
    }

    renderListItems = () => {        
        (this.state.list && this.state.list.anime.map((anime, index) => {
            // 1. this will default all items to their non-expanded view
            // 2. the updateExpand function will update the expandedItem 
            // within state when the child component is clicked based on 
            // the index value passed in as a prop
            let expand = false
            if (this.state.expandedItem === index) {
                expand = true
            }
            return (
                <UserAnimeItem
                    key={index}
                    index={index}
                    title={anime.title}
                    description={anime.description}
                    imageUrl={anime.image_url}
                    rating={anime.rating}
                    episodeCount={anime.episode_count}
                    expand={expand}
                    updateExpandedItem={this.updateExpandedItem}
                />
            )
        }))
    }

    render() {
        return (
            <section className='SearchedListRoute'>
                <Header />
                <DashNav />
                {/* <Modal /> */}
                <Link to={'/home'}>
                    Home
            </Link>
                <p>this is the Searched List Route</p>
                <h2>{this.state.list.name}</h2>
                <p>this is the Searched List Route</p>                
                {(this.state.list) ? this.renderListItems() : null}
            </section>

        )
    }
}

export default SearchedListRoute;