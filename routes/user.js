const express = require('express');
const router = express.Router();
const path = require('path');

// the .. defines how many steps forward
const HOMEDIR  = path.join(__dirname, '..');
var userController = require(path.join(HOMEDIR, 'controllers', 'user'));

router.get('/', userController.getList);
router.get('/:id', userController.getDetails);

module.exports = router;