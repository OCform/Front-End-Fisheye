class IndexFactory {
    constructor(data, type) {
        // Si le type correspond à l'API, alors retourne moi son formattage
        if (type === 'index') {
            return new IndexModel(data);
        // Sinon retourne moi le nouveau formattage
        } else {
            throw new Error('Unknown type format');
        }
    }
}