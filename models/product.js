const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

console.log(rootDir);

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const filePath = path.join(rootDir, 'data', 'products.json');
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      // !err read as if no error
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // Using static so I can call fetchAll on the Product class and not the class object
  static fetchAll() {
    const filePath = path.join(rootDir, 'data', 'products.json');

    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
