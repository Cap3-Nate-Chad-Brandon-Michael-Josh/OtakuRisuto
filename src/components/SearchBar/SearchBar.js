// component should live in header. Should be a classic search bar

/* save results to context, and redirect to Component based on what search type is set to (user-related searches
    we would go to SearchUserItem, for searches directed at finding new anime send to SearchListItem) 
    in ComponentDidMount for respective redirect, make api call */
import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import  { Redirect, withRouter } from 'react-router-dom';


class SearchBar extends Component {
    state = {
        error: null,
        searchTerm: '',
        searchOption: '',
    }

    static contextType = OtakuContext

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('search submitted');
        this.context.setSearchTerm(this.state.searchTerm);
        this.context.setSearchOption(this.state.searchOption);
        this.props.history.push('/results')
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }    

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor='search-bar'>Search for your favorite anime, friends or lists</label>
                    <br/>
                    <input
                        name='searchTerm'
                        type='text'
                        htmlFor='search-bar'
                        onChange={this.handleChange}
                        value={this.state.searchTerm}
                        required />                    
                    <br/>
                    <select name='searchOption' onChange={this.handleChange} required>
                        <option value=''>--Choose one--</option>
                        <option value='animes'>Animes</option>
                        <option value='users'>Users</option>
                        <option value='lists'>Lists</option>
                    </select>
                    <br/>
                    <button type='submit'>Search!</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);
