// kitsu API query services
const kitsuUrl = 'https://kitsu.io/api/edge/anime';

const KitsuApiService = {
    // returns a generic GET request to kitsuUrl    
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
    
    getAnimesBySearchTerm(searchTerm) {
        // Gets up to 10 anime related to a specified search term.
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
    
    getAnimeSuggestions() {
        // this fetch request will return the 10 anime with the highest 'average rating'
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
          // genres will be res.included anime will be res.data
            console.log('serializeAnime ran')
            /*  set an object where each key is a genreId and each value is the genre title this is
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
                    genre: anime.relationships.categories.data.map(genre => {
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

