let returns = [];

const createReturn = (req, res) => {
  const newReturn = { id: returns.length + 1, ...req.body };
  returns.push(newReturn);
  res.status(201).json(newReturn);
};

const getReturns = (req, res) => {
  res.status(200).json(returns);
};

const updateReturn = (req, res) => {
  const { id } = req.params;
  const returnIndex = returns.findIndex(r => r.id == id);
  
  if (returnIndex !== -1) {
    returns[returnIndex] = { ...returns[returnIndex], ...req.body };
    res.status(200).json(returns[returnIndex]);
  } else {
    res.status(404).json({ message: 'Yêu cầu trả hàng không tìm thấy' });
  }
};

const deleteReturn = (req, res) => {
  const { id } = req.params;
  const returnIndex = returns.findIndex(r => r.id == id);
  
  if (returnIndex !== -1) {
    returns.splice(returnIndex, 1);
    res.status(200).json({ message: 'Yêu cầu trả hàng đã bị hủy' });
  } else {
    res.status(404).json({ message: 'Yêu cầu trả hàng không tìm thấy' });
  }
};

module.exports = { createReturn, getReturns, updateReturn, deleteReturn };
