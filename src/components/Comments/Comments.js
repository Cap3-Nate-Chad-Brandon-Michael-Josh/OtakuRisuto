import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import otakuApiService from '../../services/otakuApiService'

class Comments extends Component {
    static contextType = OtakuContext;

    async componentDidMount() {
        this.context.clearError()
        await otakuApiService.getListInfo(1)
            .then(res => {
                this.context.setCurrentList(res);
            })
            .catch(this.context.setError)
    }

    renderItems() {
        // change backend to send username as well as comment user id??
        const { currentList = {} } = this.context
        if (currentList && currentList.comments) {
            return currentList.comments.map(comment =>
                <Comment
                    comment={comment.comment}
                    user={comment.comment_user_id}
                />
            )
        }
    }

    render() {
        const { error } = this.context
        return (
            <section className='comments'>
                <CommentForm />
                {error
                    ? <p className=''>There was an error, try again</p>
                    : this.renderItems()}
            </section>
        )
    }
}

export default Comments;