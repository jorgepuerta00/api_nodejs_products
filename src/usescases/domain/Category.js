'use strict';

class Category {
    constructor(id = null, code, name, products) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.products = products;
    }
}
module.exports = Category;