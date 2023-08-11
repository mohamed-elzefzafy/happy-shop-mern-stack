
const express = require("express");
const { createSubCategory, getSubCategories, getOneSubCategory, 
  updateSubCategory, deleteSubCategory, setCategoryIdToBody, createFilterObj, createFilterObjCategory } = require("../controllers/subCategoryController");
const { createSubCategoryValidator, getSubCategoryValidator, 
     updateSubCategoryValidator, deleteSubCategoryValidator } = require("../utils/validator/subCategoryValidator");
const { protect, allowedTo } = require("../controllers/authController");

const router = express.Router({mergeParams : true});



router.route("/").post(protect , allowedTo("admin" , "manger" ) , setCategoryIdToBody , createSubCategoryValidator, createSubCategory)
.get( createFilterObjCategory , getSubCategories);
router.route("/:id").get(getSubCategoryValidator , getOneSubCategory )
.put(protect , allowedTo("admin" , "manger" ) , updateSubCategoryValidator , updateSubCategory)
.delete(protect , allowedTo("admin") , deleteSubCategoryValidator ,deleteSubCategory);


module.exports = router;