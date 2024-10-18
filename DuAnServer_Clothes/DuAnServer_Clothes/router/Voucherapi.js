const express = require('express');
const router = express.Router();
const { createVoucher, getVouchers, updateVoucher, deleteVoucher } = require('../controllers/voucherController');

router.post('/vouchers', createVoucher);

router.get('/vouchers', getVouchers);

router.put('/vouchers/:id', updateVoucher);

router.delete('/vouchers/:id', deleteVoucher);

module.exports = router;
