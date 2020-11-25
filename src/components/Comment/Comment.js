import React, { Component } from 'react';

class Comment extends Component {

    render(){
        const { comment, user } = this.props;
        // console.log(comment.comment)
        return(
            <section className='comment'>
                <p>Comment: {comment}</p>
                <p>User: {user}</p>
            </section>
        )
    }
}

export default Comment;