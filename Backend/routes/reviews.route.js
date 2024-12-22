// const express = require('express');
// const Review = require('../models/Review');
// const Product = require('../models/Product');
// const router = express.Router();

// // Add Review
// router.post('/:productId', async (req, res) => {
//     const { productId } = req.params;
//     const { rating, reviewText } = req.body;
//     try {
//         const review = new Review({ product: productId, rating, reviewText });
//         await review.save();

//         const product = await Product.findById(productId);
//         product.reviews.push(review._id);
//         await product.save();

//         res.status(201).json({ message: 'Review added successfully', review });
//     } catch (err) {
//         res.status(500).json({ message: 'Error adding review', error: err.message });
//     }
// });

// module.exports = router;
const express = require('express');
const Review = require('../models/Review'); // Adjust path to the Review schema
const router = express.Router();

// Add a Review
router.post('/add', async (req, res) => {
    try {
        const { product, user, rating, comment } = req.body;

        // Validate required fields
        if (!product || !user || !rating) {
            return res.status(400).json({ message: 'Product, user, and rating are required.' });
        }

        // Check if the rating is within the valid range
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
        }

        // Create a new review
        const newReview = new Review({
            product,
            user,
            rating,
            comment,
        });

        // Save the review to the database
        const savedReview = await newReview.save();
        res.status(201).json({ message: 'Review added successfully!', review: savedReview });
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ message: 'Error adding the review. Please try again later.' });
    }
});


router.get('/',async (req,res)=>{
    try {
        let reviews= await Review.find();
        res.status(201).json(reviews);

        
    } catch (error) {

        res.status(500).json(error.message);

        
    }
})





module.exports = router;
