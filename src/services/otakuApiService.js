// Service object for the Otaku API

const OtakuApiService = {
    

    getUsers() {
        // A service method to retrieve users when a search is submitted for users.
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

    addAnimeToList(animeData, list) {
        // A service method to POST anime data to a specified list.
    },

    updateListName(newName, list) {
        // A service method to PATCH a user list and change the name. 
    },


}

export default OtakuApiService;