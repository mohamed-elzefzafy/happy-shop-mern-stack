const express = require('express');
const { protect, allowedTo } = require('../controllers/authController');
const { addAddress, removeAddress, getLoggedUserAddress, updateLoggedUserAddress, getLoggedUserSpecificAddress } = require('../controllers/addressController');
const router = express.Router();



router.use(protect , allowedTo("user") )

router.route("/").post( addAddress).get( getLoggedUserAddress)
router.route("/:addressId").delete( removeAddress).put(updateLoggedUserAddress).get(getLoggedUserSpecificAddress);

module.exports = router;
