// Landing Route container
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import OtakuContext from '../../contexts/OtakuContext'

class LandingRoute extends Component {
    static contextType = OtakuContext

    render(){
        return(
            <section clalssName='LandingRoute'>
                {/* {this.context.test} */}
                <h1>Welcome to OtakuRisuto!</h1>
                <Link to={'/login'}>
                    Login
                </Link>
                <Link to={'/register'}>
                Sign Up
                </Link>
                <p>Otaku Risuto allows you to keep track of your favorite anime, which ones you have seen, which ones you want to see, 
        and any other type of list you want. It also helps you pick what to watch next! Just go to the list and click the anime roulette button!</p>

                <Link
                    to={'/home'}
                >
                    Dashboard
                </Link>

            </section>
        )
    }
}

export default LandingRoute;