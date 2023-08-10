const factory = require("./handlerFactory");
const reviewModel = require("../models/reviewModel");






/**
 * @desc    get list of review
 * @route   /api/v1/reviews
 * @method  GET
 * @access  public
 */
exports.getReviews =  factory.getAll(reviewModel , "reviewModel");


/**
 * @desc    get specific review by id
 * @route   /api/v1/reviews/:id
 * @method  GET
 * @access  public
 */
exports.getOneReview = factory.getOneById(reviewModel)


/**
 * @desc    create review
 * @route   /api/v1/reviews
 * @method  POST
 * @access  private /Protect / user
 */


exports.createReview = factory.createOne(reviewModel)



/**
 * @desc    update review
 * @route   /api/v1/reviews/:id
 * @method  PUT
 * @access  private /Protect / user
 */


exports.updateReview = factory.updateOne(reviewModel)


/**
 * @desc    Delete review
 * @route   /api/v1/reviews/:id
 * @method  DELETE
 * @access  private /Protect / user Admin Manager
 */


exports.deleteReview = factory.deleteOne(reviewModel)
