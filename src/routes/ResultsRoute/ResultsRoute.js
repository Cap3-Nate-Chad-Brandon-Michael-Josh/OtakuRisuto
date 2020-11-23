// Search results container
import Header from '../../components/Header/Header';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import OtakuContext from '../../contexts/OtakuContext';
import KitsuResultItem from '../../components/KitsuResultItem/KitsuResultItem';

class ResultsRoute extends Component {
    state = {
        error: null,
        searchTerm: this.context.searchTerm,
        searchOption: this.context.searchOption,
        kitsuAnimeData: this.context.kitsuAnimeData,
        kitsuGenreData: this.context.kitsuGenreData,
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
        if (this.context.kitsuAnimeData && this.context.kitsuGenreData) {
            return (
                <div>
                    {this.context.kitsuAnimeData.map((anime, index) => {
                        let details = false
                        // set animeGenres variable for easier access to animeGenre ids
                        let animeGenres = anime.relationships.categories.data.map(genre => {
                            return this.context.kitsuGenreData[genre.id]
                        })
                        if (this.state.expandedItem === anime.attributes.slug) {
                            details = true
                        }
                        return (
                            <KitsuResultItem
                                key={index}
                                anime={anime}
                                expanded={details}
                                clickDetails={this.handleDetails}
                                genres={animeGenres}
                                 />
                        )
                    })}
                </div>
            )
        }
    }

    renderUsers() {

    }

    renderLists() {

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

            </section>
        )
    }
}

export default withRouter(ResultsRoute);