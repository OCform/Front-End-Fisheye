class MediaCard {
    constructor(media) {
        this._media = media;
        
        this.$wrapper = document.createElement('div');
        // if(this.media.type === 'image') this.$wrapper.setAttribute('href', `${this.media.view}`);
        // if(this.media.type === 'video') this.$wrapper.setAttribute('href', `${this.media.view}`);
        // this.$wrapper.setAttribute('alt', `${this.media.title}`);
        this.$wrapper.classList.add('media-card-wrapper');
        // this.$caption = document.createElement('div');
        // this.$caption.classList.add('caption');
        // this.$wrapper.appendChild(this.$caption);

    }

    get media() {
        return this._media;
    }

    get type() {
        return this._media.type;
    }
    
    createMediaCard() {        
        if(this.media.type === 'image' && this.$wrapper !== '') {
            const mediaCard = `
                <img 
                    src="${this.media.view}"
                    alt="${this.media.title}"
                >
            `;
            this.$caption = `<div class="media-card-caption">${this.media.title}<div class="medias_likes"><em class="fa-solid fa-heart"></em>${this.media.likes}</div></div>`;            
            this.$wrapper.innerHTML = mediaCard.concat(this.$caption);
        } else if(this.media.type === 'video' && this.$wrapper !== '') {
            const mediaCard = `
                <video>
                    <source src="${this.media.view}" type="video/mp4">
                    Votre navigateur ne lit pas ce format video.
                </video>
            `;
            this.$caption = `<div class="media-card-caption">${this.media.title}<div class="medias_likes"><em class="fa-solid fa-heart"></em>${this.media.likes}</div></div>`;
            this.$wrapper.innerHTML = mediaCard.concat(this.$caption);
        } else {
            throw new Error('Aucune image, ni video !');
        }
        return this.$wrapper;
    }
}
