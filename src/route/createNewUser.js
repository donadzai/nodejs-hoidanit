const express = require('express');
const router = express.Router();

const createNewUserController = require('../controller/createNewUserController');

router.post('/', createNewUserController.createNewUser);

module.exports = router;
