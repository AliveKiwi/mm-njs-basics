const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');
router.get('/', (req, res, next) => {
  // The path must be an absolute path
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  res.render('shop', {
    products: adminData.products, // Common for all
    pageTitle: 'Shop', // Common for all
    path: '/', // For pug & ejs active class
    // hasProducts: adminData.products.length > 0, // For handlebars
    // productCSS: true, // For handlebars
    // activeShop: true, // For handlebars
    // layout: 'main-layout', // For handlebars to specify a particular file for layout
  });
});

module.exports = router;
