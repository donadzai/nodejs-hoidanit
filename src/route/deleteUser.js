const express = require('express');
const router = express.Router();
const deleteUserController = require('../controller/deleteUserController');

router.delete('/:id', deleteUserController.softDeleteUser);
router.delete('/destroy/:id', deleteUserController.destroyUser);

module.exports = router;
