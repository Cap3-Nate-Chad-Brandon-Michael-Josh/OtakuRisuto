// Service object for the Otaku API

const OtakuApiService = {    

    getUsers(searchTerm) {
        return fetch(`${config.API_ENDPOINT}/search/users${searchTerm}`, {
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
        // A service method to retrieve the logged in user's lists.
    },

    getUserAnime() {
        // A service to populate a user's list with the associated anime data.
    },

    getListsBySearch() {
        // A service method to retrieve lists when a search is submitted for other lists.
    },

    getListInfo(){
        // get the info from a single list
    },

    addAnimeToList(animeData, list) {
        // A service method to POST anime data to a specified list.
    },

    updateListName(newName, list) {
        // A service method to PATCH a user list and change the name. 
    },


}

export default OtakuApiService;