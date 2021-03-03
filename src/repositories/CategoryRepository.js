'use strict';

const ICategoryRepository = require('../usescases/repository/ICategoryRepository');

class CategoryRepository extends ICategoryRepository {

    constructor(categoryDaoFactory, categoryEntityMap) {
        super();
        this.categoryDaoFactory = categoryDaoFactory;
        this.categoryEntityMap = categoryEntityMap;
    }

    save(category) {
        const entity = this.categoryEntityMap.serializeToEntity(category);
        const source = this.categoryDaoFactory.getCategoryDao();   
        return source.save(entity);
    }

    remove(id) {
     
    }

    async get(id) {
      
    }

    async all() {
        const source = this.categoryDaoFactory.getCategoryDao();   
        return  this.categoryEntityMap.serializeToCategory(await source.all());
    }

    async getCategoryProductsByShop(shopId) {
        const source = this.categoryDaoFactory.getCategoryDao();   
        return  this.categoryEntityMap.serializeToCategory(await source.getCategoryProductsByShop(shopId));
    }
}

module.exports = CategoryRepository;
