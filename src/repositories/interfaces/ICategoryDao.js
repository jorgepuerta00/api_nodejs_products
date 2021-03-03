'use strict';

 class ICategoryDao{
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

    async getCategoryProductsByShop(shopId) {
    }
}

module.exports = ICategoryDao;
