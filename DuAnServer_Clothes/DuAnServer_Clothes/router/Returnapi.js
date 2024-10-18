const express = require('express');
const router = express.Router();
const { createReturn, getReturns, updateReturn, deleteReturn } = require('../controllers/returnController');

router.post('/returns', createReturn);

router.get('/returns', getReturns);

router.put('/returns/:id', updateReturn);

router.delete('/returns/:id', deleteReturn);

module.exports = router;
