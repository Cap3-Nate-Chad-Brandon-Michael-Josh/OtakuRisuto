import React from 'react';

const SearchPublicListsResults = (props) => {
    return (
        <div>
            <h2>{props.list.name}</h2>
            <p>Owned by: {props.list.owner.username}</p>
            <button>Show me what you gOt</button>
        </div>
    )
}

export default SearchPublicListsResults;