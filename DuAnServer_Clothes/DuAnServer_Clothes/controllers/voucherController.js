let vouchers = [];

const createVoucher = (req, res) => {
  const newVoucher = { id: vouchers.length + 1, ...req.body };
  vouchers.push(newVoucher);
  res.status(201).json(newVoucher);
};

const getVouchers = (req, res) => {
  res.status(200).json(vouchers);
};

const updateVoucher = (req, res) => {
  const { id } = req.params;
  const voucherIndex = vouchers.findIndex(v => v.id == id);
  
  if (voucherIndex !== -1) {
    vouchers[voucherIndex] = { ...vouchers[voucherIndex], ...req.body };
    res.status(200).json(vouchers[voucherIndex]);
  } else {
    res.status(404).json({ message: 'Voucher không tìm thấy' });
  }
};

const deleteVoucher = (req, res) => {
  const { id } = req.params;
  const voucherIndex = vouchers.findIndex(v => v.id == id);
  
  if (voucherIndex !== -1) {
    vouchers.splice(voucherIndex, 1);
    res.status(200).json({ message: 'Voucher đã bị xóa' });
  } else {
    res.status(404).json({ message: 'Voucher không tìm thấy' });
  }
};

module.exports = { createVoucher, getVouchers, updateVoucher, deleteVoucher };
