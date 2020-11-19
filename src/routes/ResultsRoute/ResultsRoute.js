// Search results container
import Header from '../../components/Header/Header';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OtakuContext from '../../contexts/OtakuContext';
import KitsuApiService from '../../services/kitsuApiService';
import KitsuResultItem from '../../components/KitsuResultItem/KitsuResultItem';

class ResultsRoute extends Component {
    state = {
        error: null,
        searchTerm: this.context.searchTerm,
        searchOption: this.context.searchOption,
    }

    static contextType = OtakuContext

    async componentDidMount() {
        await KitsuApiService.getAnimesBySearchTerm(this.state.searchTerm)
            .then(res => this.setState({ kitsuData: res.data }))
    }

    renderAnimeFromKitsu() {
        if (this.state.kitsuData) {
            return (
                <div>
                    {this.state.kitsuData.map(anime => {
                        return (
                        <KitsuResultItem
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
                {(this.state.kitsuData && this.state.kitsuData) ? this.renderAnimeFromKitsu() : null}

            </section>
        )
    }
}

export default ResultsRoute;