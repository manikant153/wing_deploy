const express = require('express');
const router = express.Router();
const mobileController = require('../controllers/mobileController');
const upload = require('../config/multerConfig');

// Route to display all mobiles
router.get('/mobile', mobileController.mobile);

// Route to show details of a clicked mobile
router.get('/add-mobile/:id', mobileController.mobiledetails);

// Route to update mobile details
router.put('/mobile/item/:id', mobileController.mobileUpdatedetails);

// Route to add a new mobile (if needed)
router.get('/add-mobile', mobileController.addMobileView); // You will need to create this function in the controller
router.post('/add-mobile',upload.single('image'), mobileController.addMobile); // You will need to create this function in the controller

module.exports = router;
