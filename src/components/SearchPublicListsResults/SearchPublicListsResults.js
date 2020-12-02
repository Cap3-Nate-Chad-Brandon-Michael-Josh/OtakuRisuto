import React from 'react';

const renderRating = (props) => {
    let acc = Math.round(props.list.rating);
    let res = []
    for(let i = 0; i < 5; i++){
        if(acc === 0){
            res.push(<i className="far fa-star"></i>)
        } else {
            res.push(<i className="fas fa-star"></i>)
            acc--;
        }
    }
    return res;
}

const SearchPublicListsResults = (props) => {
    return (
        <div>
            <h2>{props.list.name}</h2>
            <p>OR Average Rating: </p>
            {renderRating(props)}
            <p>Owned by: {props.list.owner.username}</p>
            <button onClick={event => props.viewList(event, props.list.list_id)}>Show me what you gOt</button>
        </div>
    )
}

export default SearchPublicListsResults;