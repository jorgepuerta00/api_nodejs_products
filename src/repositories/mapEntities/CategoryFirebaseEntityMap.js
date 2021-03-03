'use strict';

const CategoryFirebaseEntity = require('../entities/CategoryFirebaseEntity');
const Category = require('../../usescases/domain/Category');

const _serializeSingleCategoryEntity = (entity) => {
    var firebaseEntity = new CategoryFirebaseEntity(
        entity.id,
        entity.code,
        entity.name,
        entity.products
    );
    return JSON.parse(JSON.stringify(firebaseEntity));
};

const _serializeSingleCategory = (entity) => {
    return new Category(
        entity.id,
        entity.code,
        entity.name,
        entity.products
    );
}

module.exports = class CategoryFirebaseEntityMap {
    serializeToEntity(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleCategoryEntity);
        }
        return _serializeSingleCategoryEntity(data);
    }

    serializeToCategory(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleCategory);
        }
        return _serializeSingleCategory(data);
    }
};
