class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;

        this.$wrapper = document.createElement('article');
        this.$wrapper.classList.add('photographer-card-wrapper');
    }

    get photographer() {
        return this._photographer;
    }
    
    createPhotographerCard() {
        const photographerCard = `
            <div class="center">
                <a href="/photographer.html?name=${this._photographer.name}&idPhotographer=${this._photographer.id}&city=${this._photographer.city}&country=${this._photographer.country}&tagline=${this._photographer.tagline}&price=${this._photographer.price}&portrait=${this._photographer.portrait}">
                    <div class="portrait">
                        <img
                            alt="${this._photographer.name}"
                            src="${this._photographer.portrait}"
                        />
                    </div>
                    <h2 class="fs-32 mar-pad">${this._photographer.name}</h2>  
                </a>                  
                <p class="fs-16 bordeaux mar-pad">${this._photographer.city}, ${this._photographer.country}</p>                
                <p class="fs-14 mar-pad">${this._photographer.tagline}</p>
                <p class="fs-12 gris mar-pad">${this._photographer.price}€/jour</p>
            </div>
        `;

        this.$wrapper.innerHTML = photographerCard;        
        return this.$wrapper;
    }
}