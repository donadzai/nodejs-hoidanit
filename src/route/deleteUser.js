const express = require('express');
const router = express.Router();
const deleteUserController = require('../controller/deleteUserController');

router.delete('/destroy', deleteUserController.destroyUser);
router.delete('/', deleteUserController.softDeleteUser);

module.exports = router;
