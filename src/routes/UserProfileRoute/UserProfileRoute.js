import Header from '../../components/Header/Header'
import React, { Component } from 'react';
import './UserProfileRoute.css';
import OtakuApiService from '../../services/otakuApiService';

class UserProfileRoute extends Component {
    state = {
        error: null,
        userLists: [],               
    }

    async componentDidMount() {
        let id = this.props.match.params.id;        
        await OtakuApiService.getSpecifiedUserLists(id)
            .then(res => this.setState({ userLists: res }))
    }

    handleViewListClick = (event, listId) => {
        event.preventDefault();
        this.props.history.push(`/SearchedList/${listId}`);
    }  

    renderRating(list){
        let acc = Math.round(list.rating);
        let res = []
        for(let i = 0; i < 5; i++){
            if(acc === 0){
                res.push(<i key={i} className="far fa-star"></i>)
            } else {
                res.push(<i key={i} className="fas fa-star"></i>)
                acc--;
            }
        }
        return res;
    }

    render() {
        return (
            <section className='userProfileRoute'>
                <Header />                
                {this.state.userLists && this.state.userLists.map((list, index) => {
                    return (
                        <section key={index}>
                            <h2 onClick={event => this.handleViewListClick(event, list.list_id)}>{list.name}</h2>
                            <h3>Owned by: {list.owner.username}</h3>
                            <div>
                                <h3>Avg OR Rating:</h3>
                                {this.renderRating(list)}
                            </div>                        
                        </section>
                    )
                })}
            </section>
        )
    }
}

export default UserProfileRoute;