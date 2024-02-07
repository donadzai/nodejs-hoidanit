const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/', userController.handleLogin);

module.exports = router;
