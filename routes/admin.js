const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// We are using get method to send the form, and action in form /add-product call post middleware
router.get('/add-product', (req, res, next) => {
  // The path must be an absolute path
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  // req.body won't work by default it need to be parsed by bodyParser
  console.log(req.body);
  res.redirect('/shop');
});

module.exports = router;
