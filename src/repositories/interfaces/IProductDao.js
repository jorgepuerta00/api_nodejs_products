'use strict';

 class IProductDao{
    constructor() { }

    save(entity) {
        // To be overridden in concrete implementation
    }

    remove(id) {
        // To be overridden in concrete implementation
    }

    get(id) {
        // To be overridden in concrete implementation
    }

   async all() {
        // To be overridden in concrete implementation
    }

    async getProductsByName(name) {
    }
}

module.exports = IProductDao;
