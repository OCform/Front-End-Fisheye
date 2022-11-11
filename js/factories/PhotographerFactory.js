class PhotographerFactory {
    constructor(data, type) {
        const params = new URLSearchParams(document.location.search);
        const idPhotographer = parseInt(params.get("idPhotographer"));
        
        // Si l'identifiant photographe correspond à l'identifiant envoyé, alors retourne moi son formattage
        if(idPhotographer && (type === 'photographer')){
            if(data.photographerId === idPhotographer) {
                console.log(data.photographerId);
                return new PhotographerModel(data);
            }
        // Sinon retourne moi ce message
        } else {
            throw new Error('Invalid photographer ID');            
        }
    }
}