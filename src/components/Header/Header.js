import React from 'react';

import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import OtakuContext from '../../contexts/OtakuContext';

class Header extends Component {
    static contextType = OtakuContext;

    handleLogoutClick = () => {
        this.context.processLogout();
    };


    render() {
        return (
            <section className='Header'>
                <div className='headerTitle'>
                <nav className='DashNav'>
                        <Link
                            onClick={this.handleLogoutClick}
                            to={'/'}>
                            {/* <i class="fas fa-sign-out-alt"></i> */}
                            Logout
                            </Link>
                    </nav>
                    <Link to={'/home'}><h1>OtakuRisuto</h1></Link>
                </div>
                <div className='headerItems'>
                    <div className='headerLogout'>
                        <h2>{this.context.user.username}</h2>
                           
                    </div>
                    <SearchBar />
                </div>
            </section>
        )
    };
};

export default Header;