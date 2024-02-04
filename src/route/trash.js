const express = require('express');
const router = express.Router();

const trashController = require('../controller/trashController');

router.put('/restore/:id', trashController.restoreUser);
router.delete('/force/:id', trashController.forceUser);
router.get('/', trashController.getTrashUser);

module.exports = router;
