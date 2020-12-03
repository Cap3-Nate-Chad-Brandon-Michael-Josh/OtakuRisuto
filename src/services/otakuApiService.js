// Service object for the Otaku API
import config from "../config";
import TokenService from "./token-service";

const OtakuApiService = {
    getUsersBySearch(searchTerm) {
        return fetch(`${config.API_ENDPOINT}/search/users/${searchTerm}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getPublicListsBySearch(searchTerm) {
        return fetch(`${config.API_ENDPOINT}/search/lists/${searchTerm}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getListInfo(list_id) {
        // get the info from a single list
        return fetch(`${config.API_ENDPOINT}/list/${list_id}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    addAnimeToList(animeData, list_id) {
        // A service method to POST anime data to a specified list.
        return fetch(`${config.API_ENDPOINT}/anime`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                anime: animeData,
                list_id,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    updateListName(newName, list) {
        // A service method to PATCH a user list and change the name.
        return fetch(`${config.API_ENDPOINT}/list/${list.list_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                name: newName,
                private: list.private,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    postComment(comment, list_id) {
        return fetch(`${config.API_ENDPOINT}/list/comment`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                comment: comment,
                list_id: Number(list_id),
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    postList(title, privacy, anime = []) {
        return fetch(`${config.API_ENDPOINT}/list`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                name: title,
                private: privacy,
                anime: anime,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getSpecifiedUserLists(userId) {
        return fetch(`${config.API_ENDPOINT}/list/user/${userId}`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    postRating(rating, list_id) {
        return fetch(`${config.API_ENDPOINT}/list/rating`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                rating: Number(rating),
                list_id: Number(list_id),
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    getLoggedInUserLists() {
        return fetch(`${config.API_ENDPOINT}/list`, {
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        )
    },
    deleteListAnime(list_anime_id){
        return fetch(`${config.API_ENDPOINT}/anime`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                list_anime_id: Number(list_anime_id)
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    deleteList(list_id){
        return fetch(`${config.API_ENDPOINT}/list/${list_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                list_id: Number(list_id)
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.ok
        );
    },

};

export default OtakuApiService;
