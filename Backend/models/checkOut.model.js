const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
  shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  shippingMethod: { 
    type: String, 
    enum: ["Free Shipping", "Express Shipping"], 
    default: "Free Shipping" 
  },
  paymentMethod: { 
    type: String, 
    enum: ["COD", "Bank Deposit"], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "failed"], 
    default: "pending" 
  },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Checkout", checkoutSchema);
