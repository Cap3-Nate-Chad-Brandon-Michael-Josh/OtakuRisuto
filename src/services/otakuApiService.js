// Service object for the Otaku API
import config from '../config';
import TokenService from './token-service';

const OtakuApiService = {    

    getUsersBySearch(searchTerm) {
        // Get all users related to a specific search term.
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
        // Get all public anime lists related to a specified search term.
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

    getLoggedInUserLists() {
        // Get the logged in user's anime lists.
        return fetch (`${config.API_ENDPOINT}/list`, {
            headers: {
                'authorization' : `Bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    getSpecifiedUserLists(userId) {
        // Get a specified user's public anime lists.
        return fetch (`${config.API_ENDPOINT}/list/user/${userId}`, {
            headers: {
                'authorization' : `Bearer ${TokenService.getAuthToken()}`,
                'Content-Type' : 'application/json'
            },            
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
    },

    getLoggedInUserAnime() {
        // A service to populate a user's list with the associated anime data.
    },    

    getListInfo(list_id){
        // get the info from a single list
        return fetch(`${config.API_ENDPOINT}/list/${list_id}`, {
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

    addAnimeToList(animeData, list) {
        // A service method to POST anime data to a specified list.
    },

    updateListName(newName, list) {
        // A service method to PATCH a user list and change the name. 
    },


}

export default OtakuApiService;