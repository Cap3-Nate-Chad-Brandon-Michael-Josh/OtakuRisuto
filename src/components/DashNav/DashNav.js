import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Suggestions from '../Suggestions/Suggestions';
import Modal from './Modal';
import './DashNav.css';
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

      handleListClick = (event) => {
        const listId = event.target.getAttribute('value');
        OtakuApiService.getListInfo(listId)
            .then(res => this.context.setCurrentList(res));
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
                this.context.loggedInUserLists.map(list => {
                return <h3 value={list.list_id} onClick={this.handleListClick}>{list.name}</h3>
                })
                )}
        </div>
        <button className="navB" onClick={this.handleFilterClick}>
            &#9776; Anime Lists
            
        </button>
        
        <section className= 'animeItem'>
            {(this.context.currentList) ? <h1>{this.context.currentList.name}</h1> : null}
            <Modal 
                anime={this.context.currentList.anime}/>
        </section>
            </div>
  
       )
    }
}

export default DashNav;