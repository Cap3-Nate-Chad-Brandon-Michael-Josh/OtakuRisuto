// functional component do display anime details
import React from 'react';
import './KitsuAnimeItem.css'
const KitsuAnimeItem = (props) => {

    if (!props.expanded) {
        return (
            <div className='anime-card'>   
                <div className='container2'>
                    <div className="animeImg">
                        <img src={props.anime && props.anime.mediumImage} 
                        alt={props.anime && props.anime.title} />
                    </div>
                    <div className='overlay'>
                    <div class="text">
                        <p className='titles'>Rating</p>
                        { props.anime.rating}
                        <p className='titles'>Genre</p>
                        {props.anime.genres.map(genre => {
                         return <p class='genre'>{genre}</p>
                    })}
                        
                        </div>
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

                <img src={props.anime && props.anime.mediumImage} alt={props.anime.title && props.anime.title} />
                <h2>{props.anime && props.anime.title}</h2>
                <h3>Description: </h3>
                <p className='desc'>{props.anime && props.anime.description}</p>
                <p>Average rating: {props.anime && props.anime.rating}</p>
                {props.anime.genres.map(genre => {
                    return <p class='genre'>{genre}</p>
                })}
                <p>Total Episodes: {props.anime.episodeCount}</p>
            </div>
            <button onClick={event => props.clickDetails(event, props.anime.title)}>condense</button>
        </div>
    )
    
}

export default KitsuAnimeItem;