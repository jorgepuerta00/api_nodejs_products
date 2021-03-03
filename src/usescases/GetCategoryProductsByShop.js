'use strict';

/**
 * Get all shops from database
 */
class GetCategoryProductsByShop {
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }

    setShopId(id) {
        this.shopId = id;
    }

    async execute() {
        return await this.shopRepository.getCategoryProductsByShop(this.shopId);
    }
}

module.exports = GetCategoryProductsByShop;
