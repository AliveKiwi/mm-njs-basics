const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const filePath = path.join(rootDir, 'data', 'products.json');

const getProductFromFile = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else cb(JSON.parse(fileContent)); // The product data read from product.json would be passed callback function which would be used in shop.ejs
  });
};
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log('In save()', err);
      });
    });
  }

  // Using static so I can call fetchAll on the Product class and not the class object
  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
