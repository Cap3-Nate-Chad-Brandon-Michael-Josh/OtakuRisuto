// user dashboard container
import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
// import Modal from '../../components/DashNav/Modal'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserProfileRoute.css';
import OtakuApiService from '../../services/otakuApiService';
import SearchedUserListItem from '../../components/SearchedUserListItem/SearchedUserListItem';
import UserAnimeItem from '../../components/UserAnimeItem/UserAnimeItem';
import SearchPublicListResults from '../../components/SearchPublicListsResults/SearchPublicListsResults';

class UserProfileRoute extends Component {
    state = {
        error: null,
        userLists: [],
        userAnimeItems: [],
        expanded: false,
        viewing: false,
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        await OtakuApiService.getSpecifiedUserLists(id)
            .then(res => this.setState({ userLists: res }))
    }

    // handleViewContentsClick = (event, listId) => {
    //     event.preventDefault();
    //     OtakuApiService.getListInfo(listId)
    //         .then(res => this.setState({
    //             userAnimeItems: res.anime,
    //             viewing: true,
    //         }))
    // }   

    render() {
        return (
            <section className='userProfileRoute'>
                <Header />
                <DashNav />
                {/* <Modal /> */}
                <Link to={'/home'}>
                    Home
                </Link>
                <p>this is User Profile Route</p>
                {this.state.userLists && this.state.userLists.map(list => {
                    return (
                        <section>
                            <h2>{list.name}</h2>
                            <button>View {list.name}</button>
                            {/* <SearchedUserListItem listId={list.list_id} /> */}
                        </section>
                    )
                })}
            </section>
        )
    }
}

export default UserProfileRoute;