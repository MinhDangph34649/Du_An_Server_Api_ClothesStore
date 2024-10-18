const express = require('express');
const router = express.Router();
const { getVoucherDetail } = require('../controllers/voucherDetailController');

router.get('/vouchers/:id', getVoucherDetail);

module.exports = router;
