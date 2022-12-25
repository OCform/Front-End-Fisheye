async function getPhotographers() {
    
    const photographers = [await(await fetch('/data/photographers.json')).json()][0].photographers;
        
    // retourne le tableau photographers seulement une fois
    console.log({
        photographers: [...photographers]});
    return ({
        photographers: [...photographers]});
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();

// class Photographer {
//     constructor() {
//         this.$photographersWrapper = document.querySelector('.photographer_section');
        
//         // Photographers array
//         this.$photographers = [];

//     }
//     async getPhotographers() {
//         this.$photographers = fetch('/data/photographers.json')
//         .then(response => response.json)
//         .then(res => res.data)
//         .catch(err => console.log('an error occurs', err));   
        
//         return ({
//             photographers: [...photographers]});

//     }
//     async displayData(photographers) {        
//         photographers.forEach((photographer) => {
//             const photographerModel = photographerFactory(photographer);
//             const userCardDOM = photographerModel.getUserCardDOM();
//             photographersSection.appendChild(userCardDOM);
//         });
//     }

//     async init() {
//         // Récupère les datas des photographes
//         const { photographers } = await getPhotographers();
//         displayData(photographers);
//     }
    
//     init();
// }
