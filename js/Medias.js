class Medias {
    constructor() {
        this.params = new URLSearchParams(document.location.search);
        this.idPhotographer = parseInt(this.params.get("idPhotographer"));
        this.name = this.params.get("name");
        this.city = this.params.get("city");
        this.country = this.params.get("country");
        this.tagline = this.params.get("tagline");
        this.portrait = this.params.get("portrait");

        this.$mediasWrapper = document.querySelector('.photographer_gallery');
        this.$lightboxWrapper = document.querySelector('.photographer_lightbox');
        this.$formWrapper = document.querySelector('.photographer_form');
        
        this.mediasApi = new PhotographerApi('/data/photographers.json');

        this.$mediaList = [];
        
        // Medias
        this.Medias = [];

        // UserContext
        this.UserContext = new UserContext();
    }

    async fetchMedias() {
        const mediasData = await this.mediasApi.getPhotographer();
        const $media = mediasData.media;
        
        const medias = $media.map(media => new MediasFactory(media, 'media', media.photographerId));
        
        this.Medias = medias;
    }

    async main() {
        
        // DOM elements
        const photographeName = document.querySelector('.photographer_name');
        const photographerLocation = document.querySelector('.photographer_location');
        const photographerTagline = document.querySelector('.photographer_tagline');
        const photographerPortrait = document.querySelector('.photographer_portrait');

        photographeName.innerHTML = `<h1>${this.name}</h1>`;
        photographerLocation.innerHTML = `<p>${this.city}, ${this.country}</p>`;
        photographerTagline.innerHTML = `<p>${this.tagline}</p>`;
        photographerPortrait.innerHTML = `<img src="${this.portrait}" alt=""${this.name}/>`;

        await this.fetchMedias();

        const Form = new FormModal(this.UserContext);
        Form.render();
        
        this.Medias.forEach(media => {
            if(media.photographerId === this.idPhotographer) {
                
                this.$mediaList.push(media);
                this.n = this.$mediaList.indexOf(this.photographer);
                
                const Template = new MediaCardWithLightbox(
                    new MediaCard(media)
                );

                this.$mediasWrapper.appendChild(
                    Template.createMediaCard()
                );
            }
        });
    }
}

const media = new Medias();
media.main();