class PhotographerFactory {
    constructor(photographer, type) {
        // Si le type correspond alors retourne moi son formattage
        if (type === 'photographer') {
            return new OnePhotographer(photographer);
        // Sinon retourne moi ce message d'erreur
        } else {
            throw new Error('Le type de formatage est inconnu !');
        }
    }
}