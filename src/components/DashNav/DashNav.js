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
        registration: this.context.registration,
        newListInput: '',
        privateOption: true,
    }

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

    handleAddNewList = () => {
        // select option values are always converted to strings, OR API is expecting boolean.
        let privacyValue = true;         
        if (this.state.privateOption === 'false') {
            privacyValue = false;
        }
        OtakuApiService.postList(this.state.newListInput, privacyValue)
        OtakuApiService.getLoggedInUserLists()
            .then(res => this.context.setLoggedInUserLists(res));    
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
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
                    <form 
                        htmlFor='Add a new list'
                        onSubmit={(event) => this.handleAddNewList(event)}>
                        <input 
                            placeholder='New List'
                            name='newListInput'
                            htmlFor='New list name'
                            onChange={this.handleChange}
                            value={this.state.newListInput}
                            required />
                        <br/>
                        <select 
                            name='privateOption' 
                            onChange={this.handleChange} 
                            required>
                            <option>--Select One--</option>
                            <option value={false}>Public</option>
                            <option value={true}>Private</option>
                        </select>
                        <br/>
                        <button type='submit'>add</button>
                    </form>
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
    }
}

export default DashNav;