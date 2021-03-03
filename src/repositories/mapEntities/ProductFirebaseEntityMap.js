'use strict';

const ProductFirebaseEntity = require('../entities/ProductFirebaseEntity');
const Product = require('../../usescases/domain/Product');

const _serializeSingleProductEntity = (entity) => {
    var firebaseEntity = new ProductFirebaseEntity(
        entity.id,
        entity.code,
        entity.name,
        entity.image,
        entity.description,
        entity.largename,
        entity.size,
        entity.price, 
        entity.category, 
        entity.shop,
        entity.keywords
    );
    return JSON.parse(JSON.stringify(firebaseEntity));
};

const _serializeSingleProduct = (entity) => {
    return new Product(
        entity.id,
        entity.code,
        entity.name,
        entity.image,
        entity.description,
        entity.largename,
        entity.size,
        entity.price, 
        entity.category, 
        entity.shop,
        entity.keywords
    );
}

module.exports = class ProductFirebaseEntityMap {
    serializeToEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleProductEntity);
        }
        return _serializeSingleProductEntity(data);
    }

    serializeToProduct(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleProduct);
        }
        return _serializeSingleProduct(data);
    }
};
