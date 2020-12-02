import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
// import otakuApiService from '../../services/otakuApiService'

class Comments extends Component {
    static contextType = OtakuContext;

    async componentDidMount() {
        this.context.clearError()
    }
    //     let id = this.props.match.params.id;
    //     await otakuApiService.getListInfo(id)
    //         .then(res => {
    //             this.context.setCurrentList(res);
    //         })
    //         .catch(this.context.setError)
    // }

    renderItems() {
        const { currentList = {} } = this.props
        if (currentList && currentList.comments) {
            return (
            <div>
                <CommentForm list_id={currentList.list_id}/>
                {currentList.comments.map((comment, index) =>
                    <Comment
                        key={index}
                        comment={comment.comment}
                        user={comment.username}
                    />
                )}
            </div>
            )
        }
    }

    render() {
        const { error } = this.context
        return (
            <section className='comments'>
                {error
                    ? <p className=''>There was an error, try again</p>
                    : this.renderItems()}
            </section>
        )
    }
}

export default Comments;