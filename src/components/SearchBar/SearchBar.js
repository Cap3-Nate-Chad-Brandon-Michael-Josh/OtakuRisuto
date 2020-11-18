// component should live in header. Should be a classic search bar

/* save results to context, and redirect to Component based on what search type is set to (user-related searches
    we would go to SearchUserItem, for searches directed at finding new anime send to SearchListItem) 
    in ComponentDidMount for respective redirect, make api call */
import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';

class SearchBar extends Component {
    state = {
        error: null,
    }

    static contextType = OtakuContext

    render() {
        return (
            <div></div>
        )
    }
}

export default SearchBar
