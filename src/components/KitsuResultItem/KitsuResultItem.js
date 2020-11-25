// functional component do display anime details
import React from 'react';

const KitsuAnimeItem = (props) => {

    if (!props.expanded) {
        return (
            <div className='anime-card'>               
                <img src={props.anime && props.anime.image_url} 
                alt={props.anime && props.anime.title} />
                <p>{props.anime && props.anime.title}</p>
                <button onClick={event => props.clickDetails(event, props.anime.title)}>expand</button>
            </div>
        )
    }
    return (
        <div className='expanded-anime-card'>
            <img src={props.anime && props.anime.image_url} alt={props.anime.title && props.anime.title} />
            <h2>{props.anime && props.anime.title}</h2>
            <h3>Description: </h3>
            <p>{props.anime && props.anime.description}</p>
            <p>Average rating: {props.anime && props.anime.rating}</p>
            {props.anime.genres.map(genre => {
                return <p>{genre}</p>
            })}
            <p>Total Episodes: {props.anime.episodeCount}</p>
            <button onClick={event => props.clickDetails(event, props.anime.title)}>condense</button>
        </div>
    )
    
}

export default KitsuAnimeItem;