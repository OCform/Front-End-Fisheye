class PhotographerApp {
    constructor() {
        this.idMain = document.querySelector('.photographer_gallery');
        
        this.photographerApi = new PhotographerApi('/data/photographers.json');
    }
    
    async main() {        
        const params = new URLSearchParams(document.location.search);
        const idPhotographer = parseInt(params.get("idPhotographer"));
        const name = params.get("name");
        const city = params.get("city");
        const country = params.get("country");
        const tagline = params.get("tagline");
        const portrait = params.get("portrait");
        
        // DOM elements
        const photographeName = document.querySelector('.photographer_name');
        const photographerLocation = document.querySelector('.photographer_location');
        const photographerTagline = document.querySelector('.photographer_tagline');
        const photographerPortrait = document.querySelector('.photographer_portrait');

        photographeName.innerHTML = `<h1>${name}</h1>`;
        photographerLocation.innerHTML = `<p>${city}, ${country}</p>`;
        photographerTagline.innerHTML = `<p>${tagline}</p>`;
        photographerPortrait.innerHTML = `<img src="${portrait}" alt=""${name}/>`;
        
        
        
        
        const data = await this.photographerApi.getPhotographer();
        const medias = data.media;
        const Medias = medias.map(media => new PhotographerFactory(media, 'photographer'));

        Medias
        .forEach(media => {
            if(media.photographerId === idPhotographer) { 
                const Template = photographerTemplateWithLightbox(new PhotographerTemplate(media));
                this.idMain.appendChild(
                    Template.createPhotographerTemplate()
                );
            }
        });
    }
    
}

const app = new PhotographerApp();
app.main();