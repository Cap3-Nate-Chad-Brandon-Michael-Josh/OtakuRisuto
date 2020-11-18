// functional component do display anime details
import React from 'react';

const KitsuAnimeItem = (props) => {

    if (!props.expanded) {
        return (
            <div className='anime-card'>
                {/* Prop variable names subject to change */}
                <img src={props.anime.posterImage.tiny && props.anime.posterImage.tiny} alt={props.anime.title && props.anime.title} />
                <p>{props.anime.title && props.anime.title}</p>
            </div>
        )
    }
    return (
        <div>
            <img src={props.anime.posterImage.medium && props.anime.posterImage.medium} alt={props.anime.title && props.anime.title} />
            <h2>{props.anime.title && props.anime.title}</h2>
            <h3>Description: </h3>
            <p>{props.anime.description && props.anime.description}</p>
            <p>Average rating: {props.anime.averageRating && props.anime.averageRating}</p>
            {props.genres.map(genre => {
                return <p>{genre.slug}</p>
            })}
        </div>
    )
    
}

export default KitsuAnimeItem;