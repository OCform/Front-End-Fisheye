class PhotographerFactory {
    constructor(data, type) {
        // Si le type correspond à l'API, alors retourne moi son formattage
        if (type === 'photographerApi') {
            return new PhotographerModel(data);
        // Sinon retourne moi le nouveau formattage
        } else {
            throw new Error('Unknown type format');
        }
    }
}