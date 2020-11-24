import React, { Component } from 'react';
import { component } from 'react'
import OtakuContext from '../../contexts/OtakuContext';
import Suggestions from '../Suggestions/Suggestions'
import './DashNav.css'

class DashNav extends Component {
    static contextType = OtakuContext;
    state ={
        Nav: false,
        className: "sidenav",
        classNameHidden: "sidenav2"
    }

      handleFilterClick = () => {
        this.setState({ Nav: !this.state.Nav})
        
      }
    render(){
       
        
       return(
    <div> 
        {!this.context.registraion &&
        <Suggestions />
        }
        <div id="mySidenav" className={(this.state.Nav) ? this.state.className : this.state.classNameHidden}>
            <h1>anime list</h1>
        </div>
        <button className="navB" onClick={this.handleFilterClick}>
        &#9776; Anime Lists
            {/* open Nav */}
        </button>
    </div>
  
       )
    }
}

export default DashNav;