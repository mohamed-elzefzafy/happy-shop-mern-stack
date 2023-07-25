const express = require('express');
const { getProducts, createProduct, getOneProduct, updateProduct, deleteProduct, updateProductImages, resizeImageProduct } = require('../controllers/productController');
const { createProductValidator, getProductValidator, updateProductValidator, deleteProductValidator } = require('../utils/validator/productValidator');

const router = express.Router();

router.route("/").get(getProducts).post( updateProductImages , resizeImageProduct, createProductValidator , createProduct);
router.route("/:id").get(getProductValidator , getOneProduct)
.put(updateProductImages , resizeImageProduct , updateProductValidator , updateProduct).delete(deleteProductValidator , deleteProduct);


module.exports = router;