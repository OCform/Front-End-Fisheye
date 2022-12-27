class IndexApp {
    constructor() {
        this.photographers = [];
        this.photographersSection = document.querySelector(".photograph-section");
    }

    async getPhotographers() {
        this.photographers = [await(await fetch('/data/photographers.json')).json()][0].photographers;
    }

    async displayData() {
        this.photographers
        .forEach((photographer) => {
            this.photographerModel = new PhotographerFactory(photographer);
            this.userCardDOM = this.photographerModel.getUserCardDOM();
            this.photographersSection.appendChild(this.userCardDOM);
        });
    }

    async init() {
        // Récupère les datas des photographes        
        this.displayData(await this.getPhotographers());
    }
}

const photographers = new IndexApp();
photographers.init();