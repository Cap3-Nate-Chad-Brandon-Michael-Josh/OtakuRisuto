// kitsu API query services
const kitsuUrl = 'https://kitsu.io/api/edge/anime';

const KitsuApiService = {
    // returns a generic GET request to kitsuUrl
    // data[i].attributes.slug for title
    getAnimes() {
        return fetch(`${kitsuUrl}`, {
            headers: {
                // "Accept": "application/vnd.api+json",
                "Content-Type": "application/json"
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    /* returns a user specified text query GET request to kitsu API
       data[i].id <-- needed in order to get genres in subsequent api request
       data[i].attributes.slug <-- for title
       data[i].attributes.description,
       data[i].attributes.averageRating, <-- Some titles have null as the value
       data[i].attributes.posterImage.(tiny, small, medium, large, original) <-- one of
       data[i].attributes.episodeCount */
    getAnimesBySearchTerm(searchTerm) {
        return fetch(`${kitsuUrl}?filter%5Btext%5D=${searchTerm}&include=categories`, {
            headers: {
                // "Accept": "application/vnd.api+json",
                "Content-Type": "application/json"
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    /* get genres for anime based on id
       data[i].attributes.slug will give name of genre 
       (meta.count would give number of genres) */
    getAnimeGenre(queryString) {
        return fetch(`${queryString}`, {
          headers: {
                    //   "Accept": "application/vnd.api+json",
                      "Content-Type": "application/json"
                  },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
      // this fetch request will return the 10 anime with the highest 'average rating'
      getAnimeSuggestions() {
        return fetch(`${kitsuUrl}?sort=-averageRating&include=categories`, {
          headers: {
                    //   "Accept": "application/vnd.api+json",
                      "Content-Type": "application/json"
                  },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },

      serializeAnime(includedGenres, animeData) {
          // genres should be res.included anime should be res.data
            console.log('serializeAnime ran')
            /*  set an object where each genreId's value is the genre title this is
                needed to avoid subsequent api calls to the kitsu api for genre data */
            let genreObject = {}
            includedGenres.map(genre => {
                return genreObject[genre.id] = genre.attributes.title
            })               
            
            // create an array of anime objects with only the data necessary for our purposes.
            let animeArray = []
            animeData.forEach(anime => {
                let animeObject = {};
                animeObject = {
                    title: anime.attributes.canonicalTitle,
                    description: anime.attributes.description,                    
                    image_url: anime.attributes.posterImage.medium,
                    rating: anime.attributes.averageRating,
                    episodeCount: anime.attributes.episodeCount,
                    // only return genreObject values that match the id of genres in the anime object from kitsu.
                    genres: anime.relationships.categories.data.map(genre => {
                        return genreObject[genre.id]
                    })
                }                
                animeArray.push(animeObject)
            })
            return animeArray
            // this.context.setKitsuAnimeData(animeArray);   
      }

}

export default KitsuApiService;

