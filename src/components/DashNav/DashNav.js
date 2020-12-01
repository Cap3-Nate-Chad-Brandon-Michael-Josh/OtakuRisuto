import React, { Component } from 'react';
import { component } from 'react'
import OtakuContext from '../../contexts/OtakuContext';
import Suggestions from '../Suggestions/Suggestions'
import Modal from './Modal'

import './DashNav.css'

class DashNav extends Component {
    static contextType = OtakuContext;
    state ={
        Nav: false,
        className: "sidenav",
        classNameHidden: "sidenav2",
        registration: this.context.registration
    }

      handleFilterClick = () => {
        this.setState({ Nav: !this.state.Nav})
        
      }
    render(){
       
        
       return(
    <div> 
        <div id="mySidenav" className={(this.state.Nav) ? this.state.className : this.state.classNameHidden}>
            <h1>anime list</h1>
        </div>
        <button className="navB" onClick={this.handleFilterClick}>
            &#9776; Anime Lists
            
        </button>
        
        <section className= 'animeItem'>
            <h1>Anime Name</h1>
            <Modal />
        </section>
        {this.context.registration &&
                <Suggestions />
        }
    </div>
  
       )
    }
}

export default DashNav;