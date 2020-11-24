import React, { Component } from 'react';

class Comment extends Component {

    render(){
        const { comment } = this.props;
        // console.log(comment.comment)
        return(
            <section className='comment'>
                <p>{comment}</p>
            </section>
        )
    }
}

export default Comment;