import React from 'react';

const AddedResponse = (props) => {

    return (
        <div>
            <p>{props.anime} added to {props.list} successfully!</p>
            {/* <button onClick={props.closeResponse}>X</button> */}
        </div>
    )

}

export default AddedResponse;