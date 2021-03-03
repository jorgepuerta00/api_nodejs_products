'use strict';

/**
 * Get all shops from database
 */
class GetProductsByName {
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }

    setName(name) {
        this.name = name;
    }

    async execute() {
        return await this.shopRepository.getProductsByName(this.name);
    }
}

module.exports = GetProductsByName;
