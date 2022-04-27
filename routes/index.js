const express = require('express')
const mainController = require ('../controllers/MainController.js')
const router = express.Router()

router.get('/', mainController.home);
router.get('/about', mainController.about)

module.exports = router;