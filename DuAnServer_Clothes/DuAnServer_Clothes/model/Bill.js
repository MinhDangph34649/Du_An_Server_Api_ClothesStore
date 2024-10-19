const mongoose = require("mongoose");

const Bill = new mongoose.Schema(
  {
   userId:{type:Number},
  orderId:{type:Number},
  paymentdate:{type:Date},
  status:{type:String},
  totalamount:{type:Number},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bill", Bill);