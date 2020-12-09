import React from 'react';
import './KitsuAnimeItem.css'
const KitsuAnimeItem = (props) => {

    if (!props.expanded) {
        return (
            <div className='anime-card'>
                <div className='container2'>
                    <div className="animeImg">
                        <img src={props.anime && props.anime.image_url}
                            alt={props.anime && props.anime.title} />
                    </div>
                    <div className='overlay'>
                        <div className="text">
                            <p className='titles'>Rating</p>
                            <p className='rating'>{props.anime.rating}</p>
                            <p className='titles'>Genre</p>
                            <div className='overlay-anime-genre-container'>
                                {props.anime.genre.map(genre => {
                                    return <p className='genre' key={genre}>{genre}</p>
                                })}
                            </div>
                        </div>
                        <form onSubmit={event => props.submitAnime(event, props.anime)}>
                            <select name='addToSelectedList' onChange={event => props.changeSelectedList(event)} aria-label="Add to selected list">
                                <option value=''>--Select One--</option>
                                {props.userLists.map((list, index) => {
                                    return (
                                        <option 
                                            key={index} 
                                            value={list.list_id}
                                            aria-label={`Add anime to ${list.name}`}>
                                                {list.name}
                                        </option>
                                    )                                        
                                })}
                            </select>
                            <button aria-label="Add anime to list">Add to list</button>
                        </form>
                    </div>
                </div>
                <p className="animeName">{props.anime && props.anime.title}</p>
                <button 
                aria-label="Anime expanded view"
                className="expand"
                onClick={event => props.clickDetails(event, props.anime.title)}>
                    {/* expand */}
                    
                        <i className="fas fa-expand"></i>
                    
                    </button>
            </div>
        )
    }
    return (
        <div className='expanded-anime-card'>
            <div className='pop-out'>
                <button className="condense2" onClick={event => props.clickDetails(event, props.anime.title)}>condense</button> <br></br>
                <form onSubmit={event => props.submitAnime(event, props.anime)}>
                    <select name='addToSelectedList' onChange={event => props.changeSelectedList(event)}>
                        <option value=''>--Select One--</option>
                        {props.userLists.map((list, index) => <option key={index} value={list.list_id}>{list.name}</option>)}
                    </select>
                    <button type='submit'>Add to list</button>
                </form >
                <img src={props.anime && props.anime.image_url} alt={props.anime.title && props.anime.title} />
                <h2>{props.anime && props.anime.title}</h2>
                <h3>Description: </h3>
                <p className='desc'>{props.anime && props.anime.description}</p>
                <p>Average rating: {props.anime && props.anime.rating}</p>
                <div className='expanded-anime-genre-container'>
                    {props.anime.genre.map(genre => {
                        return <p className='genre' key={genre}>{genre}</p>
                    })}
                </div>

                <p className='episodes'>Total Episodes: {props.anime.episode_count}</p>

            </div>
        </div>
    )

}

export default KitsuAnimeItem;