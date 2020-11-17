const kitsuUrl = 'https://kitsu.io/api/edge/anime';

const KitsuApiService = {
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
}

export default KitsuApiService;

