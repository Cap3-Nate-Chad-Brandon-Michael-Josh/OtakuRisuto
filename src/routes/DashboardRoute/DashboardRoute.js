// user dashboard container
import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DashBoardRoute.css'
import Comments from '../../components/Comments/Comments';
class DashboardRoute extends Component {
    render(){
        return(
            <section className='DashboardRoute'>
                <Header />
                <DashNav />
                <Comments></Comments>
                <Link to={'/'}>
                    landing page
                </Link>
                <p>this is the dashboard</p>

            </section>
        )
    }
}

export default DashboardRoute;