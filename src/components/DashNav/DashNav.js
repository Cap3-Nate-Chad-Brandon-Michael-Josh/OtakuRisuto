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
        registration: this.context.registration,
        currentList: this.context.currentList
    }

    async componentDidMount() {
        await OtakuApiService.getLoggedInUserLists()
            .then(res => this.context.setLoggedInUserLists(res))
    }

    handleItemDelete = () => {
        console.log('item deleted')
        console.log(this.context.currentList.list_anime)
        this.setState({ currentList: this.context.currentList });
        this.forceUpdate();

    }

    handleFilterClick = () => {
        this.setState({ Nav: !this.state.Nav })
    }

    handleListClick = (event) => {
        const listId = event.target.getAttribute('value');
        OtakuApiService.getListInfo(listId)
            .then(res => {
                this.context.setCurrentList(res);
                this.setState({ currentList: this.context.currentList })
            });
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
                        this.context.loggedInUserLists.map(list => {
                            return <h3 value={list.list_id} onClick={this.handleListClick}>{list.name}</h3>
                        })
                    )}
                </div>
                <button className="navB" onClick={this.handleFilterClick}>
                    &#9776; Anime Lists
                </button>
                {(this.context.currentList) ? <h1>{this.context.currentList.name}</h1> : null}

                <section className='animeItem'>
                    {(this.state.currentList.anime) ? this.state.currentList.anime.map(anime =>
                        <div>
                            <Modal handleItemDelete={this.handleItemDelete} anime={anime} />
                        </div>)
                        : null
                    }
                </section>
            </div>

        )
    }
}

export default DashNav;