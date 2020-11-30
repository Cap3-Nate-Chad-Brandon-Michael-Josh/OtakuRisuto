// user dashboard container
import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
// import Modal from '../../components/DashNav/Modal'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DashBoardRoute.css'
class DashboardRoute extends Component {
    render(){
        return(
            <section className='DashboardRoute'>
                <Header />
                <DashNav />
                {/* <Modal /> */}
                <Link to={'/'}>
                    landing page
                </Link>
                <p>this is the dashboard</p>

            </section>
        )
    }
}

export default DashboardRoute;