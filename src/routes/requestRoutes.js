'use strict';

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

router.post('/', requestController.create);
router.get('/', requestController.findAll);
router.get('/:id', requestController.findById);
router.put('/:id', requestController.updateById);
router.delete('/:id', requestController.deleteById);

module.exports = router;