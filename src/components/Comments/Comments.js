import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import otakuApiService from '../../services/otakuApiService'

class Comments extends Component {
    static contextType = OtakuContext;

    componentDidMount() {
        this.context.clearError()
        // otakuApiService.getListInfo()
        //   .then(this.context.setCurrentList)
        //   .catch(this.context.setError)
      }

    renderItems() {
        const { currentList = {} } = this.context
        return currentList.comments.map(comment =>
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