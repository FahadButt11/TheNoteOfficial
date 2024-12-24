const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Link to User Schema
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true, // Link to Product Schema
      },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  shippingAddress: {
    country: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    apartment: { type: String, default: '' }, // Optional field
    city: { type: String, required: true },
    postalCode: { type: String, default: '' }, // Optional field
    phone: { type: String, required: true },
  },
  contact: {
    emailOrPhone: { type: String, required: true }, // Email or phone entered at checkout
    subscribeToNews: { type: Boolean, default: false }, // Checkbox for news subscription
  },
  shippingMethod: {
    type: String,
    enum: ['Standard Shipping', 'Express Shipping', 'Same Day Delivery'],
    required: true,
    default: 'Standard Shipping', // Default shipping option
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'PayPal', 'Cash on Delivery', 'Bank Transfer'],
    required: true,
  },
  totalAmount: { type: Number, required: true }, // Total price of the order
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
