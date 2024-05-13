const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');
const router = express.Router();

// We are using get method to send the form, and action in form /add-product call post middleware
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

module.exports = router;
