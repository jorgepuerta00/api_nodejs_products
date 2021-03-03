'use strict';

const JWT = require('jsonwebtoken');
const ProductController = require('../../../controllers/ProductController');
const productsController = new ProductController();

module.exports = [
  {
    method: 'GET',
    path: '/api/token',
    config: {
      auth: false
    },
    handler: async (request, h) => {
      const people = {
        1: {
          id: 1,
          name: 'Jen Jones'
        }
      };
      const token = JWT.sign(people[1], 'NeverShareYourSecret');
      return h.response({
        token: token
      }).code(200).type('application/json');
    }
  },
  {
    method: "GET",
    path: "/",
    config: { auth: false },
    handler: async (request, h) => {
      return { text: 'Token not required' };
    }
  },
  {
    method: 'POST',
    path: '/api/products',
    config: { auth: 'jwt' },
    handler: async (request, h) => productsController.createProduct(request, h)
  },
  {
    method: 'GET',
    path: '/api/products',
    config: { auth: 'jwt' },
    handler: async (request, h) => productsController.getAllProducts(request, h)
  },

  {
    method: 'GET',
    path: '/api/productsByName/{name}',
    config: { auth: 'jwt' },
    handler: async (request, h) => productsController.getProductsByName(request, h),
  }
];
