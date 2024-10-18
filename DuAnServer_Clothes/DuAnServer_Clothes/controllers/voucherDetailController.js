let vouchers = [
    { id: 1, code: 'DISCOUNT10', discount: 10 },
    { id: 2, code: 'DISCOUNT20', discount: 20 }
  ];
  
  const getVoucherDetail = (req, res) => {
    const { id } = req.params;
    const voucher = vouchers.find(v => v.id == id);
    
    if (voucher) {
      res.status(200).json(voucher);
    } else {
      res.status(404).json({ message: 'Voucher không tìm thấy' });
    }
  };
  
  module.exports = { getVoucherDetail };
  