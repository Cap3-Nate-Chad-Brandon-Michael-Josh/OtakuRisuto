import React, { Component } from 'react';

class CommentForm extends Component {

    render(){
        return(
            <form className='commentForm'>
                <label htmlFor='newComment'></label>
                <input type='text' name='newComment' placeholder='Add a new commment'></input>
                <label htmlFor='commentSubmit'></label>
                <button type='submit' name='commentSubmit'>Submit</button>
            </form>
        )
    }
}

export default CommentForm;