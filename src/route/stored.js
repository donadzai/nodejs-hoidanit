const express = require('express');
const router = express.Router();

const storedController = require('../controller/storedController');

router.get('/', storedController.getUser);

module.exports = router;
