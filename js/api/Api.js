class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url;
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err));
    }
}


class IndexApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url);
    }

    async getIndex() {
        return this.get();
    }
}

class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url);
    }

    async getPhotographer() {
        return this.get();
    }
}