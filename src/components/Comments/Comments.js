import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

class Comments extends Component {

    renderItems() {
        const { itemList = [] } = this.context
        return itemList.map(comment =>
          <Comment
            comment={comment}
          />
        )
      }

    render(){
        return(
            <section className='comments'>
                <CommentForm />
                <Comment />
            </section>
        )
    }
}

export default Comments;