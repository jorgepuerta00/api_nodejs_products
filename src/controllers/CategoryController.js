'use strict';

const CreateCategory = require('../usescases/CreateCategory');
const GetAllCategories = require('../usescases/GetAllCategories');
const GetCategoryProductsByShop = require('../usescases/GetCategoryProductsByShop');
const Category = require('../usescases/domain/Category');
const CategoryRepository = require('../repositories/CategoryRepository');
const FirebaseDaoFactory = require('../repositories/daoFactory/FirebaseDaoFactory');
const CategoryFirebaseEntityMap = require('../repositories/mapEntities/CategoryFirebaseEntityMap');

class CategoryController {
    constructor() {
        this.repository = new CategoryRepository(new FirebaseDaoFactory(), new CategoryFirebaseEntityMap());
    }

    createCategory(request, h) {
        const { id, code, name } = request.payload;
        const useCase = new CreateCategory(this.repository);
        useCase.setCategory(new Category(id, code, name));
        const response = h.response({ "data": useCase.execute() }).code(201).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getAllCategories(request, h) {
        const useCase = new GetAllCategories(this.repository);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getCategoryProductsByShop(request, h) {
        const shopId  =  request.params.id;
        const useCase = new GetCategoryProductsByShop(this.repository);
        useCase.setShopId(shopId);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }
}

module.exports = CategoryController;
