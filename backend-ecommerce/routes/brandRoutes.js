const express = require('express');
const { getBrands,  createBrand, getOneBrand, updateBrand, deleteBrand, uploadBrandImage, resizeImageBrand } = require('../controllers/brandControler');
const { createBrandValidator, getBrandValidator,
   updateBrandValidator, deleteBrandValidator } = require('../utils/validator/brandValidator');

const router = express.Router();




router.route("/").get(getBrands).post(uploadBrandImage , resizeImageBrand , createBrandValidator ,  createBrand);
router.route("/:id")
.get(getBrandValidator, getOneBrand)
.put(uploadBrandImage , resizeImageBrand ,updateBrandValidator , updateBrand)
.delete(deleteBrandValidator, deleteBrand);









module.exports = router;