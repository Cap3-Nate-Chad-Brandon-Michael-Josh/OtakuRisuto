//see above but for a user so that someone can steal their lists
import React from 'react';

const UserResultItem = (props) => {

    return (
        <div>
            <h2>{props.user.username}</h2>
            <button onClick={event => props.viewUser(event, props.user.user_id)}>
                View {props.user.username}'s public lists
            </button>
        </div>
    )

}

export default UserResultItem;