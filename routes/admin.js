const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// We are using get method to send the form, and action in form /add-product call post middleware
router.get('/add-product', (req, res, next) => {
  // The path must be an absolute path
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  // req.body won't work by default it need to be parsed by bodyParser
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
