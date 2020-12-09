// Landing Route container
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OtakuContext from '../../contexts/OtakuContext'
import './LandingRoute.css'

class LandingRoute extends Component {
    static contextType = OtakuContext

    render(){
        return(
            <section className='LandingRoute'>
                    <section className="bodyPic">
            <nav>
                <div className="img"></div>
                <div className ='right-nav'>
                <Link className='LandingLink' to={'/login'}>
                    Login 
                </Link>
                <Link className='LandingLink' to={'/register'}>
                Sign Up 
                </Link > <br></br>
                </div>
                
            </nav>
            <h1>Welcome to OtakuRisuto!</h1>
                <p>
                    Otaku Risuto allows you to keep track of your favorite anime, 
                    which ones you have seen, which ones you want to see, 
                    and any other type of list you want. It also helps you pick 
                    what to watch next! Just go to the list and click the anime 
                    roulette button! Check it out by using our Demo account (credentials
                    are listed on the login form) or sign up for a personal account to start
                    keeping track of your favorite anime titles!
                </p>
            </section>
            </section>
        )
    }
}

export default LandingRoute;