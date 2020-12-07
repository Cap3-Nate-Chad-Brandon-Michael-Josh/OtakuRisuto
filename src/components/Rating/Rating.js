import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import RatingForm from '../RatingForm/RatingForm';

class Rating extends Component {
    static contextType = OtakuContext;

    state = {
        currentList: this.props.currentList
    }

    componentDidMount() {
        this.context.clearError();
    }

    renderRating(){
        let acc = Math.round(this.props.currentList.rating);
        let res = [];
        for(let i = 0; i < 5; i++){
            if(acc === 0){
                res.push(<i key={i} className="far fa-star"></i>);
            } else {
                res.push(<i key={i} className="fas fa-star"></i>);
                acc--;
            };
        };
        return res;
    };

    renderItems() {
        const { currentList = {} } = this.props;        
        if (currentList && currentList.list_id && currentList.rating !== undefined) {
            return (
            <div>
                <div className='avgRating'>
                    <p>Average OR Rating:</p>
                    {this.renderRating()}
                </div>
                <RatingForm key={currentList.user_rating} user_rating={currentList.user_rating} list_id={currentList.list_id}/>
            </div>
            )
        };
    };

    render() {
        const { error } = this.context
        return (
            <section className='rating'>
                {error
                    ? <p className=''>There was an error, try again</p>
                    : this.renderItems()}
            </section>
        )
    };
};

export default Rating;