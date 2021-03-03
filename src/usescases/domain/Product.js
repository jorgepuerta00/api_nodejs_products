'use strict';

class Product {
    constructor(id = null, code, name, image, description, largename, size ,price, category, shop, keywords) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.image = image;
        this.description = description;
        this.largename = largename;
        this.size = size;
        this.price = price;
        this.category = category;
        this.shop = shop;
        this.keywords = keywords
    }
}
module.exports = Product;