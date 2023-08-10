const express = require('express');
const { getReviews, createReview, getOneReview, updateReview, deleteReview } = require('../controllers/reviewControler');
const { protect, allowedTo } = require('../controllers/authController');
const { createReviewValidator, getOneReviewValidator, updateReviewValidator, deleteReviewValidator } = require('../utils/validator/reviewValidator');

const router = express.Router();




router.route("/").get(getReviews).post( protect , allowedTo("user") , createReviewValidator , createReview);
router.route("/:id")
.get(getOneReviewValidator , getOneReview)
.put(protect , allowedTo("user") , updateReviewValidator , updateReview)
.delete(protect , allowedTo("user" , "manger" , "admin") , deleteReviewValidator  , deleteReview);









module.exports = router;