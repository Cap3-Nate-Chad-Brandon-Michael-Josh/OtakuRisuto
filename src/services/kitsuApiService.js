// kitsu API query services
const kitsuUrl = 'https://kitsu.io/api/edge/anime';

const KitsuApiService = {
    // returns a generic GET request to kitsuUrl
    // data[i].attributes.slug for title
    getAnimes() {
        return fetch(`${kitsuUrl}`, {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
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
        return fetch(`${kitsuUrl}?filter%5Btext%5D=${searchTerm}`, {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
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
    getAnimeGenre(id) {
        return fetch(`${kitsuUrl}/${id}/genres`, {
          headers: {
                      "Accept": "application/vnd.api+json",
                      "Content-Type": "application/vnd.api+json"
                  },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
}

export default KitsuApiService;

