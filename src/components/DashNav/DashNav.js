import React, { Component } from 'react';
import { component } from 'react'
import OtakuContext from '../../contexts/OtakuContext';
import Suggestions from '../Suggestions/Suggestions'
import Modal from './Modal'

import './DashNav.css'
import OtakuApiService from '../../services/otakuApiService';

class DashNav extends Component {
    static contextType = OtakuContext;
    state = {
        Nav: false,
        className: "sidenav",
        classNameHidden: "sidenav2",
        registration: this.context.registration
    }

    async componentDidMount() {
        await OtakuApiService.getLoggedInUserLists()
            .then(res => this.context.setLoggedInUserLists(res))
    }

      handleFilterClick = () => {
        this.setState({ Nav: !this.state.Nav})
        
      }
    
      render() {      
        
       return(
    <div> 
        {this.context.registration &&
        <Suggestions />
        }
        <div id="mySidenav" className={(this.state.Nav) ? this.state.className : this.state.classNameHidden}>
            <h1>Your lists</h1>
            {(this.context.loggedInUserLists && 
                this.context.loggedInUserLists.map(list => <h3>{list.name}</h3>))}
        </div>
        <button className="navB" onClick={this.handleFilterClick}>
            &#9776; Anime Lists
            
        </button>
        
        <section className= 'animeItem'>
            <h1>Anime Name</h1>
            <Modal />
        </section>
    </div>
  
       )
    }
}

export default DashNav;