// user dashboard container
import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
// import Modal from '../../components/DashNav/Modal'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchedListRoute.css';
import OtakuContext from '../../contexts/OtakuContext';
import OtakuApiService from '../../services/otakuApiService';
import UserAnimeItem from '../../components/UserAnimeItem/UserAnimeItem';
import Comments from '../../components/Comments/Comments';


class SearchedListRoute extends Component {
    state = {
        error: null,
        expandedItem: null,
        viewing: false,
        list: this.context.currentList,
    }

    static contextType = OtakuContext;

    async componentDidMount() {
        let id = this.props.match.params.id;
        await OtakuApiService.getListInfo(id)
            .then(res => {
                this.context.setCurrentList(res);
            })
            .catch(this.context.setError)

        console.log(this.context.currentList);
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
        return (
            (this.context.currentList.anime && this.context.currentList.anime.map((anime, index) => {
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
                        genres={anime.genre}
                        expand={expand}
                        updateExpandedItem={this.updateExpandedItem}
                    />
                )
            }))
        )
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
                <h2>{this.state.list && this.state.list.name}</h2>
                {this.context.currentList ? this.renderListItems() : null}
                <Comments currentList={this.context.currentList} />
            </section>

        )
    }
}

export default SearchedListRoute;