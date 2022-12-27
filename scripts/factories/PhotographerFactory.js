class PhotographerFactory {
    constructor(data) {
        this._data = data;
        this._name = data.name;
		this._id = data.id;
        this._city = data.city;
        this._country = data.country;
        this._tagline = data.tagline;
        this._price = data.price;
        this._portrait = data.portrait;
    }

    get data() {
        return this._data;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get city() {
        return this._city;
    }

    get country() {
        return this._country;
    }

    get tagline() {
        return this._tagline;
    }

    get price() {
        return this._price;
    }

    get portrait() {
        return `/assets/photographers/${this._portrait}` ;
    }

    getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add('photographer');
        article.style.textAlign = 'center';

        const a = document.createElement( 'a' );
        a.setAttribute(
        "href", `/photographer.html?name=${this.name}&idPhotographer=${this.id}&city=${this.city}&country=${this.country}&tagline=${this.tagline}&price=${this.price}&portrait=${this.portrait}`);
        a.style.textDecoration = 'none';

        const img = document.createElement( 'img' );
        img.setAttribute("src", this.portrait);
        img.style.borderRadius = '50%';

        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        h2.style.marginBottom = '0';

        const span1 = document.createElement( 'span' );
        span1.textContent = this.city + ', ' + this.country;
        span1.style.color = '#901C1C';

        const span2 = document.createElement( 'span' );  
        span2.textContent = this.tagline;
        
        const span3 = document.createElement( 'span' );
        span3.textContent = this.price + '€/jour';
        span3.style.color = '#525252';
        
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(a);
        article.appendChild(span1);
        article.appendChild(span2);
        article.appendChild(span3);        
        
        return (article);
    }
}
