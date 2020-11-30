// user dashboard container
import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
// import Modal from '../../components/DashNav/Modal'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserProfileRoute.css';
import OtakuApiService from '../../services/otakuApiService';

class UserProfileRoute extends Component {
    state = {
        error: null,
        userLists: []
    }
    
    /* AWAITING NEW API PATH FOR FETCH CALL */
    // async componentDidMount() {
    //     let id = this.props.match.params.id;
    //     console.log(id);
    //     await OtakuApiService.getSpecifiedUserLists(id)
    //         .then(res => this.setState({ userLists: res }))
    // }

    render(){
        return(
            <section className='DashboardRoute'>
                <Header />
                <DashNav />
                {/* <Modal /> */}
                <Link to={'/home'}>
                    Home
                </Link>
                <p>this is User Profile Route</p>

            </section>
        )
    }
}

export default UserProfileRoute;