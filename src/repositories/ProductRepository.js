'use strict';

const IProductRepository = require('../usescases/repository/IProductRepository');

class ProductRepository extends IProductRepository {

    constructor(productDaoFactory, productEntityMap) {
        super();
        this.productDaoFactory = productDaoFactory;
        this.productEntityMap = productEntityMap;
    }

    save(product) {
        const entity = this.productEntityMap.serializeToEntity(product);
        const source = this.productDaoFactory.getProductDao();   
        return source.save(entity);
    }

    remove(id) {
     
    }

    async get(id) {
      
    }

    async all() {
        const source = this.productDaoFactory.getProductDao();   
        return  this.productEntityMap.serializeToProduct(await source.all());
    }

    async getProductsByName(name) {
        const source = this.productDaoFactory.getProductDao();   
        return  this.productEntityMap.serializeToProduct(await source.getProductsByName(name));
    }
}

module.exports = ProductRepository;
