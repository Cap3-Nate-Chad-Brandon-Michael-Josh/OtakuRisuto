// functional component do display anime details
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
                            {props.anime.rating}
                            <p className='titles'>Genre</p>
                            {props.anime.genre.map((genre, index) => {
                                return <p className='genre' key={genre, index}>{genre}</p>
                            })}
                        </div>
                        <form onSubmit={event => props.submitAnime(event, props.anime)}>
                            <select name='addToSelectedList' onChange={event => props.changeSelectedList(event)}>
                                <option value=''>--Select One--</option>
                                {props.userLists.map(list => <option value={list.list_id}>{list.name}</option>)}
                            </select>
                            <button>Add to list</button>
                        </form>
                    </div>
                </div>
                <p>{props.anime && props.anime.title}</p>
                <button onClick={event => props.clickDetails(event, props.anime.title)}>expand</button>
            </div>
        )
    }
    return (
        <div className='expanded-anime-card'>
            <div className='pop-out'>
                <button onClick={event => props.clickDetails(event, props.anime.title)}>condense</button> <br></br>
                <form onSubmit={event => props.submitAnime(event, props.anime)}>
                    <select name='addToSelectedList' onChange={event => props.changeSelectedList(event)}>
                        <option value=''>--Select One--</option>
                        {props.userLists.map(list => <option value={list.list_id}>{list.name}</option>)}
                    </select>
                    <button type='submit'>Add to list</button>
                </form >
                <img src={props.anime && props.anime.image_url} alt={props.anime.title && props.anime.title} />
                <h2>{props.anime && props.anime.title}</h2>
                <h3>Description: </h3>
                <p className='desc'>{props.anime && props.anime.description}</p>
                <p>Average rating: {props.anime && props.anime.rating}</p>
                {props.anime.genre.map(genre => {
                    return <p className='genre' key={genre}>{genre}</p>
                })}
                <p>Total Episodes: {props.anime.episode_count}</p>

            </div>
        </div>
    )

}

export default KitsuAnimeItem;