// Service object for the Otaku API
import config from '../config';
import TokenService from '../services/token-service';

const OtakuApiService = {    

    getUsersBySearch(searchTerm) {
        return fetch(`${config.API_ENDPOINT}/search/users/${searchTerm}`, {
            headers: {                
                'authorization' : `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getPublicListsBySearch(searchTerm) {
        return fetch(`${config.API_ENDPOINT}/search/lists/${searchTerm}`, {
            headers: {                
                'authorization' : `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getUserLists() {
        // A service method to retrieve lists when a search is submitted for other lists.
    },

    getUserAnime() {
        // A service to populate a user's list with the associated anime data.
    },

    addAnimeToList(animeData, list) {
        // A service method to POST anime data to a specified list.
    },

    updateListName(newName, list) {
        // A service method to PATCH a user list and change the name. 
    },


}

export default OtakuApiService;