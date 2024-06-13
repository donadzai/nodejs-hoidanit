const express = require('express');
const router = express.Router();
const allCodesController = require('../controller/allCodesController');

router.get('/:type', allCodesController.allcodes);

module.exports = router;
