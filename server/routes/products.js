const express = require('express');
const router = express.Router();
const {
    createProduct,
    getOne,
    findAllProduct,
    updateProduct,
    deleteProduct } = require('../controllers/product');

router.route('/products').post(createProduct);

router.route('/products/:id').get(getOne);

router.route('/products').get(findAllProduct);

router.route('/products/:id').post(updateProduct);

router.route('/products/:id').delete(deleteProduct);

module.exports = router;