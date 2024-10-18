const express = require('express');
const router = express.Router();
const Exchange = require('./exchangeModel'); // Import model Exchange

// POST /exchanges: Tạo yêu cầu trao đổi
router.post('/exchanges', async (req, res) => {
    try {
        const { productId, userId, reason } = req.body;
        const newExchange = new Exchange({ productId, userId, reason });
        await newExchange.save();
        res.status(201).json(newExchange);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo yêu cầu trao đổi', error: error.message });
    }
});

// GET /exchanges: Lấy danh sách yêu cầu trao đổi
router.get('/exchanges', async (req, res) => {
    try {
        const exchanges = await Exchange.find().populate('productId userId'); // Kết hợp dữ liệu từ Product và User
        res.json(exchanges);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách yêu cầu trao đổi', error: error.message });
    }
});

// PUT /exchanges/:id: Cập nhật yêu cầu trao đổi
router.put('/exchanges/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    try {
        const exchange = await Exchange.findByIdAndUpdate(id, { status }, { new: true });
        
        if (!exchange) {
            return res.status(404).json({ message: 'Yêu cầu trao đổi không tồn tại' });
        }

        res.json(exchange);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật yêu cầu trao đổi', error: error.message });
    }
});

// DELETE /exchanges/:id: Hủy yêu cầu trao đổi
router.delete('/exchanges/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const exchange = await Exchange.findByIdAndDelete(id);
        
        if (!exchange) {
            return res.status(404).json({ message: 'Yêu cầu trao đổi không tồn tại' });
        }

        res.status(204).send(); // Trả về trạng thái 204 No Content
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi hủy yêu cầu trao đổi', error: error.message });
    }
});

module.exports = router;
