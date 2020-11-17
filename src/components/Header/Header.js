import React from 'react';

import { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <section className='Header'>
                <Link to={'/home'}><h1>OtakuRisuto</h1></Link>
            </section>
        )
    }
}

export default Header;