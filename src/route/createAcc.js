const express = require('express');
const router = express.Router();
const createAccController = require('../controller/createAccController');

router.post('/', createAccController.createAcc);
router.get('/', createAccController.createAccDisplay);

module.exports = router;
