import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import otakuApiService from '../../services/otakuApiService'

class Comments extends Component {
    static contextType = OtakuContext;

    componentDidMount() {
        this.context.clearError()
        otakuApiService.getListInfo(1)
            .then(res => {
                console.log(res)
                this.context.setCurrentList(res[0]);
            })
            .catch(this.context.setError)
    }

    renderItems() {
        const { currentList = {} } = this.context
        console.log(currentList)
        return currentList.comments.map(comment =>
            <Comment
                comment={comment.comment}
            />
        )
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