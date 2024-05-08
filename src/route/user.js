const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/trash', userController.getTrashUser);
router.put('/restore/:id', userController.restoreUser);
router.get('/', userController.getUser);

module.exports = router;
