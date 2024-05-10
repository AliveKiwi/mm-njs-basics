const express = require('express');

const router = express.Router();

// We are using get method to send the form, and action in form /product call post middleware
router.get('/add-product', (req, res, next) => {
  console.log('In second middleware');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.post('/product', (req, res, next) => {
  // req.body won't work by default it need to be parsed by bodyParser
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
