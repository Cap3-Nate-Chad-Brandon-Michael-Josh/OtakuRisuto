import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import OtakuApiService from '../../services/otakuApiService';

class RatingForm extends Component {
    static contextType = OtakuContext;
    constructor(props) {
        super(props);
        this.state = {
            item: {
                rating: 0,
                list_id: this.props.list_id,
            },

            error: null,
        }
        this.setRating = this.setRating.bind(this);
    }

    handleInputChange(event) {
        const { item } = { ...this.state };
        const currentState = item;
        const target = event.target;
        const value = target.value;

        currentState.rating = value;

        this.setState({ item: currentState });
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const newRating = this.state.item.rating;
        const list_id = this.state.item.list_id;

        OtakuApiService.postRating(newRating, list_id)
            .then(res => {
                this.context.resetRating(res);
            })
            .catch(error => {
                this.setState((error))
            })
    }

    setRating(ev){
        const { value } = ev.target;
        const { item } = { ...this.state };
        const currentState = item;
        currentState.rating = value;
        this.setState({item: currentState})
        console.log(ev.target.dataset.num)
        console.log(ev.target.getAttribute('value'))
    }

    starRatingInput() {
        return (
            <div>
                <p>Your Rating:</p>
                <i onClick={this.setRating} data-num={1} name='star1' className="far fa-star"></i>
                <i onClick={this.setRating} value={2} className="far fa-star"></i>
                <i value={3} className="far fa-star"></i>
                <i value={4} className="far fa-star"></i>
                <i value={5} className="far fa-star"></i>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='ratingForm'>
                {this.starRatingInput()}
                <label htmlFor='newRating'><i className="far fa-star"></i></label>
                <input type='radio' name='newRating' placeholder='Add a new rating' value={1} onChange={this.setRating}></input>
                <label htmlFor='newRating'><i className="far fa-star"></i></label>
                <input type='radio' name='newRating' placeholder='Add a new rating' value={2} onChange={this.setRating}></input>
                <label htmlFor='newRating'><i className="far fa-star"></i></label>
                <input type='radio' name='newRating' placeholder='Add a new rating' value={3} onChange={this.setRating}></input>
                <label htmlFor='newRating'><i className="far fa-star"></i></label>
                <input type='radio' name='newRating' placeholder='Add a new rating' value={4} onChange={this.setRating}></input>
                <label htmlFor='newRating'><i className="far fa-star"></i></label>
                <input type='radio' name='newRating' placeholder='Add a new rating' value={5} onChange={this.setRating}></input>
                <label htmlFor='ratingSubmit'><i className="far fa-star"></i></label>
                <button type='submit' name='ratingSubmit'>Submit</button>
            </form>
        )
    }
}

export default RatingForm;