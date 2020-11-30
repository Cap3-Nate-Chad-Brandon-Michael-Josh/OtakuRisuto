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

  addAnimeToList(animeData, list) {
    // A service method to POST anime data to a specified list.
    return fetch(`${config.API_ENDPOINT}/anime`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        anime: animeData,
        list_id: list.list_id,
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
};

export default OtakuApiService;
