import React, { Component } from 'react';

class Comment extends Component {

    render(){
        const { comment } = this.props;
        // console.log(comment.comment)
        return(
            <section className='comment'>
                <p>this is the comment text</p>
            </section>
        )
    }
}

export default Comment;