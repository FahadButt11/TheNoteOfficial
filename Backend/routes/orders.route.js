const express = require('express');
const Order = require('../models/orders.model');
const router = express.Router();


// Place a New Order
router.post('/', async (req, res) => {
    try {
        const order = req.body;
        console.log(order.user);
        console.log(order.shippingAddress);
        console.log(order.shippingMethod);
        console.log(order.paymentMethod);

        // Validate required fields
      
        
        if (!order.shippingAddress || !order.contact || !order.paymentMethod || !order.shippingMethod ) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        const total = order.products.reduce((total, item) => total + item.price * item.quantity, 0);
        // for(let i=0;i<order.products.length;i++){
        //     total += order.products[i].product.price * order.products[i].quantity;

        // }7750

        // var total = order.products
        // .reduce((total, item) => total + item.price * 1, 0);
        order.totalAmount=total;

        // Create a new order
        const newOrder = new Order(order);

        // Save the order to the database
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully!', newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Error placing the order. Please try again later.' });
    }
});

module.exports = router;
