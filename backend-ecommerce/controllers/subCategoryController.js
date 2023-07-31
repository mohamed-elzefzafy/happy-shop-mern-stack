const SubCategoryModel = require("../models/subCategoryModel");
const factory = require("./handlerFactory");



    // nested route (create)
exports.setCategoryIdToBody = (req , res , next) => {
  if(!req.body.category) 
  {
    req.body.category = req.params.categoryId
  }
  next();
}
/**
 * @desc    create subCategory
 * @route   /api/v1/subcategories
 * @method  POST
 * @access  private /Admin - Manger
 */
exports.createSubCategory = factory.createOne(SubCategoryModel);





/**
 * @desc    get list of subCategory
 * @route   /api/v1/subcategories
 * @method  GET
 * @access  public
 */
    // nested route (GET)

exports.createFilterObj = (req , res , next) => {
  let filterObject = {};
  if(req.params.categoryId)
  {
    filterObject = {category : req.params.categoryId}
    req.filterObject = filterObject
  }

  next();
}
exports.getSubCategories = factory.getAll(SubCategoryModel);

/**
 * @desc    get one specific subCategory
 * @route   /api/v1/subcategories/:id
 * @method  GET
 * @access  public
 */

exports.getOneSubCategory =  factory.getOneById(SubCategoryModel);


/**
 * @desc    Update specific subCategory
 * @route   /api/v1/subcategories/:id
 * @method  PUT
 * @access  private  /Admin - Manger
 */

exports.updateSubCategory = factory.updateOne(SubCategoryModel);

/**
 * @desc    delete specific subCategory
 * @route   /api/v1/subcategories/:id
 * @method  DELETE
 * @access  private /Admin 
 */


exports.deleteSubCategory = factory.deleteOne(SubCategoryModel)
