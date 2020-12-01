import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import OtakuApiService from '../../services/otakuApiService';

class RatingForm extends Component {
    static contextType = OtakuContext;
    constructor(props) {
        super(props);
        this.state = {
            item: {
                rating: this.props.rating,
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
                console.log(res)
                this.context.resetRating(res);
            })
            .catch(error => {
                this.setState((error))
            })
    }

    setRating(ev){
        const value = ev.target.getAttribute('value');
        const { item } = { ...this.state };
        const currentState = item;
        currentState.rating = value;
        this.setState({item: currentState})
    }

    renderRating(){
        let acc = Math.round(this.state.item.rating);
        let res = []
        for(let i = 0; i < 5; i++){
            if(acc === 0){
                res.push(<i onClick={this.setRating} value={i + 1} name={`star${i + 1}`} className="far fa-star"></i>)
            } else {
                res.push(<i onClick={this.setRating} value={i + 1} name={`star${i + 1}`} className="fas fa-star"></i>)
                acc--;
            }
        }
        return res;
    }

    starRatingInput() {
        return (
            <div>
                <p>Your Rating:</p>
                {this.renderRating()}
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='ratingForm'>
                {this.starRatingInput()}
                <label htmlFor='ratingSubmit'></label>
                <button type='submit' name='ratingSubmit'>Submit</button>
            </form>
        )
    }
}

export default RatingForm;