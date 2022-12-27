class MediaFactory {
    constructor(data) {
        this._data = data;
        this._id = data.id;
        this._photographerId = data._photographerId;
        this._title = data.title;
        this._media = data.image? data.image : data.video;
        this._type = data.image ? 'image' : 'video';        
		this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }
    
    get data() {
        return this._data;
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
    
    get media() {
        return `/assets/photographers/${this._media}`;
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

    getMediaCardDOM() {
        const media = document.createElement( 'div' );        
        media.classList.add('media');
        

        if(this.type === 'image') {
            const img = document.createElement( 'img' );
            img.setAttribute("src", this.media);
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.width = '350px';
            img.style.height = '300px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '2%';  
            img.style.cursor = 'pointer';
            media.appendChild(img);                        
        }

        if(this.type === 'video') {
            const video = document.createElement( 'video' );
            const source = document.createElement( 'source' );
            source.setAttribute("src", this.media);
            video.appendChild(source);
            video.style.display = 'flex';
            video.style.alignItems = 'center';
            video.style.width = '350px';
            video.style.height = '300px';
            video.style.objectFit = 'cover';
            video.style.borderRadius = '2%';
            video.style.cursor = 'pointer';            
            media.appendChild(video);          
        }

        const caption = document.createElement( 'div' );        
        caption.classList.add('caption-container');
        caption.style.marginTop = '10px';
        caption.style.fontSize = '20px';
        caption.style.color = '#901C1C';
        caption.style.display = 'flex';
        caption.style.justifyContent = 'space-between';
        
        const title = document.createElement( 'div' );        
        title.classList.add('title');
        title.textContent = this.title;        
        caption.appendChild(title);        

        const likes = document.createElement( 'div' );        
        likes.classList.add('likes');
        likes.textContent = this.likes;
        likes.style.display = 'flex';
        
        caption.appendChild(likes);

        const heart = document.createElement( 'div' );
        heart.classList.add('heart');
        heart.innerHTML = '<i class="fa fa-heart" aria-hidden="true"></i>';
        heart.style.marginLeft = '5px';
        likes.appendChild(heart);
        
        media.appendChild(caption);

        return (media);
    }
}