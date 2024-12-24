const express= require('express');
const router= express.Router();
const Orders= require("../../models/orders.model");


router.get('/orders', async (req,res )=> {

    
    try {

        let orders = await Orders.find();
        res.status(200).json(orders);

        
    } catch (err) {
        res.status(500).json({
            message:"error fetching orders",
            error: err.message
        });
        
    }






});


// Change Order Status
router.put('/:orderId/changeStatus', async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        // Validate the new status
        const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: `Invalid status. Valid statuses are: ${validStatuses.join(', ')}` });
        }

        // Find the order and update its status
        const updatedOrder = await Orders.findByIdAndUpdate(
            orderId,
            { status },
            { new: true } // Return the updated order
        );

        // If the order is not found
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        res.status(200).json({ message: 'Order status updated successfully!', order: updatedOrder });
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ message: 'Error updating the order status. Please try again later.' });
    }
});



module.exports=router;
