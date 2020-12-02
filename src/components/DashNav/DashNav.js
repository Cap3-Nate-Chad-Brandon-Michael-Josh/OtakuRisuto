import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Suggestions from '../Suggestions/Suggestions';
import Modal from './Modal';
import './DashNav.css';
import OtakuApiService from '../../services/otakuApiService';
import Rating from '../Rating/Rating';
import Comments from '../Comments/Comments';

class DashNav extends Component {
    static contextType = OtakuContext;
    state = {
        Nav: false,
        className: "sidenav",
        classNameHidden: "sidenav2",
        registration: this.context.registration
    }

<<<<<<< HEAD
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
=======
    async componentDidMount() {
        await OtakuApiService.getLoggedInUserLists()
            .then(res => this.context.setLoggedInUserLists(res))
        this.context.setCurrentList({})
    }

    handleFilterClick = () => {
        this.setState({ Nav: !this.state.Nav })
    }

    handleListClick = (event) => {
        const listId = event.target.getAttribute('value');
        OtakuApiService.getListInfo(listId)
            .then(res => this.context.setCurrentList(res));
    }

    render() {

        return (
            <div>
                {this.context.registration &&
                    <Suggestions />
                }
                <div id="mySidenav" className={(this.state.Nav) ? this.state.className : this.state.classNameHidden}>
                    <h1>Your lists</h1>
                    {(this.context.loggedInUserLists &&
                        this.context.loggedInUserLists.map((list, index) => {
                            return <h3 key={index} value={list.list_id} onClick={this.handleListClick}>{list.name}</h3>
                        })
                    )}
                </div>
                <button className="navB" onClick={this.handleFilterClick}>
                    &#9776; Anime Lists
                </button>
                {(this.context.currentList) ? <h1>{this.context.currentList.name}</h1> : null}

                <section className='animeItem'>
                    {(this.context.currentList.anime) ? this.context.currentList.anime.map(anime =>
                        <div>
                            <h2>{anime.title}</h2>
                            <Modal anime={anime} />
                        </div>)
                        : null
                    }
                </section>
                {(this.context.currentList) ?
                    <div>
                        <Rating currentList={this.context.currentList} />
                        <Comments currentList={this.context.currentList} />
                    </div>
                    : null}
            </div>

        )
>>>>>>> 962be805aad189d75a697489e113fce93c3be00e
    }
}

export default DashNav;