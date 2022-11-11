class PhotographerTemplate {
    constructor(photographer) {
        this._photographer = photographer;        

        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('media_wrapper');        
        this.$textCard = document.createElement('div');
        this.$textCard.classList.add('title_likes');
    }

    get photographer() {
        return this._photographer;
    }
    
    createPhotographerTemplate() {
        // DOM elements        
        const params = new URLSearchParams(document.location.search);
        const idPhotographer = parseInt(params.get("idPhotographer"));
                        
        if(this._photographer.photographerId === idPhotographer) {
            if(`${this._photographer.type}`=== 'image' && this.$wrapper !== '') {
                const photographerTemplate = `
                    <img 
                        src="${this._photographer.view}"
                        alt="${this._photographer.title}"
                    >
                `;
                const text = `
                <div classe="title_likes">
                    <span>${this._photographer.title}</span>
                    <span><em class="fa-solid fa-heart"></em>${this._photographer.likes}</span>
                </div>
                `;
                this.$textCard.innerHTML = text;
                this.$wrapper.innerHTML = photographerTemplate.concat(text);
            } else if(`${this._photographer.type}`=== 'video' && this.$wrapper !== '') {
                const photographerTemplate = `
                    <video>
                        <source src="${this._photographer.view}" type="video/mp4">
                        Votre navigateur ne lit pas ce format video.
                    </video>
                `;
                const text = `
                    <div classe="title_likes">
                        <span>${this._photographer.title}</span>
                        <span><em class="fa-solid fa-heart"></em>${this._photographer.likes}</span>
                    </div>    
                `;
                this.$textCard.innerHTML = text;
                this.$wrapper.innerHTML = photographerTemplate.concat(text);
            } else {
                this.$wrapper.parentNode.removeChild(div);
                throw new Error('Aucune image, ni video !');
            }
        }
        return this.$wrapper;
    }
}