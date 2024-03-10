const express = require('express');
const router = express.Router();
const editUserController = require('../controller/editUserController');

router.put('/', editUserController.editUser);

module.exports = router;
