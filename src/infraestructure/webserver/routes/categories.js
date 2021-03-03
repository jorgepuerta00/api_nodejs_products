'use strict';

const JWT = require('jsonwebtoken');
const CategoryController = require('../../../controllers/CategoryController');
const categoriesController = new CategoryController();

module.exports = [
  {
    method: 'POST',
    path: '/api/categories',
    config: { auth: 'jwt' },
    handler: async (request, h) => categoriesController.createCategory(request, h)
  },
  {
    method: 'GET',
    path: '/api/categories',
    config: { auth: 'jwt' },
    handler: async (request, h) => categoriesController.getAllCategories(request, h)
  },
  {
    method: 'GET',
    path: '/api/categories/categoryProductsByShop/{id}',
    config: { auth: 'jwt' },
    handler: async (request, h) => categoriesController.getCategoryProductsByShop(request, h)
  }
];
