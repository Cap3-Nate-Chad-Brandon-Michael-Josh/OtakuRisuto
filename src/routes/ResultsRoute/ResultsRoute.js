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
    }

    static contextType = OtakuContext

    componentDidMount() {
        
    }

    renderAnimeFromKitsu() {        
        if (this.context.kitsuAnimeData) {
            return (
                <div>
                    {this.context.kitsuAnimeData.map(anime => {
                        return (
                        <KitsuResultItem
                            key={anime.attributes.slug}
                            anime={anime}
                            expanded={true} />
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
            <section className='DashboardRoute'>
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