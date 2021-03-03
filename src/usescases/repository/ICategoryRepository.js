'use strict';

class ICategoryRepository {
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

    async getCategoryProductsByShop(shopId) {
    }
    
}

module.exports = ICategoryRepository;
