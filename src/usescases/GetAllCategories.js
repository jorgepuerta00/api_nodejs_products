'use strict';

/**
 * Get all shops from database
 */
class GetAllCategories {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute() {
        return await this.categoryRepository.all();
    }
}

module.exports = GetAllCategories;
