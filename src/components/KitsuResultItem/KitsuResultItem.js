// functional component do display anime details
import React from 'react';

const KitsuAnimeItem = (props) => {

    if (!props.expanded) {
        return (
            <div className='anime-card'>
                {/* Prop variable names subject to change */}
                <img src={props.anime && props.anime.attributes.posterImage.tiny} 
                alt={props.anime && props.anime.attributes.canonicalTitle} />
                <p>{props.anime && props.anime.attributes.canonicalTitle}</p>
                <button onClick={event => props.clickDetails(event, props.anime.attributes.slug)}>expand</button>
            </div>
        )
    }
    return (
        <div className='expanded-anime-card'>
            <img src={props.anime && props.anime.attributes.posterImage.medium} alt={props.anime.title && props.anime.title} />
            <h2>{props.anime && props.anime.attributes.canonicalTitle}</h2>
            <h3>Description: </h3>
            <p>{props.anime && props.anime.attributes.description}</p>
            <p>Average rating: {props.anime && props.anime.attributes.averageRating}</p>
            {props.genres.map(genre => {
                return <p>{genre}</p>
            })}
            <p>Total Episodes: {props.episodeCount}</p>
            <button onClick={event => props.clickDetails(event, props.anime.attributes.slug)}>condense</button>
        </div>
    )
    
}

export default KitsuAnimeItem;