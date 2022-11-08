class PhotographerModel {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._view = data.view;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }
    
    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }
    
    get title() {
        return this._title;
    }

    get view() {
        return this._view.hasOwnProperty('image') ? `/assets/photographers/${this._image}` : `/assets/photographers/${this._video}`;
    }

    get image() {
        return `/assets/photographers/${this._image}`;
    }

    get video() {
        return `/assets/photographers/${this._video}`;
    }

    get likes() {
        return this._likes;
    }
    
    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }
}