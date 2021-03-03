'use strict';

const IProductDao = require('../interfaces/IProductDao');
const FirebaseConnection = require('./FirebaseConnection');

class ProductFirebaseDao extends IProductDao {

  constructor() {
    super();
    this.firebaseConnection = new FirebaseConnection();
    this.db = this.firebaseConnection.getFirebaseContextDb();
  }

  save(entity) {
    try {
      this.db.collection('products').doc(entity.id).set(entity).then(function (docRef) {
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
    let collectionsRef = this.db.collection('products').orderBy('id');
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

  async getProductsByName(name) {
    var collection = [];
    let collectionsRef = await this.db.collection('products')
      .where('keywords', 'array-contains', name.replace(' ','').toLowerCase())
      .orderBy('id').get()
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
}

const instance = new ProductFirebaseDao()
Object.freeze(instance);

module.exports = instance;
