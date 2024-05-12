const path = require('path');
const express = require('express');

const productsController = require('../controllers/products');
const router = express.Router();

// We are using get method to send the form, and action in form /add-product call post middleware
router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
