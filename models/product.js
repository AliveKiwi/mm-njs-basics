const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  // Using static so I can call fetchAll on the Product class and not the class object
  static fetchAll() {
    return products;
  }
};
