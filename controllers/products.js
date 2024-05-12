const products = [];

exports.getAddProduct = (req, res, next) => {
  // The path must be an absolute path
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product', // For pug & ejs active class
    // formCSS: true, // For handlebars
    // productCSS: true, // For handlebars
    // activeAddProduct: true, // For handlebars
    // layout: 'main-layout', // For handlebars to specify a particular file for layout
  });
};

exports.postAddProduct = (req, res, next) => {
  // req.body won't work by default it need to be parsed by bodyParser
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  // The path must be an absolute path
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  res.render('shop', {
    products: products, // Common for all
    pageTitle: 'Shop', // Common for all
    path: '/', // For pug & ejs active class
    // hasProducts: adminData.products.length > 0, // For handlebars
    // productCSS: true, // For handlebars
    // activeShop: true, // For handlebars
    // layout: 'main-layout', // For handlebars to specify a particular file for layout
  });
};
