const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController');

router.get('/', doctorController.getAllTopDoctors);

module.exports = router;
