const mongoose = require('mongoose');

const exchangeSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product' // Nếu bạn có một model Product
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Nếu bạn có một model User
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], // Trạng thái có thể có
        default: 'pending'
    },
}, { timestamps: true }); // Tự động thêm trường createdAt và updatedAt

const Exchange = mongoose.model('Exchange', exchangeSchema);

module.exports = Exchange;
