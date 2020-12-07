import Header from '../../components/Header/Header'
import DashNav from '../../components/DashNav/DashNav'
import React, { Component } from 'react';
import './DashBoardRoute.css'
class DashboardRoute extends Component {
    render(){
        return(
            <section className='DashboardRoute'>
                <Header />
                <DashNav />
            </section>
        )
    }
}

export default DashboardRoute;