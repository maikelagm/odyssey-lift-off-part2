import { RESTDataSource } from "apollo-datasource-rest";

//Esta es la manera en la que Apollo hace peticiones a un API REST, lo que mejora muchisimo respecto al uso de fetch o axios.

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }
}

export default TrackAPI;