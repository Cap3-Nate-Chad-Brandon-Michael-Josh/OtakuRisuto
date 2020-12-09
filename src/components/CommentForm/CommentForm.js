import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import OtakuApiService from '../../services/otakuApiService';

class CommentForm extends Component {
    static contextType = OtakuContext;
    constructor(props) {
        super(props);
        this.state = {
            item: {
                comment: '',
                list_id: this.props.list_id,
            },

            error: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { item } = { ...this.state };
        const currentState = item;
        const target = event.target;
        const value = target.value;

        currentState.comment = value;

        this.setState({ item: currentState });
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const newComment = this.state.item.comment;
        const list_id = this.state.item.list_id;

        OtakuApiService.postComment(newComment, list_id)
            .then(res => {
                this.context.resetComments(res);
            })
            .catch(error => {
                this.setState((error))
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='commentForm'>
                <input type='text' name='newComment' placeholder='Add a new commment' value={this.state.item.comment} onChange={this.handleInputChange} aria-label='add a new comment'></input>
                <button className="submitB" type='submit' name='commentSubmit' aria-label='post comment'>Post</button>
            </form>
        )
    }
}

export default CommentForm;