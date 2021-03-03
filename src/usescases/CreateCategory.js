'use strict';

class CreateCategory {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    setCategory(category) {
        this.category = category;
    }

    execute() {       
        return this.categoryRepository.save(this.category);
    }
}

module.exports = CreateCategory;
