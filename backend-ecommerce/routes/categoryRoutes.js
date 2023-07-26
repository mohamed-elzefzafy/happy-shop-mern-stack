const express = require('express');
const { getCategories, createCategory, getOneCategy, updateCategory, 
  deleteCategory, 
  uploadCategoryImage,
  resizeImageCategory} = require('../controllers/categoryControler');
const { getCategoryValidator, createCategoryValidator,
   updateCategoryValidator, deleteCategoryValidator } = require('../utils/validator/categoryValidator');
const subCategoryRoute = require("./subCategoryRoutes");
const { protect } = require('../controllers/authController');
const router = express.Router();


// Nested route
router.use("/:categoryId/subcategories" , subCategoryRoute);



router.route("/").get(getCategories).post( protect , uploadCategoryImage ,resizeImageCategory , createCategoryValidator ,  createCategory);
router.route("/:id")
.get(getCategoryValidator, getOneCategy)
.put(uploadCategoryImage,  resizeImageCategory, updateCategoryValidator , updateCategory)
.delete(deleteCategoryValidator,deleteCategory);



module.exports = router;