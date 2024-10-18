// router/Addressapi.js
const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

// Thêm địa chỉ mới
router.post('/addresses', async (req, res) => {
    const { userId, street, city, district, ward, country } = req.body;

    try {
        const newAddress = new Address({
            userId,
            street,
            city,
            district,
            ward,
            country,
        });

        await newAddress.save();
        res.status(201).json(newAddress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lấy danh sách địa chỉ của người dùng
router.get('/addresses', async (req, res) => {
    const { userId } = req.query;

    try {
        const addresses = await Address.find({ userId });
        res.status(200).json(addresses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Cập nhật địa chỉ
router.put('/addresses/:id', async (req, res) => {
    const { id } = req.params;
    const { street, city, district, ward, country } = req.body;

    try {
        const updatedAddress = await Address.findByIdAndUpdate(
            id,
            { street, city, district, ward, country },
            { new: true } // Trả về địa chỉ đã được cập nhật
        );

        if (!updatedAddress) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(200).json(updatedAddress);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Xóa địa chỉ
router.delete('/addresses/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAddress = await Address.findByIdAndDelete(id);

        if (!deletedAddress) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(204).send(); // Thành công nhưng không trả về nội dung
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
