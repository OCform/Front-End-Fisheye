class IndexApp {
    constructor() {
        this.indexWrapper = document.querySelector('.photographer_section');
        
        this.indexApi = new IndexApi('../data/photographers.json').photographers;
    }
    
    async main() {
        const indexData = await this.indexApi.get();
        const Photographers = indexData.map(photographer => new IndexFactory(photographer, 'indexApi'));
        
        console.log(Photographers);
        
        Photographers
        .forEach(photographer => {
                const Template = new IndexCard(photographer);
                this.indexWrapper.appendChild(
                    Template.createIndexCard()
                );
            });
    }
}

const app = new IndexApp();
app.main();