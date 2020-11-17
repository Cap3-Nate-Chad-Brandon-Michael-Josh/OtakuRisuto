// user dashboard container
import Header from '../../components/Header/Header'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DashboardRoute extends Component {
    render(){
        return(
            <section className='DashboardRoute'>
                <Header />
                <Link to={'/'}>
                    landing page
                </Link>
                <p>this is the dashboard</p>

            </section>
        )
    }
}

export default DashboardRoute;