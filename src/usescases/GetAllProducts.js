'use strict';

/**
 * Get all shops from database
 */
class GetAllShops {
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }

    async execute() {
        return await this.shopRepository.all();
    }
}

module.exports = GetAllShops;
