class OneMedia {     
    constructor(media) {
        this._id = media.id;
		this._photographerId = media.photographerId;
		this._title = media.title;
        this._image = media.image? media.image : media.video;
        this._video = media.video? media.video : media.image;
        this._type = media.image ? 'image' : 'video';
        this._type = media.video ? 'video' : 'image';
        this._likes = media.likes;
		this._date = media.date;
		this._price = media.price;                
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
    
    get image() {
        return `/assets/photographers/${this._image}`;
    }

    get video() {
        return `/assets/photographers/${this._video}`;
    }
    
    get type() {
        return this._type;
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