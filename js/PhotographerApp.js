class PhotographerApp {
    constructor() {
        this.photographerPortofolio = document.querySelector('.photographer_portofolio');
        
        this.photographerApi = new PhotographerApi('../data/photographers.json').media;
    }
    
    async main() {
        const photographerData = await this.photographerApi.get();
        const Medias = photographerData.map(media => new PhotographerFactory(media, 'photographerApi'));
        
        console.log(Medias);
        
        Medias
        .forEach(media => {
                const Template = new PhotographerCard(media);
                this.photographerPortofolio.appendChild(
                    Template.createPhotographerCard()
                );
            });
    }
}

const app = new PhotographerApp();
app.main();