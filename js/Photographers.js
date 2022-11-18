class Photographers {
    constructor() {
        this.$photographersWrapper = document.querySelector('.photographer_section');
        
        this.photographersApi = new PhotographerApi('/data/photographers.json');
        
        // Photographers
        this.Photographers = [];
    }

    async fetchPhotographers() {
        const photographersData = await this.photographersApi.getPhotographer();
        const photographer = photographersData.photographers;
        const photographers = photographer.map(photographer => new PhotographerFactory(photographer, 'photographer'));
        
        this.Photographers = photographers;
    }

    async main() {
        await this.fetchPhotographers();
        
        this.Photographers.forEach(photographer => {
            const Template = new PhotographerCard(photographer);
            this.$photographersWrapper.appendChild(
                Template.createPhotographerCard()
            );
        });
    }
}

const photographers = new Photographers();
photographers.main();

// class IndexApp {
//     constructor() {
//         this.indexWrapper = document.querySelector('.photographer_section');
        
//         this.photographerApi = new PhotographerApi('/data/photographers.json');
//     }
    
//     async main() {
//         const data = await this.photographerApi.getPhotographer();
//         const photographer = data.photographers;
//         const Photographer = photographer.map(photographer => new IndexFactory(photographer, 'index'));
        
//         Photographer
//         .forEach(photographer => {
//             const Template = new IndexTemplate(photographer);
//             this.indexWrapper.appendChild(
//                 Template.createIndexTemplate()
//             );
//         });
//     }
// }

// const app = new IndexApp();
// app.main();