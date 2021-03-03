'use strict';

const ProductFirebaseDao = require('../firebasePersistence/ProductFirebaseDao');
const CategoryFirebaseDao = require('../firebasePersistence/CategoryFirebaseDao');

class FirebaseDaoFactory {

    getProductDao() {
        return ProductFirebaseDao;
    }

    getCategoryDao() {
        return CategoryFirebaseDao;
    }
}

module.exports =  FirebaseDaoFactory;