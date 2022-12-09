class MediasFactory {
    constructor(media, type, id) {
        const params = new URLSearchParams(document.location.search);
        const idPhotographer = parseInt(params.get("idPhotographer"));
        
        // Si l'identifiant photographe correspond à l'identifiant envoyé, alors retourne moi son formattage
        if(type === 'media' && (id === media.photographerId)){
            if(media.photographerId === idPhotographer) {
                return new OneMedia(media);
            }
        // Sinon retourne moi ce message d'erreur
        } else {
            throw new Error('Le type de formatage est inconnu !');
        }
    }
}