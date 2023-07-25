
const express = require("express");
const { createSubCategory, getSubCategories, getOneSubCategory, 
  updateSubCategory, deleteSubCategory, setCategoryIdToBody, createFilterObj } = require("../controllers/subCategoryController");
const { createSubCategoryValidator, getSubCategoryValidator, 
     updateSubCategoryValidator, deleteSubCategoryValidator } = require("../utils/validator/subCategoryValidator");

const router = express.Router({mergeParams : true});



router.route("/").post(setCategoryIdToBody , createSubCategoryValidator, createSubCategory)
.get( createFilterObj , getSubCategories);
router.route("/:id").get(getSubCategoryValidator , getOneSubCategory )
.put(updateSubCategoryValidator , updateSubCategory)
.delete(deleteSubCategoryValidator ,deleteSubCategory);


module.exports = router;