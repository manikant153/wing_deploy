const express = require('express');
const router = express.Router();

const homeController = require('../controllers/mainController');

router.get('/',homeController.homePage);
router.get('/about',homeController.AboutPage);


module.exports = router;