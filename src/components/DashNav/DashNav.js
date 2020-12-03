import React, { Component } from 'react';
import OtakuContext from '../../contexts/OtakuContext';
import Suggestions from '../Suggestions/Suggestions';
import Modal from './Modal';
import './DashNav.css';
import OtakuApiService from '../../services/otakuApiService';
import Rating from '../Rating/Rating';
import Comments from '../Comments/Comments';
import Roulette from '../Roulette/Roulette';

class DashNav extends Component {
    static contextType = OtakuContext;
    state = {
        Nav: false,
        className: "sidenav",
        classNameHidden: "sidenav2",
        registration: this.context.registration,
        newListInput: '',
        privateOption: true,
        currentList: this.context.currentList,
        randomAnimeIndex: null
    }

    async componentDidMount() {
        await OtakuApiService.getLoggedInUserLists()
            .then(res => this.context.setLoggedInUserLists(res))
        this.context.setCurrentList({})
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

    setRandomAnime = (num) => {
        this.setState({randomAnime:num})
    }

    generateModalList = (num) => {
        console.log(this.state.currentList.anime.length)
        for (let i = 0; i < this.state.currentList.anime.length; i++){
            let expanded= false;
            if(i === num){
                expanded = true
            }
            return (<div>
            <Modal handleItemDelete={this.handleItemDelete} anime={this.state.currentList.anime[i]} show={expanded} />
        </div>)

        }
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
                    {(this.state.currentList.anime) ? this.generateModalList(this.state.randomAnimeIndex)
                        : null
                    }
                </section>
                {(this.context.currentList) ?
                    <div>
                        <Rating currentList={this.context.currentList} />
                        <Comments currentList={this.context.currentList} />
                    </div>
                    : null}
                            {/* <img src={require("./1.png")} alt="" id="img" /> */}

                    <Roulette 
                        list={this.state.currentList}
                        updateExpandedItem={this.setRandomAnime}
                    />
        
            </div>

        )
    }
}

export default DashNav;

{/* <section className='animeItem'>
                    {(this.state.currentList.anime) ? this.state.currentList.anime.map(anime =>
                        <div>
                            <Modal handleItemDelete={this.handleItemDelete} anime={anime} />
                        </div>)
                        : null
                    }
                </section> */}