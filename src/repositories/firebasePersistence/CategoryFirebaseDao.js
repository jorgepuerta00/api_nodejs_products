'use strict';

const ICategoryDao = require('../interfaces/ICategoryDao');
const FirebaseConnection = require('./FirebaseConnection');

class CategoryFirebaseDao extends ICategoryDao {

  constructor() {
    super();
    this.firebaseConnection = new FirebaseConnection();
    this.db = this.firebaseConnection.getFirebaseContextDb();
  }

  save(entity) {
    try {
      this.db.collection('categories').doc(entity.id).set(entity).then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      }).catch(function (error) {
        console.error("Error adding document: ", error);
      });
    }
    catch (err) {
      console.log(err);
    }
    return entity;
  }

  remove(id) {

  }

  get(id) {

  }

  async all() {

    var collection = [];
    let collectionsRef = this.db.collection('categories').orderBy('id');
    let allData = await collectionsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          collection.push(doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    return Promise.resolve(collection);
  }

  async getCategoryProductsByShop(shopId) {

    var collectionProductsCategory = [];

    const categories = await this.db.collection('categories').orderBy('id').get();
    const products = await this.db.collection('products')
      .where('shop.id', '==', shopId)
      .orderBy('id').get();

    categories.forEach(category => {

      var productsTemp = [];
      const categoryData = category.data();

      products.forEach((product) => {
        const productData = product.data();
        if (productData.category.id === categoryData.id)
          productsTemp.push(product.data());
      });

      if (productsTemp.length > 0) {
        collectionProductsCategory.push({ "id": categoryData.id, "name": categoryData.name, products: productsTemp });
      }

    });

    return await Promise.resolve(collectionProductsCategory);
  }

}

const instance = new CategoryFirebaseDao()
Object.freeze(instance);

module.exports = instance;
