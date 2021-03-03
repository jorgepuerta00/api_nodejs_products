'use strict';

class IProductRepository {
    constructor() {
     }

    save(product) {
        // To be overridden in concrete implementation
    }

    remove(product) {
        // To be overridden in concrete implementation
    }

    get(idProduct) {
        // To be overridden in concrete implementation
    }

    async all() {
        // To be overridden in concrete implementation
    }

    async getProductsByName(name) {
        // To be overridden in concrete implementation
    }
    
}

module.exports = IProductRepository;
