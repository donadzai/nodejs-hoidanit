const express = require('express');
const router = express.Router();

const storedController = require('../controller/storedController');

router.get('/edit/:id', storedController.editUser);
router.put('/edit', storedController.updateUser);
router.delete('/delete/:id', storedController.deleteUser);
router.get('/', storedController.getUser);

module.exports = router;
