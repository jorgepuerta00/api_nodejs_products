'use strict';

const CreateProduct = require('../usescases/CreateProduct');
const GetAllProducts = require('../usescases/GetAllProducts');
const GetProductsByName = require('../usescases/GetProductsByName');
const Product = require('../usescases/domain/Product');
const ProductRepository = require('../repositories/ProductRepository');
const FirebaseDaoFactory = require('../repositories/daoFactory/FirebaseDaoFactory');
const ProductFirebaseEntityMap = require('../repositories/mapEntities/ProductFirebaseEntityMap');

class ProductController {
    constructor() {
        this.repository = new ProductRepository(new FirebaseDaoFactory(), new ProductFirebaseEntityMap());
    }

    createProduct(request, h) {
        const { id, code, name, image, description, largename, size, price, category, shop, keywords } = request.payload;
        const useCase = new CreateProduct(this.repository);
        useCase.setProduct(new Product(id, code, name, image, description, largename, size, price, category, shop, keywords));
        const response = h.response({ "data": useCase.execute() }).code(201).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getAllProducts(request, h) {
        const useCase = new GetAllProducts(this.repository);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }

    async getProductsByName(request, h) {
        const name = request.params.name;
        const useCase = new GetProductsByName(this.repository);
        useCase.setName(name);
        const response = h.response({ "data": await useCase.execute() }).code(200).type('application/json');
        response.header("Authorization", request.headers.authorization);
        return response;
    }
}

module.exports = ProductController;
