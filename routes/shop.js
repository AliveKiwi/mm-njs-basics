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
    products: adminData.products,
    pageTitle: 'Shop',
    path: '/',
  });
});

module.exports = router;
