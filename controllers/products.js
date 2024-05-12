const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product.ejs', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  // req.body won't work by default it need to be parsed by bodyParser
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // Internall fetchAll will call => cb(JSON.parse(fileContent));
  // Meaning (JSON.parse(fileContent)) => { is being exectued as callback when we execute fetchAll
  //     res.render('shop', {
  //     products: products,
  //     pageTitle: 'Shop',
  //     path: '/',
  //   });
  // }

  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};
