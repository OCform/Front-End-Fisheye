class MediaCard {
    constructor(media) {
        this._media = media;  
        
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('media-card-wrapper');
    }

    get media() {
        return this._media;
    }
    
    createMediaCard() {
        // DOM elements        
        const params = new URLSearchParams(document.location.search);
        const idPhotographer = parseInt(params.get("idPhotographer"));
                        
        if(this._media.photographerId === idPhotographer) {
            
            if(`${this._media.type}`=== 'image' && this.$wrapper !== '') {
                const mediaCard = `
                    <img 
                        src="${this._media.view}"
                        alt="${this._media.title}"
                    >
                `;
                this.$wrapper.innerHTML = mediaCard;
            } else if(`${this._media.type}`=== 'video' && this.$wrapper !== '') {
                const mediaCard = `
                    <video>
                        <source src="${this._media.view}" type="video/mp4">
                        Votre navigateur ne lit pas ce format video.
                    </video>
                `;
                this.$wrapper.innerHTML = mediaCard;
            } else {
                this.$wrapper.parentNode.removeChild(div);
                throw new Error('Aucune image, ni video !');
            }
        }
        return this.$wrapper;
    }
}