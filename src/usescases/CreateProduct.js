'use strict';

class CreateProduct {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    setProduct(product) {
        this.product = product;
    }

    execute() {       
        return this.productRepository.save(this.product);
    }
}

module.exports = CreateProduct;
