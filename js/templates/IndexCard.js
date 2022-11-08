class IndexCard {
    constructor(photographer) {
        this._photographer = photographer;
    }
    
    createIndexCard() {
        const $wrapper = document.createElement('article');
        $wrapper.classList.add('photographer-card-wrapper');
        
        const photographerCard = `
        <div class="center">
            <a href="/photographer.html">
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
        
        $wrapper.innerHTML = photographerCard;
        return $wrapper;
    }
}