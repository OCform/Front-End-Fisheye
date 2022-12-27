class PhotographerApp {
    constructor() {
        this.medias = [];
        this.header = document.querySelector("header");
        this.logo = document.querySelector(".logo");
        this.photographGalery = document.querySelector(".photograph-galery");
        this.photographCartridge = document.querySelector(".photograph-cartridge");
        this.photographName = document.querySelector(".photograph-name");
        this.photographLocation = document.querySelector(".photograph-location");
        this.photographTagline = document.querySelector(".photograph-tagline");
        this.photographPortrait = document.querySelector(".photograph-portrait");

        this.params = new URLSearchParams(document.location.search);
        this.name = this.params.get("name");
        this.idPhotographer = parseInt(this.params.get("idPhotographer"));        
        this.city = this.params.get("city");
        this.country = this.params.get("country");
        this.tagline = this.params.get("tagline");
        this.portrait = this.params.get("portrait");
    }
    
    async getMedias() {
        this.medias = [await(await fetch('/data/photographers.json')).json()][0].media;
    }

    async displayData() {
        const a = document.createElement( 'a' );
        a.setAttribute("href", '/index.html');
        a.style.textDecoration = 'none';
        a.appendChild(this.logo);
        this.header.appendChild(a);


        this.photographCartridge.style.marginLeft = '50px';

        const h1 = document.createElement( 'h1' );
        h1.textContent = this.name;
        h1.style.color = '#D3573C';
        h1.style.margin = '0';
        this.photographName.appendChild(h1);

        const span = document.createElement( 'span' );
        span.textContent = this.city + ', ' + this.country;
        span.style.color = '#901C1C';
        span.style.margin = '0';
        this.photographLocation.appendChild(span);

        const p = document.createElement( 'p' );
        p.textContent = this.tagline;
        this.photographTagline.appendChild(p);

        const img = document.createElement( 'img' );
        img.setAttribute("src", this.portrait);
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '50%';
        this.photographPortrait.appendChild(img);
        this.photographPortrait.style.marginRight = '50px';

        this.photographGalery.style.display = 'grid';
        this.photographGalery.style.gridTemplateColumns = 'repeat(3, 1fr)';
        this.photographGalery.style.gridRowGap = '50px';
        this.photographGalery.style.gridColumnGap = '94px';
        this.photographGalery.style.margin = 'auto';
        this.photographGalery.style.maxWidth = '1240px';
        this.photographGalery.style.width = '100%';
        this.photographGalery.style.marginTop = '100px';        
        
        this.medias
        .forEach((media) => {
            if(media.photographerId === this.idPhotographer) {
                this.mediaModel = new MediaFactory(media);
                this.mediaCardDOM = this.mediaModel.getMediaCardDOM();
                this.photographGalery.appendChild(this.mediaCardDOM);
            }
        });
    }

    async init() {
        // Récupère les datas des medias        
        this.displayData(await this.getMedias());
    }
}

const medias = new PhotographerApp();
medias.init();
