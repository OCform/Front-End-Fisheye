class IndexApp {
    constructor() {
        this.indexWrapper = document.querySelector('.photographer_section');
        
        this.photographerApi = new PhotographerApi('/data/photographers.json');
    }
    
    async main() {
        const data = await this.photographerApi.getPhotographer();
        const photographer = data.photographers;
        const Photographer = photographer.map(photographer => new IndexFactory(photographer, 'index'));
        
        Photographer
        .forEach(photographer => {
            const Template = new IndexTemplate(photographer);
            this.indexWrapper.appendChild(
                Template.createIndexTemplate()
            );
        });
    }
}

const app = new IndexApp();
app.main();