// Search results container
import Header from '../../components/Header/Header';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import OtakuContext from '../../contexts/OtakuContext';
import KitsuResultItem from '../../components/KitsuResultItem/KitsuResultItem';
import UserResultItem from '../../components/UserResultItem/UserResultItem';
import SearchedPublicListsResults from '../../components/SearchPublicListsResults/SearchPublicListsResults';

class ResultsRoute extends Component {
    state = {
        error: null,
        searchTerm: this.context.searchTerm,
        searchOption: this.context.searchOption,
        kitsuAnimeData: this.context.kitsuAnimeData,
        searchedUserData: this.context.searchedUserData,
        publicListsData: this.context.publicListsData,        
        expandedItem: null,
    }

    static contextType = OtakuContext

    componentDidMount() {

    }

    handleDetails = (event, item) => {
        event.preventDefault()
        let update = item
        // this will allow an already expanded list item to collapse
        if (item === this.state.expandedItem) {
            update = null
        }
        this.setState({ expandedItem: update })
    }

    renderAnimeFromKitsu() {
        if (this.context.kitsuAnimeData) {
            return (
                <div>
                    {this.context.kitsuAnimeData.map((anime, index) => {
                        let details = false                        
                        if (this.state.expandedItem === anime.title) {
                            details = true
                        }
                        return (
                            <KitsuResultItem
                                key={index}
                                anime={anime}
                                expanded={details}
                                clickDetails={this.handleDetails}                                
                                 />
                        )
                    })}
                </div>
            )
        }
    }

    renderUsers() {
        if (this.context.searchedUserData) {
            return (
                <div>
                    {this.context.searchedUserData.map(user => {
                        return <UserResultItem user={user} />
                    })}
                </div>
            )
        }
    }

    renderLists() {
        if (this.context.publicListsData) {
            return (
                <div>
                    {this.context.publicListsData.map(list => {
                        return <SearchedPublicListsResults list={list} />
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <section className='results'>
                <Header />
                <Link to={'/'}>
                    landing page
                </Link>
                <p>this is the Results Route</p>
                {(this.state.kitsuAnimeData && this.state.kitsuAnimeData) ? this.renderAnimeFromKitsu() : null}
                {(this.state.searchedUserData && this.state.searchedUserData) ? this.renderUsers() : null}
                {(this.state.publicListsData && this.state.publicListsData) ? this.renderLists() : null}
            </section>
        )
    }
}

export default withRouter(ResultsRoute);