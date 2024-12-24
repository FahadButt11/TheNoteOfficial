const express = require('express');
const Order = require('../models/orders.model');
const router = express.Router();


// Place a New Order
router.post('/', async (req, res) => {
    try {
      const {
        products,
        shippingAddress,
        contact,
        shippingMethod,
        paymentMethod,
        totalAmount,
      } = req.body;
  
      const order = new Order({
        products,
        shippingAddress,
        contact,
        shippingMethod,
        paymentMethod,
        totalAmount
      });
  
      await order.save();
      res.status(201).json({ message: 'Order placed successfully', order });
    } catch (err) {
      res.status(500).json({ message: 'Error placing order', error: err.message });
    }
  });

module.exports = router;
