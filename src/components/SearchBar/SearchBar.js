import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import KitsuApiService from '../../services/kitsuApiService';
import OtakuApiService from '../../services/otakuApiService';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    state = {
        error: this.context.error,
        searchTerm: '',
        searchOption: '',
    }

    static contextType = OtakuContext

    componentDidMount() {
        this.context.clearError()
    }

    fetchKitsuAnimeData(searchTerm) {
        KitsuApiService.getAnimesBySearchTerm(searchTerm)
            .then(res => 
                (res.data.length) ?
                this.context.setKitsuAnimeData(
                    KitsuApiService.serializeAnime(res.included, res.data)
                )
                :
                this.context.setError({error: 'Sorry, we did not find any anime related to your search.'})
            )
            .catch(error => this.context.setError(error))
    }

    fetchOtakuUsers(searchTerm) {
        OtakuApiService.getUsersBySearch(searchTerm)
            .then(res => {
                this.context.setSearchedUserData(res)
            })
            .catch(error => this.context.setError(error))
            // .catch(error => console.log(error))
    }

    fetchOtakuPublicLists(searchTerm) {
        OtakuApiService.getPublicListsBySearch(searchTerm)
            .then(res => {
                this.context.setPublicListsData(res)
            })
            .catch(error => this.context.setError(error))
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        this.context.setSearchTerm(this.state.searchTerm);
        this.context.setSearchOption(this.state.searchOption);
        if (this.state.searchOption === 'anime') {
            this.fetchKitsuAnimeData(this.state.searchTerm);
        }
        if (this.state.searchOption === 'users') {
            this.fetchOtakuUsers(this.state.searchTerm);
        }
        if (this.state.searchOption === 'lists') {
            this.fetchOtakuPublicLists(this.state.searchTerm);
        }
        this.props.history.push('/results');
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <form className="DashSearch" onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor='search-bar'></label>
                    {this.context.error ? <p>{this.context.error.error}</p> : null}
                    <br />
                    {/* <nav className='DashNav'> */}
                    <input
                        name='searchTerm'
                        type='text'
                        aria-label="Search for anime users or lists"
                        onChange={this.handleChange}
                        value={this.state.searchTerm}
                        placeholder='Search: anime, friends or lists'
                        required />
                    <br />
                    <select name='searchOption' onChange={this.handleChange} required aria-label='search options'>
                        <option value=''>--Choose one--</option>
                        <option value='anime'>Anime</option>
                        <option value='users'>Users</option>
                        <option value='lists'>Lists</option>
                    </select>
                    <br />
                    <button
                        className='search'
                        type='submit'
                        aria-label='SearchBarSubmit'>
                        <i className='fas fa-search'></i>
                        {/* Search! */}
                    </button>
                    {/* </nav> */}
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);
